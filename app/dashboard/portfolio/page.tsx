import type { Metadata } from "next";
import { PageHeader } from "@/components/dash";
import { PortfolioManager } from "./portfolio-manager";

export const metadata: Metadata = { title: "Portfolio" };

export default function DashPortfolioPage() {
  return (
    <>
      <PageHeader
        title="Portfolio"
        sub="Your official artist world — a knowledge panel, press kit and listening room in one shareable page. Curate it here."
      />
      <PortfolioManager />
    </>
  );
}
