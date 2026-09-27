"use client";

import { useState } from "react";
import {
  UserRound, Lock, Globe, BellRing, Languages, Package, Sparkles, Bot, LogOut, Check, ChevronRight,
} from "lucide-react";
import Link from "next/link";
import { Toggle } from "@/components/client";
import { dashArtist } from "@/lib/dash";

const sections = [
  { id: "profile", label: "Profile", icon: UserRound },
  { id: "security", label: "Password & security", icon: Lock },
  { id: "portfolio", label: "Portfolio", icon: Globe },
  { id: "notifications", label: "Notifications", icon: BellRing },
  { id: "language", label: "Language", icon: Languages },
  { id: "packages", label: "Packages & services", icon: Package },
  { id: "membership", label: "Membership", icon: Sparkles },
  { id: "chatbot", label: "Chatbot", icon: Bot },
];

function Saved({ show }: { show: boolean }) {
  if (!show) return null;
  return (
    <span className="inline-flex items-center gap-1.5 font-grotesk text-[11px] text-signal-300">
      <Check size={12} /> Saved
    </span>
  );
}

function Row({ title, desc, children }: { title: string; desc?: string; children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-between gap-6 border-b border-line py-4 last:border-0">
      <div>
        <p className="text-sm text-bone-50/90">{title}</p>
        {desc ? <p className="mt-0.5 text-xs text-bone-500">{desc}</p> : null}
      </div>
      {children}
    </div>
  );
}

