import { MetadataRoute } from "next";
import { getSiteSettings } from "@/lib/settings";

export default async function robots(): Promise<MetadataRoute.Robots> {
  const settings = await getSiteSettings();
  const allowCrawling = settings.google_indexing === "enabled";

  return {
    rules: [
      {
        userAgent: "*",
        ...(allowCrawling
          ? { allow: "/", disallow: ["/admin/", "/api/admin/"] }
          : { disallow: "/" }),
      },
    ],
    ...(allowCrawling ? { sitemap: "https://birdhillstech.com/sitemap.xml" } : {}),
  };
}


