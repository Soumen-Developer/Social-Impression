"use client";

import { useState } from "react";
import {
  Download, FileAudio, FileArchive, FileImage, FileText, Link2, Check,
  CircleDashed, CircleCheck, Clock, GitPullRequestArrow, X, ArrowLeft,
} from "lucide-react";
import Link from "next/link";
import type { Project } from "@/lib/dash";
import { Pill, statusTone, Ring } from "@/components/ui";
import { SmartImage } from "@/components/smart-image";
import { Tabs, FakeForm } from "@/components/client";

function kindIcon(kind: string) {
  const cls = "text-iris-300";
  if (["WAV", "MP3"].includes(kind)) return <FileAudio size={15} className={cls} />;
  if (["ZIP"].includes(kind)) return <FileArchive size={15} className={cls} />;
  if (["PNG", "JPG"].includes(kind)) return <FileImage size={15} className={cls} />;
  if (["PDF"].includes(kind)) return <FileText size={15} className={cls} />;
  return <Link2 size={15} className={cls} />;
}

export function ProjectDetail({ project }: { project: Project }) {
  const [tab, setTab] = useState(project.sections[0].name);
  const [revisionOpen, setRevisionOpen] = useState(false);
  const section = project.sections.find((s) => s.name === tab) ?? project.sections[0];

  return (
    <div>
      <Link href="/dashboard/projects" className="u-link mb-6 inline-flex items-center gap-2 font-grotesk text-xs uppercase tracking-[0.18em] text-bone-400">
        <ArrowLeft size={14} />
        All projects
      </Link>

      {/* hero */}
      <div className="relative mb-8 overflow-hidden rounded-[2rem] border border-line">
        <div className="absolute inset-0">
          <SmartImage src={project.cover} alt={project.name} className="object-cover opacity-40" sizes="100vw" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-ink-950/95 via-ink-950/70 to-ink-950/30" />
        </div>
        <div className="relative flex flex-col gap-8 p-7 md:flex-row md:items-center md:justify-between md:p-10">
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <h1 className="font-display text-4xl md:text-5xl tracking-tight">{project.name}</h1>
              <Pill tone={statusTone(project.status)}>{project.status}</Pill>
            </div>
            <p className="mt-3 font-grotesk text-xs uppercase tracking-[0.2em] text-bone-400">
              {project.pkg} · purchased {project.purchased}
            </p>
            <p className="mt-2 max-w-lg text-sm text-bone-400">
              Current stage: <span className="text-bone-50">{project.stage}</span>
              {project.streams ? <> · {project.streams} streams and counting</> : null}
            </p>
          </div>
          <Ring value={project.progress} size={120} sub="Complete" tone={project.progress === 100 ? "#d8f55f" : "#9072ff"} />
        </div>
      </div>

      <Tabs tabs={project.sections.map((s) => s.name)} active={tab} onChange={setTab} className="mb-6 max-w-full md:max-w-md" />

      {/* section grid */}
      <div className="grid gap-5 lg:grid-cols-[1.2fr_1fr]">
        {/* inputs + revisions */}
        <div className="space-y-5">
          <section className="dash-card p-6">
            <div className="flex items-center justify-between">
              <h2 className="font-grotesk text-xs uppercase tracking-[0.22em] text-bone-400">Inputs · what we need from you</h2>
              <span className="font-display text-lg text-amber-300">{section.inputs.filter((i) => i.state !== "done").length}</span>
            </div>
            <ul className="mt-4 space-y-2.5">
              {section.inputs.length === 0 ? (
                <li className="rounded-xl border border-line2 bg-ink-850 px-4 py-3 text-sm text-bone-400">Nothing needed yet — this phase has not started.</li>
              ) : (
                section.inputs.map((inp, i) => (
                  <li
                    key={i}
                    className={`flex items-center gap-3 rounded-xl border px-4 py-3 text-sm ${
                      inp.state === "done"
                        ? "border-emerald-400/20 bg-emerald-400/5 text-bone-400"
                        : inp.state === "overdue"
                          ? "border-red-400/30 bg-red-400/5 text-bone-50"
                          : "border-amber-400/25 bg-amber-400/5 text-bone-50"
                    }`}
                  >
                    {inp.state === "done" ? <CircleCheck size={16} className="shrink-0 text-emerald-300" /> : inp.state === "overdue" ? <Clock size={16} className="shrink-0 text-red-300" /> : <CircleDashed size={16} className="shrink-0 text-amber-300" />}
                    <span className="flex-1">{inp.label}</span>
                    {inp.due ? <span className="font-grotesk text-[11px] text-bone-500">{inp.due}</span> : null}
                    {inp.state !== "done" ? (
                      <button className="rounded-full bg-bone-50 px-3.5 py-1.5 font-grotesk text-[11px] text-ink-900 transition-transform active:scale-95">
                        Provide
                      </button>
                    ) : null}
                  </li>
                ))
              )}
            </ul>
          </section>

          <section className="dash-card p-6">
            <div className="flex items-center justify-between">
              <h2 className="font-grotesk text-xs uppercase tracking-[0.22em] text-bone-400">Revisions · {section.name}</h2>
              <span className="font-grotesk text-xs text-bone-400">
                {section.revisions.used} of {section.revisions.limit} used
              </span>
            </div>
            <div className="mt-4 flex gap-1.5">
              {Array.from({ length: section.revisions.limit }).map((_, i) => (
                <span key={i} className={`h-1.5 flex-1 rounded-full ${i < section.revisions.used ? "bg-iris-400" : "bg-ink-700"}`} />
              ))}
            </div>
            <button
              onClick={() => setRevisionOpen(true)}
              className="mt-5 inline-flex items-center gap-2 rounded-full border border-line2 px-5 py-2.5 font-grotesk text-xs tracking-wide text-bone-50 transition-all hover:border-iris-400/60 hover:bg-iris-500/10"
            >
              <GitPullRequestArrow size={14} />
              Request a revision
            </button>
          </section>

          {/* mini timeline */}
          <section className="dash-card p-6">
            <h2 className="font-grotesk text-xs uppercase tracking-[0.22em] text-bone-400">This phase · timeline</h2>
            <ol className="mt-5 space-y-0">
              {section.timeline.map((m, i) => (
                <li key={m.label} className="relative flex gap-4 pb-6 last:pb-0">
                  {i < section.timeline.length - 1 ? (
                    <span className={`absolute left-[9px] top-5 h-full w-px ${m.state === "done" ? "bg-signal-400/40" : "bg-ink-600"}`} />
                  ) : null}
                  <span
                    className={`relative z-10 mt-1 h-[19px] w-[19px] shrink-0 rounded-full border-2 ${
                      m.state === "done"
                        ? "border-signal-400 bg-signal-400/20"
                        : m.state === "active"
                          ? "border-iris-400 bg-iris-500/25 shadow-[0_0_16px_-2px] shadow-iris-500"
                          : "border-ink-600 bg-ink-900"
                    } grid place-items-center`}
                  >
                    {m.state === "done" ? <Check size={10} className="text-signal-300" /> : null}
                  </span>
                  <div className="flex flex-1 items-baseline justify-between gap-3">
                    <p className={`text-sm ${m.state === "active" ? "text-iris-300" : m.state === "done" ? "text-bone-50/85" : "text-bone-500"}`}>{m.label}</p>
                    <p className="font-grotesk text-[11px] uppercase tracking-wider text-bone-500">{m.date}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>
        </div>

        {/* outputs */}
        <section className="dash-card h-fit p-6">
          <h2 className="font-grotesk text-xs uppercase tracking-[0.22em] text-bone-400">Outputs · delivered by Social Impression</h2>
          <ul className="mt-4 space-y-2.5">
            {section.outputs.length === 0 ? (
              <li className="rounded-xl border border-line2 bg-ink-850 px-4 py-3 text-sm text-bone-400">Deliverables will appear here as your team completes them.</li>
            ) : (
              section.outputs.map((o, i) => (
                <li key={i} className="group flex items-center gap-3.5 rounded-xl border border-line bg-ink-850 px-4 py-3.5 transition-colors hover:border-iris-500/40">
                  {kindIcon(o.kind)}
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm text-bone-50/90">{o.label}</p>
                    <p className="font-grotesk text-[10px] uppercase tracking-wider text-bone-500">
                      {o.kind} · {o.date}
                    </p>
                  </div>
                  <button className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-line2 text-bone-400 transition-all hover:border-iris-400/60 hover:text-bone-50" aria-label={`Download ${o.label}`}>
                    <Download size={14} />
                  </button>
                </li>
              ))
            )}
          </ul>
          <div className="mt-5 rounded-xl border border-line bg-ink-950/60 p-4 text-xs leading-relaxed text-bone-400">
            <span className="font-grotesk text-[10px] uppercase tracking-[0.2em] text-signal-300">Section status</span>
            <p className="mt-1.5 text-sm text-bone-50/85">{section.name} is currently: {section.status}.</p>
          </div>
        </section>
      </div>

      {/* revision modal */}
      {revisionOpen ? (
        <div className="fixed inset-0 z-[90] grid place-items-center bg-ink-950/80 p-4 backdrop-blur-sm" onClick={() => setRevisionOpen(false)}>
          <div className="w-full max-w-md rounded-3xl border border-line bg-ink-900 p-7" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between">
              <h3 className="font-display text-2xl tracking-tight">Request a revision</h3>
              <button onClick={() => setRevisionOpen(false)} className="grid h-9 w-9 place-items-center rounded-full border border-line2" aria-label="Close">
                <X size={15} />
              </button>
            </div>
            <p className="mt-2 text-sm text-bone-400">
              {section.revisions.limit - section.revisions.used} round{section.revisions.limit - section.revisions.used === 1 ? "" : "s"} left on {section.name}. Describe the change precisely — it speeds everything up.
            </p>
            <div className="mt-6">
              <FakeForm cta={`Send to team · round ${section.revisions.used + 1}`} success="Revision requested. Your team has been notified and will respond within one working day.">
                <label className="block">
                  <span className="font-grotesk text-[11px] uppercase tracking-[0.18em] text-bone-400">What should change?</span>
                  <textarea required rows={4} className="field mt-2 resize-none" placeholder="e.g. vocals feel buried in the chorus — bring them up 2dB and brighten the reverb" />
                </label>
                <label className="block">
                  <span className="font-grotesk text-[11px] uppercase tracking-[0.18em] text-bone-400">Reference (optional)</span>
                  <input className="field mt-2" placeholder="Link a track or timestamp" />
                </label>
              </FakeForm>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
