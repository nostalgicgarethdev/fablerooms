import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

// Special Elite (Apache 2.0), self-hosted: builds kept failing on flaky
// fetches to fonts.gstatic.com, and bundling kills that dependency for
// Vercel too.
const specialElite = localFont({
  src: "./fonts/SpecialElite.woff2",
  variable: "--font-elite",
  weight: "400",
  display: "swap",
  // Turbopack dev fails decompressing this woff2 when computing the
  // size-adjusted fallback ("get_font_fallbacks ... compression error").
  // Skip it and declare fallbacks by hand — it's a decorative font.
  adjustFontFallback: false,
  fallback: ["Courier New", "monospace"],
});

const SITE = "https://fablerooms.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: "FableRooms — Backrooms of Claude Fable 5",
  description:
    "Play FableRooms free in your browser. First-person Backrooms horror where Claude's fables meet Fable 5 — find 8 journal pages, escape Level 0, don't let it hear you walk.",
  applicationName: "FableRooms",
  authors: [
    { name: "nostalgicgarethdev", url: "https://github.com/nostalgicgarethdev" },
    { name: "StarKnightt", url: "https://github.com/StarKnightt" },
  ],
  creator: "nostalgicgarethdev",
  keywords: [
    "fablerooms",
    "backrooms game",
    "claude fable",
    "fable 5 backrooms",
    "browser horror game",
    "level 0",
    "liminal space game",
    "three.js game",
    "procedural horror",
  ],
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "FableRooms — Backrooms of Claude Fable 5",
    description:
      "You noclipped where Claude's fables went to rot. Find 8 journal pages, escape the maze, don't let it hear you walk.",
    url: "/",
    siteName: "FableRooms",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    site: "@NostaIgicGareth",
    creator: "@NostaIgicGareth",
    title: "FableRooms — Backrooms of Claude Fable 5",
    description:
      "You noclipped where Claude's fables went to rot. Find 8 pages, escape, don't let it hear you walk.",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0905",
  colorScheme: "dark",
  // Game viewport: bleed under notches in fullscreen, no pinch/double-tap
  // zoom fighting the touch controls.
  viewportFit: "cover",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

// Structured data: lets Google show this as a game in rich results.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  name: "FableRooms",
  url: SITE,
  image: `${SITE}/opengraph-image.png`,
  description:
    "Free first-person Backrooms horror in the browser. Claude fable folklore meets Fable 5 — collect 8 journal pages and escape while something hunts you by sound.",
  genre: ["Horror", "Survival"],
  playMode: "SinglePlayer",
  gamePlatform: ["Web Browser"],
  applicationCategory: "Game",
  operatingSystem: "Any",
  inLanguage: "en",
  isAccessibleForFree: true,
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
  },
  author: {
    "@type": "Person",
    name: "nostalgicgarethdev",
    url: "https://github.com/nostalgicgarethdev",
    sameAs: ["https://github.com/nostalgicgarethdev"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${specialElite.variable} h-full antialiased`}>
      <body className="h-full overflow-hidden bg-black text-zinc-200">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
        {children}
        {/* Vercel-only — the CrazyGames bundle would just spam 404s */}
        {process.env.CG_EXPORT !== "1" && <Analytics />}
      </body>
    </html>
  );
}
