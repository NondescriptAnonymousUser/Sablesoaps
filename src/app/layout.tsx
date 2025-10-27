import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const brand = process.env.NEXT_PUBLIC_BRAND_NAME ?? "Sable Soaps";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://sablesoaps.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: brand,
    template: `%s | ${brand}`,
  },
  description: "Modern, minimalist hygiene—without the hidden stuff.",
  alternates: { canonical: siteUrl }, // use absolute URL to avoid type weirdness
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: brand,
    title: brand,
    description: "Modern, minimalist hygiene—without the hidden stuff.",
    images: [{ url: "/og.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: brand,
    description: "Modern, minimalist hygiene—without the hidden stuff.",
    images: ["/og.jpg"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans`}>{children}</body>
    </html>
  );
}