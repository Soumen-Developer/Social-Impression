# Dockerfile for Social Impression - Production Deployment
# Multi-stage build for production with PostgreSQL support
# Optimized for minimal attack surface and fast cold starts

# ============================================
# Stage 1: Base dependencies
# ============================================
FROM node:20-alpine AS base
RUN apk add --no-cache libc6-compat openssl curl
WORKDIR /app

# ============================================
# Stage 2: Install all dependencies (needed for build)
# ============================================
FROM base AS deps
COPY package.json package-lock.json* ./
RUN npm ci && npm cache clean --force

# ============================================
# Stage 3: Build the application
# ============================================
FROM base AS builder
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Remove .env to prevent Next.js from embedding it in standalone output
# Prisma will use the env var at runtime, not build time
RUN rm -f .env

# Generate Prisma Client for PostgreSQL
RUN npx prisma generate

# Build with standalone output
ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=production
RUN npm run build && ls -la .next/standalone/ || echo "standalone not created"

# ============================================
# Stage 4: Production runner (minimal)
# ============================================
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# Create non-root user
RUN addgroup --system --gid 1001 nodejs \
    && adduser --system --uid 1001 nextjs

# Copy only production artifacts
COPY --from=builder --chown=nextjs:nodejs /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
COPY --from=builder --chown=nextjs:nodejs /app/prisma ./prisma

# Copy generated Prisma Client from builder to standalone node_modules
# This ensures Prisma Client is available in the standalone output
COPY --from=builder --chown=nextjs:nodejs /app/node_modules/.prisma ./.next/standalone/node_modules/.prisma
COPY --from=builder --chown=nextjs:nodejs /app/node_modules/@prisma ./.next/standalone/node_modules/@prisma

USER nextjs

EXPOSE 3000

# Health check with proper timeout
HEALTHCHECK --interval=30s --timeout=10s --start-period=10s --retries=3 \
  CMD curl -f http://localhost:3000/api/health || exit 1

CMD ["node", "server.js"]