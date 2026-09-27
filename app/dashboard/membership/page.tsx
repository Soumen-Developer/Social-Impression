import type { Metadata } from "next";
import Link from "next/link";
import { Check, Clock, Eye, HardDrive, Sparkles, Users, Compass, GraduationCap, ArrowUpRight, CalendarClock } from "lucide-react";
import { PageHeader } from "@/components/dash";
import { Pill } from "@/components/ui";
import { dashArtist, comingSoon } from "@/lib/dash";

const icons = { community: Users, opportunities: Compass, education: GraduationCap } as const;

export const metadata: Metadata = { title: "Membership Services" };

export default function MembershipPage() {
  return (
    <>
      <PageHeader
        title="Membership Services"
        sub="Everything your Social Impression membership unlocks — live today, and what is landing next."
      />

      <div className="grid gap-5 lg:grid-cols-3">
        {/* status */}
        <section className="relative overflow-hidden rounded-3xl border border-signal-400/25 bg-gradient-to-br from-signal-400/10 via-ink-900 to-ink-950 p-7">
          <Sparkles size={18} className="text-signal-300" />
          <h2 className="mt-4 font-display text-3xl tracking-tight">Active member</h2>
          <p className="mt-2 text-sm leading-relaxed text-bone-400">
            {dashArtist.package} · since {dashArtist.memberSince}
          </p>
          <ul className="mt-6 space-y-2.5 text-sm">
            {["Artist dashboard & workspace", "Public portfolio", "Call scheduler", "Performance reports", "Priority studio booking"].map((f) => (
              <li key={f} className="flex items-center gap-2.5 text-bone-50/85">
                <Check size={14} className="text-signal-300" />
                {f}
              </li>
            ))}
          </ul>
          <Link href="/dashboard/packages" className="mt-6 inline-flex items-center gap-1.5 rounded-full bg-bone-50 px-4 py-2 font-grotesk text-xs text-ink-900 transition-all hover:bg-white">
            Manage package <ArrowUpRight size={12} />
          </Link>
        </section>

        {/* storage */}
        <section className="dash-card p-7">
          <HardDrive size={18} className="text-iris-300" />
          <h2 className="mt-4 font-display text-3xl tracking-tight">Storage</h2>
          <p className="mt-2 text-sm text-bone-400">Release-grade, organised by project.</p>
          <p className="mt-6 font-display text-4xl tracking-tight">
            {dashArtist.storageUsed}
            <span className="text-xl text-bone-500"> / {dashArtist.storageTotal} GB</span>
          </p>
          <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-ink-700">
            <div className="h-full rounded-full bg-gradient-to-r from-iris-500 to-signal-400" style={{ width: `${(dashArtist.storageUsed / dashArtist.storageTotal) * 100}%` }} />
          </div>
          <Link href="/dashboard/storage" className="mt-6 inline-flex items-center gap-1.5 font-grotesk text-xs uppercase tracking-[0.18em] text-bone-400 transition-colors hover:text-bone-50">
            Manage files <ArrowUpRight size={12} />
          </Link>
        </section>

        {/* portfolio */}
        <section className="dash-card p-7">
          <Eye size={18} className="text-ember-400" />
          <h2 className="mt-4 font-display text-3xl tracking-tight">Portfolio</h2>
          <p className="mt-2 text-sm text-bone-400">Your official artist world — live and shareable.</p>
          <div className="mt-6 space-y-2 text-sm">
            <p className="flex justify-between border-b border-line pb-2.5">
              <span className="text-bone-400">Views this month</span>
              <span className="text-bone-50">{dashArtist.portfolioViews.toLocaleString()}</span>
            </p>
            <p className="flex justify-between border-b border-line pb-2.5">
              <span className="text-bone-400">Songs shown</span>
              <span className="text-bone-50">3 released · 1 unreleased</span>
            </p>
            <p className="flex justify-between">
              <span className="text-bone-400">Visibility</span>
              <Pill tone="green">Public</Pill>
            </p>
          </div>
          <Link href="/dashboard/portfolio" className="mt-6 inline-flex items-center gap-1.5 font-grotesk text-xs uppercase tracking-[0.18em] text-bone-400 transition-colors hover:text-bone-50">
            Manage portfolio <ArrowUpRight size={12} />
          </Link>
        </section>
      </div>

      {/* coming soon */}
      <h3 className="mb-5 mt-12 font-grotesk text-xs uppercase tracking-[0.24em] text-bone-400">Landing next</h3>
      <div className="grid gap-5 lg:grid-cols-3">
        {comingSoon.map((c) => {
          const Icon = icons[c.id as keyof typeof icons];
          return (
            <section key={c.id} className="dash-card group flex flex-col p-7">
              <div className="flex items-center justify-between">
                <span className="grid h-11 w-11 place-items-center rounded-full border border-line2 text-bone-400 transition-colors group-hover:border-signal-400/50 group-hover:text-signal-300">
                  <Icon size={17} />
                </span>
                <Pill tone="signal"><Clock size={11} /> Coming soon</Pill>
              </div>
              <h4 className="mt-5 font-display text-2xl tracking-tight">{c.name}</h4>
              <p className="mt-2 flex-1 text-[13px] leading-relaxed text-bone-400">{c.desc}</p>
              <ul className="mt-4 space-y-1.5 border-t border-line pt-4">
                {c.perks.map((p) => (
                  <li key={p} className="text-xs text-bone-50/70">· {p}</li>
                ))}
              </ul>
              <Link href={`/dashboard/${c.id}`} className="mt-5 inline-flex items-center gap-1.5 font-grotesk text-xs uppercase tracking-[0.18em] text-bone-400 transition-colors hover:text-bone-50">
                Preview {c.name} <ArrowUpRight size={12} />
              </Link>
            </section>
          );
        })}
      </div>

      {/* call strip */}
      <section className="dash-card mt-8 flex flex-col items-start justify-between gap-4 p-6 md:flex-row md:items-center">
        <div>
          <h3 className="font-display text-2xl tracking-tight">Want to know what your membership can do?</h3>
          <p className="mt-1 text-sm text-bone-400">Your release manager walks every member through the ecosystem in a 20-minute call.</p>
        </div>
        <a href="https://cal.com/socialimpression/discovery" target="_blank" rel="noreferrer" className="inline-flex shrink-0 items-center gap-2 rounded-full bg-signal-400 px-5 py-2.5 font-grotesk text-xs font-medium text-ink-900 transition-all hover:bg-signal-300">
          <CalendarClock size={14} /> Schedule a call
        </a>
      </section>
    </>
  );
}
