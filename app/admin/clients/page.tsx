"use client";

import { useState } from "react";
import { AdminTopbar } from "@/components/admin-chrome";
import { AdminPageHead } from "@/components/admin-widgets";
import { Pill, statusTone } from "@/components/ui";
import { adminClients } from "@/lib/admin";

export default function AdminClientsPage() {
  const [q, setQ] = useState("");
  const rows = adminClients.filter((c) => `${c.name} ${c.moniker} ${c.pkg} ${c.city}`.toLowerCase().includes(q.toLowerCase()));

  return (
    <>
      <AdminTopbar title="Clients" />
      <div className="mt-6">
        <AdminPageHead
          title="Clients"
          sub="Every artist in the ecosystem — packages, storage, payments at a glance."
          action={<input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search clients…" className="field w-full md:w-64" />}
        />

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {rows.map((c) => (
            <section key={c.moniker} className="dash-card p-5 transition-colors hover:border-iris-500/40">
              <div className="flex items-start justify-between">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br from-iris-500 to-iris-600 font-display text-sm text-white">
                  {c.moniker.slice(0, 2)}
                </span>
                <Pill tone={statusTone(c.status)}>{c.status}</Pill>
              </div>
              <h3 className="mt-4 font-display text-xl tracking-tight">{c.name}</h3>
              <p className="font-grotesk text-[11px] uppercase tracking-[0.16em] text-bone-500">{c.moniker} · {c.city}</p>
              <dl className="mt-4 space-y-2 border-t border-line pt-4 text-[13px]">
                <div className="flex justify-between">
                  <dt className="text-bone-400">Package</dt>
                  <dd className="text-bone-50/90">{c.pkg}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-bone-400">Storage</dt>
                  <dd className="font-grotesk text-xs text-bone-50/90">{c.storage}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-bone-400">Next payment</dt>
                  <dd className="font-grotesk text-xs text-bone-50/90">{c.nextPayment}</dd>
                </div>
              </dl>
            </section>
          ))}
        </div>
        {rows.length === 0 ? <p className="mt-10 text-center text-sm text-bone-400">No clients match.</p> : null}
      </div>
    </>
  );
}
