import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("🔧 Running daily maintenance...");

  // Clean up expired password reset tokens
  const expiredTokens = await prisma.passwordResetToken.deleteMany({
    where: {
      expiresAt: { lt: new Date() },
    },
  });
  console.log(`🗑️ Cleaned up ${expiredTokens.count} expired password reset tokens`);

  // Clean up expired sessions
  const expiredSessions = await prisma.session.deleteMany({
    where: {
      expiresAt: { lt: new Date() },
    },
  });
  console.log(`🗑️ Cleaned up ${expiredSessions.count} expired sessions`);

  // Archive completed projects older than 90 days (optional)
  // const ninetyDaysAgo = new Date();
  // ninetyDaysAgo.setDate(ninetyDaysAgo.getDate() - 90);
  // const oldCompletedProjects = await prisma.project.updateMany({
  //   where: {
  //     status: "Completed",
  //     updatedAt: { lt: ninetyDaysAgo },
  //   },
  //   data: {
  //     // Add archived flag if you add that field
  //   },
  // });
  // console.log(`📦 Archived ${oldCompletedProjects.count} old completed projects`);

  // Update payment intent statuses
  const staleIntents = await prisma.paymentIntent.updateMany({
    where: {
      status: "CREATED",
      createdAt: { lt: new Date(Date.now() - 24 * 60 * 60 * 1000) }, // older than 24 hours
    },
    data: {
      status: "EXPIRED",
    },
  });
  console.log(`⏰ Expired ${staleIntents.count} stale payment intents`);

  console.log("✅ Daily maintenance complete!");
}

main()
  .catch((e) => {
    console.error("❌ Maintenance failed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });