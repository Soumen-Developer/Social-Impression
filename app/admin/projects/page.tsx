"use client";

import { useState } from "react";
import { AdminTopbar } from "@/components/admin-chrome";
import { AdminPageHead } from "@/components/admin-widgets";
import { ChipGroup } from "@/components/client";
import { adminProjects } from "@/lib/admin";

const filters = ["All", "Input pending", "In progress", "Revision requested", "In marketing", "Delivered", "Completed"];

export default function AdminProjectsPage() {
  const [filter, setFilter] = useState("All");
  const [q, setQ] = useState("");
  const rows = adminProjects.filter(
    (p) =>
      (filter === "All" || p.status === filter) &&
      `${p.id} ${p.artist} ${p.song} ${p.owner}`.toLowerCase().includes(q.toLowerCase())
  );

  return (
    <>
      <AdminTopbar title="Projects" />
      <div className="mt-6">
        <AdminPageHead
          title="Projects"
          sub="Every active and archived project across the ecosystem."
          action={
            <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search projects…" className="field w-full md:w-64" />
          }
        />
        <ChipGroup options={filters} value={filter} onChange={setFilter} />

        <div className="dash-card mt-5 overflow-x-auto p-0">
          <table className="w-full min-w-[900px] text-left text-sm">
            <thead>
              <tr className="border-b border-line font-grotesk text-[10px] uppercase tracking-[0.2em] text-bone-500">
                {["ID", "Artist", "Song / Project", "Package", "Stage", "Status", "Due", "Owner"].map((h) => (
                  <th key={h} className="p-4">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((p) => (
                <tr key={p.id} className="border-b border-line transition-colors hover:bg-white/[0.02]">
                  <td className="p-4 font-grotesk text-xs text-bone-500">{p.id}</td>
                  <td className="p-4 text-bone-50/90">{p.artist}</td>
                  <td className="p-4 text-bone-50">{p.song}</td>
                  <td className="p-4 text-bone-400">{p.pkg}</td>
                  <td className="p-4 text-bone-400">{p.stage}</td>
                  <td className="p-4">
                    <select
                      defaultValue={p.status}
                      className="rounded-full border border-line2 bg-ink-850 px-3 py-1.5 font-grotesk text-[11px] text-bone-50"
                      aria-label={`Status for ${p.song}`}
                    >
                      {filters.slice(1).map((s) => (
                        <option key={s}>{s}</option>
                      ))}
                    </select>
                  </td>
                  <td className="p-4 font-grotesk text-xs text-bone-400">{p.due}</td>
                  <td className="p-4 font-grotesk text-xs text-bone-400">{p.owner}</td>
                </tr>
              ))}
            </tbody>
          </table>
          {rows.length === 0 ? <p className="p-10 text-center text-sm text-bone-400">No projects match.</p> : null}
        </div>
      </div>
    </>
  );
}
