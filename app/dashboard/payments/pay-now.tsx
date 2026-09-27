"use client";

import { useState } from "react";
import { CreditCard, ShieldCheck, Check } from "lucide-react";
import { upcomingPayment } from "@/lib/dash";
import { inr } from "@/lib/site";

export function PayNowCard() {
  const [paid, setPaid] = useState(false);

  if (paid)
    return (
      <div className="relative overflow-hidden rounded-[2rem] border border-signal-400/30 bg-gradient-to-br from-signal-400/10 via-ink-900 to-ink-950 p-7 md:p-8">
        <span className="grid h-11 w-11 place-items-center rounded-full bg-signal-400 text-ink-900">
          <Check size={20} />
        </span>
        <h2 className="mt-4 font-display text-3xl tracking-tight">Payment scheduled.</h2>
        <p className="mt-2 text-sm leading-relaxed text-bone-400">
          {inr(upcomingPayment.amount)} will be charged on {upcomingPayment.due} to your saved UPI. A receipt lands in your invoices the moment it clears.
        </p>
      </div>
    );

  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-iris-500/30 bg-gradient-to-br from-iris-600/20 via-ink-900 to-ink-950 p-7 md:p-8">
      <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-iris-500/25 blur-[70px]" />
      <div className="relative">
        <p className="font-grotesk text-[11px] uppercase tracking-[0.26em] text-signal-300">Next payment · in {upcomingPayment.daysLeft} days</p>
        <p className="mt-4 font-display text-5xl tracking-tight">{inr(upcomingPayment.amount)}</p>
        <p className="mt-2 text-sm text-bone-400">
          {upcomingPayment.label} · due {upcomingPayment.due}
        </p>

        <div className="mt-6 flex items-center gap-3 rounded-xl border border-line bg-ink-950/50 px-4 py-3">
          <CreditCard size={16} className="text-iris-300" />
          <span className="flex-1 text-sm text-bone-50/90">UPI · mira@okhdfc</span>
          <ShieldCheck size={15} className="text-signal-300" />
        </div>

        <button
          onClick={() => setPaid(true)}
          className="mt-5 w-full rounded-full bg-bone-50 py-3.5 font-grotesk text-sm text-ink-900 transition-all hover:bg-white hover:shadow-[0_0_36px_-8px] hover:shadow-iris-500/60 active:scale-[0.99]"
        >
          Pay early
        </button>
        <p className="mt-3 text-center text-xs text-bone-500">Or do nothing — it auto-charges on the due date.</p>
      </div>
    </div>
  );
}
