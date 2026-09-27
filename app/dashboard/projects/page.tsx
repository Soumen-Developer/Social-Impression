import type { Metadata } from "next";
import { PageHeader, NextPaymentChip } from "@/components/dash";
import { ProjectsBrowser } from "./projects-browser";

export const metadata: Metadata = { title: "My Projects" };

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        title="My Projects"
        sub="Every release you are building with Social Impression — status, timelines, inputs and deliverables in one place."
        action={<NextPaymentChip />}
      />
      <ProjectsBrowser />
    </>
  );
}
