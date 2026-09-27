import type { Metadata } from "next";
import { ArrowRight, Check } from "lucide-react";
import { Container, Eyebrow, SectionHead, Btn, Marquee } from "@/components/ui";
import { Reveal, Accordion } from "@/components/client";
import { SmartImage } from "@/components/smart-image";
import { serviceCategories, serviceFaqs, proofStats } from "@/lib/site";

export const metadata: Metadata = { title: "Services" };

const benefits = [
  { t: "A team, not a marketplace", d: "The same producer, engineer and release manager from onboarding to release report. No rotating freelancers." },
  { t: "One dashboard, zero chaos", d: "Every input, output, deadline and invoice lives in your artist dashboard. Nothing lives in a DM." },
  { t: "Dates you can circle", d: "Your release map is planned in week one and re-checked at every milestone. Delays get re-planned, not ignored." },
  { t: "You own everything", d: "Masters, publishing, profiles, ad accounts, files. We build your infrastructure; you keep the keys." },
];

export default function ServicesPage() {
  return (
    <>
      {/* hero */}
      <section className="relative overflow-hidden pb-14 pt-36 md:pb-20 md:pt-48">
        <div className="pointer-events-none absolute -left-24 top-24 h-80 w-80 rounded-full bg-iris-500/15 blur-[110px]" />
        <Container className="relative">
          <Reveal>
            <Eyebrow className="text-bone-400">Services</Eyebrow>
            <h1 className="mt-6 max-w-4xl font-display text-[clamp(2.6rem,6.5vw,5.5rem)] leading-[1.02] tracking-tight">
              Not a service catalogue. <span className="italic text-iris-300">An ecosystem.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base md:text-lg leading-relaxed text-bone-400">
              Everything below exists for one reason: to move your music from idea to audience. Explore the eight disciplines that make up every Social Impression journey.
            </p>
          </Reveal>
          <Reveal delay={140}>
            <div className="mt-10 flex flex-wrap gap-2">
              {serviceCategories.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="rounded-full border border-line2 px-4 py-2 font-grotesk text-[11px] uppercase tracking-[0.16em] text-bone-400 transition-all hover:border-iris-400/60 hover:text-bone-50"
                >
                  {s.name}
                </a>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      {/* benefits */}
      <section className="border-y border-line bg-ink-900/40">
        <Marquee className="py-3.5 border-b border-line">
          {["What it is", "Why it matters", "What you receive", "The journey", "Your move"].map((w) => (
            <span key={w} className="mx-6 flex items-center gap-6 font-grotesk text-[11px] uppercase tracking-[0.3em] text-bone-500">
              {w}
              <span className="text-iris-400">✦</span>
            </span>
          ))}
        </Marquee>
        <Container className="py-14">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((b, i) => (
              <Reveal key={b.t} delay={i * 70}>
                <div className="border-l-2 border-iris-500/50 pl-5">
                  <h3 className="font-display text-xl tracking-tight">{b.t}</h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-bone-400">{b.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* service sections */}
      {serviceCategories.map((s, i) => (
        <section key={s.id} id={s.id} className={`scroll-mt-24 border-b border-line py-16 md:py-24 ${i % 2 === 1 ? "bg-ink-900/30" : ""}`}>
          <Container>
            <div className={`grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-16 ${i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}>
              <Reveal>
                <div>
                  <div className="flex items-baseline gap-4">
                    <span className="font-grotesk text-xs text-bone-500">{String(i + 1).padStart(2, "0")}</span>
                    <div>
                      <p className="font-grotesk text-[11px] uppercase tracking-[0.24em] text-signal-300">{s.tag}</p>
                      <h2 className="mt-1 font-display text-4xl md:text-5xl tracking-tight">{s.name}</h2>
                    </div>
                  </div>

                  <div className="mt-8 space-y-6">
                    <div>
                      <h4 className="font-grotesk text-[10px] uppercase tracking-[0.26em] text-bone-500">What it is</h4>
                      <p className="mt-2 text-sm md:text-[15px] leading-relaxed text-bone-50/85">{s.what}</p>
                    </div>
                    <div>
                      <h4 className="font-grotesk text-[10px] uppercase tracking-[0.26em] text-bone-500">Why it matters for you</h4>
                      <p className="mt-2 text-sm md:text-[15px] leading-relaxed text-bone-50/85">{s.why}</p>
                    </div>
                  </div>

                  <div className="mt-8 rounded-2xl border border-line bg-ink-950/60 p-6">
                    <h4 className="font-grotesk text-[10px] uppercase tracking-[0.26em] text-bone-500">What you receive</h4>
                    <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                      {s.receive.map((r) => (
                        <li key={r} className="flex items-start gap-2 text-[13px] leading-relaxed text-bone-50/80">
                          <Check size={13} className="mt-1 shrink-0 text-iris-300" />
                          {r}
                        </li>
                      ))}
                    </ul>
                    <p className="mt-4 border-t border-line pt-4 font-grotesk text-[11px] uppercase tracking-[0.16em] text-bone-400">
                      Expected journey · {s.journey}
                    </p>
                  </div>

                  <div className="mt-6">
                    <Btn href="/packages" variant="outline">
                      See it inside a package
                      <ArrowRight size={14} />
                    </Btn>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={120}>
                <div className="relative h-full min-h-[320px] overflow-hidden rounded-[2rem] border border-line lg:min-h-[480px]">
                  <SmartImage src={s.image} alt={s.name} className="object-cover" sizes="(max-width:1024px) 100vw, 45vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-950/70 via-transparent to-ink-950/20" />
                  <span className="absolute left-5 top-5 rounded-full border border-line2 bg-ink-950/60 px-3.5 py-1.5 font-grotesk text-[10px] uppercase tracking-[0.2em] backdrop-blur">
                    {s.name}
                  </span>
                </div>
              </Reveal>
            </div>
          </Container>
        </section>
      ))}

      {/* membership */}
      <section className="py-20 md:py-28">
        <Container>
          <Reveal>
            <div className="relative overflow-hidden rounded-[2rem] border border-line bg-gradient-to-br from-ink-800 via-ink-900 to-ink-950 p-8 md:p-14">
              <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-iris-500/20 blur-[90px]" />
              <div className="relative grid gap-10 lg:grid-cols-[1.2fr_1fr]">
                <div>
                  <Eyebrow className="text-bone-400">Membership</Eyebrow>
                  <h2 className="mt-4 font-display text-3xl md:text-5xl leading-[1.05] tracking-tight">
                    Every package includes the <span className="italic text-iris-300">whole ecosystem.</span>
                  </h2>
                  <p className="mt-5 max-w-lg text-sm md:text-[15px] leading-relaxed text-bone-400">
                    Membership is not a tier you pay extra for. The moment your first package starts, you get the dashboard, the storage, the portfolio, the call scheduler and the reporting — for as long as you are part of Social Impression.
                  </p>
                  <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-4">
                    {proofStats.map((s) => (
                      <div key={s.label}>
                        <p className="font-display text-2xl md:text-3xl tracking-tight">{s.value}</p>
                        <p className="mt-1 font-grotesk text-[10px] uppercase tracking-[0.18em] text-bone-500">{s.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <ul className="space-y-3 self-center">
                  {["Artist dashboard & project workspace", "Portfolio — your official artist world", "50GB+ release-grade storage", "Call scheduler with your team", "Performance reports at day 7/30/90", "Community, Opportunities & Education — coming soon"].map((m) => (
                    <li key={m} className="flex items-center gap-3 rounded-xl border border-line bg-ink-950/50 px-4 py-3 text-sm text-bone-50/85">
                      <Check size={14} className="shrink-0 text-signal-300" />
                      {m}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* faq + cta */}
      <section className="border-t border-line py-20 md:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
            <Reveal>
              <SectionHead
                eyebrow="Service FAQ"
                title={
                  <>
                    The practical <span className="italic text-iris-300">bits.</span>
                  </>
                }
                lede="Everything else is one message away — the team replies within a day."
              />
              <div className="mt-8">
                <Btn href="/contact" variant="primary">
                  Talk to the team
                  <ArrowRight size={15} />
                </Btn>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <Accordion items={serviceFaqs} />
              <div className="mt-10 rounded-2xl border border-line bg-ink-900 p-6">
                <p className="font-grotesk text-[11px] uppercase tracking-[0.24em] text-signal-300">À la carte, from ₹3,499</p>
                <p className="mt-2 text-sm leading-relaxed text-bone-400">
                  Mixing & mastering, lyric videos, live sessions and ad management can be booked standalone — everything else works best inside a package, because that is where outcomes come from.
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
