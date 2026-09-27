# Social Impression — System Architecture

Production-grade full-stack build of the artist ecosystem defined in the master prompt.

## Stack

| Layer      | Choice | Notes |
|------------|--------|-------|
| Frontend   | Next.js 16 (App Router) + React 19 + TypeScript + Tailwind v4 | RSC reads hit the service layer directly; all writes go through REST APIs |
| API        | Next.js Route Handlers under `/api/*` | Thin controllers → service layer |
| Services   | `lib/server/services/*` | All business logic lives here, never in route handlers |
| Data       | Prisma ORM + SQLite (`prisma/dev.db`) | Schema modeled for PostgreSQL; provider swap = 1 line in `schema.prisma` |
| Validation | Zod schemas (`lib/server/validation.ts`) | Every mutating endpoint validates input |
| Auth       | Custom sessions: scrypt password hashing, DB-backed session tokens, HttpOnly SameSite cookies | No external dependency; reset tokens hashed + expiring |
| Storage    | Disk-backed vault (`storage/`) behind authorized streaming route | Ownership checked per request; S3 adapter seam in `lib/server/storage.ts` |
| Payments   | Adapter pattern; sandbox gateway + HMAC-signed webhook | Real gateway keys drop into the same intent/webhook contract |
| Jobs/Email | Transport adapters (`lib/server/email.ts` logs locally) | Notification rows written transactionally with events |

## User types & permissions

- **Guest** — public pages, blog, contact/artist application submission.
- **Artist (ROLE ARTIST)** — own dashboard/projects/files/payments/portfolio/tickets only. Every query is scoped by `userId`; cross-tenant access returns 403 (IDOR-safe).
- **Admin (ROLE ADMIN)** — full management surface; every admin action writes an audit log.

## Core flow (happy path)

Application → admin review/selection → onboarding & account creation → package purchase (instalments) → project created from package scope → milestones/inputs/deliverables executed → artist submits inputs → team delivers → revision requested/resolved → approval → project completed → performance reports.

## Entity map (see `prisma/schema.prisma`)

Users, Sessions, PasswordResetTokens, ArtistProfiles, Packages, Addons, Services,
Purchases, Memberships, Projects, Milestones, InputRequests, Deliverables, Revisions,
Payments, PaymentIntents, StoredFiles, Notifications, SupportTickets, TicketMessages,
ArtistApplications, ScheduledCalls, AuditLogs, BlogPosts, Faqs, Settings.

## API catalog (consistent envelope `{success, message, data?, error?}`)

```
POST /api/auth/signup            POST /api/auth/login          POST /api/auth/logout
POST /api/auth/demo              POST /api/auth/forgot         POST /api/auth/reset
GET  /api/auth/me
GET/PATCH /api/me/profile        PATCH /api/me/password        GET /api/me/dashboard
GET  /api/projects               GET /api/projects/[id]
POST /api/projects/[id]/revisions                              POST /api/projects/[id]/inputs
GET/POST /api/files              GET/DELETE /api/files/[id]    GET /api/files/[id]/download
GET  /api/payments               POST /api/payments/intents    POST /api/payments/sandbox-pay
POST /api/payments/webhook       GET/PATCH /api/notifications  POST /api/notifications/read-all
GET/POST /api/support            GET/POST /api/support/[id]
POST /api/applications           GET/PATCH /api/admin/applications
GET  /api/admin/stats            PATCH /api/admin/projects     POST /api/admin/broadcasts
GET  /api/analytics
```

## Security controls

- scrypt (N=16384) hashes, timing-safe verification, generic auth errors
- HttpOnly + SameSite=Lax session cookies, 30-day expiry, server-side revocation
- Zod validation on every mutation; parameterized queries via Prisma (no SQL injection)
- Ownership checks in the service layer (IDOR), role checks at handler entry
- In-memory rate limiting on auth endpoints; upload MIME/size allow-lists; UUID file paths (no traversal)
- Secrets via `.env`; webhook payloads HMAC-SHA256 verified before trust
- Security headers set in `next.config.ts`

## Testing

- Unit: pricing/validation helpers (`npm test`)
- Integration: `scripts/api-tests.mjs` exercises real HTTP against a running server — auth, RBAC, IDOR attempts, project lifecycle, revisions, uploads, payments sandbox + webhook, notifications, tickets, applications, admin-only guards.
