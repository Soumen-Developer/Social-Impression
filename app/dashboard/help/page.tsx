import type { Metadata } from "next";
import { CalendarClock, LifeBuoy, MessageSquare, Ticket } from "lucide-react";
import { PageHeader } from "@/components/dash";
import { Accordion, FakeForm } from "@/components/client";
import { Pill, statusTone } from "@/components/ui";
import { helpTopics, dashFaqs, myTickets } from "@/lib/dash";

export const metadata: Metadata = { title: "Help & Support" };

export default function HelpPage() {
  return (
    <>
      <PageHeader
        title="Help & Support"
        sub="Answers first, humans second. Most things resolve here — for everything else, your team replies same-day."
      />

      <div className="grid gap-6 xl:grid-cols-[1.4fr_1fr]">
        <div className="space-y-6">
          {/* topics */}
          <section className="grid gap-4 sm:grid-cols-2">
            {helpTopics.map((t, i) => (
              <div key={t.title} className="dash-card group p-6 transition-colors hover:border-iris-500/40">
                <span className="font-grotesk text-[11px] text-bone-500">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-2 font-display text-xl tracking-tight">{t.title}</h3>
                <p className="mt-1.5 text-[13px] leading-relaxed text-bone-400">{t.desc}</p>
              </div>
            ))}
          </section>

          {/* faq */}
          <section className="dash-card p-6 md:p-7">
            <h2 className="font-grotesk text-xs uppercase tracking-[0.22em] text-bone-400">Frequent questions</h2>
            <div className="mt-4">
              <Accordion items={dashFaqs} />
            </div>
          </section>

          {/* new ticket */}
          <section className="dash-card p-6 md:p-7">
            <h2 className="flex items-center gap-2.5 font-grotesk text-xs uppercase tracking-[0.22em] text-bone-400">
              <Ticket size={14} /> Open a new ticket
            </h2>
            <div className="mt-5">
              <FakeForm cta="Submit ticket" success="Ticket created. Your release manager has been pinged — expect a reply within one working day.">
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="block">
                    <span className="font-grotesk text-[11px] uppercase tracking-[0.18em] text-bone-400">Topic</span>
                    <select className="field mt-2">
                      <option>Project & timeline</option>
                      <option>Payments & invoices</option>
                      <option>Portfolio & storage</option>
                      <option>Distribution issue</option>
                      <option>Something else</option>
                    </select>
                  </label>
                  <label className="block">
                    <span className="font-grotesk text-[11px] uppercase tracking-[0.18em] text-bone-400">Related project</span>
                    <select className="field mt-2">
                      <option>Midnight Petals</option>
                      <option>Static/Signal</option>
                      <option>Glass Hours</option>
                      <option>Neon Monsoon</option>
                      <option>None</option>
                    </select>
                  </label>
                </div>
                <label className="block">
                  <span className="font-grotesk text-[11px] uppercase tracking-[0.18em] text-bone-400">Describe the issue</span>
                  <textarea required rows={4} className="field mt-2 resize-none" placeholder="The more context you give, the faster we fix it." />
                </label>
              </FakeForm>
            </div>
          </section>
        </div>

        <div className="space-y-5">
          {/* my tickets */}
          <section className="dash-card p-6">
            <h2 className="font-grotesk text-xs uppercase tracking-[0.22em] text-bone-400">My tickets</h2>
            <ul className="mt-4 space-y-2.5">
              {myTickets.map((t) => (
                <li key={t.id} className="rounded-xl border border-line bg-ink-850 p-4">
                  <div className="flex items-center justify-between gap-3">
                    <span className="font-grotesk text-[11px] text-bone-500">#{t.id}</span>
                    <Pill tone={statusTone(t.status)}>{t.status}</Pill>
                  </div>
                  <p className="mt-1.5 text-sm text-bone-50/90">{t.subject}</p>
                  <p className="mt-1 font-grotesk text-[10px] uppercase tracking-wider text-bone-500">Updated {t.updated}</p>
                </li>
              ))}
            </ul>
          </section>

          {/* human channels */}
          <section className="dash-card p-6">
            <h2 className="font-grotesk text-xs uppercase tracking-[0.22em] text-bone-400">Reach a human</h2>
            <div className="mt-4 space-y-3">
              <a href="mailto:hello@socialimpression.in" className="flex items-center gap-3 rounded-xl border border-line bg-ink-850 px-4 py-3.5 text-sm text-bone-50/90 transition-colors hover:border-iris-400/50">
                <MessageSquare size={15} className="text-iris-300" />
                support@socialimpression.in
              </a>
              <a href="https://cal.com/socialimpression/discovery" target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-xl border border-line bg-ink-850 px-4 py-3.5 text-sm text-bone-50/90 transition-colors hover:border-iris-400/50">
                <CalendarClock size={15} className="text-signal-300" />
                Schedule a call with your team
              </a>
              <div className="flex items-center gap-3 rounded-xl border border-line bg-ink-850 px-4 py-3.5 text-sm text-bone-50/90">
                <LifeBuoy size={15} className="text-ember-400" />
                Or ask Echo — bottom right, always awake
              </div>
            </div>
          </section>

          <section className="rounded-3xl border border-line bg-gradient-to-br from-iris-600/20 via-ink-900 to-ink-950 p-6">
            <h3 className="font-display text-xl tracking-tight">Emergency release-week issue?</h3>
            <p className="mt-2 text-[13px] leading-relaxed text-bone-400">
              If your release is live or going live in 48h, mark any ticket &ldquo;URGENT — release week&rdquo; and it jumps the queue. That is a promise.
            </p>
          </section>
        </div>
      </div>
    </>
  );
}
