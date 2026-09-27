import Link from "next/link";
import { Logo } from "./logo";
import { Container } from "./ui";
import { Bars } from "./ui";

const cols = [
  {
    title: "Explore",
    links: [
      { label: "Packages", href: "/packages" },
      { label: "Services", href: "/services" },
      { label: "Blogs", href: "/blogs" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "For artists",
    links: [
      { label: "Artist dashboard", href: "/dashboard" },
      { label: "Portfolio", href: "/portfolio/mira-vo" },
      { label: "Community", href: "/dashboard/community" },
      { label: "Opportunities", href: "/dashboard/opportunities" },
    ],
  },
  {
    title: "Account",
    links: [
      { label: "Log in", href: "/login" },
      { label: "Sign up", href: "/signup" },
      { label: "Help centre", href: "/dashboard/help" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-line bg-ink-950">
      <div className="pointer-events-none absolute -top-40 left-1/2 h-80 w-[720px] -translate-x-1/2 rounded-full bg-iris-500/15 blur-[120px]" />
      <Container className="relative pt-16 md:pt-24">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_2fr]">
          <div>
            <Logo />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-bone-400">
              A creative ecosystem for independent artists — production, distribution, marketing and career building under one roof. Made for artists, by people who genuinely understand artists.
            </p>
            <div className="mt-6 flex items-center gap-4 text-bone-400">
              <Bars count={18} className="h-4 w-24 text-iris-400" />
              <span className="font-grotesk text-[11px] uppercase tracking-[0.24em]">Idea → Audience</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {cols.map((c) => (
              <div key={c.title}>
                <h4 className="font-grotesk text-[11px] uppercase tracking-[0.26em] text-bone-400">{c.title}</h4>
                <ul className="mt-4 space-y-2.5">
                  {c.links.map((l) => (
                    <li key={l.label}>
                      <Link href={l.href} className="u-link text-sm text-bone-50/85 hover:text-bone-50">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 select-none overflow-hidden">
          <div className="font-display text-[clamp(3rem,10vw,9rem)] leading-none tracking-tight text-white/[0.045] whitespace-nowrap">
            Social Impression
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-4 border-t border-line py-6 text-xs text-bone-500 md:flex-row md:items-center">
          <p>© 2026 Social Impression. All rights reserved.</p>
          <p className="font-grotesk tracking-wide">hello@socialimpression.in · Mumbai · Bengaluru · Delhi · Pune</p>
        </div>
      </Container>
    </footer>
  );
}
