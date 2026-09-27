import Link from "next/link";
import { Check } from "lucide-react";
import { AuthShell } from "../auth-shell";

export const metadata = { title: "Reset password" };

export default function ResetPasswordPage() {
  return (
    <AuthShell quote={3}>
      <p className="font-grotesk text-[11px] uppercase tracking-[0.26em] text-iris-300">Account recovery</p>
      <h1 className="mt-4 font-display text-4xl md:text-5xl tracking-tight">Set a new password.</h1>
      <p className="mt-4 text-sm leading-relaxed text-bone-400">Make it strong. Your masters live behind this login.</p>

      <form action="/login" className="mt-8 space-y-4">
        <label className="block">
          <span className="font-grotesk text-[11px] uppercase tracking-[0.18em] text-bone-400">New password</span>
          <input required type="password" placeholder="8+ characters" autoFocus className="field mt-2" />
        </label>
        <label className="block">
          <span className="font-grotesk text-[11px] uppercase tracking-[0.18em] text-bone-400">Confirm new password</span>
          <input required type="password" placeholder="Same again" className="field mt-2" />
        </label>
        <ul className="space-y-1.5 rounded-xl border border-line bg-ink-900 p-4 text-xs text-bone-400">
          {["8+ characters", "At least one number", "One symbol, for drama"].map((r) => (
            <li key={r} className="flex items-center gap-2">
              <Check size={12} className="text-signal-300" />
              {r}
            </li>
          ))}
        </ul>
        <button className="w-full rounded-full bg-bone-50 py-4 font-grotesk text-sm tracking-wide text-ink-900 transition-all duration-300 hover:bg-white hover:shadow-[0_0_40px_-8px] hover:shadow-iris-500/50 active:scale-[0.99]">
          Reset password & log in
        </button>
      </form>

      <p className="mt-6 text-center text-sm text-bone-400">
        <Link href="/login" className="u-link text-bone-50">
          Back to log in
        </Link>
      </p>
    </AuthShell>
  );
}
