"use client";

import { useState } from "react";
import { ArrowRight, Check, Minus, Plus, Sparkles, Zap, Star } from "lucide-react";
import { packages, inr } from "@/lib/site";
import { dashArtist } from "@/lib/dash";
import { Pill } from "@/components/ui";
import { FakeForm } from "@/components/client";

const accentIcon = { bone: Zap, iris: Sparkles, signal: Star } as const;

export function PackagesDash() {
  const [modal, setModal] = useState<{ pkg: string; action: string } | null>(null);

  return (
    <div>
      {/* active */}
      <section className="relative mb-8 overflow-hidden rounded-[2rem] border border-iris-500/30 bg-gradient-to-br from-iris-600/20 via-ink-900 to-ink-950 p-7 md:p-10">
        <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-iris-500/25 blur-[80px]" />
        <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-grotesk text-[11px] uppercase tracking-[0.26em] text-signal-300">Currently active</p>
            <h2 className="mt-3 font-display text-4xl tracking-tight">
              {dashArtist.package} <span className="italic text-iris-300">· in motion</span>
            </h2>
            <p className="mt-3 max-w-lg text-sm leading-relaxed text-bone-400">
              Purchased 12 Jun 2026 · 2 singles planned · 1 in production, 1 in rollout. Instalment 3 of 3 due 12 Sep.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              <Pill tone="iris">2 of 2 singles allocated</Pill>
              <Pill tone="signal">60-day rollout running</Pill>
              <Pill tone="neutral">Priority studio booking</Pill>
            </div>
          </div>
          <div className="shrink-0 rounded-2xl border border-line bg-ink-950/60 p-5 text-sm">
            <p className="font-grotesk text-[10px] uppercase tracking-[0.2em] text-bone-500">Usage this cycle</p>
            <ul className="mt-3 space-y-2 text-bone-50/85">
              <li className="flex items-center gap-2"><Check size={13} className="text-signal-300" /> Single 1 — Midnight Petals</li>
              <li className="flex items-center gap-2"><Check size={13} className="text-signal-300" /> Single 2 — Static/Signal</li>
              <li className="flex items-center gap-2"><Sparkles size={13} className="text-iris-300" /> Add-on single — Neon Monsoon</li>
            </ul>
          </div>
        </div>
      </section>

      {/* browse */}
      <div className="grid gap-5 lg:grid-cols-3">
        {packages.map((p) => {
          const Icon = accentIcon[p.accent];
          const isActive = p.id === dashArtist.packageId;
          const isUpgrade = p.id === "northstar";
          return (
            <section key={p.id} className="dash-card flex flex-col p-6 md:p-7">
              <div className="flex items-center justify-between">
                <span className="grid h-11 w-11 place-items-center rounded-full border border-line2">
                  <Icon size={17} className={p.accent === "signal" ? "text-signal-300" : p.accent === "iris" ? "text-iris-300" : "text-bone-50"} />
                </span>
                {isActive ? <Pill tone="iris">Your plan</Pill> : <Pill tone="neutral">{p.duration}</Pill>}
              </div>
              <h3 className="mt-5 font-display text-3xl tracking-tight">{p.name}</h3>
              <p className="mt-2 text-[13px] leading-relaxed text-bone-400">{p.tagline}</p>

              <ul className="mt-5 flex-1 space-y-2 border-t border-line pt-5">
                {[
                  p.includes.production[0],
                  p.includes.marketing[0],
                  p.includes.distribution[0],
                ].map((f) => (
                  <li key={f} className="flex items-start gap-2 text-[13px] text-bone-50/80">
                    <Check size={13} className="mt-1 shrink-0 text-signal-300" />
                    {f}
                  </li>
                ))}
              </ul>

              <div className="mt-6 border-t border-line pt-5">
                <div className="flex items-baseline gap-2.5">
                  <span className="font-display text-3xl tracking-tight">{inr(p.launchPrice)}</span>
                  <span className="text-xs text-bone-500 line-through">{inr(p.price)}</span>
                </div>
                <p className="mt-1 font-grotesk text-[11px] text-bone-400">or {p.instalments.count} × {inr(p.instalments.amount)}</p>
                <div className="mt-4 grid grid-cols-2 gap-2">
                  {isActive ? (
                    <>
                      <button className="rounded-full border border-line2 py-2.5 font-grotesk text-[11px] text-bone-400 transition-colors hover:border-bone-50/40">Downgrade</button>
                      <button onClick={() => setModal({ pkg: p.name, action: "renew" })} className="rounded-full bg-bone-50 py-2.5 font-grotesk text-[11px] text-ink-900 transition-all hover:bg-white">
                        Buy again
                      </button>
                    </>
                  ) : isUpgrade ? (
                    <>
                      <button onClick={() => setModal({ pkg: p.name, action: "downgrade" })} className="rounded-full border border-line2 py-2.5 font-grotesk text-[11px] text-bone-400 transition-colors hover:border-bone-50/40">
                        <span className="inline-flex items-center gap-1"><Minus size={11} /> Downgrade</span>
                      </button>
                      <button onClick={() => setModal({ pkg: p.name, action: "upgrade" })} className="rounded-full bg-iris-500 py-2.5 font-grotesk text-[11px] text-white transition-colors hover:bg-iris-400">
                        <span className="inline-flex items-center gap-1"><Plus size={11} /> Upgrade</span>
                      </button>
                    </>
                  ) : (
                    <>
                      <button onClick={() => setModal({ pkg: p.name, action: "purchase" })} className="col-span-2 rounded-full bg-bone-50 py-2.5 font-grotesk text-[11px] text-ink-900 transition-all hover:bg-white">
                        Purchase as add-on
                      </button>
                    </>
                  )}
                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* add-ons strip */}
      <section className="dash-card mt-8 flex flex-col items-start justify-between gap-4 p-6 md:flex-row md:items-center">
        <div>
          <h3 className="font-display text-2xl tracking-tight">Add-ons</h3>
          <p className="mt-1 text-sm text-bone-400">Music videos, lyric videos, extra revisions, ad management — bolt them onto any active package.</p>
        </div>
        <a href="https://cal.com/socialimpression/discovery" target="_blank" rel="noreferrer" className="inline-flex shrink-0 items-center gap-2 rounded-full border border-line2 px-5 py-2.5 font-grotesk text-xs text-bone-50 transition-all hover:border-iris-400/60">
          Browse add-ons <ArrowRight size={13} />
        </a>
      </section>

      {modal ? (
        <div className="fixed inset-0 z-[90] grid place-items-center bg-ink-950/80 p-4 backdrop-blur-sm" onClick={() => setModal(null)}>
          <div className="w-full max-w-md rounded-3xl border border-line bg-ink-900 p-7" onClick={(e) => e.stopPropagation()}>
            <h3 className="font-display text-2xl tracking-tight">
              {modal.action === "upgrade" ? `Upgrade to ${modal.pkg}` : modal.action === "downgrade" ? `Switch to ${modal.pkg}` : `Get ${modal.pkg}`}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-bone-400">
              {modal.action === "upgrade"
                ? "Upgrades add scope immediately — you only pay the difference and your timeline is re-planned around it."
                : modal.action === "downgrade"
                  ? "Downgrades apply at your next cycle. Current project scope stays untouched."
                  : "A team member will confirm availability and send a payment link to your dashboard within a few hours."}
            </p>
            <div className="mt-6">
              <FakeForm cta="Confirm request" success="Request sent. Check your notifications — your release manager will confirm the details shortly." >
                <p className="rounded-xl border border-line bg-ink-850 px-4 py-3 text-xs leading-relaxed text-bone-400">
                  This is a demo action — in production this opens checkout or your manager&apos;s calendar.
                </p>
              </FakeForm>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
