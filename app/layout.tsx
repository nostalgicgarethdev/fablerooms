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

const SITE = "https://fablerooms.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: "FableRooms — Backrooms of Claude Fable 5",
  description:
    "Play FableRooms free in your browser. Backrooms horror through the Anthropic archives — collect 8 Claude fable pages from the lineage to Fable 5, escape Level 0.",
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
      "You noclipped into the Anthropic archives. Find 8 fable pages from the Claude lineage, escape Level 0.",
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
      "You noclipped into the Anthropic archives. Collect 8 Claude fable pages. Escape Level 0.",
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
    "Free first-person Backrooms horror in the browser. Walk the Anthropic archives — journal pages from Claude 1 through Fable 5 — and escape while something hunts you by sound.",
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
