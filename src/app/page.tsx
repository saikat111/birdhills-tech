import React from "react";
import { prisma } from "@/lib/prisma";
import HeroSection from "@/components/home/HeroSection";
import TrustSection from "@/components/home/TrustSection";
import ServicesSection from "@/components/home/ServicesSection";
import WhyUsSection from "@/components/home/WhyUsSection";
import ProcessSection from "@/components/home/ProcessSection";
import SelectedWorkSection from "@/components/home/SelectedWorkSection";
import DubaiSection from "@/components/home/DubaiSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import AiCapabilitySection from "@/components/home/AiCapabilitySection";
import FinalCtaSection from "@/components/home/FinalCtaSection";

// Revalidate page cache periodically for high performance and live CMS updates
export const revalidate = 60;

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
      take: 3,
    });
  } catch (err) {
    console.error("Database fetch error on homepage:", err);
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* SECTION 01 — HERO */}
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

      {/* SECTION 03 — SERVICES */}
      <ServicesSection />

      {/* SECTION 04 — WHY BIRD HILLS TECH */}
      <WhyUsSection />

      {/* SECTION 05 — PROCESS */}
      <ProcessSection />

      {/* SECTION 06 — SELECTED WORK */}
      <SelectedWorkSection projects={projects} />

      {/* SECTION 07 — DUBAI */}
      <DubaiSection />

      {/* SECTION 08 — TESTIMONIALS */}
      <TestimonialsSection testimonials={testimonials} />

      {/* SECTION 09 — AI CAPABILITY */}
      <AiCapabilitySection />

      {/* SECTION 10 — FINAL CTA */}
      <FinalCtaSection />
    </div>
  );
}
