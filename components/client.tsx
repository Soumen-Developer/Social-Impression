"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { ChevronDown, Check } from "lucide-react";

export function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            el.classList.add("in");
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} className={`reveal ${className}`} style={{ ["--reveal-delay" as string]: `${delay}ms` }}>
      {children}
    </div>
  );
}

export function Accordion({ items, light = false }: { items: { q: string; a: string }[]; light?: boolean }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className={`divide-y ${light ? "divide-ink-900/10" : "divide-line"}`}>
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={i}>
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-6 py-5 text-left"
              aria-expanded={isOpen}
            >
              <span className={`font-display text-lg md:text-xl tracking-tight ${light ? "text-ink-900" : "text-bone-50"}`}>{item.q}</span>
              <span
                className={`grid h-8 w-8 shrink-0 place-items-center rounded-full border transition-all duration-300 ${
                  light ? "border-ink-900/20 text-ink-900" : "border-line2 text-bone-50"
                } ${isOpen ? "rotate-180 bg-iris-500 border-iris-500 text-white" : ""}`}
              >
                <ChevronDown size={15} />
              </span>
            </button>
            <div
              className="grid transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
              style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
            >
              <div className="overflow-hidden">
                <p className={`pb-6 pr-10 text-sm md:text-[15px] leading-relaxed ${light ? "text-ink-900/70" : "text-bone-400"}`}>{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export function Toggle({ on, onChange, label }: { on: boolean; onChange: (v: boolean) => void; label?: string }) {
  return (
    <button
      role="switch"
      aria-checked={on}
      aria-label={label}
      onClick={() => onChange(!on)}
      className={`relative h-6 w-11 shrink-0 rounded-full transition-colors duration-300 ${on ? "bg-iris-500" : "bg-ink-600"}`}
    >
      <span
        className={`absolute top-0.5 h-5 w-5 rounded-full bg-white transition-all duration-300 ${on ? "left-[22px]" : "left-0.5"}`}
      />
    </button>
  );
}

export function ChipGroup({
  options,
  value,
  onChange,
}: {
  options: string[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((o) => (
        <button
          key={o}
          onClick={() => onChange(o)}
          className={`rounded-full border px-4 py-2 font-grotesk text-xs tracking-wide transition-all duration-300 ${
            value === o
              ? "border-iris-500 bg-iris-500 text-white"
              : "border-line2 text-bone-400 hover:border-bone-50/40 hover:text-bone-50"
          }`}
        >
          {o}
        </button>
      ))}
    </div>
  );
}

export function Tabs({
  tabs,
  active,
  onChange,
  className = "",
}: {
  tabs: string[];
  active: string;
  onChange: (t: string) => void;
  className?: string;
}) {
  return (
    <div className={`flex gap-1 overflow-x-auto rounded-full border border-line bg-ink-900 p-1 ${className}`}>
      {tabs.map((t) => (
        <button
          key={t}
          onClick={() => onChange(t)}
          className={`whitespace-nowrap rounded-full px-4 py-2 font-grotesk text-xs tracking-wide transition-all duration-300 ${
            active === t ? "bg-bone-50 text-ink-900" : "text-bone-400 hover:text-bone-50"
          }`}
        >
          {t}
        </button>
      ))}
    </div>
  );
}

export function CopyField({ value }: { value: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      onClick={() => {
        navigator.clipboard?.writeText(value).catch(() => {});
        setCopied(true);
        setTimeout(() => setCopied(false), 1600);
      }}
      className="group flex w-full items-center justify-between gap-3 rounded-xl border border-line2 bg-ink-850 px-4 py-3 text-left transition-colors hover:border-iris-400/50"
    >
      <span className="truncate font-grotesk text-sm text-bone-50">{value}</span>
      <span className={`flex items-center gap-1.5 font-grotesk text-[11px] uppercase tracking-wider ${copied ? "text-signal-300" : "text-bone-400 group-hover:text-iris-300"}`}>
        {copied ? <Check size={13} /> : null}
        {copied ? "Copied" : "Copy"}
      </span>
    </button>
  );
}

export function FakeForm({
  cta,
  children,
  success,
}: {
  cta: string;
  children: ReactNode;
  success: string;
}) {
  const [done, setDone] = useState(false);
  if (done)
    return (
      <div className="rounded-2xl border border-signal-400/30 bg-signal-400/5 p-6 text-center">
        <div className="mx-auto grid h-10 w-10 place-items-center rounded-full bg-signal-400 text-ink-900">
          <Check size={18} />
        </div>
        <p className="mt-4 font-display text-xl tracking-tight">{success}</p>
      </div>
    );
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setDone(true);
      }}
      className="space-y-4"
    >
      {children}
      <button
        type="submit"
        className="w-full rounded-full bg-bone-50 py-3.5 font-grotesk text-sm tracking-wide text-ink-900 transition-all duration-300 hover:bg-white hover:shadow-[0_0_40px_-8px] hover:shadow-iris-500/50 active:scale-[0.99]"
      >
        {cta}
      </button>
    </form>
  );
}
