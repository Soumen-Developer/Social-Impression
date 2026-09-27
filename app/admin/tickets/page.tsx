"use client";

import { useState } from "react";
import { AdminTopbar } from "@/components/admin-chrome";
import { AdminPageHead } from "@/components/admin-widgets";
import { Pill, statusTone } from "@/components/ui";
import { ChipGroup } from "@/components/client";
import { adminTickets } from "@/lib/admin";

const filters = ["All", "Open", "In progress", "Waiting on client", "Resolved"];

export default function AdminTicketsPage() {
  const [filter, setFilter] = useState("All");
  const rows = adminTickets.filter((t) => filter === "All" || t.status === filter);

  return (
    <>
      <AdminTopbar title="Tickets / Issues" />
      <div className="mt-6">
        <AdminPageHead title="Tickets / Issues" sub="Support queue across projects, payments and distribution." />

        <ChipGroup options={filters} value={filter} onChange={setFilter} />

        <div className="dash-card mt-5 overflow-x-auto p-0">
          <table className="w-full min-w-[760px] text-left text-sm">
            <thead>
              <tr className="border-b border-line font-grotesk text-[10px] uppercase tracking-[0.2em] text-bone-500">
                {["ID", "From", "Subject", "Priority", "Status", "Age", ""].map((h) => (
                  <th key={h} className="p-4">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((t) => (
                <tr key={t.id} className="border-b border-line transition-colors hover:bg-white/[0.02]">
                  <td className="p-4 font-grotesk text-xs text-bone-500">{t.id}</td>
                  <td className="p-4 text-bone-50/90">{t.from}</td>
                  <td className="p-4 text-bone-50">{t.subject}</td>
                  <td className="p-4">
                    <Pill tone={statusTone(t.priority)}>{t.priority}</Pill>
                  </td>
                  <td className="p-4">
                    <select defaultValue={t.status} className="rounded-full border border-line2 bg-ink-850 px-3 py-1.5 font-grotesk text-[11px] text-bone-50" aria-label={`Status for ${t.id}`}>
                      {filters.slice(1).map((s) => (
                        <option key={s}>{s}</option>
                      ))}
                    </select>
                  </td>
                  <td className="p-4 font-grotesk text-xs text-bone-500">{t.age}</td>
                  <td className="p-4 text-right">
                    <button className="rounded-full bg-bone-50 px-4 py-1.5 font-grotesk text-[11px] text-ink-900 transition-all hover:bg-white">
                      Reply
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {rows.length === 0 ? <p className="p-10 text-center text-sm text-bone-400">Queue clear. Enjoy it while it lasts.</p> : null}
        </div>
      </div>
    </>
  );
}