export function SettingsView() {
  const [tab, setTab] = useState("profile");
  const [saved, setSaved] = useState(false);
  const [notif, setNotif] = useState({ email: true, push: true, marketing: false, weekly: true });
  const [lang, setLang] = useState("English");
  const [echo, setEcho] = useState(true);

  const touch = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 1600);
  };

  return (
    <div className="grid gap-6 lg:grid-cols-[240px_1fr]">
      {/* section nav */}
      <nav className="dash-card h-fit p-2 lg:sticky lg:top-24">
        <ul>
          {sections.map((s) => {
            const Icon = s.icon;
            const active = tab === s.id;
            return (
              <li key={s.id}>
                <button
                  onClick={() => setTab(s.id)}
                  className={`flex w-full items-center gap-3 rounded-xl px-3.5 py-2.5 text-left text-sm transition-all ${
                    active ? "bg-iris-500/15 text-bone-50" : "text-bone-400 hover:bg-white/[0.04] hover:text-bone-50"
                  }`}
                >
                  <Icon size={16} className={active ? "text-iris-300" : "text-bone-500"} />
                  {s.label}
                  <ChevronRight size={13} className={`ml-auto transition-opacity ${active ? "opacity-60" : "opacity-0"}`} />
                </button>
              </li>
            );
          })}
          <li className="border-t border-line pt-2 mt-2">
            <Link href="/login" className="flex w-full items-center gap-3 rounded-xl px-3.5 py-2.5 text-sm text-red-300 transition-colors hover:bg-red-400/10">
              <LogOut size={16} />
              Log out
            </Link>
          </li>
        </ul>
      </nav>

      {/* panels */}
      <div className="dash-card p-6 md:p-8">
        <div className="mb-2 flex items-center justify-between">
          <h2 className="font-display text-2xl tracking-tight">{sections.find((s) => s.id === tab)?.label}</h2>
          <Saved show={saved} />
        </div>

        {tab === "profile" ? (
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="font-grotesk text-[11px] uppercase tracking-[0.18em] text-bone-400">Full name</span>
              <input defaultValue={dashArtist.fullName} onChange={touch} className="field mt-2" />
            </label>
            <label className="block">
              <span className="font-grotesk text-[11px] uppercase tracking-[0.18em] text-bone-400">Artist moniker</span>
              <input defaultValue={dashArtist.moniker} onChange={touch} className="field mt-2" />
            </label>
            <label className="block">
              <span className="font-grotesk text-[11px] uppercase tracking-[0.18em] text-bone-400">Email</span>
              <input defaultValue="mira@miravomusic.com" onChange={touch} className="field mt-2" />
            </label>
            <label className="block">
              <span className="font-grotesk text-[11px] uppercase tracking-[0.18em] text-bone-400">Phone</span>
              <input defaultValue="+91 98••• •••••" onChange={touch} className="field mt-2" />
            </label>
            <label className="block sm:col-span-2">
              <span className="font-grotesk text-[11px] uppercase tracking-[0.18em] text-bone-400">City</span>
              <input defaultValue="Pune" onChange={touch} className="field mt-2" />
            </label>
          </div>
        ) : null}

        {tab === "security" ? (
          <div className="mt-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="font-grotesk text-[11px] uppercase tracking-[0.18em] text-bone-400">Current password</span>
                <input type="password" placeholder="••••••••" className="field mt-2" />
              </label>
              <label className="block">
                <span className="font-grotesk text-[11px] uppercase tracking-[0.18em] text-bone-400">New password</span>
                <input type="password" placeholder="8+ characters" className="field mt-2" />
              </label>
            </div>
            <button onClick={touch} className="mt-5 rounded-full bg-bone-50 px-6 py-3 font-grotesk text-xs text-ink-900 transition-all hover:bg-white">
              Update password
            </button>
            <div className="mt-8 rounded-2xl border border-line bg-ink-850 p-5">
              <p className="font-grotesk text-[11px] uppercase tracking-[0.2em] text-bone-400">Two-factor authentication</p>
              <Row title="Authenticator app" desc="Recommended — protects your masters and payouts">
                <Toggle on={true} onChange={touch} label="2FA" />
              </Row>
              <Row title="Login alerts" desc="Email me on every new device login">
                <Toggle on={true} onChange={touch} label="Login alerts" />
              </Row>
            </div>
          </div>
        ) : null}

        {tab === "portfolio" ? (
          <div className="mt-6">
            <Row title="Public portfolio" desc="Your page at socialimpression.in/portfolio/mira-vo">
              <Toggle on={true} onChange={touch} label="Public portfolio" />
            </Row>
            <Row title="Show unreleased songs" desc="Only on your private preview link">
              <Toggle on={true} onChange={touch} label="Unreleased songs" />
            </Row>
            <Row title="Show monthly listeners" desc="Social proof from your streaming profiles">
              <Toggle on={true} onChange={touch} label="Monthly listeners" />
            </Row>
            <Link href="/dashboard/portfolio" className="mt-6 inline-flex items-center gap-2 rounded-full border border-line2 px-5 py-2.5 font-grotesk text-xs text-bone-50 transition-all hover:border-iris-400/60">
              Open full portfolio manager
            </Link>
          </div>
        ) : null}

        {tab === "notifications" ? (
          <div className="mt-6">
            <Row title="Email notifications" desc="Deliverables, approvals and milestone updates">
              <Toggle on={notif.email} onChange={(v) => { setNotif((n) => ({ ...n, email: v })); touch(); }} label="Email" />
            </Row>
            <Row title="Push notifications" desc="Time-sensitive inputs and session reminders">
              <Toggle on={notif.push} onChange={(v) => { setNotif((n) => ({ ...n, push: v })); touch(); }} label="Push" />
            </Row>
            <Row title="Weekly digest" desc="Your release progress, every Monday morning">
              <Toggle on={notif.weekly} onChange={(v) => { setNotif((n) => ({ ...n, weekly: v })); touch(); }} label="Weekly digest" />
            </Row>
            <Row title="Marketing & offers" desc="Launch pricing, add-on drops, cohort news">
              <Toggle on={notif.marketing} onChange={(v) => { setNotif((n) => ({ ...n, marketing: v })); touch(); }} label="Marketing" />
            </Row>
          </div>
        ) : null}

        {tab === "language" ? (
          <div className="mt-6">
            <p className="text-sm text-bone-400">Dashboard language. Your release content stays in the language you record it in.</p>
            <div className="mt-5 grid gap-2.5 sm:grid-cols-2">
              {["English", "हिन्दी", "मराठी", "தமிழ்"].map((l) => (
                <button
                  key={l}
                  onClick={() => { setLang(l); touch(); }}
                  className={`flex items-center justify-between rounded-xl border px-4 py-3 text-sm transition-all ${
                    lang === l ? "border-iris-500 bg-iris-500/10 text-bone-50" : "border-line2 text-bone-400 hover:border-bone-50/30"
                  }`}
                >
                  {l}
                  {lang === l ? <Check size={14} className="text-signal-300" /> : null}
                </button>
              ))}
            </div>
          </div>
        ) : null}

        {tab === "packages" ? (
          <div className="mt-6">
            <div className="rounded-2xl border border-line bg-ink-850 p-5">
              <p className="flex items-center justify-between text-sm">
                <span className="text-bone-50/90">{dashArtist.package} · active</span>
                <span className="font-grotesk text-xs text-bone-400">since {dashArtist.memberSince}</span>
              </p>
              <p className="mt-2 text-xs leading-relaxed text-bone-500">
                2 singles allocated · 1 add-on single · priority studio booking · 50 GB storage
              </p>
            </div>
            <div className="mt-4 flex flex-wrap gap-2.5">
              <Link href="/dashboard/packages" className="rounded-full bg-bone-50 px-5 py-2.5 font-grotesk text-xs text-ink-900 transition-all hover:bg-white">
                Manage packages
              </Link>
              <Link href="/dashboard/payments" className="rounded-full border border-line2 px-5 py-2.5 font-grotesk text-xs text-bone-50 transition-all hover:border-iris-400/60">
                Billing & invoices
              </Link>
            </div>
          </div>
        ) : null}

        {tab === "membership" ? (
          <div className="mt-6">
            <Row title="Membership status" desc={`${dashArtist.package} member since ${dashArtist.memberSince}`}>
              <span className="rounded-full border border-signal-400/30 bg-signal-400/10 px-3 py-1 font-grotesk text-[11px] text-signal-300">Active</span>
            </Row>
            <Row title="Community access" desc="Private artist network — launching soon">
              <span className="font-grotesk text-[11px] uppercase tracking-wider text-bone-500">Soon</span>
            </Row>
            <Row title="Opportunities board" desc="Gigs, sync briefs and festival calls — launching soon">
              <span className="font-grotesk text-[11px] uppercase tracking-wider text-bone-500">Soon</span>
            </Row>
            <Row title="Education library" desc="Courses on royalties, pitching and releases — soon">
              <span className="font-grotesk text-[11px] uppercase tracking-wider text-bone-500">Soon</span>
            </Row>
            <Link href="/dashboard/membership" className="mt-6 inline-flex items-center gap-2 rounded-full border border-line2 px-5 py-2.5 font-grotesk text-xs text-bone-50 transition-all hover:border-iris-400/60">
              View membership
            </Link>
          </div>
        ) : null}

        {tab === "chatbot" ? (
          <div className="mt-6">
            <Row title="Echo assistant" desc="Ask about projects, payments, revisions and calls">
              <Toggle on={echo} onChange={(v) => { setEcho(v); touch(); }} label="Echo assistant" />
            </Row>
            <Row title="Proactive tips" desc="Let Echo nudge you when an input is due soon">
              <Toggle on={true} onChange={touch} label="Proactive tips" />
            </Row>
            <p className="mt-6 text-xs leading-relaxed text-bone-500">
              Echo never sees anything you have not shared with your team. For anything sensitive, use a support ticket — a human answers those.
            </p>
          </div>
        ) : null}
      </div>
    </div>
  );
}
