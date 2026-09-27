import type { Metadata } from "next";
import { ArrowRight, Check, Sparkles, Zap, Star } from "lucide-react";
import { Container, Eyebrow, SectionHead, Btn, Pill } from "@/components/ui";
import { Reveal, Accordion } from "@/components/client";
import { SmartImage } from "@/components/smart-image";
import { packages, addons, comparison, packageFaqs } from "@/lib/site";
import { inr } from "@/lib/site";

export const metadata: Metadata = { title: "Packages" };

const accentText = { bone: "text-bone-50", iris: "text-iris-300", signal: "text-signal-300" } as const;
const accentBorder = { bone: "border-bone-50/30", iris: "border-iris-400/50", signal: "border-signal-400/40" } as const;
const accentIcon = { bone: Zap, iris: Sparkles, signal: Star } as const;

const includeCols = [
  { key: "production", label: "Production" },
  { key: "marketing", label: "Marketing" },
  { key: "distribution", label: "Distribution" },
  { key: "freebies", label: "Freebies" },
] as const;

export default function PackagesPage() {
  return (
    <>
      {/* hero */}
      <section className="relative overflow-hidden pb-16 pt-36 md:pb-24 md:pt-48">
        <div className="pointer-events-none absolute -top-32 right-0 h-96 w-96 rounded-full bg-iris-500/15 blur-[120px]" />
        <div className="pointer-events-none absolute left-10 top-40 h-64 w-64 rounded-full bg-signal-400/8 blur-[100px]" />
        <Container className="relative">
          <Reveal>
            <Eyebrow className="text-bone-400">Packages</Eyebrow>
            <h1 className="mt-6 max-w-4xl font-display text-[clamp(2.6rem,6.5vw,5.5rem)] leading-[1.02] tracking-tight">
              Three paths. <span className="italic text-iris-300">One ecosystem.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base md:text-lg leading-relaxed text-bone-400">
              Every package is a stage of the same artist journey — the difference is how far along that journey you are today, and how far you are ready to go. Understand the path first. The pricing follows.
            </p>
          </Reveal>
          <Reveal delay={150}>
            <div className="mt-10 flex flex-wrap gap-3">
              {packages.map((p) => (
                <a
                  key={p.id}
                  href={`#${p.id}`}
                  className="rounded-full border border-line2 px-5 py-2.5 font-grotesk text-xs tracking-wide text-bone-400 transition-all hover:border-iris-400/60 hover:text-bone-50"
                >
                  {p.index} · {p.name}
                </a>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      {/* package sections */}
      {packages.map((p, idx) => {
        const Icon = accentIcon[p.accent];
        return (
          <section key={p.id} id={p.id} className={`relative scroll-mt-24 border-t border-line py-20 md:py-28 ${idx % 2 === 1 ? "bg-ink-900/40" : ""}`}>
            <Container>
              <div className={`grid gap-12 lg:grid-cols-[1fr_1.35fr] lg:gap-16 ${idx % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}>
                <div className="lg:sticky lg:top-28 lg:self-start">
                  <Reveal>
                    <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-line">
                      <SmartImage src={p.image} alt={p.name} className="object-cover" sizes="(max-width:1024px) 100vw, 38vw" />
                      <div className="absolute inset-0 bg-gradient-to-t from-ink-950/85 via-ink-950/10 to-transparent" />
                      <div className="absolute bottom-6 left-6 right-6">
                        <div className="flex items-center gap-3">
                          <span className={`grid h-10 w-10 place-items-center rounded-full border ${accentBorder[p.accent]} bg-ink-950/70 backdrop-blur`}>
                            <Icon size={16} className={accentText[p.accent]} />
                          </span>
                          <span className="font-display text-5xl leading-none">{p.index}</span>
                        </div>
                        <p className="mt-3 font-grotesk text-[11px] uppercase tracking-[0.24em] text-bone-400">{p.duration} · from {inr(p.launchPrice)}</p>
                      </div>
                    </div>
                  </Reveal>
                </div>

                <div>
                  <Reveal>
                    <h2 className={`font-display text-[clamp(2.4rem,5vw,4.2rem)] leading-none tracking-tight ${accentText[p.accent]}`}>{p.name}</h2>
                    <p className="mt-4 font-display text-xl md:text-2xl italic tracking-tight text-bone-50/90">{p.tagline}</p>
                    <p className="mt-4 max-w-xl text-sm md:text-[15px] leading-relaxed text-bone-400">
                      <span className="text-bone-50">Built for: </span>
                      {p.for}
                    </p>
                  </Reveal>

                  <div className="mt-10 grid gap-8 sm:grid-cols-2">
                    {includeCols.map((col, ci) => (
                      <Reveal key={col.key} delay={ci * 70}>
                        <h4 className="flex items-center gap-2 font-grotesk text-[11px] uppercase tracking-[0.24em] text-bone-400">
                          <span className={`h-px w-5 ${p.accent === "signal" ? "bg-signal-400" : p.accent === "iris" ? "bg-iris-400" : "bg-bone-50/40"}`} />
                          {col.label}
                        </h4>
                        <ul className="mt-4 space-y-2.5">
                          {p.includes[col.key].map((item) => (
                            <li key={item} className="flex items-start gap-2.5 text-[13px] leading-relaxed text-bone-50/80">
                              <Check size={13} className={`mt-1 shrink-0 ${accentText[p.accent]}`} />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </Reveal>
                    ))}
                  </div>

                  <Reveal delay={200}>
                    <div className={`mt-10 rounded-2xl border ${accentBorder[p.accent]} bg-ink-950/60 p-6 md:p-7`}>
                      <p className="font-grotesk text-[10px] uppercase tracking-[0.26em] text-bone-400">The outcome</p>
                      <p className="mt-3 font-display text-lg md:text-xl leading-snug tracking-tight text-bone-50">{p.outcome}</p>
                    </div>
                  </Reveal>

                  <Reveal delay={250}>
                    <div className="mt-8 flex flex-col gap-5 rounded-2xl border border-line bg-ink-900 p-6 md:flex-row md:items-center md:justify-between md:p-7">
                      <div>
                        <div className="flex items-baseline gap-3">
                          <span className="font-display text-4xl tracking-tight">{inr(p.launchPrice)}</span>
                          <span className="text-sm text-bone-500 line-through">{inr(p.price)}</span>
                          <Pill tone="signal">Launch pricing</Pill>
                        </div>
                        <p className="mt-2 font-grotesk text-xs tracking-wide text-bone-400">
                          or {p.instalments.count} × {inr(p.instalments.amount)} · no interest, no credit checks
                        </p>
                      </div>
                      <Btn href="/contact?intent=artist" variant={p.accent === "signal" ? "signal" : p.accent === "iris" ? "iris" : "primary"}>
                        Start with {p.name}
                        <ArrowRight size={15} />
                      </Btn>
                    </div>
                  </Reveal>
                </div>
              </div>
            </Container>
          </section>
        );
      })}

      {/* add-ons */}
      <section className="border-t border-line py-20 md:py-28">
        <Container>
          <Reveal>
            <SectionHead
              eyebrow="Add-ons"
              title={
                <>
                  Extra <span className="italic text-iris-300">strings</span> to pull.
                </>
              }
              lede="Bolt any of these onto an active package — or book the standalone ones straight from your dashboard."
            />
          </Reveal>
          <div className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {addons.map((a, i) => (
              <Reveal key={a.name} delay={i * 60} className="bg-ink-950">
                <div className="group flex h-full flex-col justify-between gap-6 p-7 transition-colors duration-500 hover:bg-ink-900">
                  <div>
                    <h3 className="font-display text-2xl tracking-tight">{a.name}</h3>
                    <p className="mt-2 text-[13px] leading-relaxed text-bone-400">{a.note}</p>
                  </div>
                  <p className="font-grotesk text-sm tracking-wide text-signal-300">{a.price}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={200}>
            <p className="mt-8 text-sm text-bone-400">
              Need something bigger — an album, a tour campaign, a brand deal?{" "}
              <a href="/contact?intent=general" className="u-link text-bone-50">
                Ask for a custom quotation
              </a>{" "}
              and we will scope it honestly.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* comparison */}
      <section className="border-t border-line bg-ink-900/40 py-20 md:py-28">
        <Container>
          <Reveal>
            <SectionHead
              eyebrow="Compare"
              title={
                <>
                  Side by <span className="italic text-iris-300">side.</span>
                </>
              }
            />
          </Reveal>

          <Reveal delay={120}>
            <div className="mt-12 hidden overflow-hidden rounded-3xl border border-line md:block">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="bg-ink-800">
                    <th className="p-5 font-grotesk text-[11px] uppercase tracking-[0.2em] text-bone-400">What you get</th>
                    {packages.map((p) => (
                      <th key={p.id} className="p-5">
                        <span className={`font-display text-2xl tracking-tight ${accentText[p.accent]}`}>{p.name}</span>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((row, i) => (
                    <tr key={row.label} className={`border-t border-line ${i % 2 ? "bg-ink-950/40" : ""}`}>
                      <td className="p-5 text-bone-400">{row.label}</td>
                      <td className="p-5 text-bone-50/85">{row.strike}</td>
                      <td className="p-5 text-bone-50/85">{row.momentum}</td>
                      <td className="p-5 text-bone-50/85">{row.northstar}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* mobile comparison cards */}
            <div className="mt-10 space-y-6 md:hidden">
              {packages.map((p) => (
                <div key={p.id} className="rounded-2xl border border-line bg-ink-950 p-6">
                  <h3 className={`font-display text-3xl tracking-tight ${accentText[p.accent]}`}>{p.name}</h3>
                  <dl className="mt-5 space-y-0">
                    {comparison.slice(0, 10).map((row) => (
                      <div key={row.label} className="flex items-baseline justify-between gap-4 border-t border-line py-2.5">
                        <dt className="text-xs text-bone-400">{row.label}</dt>
                        <dd className="text-right text-[13px] text-bone-50/85">
                          {p.id === "strike" ? row.strike : p.id === "momentum" ? row.momentum : row.northstar}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      {/* pricing & payment */}
      <section className="border-t border-line py-20 md:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr]">
            <Reveal>
              <SectionHead
                eyebrow="Pricing & payment"
                title={
                  <>
                    Honest numbers, <span className="italic text-iris-300">split your way.</span>
                  </>
                }
                lede="Launch pricing is limited to our first 100 artists. Instalments are interest-free and scheduled inside your dashboard — the first one starts the work, the rest keep it moving."
              />
              <div className="mt-8 rounded-2xl border border-signal-400/25 bg-signal-400/5 p-6">
                <p className="font-grotesk text-[11px] uppercase tracking-[0.24em] text-signal-300">Limited launch pricing</p>
                <p className="mt-3 text-sm leading-relaxed text-bone-50/80">
                  Standard rates return after the first 100 artists. Current cohort: 8 of 100 slots remain across all packages.
                </p>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="grid gap-4 sm:grid-cols-3">
                {packages.map((p) => (
                  <div key={p.id} className="lift rounded-2xl border border-line bg-ink-900 p-6">
                    <p className={`font-display text-xl tracking-tight ${accentText[p.accent]}`}>{p.name}</p>
                    <p className="mt-4 font-display text-3xl tracking-tight">{inr(p.launchPrice)}</p>
                    <p className="text-xs text-bone-500 line-through">{inr(p.price)}</p>
                    <div className="mt-4 border-t border-line pt-4 text-xs leading-relaxed text-bone-400">
                      {p.instalments.count} × {inr(p.instalments.amount)}
                      <br />
                      {p.duration} journey
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-xs leading-relaxed text-bone-500">
                Ad spend, studio overages beyond package scope and custom quotations are billed transparently at cost. You approve every extra rupee before it is spent.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* faq */}
      <section className="border-t border-line py-20 md:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
            <Reveal>
              <SectionHead eyebrow="Package FAQ" title={<>Before you <span className="italic text-iris-300">commit.</span></>} />
            </Reveal>
            <Reveal delay={120}>
              <Accordion items={packageFaqs} />
            </Reveal>
          </div>
        </Container>
      </section>

      {/* cta */}
      <section className="border-t border-line bg-ink-900/40 py-20 md:py-28">
        <Container className="text-center">
          <Reveal>
            <h2 className="mx-auto max-w-3xl font-display text-[clamp(2.2rem,5vw,4rem)] leading-[1.05] tracking-tight">
              Not sure which path? <span className="italic text-iris-300">That&apos;s what the discovery call is for.</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-bone-400">
              Thirty honest minutes about your music and your goals. We will tell you which package fits — or tell you to wait six months and finish more songs.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Btn href="/contact?intent=artist" variant="primary" className="px-8 py-4">
                Book your discovery call
                <ArrowRight size={15} />
              </Btn>
              <Btn href="/services" variant="outline" className="px-8 py-4">
                See all services
              </Btn>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
