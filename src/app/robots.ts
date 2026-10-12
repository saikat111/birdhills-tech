import { MetadataRoute } from "next";
import { getSiteSettings } from "@/lib/settings";

export default async function robots(): Promise<MetadataRoute.Robots> {
  const settings = await getSiteSettings().catch(() => null);
  const allowCrawling = settings?.google_indexing !== "disabled";
  const baseUrl =
    settings?.website?.replace(/\/$/, "") ||
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
    process.env.NEXT_PUBLIC_APP_URL?.replace(/\/$/, "") ||
    "https://birdhillstech.com";

  if (!allowCrawling) {
    return {
      rules: [
        {
          userAgent: "*",
          disallow: "/",
        },
      ],
      sitemap: `${baseUrl}/sitemap.xml`,
      host: baseUrl,
    };
  }

  return {
    rules: [
      // Standard search engine crawlers
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin/", "/admin", "/api/"],
      },
      // Googlebot full indexing
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/admin/", "/admin", "/api/"],
      },
      // OpenAI / ChatGPT Search bots (AEO & GEO citation optimization)
      {
        userAgent: ["GPTBot", "ChatGPT-User"],
        allow: "/",
        disallow: ["/admin/", "/admin", "/api/"],
      },
      // Perplexity AI search crawler
      {
        userAgent: "PerplexityBot",
        allow: "/",
        disallow: ["/admin/", "/admin", "/api/"],
      },
      // Anthropic Claude search crawler
      {
        userAgent: ["ClaudeBot", "anthropic-ai"],
        allow: "/",
        disallow: ["/admin/", "/admin", "/api/"],
      },
      // Apple Intelligence crawler
      {
        userAgent: ["Applebot", "Applebot-Extended"],
        allow: "/",
        disallow: ["/admin/", "/admin", "/api/"],
      },
      // Microsoft Bingbot & Copilot
      {
        userAgent: "Bingbot",
        allow: "/",
        disallow: ["/admin/", "/admin", "/api/"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}


