import React from "react";
import { Metadata } from "next";
import { prisma } from "@/lib/prisma";
import { WorkFilterList } from "@/components/work/WorkFilterList";
import FinalCtaSection from "@/components/home/FinalCtaSection";

export const metadata: Metadata = {
  title: "Selected Work & Case Studies | Bird Hills Tech",
  description:
    "Explore our portfolio of enterprise web platforms, e-commerce stores, brand identities, and AI automation systems built for ambitious businesses in Dubai and the GCC.",
  alternates: {
    canonical: "https://birdhillstech.com/work",
  },
};

export const revalidate = 60;

export default async function WorkPage() {
  const projects = await prisma.project.findMany({
    where: { status: "published" },
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="flex flex-col min-h-screen pt-24">
      {/* Hero */}
      <section className="py-20 md:py-28 bg-[#F7F9FC] border-b border-[#E4E7EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold tracking-widest text-[#1D68BD] uppercase">
              OUR PORTFOLIO
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0B1730] tracking-tight leading-[1.12]">
              Real projects.
              <span className="block text-[#1D68BD]">Real impact.</span>
            </h1>
            <p className="text-lg sm:text-xl text-[#667085] leading-relaxed">
              Explore selected digital experiences and platforms built across technology, creative
              direction and measurable growth.
            </p>
          </div>
        </div>
      </section>

      {/* Main Filterable Projects Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <WorkFilterList initialProjects={projects} />
        </div>
      </section>

      <FinalCtaSection />
    </div>
  );
}
