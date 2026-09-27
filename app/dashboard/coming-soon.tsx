"use client";

import { useState } from "react";
import { BellRing, Check } from "lucide-react";
import { comingSoon } from "@/lib/dash";
import { Pill } from "@/components/ui";
import { Bars } from "@/components/ui";

const icons = { community: "Users", opportunities: "Compass", education: "GraduationCap" } as const;

export function ComingSoonPage({ id }: { id: "community" | "opportunities" | "education" }) {
  const item = comingSoon.find((c) => c.id === id)!;
  const [notify, setNotify] = useState(false);

  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-line bg-gradient-to-br from-ink-800 via-ink-900 to-ink-950 p-8 md:p-14">
      <div className="pointer-events-none absolute -left-20 -top-24 h-72 w-72 rounded-full bg-iris-500/20 blur-[90px]" />
      <div className="pointer-events-none absolute -bottom-32 right-0 h-72 w-72 rounded-full bg-signal-400/10 blur-[90px]" />

      <div className="relative mx-auto max-w-2xl text-center">
        <Pill tone="signal" className="mx-auto">
          <span className="h-1.5 w-1.5 animate-breathe rounded-full bg-signal-400" />
          Coming soon
        </Pill>
        <h1 className="mt-6 font-display text-4xl md:text-6xl tracking-tight">
          {item.name} is <span className="italic text-iris-300">loading.</span>
        </h1>
        <p className="mx-auto mt-5 max-w-lg text-sm md:text-base leading-relaxed text-bone-400">{item.desc}</p>

        <Bars count={30} className="mx-auto mt-10 h-8 w-44 text-iris-400/70" />

        <ul className="mx-auto mt-10 grid max-w-lg gap-2.5 text-left">
          {item.perks.map((p) => (
            <li key={p} className="flex items-center gap-3 rounded-xl border border-line bg-ink-950/50 px-4 py-3 text-sm text-bone-50/85">
              <span className="h-1.5 w-1.5 rounded-full bg-signal-400" />
              {p}
            </li>
          ))}
        </ul>

        <div className="mt-10">
          {notify ? (
            <p className="inline-flex items-center gap-2 rounded-full border border-signal-400/30 bg-signal-400/10 px-5 py-3 font-grotesk text-xs text-signal-300">
              <Check size={14} /> You&apos;re on the list — we&apos;ll ping you the day it opens.
            </p>
          ) : (
            <button
              onClick={() => setNotify(true)}
              className="inline-flex items-center gap-2 rounded-full bg-bone-50 px-6 py-3.5 font-grotesk text-sm text-ink-900 transition-all hover:bg-white hover:shadow-[0_0_36px_-8px] hover:shadow-iris-500/60"
            >
              <BellRing size={15} />
              Notify me when it launches
            </button>
          )}
        </div>
        <p className="mt-6 font-grotesk text-[11px] uppercase tracking-[0.22em] text-bone-500">
          Members get first access · {icons[id] && ""}Cohort 04 preview
        </p>
      </div>
    </div>
  );
}
