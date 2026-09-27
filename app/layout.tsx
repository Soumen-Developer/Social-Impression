import type { Metadata } from "next";
import { Fraunces, Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz"],
  variable: "--font-fraunces",
});

const grotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-grotesk",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Social Impression — A creative ecosystem for independent artists",
    template: "%s — Social Impression",
  },
  description:
    "Production, distribution, marketing and artist development under one roof. Social Impression takes independent artists from idea to audience — without the exhaustion.",
};

export default function RootLayout({
  children,
}: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${grotesk.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-ink-950 text-bone-50 font-sans">
        {children}
      </body>
    </html>
  );
}
