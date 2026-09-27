
import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

// Lazy PrismaClient creation to avoid build-time validation errors
// DATABASE_URL is not available during Next.js build (static generation)
let prisma: PrismaClient | null = null;

function getPrismaClient(): PrismaClient {
  if (!prisma) {
    if (!process.env.DATABASE_URL) {
      throw new Error("DATABASE_URL is not configured");
    }
    prisma = new PrismaClient({
      datasources: {
        db: {
          url: process.env.DATABASE_URL,
        },
      },
    });
  }
  return prisma;
}

export async function GET() {
  let client: PrismaClient | null = null;
  
  try {
    // Test database connection
    client = getPrismaClient();
    await client.$queryRaw`SELECT 1`;
    
    await client.$disconnect();
    client = null;

    return NextResponse.json(
      {
        status: "healthy",
        timestamp: new Date().toISOString(),
        database: "connected",
        uptime: process.uptime(),
        environment: process.env.NODE_ENV,
      },
      { status: 200 }
    );
  } catch (error) {
    if (client) {
      await client.$disconnect().catch(() => {});
    }
    console.error("Health check failed:", error);
    return NextResponse.json(
      {
        status: "unhealthy",
        timestamp: new Date().toISOString(),
        database: "disconnected",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 503 }
    );
  }
}