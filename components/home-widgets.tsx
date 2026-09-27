"use client";

import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { journey, testimonials } from "@/lib/site";
import { SmartImage } from "./smart-image";
import { Bars } from "./ui";

export function JourneyTimeline() {
  const [active, setActive] = useState(0);
  const [auto, setAuto] = useState(true);
  const stage = journey[active];

  useEffect(() => {
    if (!auto) return;
    const t = setInterval(() => setActive((a) => (a + 1) % journey.length), 4200);
    return () => clearInterval(t);
  }, [auto]);

  const go = (n: number) => {
    setAuto(false);
    setActive((n + journey.length) % journey.length);
  };

  return (
    <div onMouseDown={() => setAuto(false)}>
      {/* track */}
      <div className="relative">
        <div className="absolute left-0 right-0 top-6 hidden h-px bg-line2 md:block" />
        <div
          className="absolute left-0 top-6 hidden h-px bg-gradient-to-r from-iris-400 to-signal-400 transition-all duration-700 md:block"
          style={{ width: `${(active / (journey.length - 1)) * 100}%` }}
        />
        <ol className="flex gap-2 overflow-x-auto pb-4 md:gap-0 md:overflow-visible md:justify-between">
          {journey.map((s, i) => {
            const isActive = i === active;
            const isDone = i < active;
            return (
              <li key={s.n} className="shrink-0 md:shrink">
                <button
                  onClick={() => go(i)}
                  className="group flex flex-col items-center gap-3 md:items-center"
                  aria-label={`Stage ${s.n}: ${s.title}`}
                >
                  <span
                    className={`relative z-10 grid h-12 w-12 place-items-center rounded-full border font-grotesk text-sm transition-all duration-500 ${
                      isActive
                        ? "border-iris-400 bg-iris-500 text-white shadow-[0_0_30px_-4px] shadow-iris-500/70"
                        : isDone
                          ? "border-signal-400/50 bg-signal-400/10 text-signal-300"
                          : "border-line2 bg-ink-950 text-bone-400 group-hover:border-bone-50/40 group-hover:text-bone-50"
                    }`}
                  >
                    {s.n}
                  </span>
                  <span
                    className={`hidden max-w-[110px] text-center font-grotesk text-[10px] uppercase tracking-[0.14em] leading-snug transition-colors md:block ${
                      isActive ? "text-bone-50" : "text-bone-500"
                    }`}
                  >
                    {s.title}
                  </span>
                </button>
              </li>
            );
          })}
        </ol>
      </div>

      {/* detail */}
      <div className="mt-8 grid gap-6 rounded-3xl border border-line bg-ink-900 p-7 md:mt-12 md:grid-cols-[auto_1fr_auto] md:items-center md:p-10">
        <div className="font-display text-6xl md:text-8xl leading-none text-iris-300/90">{stage.n}</div>
        <div className="max-w-xl">
          <div className="flex items-center gap-3">
            <h3 className="font-display text-2xl md:text-3xl tracking-tight">{stage.title}</h3>
          </div>
          <p className="mt-1 font-grotesk text-[11px] uppercase tracking-[0.24em] text-signal-300">{stage.time}</p>
          <p className="mt-4 text-sm md:text-[15px] leading-relaxed text-bone-400">{stage.desc}</p>
        </div>
        <div className="flex gap-2 md:flex-col">
          <button
            onClick={() => go(active - 1)}
            className="grid h-11 w-11 place-items-center rounded-full border border-line2 transition-colors hover:border-bone-50/50 hover:bg-white/5"
            aria-label="Previous stage"
          >
            <ArrowLeft size={16} />
          </button>
          <button
            onClick={() => go(active + 1)}
            className="grid h-11 w-11 place-items-center rounded-full border border-line2 transition-colors hover:border-bone-50/50 hover:bg-white/5"
            aria-label="Next stage"
          >
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}

export function TestimonialCarousel() {
  const [i, setI] = useState(0);
  const t = testimonials[i];

  useEffect(() => {
    const timer = setInterval(() => setI((v) => (v + 1) % testimonials.length), 6500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
      <div>
        <Bars count={22} className="h-5 w-28 text-signal-400/80" />
        <blockquote key={i} className="reveal in mt-6 font-display text-2xl md:text-[2.6rem] leading-[1.2] tracking-tight">
          &ldquo;{t.quote}&rdquo;
        </blockquote>
        <div className="mt-8 flex items-center justify-between">
          <div>
            <p className="font-grotesk text-sm tracking-wide text-bone-50">{t.name}</p>
            <p className="mt-1 font-grotesk text-xs uppercase tracking-[0.18em] text-bone-400">{t.artist}</p>
            <p className="mt-3 inline-flex rounded-full border border-signal-400/30 bg-signal-400/10 px-3 py-1.5 font-grotesk text-[11px] tracking-wide text-signal-300">
              {t.stat}
            </p>
          </div>
          <div className="flex gap-2">
            {testimonials.map((_, n) => (
              <button
                key={n}
                onClick={() => setI(n)}
                aria-label={`Testimonial ${n + 1}`}
                className={`h-1.5 rounded-full transition-all duration-400 ${
                  n === i ? "w-8 bg-iris-400" : "w-1.5 bg-line2 hover:bg-bone-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-line">
          <SmartImage src={t.image} alt={t.name} className="object-cover" sizes="(max-width:1024px) 100vw, 40vw" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-950/70 via-transparent to-transparent" />
          <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
            <p className="font-display text-3xl tracking-tight">{t.name.split(" ")[0]}</p>
            <span className="font-grotesk text-[10px] uppercase tracking-[0.22em] text-bone-400">{String(i + 1).padStart(2, "0")} / 04</span>
          </div>
        </div>
        <div className="absolute -bottom-5 -left-5 -z-10 h-full w-full rounded-3xl border border-iris-500/25" aria-hidden="true" />
      </div>
    </div>
  );
}
