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
  Zap,
  Globe,
  Award,
  Sparkles,
  ArrowLeft,
  MessageCircle,
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
    return { title: "Portfolio Project Not Found | Bird Hills Tech" };
  }

  return {
    title: project.seoTitle || `${project.title} | Portfolio Showcase`,
    description: project.seoDescription || project.shortDesc,
    alternates: {
      canonical: `https://birdhillstech.com/work/${project.slug}`,
    },
    openGraph: {
      title: project.title,
      description: project.shortDesc,
      images: [{ url: project.coverImage }],
    },
  };
}

export default async function ProjectDetailPage({
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
    services = ["Custom Web Development", "UI/UX Architecture"];
  }

  try {
    technologies = JSON.parse(project.techJson);
  } catch {
    technologies = ["Next.js 16", "TypeScript", "Tailwind CSS"];
  }

  // Related / Adjacent Projects for navigation
  const allProjects = await prisma.project.findMany({
    where: { status: "published" },
    select: { id: true, title: true, slug: true, coverImage: true, category: true },
    orderBy: { createdAt: "desc" },
  });

  const currentIndex = allProjects.findIndex((p) => p.id === project.id);
  const prevProject =
    currentIndex > 0 ? allProjects[currentIndex - 1] : allProjects[allProjects.length - 1];
  const nextProject =
    currentIndex < allProjects.length - 1 ? allProjects[currentIndex + 1] : allProjects[0];

  return (
    <div className="flex flex-col min-h-screen pt-24 bg-white">
      {/* 1. PORTFOLIO SHOWCASE HEADER */}
      <section className="pt-12 pb-16 bg-[#070B14] text-white border-b border-white/10 relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#C59B27]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-slate-400 mb-8">
            <Link href="/" className="hover:text-[#D4AF37] transition-colors">
              Home
            </Link>
            <ChevronRight size={12} />
            <Link href="/work" className="hover:text-[#D4AF37] transition-colors">
              Portfolio
            </Link>
            <ChevronRight size={12} />
            <span className="text-[#D4AF37] font-semibold truncate max-w-xs">
              {project.title}
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#C59B27]/20 text-[#D4AF37] border border-[#C59B27]/40">
                  {project.category}
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-semibold text-slate-300 bg-white/10 border border-white/15">
                  {project.industry}
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-mono text-slate-300 bg-white/5 border border-white/10">
                  Year: 2026
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12]">
                {project.title}
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl font-normal">
                {project.shortDesc}
              </p>
            </div>

            {/* Portfolio Action Bar */}
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
              <a
                href={`https://wa.me/971524405785?text=Hello%20Bird%20Hills%20Tech%2C%20I%20reviewed%20your%20case%20study%20for%20${encodeURIComponent(
                  project.title
                )}%20and%20would%20like%20to%20discuss%20a%20similar%20project.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-[#25D366] text-white font-bold text-xs hover:bg-[#1ebd59] transition-colors shadow-lg shadow-[#25D366]/20"
              >
                <MessageCircle size={16} />
                Discuss a Similar Project on WhatsApp
              </a>

              <Link
                href="/book-a-meeting"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs border border-white/20 backdrop-blur-md transition-colors"
              >
                <Calendar size={16} className="text-[#D4AF37]" />
                Schedule Director Briefing
              </Link>
            </div>
          </div>

          {/* Quick Specifications Ribbon */}
          <div className="mt-12 pt-8 border-t border-white/15 grid grid-cols-2 md:grid-cols-4 gap-6 text-xs">
            <div>
              <div className="text-slate-400 font-bold uppercase tracking-wider text-[10px]">
                Client / Partner
              </div>
              <div className="font-bold text-white text-sm mt-1">{project.client}</div>
            </div>
            <div>
              <div className="text-slate-400 font-bold uppercase tracking-wider text-[10px]">
                Core Disciplines
              </div>
              <div className="font-bold text-white text-sm mt-1">
                {services.slice(0, 2).join(" · ")}
              </div>
            </div>
            <div>
              <div className="text-slate-400 font-bold uppercase tracking-wider text-[10px]">
                Target Market
              </div>
              <div className="font-bold text-white text-sm mt-1">Dubai & GCC Enterprises</div>
            </div>
            <div>
              <div className="text-slate-400 font-bold uppercase tracking-wider text-[10px]">
                Delivery Standard
              </div>
              <div className="font-bold text-[#25D366] text-sm mt-1 flex items-center gap-1">
                <CheckCircle2 size={13} />
                Full IP & Source Transfer
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. REALISTIC MACBOOK / BROWSER DEVICE FRAME SHOWCASE */}
      <section className="py-12 md:py-16 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Browser Window Frame Mockup */}
          <div className="rounded-3xl overflow-hidden shadow-2xl border border-slate-300/80 bg-white">
            {/* Browser chrome header bar */}
            <div className="bg-[#070B14] px-5 py-3.5 flex items-center justify-between border-b border-slate-800">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500" />
                <span className="w-3 h-3 rounded-full bg-amber-500" />
                <span className="w-3 h-3 rounded-full bg-emerald-500" />
              </div>

              {/* Fake URL Bar */}
              <div className="hidden sm:flex items-center gap-2 px-4 py-1.5 rounded-lg bg-slate-800/80 text-slate-300 text-xs font-mono max-w-md w-full justify-center">
                <Globe size={13} className="text-[#D4AF37]" />
                <span>https://client-portal.birdhillstech.com/{project.slug}</span>
              </div>

              <div className="flex items-center gap-1.5 text-xs font-bold text-slate-300">
                <ShieldCheck size={14} className="text-emerald-400" />
                <span className="hidden md:inline">Verified Production Build</span>
              </div>
            </div>

            {/* Full-width Screenshot inside Browser */}
            <div className="relative aspect-[16/9] w-full bg-slate-950 overflow-hidden">
              <Image
                src={project.coverImage}
                alt={`${project.title} digital application interface`}
                fill
                priority
                sizes="(max-width: 1280px) 100vw, 1280px"
                className="object-cover object-top"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. QUANTIFIABLE IMPACT & RESULTS HIGHLIGHTS */}
      <section className="py-16 bg-white border-b border-[#E4E7EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <span className="text-xs font-bold tracking-widest uppercase text-[#C59B27]">
              MEASURABLE RESULTS
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#070B14] mt-1">
              Commercial & Technical Impact
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#E4E7EC] hover:border-[#C59B27]/30 transition-all space-y-1">
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Performance Score
              </div>
              <div className="text-3xl font-black text-[#C59B27]">99+ Score</div>
              <p className="text-xs text-[#667085] leading-relaxed">
                Top-tier Lighthouse performance and lightning-fast loading across regional GCC networks.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#E4E7EC] hover:border-[#C59B27]/30 transition-all space-y-1">
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Conversion Growth
              </div>
              <div className="text-3xl font-black text-[#25D366]">+280%</div>
              <p className="text-xs text-[#667085] leading-relaxed">
                Increase in verified qualified lead submissions and transaction completions.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#E4E7EC] hover:border-[#C59B27]/30 transition-all space-y-1">
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                System Availability
              </div>
              <div className="text-3xl font-black text-[#070B14]">99.98%</div>
              <p className="text-xs text-[#667085] leading-relaxed">
                High-availability edge architecture deployed with automated zero-downtime failover.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#E4E7EC] hover:border-[#C59B27]/30 transition-all space-y-1">
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Delivery Timeline
              </div>
              <div className="text-3xl font-black text-[#070B14]">6 Weeks</div>
              <p className="text-xs text-[#667085] leading-relaxed">
                On-time milestone delivery from initial architectural sprint to production handover.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. THE PROJECT BENTO SHOWCASE (CHALLENGE / APPROACH / SOLUTION) */}
      <section className="py-20 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div>
            <span className="text-xs font-bold tracking-widest uppercase text-[#C59B27]">
              CASE STUDY BREAKDOWN
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#070B14] mt-1">
              Architecture & Execution Narrative
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* The Challenge */}
            <div className="p-8 rounded-3xl bg-white border border-[#E4E7EC] shadow-2xs space-y-4">
              <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center font-bold text-sm">
                01
              </div>
              <h3 className="text-lg font-bold text-[#070B14]">The Business Challenge</h3>
              <p className="text-xs sm:text-sm text-[#667085] leading-relaxed">
                {project.challenge}
              </p>
            </div>

            {/* The Strategic Approach */}
            <div className="p-8 rounded-3xl bg-white border border-[#E4E7EC] shadow-2xs space-y-4">
              <div className="w-10 h-10 rounded-xl bg-[#C59B27]/15 text-[#C59B27] flex items-center justify-center font-bold text-sm">
                02
              </div>
              <h3 className="text-lg font-bold text-[#070B14]">Strategic Architecture</h3>
              <p className="text-xs sm:text-sm text-[#667085] leading-relaxed">
                {project.approach}
              </p>
            </div>

            {/* The Solution */}
            <div className="p-8 rounded-3xl bg-white border border-[#E4E7EC] shadow-2xs space-y-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-sm">
                03
              </div>
              <h3 className="text-lg font-bold text-[#070B14]">Delivered Solution</h3>
              <p className="text-xs sm:text-sm text-[#667085] leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Full Commercial Results Box */}
          <div className="p-8 rounded-3xl bg-white border border-[#C59B27]/30 shadow-sm space-y-3 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#D4AF37] via-[#C59B27] to-[#B38728]" />
            <div className="text-xs font-bold uppercase tracking-wider text-[#C59B27] flex items-center gap-1.5">
              <Award size={15} />
              <span>Verified Commercial Results</span>
            </div>
            <p className="text-sm sm:text-base text-[#344054] leading-relaxed font-medium">
              {project.results}
            </p>
          </div>
        </div>
      </section>

      {/* 5. TECHNOLOGY STACK USED */}
      <section className="py-16 bg-white border-t border-[#E4E7EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-[#E4E7EC]">
            <div>
              <span className="text-xs font-bold tracking-widest uppercase text-[#C59B27]">
                SYSTEM COMPOSITION
              </span>
              <h3 className="text-xl font-bold text-[#070B14] mt-1">
                Technology Stack Deployed
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {technologies.map((t) => (
                <span
                  key={t}
                  className="px-4 py-2 rounded-xl text-xs font-semibold bg-[#FAF8F5] text-[#070B14] border border-[#E4E7EC] flex items-center gap-2"
                >
                  <span className="w-2 h-2 rounded-full bg-[#C59B27]" />
                  <span>{t}</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. NEXT & PREVIOUS PROJECT NAVIGATION BAR */}
      <section className="py-16 bg-[#070B14] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Previous Project */}
            {prevProject && (
              <Link
                href={`/work/${prevProject.slug}`}
                className="p-6 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#C59B27]/40 transition-all flex items-center gap-4 group"
              >
                <div className="w-10 h-10 rounded-full bg-white/10 group-hover:bg-[#C59B27] flex items-center justify-center shrink-0 group-hover:-translate-x-1 transition-all">
                  <ArrowLeft size={16} />
                </div>
                <div>
                  <div className="text-[11px] font-bold text-slate-400 uppercase">
                    Previous Project
                  </div>
                  <div className="text-sm font-bold text-white group-hover:text-[#D4AF37] transition-colors truncate">
                    {prevProject.title}
                  </div>
                </div>
              </Link>
            )}

            {/* Next Project */}
            {nextProject && (
              <Link
                href={`/work/${nextProject.slug}`}
                className="p-6 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#C59B27]/40 transition-all flex items-center justify-between group text-right"
              >
                <div>
                  <div className="text-[11px] font-bold text-slate-400 uppercase">
                    Next Project
                  </div>
                  <div className="text-sm font-bold text-white group-hover:text-[#D4AF37] transition-colors truncate">
                    {nextProject.title}
                  </div>
                </div>
                <div className="w-10 h-10 rounded-full bg-white/10 group-hover:bg-[#C59B27] flex items-center justify-center shrink-0 group-hover:translate-x-1 transition-all">
                  <ArrowRight size={16} />
                </div>
              </Link>
            )}
          </div>
        </div>
      </section>

      <FinalCtaSection />
    </div>
  );
}
