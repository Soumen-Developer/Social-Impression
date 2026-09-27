import Link from "next/link";
import { LogoMark } from "@/components/logo";
import { Bars } from "@/components/ui";

export default function NotFound() {
  return (
    <div className="grid min-h-svh place-items-center bg-ink-950 px-6 text-center">
      <div>
        <LogoMark className="mx-auto h-14 w-14 text-iris-400" />
        <p className="mt-8 font-grotesk text-[11px] uppercase tracking-[0.3em] text-bone-500">404 · dead air</p>
        <h1 className="mt-4 font-display text-5xl md:text-7xl tracking-tight">
          This track doesn&apos;t <span className="italic text-iris-300">exist.</span>
        </h1>
        <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-bone-400">
          The page you are looking for was never released — or it was pulled from streaming. Let&apos;s get you back to the music.
        </p>
        <Bars count={20} className="mx-auto mt-8 h-6 w-32 text-iris-400/60" />
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/" className="rounded-full bg-bone-50 px-6 py-3 font-grotesk text-sm text-ink-900 transition-all hover:bg-white">
            Back home
          </Link>
          <Link href="/dashboard" className="rounded-full border border-line2 px-6 py-3 font-grotesk text-sm text-bone-50 transition-colors hover:border-bone-50/40">
            Artist dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}
