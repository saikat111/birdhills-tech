import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { prisma } from "@/lib/prisma";
import {
  ChevronRight,
  ArrowRight,
  CheckCircle2,
  Calendar,
  Layers,
  Cpu,
  Target,
  ExternalLink,
  ShieldCheck,
} from "lucide-react";
import FinalCtaSection from "@/components/home/FinalCtaSection";

export async function generateStaticParams() {
  const projects = await prisma.project.findMany({ select: { slug: true } });
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = await prisma.project.findUnique({ where: { slug } });

  if (!project) {
    return { title: "Case Study Not Found" };
  }

  return {
    title: project.seoTitle || `${project.title} | Case Study`,
    description: project.seoDescription || project.shortDesc,
    alternates: {
      canonical: `https://birdhillstech.com/work/${project.slug}`,
    },
  };
}

export default async function CaseStudyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = await prisma.project.findUnique({
    where: { slug },
    include: { images: true },
  });

  if (!project) {
    notFound();
  }

  let services: string[] = [];
  let technologies: string[] = [];
  try {
    services = JSON.parse(project.servicesJson);
  } catch {
    services = ["Digital Solutions"];
  }

  try {
    technologies = JSON.parse(project.techJson);
  } catch {
    technologies = ["Next.js", "TypeScript"];
  }

  // Related work
  const relatedWork = await prisma.project.findMany({
    where: {
      status: "published",
      NOT: { id: project.id },
    },
    take: 2,
  });

  return (
    <div className="flex flex-col min-h-screen pt-24">
      {/* 1. HERO & OVERVIEW */}
      <section className="py-20 md:py-24 bg-[#F7F9FC] border-b border-[#E4E7EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-[#667085] mb-6">
            <Link href="/" className="hover:text-[#1D68BD]">
              Home
            </Link>
            <ChevronRight size={12} />
            <Link href="/work" className="hover:text-[#1D68BD]">
              Work
            </Link>
            <ChevronRight size={12} />
            <span className="text-[#0B1730] font-semibold">{project.title}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-8 space-y-4">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-[#EBF3FE] text-[#1D68BD] border border-[#BFDBFE]">
                {project.category} · {project.industry}
              </span>
              <h1 className="text-3xl sm:text-5xl font-extrabold text-[#0B1730] tracking-tight leading-[1.15]">
                {project.title}
              </h1>
              <p className="text-lg text-[#667085] leading-relaxed max-w-2xl">
                {project.shortDesc}
              </p>
            </div>

            {/* Quick Metadata Box */}
            <div className="lg:col-span-4 bg-white p-6 rounded-2xl border border-[#E4E7EC] shadow-2xs space-y-3">
              <div>
                <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                  Client / Partner
                </div>
                <div className="text-sm font-bold text-[#0B1730] mt-0.5">{project.client}</div>
              </div>
              <div className="pt-2 border-t border-slate-100">
                <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                  Services Delivered
                </div>
                <div className="flex flex-wrap gap-1 mt-1">
                  {services.map((s) => (
                    <span
                      key={s}
                      className="text-[11px] font-semibold text-[#1D68BD] bg-[#EBF3FE] px-2 py-0.5 rounded-sm"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Cover Image Showcase */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative aspect-[16/9] rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
            <Image
              src={project.coverImage}
              alt={project.title}
              fill
              priority
              sizes="(max-width: 1200px) 100vw, 1200px"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* 2. THE CHALLENGE & 3. OUR APPROACH */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Detailed Narrative */}
          <div className="space-y-6">
            <span className="text-xs font-bold tracking-widest text-[#1D68BD] uppercase">
              PROJECT BACKGROUND
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1730]">
              The Context & Commercial Opportunity
            </h2>
            <p className="text-base sm:text-lg text-[#667085] leading-relaxed">
              {project.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-slate-200">
            {/* The Challenge */}
            <div className="p-8 rounded-2xl bg-[#F7F9FC] border border-[#E4E7EC] space-y-3">
              <div className="text-xs font-bold text-rose-600 uppercase tracking-wider">
                01. The Challenge
              </div>
              <h3 className="text-xl font-bold text-[#0B1730]">
                Critical Friction Points
              </h3>
              <p className="text-sm text-[#667085] leading-relaxed">
                {project.challenge}
              </p>
            </div>

            {/* The Approach */}
            <div className="p-8 rounded-2xl bg-[#0B1730] text-white border border-slate-800 space-y-3">
              <div className="text-xs font-bold text-[#38BDF8] uppercase tracking-wider">
                02. Our Strategy & Approach
              </div>
              <h3 className="text-xl font-bold text-white">
                Connected Execution
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                {project.approach}
              </p>
            </div>
          </div>

          {/* 4. THE SOLUTION */}
          <div className="space-y-4 pt-6">
            <span className="text-xs font-bold tracking-widest text-[#1D68BD] uppercase">
              03. THE SOLUTION
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1730]">
              Engineered for Precision & Impact
            </h2>
            <p className="text-base sm:text-lg text-[#667085] leading-relaxed">
              {project.solution}
            </p>
          </div>

          {/* 5. TECHNOLOGY STACK */}
          <div className="p-8 rounded-2xl bg-[#F7F9FC] border border-[#E4E7EC] space-y-4">
            <span className="text-xs font-bold text-[#1D68BD] uppercase tracking-wider">
              TECHNOLOGY STACK
            </span>
            <div className="flex flex-wrap gap-2 pt-2">
              {technologies.map((t) => (
                <span
                  key={t}
                  className="px-3.5 py-1.5 rounded-lg bg-white border border-[#E4E7EC] text-xs font-bold text-[#0B1730] shadow-2xs"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* 6. OUTCOME & COMMERCIAL RESULTS */}
          <div className="p-8 sm:p-10 rounded-3xl bg-[#EBF3FE] border border-[#BFDBFE] space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold text-[#1D68BD] bg-white border border-[#BFDBFE]">
              <Target size={14} />
              COMMERCIAL OUTCOME & METRICS
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0B1730]">
              Measurable Results Delivered
            </h3>
            <p className="text-base sm:text-lg font-medium text-[#101828] leading-relaxed">
              {project.results}
            </p>
          </div>
        </div>
      </section>

      {/* 7. RELATED WORK */}
      {relatedWork.length > 0 && (
        <section className="py-20 bg-[#F7F9FC] border-t border-[#E4E7EC]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-10">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1730]">
                Explore Other Case Studies
              </h2>
              <Link
                href="/work"
                className="text-xs font-bold text-[#1D68BD] hover:underline inline-flex items-center gap-1"
              >
                All Projects <ArrowRight size={14} />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedWork.map((r) => (
                <div
                  key={r.id}
                  className="group bg-white rounded-2xl border border-[#E4E7EC] overflow-hidden flex flex-col sm:flex-row hover:shadow-xl transition-all"
                >
                  <div className="relative sm:w-1/2 aspect-[16/10] sm:aspect-auto">
                    <Image
                      src={r.coverImage}
                      alt={r.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 30vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6 sm:w-1/2 flex flex-col justify-between">
                    <div>
                      <span className="text-[10px] font-bold uppercase text-[#1D68BD]">
                        {r.category}
                      </span>
                      <h3 className="text-base font-bold text-[#0B1730] mt-1 mb-2 group-hover:text-[#1D68BD] transition-colors">
                        {r.title}
                      </h3>
                      <p className="text-xs text-[#667085] line-clamp-2">{r.shortDesc}</p>
                    </div>
                    <Link
                      href={`/work/${r.slug}`}
                      className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-[#1D68BD]"
                    >
                      View Case Study <ExternalLink size={12} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 8. CTA */}
      <FinalCtaSection />
    </div>
  );
}
