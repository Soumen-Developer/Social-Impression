"use client";

import Link from "next/link";
import { AdminTopbar } from "@/components/admin-chrome";
import { StatCard, AdminPageHead, BarChart } from "@/components/admin-widgets";
import { Pill, statusTone } from "@/components/ui";
import { adminProjects, adminCalls, adminEnquiries, adminApplications, salesMonths } from "@/lib/admin";

const pipeline = [
  { key: "Input pending", tone: "amber" as const },
  { key: "In progress", tone: "iris" as const },
  { key: "Revision requested", tone: "amber" as const },
  { key: "Delivered", tone: "signal" as const },
  { key: "Completed", tone: "green" as const },
];

export default function AdminHome() {
  const urgent = adminProjects.filter((p) => ["Input pending", "Revision requested"].includes(p.status));
  const newApps = adminApplications.filter((a) => a.status === "New").length;

  return (
    <>
      <AdminTopbar title="Overview" />
      <div className="mt-6">
        <AdminPageHead
          title="Good morning, Operations"
          sub="8 active projects · 2 urgent items · 4 calls scheduled this week."
          action={
            <div className="flex gap-2.5">
              <Link href="/admin/projects" className="rounded-full bg-iris-500 px-5 py-2.5 font-grotesk text-xs text-white transition-colors hover:bg-iris-400">
                + New project
              </Link>
              <Link href="/admin/applications" className="rounded-full border border-line2 px-5 py-2.5 font-grotesk text-xs text-bone-50 transition-colors hover:border-bone-50/40">
                Review applications ({newApps})
              </Link>
            </div>
          }
        />

        {/* KPIs */}
        <div className="grid grid-cols-2 gap-4 xl:grid-cols-5">
          <StatCard label="Active projects" value="8" delta="2 added this week" />
          <StatCard label="Input pending" value="3" delta="1 overdue" tone="amber" />
          <StatCard label="In progress" value="4" delta="on schedule" />
          <StatCard label="Revision requested" value="1" delta="due 27 Aug" tone="amber" />
          <StatCard label="MRR (launch)" value="₹1.6L" delta="+18% vs Jul" tone="signal" />
        </div>

        <div className="mt-6 grid gap-5 xl:grid-cols-[1.5fr_1fr]">
          {/* pipeline */}
          <section className="dash-card p-6">
            <div className="flex items-center justify-between">
              <h2 className="font-grotesk text-xs uppercase tracking-[0.22em] text-bone-400">Project pipeline</h2>
              <Link href="/admin/projects" className="u-link font-grotesk text-[11px] uppercase tracking-wider text-bone-400">
                Open board
              </Link>
            </div>
            <div className="mt-5 grid gap-3 md:grid-cols-5">
              {pipeline.map((col) => {
                const items = adminProjects.filter((p) => p.status === col.key);
                return (
                  <div key={col.key} className="rounded-2xl border border-line bg-ink-850 p-3.5">
                    <div className="flex items-center justify-between">
                      <p className="font-grotesk text-[10px] uppercase tracking-[0.14em] text-bone-400">{col.key}</p>
                      <span className="font-display text-lg">{items.length}</span>
                    </div>
                    <ul className="mt-3 space-y-2">
                      {items.slice(0, 3).map((p) => (
                        <li key={p.id} className="rounded-xl bg-ink-950/70 p-2.5">
                          <p className="truncate text-[12px] text-bone-50/90">{p.song}</p>
                          <p className="mt-0.5 truncate font-grotesk text-[10px] text-bone-500">{p.artist}</p>
                        </li>
                      ))}
                      {items.length === 0 ? <li className="py-2 text-[11px] text-bone-600">—</li> : null}
                    </ul>
                  </div>
                );
              })}
            </div>

            {/* urgent */}
            <div className="mt-6">
              <h3 className="font-grotesk text-xs uppercase tracking-[0.22em] text-bone-400">Urgent items</h3>
              <ul className="mt-3 space-y-2">
                {urgent.map((p) => (
                  <li key={p.id} className="flex flex-wrap items-center gap-3 rounded-xl border border-amber-400/25 bg-amber-400/5 px-4 py-3">
                    <Pill tone="amber">{p.status}</Pill>
                    <span className="text-sm text-bone-50">{p.song}</span>
                    <span className="text-xs text-bone-400">{p.artist} · due {p.due}</span>
                    <span className="ml-auto font-grotesk text-[11px] text-bone-500">{p.owner}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* right rail */}
          <div className="space-y-5">
            <section className="dash-card p-6">
              <h2 className="font-grotesk text-xs uppercase tracking-[0.22em] text-bone-400">Scheduled calls</h2>
              <ul className="mt-4 space-y-2.5">
                {adminCalls.map((c) => (
                  <li key={c.artist + c.time} className="rounded-xl border border-line bg-ink-850 p-3.5">
                    <p className="text-sm text-bone-50/90">{c.title}</p>
                    <p className="mt-0.5 font-grotesk text-[11px] text-bone-500">
                      {c.artist} · {c.time} · {c.mode}
                    </p>
                  </li>
                ))}
              </ul>
            </section>

            <section className="dash-card p-6">
              <h2 className="font-grotesk text-xs uppercase tracking-[0.22em] text-bone-400">Revenue trend</h2>
              <div className="mt-5">
                <BarChart data={salesMonths} height={120} format={(n) => `₹${n}L`} />
              </div>
              <Link href="/admin/sales" className="mt-4 inline-block font-grotesk text-[11px] uppercase tracking-wider text-bone-400 u-link">
                Full sales report
              </Link>
            </section>

            <section className="dash-card p-6">
              <h2 className="font-grotesk text-xs uppercase tracking-[0.22em] text-bone-400">Complaints & enquiries</h2>
              <ul className="mt-4 space-y-2.5">
                {adminEnquiries.map((e) => (
                  <li key={e.subject} className="flex items-center gap-3 rounded-xl border border-line bg-ink-850 px-3.5 py-3">
                    <Pill tone={statusTone(e.mood)}>{e.type}</Pill>
                    <span className="min-w-0 flex-1 truncate text-[13px] text-bone-50/90">{e.subject}</span>
                    <span className="font-grotesk text-[10px] text-bone-500">{e.time}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
