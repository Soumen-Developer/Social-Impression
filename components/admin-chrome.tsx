"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  LayoutDashboard, FolderKanban, Users, Package, Wrench, HardDrive, Bell,
  Megaphone, UserPlus, CircleHelp, BarChart3, Wallet, Search, Menu, X, ExternalLink,
} from "lucide-react";
import { LogoMark } from "@/components/logo";

const nav = [
  { href: "/admin", label: "Home", icon: LayoutDashboard },
  { href: "/admin/projects", label: "Projects", icon: FolderKanban },
  { href: "/admin/clients", label: "Clients", icon: Users },
  { href: "/admin/packages", label: "Package Management", icon: Package },
  { href: "/admin/services", label: "Service Management", icon: Wrench },
  { href: "/admin/storage", label: "Storage", icon: HardDrive },
  { href: "/admin/notifications", label: "Notifications", icon: Bell },
  { href: "/admin/marketing", label: "Pop Marketing", icon: Megaphone },
  { href: "/admin/applications", label: "Artist Applications", icon: UserPlus },
  { href: "/admin/tickets", label: "Tickets / Issues", icon: CircleHelp },
  { href: "/admin/analytics", label: "Analytics", icon: BarChart3 },
  { href: "/admin/sales", label: "Sales Reports", icon: Wallet },
];

export function AdminSidebar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const inner = (
    <>
      <div className="flex items-center justify-between px-5 pt-6">
        <Link href="/admin" className="flex items-center gap-2.5">
          <LogoMark className="h-7 w-7" />
          <span className="font-display text-lg tracking-tight">
            SI <span className="text-iris-300">Admin</span>
          </span>
        </Link>
        <button onClick={() => setOpen(false)} className="grid h-9 w-9 place-items-center rounded-full border border-line2 lg:hidden" aria-label="Close menu">
          <X size={16} />
        </button>
      </div>
      <nav className="flex-1 space-y-0.5 overflow-y-auto px-3 py-6">
        {nav.map((item) => {
          const active = pathname === item.href;
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={`flex items-center gap-3 rounded-xl px-3.5 py-2.5 text-[13px] transition-all ${
                active ? "bg-iris-500/15 text-bone-50 shadow-[inset_2px_0_0_0] shadow-iris-400" : "text-bone-400 hover:bg-white/[0.04] hover:text-bone-50"
              }`}
            >
              <Icon size={16} className={active ? "text-iris-300" : "text-bone-500"} />
              {item.label}
            </Link>
          );
        })}
      </nav>
      <div className="border-t border-line p-4">
        <Link href="/dashboard" className="flex items-center gap-2.5 rounded-xl px-3 py-2.5 text-[13px] text-bone-500 transition-colors hover:text-bone-50">
          <ExternalLink size={15} />
          Artist view
        </Link>
      </div>
    </>
  );

  return (
    <>
      <aside className="fixed inset-y-0 left-0 z-40 hidden w-[248px] flex-col border-r border-line bg-ink-900/60 backdrop-blur lg:flex">{inner}</aside>
      <div className={`fixed inset-0 z-[80] lg:hidden ${open ? "pointer-events-auto" : "pointer-events-none"}`}>
        <div className={`absolute inset-0 bg-ink-950/70 backdrop-blur-sm transition-opacity ${open ? "opacity-100" : "opacity-0"}`} onClick={() => setOpen(false)} />
        <aside className={`absolute inset-y-0 left-0 flex w-[270px] flex-col border-r border-line bg-ink-900 transition-transform duration-300 ${open ? "translate-x-0" : "-translate-x-full"}`}>
          {inner}
        </aside>
      </div>
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-5 left-5 z-[60] grid h-12 w-12 place-items-center rounded-full bg-iris-500 text-white shadow-lg lg:hidden"
        aria-label="Open admin menu"
      >
        <Menu size={19} />
      </button>
    </>
  );
}

export function AdminTopbar({ title }: { title: string }) {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-ink-950/85 backdrop-blur-xl">
      <div className="flex h-14 items-center gap-4 px-4 md:px-7">
        <p className="font-grotesk text-sm uppercase tracking-[0.2em] text-bone-400">{title}</p>
        <label className="relative ml-auto hidden w-72 md:block">
          <Search size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-bone-500" />
          <input placeholder="Search anything…" className="field py-2 pl-10 text-[13px]" />
        </label>
        <span className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-ink-600 to-ink-700 font-grotesk text-[11px] text-bone-50">
          OP
        </span>
      </div>
    </header>
  );
}
