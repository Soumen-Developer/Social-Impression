import Link from "next/link";
import type { ReactNode } from "react";

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-[1400px] px-5 md:px-10 ${className}`}>{children}</div>;
}

export function Eyebrow({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <p className={`font-grotesk text-[11px] md:text-xs uppercase tracking-[0.28em] flex items-center gap-3 ${className}`}>
      <span className="inline-block h-1.5 w-1.5 rounded-full bg-signal-400" />
      {children}
    </p>
  );
}

export function SectionHead({
  eyebrow,
  title,
  lede,
  light = false,
  className = "",
}: {
  eyebrow: string;
  title: ReactNode;
  lede?: string;
  light?: boolean;
  className?: string;
}) {
  return (
    <div className={`max-w-3xl ${className}`}>
      <Eyebrow className={light ? "text-ink-900/70" : "text-bone-400"}>{eyebrow}</Eyebrow>
      <h2 className={`mt-5 font-display text-[clamp(2rem,4.5vw,3.6rem)] leading-[1.04] tracking-tight ${light ? "text-ink-900" : "text-bone-50"}`}>
        {title}
      </h2>
      {lede ? <p className={`mt-5 text-base md:text-lg leading-relaxed max-w-2xl ${light ? "text-ink-900/70" : "text-bone-400"}`}>{lede}</p> : null}
    </div>
  );
}

export function Btn({
  href,
  children,
  variant = "primary",
  className = "",
  external = false,
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "outline" | "iris" | "dark" | "signal";
  className?: string;
  external?: boolean;
}) {
  const base =
    "group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-grotesk text-sm tracking-wide transition-all duration-300 active:scale-[0.98]";
  const styles = {
    primary: "bg-bone-50 text-ink-900 hover:bg-white hover:shadow-[0_0_40px_-8px] hover:shadow-iris-500/50",
    outline: "border border-line2 text-bone-50 hover:border-bone-50/60 hover:bg-white/5",
    iris: "bg-iris-500 text-white hover:bg-iris-400",
    dark: "bg-ink-900 text-bone-50 hover:bg-ink-800",
    signal: "bg-signal-400 text-ink-900 hover:bg-signal-300",
  }[variant];
  const cls = `${base} ${styles} ${className}`;
  if (external)
    return (
      <a href={href} target="_blank" rel="noreferrer" className={cls}>
        {children}
      </a>
    );
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}

const pillTones: Record<string, string> = {
  iris: "bg-iris-500/15 text-iris-300 border-iris-500/30",
  signal: "bg-signal-400/10 text-signal-300 border-signal-400/30",
  amber: "bg-amber-400/10 text-amber-300 border-amber-400/30",
  red: "bg-red-400/10 text-red-300 border-red-400/30",
  green: "bg-emerald-400/10 text-emerald-300 border-emerald-400/30",
  neutral: "bg-white/5 text-bone-400 border-line2",
  bone: "bg-bone-50/10 text-bone-50 border-bone-50/25",
};

export function Pill({ children, tone = "neutral", className = "" }: { children: ReactNode; tone?: keyof typeof pillTones; className?: string }) {
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 font-grotesk text-[11px] tracking-wide ${pillTones[tone]} ${className}`}>
      {children}
    </span>
  );
}

export function statusTone(status: string): keyof typeof pillTones {
  const s = status.toLowerCase();
  if (["in progress", "in production", "active", "live", "paid"].includes(s)) return "iris";
  if (["in marketing", "delivered", "completed", "resolved", "accepted"].includes(s)) return "green";
  if (["queued", "planned", "scheduled", "waitlist", "shortlisted"].includes(s)) return "signal";
  if (["input pending", "revision requested", "overdue", "open", "high"].includes(s)) return "amber";
  if (["rejected", "paused", "negative"].includes(s)) return "red";
  return "neutral";
}

export function Ring({
  value,
  size = 120,
  stroke = 8,
  label,
  sub,
  tone = "#9072ff",
  track = "rgba(242,239,231,0.08)",
}: {
  value: number;
  size?: number;
  stroke?: number;
  label?: string;
  sub?: string;
  tone?: string;
  track?: string;
}) {
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const off = c - (value / 100) * c;
  return (
    <div className="relative inline-flex items-center justify-center" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke={track} strokeWidth={stroke} />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke={tone}
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={c}
          strokeDashoffset={off}
          style={{ transition: "stroke-dashoffset 1.2s cubic-bezier(0.22,1,0.36,1)" }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="font-display text-xl leading-none">{label ?? `${value}%`}</span>
        {sub ? <span className="mt-1 font-grotesk text-[9px] uppercase tracking-[0.2em] text-bone-400">{sub}</span> : null}
      </div>
    </div>
  );
}

export function Bars({ count = 24, className = "", playing = true }: { count?: number; className?: string; playing?: boolean }) {
  return (
    <div className={`flex items-end gap-[3px] ${className}`} aria-hidden="true">
      {Array.from({ length: count }).map((_, i) => (
        <span
          key={i}
          className={`w-[3px] rounded-full bg-current ${playing ? "wavebar" : ""}`}
          style={{
            height: `${18 + Math.abs(Math.sin(i * 1.7)) * 82}%`,
            animationDelay: `${(i % 9) * 0.09}s`,
            animationDuration: `${0.9 + (i % 5) * 0.13}s`,
          }}
        />
      ))}
    </div>
  );
}

export function Marquee({ children, className = "", fast = false }: { children: ReactNode; className?: string; fast?: boolean }) {
  return (
    <div className={`overflow-hidden ${className}`}>
      <div className={`flex w-max ${fast ? "animate-marquee-fast" : "animate-marquee"}`}>
        <div className="flex shrink-0 items-center">{children}</div>
        <div className="flex shrink-0 items-center" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}

export function Curve({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 1440 400" fill="none" preserveAspectRatio="none" className={className} aria-hidden="true">
      <path
        d="M-40 320 C 300 80, 620 420, 900 200 S 1400 60, 1500 180"
        stroke="url(#curveGrad)"
        strokeWidth="1.5"
        fill="none"
      />
      <defs>
        <linearGradient id="curveGrad" x1="0" y1="0" x2="1440" y2="0" gradientUnits="userSpaceOnUse">
          <stop stopColor="#9072ff" stopOpacity="0.7" />
          <stop offset="0.5" stopColor="#d8f55f" stopOpacity="0.5" />
          <stop offset="1" stopColor="#9072ff" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function Grain({ className = "" }: { className?: string }) {
  return <div className={`grain fixed inset-0 z-[60] opacity-[0.05] ${className}`} aria-hidden="true" />;
}

export function Stat({ value, label, className = "" }: { value: string; label: string; className?: string }) {
  return (
    <div className={className}>
      <div className="font-display text-3xl md:text-5xl tracking-tight">{value}</div>
      <div className="mt-2 font-grotesk text-[11px] uppercase tracking-[0.22em] text-bone-400">{label}</div>
    </div>
  );
}
