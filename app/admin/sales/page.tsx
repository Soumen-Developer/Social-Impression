"use client";

import { Download } from "lucide-react";
import { AdminTopbar } from "@/components/admin-chrome";
import { AdminPageHead, StatCard, BarChart, Donut } from "@/components/admin-widgets";
import { Pill } from "@/components/ui";
import { salesMonths, packageMix } from "@/lib/admin";
import { invoices } from "@/lib/dash";
import { inr } from "@/lib/site";

export default function AdminSalesPage() {
  const ytd = salesMonths.reduce((s, m) => s + m.revenue, 0);

  return (
    <>
      <AdminTopbar title="Sales Reports" />
      <div className="mt-6">
        <AdminPageHead
          title="Sales Reports"
          sub="Revenue, package mix and receivables — FY 2026–27, launch pricing period."
          action={
            <button className="inline-flex items-center gap-2 rounded-full border border-line2 px-5 py-2.5 font-grotesk text-xs text-bone-50 transition-colors hover:border-bone-50/40">
              <Download size={13} /> Export CSV
            </button>
          }
        />

        <div className="grid grid-cols-2 gap-4 xl:grid-cols-4">
          <StatCard label="Revenue YTD" value={`₹${ytd.toFixed(1)}L`} delta="+38% vs FY24 pace" tone="signal" />
          <StatCard label="Packages sold" value="61" delta="Aug best month" />
          <StatCard label="Avg. order value" value="₹52.1K" />
          <StatCard label="Outstanding" value="₹1.2L" delta="7 instalments due" tone="amber" />
        </div>

        <div className="mt-6 grid gap-5 xl:grid-cols-[1.4fr_1fr]">
          <section className="dash-card p-6">
            <h2 className="font-grotesk text-xs uppercase tracking-[0.22em] text-bone-400">Monthly revenue (₹ lakh)</h2>
            <div className="mt-6">
              <BarChart data={salesMonths} height={220} format={(n) => `₹${n}L`} />
            </div>
          </section>
          <section className="dash-card p-6">
            <h2 className="font-grotesk text-xs uppercase tracking-[0.22em] text-bone-400">Revenue by package</h2>
            <div className="mt-6">
              <Donut data={packageMix} />
            </div>
          </section>
        </div>

        <section className="dash-card mt-5 overflow-x-auto p-0">
          <div className="flex items-center justify-between p-5 pb-0">
            <h2 className="font-grotesk text-xs uppercase tracking-[0.22em] text-bone-400">Recent invoices</h2>
          </div>
          <table className="mt-4 w-full min-w-[680px] text-left text-sm">
            <thead>
              <tr className="border-b border-line font-grotesk text-[10px] uppercase tracking-[0.2em] text-bone-500">
                {["Invoice", "Item", "Date", "Amount", "Status"].map((h) => (
                  <th key={h} className="p-4">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {invoices.slice(0, 5).map((inv) => (
                <tr key={inv.id} className="border-b border-line transition-colors hover:bg-white/[0.02]">
                  <td className="p-4 font-grotesk text-xs text-bone-500">#{inv.id}</td>
                  <td className="p-4 text-bone-50/90">{inv.item}</td>
                  <td className="p-4 font-grotesk text-xs text-bone-400">{inv.date}</td>
                  <td className="p-4 font-grotesk text-xs text-bone-50">{inr(inv.amount)}</td>
                  <td className="p-4">
                    <Pill tone="green">{inv.status}</Pill>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </div>
    </>
  );
}
