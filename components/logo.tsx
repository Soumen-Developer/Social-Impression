export function LogoMark({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
      <path
        d="M17.4 4.2c4.6 2.2 8.4 1.4 10-2.2.6 5.6-2.6 9-8.2 9.9l-3.4.5c5.9 1.7 8.3 4.9 6.6 9.4-1.3 3.4-4.6 5.4-9.3 5.4-4.9 0-8.6-2.3-9.6-6l4.6-1.2c.6 2 2.3 3.1 4.9 3.1 2.4 0 4-.9 4.6-2.5.8-2.2-1.2-3.7-6-5.1C6 14 4.2 11.6 5.1 8.4 5.9 5.5 8.8 3.7 13 3.7c1.7 0 3.1.2 4.4.5Z"
        fill="currentColor"
      />
      <ellipse cx="9.4" cy="26.4" rx="6.6" ry="4.9" transform="rotate(-18 9.4 26.4)" fill="currentColor" />
    </svg>
  );
}

export function Logo({
  className = "",
  wordClass = "",
}: {
  className?: string;
  wordClass?: string;
}) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <LogoMark className="h-7 w-7 shrink-0" />
      <span className={`font-display text-[1.35rem] leading-none tracking-tight ${wordClass}`}>
        Social Impression
      </span>
    </span>
  );
}
