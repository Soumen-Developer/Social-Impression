"use client";

import { useState } from "react";
import { Plus, MousePointerClick } from "lucide-react";
import { AdminTopbar } from "@/components/admin-chrome";
import { AdminPageHead } from "@/components/admin-widgets";
import { Pill, statusTone } from "@/components/ui";
import { Toggle } from "@/components/client";
import { popCampaigns } from "@/lib/admin";

export default function AdminMarketingPage() {
  const [campaigns, setCampaigns] = useState(
    popCampaigns.map((c) => ({ ...c, enabled: c.status === "Live" }))
  );

  return (
    <>
      <AdminTopbar title="Pop Marketing" />
      <div className="mt-6">
        <AdminPageHead
          title="Pop Marketing"
          sub="Pop-ups, banners and exit-intent campaigns on the public site."
          action={
            <button className="inline-flex items-center gap-2 rounded-full bg-iris-500 px-5 py-2.5 font-grotesk text-xs text-white transition-colors hover:bg-iris-400">
              <Plus size={14} /> New campaign
            </button>
          }
        />

        <div className="space-y-4">
          {campaigns.map((c, i) => (
            <section key={c.name} className="dash-card flex flex-wrap items-center justify-between gap-4 p-5">
              <div className="min-w-0">
                <h3 className="font-display text-xl tracking-tight">{c.name}</h3>
                <p className="mt-1 font-grotesk text-[11px] uppercase tracking-[0.16em] text-bone-500">{c.placement}</p>
              </div>
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1.5 font-grotesk text-xs text-bone-400">
                  <MousePointerClick size={13} className="text-iris-300" />
                  {c.clicks.toLocaleString()} clicks
                </span>
                <Pill tone={statusTone(c.status)}>{c.status}</Pill>
                <Toggle
                  on={c.enabled}
                  onChange={(v) => setCampaigns((arr) => arr.map((x, xi) => (xi === i ? { ...x, enabled: v, status: v ? "Live" : "Paused" } : x)))}
                  label={`${c.name} active`}
                />
              </div>
            </section>
          ))}
        </div>

        <section className="dash-card mt-6 p-6">
          <h2 className="font-grotesk text-xs uppercase tracking-[0.22em] text-bone-400">Campaign performance · last 30 days</h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-3">
            {[
              { l: "Total impressions", v: "84,210" },
              { l: "Click-through rate", v: "6.1%" },
              { l: "Waitlist signups driven", v: "312" },
            ].map((x) => (
              <div key={x.l} className="rounded-2xl border border-line bg-ink-850 p-5">
                <p className="font-grotesk text-[10px] uppercase tracking-[0.2em] text-bone-500">{x.l}</p>
                <p className="mt-2 font-display text-3xl tracking-tight">{x.v}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
