"use client";

import { useState } from "react";
import Image from "next/image";
import { LogoMark } from "./logo";

export function SmartImage({
  src,
  alt,
  className = "",
  sizes = "100vw",
  priority = false,
  fallbackClass = "",
}: {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
  fallbackClass?: string;
}) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={`flex items-center justify-center bg-gradient-to-br from-ink-700 via-ink-900 to-iris-600/40 ${fallbackClass} ${className}`}
        aria-label={alt}
        role="img"
      >
        <LogoMark className="h-10 w-10 text-bone-50/30" />
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes}
      priority={priority}
      className={className}
      onError={() => setFailed(true)}
    />
  );
}
