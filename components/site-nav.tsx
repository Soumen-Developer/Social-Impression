"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Logo, LogoMark } from "./logo";

const links = [
  { href: "/", label: "Home" },
  { href: "/packages", label: "Packages" },
  { href: "/services", label: "Services" },
  { href: "/blogs", label: "Blogs" },
  { href: "/contact", label: "Contact" },
];

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled ? "border-b border-line bg-ink-950/85 backdrop-blur-xl" : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-16 md:h-[72px] w-full max-w-[1400px] items-center justify-between px-5 md:px-10">
          <Link href="/" aria-label="Social Impression home">
            <Logo />
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {links.map((l) => {
              const active = pathname === l.href;
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`u-link font-grotesk text-[13px] tracking-wide transition-colors ${
                    active ? "text-bone-50" : "text-bone-400 hover:text-bone-50"
                  }`}
                >
                  {l.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Link href="/login" className="rounded-full px-4 py-2 font-grotesk text-[13px] text-bone-400 transition-colors hover:text-bone-50">
              Log in
            </Link>
            <Link
              href="/contact?intent=artist"
              className="group inline-flex items-center gap-1.5 rounded-full bg-bone-50 px-5 py-2.5 font-grotesk text-[13px] tracking-wide text-ink-900 transition-all duration-300 hover:shadow-[0_0_36px_-8px] hover:shadow-iris-500/60"
            >
              Start Your Journey
              <ArrowUpRight size={15} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          <button
            className="grid h-10 w-10 place-items-center rounded-full border border-line2 lg:hidden"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={18} />
          </button>
        </div>
      </header>

      {/* mobile menu */}
      <div
        className={`fixed inset-0 z-[70] flex flex-col bg-ink-950 transition-all duration-500 lg:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="flex h-16 items-center justify-between px-5">
          <Logo />
          <button
            className="grid h-10 w-10 place-items-center rounded-full border border-line2"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
          >
            <X size={18} />
          </button>
        </div>
        <nav className="flex flex-1 flex-col justify-center gap-1 px-6">
          {links.map((l, i) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={`border-b border-line py-4 font-display text-4xl tracking-tight transition-all duration-500 ${
                pathname === l.href ? "text-iris-300" : "text-bone-50"
              } ${open ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`}
              style={{ transitionDelay: `${80 + i * 60}ms` }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3 px-6 pb-10">
          <Link href="/login" className="flex-1 rounded-full border border-line2 py-3.5 text-center font-grotesk text-sm">
            Log in
          </Link>
          <Link href="/contact?intent=artist" className="flex-1 rounded-full bg-bone-50 py-3.5 text-center font-grotesk text-sm text-ink-900">
            Start Your Journey
          </Link>
        </div>
        <div className="pointer-events-none absolute bottom-24 right-8 opacity-20">
          <LogoMark className="h-24 w-24" />
        </div>
      </div>
    </>
  );
}
