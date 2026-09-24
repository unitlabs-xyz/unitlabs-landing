import type { Metadata, Viewport } from "next";
import "./globals.css";

// Set NEXT_PUBLIC_SITE_URL to the deployed origin so social previews resolve to absolute URLs.
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3200";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
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
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link rel="preconnect" href="https://cdn.fontshare.com" crossOrigin="anonymous" />
        <link
          href="https://api.fontshare.com/v2/css?f[]=array@400,600,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
