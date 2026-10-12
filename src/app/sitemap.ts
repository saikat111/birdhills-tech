import { MetadataRoute } from "next";
import { prisma } from "@/lib/prisma";
import { getSiteSettings } from "@/lib/settings";

const SERVICE_IMAGES: Record<string, string> = {
  "web-development":
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=2000&q=90",
  "domain-hosting":
    "https://plus.unsplash.com/premium_photo-1685086785054-d047cdc0e525?auto=format&fit=crop&w=2000&q=90",
  "digital-marketing":
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=2000&q=90",
  "google-business-profile-local-seo":
    "https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=2000&q=90",
  "ai-seo-search":
    "https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&w=2000&q=90",
  "ai-automation":
    "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=2000&q=90",
  "crm-marketing-automation":
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=2000&q=90",
  "branding-creative":
    "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=2000&q=90",
  "analytics-cro":
    "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=2000&q=90",
};

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const settings = await getSiteSettings().catch(() => null);
  const baseUrl =
    settings?.website?.replace(/\/$/, "") ||
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
    process.env.NEXT_PUBLIC_APP_URL?.replace(/\/$/, "") ||
    "https://birdhillstech.com";

  const now = new Date();

  // Static core canonical routes
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 1.0,
      images: [
        "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=2400&q=95",
      ],
    },
    {
      url: `${baseUrl}/services`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${baseUrl}/hosting`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
      images: [
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=2000&q=90",
      ],
    },
    {
      url: `${baseUrl}/domains`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
      images: [
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=2000&q=90",
      ],
    },
    {
      url: `${baseUrl}/work`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
      images: [
        "https://images.unsplash.com/photo-1526495124232-a04e1849168c?auto=format&fit=crop&w=2000&q=90",
      ],
    },
    {
      url: `${baseUrl}/pricing`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.85,
      images: [
        "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=2000&q=90",
      ],
    },
    {
      url: `${baseUrl}/about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
      images: [
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=90",
      ],
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.85,
      images: [
        "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=2000&q=90",
      ],
    },
    {
      url: `${baseUrl}/book-a-meeting`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  try {
    const [services, projects, posts, categories] = await Promise.all([
      prisma.service.findMany({
        where: { published: true },
        select: { slug: true, updatedAt: true },
      }),
      prisma.project.findMany({
        where: { status: "published" },
        select: { slug: true, coverImage: true, updatedAt: true },
      }),
      prisma.blogPost.findMany({
        where: { status: "published" },
        select: { slug: true, coverImage: true, updatedAt: true },
      }),
      prisma.blogCategory.findMany({
        select: { slug: true },
      }),
    ]);

    const serviceUrls: MetadataRoute.Sitemap = services.map((s) => ({
      url: `${baseUrl}/services/${s.slug}`,
      lastModified: s.updatedAt || now,
      changeFrequency: "weekly",
      priority: 0.9,
      images: SERVICE_IMAGES[s.slug] ? [SERVICE_IMAGES[s.slug]] : undefined,
    }));

    const projectUrls: MetadataRoute.Sitemap = projects.map((p) => ({
      url: `${baseUrl}/work/${p.slug}`,
      lastModified: p.updatedAt || now,
      changeFrequency: "monthly",
      priority: 0.85,
      images: p.coverImage ? [p.coverImage] : undefined,
    }));

    const postUrls: MetadataRoute.Sitemap = posts.map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: post.updatedAt || now,
      changeFrequency: "monthly",
      priority: 0.8,
      images: post.coverImage ? [post.coverImage] : undefined,
    }));

    const categoryUrls: MetadataRoute.Sitemap = categories.map((cat) => ({
      url: `${baseUrl}/category/${cat.slug}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.75,
    }));

    return [...staticRoutes, ...serviceUrls, ...projectUrls, ...postUrls, ...categoryUrls];
  } catch (err) {
    console.error("Error generating sitemap:", err);
    return staticRoutes;
  }
}

