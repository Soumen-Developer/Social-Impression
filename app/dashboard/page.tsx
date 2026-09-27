import Link from "next/link";
import {
  ArrowRight, ArrowUpRight, CheckCircle2, CircleDashed, Clock, Download,
  FileText, Upload, GitPullRequestArrow, CalendarClock, Eye, HardDrive, Sparkles, AlertCircle,
} from "lucide-react";
import { Ring, Bars, Pill, statusTone } from "@/components/ui";
import { SmartImage } from "@/components/smart-image";
import { dashArtist, projects, activity, invoices, upcomingPayment } from "@/lib/dash";
import { inr } from "@/lib/site";

const quickActions = [
  { label: "Upload files", href: "/dashboard/storage", icon: Upload },
  { label: "Request revision", href: "/dashboard/projects/midnight-petals", icon: GitPullRequestArrow },
  { label: "Schedule a call", href: "https://cal.com/socialimpression/discovery", icon: CalendarClock, external: true },
  { label: "Download invoice", href: "/dashboard/payments", icon: Download },
];

export default function DashboardHome() {
  const active = projects[0];
  const pendingInputs = projects.flatMap((p) =>
    p.sections.flatMap((s) => s.inputs.filter((i) => i.state !== "done").map((i) => ({ ...i, project: p.name, href: `/dashboard/projects/${p.id}` })))
  );

  return (
    <>
      {/* welcome */}
      <div className="relative mb-10 overflow-hidden rounded-[2rem] border border-line bg-gradient-to-br from-ink-800 via-ink-900 to-ink-950 p-7 md:p-10">
        <div className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-iris-500/25 blur-[90px]" />
        <div className="relative flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-grotesk text-[11px] uppercase tracking-[0.26em] text-signal-300">Good evening, {dashArtist.name}</p>
            <h1 className="mt-3 max-w-xl font-display text-3xl md:text-5xl leading-[1.05] tracking-tight">
              Your next release is <span className="italic text-iris-300">{dashArtist.releaseProgress}% complete.</span>
            </h1>
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-bone-400">
              &ldquo;{active.name}&rdquo; is in vocal recording. Two inputs are waiting on you — the mix slot on Sep 8 is holding for that cover art approval.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-2.5">
              <Pill tone="iris">{dashArtist.package} member</Pill>
              <Pill tone="signal">
                <CalendarClock size={11} /> {dashArtist.nextCall.title} · {dashArtist.nextCall.date}
              </Pill>
              <Pill tone="amber">{pendingInputs.length} inputs waiting</Pill>
            </div>
          </div>
          <div className="flex items-center gap-7">
            <Ring value={dashArtist.releaseProgress} size={132} label={`${dashArtist.releaseProgress}%`} sub="Release" />
            <Bars count={16} className="h-16 w-28 text-iris-400/70" />
          </div>
        </div>
      </div>

      {/* quick actions */}
      <div className="mb-10 grid grid-cols-2 gap-3 lg:grid-cols-4">
        {quickActions.map((a) => {
          const Icon = a.icon;
          const inner = (
            <>
              <Icon size={17} className="text-iris-300" />
              <span className="font-grotesk text-[13px] text-bone-50/90">{a.label}</span>
              <ArrowUpRight size={14} className="ml-auto text-bone-500 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </>
          );
          const cls = "group flex items-center gap-3 rounded-2xl border border-line bg-ink-900 px-4 py-4 transition-all duration-300 hover:border-iris-500/40 hover:bg-ink-850";
          return a.external ? (
            <a key={a.label} href={a.href} target="_blank" rel="noreferrer" className={cls}>
              {inner}
            </a>
          ) : (
            <Link key={a.label} href={a.href} className={cls}>
              {inner}
            </Link>
          );
        })}
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.6fr_1fr]">
        {/* left column */}
        <div className="space-y-6">
          {/* active project */}
          <section className="dash-card overflow-hidden">
            <div className="flex items-center justify-between border-b border-line px-6 py-4">
              <h2 className="font-grotesk text-xs uppercase tracking-[0.22em] text-bone-400">Active project</h2>
              <Link href="/dashboard/projects" className="u-link font-grotesk text-[11px] uppercase tracking-[0.18em] text-bone-400">
                All projects
              </Link>
            </div>
            <Link href={`/dashboard/projects/${active.id}`} className="group block">
              <div className="flex flex-col gap-5 p-6 md:flex-row md:items-center">
                <div className="relative h-28 w-full shrink-0 overflow-hidden rounded-2xl md:h-24 md:w-24">
                  <SmartImage src={active.cover} alt={active.name} className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="120px" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <h3 className="font-display text-2xl tracking-tight">{active.name}</h3>
                    <Pill tone={statusTone(active.status)}>{active.status}</Pill>
                  </div>
                  <p className="mt-1 font-grotesk text-xs text-bone-400">{active.pkg} · {active.stage}</p>
                  <div className="mt-4 h-1.5 w-full max-w-md overflow-hidden rounded-full bg-ink-700">
                    <div className="h-full rounded-full bg-gradient-to-r from-iris-500 to-signal-400 transition-all duration-1000" style={{ width: `${active.progress}%` }} />
                  </div>
                  <p className="mt-2 font-grotesk text-[11px] uppercase tracking-[0.18em] text-bone-500">{active.progress}% · on track for Oct 2 release</p>
                </div>
                <ArrowRight size={18} className="hidden shrink-0 text-bone-500 transition-all duration-300 group-hover:translate-x-1 group-hover:text-bone-50 md:block" />
              </div>
            </Link>
          </section>

          {/* pending inputs */}
          <section className="dash-card">
            <div className="flex items-center justify-between border-b border-line px-6 py-4">
              <h2 className="font-grotesk text-xs uppercase tracking-[0.22em] text-bone-400">Inputs needed from you</h2>
              <span className="font-display text-xl text-amber-300">{pendingInputs.length}</span>
            </div>
            <ul>
              {pendingInputs.map((inp, i) => (
                <li key={i} className="border-b border-line last:border-0">
                  <Link href={inp.href} className="group flex items-center gap-4 px-6 py-4 transition-colors hover:bg-white/[0.02]">
                    {inp.state === "overdue" ? (
                      <AlertCircle size={17} className="shrink-0 text-red-300" />
                    ) : (
                      <Clock size={17} className="shrink-0 text-amber-300" />
                    )}
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm text-bone-50">{inp.label}</p>
                      <p className="mt-0.5 font-grotesk text-[11px] text-bone-500">
                        {inp.project} {inp.due ? `· ${inp.due}` : ""}
                      </p>
                    </div>
                    <ArrowUpRight size={15} className="shrink-0 text-bone-500 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          {/* timeline overview */}
          <section className="dash-card p-6">
            <div className="flex items-center justify-between">
              <h2 className="font-grotesk text-xs uppercase tracking-[0.22em] text-bone-400">Release timeline · Midnight Petals</h2>
              <Link href="/dashboard/timelines" className="u-link font-grotesk text-[11px] uppercase tracking-[0.18em] text-bone-400">
                Full timeline
              </Link>
            </div>
            <ol className="mt-6 flex gap-2 overflow-x-auto pb-1">
              {active.sections[0].timeline.map((m) => (
                <li key={m.label} className="min-w-[130px] flex-1">
                  <div
                    className={`h-1 rounded-full ${
                      m.state === "done" ? "bg-signal-400" : m.state === "active" ? "bg-iris-400" : "bg-ink-700"
                    }`}
                  />
                  <p className={`mt-2.5 text-[13px] ${m.state === "active" ? "text-iris-300" : m.state === "done" ? "text-bone-50/80" : "text-bone-500"}`}>
                    {m.label}
                  </p>
                  <p className="mt-0.5 flex items-center gap-1 font-grotesk text-[10px] uppercase tracking-wider text-bone-500">
                    {m.state === "done" ? <CheckCircle2 size={10} /> : m.state === "active" ? <CircleDashed size={10} className="animate-breathe" /> : null}
                    {m.date}
                  </p>
                </li>
              ))}
            </ol>
          </section>
        </div>

        {/* right column */}
        <div className="space-y-6">
          {/* activity */}
          <section className="dash-card">
            <div className="border-b border-line px-6 py-4">
              <h2 className="font-grotesk text-xs uppercase tracking-[0.22em] text-bone-400">Social Impression activity</h2>
            </div>
            <ul className="px-6 py-2">
              {activity.map((a, i) => (
                <li key={i} className="flex gap-3.5 border-b border-line py-3.5 last:border-0">
                  <span
                    className={`mt-1.5 h-2 w-2 shrink-0 rounded-full ${
                      a.kind === "win" ? "bg-signal-400" : a.kind === "output" ? "bg-iris-400" : a.kind === "call" ? "bg-amber-300" : "bg-bone-500"
                    }`}
                  />
                  <div>
                    <p className="text-[13px] leading-relaxed text-bone-50/85">{a.text}</p>
                    <p className="mt-1 font-grotesk text-[10px] uppercase tracking-wider text-bone-500">{a.time}</p>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          {/* membership snapshot */}
          <section className="dash-card p-6">
            <div className="flex items-center justify-between">
              <h2 className="font-grotesk text-xs uppercase tracking-[0.22em] text-bone-400">Your membership</h2>
              <Sparkles size={15} className="text-signal-300" />
            </div>
            <div className="mt-5 space-y-4 text-sm">
              <div className="flex items-center justify-between">
                <span className="text-bone-400">Package</span>
                <span className="text-bone-50">{dashArtist.package} · since {dashArtist.memberSince}</span>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-bone-400">Storage</span>
                  <span className="text-bone-50">
                    {dashArtist.storageUsed} / {dashArtist.storageTotal} GB
                  </span>
                </div>
                <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-ink-700">
                  <div className="h-full rounded-full bg-iris-400" style={{ width: `${(dashArtist.storageUsed / dashArtist.storageTotal) * 100}%` }} />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-bone-400">Portfolio views</span>
                <span className="flex items-center gap-1.5 text-bone-50">
                  <Eye size={13} className="text-iris-300" />
                  {dashArtist.portfolioViews.toLocaleString()}
                </span>
              </div>
              <div className="flex items-center justify-between border-t border-line pt-4">
                <span className="text-bone-400">Next payment</span>
                <span className="text-right text-bone-50">
                  {inr(upcomingPayment.amount)}
                  <span className="block font-grotesk text-[11px] text-bone-500">due {upcomingPayment.due}</span>
                </span>
              </div>
            </div>
            <div className="mt-5 grid grid-cols-2 gap-2.5">
              <Link href="/dashboard/membership" className="rounded-xl border border-line2 py-2.5 text-center font-grotesk text-xs text-bone-400 transition-colors hover:border-iris-400/50 hover:text-bone-50">
                Membership
              </Link>
              <Link href="/dashboard/payments" className="rounded-xl border border-line2 py-2.5 text-center font-grotesk text-xs text-bone-400 transition-colors hover:border-iris-400/50 hover:text-bone-50">
                Payments
              </Link>
            </div>
          </section>

          {/* portfolio + storage cards */}
          <div className="grid grid-cols-2 gap-4">
            <Link href="/dashboard/portfolio" className="dash-card group p-5 transition-colors hover:border-iris-500/40">
              <FileText size={18} className="text-iris-300" />
              <p className="mt-3 font-display text-2xl tracking-tight">Portfolio</p>
              <p className="mt-1 text-xs leading-relaxed text-bone-400">Your public artist world — live and shareable.</p>
              <p className="mt-3 inline-flex items-center gap-1 font-grotesk text-[11px] uppercase tracking-wider text-bone-500 transition-colors group-hover:text-bone-50">
                Manage <ArrowUpRight size={12} />
              </p>
            </Link>
            <Link href="/dashboard/storage" className="dash-card group p-5 transition-colors hover:border-iris-500/40">
              <HardDrive size={18} className="text-signal-300" />
              <p className="mt-3 font-display text-2xl tracking-tight">{dashArtist.storageUsed} GB</p>
              <p className="mt-1 text-xs leading-relaxed text-bone-400">of {dashArtist.storageTotal} GB used · {invoices.length} invoices stored</p>
              <p className="mt-3 inline-flex items-center gap-1 font-grotesk text-[11px] uppercase tracking-wider text-bone-500 transition-colors group-hover:text-bone-50">
                Open storage <ArrowUpRight size={12} />
              </p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
