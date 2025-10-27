import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://sablesoaps.com";
  const lastmod = new Date();
  const routes = [
    "",
    "/evidence",
    "/for-manufacturers",
    "/about",
    "/privacy",
    "/terms",
  ].map((p) => ({
    url: `${base}${p}`,
    lastModified: lastmod,
    changeFrequency: "weekly" as const,
    priority: p === "" ? 1 : 0.7,
  }));
  return routes;
}