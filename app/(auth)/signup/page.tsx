import Link from "next/link";
import { AuthShell, AuthField } from "../auth-shell";

export const metadata = { title: "Sign up" };

export default function SignupPage() {
  return (
    <AuthShell quote={1}>
      <p className="font-grotesk text-[11px] uppercase tracking-[0.26em] text-iris-300">Join the ecosystem</p>
      <h1 className="mt-4 font-display text-4xl md:text-5xl tracking-tight">Create your artist account.</h1>
      <p className="mt-4 text-sm leading-relaxed text-bone-400">
        Your dashboard is where the journey lives — projects, timelines, files, payments and your portfolio. Applying to a package starts here too.
      </p>

      <form action="/dashboard" className="mt-8 space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <AuthField label="First name" placeholder="Mira" autoFocus />
          <AuthField label="Artist name" placeholder="MIRA VO" />
        </div>
        <AuthField label="Email" type="email" placeholder="you@yourmusic.com" />
        <AuthField label="Password" type="password" placeholder="8+ characters" />
        <button className="w-full rounded-full bg-bone-50 py-4 font-grotesk text-sm tracking-wide text-ink-900 transition-all duration-300 hover:bg-white hover:shadow-[0_0_40px_-8px] hover:shadow-iris-500/50 active:scale-[0.99]">
          Create account
        </button>
      </form>

      <p className="mt-6 text-center text-sm text-bone-400">
        Already in the ecosystem?{" "}
        <Link href="/login" className="u-link text-bone-50">
          Log in
        </Link>
      </p>
      <p className="mt-8 rounded-2xl border border-line bg-ink-900 p-4 text-center text-xs leading-relaxed text-bone-500">
        Signing up creates your artist workspace. To join a package cohort, you will still apply — we select artists we can genuinely move.
      </p>
    </AuthShell>
  );
}
