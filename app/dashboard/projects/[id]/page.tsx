import { notFound } from "next/navigation";
import { projects } from "@/lib/dash";
import { ProjectDetail } from "./project-detail";

export function generateStaticParams() {
  return projects.map((p) => ({ id: p.id }));
}

export default async function ProjectDetailPage({ params }: PageProps<"/dashboard/projects/[id]">) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);
  if (!project) notFound();
  return <ProjectDetail project={project} />;
}
