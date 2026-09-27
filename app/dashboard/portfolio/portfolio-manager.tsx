"use client";

import { useState } from "react";
import { ExternalLink, Eye, EyeOff, Globe, Music2, Play, Save, Video } from "lucide-react";
import { artists } from "@/lib/portfolio";
import { SmartImage } from "@/components/smart-image";
import { Pill, Bars } from "@/components/ui";
import { Toggle, CopyField } from "@/components/client";

const me = artists[0];
const coverOptions = [me.cover, me.image, me.videos[0].image, me.videos[1].image];

export function PortfolioManager() {
  const [cover, setCover] = useState(0);
  const [bio, setBio] = useState(me.bio);
  const [saved, setSaved] = useState(false);
  const [publicOn, setPublicOn] = useState(true);
  const [songs, setSongs] = useState(me.songs);

  const save = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 1800);
  };

  return (
    <div className="grid gap-6 xl:grid-cols-[1.5fr_1fr]">
      <div className="space-y-6">
        {/* cover picker */}
        <section className="dash-card p-6 md:p-7">
          <div className="flex items-center justify-between">
            <h2 className="font-grotesk text-xs uppercase tracking-[0.22em] text-bone-400">Cover appearance</h2>
            <Pill tone={publicOn ? "green" : "neutral"}>
              {publicOn ? <Eye size={11} /> : <EyeOff size={11} />}
              {publicOn ? "Public" : "Hidden"}
            </Pill>
          </div>
          <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {coverOptions.map((src, i) => (
              <button
                key={i}
                onClick={() => setCover(i)}
                className={`relative aspect-[4/5] overflow-hidden rounded-2xl border-2 transition-all duration-300 ${
                  cover === i ? "border-iris-400 shadow-[0_0_24px_-6px] shadow-iris-500" : "border-transparent opacity-60 hover:opacity-100"
                }`}
                aria-label={`Cover option ${i + 1}`}
              >
                <SmartImage src={src} alt="" className="object-cover" sizes="200px" />
              </button>
            ))}
          </div>
          <div className="mt-5 flex items-center justify-between rounded-xl border border-line bg-ink-850 px-4 py-3">
            <span className="text-sm text-bone-400">Portfolio visibility</span>
            <Toggle on={publicOn} onChange={setPublicOn} label="Portfolio visibility" />
          </div>
        </section>

        {/* bio editor */}
        <section className="dash-card p-6 md:p-7">
          <div className="flex items-center justify-between">
            <h2 className="font-grotesk text-xs uppercase tracking-[0.22em] text-bone-400">Artist biography</h2>
            {saved ? (
              <span className="inline-flex items-center gap-1.5 font-grotesk text-[11px] text-signal-300">
                <Save size={12} /> Saved
              </span>
            ) : null}
          </div>
          <textarea
            value={bio}
            onChange={(e) => {
              setBio(e.target.value);
              setSaved(false);
            }}
            rows={4}
            className="field mt-4 resize-none leading-relaxed"
          />
          <div className="mt-4 flex items-center justify-between">
            <p className="font-grotesk text-[11px] text-bone-500">{bio.length} characters · shows on your public portfolio</p>
            <button onClick={save} className="rounded-full bg-bone-50 px-5 py-2.5 font-grotesk text-xs text-ink-900 transition-all hover:bg-white">
              Save bio
            </button>
          </div>
        </section>

        {/* songs */}
        <section className="dash-card p-6 md:p-7">
          <div className="flex items-center justify-between">
            <h2 className="font-grotesk text-xs uppercase tracking-[0.22em] text-bone-400">Songs</h2>
            <span className="font-grotesk text-[11px] text-bone-500">{songs.filter((s) => !s.unreleased).length} public · {songs.filter((s) => s.unreleased).length} unreleased</span>
          </div>
          <ul className="mt-4 divide-y divide-line">
            {songs.map((s, i) => (
              <li key={s.title} className="flex items-center gap-4 py-3.5">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-line2 text-iris-300">
                  <Play size={13} />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm text-bone-50">{s.title}</p>
                  <p className="font-grotesk text-[11px] text-bone-500">{s.plays} plays · {s.duration}</p>
                </div>
                {s.unreleased ? <Pill tone="signal">Unreleased</Pill> : <Pill tone="neutral">Released</Pill>}
                <Toggle
                  on={!s.unreleased}
                  label={`Toggle ${s.title}`}
                  onChange={(v) => setSongs((arr) => arr.map((x, xi) => (xi === i ? { ...x, unreleased: !v } : x)))}
                />
              </li>
            ))}
          </ul>
          <p className="mt-4 text-xs leading-relaxed text-bone-500">
            Unreleased songs appear only on your private preview link — perfect for A&R moments and curator pitches.
          </p>
        </section>
      </div>

      {/* right column */}
      <div className="space-y-6">
        {/* live preview */}
        <section className="dash-card overflow-hidden">
          <div className="flex items-center justify-between border-b border-line px-5 py-3.5">
            <h2 className="font-grotesk text-xs uppercase tracking-[0.22em] text-bone-400">Live preview</h2>
            <a href={`/portfolio/${me.slug}`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 font-grotesk text-[11px] uppercase tracking-wider text-iris-300 transition-colors hover:text-iris-200">
              Open <ExternalLink size={11} />
            </a>
          </div>
          <div className="relative aspect-[4/3]">
            <SmartImage src={coverOptions[cover]} alt="" className="object-cover" sizes="400px" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/30 to-transparent" />
            <div className="absolute bottom-4 left-5 right-5">
              <p className="font-display text-3xl tracking-tight">{me.moniker}</p>
              <p className="mt-1 font-grotesk text-[10px] uppercase tracking-[0.2em] text-bone-400">{me.genre} · {me.city} · {me.monthlyListeners} listeners</p>
            </div>
          </div>
          <div className="p-5">
            <p className="line-clamp-3 text-[13px] leading-relaxed text-bone-400">{bio}</p>
            <div className="mt-4 flex items-center gap-3 border-t border-line pt-4">
              <Bars count={12} className="h-3.5 w-16 text-signal-400/80" />
              <span className="font-grotesk text-[10px] uppercase tracking-[0.2em] text-bone-500">{songs.length} tracks · {me.videos.length} videos</span>
            </div>
          </div>
        </section>

        {/* url */}
        <section className="dash-card p-6">
          <h2 className="font-grotesk text-xs uppercase tracking-[0.22em] text-bone-400">Your portfolio URL</h2>
          <div className="mt-4">
            <CopyField value={`socialimpression.in/portfolio/${me.slug}`} />
          </div>
          <p className="mt-3 text-xs leading-relaxed text-bone-500">This is your official artist world — put it in every bio, pitch and press kit.</p>
        </section>

        {/* socials */}
        <section className="dash-card p-6">
          <h2 className="font-grotesk text-xs uppercase tracking-[0.22em] text-bone-400">Social links</h2>
          <ul className="mt-4 space-y-2.5">
            {me.socials.map((s) => (
              <li key={s.label} className="flex items-center justify-between rounded-xl border border-line bg-ink-850 px-4 py-3 text-sm">
                <span className="flex items-center gap-2.5 text-bone-50/90">
                  <Globe size={13} className="text-iris-300" />
                  {s.label}
                </span>
                <span className="text-bone-400">{s.handle}</span>
              </li>
            ))}
          </ul>
          <button className="mt-4 w-full rounded-full border border-line2 py-2.5 font-grotesk text-xs text-bone-400 transition-colors hover:border-iris-400/50 hover:text-bone-50">
            + Add a link
          </button>
        </section>

        {/* videos */}
        <section className="dash-card p-6">
          <h2 className="flex items-center gap-2 font-grotesk text-xs uppercase tracking-[0.22em] text-bone-400">
            <Video size={13} /> Videos on your portfolio
          </h2>
          <ul className="mt-4 space-y-2.5">
            {me.videos.map((v) => (
              <li key={v.title} className="flex items-center gap-3 rounded-xl border border-line bg-ink-850 px-4 py-3 text-sm">
                <Music2 size={13} className="shrink-0 text-ember-400" />
                <span className="min-w-0 flex-1 truncate text-bone-50/90">{v.title}</span>
                <span className="font-grotesk text-[10px] uppercase tracking-wider text-bone-500">{v.kind}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
