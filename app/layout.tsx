import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

// Cabinet Grotesk (Fontshare), self-hosted. 500 for the lede, 800 for everything else.
const cabinetGrotesk = localFont({
  src: [
    { path: "./fonts/CabinetGrotesk-Medium.woff2", weight: "500", style: "normal" },
    { path: "./fonts/CabinetGrotesk-Extrabold.woff2", weight: "800", style: "normal" },
  ],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://unitlabs.xyz"),
  title: "UnitLabs",
  description:
    "UnitLabs is an independent product lab building crypto-native products, protocols, and financial infrastructure.",
  openGraph: {
    title: "UnitLabs",
    description: "We build products for the onchain world.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "UnitLabs" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "UnitLabs",
    description: "We build products for the onchain world.",
    images: ["/og.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#EDEBD6",
  colorScheme: "only light",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={cabinetGrotesk.variable}>
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
