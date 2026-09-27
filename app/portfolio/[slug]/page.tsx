import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Play, Pause, ArrowUpRight, MapPin, Headphones } from "lucide-react";
import { artists } from "@/lib/portfolio";
import { SmartImage } from "@/components/smart-image";
import { Pill, Bars, Marquee } from "@/components/ui";
import { LogoMark } from "@/components/logo";

export function generateStaticParams() {
  return artists.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: PageProps<"/portfolio/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const a = artists.find((x) => x.slug === slug);
  return { title: a ? `${a.moniker} — Portfolio` : "Artist portfolio" };
}

export default async function PortfolioPage({ params }: PageProps<"/portfolio/[slug]">) {
  const { slug } = await params;
  const artist = artists.find((x) => x.slug === slug);
  if (!artist) notFound();
  const released = artist.songs.filter((s) => !s.unreleased);

  return (
    <div className="bg-ink-950">
      {/* hero */}
      <section className="relative flex min-h-svh flex-col justify-end overflow-hidden">
        <div className="absolute inset-0">
          <SmartImage src={artist.cover} alt={artist.moniker} className="object-cover opacity-75" sizes="100vw" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-ink-950/70 via-ink-950/30 to-ink-950" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink-950/60 via-transparent to-transparent" />
        </div>

        <div className="relative mx-auto w-full max-w-[1400px] px-5 pb-12 pt-32 md:px-10">
          <div className="flex flex-wrap items-center gap-2.5">
            <Pill tone="iris">{artist.genre}</Pill>
            <Pill tone="neutral">
              <MapPin size={11} /> {artist.city}
            </Pill>
            <Pill tone="signal">
              <Headphones size={11} /> {artist.monthlyListeners} monthly listeners
            </Pill>
          </div>
          <h1 className="mt-6 font-display text-[clamp(3.2rem,10vw,8.5rem)] leading-[0.95] tracking-tight">{artist.moniker}</h1>
          <div className="mt-8 flex flex-wrap items-end justify-between gap-6">
            <p className="max-w-xl text-sm md:text-base leading-relaxed text-bone-50/75">{artist.bio}</p>
            <div className="flex flex-wrap gap-2.5">
              {artist.socials.map((s) => (
                <span key={s.label} className="rounded-full border border-line2 bg-ink-950/50 px-4 py-2 font-grotesk text-xs text-bone-50/85 backdrop-blur">
                  {s.label} · {s.handle}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Marquee className="border-y border-line py-3.5">
        {Array.from({ length: 6 }).map((_, i) => (
          <span key={i} className="mx-6 flex items-center gap-6 font-grotesk text-[11px] uppercase tracking-[0.3em] text-bone-500">
            {artist.moniker} · official artist world <span className="text-iris-400">✦</span>
          </span>
        ))}
      </Marquee>

      {/* songs */}
      <section className="mx-auto max-w-[1400px] px-5 py-20 md:px-10 md:py-28">
        <div className="flex items-end justify-between gap-6">
          <h2 className="font-display text-3xl md:text-5xl tracking-tight">
            Discography<span className="text-iris-300">.</span>
          </h2>
          <p className="font-grotesk text-[11px] uppercase tracking-[0.22em] text-bone-500">{released.length} releases</p>
        </div>

        <ul className="mt-10 divide-y divide-line border-y border-line">
          {released.map((s, i) => (
            <li key={s.title} className="group flex items-center gap-5 py-5 transition-colors hover:bg-white/[0.02] md:gap-8 md:px-4">
              <span className="w-6 font-grotesk text-xs text-bone-500">{String(i + 1).padStart(2, "0")}</span>
              <button
                className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-line2 transition-all duration-300 group-hover:border-iris-400 group-hover:bg-iris-500"
                aria-label={`Play ${s.title}`}
              >
                <Play size={15} className="translate-x-[1px] transition-opacity group-hover:opacity-0" />
                <Pause size={15} className="absolute opacity-0 transition-opacity group-hover:opacity-100" />
              </button>
              <div className="min-w-0 flex-1">
                <p className="truncate font-display text-xl md:text-2xl tracking-tight">{s.title}</p>
                <p className="font-grotesk text-[11px] uppercase tracking-[0.16em] text-bone-500">{s.plays} plays</p>
              </div>
              <Bars count={14} className="hidden h-5 w-20 text-iris-400/50 md:flex" />
              <span className="font-grotesk text-xs text-bone-400">{s.duration}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* videos */}
      <section className="mx-auto max-w-[1400px] px-5 pb-20 md:px-10 md:pb-28">
        <h2 className="font-display text-3xl md:text-5xl tracking-tight">
          Visuals<span className="text-iris-300">.</span>
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {artist.videos.map((v) => (
            <div key={v.title} className="group relative aspect-video overflow-hidden rounded-3xl border border-line">
              <SmartImage src={v.image} alt={v.title} className="object-cover transition-transform duration-700 group-hover:scale-[1.04]" sizes="(max-width:768px) 100vw, 50vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/85 via-transparent to-transparent" />
              <span className="absolute left-5 top-5 rounded-full border border-line2 bg-ink-950/60 px-3 py-1.5 font-grotesk text-[10px] uppercase tracking-[0.18em] backdrop-blur">
                {v.kind}
              </span>
              <button className="absolute left-1/2 top-1/2 grid h-16 w-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-bone-50/95 text-ink-900 opacity-0 transition-all duration-300 group-hover:opacity-100" aria-label={`Play ${v.title}`}>
                <Play size={20} className="translate-x-[2px]" />
              </button>
              <p className="absolute bottom-5 left-5 right-5 font-display text-xl tracking-tight md:text-2xl">{v.title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* built with */}
      <section className="border-t border-line bg-ink-900/40">
        <div className="mx-auto flex max-w-[1400px] flex-col items-start justify-between gap-8 px-5 py-14 md:flex-row md:items-center md:px-10">
          <div className="flex items-center gap-4">
            <LogoMark className="h-10 w-10 text-iris-300" />
            <div>
              <p className="font-grotesk text-[11px] uppercase tracking-[0.24em] text-bone-400">Artist of the Social Impression ecosystem</p>
              <p className="mt-1 text-sm text-bone-500">Produced, released and amplified with Social Impression.</p>
            </div>
          </div>
          <Link
            href="/contact?intent=artist"
            className="group inline-flex items-center gap-2 rounded-full bg-bone-50 px-6 py-3.5 font-grotesk text-sm text-ink-900 transition-all hover:bg-white hover:shadow-[0_0_36px_-8px] hover:shadow-iris-500/60"
          >
            Build your artist world
            <ArrowUpRight size={15} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
