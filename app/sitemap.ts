import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: "https://unitlabs.xyz", changeFrequency: "monthly", priority: 1 }];
}
