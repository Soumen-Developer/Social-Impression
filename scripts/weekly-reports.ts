import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("📊 Generating weekly reports...");

  const oneWeekAgo = new Date();
  oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);

  // New users this week
  const newUsers = await prisma.user.count({
    where: {
      createdAt: { gte: oneWeekAgo },
    },
  });

  // New artist applications
  const newApplications = await prisma.artistApplication.count({
    where: {
      createdAt: { gte: oneWeekAgo },
    },
  });

  // Projects started this week
  const newProjects = await prisma.project.count({
    where: {
      createdAt: { gte: oneWeekAgo },
    },
  });

  // Projects completed this week
  const completedProjects = await prisma.project.count({
    where: {
      status: "Completed",
      updatedAt: { gte: oneWeekAgo },
    },
  });

  // Revenue this week
  const payments = await prisma.payment.findMany({
    where: {
      status: "PAID",
      paidAt: { gte: oneWeekAgo },
    },
    select: { amount: true },
  });

  const revenue = payments.reduce((sum, p) => sum + p.amount, 0);

  // Active projects by stage
  const activeProjects = await prisma.project.groupBy({
    by: ["stage"],
    where: {
      status: { in: ["In production", "In marketing", "Queued"] },
    },
    _count: true,
  });

  // Support tickets this week
  const newTickets = await prisma.supportTicket.count({
    where: {
      createdAt: { gte: oneWeekAgo },
    },
  });

  const resolvedTickets = await prisma.supportTicket.count({
    where: {
      status: "Resolved",
      updatedAt: { gte: oneWeekAgo },
    },
  });

  console.log("\n📈 Weekly Report - " + new Date().toLocaleDateString());
  console.log("=".repeat(50));
  console.log(`👥 New Users: ${newUsers}`);
  console.log(`📝 New Artist Applications: ${newApplications}`);
  console.log(`🚀 New Projects Started: ${newProjects}`);
  console.log(`✅ Projects Completed: ${completedProjects}`);
  console.log(`💰 Revenue: ₹${revenue.toLocaleString("en-IN")}`);
  console.log(`🎫 New Tickets: ${newTickets}`);
  console.log(`✅ Resolved Tickets: ${resolvedTickets}`);
  console.log("\n📋 Active Projects by Stage:");
  activeProjects.forEach((p) => {
    console.log(`   ${p.stage}: ${p._count}`);
  });
  console.log("=".repeat(50));

  // In production, you would email this report or post to Slack
  // await sendReportEmail(reportData);
  // await postToSlack(reportData);

  console.log("✅ Weekly report generated!");
}

main()
  .catch((e) => {
    console.error("❌ Weekly report failed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });