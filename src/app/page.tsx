import React from "react";
import { Metadata } from "next";
import { prisma } from "@/lib/prisma";
import { getSiteSettings } from "@/lib/settings";
import HeroSection from "@/components/home/HeroSection";
import TrustSection from "@/components/home/TrustSection";
import ServicesSection from "@/components/home/ServicesSection";
import TechEcosystemSection from "@/components/home/TechEcosystemSection";
import WhyUsSection from "@/components/home/WhyUsSection";
import IndustryVerticalsSection from "@/components/home/IndustryVerticalsSection";
import ProcessSection from "@/components/home/ProcessSection";
import SelectedWorkSection from "@/components/home/SelectedWorkSection";
import DubaiSection from "@/components/home/DubaiSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import AiCapabilitySection from "@/components/home/AiCapabilitySection";
import FinalCtaSection from "@/components/home/FinalCtaSection";

// Revalidate page cache periodically for high performance and live CMS updates
export const revalidate = 60;

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSiteSettings();
  return {
    title: settings.site_title,
    description: settings.site_description,
    openGraph: {
      title: settings.site_title,
      description: settings.site_description,
    },
    twitter: {
      card: "summary",
      title: settings.site_title,
      description: settings.site_description,
    },
  };
}

export default async function HomePage() {
  // Fetch dynamic content from Prisma database
  let settingsMap: Record<string, string> = {};
  let projects: any[] = [];
  let testimonials: any[] = [];

  try {
    const settings = await prisma.siteSetting.findMany();
    settings.forEach((s) => {
      settingsMap[s.key] = s.value;
    });

    projects = await prisma.project.findMany({
      where: { status: "published" },
      orderBy: { featured: "desc" },
      take: 6,
    });

    testimonials = await prisma.testimonial.findMany({
      where: { active: true },
      orderBy: { sortOrder: "asc" },
      take: 6,
    });
  } catch (err) {
    console.error("Database fetch error on homepage:", err);
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* SECTION 01 — HERO (AUTO-SLIDER) */}
      <HeroSection
        eyebrow={settingsMap["hero_eyebrow"]}
        headline={settingsMap["hero_headline"]}
        subcopy={settingsMap["hero_subcopy"]}
      />

      {/* SECTION 02 — TRUST */}
      <TrustSection
        headline={settingsMap["trust_headline"]}
        statement={settingsMap["trust_statement"]}
      />

      {/* SECTION 03 — SERVICES WITH DIRECT ACTIONS */}
      <ServicesSection />

      {/* SECTION 04 — TECH STACK & ECOSYSTEM (NEW) */}
      <TechEcosystemSection />

      {/* SECTION 05 — WHY BIRD HILLS TECH */}
      <WhyUsSection />

      {/* SECTION 06 — REGIONAL INDUSTRY VERTICALS (NEW) */}
      <IndustryVerticalsSection />

      {/* SECTION 07 — PROCESS */}
      <ProcessSection />

      {/* SECTION 08 — SELECTED WORK */}
      <SelectedWorkSection projects={projects} />

      {/* SECTION 09 — DUBAI STRATEGIC PRESENCE */}
      <DubaiSection />

      {/* SECTION 10 — CLIENT TESTIMONIALS (AUTO-SLIDER) */}
      <TestimonialsSection testimonials={testimonials} />

      {/* SECTION 11 — AI CAPABILITY */}
      <AiCapabilitySection />

      {/* SECTION 12 — FINAL CTA */}
      <FinalCtaSection />
    </div>
  );
}
