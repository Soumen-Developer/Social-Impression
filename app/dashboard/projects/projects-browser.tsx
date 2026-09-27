"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { projects as allProjects, type Project } from "@/lib/dash";
import { SmartImage } from "@/components/smart-image";
import { Pill, statusTone, Ring } from "@/components/ui";
import { ChipGroup } from "@/components/client";

const filters = ["All", "In production", "In marketing", "Queued", "Completed"];

export function ProjectsBrowser() {
  const [filter, setFilter] = useState("All");
  const list = filter === "All" ? allProjects : allProjects.filter((p) => p.status === filter);

  return (
    <div>
      <ChipGroup options={filters} value={filter} onChange={setFilter} />
      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {list.map((p) => (
          <ProjectCard key={p.id} p={p} />
        ))}
      </div>
      {list.length === 0 ? (
        <p className="mt-16 text-center text-bone-400">No projects in this state. When you purchase a package, it lands here.</p>
      ) : null}
    </div>
  );
}

function ProjectCard({ p }: { p: Project }) {
  return (
    <Link href={`/dashboard/projects/${p.id}`} className="group flex flex-col overflow-hidden rounded-3xl border border-line bg-ink-900 transition-all duration-500 hover:border-iris-500/40 hover:bg-ink-850">
      <div className="relative aspect-[16/7] overflow-hidden">
        <SmartImage src={p.cover} alt={p.name} className="object-cover transition-transform duration-700 group-hover:scale-[1.05]" sizes="(max-width:768px) 100vw, 50vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950/90 via-ink-950/20 to-transparent" />
        <div className="absolute bottom-4 left-5 right-5 flex items-end justify-between">
          <div>
            <h3 className="font-display text-2xl tracking-tight">{p.name}</h3>
            <p className="mt-0.5 font-grotesk text-[11px] uppercase tracking-[0.18em] text-bone-400">{p.pkg}</p>
          </div>
          {p.streams ? (
            <span className="rounded-full border border-signal-400/30 bg-ink-950/70 px-3 py-1 font-grotesk text-[11px] text-signal-300 backdrop-blur">
              {p.streams} streams
            </span>
          ) : null}
        </div>
        <div className="absolute left-5 top-4">
          <Pill tone={statusTone(p.status)}>{p.status}</Pill>
        </div>
      </div>

      <div className="flex flex-1 items-center gap-5 p-5">
        <Ring value={p.progress} size={72} stroke={6} tone={p.progress === 100 ? "#d8f55f" : "#9072ff"} />
        <div className="min-w-0 flex-1">
          <p className="text-sm text-bone-50/90">{p.stage}</p>
          <p className="mt-1 font-grotesk text-[11px] uppercase tracking-wider text-bone-500">Purchased {p.purchased}</p>
          {p.inputsRequired > 0 ? (
            <p className="mt-2.5 inline-flex items-center gap-1.5 rounded-full border border-amber-400/30 bg-amber-400/10 px-3 py-1 font-grotesk text-[11px] text-amber-300">
              <Clock size={11} />
              {p.inputsRequired} input{p.inputsRequired > 1 ? "s" : ""} needed from you
            </p>
          ) : (
            <p className="mt-2.5 inline-flex rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 font-grotesk text-[11px] text-emerald-300">
              Nothing pending
            </p>
          )}
        </div>
        <ArrowRight size={17} className="shrink-0 self-center text-bone-500 transition-all duration-300 group-hover:translate-x-1 group-hover:text-bone-50" />
      </div>
    </Link>
  );
}
