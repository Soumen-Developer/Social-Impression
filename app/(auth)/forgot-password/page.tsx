import Link from "next/link";
import { AuthShell, AuthField } from "../auth-shell";

export const metadata = { title: "Forgot password" };

export default function ForgotPasswordPage() {
  return (
    <AuthShell quote={2}>
      <p className="font-grotesk text-[11px] uppercase tracking-[0.26em] text-iris-300">Account recovery</p>
      <h1 className="mt-4 font-display text-4xl md:text-5xl tracking-tight">Forgot your password?</h1>
      <p className="mt-4 text-sm leading-relaxed text-bone-400">
        Happens to the best of us — usually mid-session. Enter your email and we will send a reset link.
      </p>

      <form action="/reset-password" className="mt-8 space-y-4">
        <AuthField label="Email" type="email" placeholder="you@yourmusic.com" autoFocus />
        <button className="w-full rounded-full bg-bone-50 py-4 font-grotesk text-sm tracking-wide text-ink-900 transition-all duration-300 hover:bg-white hover:shadow-[0_0_40px_-8px] hover:shadow-iris-500/50 active:scale-[0.99]">
          Send reset link
        </button>
      </form>

      <p className="mt-6 text-center text-sm text-bone-400">
        Remembered it?{" "}
        <Link href="/login" className="u-link text-bone-50">
          Back to log in
        </Link>
      </p>
    </AuthShell>
  );
}
