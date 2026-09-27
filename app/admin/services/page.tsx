"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { AdminTopbar } from "@/components/admin-chrome";
import { AdminPageHead } from "@/components/admin-widgets";
import { Pill } from "@/components/ui";
import { Toggle } from "@/components/client";
import { serviceCategories } from "@/lib/site";

export default function AdminServicesPage() {
  const [enabled, setEnabled] = useState<Record<string, boolean>>(
    Object.fromEntries(serviceCategories.map((s) => [s.id, s.id !== "addons" || true]))
  );

  return (
    <>
      <AdminTopbar title="Service Management" />
      <div className="mt-6">
        <AdminPageHead
          title="Service Management"
          sub="What the ecosystem offers, where it appears, and how it is staffed."
          action={
            <button className="inline-flex items-center gap-2 rounded-full bg-iris-500 px-5 py-2.5 font-grotesk text-xs text-white transition-colors hover:bg-iris-400">
              <Plus size={14} /> Add service
            </button>
          }
        />

        <div className="dash-card overflow-x-auto p-0">
          <table className="w-full min-w-[860px] text-left text-sm">
            <thead>
              <tr className="border-b border-line font-grotesk text-[10px] uppercase tracking-[0.2em] text-bone-500">
                {["Service", "Tag", "Deliverables", "Journey window", "Live on site"].map((h) => (
                  <th key={h} className="p-4">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {serviceCategories.map((s) => (
                <tr key={s.id} className="border-b border-line transition-colors hover:bg-white/[0.02]">
                  <td className="p-4 font-display text-lg tracking-tight">{s.name}</td>
                  <td className="p-4">
                    <Pill tone="neutral">{s.tag}</Pill>
                  </td>
                  <td className="p-4 text-bone-400">{s.receive.length} items</td>
                  <td className="p-4 font-grotesk text-xs text-bone-400">{s.journey.split("·")[0]}</td>
                  <td className="p-4">
                    <Toggle
                      on={enabled[s.id]}
                      onChange={(v) => setEnabled((e) => ({ ...e, [s.id]: v }))}
                      label={`${s.name} visible`}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {[
            { t: "Producers on roster", v: "12", d: "3 hip-hop · 3 pop · 2 electronic · 4 multi-genre" },
            { t: "Partner studios", v: "6", d: "Mumbai · Bengaluru · Delhi · Pune" },
            { t: "Avg. delivery time", v: "4.2 days", d: "per production milestone" },
          ].map((x) => (
            <section key={x.t} className="dash-card p-5">
              <p className="font-grotesk text-[10px] uppercase tracking-[0.22em] text-bone-500">{x.t}</p>
              <p className="mt-2 font-display text-3xl tracking-tight">{x.v}</p>
              <p className="mt-1 text-xs text-bone-400">{x.d}</p>
            </section>
          ))}
        </div>
      </div>
    </>
  );
}
