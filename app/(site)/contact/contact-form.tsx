"use client";

import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";

const intents = [
  { id: "artist", label: "Artist application", desc: "Join the waitlist & book a discovery call" },
  { id: "general", label: "General enquiry", desc: "Questions about anything" },
  { id: "partnership", label: "Partnership", desc: "Studios, brands, labels & collaborators" },
  { id: "support", label: "Support", desc: "Existing artist? We'll route it to your team" },
];

export function ContactForm({ initialIntent }: { initialIntent: string }) {
  const [intent, setIntent] = useState(intents.some((i) => i.id === initialIntent) ? initialIntent : "artist");
  const [sent, setSent] = useState(false);

  if (sent)
    return (
      <div className="flex h-full min-h-[420px] flex-col items-center justify-center rounded-[2rem] border border-signal-400/30 bg-signal-400/5 p-10 text-center">
        <div className="grid h-12 w-12 place-items-center rounded-full bg-signal-400 text-ink-900">
          <Check size={22} />
        </div>
        <h3 className="mt-6 font-display text-3xl tracking-tight">Message received.</h3>
        <p className="mt-3 max-w-sm text-sm leading-relaxed text-bone-400">
          {intent === "artist"
            ? "Your application is in. We review every one personally — expect a reply within 24 hours with next steps or a discovery call link."
            : "Thanks for reaching out. The right person on the team will reply within one working day."}
        </p>
        <button onClick={() => setSent(false)} className="u-link mt-6 font-grotesk text-xs uppercase tracking-[0.2em] text-bone-400">
          Send another message
        </button>
      </div>
    );

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      className="rounded-[2rem] border border-line bg-ink-900 p-7 md:p-9"
    >
      <p className="font-grotesk text-[11px] uppercase tracking-[0.24em] text-bone-400">What brings you here?</p>
      <div className="mt-4 grid gap-2 sm:grid-cols-2">
        {intents.map((i) => (
          <button
            type="button"
            key={i.id}
            onClick={() => setIntent(i.id)}
            className={`rounded-xl border p-4 text-left transition-all duration-300 ${
              intent === i.id ? "border-iris-500 bg-iris-500/10" : "border-line2 hover:border-bone-50/30"
            }`}
          >
            <span className="flex items-center justify-between font-grotesk text-sm text-bone-50">
              {i.label}
              <span className={`h-2 w-2 rounded-full ${intent === i.id ? "bg-signal-400" : "bg-line2"}`} />
            </span>
            <span className="mt-1 block text-xs text-bone-400">{i.desc}</span>
          </button>
        ))}
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="font-grotesk text-[11px] uppercase tracking-[0.18em] text-bone-400">Name</span>
          <input required className="field mt-2" placeholder="Your name" />
        </label>
        <label className="block">
          <span className="font-grotesk text-[11px] uppercase tracking-[0.18em] text-bone-400">Email</span>
          <input required type="email" className="field mt-2" placeholder="you@yourmusic.com" />
        </label>
      </div>

      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="font-grotesk text-[11px] uppercase tracking-[0.18em] text-bone-400">Artist / project name</span>
          <input className="field mt-2" placeholder="e.g. MIRA VO" />
        </label>
        <label className="block">
          <span className="font-grotesk text-[11px] uppercase tracking-[0.18em] text-bone-400">City</span>
          <input className="field mt-2" placeholder="Where you make music" />
        </label>
      </div>

      {intent === "artist" && (
        <label className="mt-4 block">
          <span className="font-grotesk text-[11px] uppercase tracking-[0.18em] text-bone-400">Links to your music</span>
          <input className="field mt-2" placeholder="Spotify / SoundCloud / Instagram / YouTube — links matter more than follower counts" />
        </label>
      )}

      <label className="mt-4 block">
        <span className="font-grotesk text-[11px] uppercase tracking-[0.18em] text-bone-400">Message</span>
        <textarea
          required
          rows={4}
          className="field mt-2 resize-none"
          placeholder={
            intent === "artist"
              ? "Tell us about your music and where you want it to go."
              : intent === "partnership"
                ? "Tell us about your organisation and the idea."
                : "How can we help?"
          }
        />
      </label>

      <button
        type="submit"
        className="group mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-bone-50 py-4 font-grotesk text-sm tracking-wide text-ink-900 transition-all duration-300 hover:bg-white hover:shadow-[0_0_40px_-8px] hover:shadow-iris-500/50 active:scale-[0.99]"
      >
        {intent === "artist" ? "Apply & join the waitlist" : "Send message"}
        <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
      </button>
      <p className="mt-4 text-center text-xs text-bone-500">
        We reply within 24 hours. No spam, no newsletters unless you ask.
      </p>
    </form>
  );
}
