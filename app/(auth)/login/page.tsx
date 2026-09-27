import Link from "next/link";
import { AuthShell, AuthField } from "../auth-shell";

export const metadata = { title: "Log in" };

export default function LoginPage() {
  return (
    <AuthShell quote={0}>
      <p className="font-grotesk text-[11px] uppercase tracking-[0.26em] text-iris-300">Welcome back</p>
      <h1 className="mt-4 font-display text-4xl md:text-5xl tracking-tight">Your studio missed you.</h1>
      <p className="mt-4 text-sm leading-relaxed text-bone-400">Log in to your artist dashboard — projects, timelines and your team are waiting.</p>

      <form action="/dashboard" className="mt-8 space-y-4">
        <AuthField label="Email" type="email" placeholder="you@yourmusic.com" autoFocus />
        <AuthField label="Password" type="password" placeholder="Your password" />
        <div className="flex items-center justify-between text-xs">
          <label className="flex items-center gap-2 text-bone-400">
            <input type="checkbox" className="h-3.5 w-3.5 accent-[#7452f5]" defaultChecked />
            Keep me logged in
          </label>
          <Link href="/forgot-password" className="u-link text-bone-400">
            Forgot password?
          </Link>
        </div>
        <button className="w-full rounded-full bg-bone-50 py-4 font-grotesk text-sm tracking-wide text-ink-900 transition-all duration-300 hover:bg-white hover:shadow-[0_0_40px_-8px] hover:shadow-iris-500/50 active:scale-[0.99]">
          Log in to dashboard
        </button>
      </form>

      <Link
        href="/dashboard"
        className="mt-4 block rounded-full border border-line2 py-3.5 text-center font-grotesk text-xs uppercase tracking-[0.18em] text-bone-400 transition-all hover:border-signal-400/50 hover:text-signal-300"
      >
        Explore the demo dashboard →
      </Link>

      <p className="mt-6 text-center text-sm text-bone-400">
        New here?{" "}
        <Link href="/signup" className="u-link text-bone-50">
          Create an account
        </Link>
      </p>
    </AuthShell>
  );
}
