import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check, Minus } from "lucide-react";
import { Container, Eyebrow, SectionHead, Btn, Marquee, Curve, Stat } from "@/components/ui";
import { Reveal, Accordion } from "@/components/client";
import { SmartImage } from "@/components/smart-image";
import { JourneyTimeline, TestimonialCarousel } from "@/components/home-widgets";
import { packages, proofStats, frustrations, faqs, IMG } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      {/* ================================ HERO ================================ */}
      <section className="relative flex min-h-svh flex-col justify-end overflow-hidden">
        <div className="absolute inset-0">
          <SmartImage
            src={IMG.crowdLights}
            alt="Live crowd under stage lights"
            className="object-cover object-center opacity-70"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink-950/80 via-ink-950/40 to-ink-950" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink-950/85 via-ink-950/30 to-transparent" />
        </div>

        <Container className="relative pb-10 pt-36 md:pb-16">
          <Reveal>
            <div className="inline-flex items-center gap-2.5 rounded-full border border-line2 bg-ink-950/60 px-4 py-2 backdrop-blur">
              <span className="h-1.5 w-1.5 animate-breathe rounded-full bg-signal-400" />
              <span className="font-grotesk text-[11px] uppercase tracking-[0.22em] text-bone-50/90">
                Now onboarding Cohort 04 · 8 slots left
              </span>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <h1 className="mt-8 max-w-5xl">
              <span className="block font-grotesk text-[clamp(2.4rem,7vw,6rem)] font-bold uppercase leading-[0.95] tracking-tight">
                You make the music.
              </span>
              <span className="block font-display text-[clamp(2.6rem,7.5vw,6.6rem)] italic leading-[1.02] tracking-tight text-iris-300">
                we make it move.
              </span>
            </h1>
          </Reveal>

          <div className="mt-8 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <Reveal delay={200} className="max-w-xl">
              <p className="text-base md:text-lg leading-relaxed text-bone-50/80">
                Social Impression is a complete creative ecosystem for independent artists — production, distribution, marketing and artist development under one roof. So releasing music finally feels like it should: exciting.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Btn href="/contact?intent=artist">
                  Start Your Artist Journey
                  <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
                </Btn>
                <Btn href="#journey" variant="outline">
                  See How It Works
                </Btn>
              </div>
            </Reveal>

            <Reveal delay={300}>
              <div className="grid grid-cols-2 gap-x-10 gap-y-6 md:grid-cols-4 md:gap-x-8">
                {proofStats.map((s) => (
                  <Stat key={s.label} value={s.value} label={s.label} />
                ))}
              </div>
            </Reveal>
          </div>
        </Container>

        <div className="relative border-t border-line bg-ink-950/60 backdrop-blur-sm">
          <Marquee className="py-4">
            {["Production", "Distribution", "Marketing", "Artist Development", "Release Strategy", "Creative Direction", "Video", "Performance Reports"].map((w) => (
              <span key={w} className="mx-6 flex items-center gap-6 font-grotesk text-xs uppercase tracking-[0.3em] text-bone-400">
                {w}
                <span className="text-iris-400">✦</span>
              </span>
            ))}
          </Marquee>
        </div>
      </section>

      {/* ========================= PROBLEM / SOLUTION ========================= */}
      <section className="paper relative overflow-hidden">
        <Curve className="pointer-events-none absolute inset-x-0 top-0 h-64 w-full text-ink-900/10 opacity-60" />
        <Container className="relative py-24 md:py-36">
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <Reveal>
                <Eyebrow className="text-ink-900/60">The problem</Eyebrow>
                <h2 className="mt-5 font-display text-[clamp(2rem,4.5vw,3.6rem)] leading-[1.05] tracking-tight text-ink-900">
                  Making music was supposed to be the <span className="italic">fun</span> part.
                </h2>
                <p className="mt-5 max-w-md text-base leading-relaxed text-ink-900/70">
                  Somewhere between the voice memo and the release date, the joy gets buried under logistics. If any of this sounds familiar, you are exactly who we built this for.
                </p>
              </Reveal>

              <ul className="mt-10 space-y-0">
                {frustrations.map((f, i) => (
                  <Reveal key={f.title} delay={i * 60}>
                    <li className="group flex items-baseline gap-5 border-t border-ink-900/10 py-4 last:border-b">
                      <span className="font-grotesk text-[11px] text-ink-900/40">{String(i + 1).padStart(2, "0")}</span>
                      <div className="flex flex-1 flex-col gap-1 md:flex-row md:items-baseline md:justify-between md:gap-6">
                        <span className="font-grotesk text-sm font-medium tracking-wide text-ink-900">{f.title}</span>
                        <span className="max-w-sm text-[13px] leading-relaxed text-ink-900/55">{f.desc}</span>
                      </div>
                      <Minus size={14} className="shrink-0 text-ink-900/30 transition-all duration-500 group-hover:rotate-90 group-hover:text-iris-500" />
                    </li>
                  </Reveal>
                ))}
              </ul>
            </div>

            <div className="lg:sticky lg:top-28 lg:self-start">
              <Reveal delay={150}>
                <div className="relative overflow-hidden rounded-[2rem] bg-ink-950 p-8 text-bone-50 md:p-12">
                  <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-iris-500/30 blur-[80px]" />
                  <Eyebrow className="text-bone-400">The solution</Eyebrow>
                  <h3 className="mt-5 font-display text-3xl md:text-5xl leading-[1.05] tracking-tight">
                    One ecosystem.
                    <br />
                    One team.
                    <br />
                    <span className="italic text-iris-300">One timeline.</span>
                  </h3>
                  <p className="mt-6 max-w-md text-sm md:text-[15px] leading-relaxed text-bone-400">
                    Social Impression replaces the group chats, the dropped DMs and the twelve open tabs with a single artist dashboard. Your producer, your release manager, your marketing lead and every deliverable live in one place — with dates attached and your name on the masters.
                  </p>
                  <div className="mt-8 space-y-4 border-t border-line pt-8">
                    <div>
                      <p className="font-grotesk text-[10px] uppercase tracking-[0.26em] text-signal-300">Our vision</p>
                      <p className="mt-2 text-sm leading-relaxed text-bone-50/85">
                        To bridge the gap between independent artists and the global music industry.
                      </p>
                    </div>
                    <div>
                      <p className="font-grotesk text-[10px] uppercase tracking-[0.26em] text-signal-300">Our mission</p>
                      <p className="mt-2 text-sm leading-relaxed text-bone-50/85">
                        To help emerging artists stand out globally — by taking their music from idea to audience without the exhaustion.
                      </p>
                    </div>
                  </div>
                  <div className="mt-8 flex items-center gap-3">
                    <Btn href="/services" variant="iris">
                      Explore the ecosystem
                      <ArrowUpRight size={15} />
                    </Btn>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* ============================== JOURNEY =============================== */}
      <section id="journey" className="relative overflow-hidden py-24 md:py-36">
        <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-[900px] -translate-x-1/2 rounded-full bg-iris-500/10 blur-[130px]" />
        <Container className="relative">
          <Reveal>
            <SectionHead
              eyebrow="How we work"
              title={
                <>
                  Nine stages. One arc. <span className="italic text-iris-300">Zero chaos.</span>
                </>
              }
              lede="Every Social Impression artist walks the same mapped journey — from the first hello to the performance report that shapes your next move."
            />
          </Reveal>
          <Reveal delay={150} className="mt-14 md:mt-20">
            <JourneyTimeline />
          </Reveal>
        </Container>
      </section>

      {/* ============================== PACKAGES ============================== */}
      <section className="relative py-24 md:py-32">
        <Container>
          <Reveal>
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <SectionHead
                eyebrow="Packages"
                title={
                  <>
                    Choose your <span className="italic text-iris-300">path.</span>
                  </>
                }
                lede="Three journeys through the same ecosystem. Each one meets you where your career actually is — not where a pricing table thinks it should be."
              />
              <Btn href="/packages" variant="outline" className="shrink-0">
                Full package details
                <ArrowUpRight size={15} />
              </Btn>
            </div>
          </Reveal>

          <div className="mt-14 md:mt-20">
            {packages.map((p, i) => (
              <Reveal key={p.id} delay={i * 80}>
                <Link
                  href={`/packages#${p.id}`}
                  className={`group grid items-center gap-6 border-t border-line py-8 transition-colors duration-500 last:border-b hover:bg-white/[0.02] md:grid-cols-[90px_1.2fr_1.6fr_auto] md:gap-10 md:py-12`}
                >
                  <span className={`font-display text-5xl md:text-7xl leading-none ${i === 0 ? "hollow" : i === 1 ? "text-iris-300" : "text-signal-300"}`}>
                    {p.index}
                  </span>
                  <div>
                    <h3 className="font-display text-3xl md:text-5xl tracking-tight transition-transform duration-500 group-hover:translate-x-2">{p.name}</h3>
                    <p className="mt-2 text-sm text-bone-400">{p.tagline}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {[p.duration, `${p.includes.production[0].split(",")[0]}`, "Launch ₹" + p.launchPrice.toLocaleString("en-IN")].map((chip) => (
                      <span key={chip} className="rounded-full border border-line2 px-3.5 py-1.5 font-grotesk text-[11px] tracking-wide text-bone-400">
                        {chip}
                      </span>
                    ))}
                  </div>
                  <span className="hidden h-14 w-14 place-items-center rounded-full border border-line2 transition-all duration-500 group-hover:border-iris-400 group-hover:bg-iris-500 md:grid">
                    <ArrowUpRight size={18} className="transition-transform duration-500 group-hover:rotate-45" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ============================== PROOF ================================= */}
      <section className="relative overflow-hidden border-t border-line bg-ink-900/40 py-24 md:py-36">
        <Container>
          <Reveal>
            <SectionHead
              eyebrow="Artist results"
              title={
                <>
                  Proof, not <span className="italic text-iris-300">promises.</span>
                </>
              }
              lede="Real artists, real releases, real numbers you can verify in their public portfolios."
            />
          </Reveal>
          <Reveal delay={120} className="mt-14 md:mt-20">
            <TestimonialCarousel />
          </Reveal>

          <Reveal delay={200}>
            <div className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-line bg-line md:grid-cols-4">
              {[
                { a: "MIRA VO", s: "2.1M", d: "debut single streams" },
                { a: "ASEN", s: "12", d: "editorial playlist adds" },
                { a: "TANVY", s: "890K", d: "streams on EP lead" },
                { a: "KABIR M", s: "1", d: "OTT sync placement" },
              ].map((x) => (
                <div key={x.a} className="bg-ink-900 p-6 md:p-8">
                  <p className="font-grotesk text-[11px] uppercase tracking-[0.24em] text-bone-400">{x.a}</p>
                  <p className="mt-3 font-display text-4xl md:text-5xl tracking-tight text-signal-300">{x.s}</p>
                  <p className="mt-2 text-xs text-bone-400">{x.d}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={250}>
            <div className="mt-16 flex flex-col items-center gap-6 border-t border-line pt-10 md:flex-row md:justify-between">
              <p className="font-grotesk text-[11px] uppercase tracking-[0.26em] text-bone-500">Your music, delivered to</p>
              <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
                {["Spotify", "Apple Music", "YouTube", "Instagram", "Amazon Music", "JioSaavn"].map((b) => (
                  <span key={b} className="font-grotesk text-sm uppercase tracking-[0.18em] text-bone-50/40 transition-colors hover:text-bone-50/80">
                    {b}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* =============================== FAQ ================================== */}
      <section className="py-24 md:py-36">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
            <Reveal>
              <SectionHead
                eyebrow="FAQ"
                title={
                  <>
                    Asked by artists <span className="italic text-iris-300">like you.</span>
                  </>
                }
                lede="Straight answers, no fine print. Anything else — the team replies within a day."
              />
              <div className="mt-8">
                <Btn href="/contact" variant="outline">
                  Ask us anything
                  <ArrowRight size={15} />
                </Btn>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <Accordion items={faqs.slice(0, 6)} />
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ============================= FINAL CTA ============================== */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <SmartImage src={IMG.stage} alt="Artist on stage" className="object-cover" sizes="100vw" />
          <div className="absolute inset-0 bg-ink-950/78" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-transparent to-ink-950/60" />
        </div>
        <Container className="relative py-28 md:py-44 text-center">
          <Reveal>
            <Eyebrow className="justify-center text-bone-400">Final boarding</Eyebrow>
            <h2 className="mx-auto mt-6 max-w-4xl font-display text-[clamp(2.6rem,6.5vw,5.5rem)] leading-[1.02] tracking-tight">
              Your sound has a <span className="italic text-iris-300">destination.</span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-base md:text-lg leading-relaxed text-bone-50/75">
              This is not a service you buy. It is a system you join — built to carry your music from your notes app to the world, and to keep carrying it after that.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <Btn href="/contact?intent=artist" variant="signal" className="px-8 py-4 text-base">
                Apply to Social Impression
                <ArrowRight size={16} />
              </Btn>
              <Btn href="/packages" variant="outline" className="px-8 py-4 text-base">
                Explore packages
              </Btn>
            </div>
            <p className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 font-grotesk text-[11px] uppercase tracking-[0.2em] text-bone-400">
              {["You keep 100% of your masters", "Limited cohort slots", "Reply within 24h"].map((x) => (
                <span key={x} className="flex items-center gap-2">
                  <Check size={13} className="text-signal-300" />
                  {x}
                </span>
              ))}
            </p>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
