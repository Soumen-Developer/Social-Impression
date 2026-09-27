import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Logo, LogoMark } from "@/components/logo";
import { SmartImage } from "@/components/smart-image";
import { Bars } from "@/components/ui";
import { testimonials } from "@/lib/site";

export function AuthShell({
  children,
  quote = 0,
}: {
  children: React.ReactNode;
  quote?: number;
}) {
  const t = testimonials[quote % testimonials.length];
  return (
    <div className="grid min-h-svh lg:grid-cols-[1.1fr_1fr]">
      {/* brand panel */}
      <div className="relative hidden overflow-hidden lg:block">
        <SmartImage src={t.image} alt="" className="object-cover opacity-60" sizes="55vw" priority />
        <div className="absolute inset-0 bg-gradient-to-br from-ink-950/70 via-ink-950/40 to-iris-600/30" />
        <div className="absolute inset-0 flex flex-col justify-between p-12">
          <Link href="/" aria-label="Back home">
            <Logo />
          </Link>
          <div>
            <Bars count={26} className="h-6 w-32 text-signal-400/80" />
            <blockquote className="mt-6 max-w-md font-display text-3xl leading-[1.25] tracking-tight">
              &ldquo;{t.quote}&rdquo;
            </blockquote>
            <p className="mt-5 font-grotesk text-xs uppercase tracking-[0.22em] text-bone-400">
              {t.name} · {t.artist}
            </p>
          </div>
          <p className="font-grotesk text-[11px] uppercase tracking-[0.26em] text-bone-500">
            Idea → Audience · Social Impression
          </p>
        </div>
      </div>

      {/* form panel */}
      <div className="relative flex flex-col px-6 py-8 md:px-14">
        <div className="flex items-center justify-between">
          <Link href="/" className="lg:hidden" aria-label="Back home">
            <LogoMark className="h-8 w-8" />
          </Link>
          <Link href="/" className="u-link ml-auto inline-flex items-center gap-2 font-grotesk text-xs uppercase tracking-[0.18em] text-bone-400">
            <ArrowLeft size={13} />
            Back to site
          </Link>
        </div>
        <div className="flex flex-1 items-center">
          <div className="mx-auto w-full max-w-md py-12">{children}</div>
        </div>
      </div>
    </div>
  );
}

export function AuthField({ label, type = "text", placeholder, autoFocus = false }: { label: string; type?: string; placeholder?: string; autoFocus?: boolean }) {
  return (
    <label className="block">
      <span className="font-grotesk text-[11px] uppercase tracking-[0.18em] text-bone-400">{label}</span>
      <input required type={type} placeholder={placeholder} autoFocus={autoFocus} className="field mt-2" />
    </label>
  );
}
