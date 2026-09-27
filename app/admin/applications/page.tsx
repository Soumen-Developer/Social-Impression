"use client";

import { useState } from "react";
import { ExternalLink, Check, X, Clock } from "lucide-react";
import { AdminTopbar } from "@/components/admin-chrome";
import { AdminPageHead, StatCard } from "@/components/admin-widgets";
import { Pill, statusTone } from "@/components/ui";
import { ChipGroup } from "@/components/client";
import { adminApplications } from "@/lib/admin";

const filters = ["All", "New", "Shortlisted", "Waitlist", "Accepted", "Rejected"];

export default function AdminApplicationsPage() {
  const [filter, setFilter] = useState("All");
  const rows = adminApplications.filter((a) => filter === "All" || a.status === filter);

  return (
    <>
      <AdminTopbar title="Artist Applications" />
      <div className="mt-6">
        <AdminPageHead title="Artist Applications" sub="Cohort 04 · 8 slots · applications reviewed within 48 hours." />

        <div className="grid grid-cols-2 gap-4 xl:grid-cols-4">
          <StatCard label="New" value="2" tone="signal" />
          <StatCard label="Shortlisted" value="1" />
          <StatCard label="Accepted (cohort)" value="6 of 8" tone="signal" />
          <StatCard label="Avg. score" value="81.7" />
        </div>

        <div className="mt-6">
          <ChipGroup options={filters} value={filter} onChange={setFilter} />
        </div>

        <div className="mt-5 space-y-3">
          {rows.map((a) => (
            <section key={a.moniker} className="dash-card flex flex-col gap-4 p-5 md:flex-row md:items-center">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-gradient-to-br from-iris-500 to-iris-600 font-display text-sm text-white">
                {a.moniker.slice(0, 2)}
              </span>
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-2.5">
                  <h3 className="font-display text-xl tracking-tight">{a.name}</h3>
                  <Pill tone={statusTone(a.status)}>{a.status}</Pill>
                </div>
                <p className="mt-1 font-grotesk text-[11px] uppercase tracking-[0.14em] text-bone-500">
                  {a.moniker} · {a.genre} · {a.city} · wants {a.pkg}
                </p>
                <a href={`https://${a.link}`} target="_blank" rel="noreferrer" className="u-link mt-1.5 inline-flex items-center gap-1 font-grotesk text-xs text-iris-300">
                  {a.link} <ExternalLink size={11} />
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="text-center">
                  <p className={`font-display text-2xl ${a.score >= 85 ? "text-signal-300" : a.score >= 75 ? "text-bone-50" : "text-bone-500"}`}>{a.score}</p>
                  <p className="font-grotesk text-[9px] uppercase tracking-wider text-bone-500">score</p>
                </div>
                <button className="grid h-9 w-9 place-items-center rounded-full border border-signal-400/40 text-signal-300 transition-colors hover:bg-signal-400/10" aria-label={`Accept ${a.name}`}>
                  <Check size={15} />
                </button>
                <button className="grid h-9 w-9 place-items-center rounded-full border border-line2 text-bone-400 transition-colors hover:border-amber-400/50 hover:text-amber-300" aria-label={`Waitlist ${a.name}`}>
                  <Clock size={15} />
                </button>
                <button className="grid h-9 w-9 place-items-center rounded-full border border-line2 text-bone-400 transition-colors hover:border-red-400/50 hover:text-red-300" aria-label={`Reject ${a.name}`}>
                  <X size={15} />
                </button>
              </div>
            </section>
          ))}
        </div>
        {rows.length === 0 ? <p className="mt-10 text-center text-sm text-bone-400">No applications in this state.</p> : null}
      </div>
    </>
  );
}
