import { MetadataRoute } from "next";
import { prisma } from "@/lib/prisma";
import { getSiteSettings } from "@/lib/settings";
import {
  getAllHostingSubSlugs,
  HOSTING_SUB_SERVICES,
  getAllDomainSubSlugs,
  DOMAINS_SUB_SERVICES,
} from "@/data/subServicesData";
import { getAllServiceSubSlugs, ALL_SERVICE_SUB_SERVICES } from "@/data/services";

const SERVICE_IMAGES: Record<string, string> = {
  "web-development": "/images/generated/service_web_development.jpg",
  "domain-hosting": "/images/generated/service_domain_hosting.jpg",
  "digital-marketing": "/images/generated/service_digital_marketing.jpg",
  "google-business-profile-local-seo": "/images/generated/service_local_seo.jpg",
  "ai-seo-search": "/images/generated/service_ai_seo.jpg",
  "ai-automation": "/images/generated/service_ai_automation.jpg",
  "crm-marketing-automation": "/images/generated/service_crm_marketing.jpg",
  "branding-creative": "/images/generated/service_branding_creative.jpg",
  "analytics-cro": "/images/generated/service_analytics_cro.jpg",
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
        "/images/generated/hero_dubai_tech.jpg",
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
        "/images/generated/hero_hosting_cloud.jpg",
      ],
    },
    {
      url: `${baseUrl}/domains`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
      images: [
        "/images/generated/section_global_presence.jpg",
      ],
    },
    {
      url: `${baseUrl}/work`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
      images: [
        "/images/generated/page_work_hero.jpg",
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
        "${baseUrl}/images/generated/hero_dubai_tech.jpg",
      ],
    },
    {
      url: `${baseUrl}/about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
      images: [
        "${baseUrl}/images/generated/page_about_hero.jpg",
      ],
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.85,
      images: [
        "${baseUrl}/images/generated/hero_dubai_tech.jpg",
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

    // Sub-service URLs
    const hostingSubUrls: MetadataRoute.Sitemap = getAllHostingSubSlugs().map((slug) => {
      const item = HOSTING_SUB_SERVICES[slug];
      return {
        url: `${baseUrl}/hosting/${slug}`,
        lastModified: now,
        changeFrequency: "weekly",
        priority: 0.85,
        images: item?.heroImage ? [item.heroImage] : undefined,
      };
    });

    const domainSubUrls: MetadataRoute.Sitemap = getAllDomainSubSlugs().map((slug) => {
      const item = DOMAINS_SUB_SERVICES[slug];
      return {
        url: `${baseUrl}/domains/${slug}`,
        lastModified: now,
        changeFrequency: "weekly",
        priority: 0.85,
        images: item?.heroImage ? [item.heroImage] : undefined,
      };
    });

    const serviceSubUrls: MetadataRoute.Sitemap = getAllServiceSubSlugs().map(({ slug, subSlug }) => {
      const item = ALL_SERVICE_SUB_SERVICES[slug]?.[subSlug];
      return {
        url: `${baseUrl}/services/${slug}/${subSlug}`,
        lastModified: now,
        changeFrequency: "weekly",
        priority: 0.85,
        images: item?.heroImage ? [item.heroImage] : undefined,
      };
    });

    return [
      ...staticRoutes,
      ...serviceUrls,
      ...hostingSubUrls,
      ...domainSubUrls,
      ...serviceSubUrls,
      ...projectUrls,
      ...postUrls,
      ...categoryUrls,
    ];
  } catch (err) {
    console.error("Error generating sitemap:", err);
    return staticRoutes;
  }
}

