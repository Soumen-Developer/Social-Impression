"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import {
  LayoutDashboard, FolderKanban, GitCommitHorizontal, Package, Sparkles, UserRound,
  Users, Compass, GraduationCap, HardDrive, CreditCard, Settings, CircleHelp,
  Search, Bell, CalendarClock, Menu, X, Send, Bot, LogOut, ChevronRight, Shield,
} from "lucide-react";
import { LogoMark } from "@/components/logo";
import { notifications, dashArtist } from "@/lib/dash";
import { inr } from "@/lib/site";

const nav = [
  {
    group: "Studio",
    items: [
      { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
      { href: "/dashboard/projects", label: "My Projects", icon: FolderKanban },
      { href: "/dashboard/timelines", label: "Timelines", icon: GitCommitHorizontal },
    ],
  },
  {
    group: "Ecosystem",
    items: [
      { href: "/dashboard/packages", label: "Packages", icon: Package },
      { href: "/dashboard/membership", label: "Membership Services", icon: Sparkles },
      { href: "/dashboard/portfolio", label: "Portfolio", icon: UserRound },
      { href: "/dashboard/community", label: "Community", icon: Users, soon: true },
      { href: "/dashboard/opportunities", label: "Opportunities", icon: Compass, soon: true },
      { href: "/dashboard/education", label: "Education", icon: GraduationCap, soon: true },
    ],
  },
  {
    group: "Account",
    items: [
      { href: "/dashboard/storage", label: "Storage", icon: HardDrive },
      { href: "/dashboard/payments", label: "Payments", icon: CreditCard },
      { href: "/dashboard/settings", label: "Settings", icon: Settings },
      { href: "/dashboard/help", label: "Help", icon: CircleHelp },
    ],
  },
];

const mobileBar = [
  { href: "/dashboard", label: "Home", icon: LayoutDashboard },
  { href: "/dashboard/projects", label: "Projects", icon: FolderKanban },
  { href: "/dashboard/portfolio", label: "Portfolio", icon: UserRound },
];

function SidebarNav({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname();
  return (
    <nav className="flex-1 space-y-7 overflow-y-auto px-4 py-6">
      {nav.map((section) => (
        <div key={section.group}>
          <p className="px-3 font-grotesk text-[10px] uppercase tracking-[0.26em] text-bone-500">{section.group}</p>
          <ul className="mt-2.5 space-y-0.5">
            {section.items.map((item) => {
              const active = pathname === item.href;
              const Icon = item.icon;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={onNavigate}
                    className={`group flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition-all duration-300 ${
                      active
                        ? "bg-iris-500/15 text-bone-50 shadow-[inset_2px_0_0_0] shadow-iris-400"
                        : "text-bone-400 hover:bg-white/[0.04] hover:text-bone-50"
                    }`}
                  >
                    <Icon size={17} className={active ? "text-iris-300" : "text-bone-500 group-hover:text-bone-50"} />
                    <span className="flex-1">{item.label}</span>
                    {"soon" in item && item.soon ? (
                      <span className="rounded-full border border-line2 px-1.5 py-0.5 font-grotesk text-[9px] uppercase tracking-wider text-signal-300">
                        Soon
                      </span>
                    ) : null}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
      <div className="border-t border-line pt-4">
        <Link
          href="/admin"
          onClick={onNavigate}
          className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-bone-500 transition-colors hover:bg-white/[0.04] hover:text-bone-50"
        >
          <Shield size={17} />
          Admin console
          <ChevronRight size={14} className="ml-auto" />
        </Link>
      </div>
    </nav>
  );
}

function UserCard() {
  return (
    <div className="border-t border-line p-4">
      <Link href="/dashboard/settings" className="flex items-center gap-3 rounded-xl p-2 transition-colors hover:bg-white/[0.04]">
        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-gradient-to-br from-iris-500 to-iris-600 font-display text-sm text-white">
          MV
        </span>
        <span className="min-w-0">
          <span className="block truncate font-grotesk text-sm text-bone-50">{dashArtist.fullName}</span>
          <span className="block truncate font-grotesk text-[11px] text-bone-500">{dashArtist.package} member</span>
        </span>
      </Link>
    </div>
  );
}

export function DashSidebar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* desktop */}
      <aside className="fixed inset-y-0 left-0 z-40 hidden w-[264px] flex-col border-r border-line bg-ink-900/60 backdrop-blur lg:flex">
        <Link href="/dashboard" className="flex items-center gap-2.5 px-6 pt-6">
          <LogoMark className="h-7 w-7" />
          <span className="font-display text-lg tracking-tight">Social Impression</span>
        </Link>
        <SidebarNav />
        <UserCard />
      </aside>

      {/* mobile drawer */}
      <div className={`fixed inset-0 z-[80] lg:hidden ${open ? "pointer-events-auto" : "pointer-events-none"}`}>
        <div
          className={`absolute inset-0 bg-ink-950/70 backdrop-blur-sm transition-opacity duration-400 ${open ? "opacity-100" : "opacity-0"}`}
          onClick={() => setOpen(false)}
        />
        <aside
          className={`absolute inset-y-0 left-0 flex w-[290px] flex-col border-r border-line bg-ink-900 transition-transform duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            open ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between px-5 pt-6">
            <Link href="/dashboard" className="flex items-center gap-2.5">
              <LogoMark className="h-7 w-7" />
              <span className="font-display text-lg tracking-tight">Social Impression</span>
            </Link>
            <button onClick={() => setOpen(false)} aria-label="Close menu" className="grid h-9 w-9 place-items-center rounded-full border border-line2">
              <X size={16} />
            </button>
          </div>
          <SidebarNav onNavigate={() => setOpen(false)} />
          <UserCard />
        </aside>
      </div>

      {/* mobile bottom bar */}
      <nav className="fixed inset-x-0 bottom-0 z-[60] border-t border-line bg-ink-950/90 backdrop-blur-xl lg:hidden">
        <div className="grid grid-cols-4">
          {mobileBar.map((m) => {
            const active = pathname === m.href;
            const Icon = m.icon;
            return (
              <Link key={m.href} href={m.href} className={`flex flex-col items-center gap-1 py-2.5 text-[10px] ${active ? "text-iris-300" : "text-bone-500"}`}>
                <Icon size={19} />
                {m.label}
              </Link>
            );
          })}
          <button onClick={() => setOpen(true)} className="flex flex-col items-center gap-1 py-2.5 text-[10px] text-bone-500">
            <Menu size={19} />
            More
          </button>
        </div>
      </nav>
    </>
  );
}

export function DashTopbar() {
  const [notifOpen, setNotifOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const unread = notifications.filter((n) => n.unread).length;

  useEffect(() => {
    const close = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setNotifOpen(false);
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-ink-950/80 backdrop-blur-xl">
      <div className="flex h-16 items-center gap-4 px-4 md:px-8">
        <label className="relative hidden flex-1 md:block md:max-w-sm">
          <Search size={15} className="absolute left-4 top-1/2 -translate-y-1/2 text-bone-500" />
          <input placeholder="Search projects, files, invoices…" className="field py-2.5 pl-10" />
        </label>

        <div className="ml-auto flex items-center gap-2.5">
          <a
            href="https://cal.com/socialimpression/discovery"
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-2 rounded-full bg-signal-400 px-4 py-2.5 font-grotesk text-xs font-medium tracking-wide text-ink-900 transition-all hover:bg-signal-300 hover:shadow-[0_0_30px_-6px] hover:shadow-signal-400/50 sm:inline-flex"
          >
            <CalendarClock size={15} />
            Schedule a call
          </a>

          <div className="relative" ref={ref}>
            <button
              onClick={() => setNotifOpen((v) => !v)}
              className="relative grid h-10 w-10 place-items-center rounded-full border border-line2 transition-colors hover:border-bone-50/40"
              aria-label="Notifications"
            >
              <Bell size={16} />
              {unread > 0 ? (
                <span className="absolute -right-0.5 -top-0.5 grid h-4.5 min-w-4.5 place-items-center rounded-full bg-iris-500 px-1 font-grotesk text-[9px] text-white">
                  {unread}
                </span>
              ) : null}
            </button>

            {notifOpen ? (
              <div className="absolute right-0 top-12 w-[340px] overflow-hidden rounded-2xl border border-line bg-ink-900 shadow-2xl shadow-black/50">
                <div className="flex items-center justify-between border-b border-line px-4 py-3">
                  <p className="font-grotesk text-xs uppercase tracking-[0.2em] text-bone-400">Notifications</p>
                  <button onClick={() => setNotifOpen(false)} aria-label="Close" className="text-bone-500 hover:text-bone-50">
                    <X size={15} />
                  </button>
                </div>
                <ul className="max-h-[360px] overflow-y-auto">
                  {notifications.map((n, i) => (
                    <li key={i} className={`border-b border-line px-4 py-3.5 last:border-0 ${n.unread ? "bg-iris-500/[0.06]" : ""}`}>
                      <p className="flex items-center gap-2 text-sm text-bone-50">
                        {n.unread ? <span className="h-1.5 w-1.5 rounded-full bg-signal-400" /> : null}
                        {n.title}
                      </p>
                      <p className="mt-1 text-xs leading-relaxed text-bone-400">{n.body}</p>
                      <p className="mt-1.5 font-grotesk text-[10px] uppercase tracking-wider text-bone-500">{n.time} ago</p>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>

          <Link href="/dashboard/settings" className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-iris-500 to-iris-600 font-display text-xs text-white" aria-label="Your profile">
            MV
          </Link>
        </div>
      </div>
    </header>
  );
}

const botReplies: { match: string[]; reply: string }[] = [
  { match: ["project", "status", "where"], reply: "Your nearest project is \u201cMidnight Petals\u201d — it's 68% through, currently at vocal recording (Fri 28 Aug). Two inputs are waiting on you: cover art approval and final lyrics v3. Open My Projects to act on them." },
  { match: ["payment", "invoice", "billing"], reply: "Your next payment is ₹18,499 on 12 Sep 2026 (Momentum, instalment 3 of 3). All past invoices live on the Payments page — every one is downloadable." },
  { match: ["call", "schedule", "meeting"], reply: "You can schedule directly with your team from the \u201cSchedule a call\u201d button up top — you'll see your manager's live calendar. Your next call: Vocal recording session, Fri 28 Aug · 4:00 PM IST." },
  { match: ["revision", "change", "mix"], reply: "Revisions are requested from a project's deliverables — hit \u201cRequest revision\u201d and describe the change. You have 2 of 3 rounds left on Midnight Petals production." },
  { match: ["storage", "file", "upload"], reply: "You're using 34.2 GB of 50 GB. Upload release files from the Storage page — masters, stems and artwork are auto-organised by project." },
  { match: ["human", "team", "person", "help"], reply: "Of course. Open a ticket on the Help page and your release manager replies same-day — or use Schedule a call to talk it through live." },
];

export function Chatbot() {
  const [open, setOpen] = useState(false);
  const [msgs, setMsgs] = useState<{ from: "bot" | "me"; text: string }[]>([
    { from: "bot", text: `Hi ${dashArtist.name} — I'm Echo, your dashboard assistant. Ask me about your projects, payments, revisions or calls.` },
  ]);
  const [input, setInput] = useState("");
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [msgs, open]);

  const send = (text: string) => {
    const t = text.trim();
    if (!t) return;
    const lower = t.toLowerCase();
    const hit = botReplies.find((r) => r.match.some((m) => lower.includes(m)));
    setMsgs((m) => [...m, { from: "me", text: t }]);
    setInput("");
    setTimeout(() => {
      setMsgs((m) => [
        ...m,
        {
          from: "bot",
          text: hit?.reply ?? "Good question — I've noted it for your release manager. They'll follow up on this thread, or you can open a ticket from the Help page for a same-day reply.",
        },
      ]);
    }, 600);
  };

  return (
    <>
      <button
        onClick={() => setOpen((v) => !v)}
        className="fixed bottom-20 right-4 z-[70] grid h-13 w-13 place-items-center rounded-full bg-iris-500 text-white shadow-[0_8px_40px_-6px] shadow-iris-500/60 transition-all hover:bg-iris-400 lg:bottom-6 lg:right-6"
        aria-label={open ? "Close assistant" : "Open assistant"}
      >
        {open ? <X size={20} /> : <Bot size={22} />}
      </button>

      <div
        className={`fixed bottom-36 right-4 z-[70] flex w-[min(92vw,370px)] flex-col overflow-hidden rounded-3xl border border-line bg-ink-900 shadow-2xl shadow-black/60 transition-all duration-400 lg:bottom-24 lg:right-6 ${
          open ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
        }`}
      >
        <div className="flex items-center gap-3 border-b border-line px-5 py-4">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-iris-500/20 text-iris-300">
            <Bot size={17} />
          </span>
          <div>
            <p className="font-grotesk text-sm text-bone-50">Echo</p>
            <p className="flex items-center gap-1.5 font-grotesk text-[10px] uppercase tracking-wider text-signal-300">
              <span className="h-1 w-1 animate-breathe rounded-full bg-signal-400" />
              Dashboard assistant
            </p>
          </div>
        </div>

        <div className="flex max-h-[320px] min-h-[220px] flex-col gap-3 overflow-y-auto p-4">
          {msgs.map((m, i) => (
            <div key={i} className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-[13px] leading-relaxed ${m.from === "bot" ? "self-start bg-ink-800 text-bone-50/90" : "self-end bg-iris-500 text-white"}`}>
              {m.text}
            </div>
          ))}
          <div ref={endRef} />
        </div>

        <div className="flex flex-wrap gap-1.5 px-4 pb-2">
          {["Where is my project?", "Next payment?", "Schedule a call"].map((q) => (
            <button key={q} onClick={() => send(q)} className="rounded-full border border-line2 px-3 py-1.5 text-[11px] text-bone-400 transition-colors hover:border-iris-400/50 hover:text-bone-50">
              {q}
            </button>
          ))}
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            send(input);
          }}
          className="flex items-center gap-2 border-t border-line p-3"
        >
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask Echo anything…"
            className="field py-2.5"
            aria-label="Message Echo"
          />
          <button type="submit" className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-iris-500 text-white transition-colors hover:bg-iris-400" aria-label="Send">
            <Send size={15} />
          </button>
        </form>
      </div>
    </>
  );
}

export function PageHeader({
  title,
  sub,
  action,
}: {
  title: string;
  sub?: string;
  action?: React.ReactNode;
}) {
  return (
    <div className="mb-8 flex flex-col gap-4 md:mb-10 md:flex-row md:items-end md:justify-between">
      <div>
        <h1 className="font-display text-3xl md:text-[2.75rem] tracking-tight">{title}</h1>
        {sub ? <p className="mt-2 max-w-2xl text-sm leading-relaxed text-bone-400">{sub}</p> : null}
      </div>
      {action}
    </div>
  );
}

export function NextPaymentChip() {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-line2 px-3.5 py-1.5 font-grotesk text-[11px] text-bone-400">
      <CreditCard size={12} className="text-iris-300" />
      Next payment {inr(dashArtist.nextPayment.amount)} · {dashArtist.nextPayment.due}
    </span>
  );
}

export { LogOut };
