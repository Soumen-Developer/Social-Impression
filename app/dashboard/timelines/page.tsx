import type { Metadata } from "next";
import Link from "next/link";
import { Check, CircleDashed } from "lucide-react";
import { PageHeader } from "@/components/dash";
import { Pill } from "@/components/ui";
import { projects } from "@/lib/dash";

export const metadata: Metadata = { title: "Timelines" };

const stateStyle = {
  done: { dot: "border-signal-400 bg-signal-400/20 text-signal-300", line: "bg-signal-400/40", text: "text-bone-50/85" },
  active: { dot: "border-iris-400 bg-iris-500/25 text-iris-300 shadow-[0_0_16px_-2px] shadow-iris-500", line: "bg-ink-600", text: "text-iris-300" },
  next: { dot: "border-ink-600 bg-ink-900 text-bone-500", line: "bg-ink-600", text: "text-bone-500" },
} as const;

export default function TimelinesPage() {
  return (
    <>
      <PageHeader
        title="Timelines"
        sub="Every milestone across your active projects, in one honest calendar. Dates move only when you move them — or we re-plan them with you."
      />
      <div className="grid gap-6 xl:grid-cols-2">
        {projects.filter((p) => p.status !== "Completed").map((p) => (
          <section key={p.id} className="dash-card p-6 md:p-7">
            <div className="flex items-center justify-between gap-4">
              <div>
                <Link href={`/dashboard/projects/${p.id}`} className="u-link font-display text-2xl tracking-tight">
                  {p.name}
                </Link>
                <p className="mt-1 font-grotesk text-[11px] uppercase tracking-[0.18em] text-bone-500">{p.pkg}</p>
              </div>
              <Pill tone={p.progress === 100 ? "green" : "iris"}>{p.progress}%</Pill>
            </div>

            <div className="mt-7 space-y-7">
              {p.sections.map((s) => (
                <div key={s.name}>
                  <p className="font-grotesk text-[10px] uppercase tracking-[0.24em] text-bone-500">{s.name}</p>
                  <ol className="mt-3.5 space-y-0">
                    {s.timeline.map((m, i) => {
                      const st = stateStyle[m.state];
                      return (
                        <li key={m.label} className="relative flex gap-3.5 pb-4 last:pb-0">
                          {i < s.timeline.length - 1 ? (
                            <span className={`absolute left-[8px] top-4 h-full w-px ${st.line}`} />
                          ) : null}
                          <span className={`relative z-10 mt-0.5 grid h-[17px] w-[17px] shrink-0 place-items-center rounded-full border-2 ${st.dot}`}>
                            {m.state === "done" ? <Check size={9} /> : m.state === "active" ? <CircleDashed size={9} className="animate-breathe" /> : null}
                          </span>
                          <div className="flex flex-1 flex-wrap items-baseline justify-between gap-x-4">
                            <p className={`text-[13px] ${st.text}`}>{m.label}</p>
                            <p className="font-grotesk text-[10px] uppercase tracking-wider text-bone-500">{m.date}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ol>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      <p className="mt-8 text-sm text-bone-400">
        Completed projects live in <Link href="/dashboard/projects" className="u-link text-bone-50">My Projects</Link>. Want to move a date? Schedule a call with your release manager from the top bar.
      </p>
    </>
  );
}
