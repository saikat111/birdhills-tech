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

const CORE_SERVICES = [
  "web-development",
  "domain-hosting",
  "digital-marketing",
  "google-business-profile-local-seo",
  "ai-seo-search",
  "ai-automation",
  "crm-marketing-automation",
  "branding-creative",
  "analytics-cro",
];

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

  // 1. Static core canonical routes
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 1.0,
      images: ["/images/generated/hero_dubai_tech.jpg"],
    },
    {
      url: `${baseUrl}/services`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.95,
      images: ["/images/generated/hero_dubai_tech.jpg"],
    },
    {
      url: `${baseUrl}/hosting`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
      images: ["/images/generated/hero_hosting_cloud.jpg"],
    },
    {
      url: `${baseUrl}/domains`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
      images: ["/images/generated/section_global_presence.jpg"],
    },
    {
      url: `${baseUrl}/work`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
      images: ["/images/generated/page_work_hero.jpg"],
    },
    {
      url: `${baseUrl}/pricing`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.85,
      images: ["/images/generated/visual_executive_growth.jpg"],
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.85,
      images: ["/images/generated/hero_dubai_tech.jpg"],
    },
    {
      url: `${baseUrl}/about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
      images: ["/images/generated/page_about_hero.jpg"],
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.85,
      images: ["/images/generated/hero_dubai_tech.jpg"],
    },
    {
      url: `${baseUrl}/book-a-meeting`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.85,
      images: ["/images/generated/hero_dubai_tech.jpg"],
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

  // 2. Core Service Pillar URLs (guaranteed static)
  const coreServiceUrls: MetadataRoute.Sitemap = CORE_SERVICES.map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.9,
    images: SERVICE_IMAGES[slug] ? [SERVICE_IMAGES[slug]] : undefined,
  }));

  // 3. Sub-service URLs (guaranteed static)
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

  // Base guaranteed static routes (95+ routes)
  const baseRoutes: MetadataRoute.Sitemap = [
    ...staticRoutes,
    ...coreServiceUrls,
    ...hostingSubUrls,
    ...domainSubUrls,
    ...serviceSubUrls,
  ];

  // Track URLs already added to avoid duplicates
  const seenUrls = new Set<string>(baseRoutes.map((r) => r.url));
  const dynamicRoutes: MetadataRoute.Sitemap = [];

  // 4. Dynamic database entries (safe lookup)
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

    // Additional database services
    services.forEach((s) => {
      const url = `${baseUrl}/services/${s.slug}`;
      if (!seenUrls.has(url)) {
        seenUrls.add(url);
        dynamicRoutes.push({
          url,
          lastModified: s.updatedAt || now,
          changeFrequency: "weekly",
          priority: 0.9,
          images: SERVICE_IMAGES[s.slug] ? [SERVICE_IMAGES[s.slug]] : undefined,
        });
      }
    });

    // Dynamic projects
    projects.forEach((p) => {
      const url = `${baseUrl}/work/${p.slug}`;
      if (!seenUrls.has(url)) {
        seenUrls.add(url);
        dynamicRoutes.push({
          url,
          lastModified: p.updatedAt || now,
          changeFrequency: "monthly",
          priority: 0.85,
          images: p.coverImage ? [p.coverImage] : undefined,
        });
      }
    });

    // Dynamic blog posts
    posts.forEach((post) => {
      const url = `${baseUrl}/blog/${post.slug}`;
      if (!seenUrls.has(url)) {
        seenUrls.add(url);
        dynamicRoutes.push({
          url,
          lastModified: post.updatedAt || now,
          changeFrequency: "monthly",
          priority: 0.8,
          images: post.coverImage ? [post.coverImage] : undefined,
        });
      }
    });

    // Dynamic blog categories
    categories.forEach((cat) => {
      const url = `${baseUrl}/category/${cat.slug}`;
      if (!seenUrls.has(url)) {
        seenUrls.add(url);
        dynamicRoutes.push({
          url,
          lastModified: now,
          changeFrequency: "weekly",
          priority: 0.75,
        });
      }
    });
  } catch (err) {
    console.warn("Database offline during sitemap generation; using resilient static catalog.", err);
  }

  return [...baseRoutes, ...dynamicRoutes];
}
