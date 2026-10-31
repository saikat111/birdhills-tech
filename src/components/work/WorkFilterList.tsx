"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ExternalLink } from "lucide-react";

interface ProjectItem {
  id: string;
  title: string;
  slug: string;
  client: string;
  industry: string;
  category: string;
  shortDesc: string;
  coverImage: string;
  servicesJson: string;
  techJson: string;
}

interface WorkFilterListProps {
  initialProjects: ProjectItem[];
}

const categories = ["All", "Web", "E-commerce", "Branding", "Marketing", "UI/UX", "AI"];

const defaultFallbackProjects: ProjectItem[] = [
  {
    id: "proj-1",
    title: "Apex Global Capital — Enterprise Investment Portal",
    slug: "apex-global-capital",
    client: "Apex Capital Partners",
    industry: "Financial Services",
    category: "Web",
    shortDesc:
      "High-throughput wealth management portal with Next.js 16, interactive portfolio telemetry, and sub-second load times.",
    coverImage: "/images/generated/preview_web_dev.jpg",
    servicesJson: JSON.stringify(["Web Development", "UI/UX Design"]),
    techJson: JSON.stringify(["Next.js 16", "TypeScript", "Tailwind CSS"]),
  },
  {
    id: "proj-2",
    title: "Luxe Atelier — Headless Luxury E-Commerce",
    slug: "luxe-atelier",
    client: "Luxe International",
    industry: "Luxury Retail",
    category: "E-commerce",
    shortDesc:
      "Headless Shopify & Next.js storefront engineered with multi-currency checkout, sub-10ms edge caching, and 3.8x conversion lift.",
    coverImage: "/images/generated/showcase_ecommerce.jpg",
    servicesJson: JSON.stringify(["E-commerce", "CRO"]),
    techJson: JSON.stringify(["Shopify Plus", "Next.js", "Stripe"]),
  },
  {
    id: "proj-3",
    title: "OmniLogistics — Multi-Agent Freight Automation",
    slug: "omnilogistics",
    client: "Omni Freight Worldwide",
    industry: "Logistics",
    category: "AI",
    shortDesc:
      "Autonomous AI agents and WhatsApp dispatch workflows automating 82% of freight quote requests in real time.",
    coverImage: "/images/generated/preview_aiauto.jpg",
    servicesJson: JSON.stringify(["AI Automation", "CRM"]),
    techJson: JSON.stringify(["Python", "n8n", "WhatsApp Cloud API"]),
  },
  {
    id: "proj-4",
    title: "Falcon Real Estate — Local 3-Pack Rank Radar",
    slug: "falcon-real-estate",
    client: "Falcon Properties Group",
    industry: "Real Estate",
    category: "Marketing",
    shortDesc:
      "Dominating prime commercial real estate search queries with localized Google Business Profile grids and 5-star review pipelines.",
    coverImage: "/images/generated/preview_localseo.jpg",
    servicesJson: JSON.stringify(["Local SEO", "Digital Marketing"]),
    techJson: JSON.stringify(["Google Ads", "GBP API", "Looker Studio"]),
  },
  {
    id: "proj-5",
    title: "Veritas Health — Private Telehealth Platform",
    slug: "veritas-health",
    client: "Veritas Healthcare",
    industry: "Healthcare",
    category: "Web",
    shortDesc:
      "HIPAA-compliant patient booking portal and physician scheduling system integrated with end-to-end encrypted records.",
    coverImage: "/images/generated/vertical_healthcare.jpg",
    servicesJson: JSON.stringify(["Custom Development", "Cloud Hosting"]),
    techJson: JSON.stringify(["React", "PostgreSQL", "AWS HIPAA Cloud"]),
  },
  {
    id: "proj-6",
    title: "Aura Sovereign — Global Brand Identity & Design System",
    slug: "aura-sovereign",
    client: "Aura Group",
    industry: "Holding Company",
    category: "Branding",
    shortDesc:
      "Comprehensive visual identity manual, bilingual English/Arabic typography tokens, and Figma component libraries.",
    coverImage: "/images/generated/preview_branding.jpg",
    servicesJson: JSON.stringify(["Branding", "UI/UX Design"]),
    techJson: JSON.stringify(["Figma", "Design Tokens", "Typography"]),
  },
];

export function WorkFilterList({ initialProjects }: WorkFilterListProps) {
  const [activeCategory, setActiveCategory] = useState("All");

  const projectsToDisplay =
    initialProjects && initialProjects.length > 0
      ? initialProjects
      : defaultFallbackProjects;

  const filteredProjects =
    activeCategory === "All"
      ? projectsToDisplay
      : projectsToDisplay.filter(
          (p) => p.category?.toLowerCase() === activeCategory.toLowerCase()
        );

  return (
    <div className="space-y-12">
      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center gap-2 pb-4 border-b border-[#E4E7EC]">
        {categories.map((cat) => {
          const isSelected = activeCategory === cat;
          return (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                isSelected
                  ? "bg-[#070B14] text-[#D4AF37] border border-[#C59B27]/50 shadow-sm"
                  : "bg-white text-[#667085] hover:text-[#070B14] hover:border-[#C59B27]/30 border border-[#E4E7EC]"
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => {
          let services: string[] = [];
          try {
            services = JSON.parse(project.servicesJson);
          } catch {
            services = ["Digital Solutions"];
          }

          return (
            <div
              key={project.id}
              className="group bg-white rounded-2xl border border-[#E4E7EC] overflow-hidden shadow-2xs hover:shadow-xl hover:border-[#C59B27]/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Cover Image */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                  <Image
                    src={project.coverImage}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs px-2.5 py-1 rounded-md text-[10px] font-bold text-[#070B14] tracking-wider uppercase border border-slate-200 shadow-xs">
                    {project.category} · {project.industry}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Service tags */}
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {services.slice(0, 2).map((s) => (
                      <span
                        key={s}
                        className="text-[10px] font-bold text-[#B38728] bg-[#C59B27]/15 px-2.5 py-0.5 rounded-sm"
                      >
                        {s}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-xl font-bold text-[#070B14] group-hover:text-[#C59B27] transition-colors mb-2 leading-snug">
                    <Link href={`/work/${project.slug}`}>{project.title}</Link>
                  </h3>

                  <p className="text-sm text-[#667085] line-clamp-2 leading-relaxed mb-4">
                    {project.shortDesc}
                  </p>

                  <div className="text-xs text-slate-400 font-medium">
                    {project.client}
                  </div>
                </div>
              </div>

              {/* Action */}
              <div className="p-6 pt-0 border-t border-slate-100 mt-2">
                <Link
                  href={`/work/${project.slug}`}
                  className="pt-4 inline-flex items-center gap-1.5 text-xs font-bold text-[#070B14] group-hover:text-[#C59B27] transition-colors"
                >
                  View Case Study
                  <ExternalLink size={13} />
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      {filteredProjects.length === 0 && (
        <div className="text-center py-16 bg-[#F7F9FC] rounded-2xl border border-dashed border-slate-300">
          <p className="text-slate-500 text-sm">
            No projects found in this category at this time.
          </p>
        </div>
      )}
    </div>
  );
}
