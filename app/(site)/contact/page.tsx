import type { Metadata } from "next";
import { CalendarClock, Mail, MessageSquare, MapPin } from "lucide-react";
import { Container, Eyebrow } from "@/components/ui";
import { Reveal } from "@/components/client";
import { ContactForm } from "./contact-form";

export const metadata: Metadata = { title: "Contact" };

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;
  const intent = typeof params.intent === "string" ? params.intent : "artist";

  return (
    <section className="relative overflow-hidden pb-24 pt-32 md:pt-44">
      <div className="pointer-events-none absolute -right-32 top-20 h-96 w-96 rounded-full bg-iris-500/12 blur-[120px]" />
      <Container className="relative">
        <Reveal>
          <Eyebrow className="text-bone-400">Contact</Eyebrow>
          <h1 className="mt-6 max-w-3xl font-display text-[clamp(2.6rem,6vw,5rem)] leading-[1.02] tracking-tight">
            Start the <span className="italic text-iris-300">conversation.</span>
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-bone-400">
            Applying as an artist, partnering with us, or just curious — it all starts here. A human reads every message.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-[1.5fr_1fr]">
          <Reveal>
            <ContactForm initialIntent={intent} />
          </Reveal>

          <Reveal delay={120}>
            <div className="space-y-4">
              <div className="rounded-[2rem] border border-line bg-ink-900 p-7">
                <h3 className="font-display text-2xl tracking-tight">Reach us directly</h3>
                <ul className="mt-5 space-y-4 text-sm">
                  <li className="flex items-center gap-3 text-bone-50/85">
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-line2 text-iris-300">
                      <Mail size={15} />
                    </span>
                    hello@socialimpression.in
                  </li>
                  <li className="flex items-center gap-3 text-bone-50/85">
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-line2 text-iris-300">
                      <MessageSquare size={15} />
                    </span>
                    @socialimpression · everywhere
                  </li>
                  <li className="flex items-center gap-3 text-bone-50/85">
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-line2 text-iris-300">
                      <MapPin size={15} />
                    </span>
                    Mumbai · Bengaluru · Delhi · Pune
                  </li>
                </ul>
              </div>

              <div className="relative overflow-hidden rounded-[2rem] border border-iris-500/30 bg-gradient-to-br from-iris-600/25 via-ink-900 to-ink-950 p-7">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-signal-400 text-ink-900">
                  <CalendarClock size={17} />
                </span>
                <h3 className="mt-4 font-display text-2xl tracking-tight">Prefer talking to typing?</h3>
                <p className="mt-2 text-sm leading-relaxed text-bone-400">
                  Book a 30-minute discovery call. Bring a song, a link, or just the itch — we will tell you honestly if we can move you.
                </p>
                <a
                  href="https://cal.com/socialimpression/discovery"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex items-center gap-2 rounded-full bg-bone-50 px-5 py-2.5 font-grotesk text-xs tracking-wide text-ink-900 transition-all hover:shadow-[0_0_30px_-6px] hover:shadow-signal-400/50"
                >
                  Schedule a discovery call
                </a>
              </div>

              <div className="rounded-[2rem] border border-line bg-ink-900 p-7">
                <p className="font-grotesk text-[11px] uppercase tracking-[0.24em] text-bone-400">Response times</p>
                <ul className="mt-4 space-y-2.5 text-sm text-bone-50/80">
                  <li className="flex justify-between gap-4 border-b border-line pb-2.5">
                    <span>Artist applications</span>
                    <span className="text-bone-400">Within 24h</span>
                  </li>
                  <li className="flex justify-between gap-4 border-b border-line pb-2.5">
                    <span>General & partnerships</span>
                    <span className="text-bone-400">1 working day</span>
                  </li>
                  <li className="flex justify-between gap-4">
                    <span>Active artist support</span>
                    <span className="text-bone-400">Same day</span>
                  </li>
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
