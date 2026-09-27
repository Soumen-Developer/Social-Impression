"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { AdminTopbar } from "@/components/admin-chrome";
import { AdminPageHead } from "@/components/admin-widgets";
import { Toggle } from "@/components/client";
import { packages, addons } from "@/lib/site";

export default function AdminPackagesPage() {
  const [active, setActive] = useState<Record<string, boolean>>(Object.fromEntries(packages.map((p) => [p.id, true])));

  return (
    <>
      <AdminTopbar title="Package Management" />
      <div className="mt-6">
        <AdminPageHead
          title="Package Management"
          sub="Pricing, visibility and scope for the three ecosystem paths."
          action={
            <button className="inline-flex items-center gap-2 rounded-full bg-iris-500 px-5 py-2.5 font-grotesk text-xs text-white transition-colors hover:bg-iris-400">
              <Plus size={14} /> New package
            </button>
          }
        />

        <div className="space-y-4">
          {packages.map((p) => (
            <section key={p.id} className="dash-card p-6">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <h3 className="font-display text-2xl tracking-tight">
                    {p.name} <span className="ml-2 font-grotesk text-[11px] uppercase tracking-wider text-bone-500">{p.index}</span>
                  </h3>
                  <p className="mt-1 text-sm text-bone-400">{p.tagline}</p>
                </div>
                <Toggle on={active[p.id]} onChange={(v) => setActive((a) => ({ ...a, [p.id]: v }))} label={`${p.name} active`} />
              </div>

              <div className="mt-5 grid gap-4 md:grid-cols-4">
                <label className="block">
                  <span className="font-grotesk text-[10px] uppercase tracking-[0.18em] text-bone-500">Standard price</span>
                  <input defaultValue={p.price} type="number" className="field mt-1.5" />
                </label>
                <label className="block">
                  <span className="font-grotesk text-[10px] uppercase tracking-[0.18em] text-bone-500">Launch price</span>
                  <input defaultValue={p.launchPrice} type="number" className="field mt-1.5" />
                </label>
                <label className="block">
                  <span className="font-grotesk text-[10px] uppercase tracking-[0.18em] text-bone-500">Instalments</span>
                  <input defaultValue={`${p.instalments.count} × ${p.instalments.amount}`} className="field mt-1.5" />
                </label>
                <label className="block">
                  <span className="font-grotesk text-[10px] uppercase tracking-[0.18em] text-bone-500">Duration</span>
                  <input defaultValue={p.duration} className="field mt-1.5" />
                </label>
              </div>

              <div className="mt-4 flex flex-wrap items-center gap-2.5 border-t border-line pt-4">
                <span className="font-grotesk text-[11px] text-bone-500">
                  {p.includes.production.length + p.includes.marketing.length + p.includes.distribution.length} inclusions
                </span>
                <span className="text-bone-600">·</span>
                <span className="font-grotesk text-[11px] text-bone-500">Outcome: {p.outcome.slice(0, 60)}…</span>
                <button className="ml-auto rounded-full border border-line2 px-4 py-2 font-grotesk text-[11px] text-bone-50 transition-colors hover:border-iris-400/60">
                  Save changes
                </button>
              </div>
            </section>
          ))}
        </div>

        <h2 className="mb-4 mt-10 font-grotesk text-xs uppercase tracking-[0.22em] text-bone-400">Add-on catalogue</h2>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {addons.map((a) => (
            <section key={a.name} className="dash-card flex items-start justify-between gap-4 p-5">
              <div>
                <h3 className="font-display text-lg tracking-tight">{a.name}</h3>
                <p className="mt-1 text-[13px] text-bone-400">{a.note}</p>
                <p className="mt-2 font-grotesk text-xs text-signal-300">{a.price}</p>
              </div>
              <Toggle on={true} onChange={() => {}} label={`${a.name} available`} />
            </section>
          ))}
        </div>
      </div>
    </>
  );
}
