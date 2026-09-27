import type { Metadata } from "next";
import { Download, FileText } from "lucide-react";
import { PageHeader } from "@/components/dash";
import { Pill, statusTone } from "@/components/ui";
import { invoices } from "@/lib/dash";
import { inr } from "@/lib/site";
import { PayNowCard } from "./pay-now";

export const metadata: Metadata = { title: "Payments" };

export default function PaymentsPage() {
  const paidTotal = invoices.reduce((s, i) => s + i.amount, 0);

  return (
    <>
      <PageHeader
        title="Payments"
        sub="Every instalment, invoice and transaction — visible, downloadable, and free of surprises."
      />

      <div className="grid gap-6 xl:grid-cols-[1fr_1.6fr]">
        <div className="space-y-5">
          <PayNowCard />
          <section className="dash-card p-6">
            <h2 className="font-grotesk text-xs uppercase tracking-[0.22em] text-bone-400">Plan progress</h2>
            <div className="mt-5 space-y-3">
              {["Instalment 1 · paid 12 Jul", "Instalment 2 · paid 12 Aug", "Instalment 3 · due 12 Sep"].map((s, i) => (
                <div key={s} className="flex items-center gap-3">
                  <span className={`h-2 w-2 rounded-full ${i < 2 ? "bg-signal-400" : "bg-amber-300"}`} />
                  <span className={`flex-1 text-sm ${i < 2 ? "text-bone-50/85" : "text-amber-300"}`}>{s}</span>
                  <span className="font-grotesk text-xs text-bone-400">{inr(18499)}</span>
                </div>
              ))}
            </div>
            <div className="mt-5 flex items-center justify-between border-t border-line pt-4 text-sm">
              <span className="text-bone-400">Paid to date</span>
              <span className="font-display text-xl">{inr(paidTotal)}</span>
            </div>
          </section>
        </div>

        <section className="dash-card p-6 md:p-7">
          <div className="flex items-center justify-between">
            <h2 className="font-grotesk text-xs uppercase tracking-[0.22em] text-bone-400">Invoices & transactions</h2>
            <span className="font-grotesk text-[11px] text-bone-500">{invoices.length} records</span>
          </div>
          <div className="mt-5 overflow-x-auto">
            <table className="w-full min-w-[520px] text-left text-sm">
              <thead>
                <tr className="border-b border-line font-grotesk text-[10px] uppercase tracking-[0.2em] text-bone-500">
                  <th className="pb-3">Invoice</th>
                  <th className="pb-3">Item</th>
                  <th className="pb-3">Date</th>
                  <th className="pb-3">Amount</th>
                  <th className="pb-3">Status</th>
                  <th className="pb-3 text-right">PDF</th>
                </tr>
              </thead>
              <tbody>
                {invoices.map((inv) => (
                  <tr key={inv.id} className="border-b border-line transition-colors hover:bg-white/[0.02]">
                    <td className="py-3.5 font-grotesk text-xs text-bone-400">#{inv.id}</td>
                    <td className="py-3.5 text-bone-50/90">{inv.item}</td>
                    <td className="py-3.5 font-grotesk text-xs text-bone-500">{inv.date}</td>
                    <td className="py-3.5 font-grotesk text-xs text-bone-50">{inr(inv.amount)}</td>
                    <td className="py-3.5">
                      <Pill tone={statusTone(inv.status)}>{inv.status}</Pill>
                    </td>
                    <td className="py-3.5 text-right">
                      <button className="inline-flex items-center gap-1.5 rounded-full border border-line2 px-3 py-1.5 font-grotesk text-[11px] text-bone-400 transition-all hover:border-iris-400/60 hover:text-bone-50">
                        <Download size={11} />
                        Invoice
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-5 flex items-center gap-2 text-xs text-bone-500">
            <FileText size={12} />
            GST-ready invoices. Something look wrong? Open a ticket from Help — finance replies same day.
          </p>
        </section>
      </div>
    </>
  );
}
