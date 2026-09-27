"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { AdminTopbar } from "@/components/admin-chrome";
import { AdminPageHead } from "@/components/admin-widgets";
import { Pill } from "@/components/ui";
import { broadcasts } from "@/lib/admin";

const audiences = ["All artists", "Active projects only", "Waitlisted artists", "Specific project", "All applications"];

export default function AdminNotificationsPage() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <AdminTopbar title="Notifications" />
      <div className="mt-6">
        <AdminPageHead title="Notifications" sub="Broadcast updates into artist dashboards, inboxes and push." />

        <div className="grid gap-5 xl:grid-cols-[1.2fr_1fr]">
          <section className="dash-card p-6">
            <h2 className="font-grotesk text-xs uppercase tracking-[0.22em] text-bone-400">Compose broadcast</h2>
            {sent ? (
              <div className="mt-6 rounded-2xl border border-signal-400/30 bg-signal-400/5 p-6 text-center">
                <p className="font-display text-2xl tracking-tight">Broadcast queued.</p>
                <p className="mt-2 text-sm text-bone-400">Artists will see it in their notification centre within a minute.</p>
                <button onClick={() => setSent(false)} className="u-link mt-4 font-grotesk text-xs uppercase tracking-wider text-bone-400">
                  Compose another
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
                className="mt-5 space-y-4"
              >
                <label className="block">
                  <span className="font-grotesk text-[11px] uppercase tracking-[0.18em] text-bone-400">Title</span>
                  <input required className="field mt-2" placeholder="e.g. Your master is ready for review" />
                </label>
                <label className="block">
                  <span className="font-grotesk text-[11px] uppercase tracking-[0.18em] text-bone-400">Message</span>
                  <textarea required rows={4} className="field mt-2 resize-none" placeholder="Keep it short — notifications get skimmed." />
                </label>
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="block">
                    <span className="font-grotesk text-[11px] uppercase tracking-[0.18em] text-bone-400">Audience</span>
                    <select className="field mt-2">
                      {audiences.map((a) => (
                        <option key={a}>{a}</option>
                      ))}
                    </select>
                  </label>
                  <label className="block">
                    <span className="font-grotesk text-[11px] uppercase tracking-[0.18em] text-bone-400">Schedule</span>
                    <select className="field mt-2">
                      <option>Send immediately</option>
                      <option>Tomorrow, 9:00 AM</option>
                      <option>Custom…</option>
                    </select>
                  </label>
                </div>
                <button className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-bone-50 py-3.5 font-grotesk text-sm text-ink-900 transition-all hover:bg-white sm:w-auto sm:px-8">
                  <Send size={14} /> Send broadcast
                </button>
              </form>
            )}
          </section>

          <section className="dash-card p-6">
            <h2 className="font-grotesk text-xs uppercase tracking-[0.22em] text-bone-400">Recent broadcasts</h2>
            <ul className="mt-5 space-y-2.5">
              {broadcasts.map((b) => (
                <li key={b.title} className="rounded-xl border border-line bg-ink-850 p-4">
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-sm text-bone-50/90">{b.title}</p>
                    <Pill tone="signal">{b.opens} opens</Pill>
                  </div>
                  <p className="mt-1 font-grotesk text-[11px] text-bone-500">
                    {b.audience} · sent {b.sent}
                  </p>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </>
  );
}
