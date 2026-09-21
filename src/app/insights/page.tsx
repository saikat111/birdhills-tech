import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { prisma } from "@/lib/prisma";
import { Calendar, Clock, ArrowRight, User, Sparkles, FileText, Download, MessageCircle } from "lucide-react";
import FinalCtaSection from "@/components/home/FinalCtaSection";

export const metadata: Metadata = {
  title: "Insights & Engineering Articles | Bird Hills Tech Dubai",
  description:
    "Expert perspectives on web architecture, corporate branding, B2B digital marketing in the UAE, and pragmatic enterprise AI integrations.",
  alternates: {
    canonical: "https://birdhillstech.com/insights",
  },
};

export const revalidate = 60;

export default async function InsightsPage() {
  const posts = await prisma.blogPost.findMany({
    where: { status: "published" },
    include: { category: true },
    orderBy: { publishedAt: "desc" },
  });

  const categories = await prisma.blogCategory.findMany();

  const featuredPost = posts[0];
  const regularPosts = posts.slice(1);

  const whitepapers = [
    {
      title: "2026 GCC Digital Architecture Report",
      tag: "Technical Whitepaper",
      desc: "An in-depth benchmark analyzing sub-second Core Web Vitals, headless CMS adoption, and modern web architectures among top UAE firms.",
    },
    {
      title: "B2B Demand Generation Playbook for Dubai",
      tag: "Growth Strategy",
      desc: "How regional enterprises are replacing vanity metrics with closed-loop commercial revenue attribution and high-intent LinkedIn/Google funnels.",
    },
    {
      title: "Pragmatic AI & Knowledge Automation in the Gulf",
      tag: "Executive Briefing",
      desc: "A decision-maker guide to deploying secure, private retrieval-augmented generation (RAG) and conversational agents.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen pt-24">
      {/* 1. VISUAL HERO WITH DUBAI EDITORIAL BACKGROUND */}
      <section className="relative py-24 md:py-32 bg-[#0B1730] text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=2000&q=85"
            alt="Dubai skyline perspective"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B1730] via-[#0B1730]/90 to-[#0B1730]/60" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-6">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-widest text-[#38BDF8] uppercase bg-white/10 border border-white/15 backdrop-blur-md">
              THOUGHT LEADERSHIP & RESEARCH
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12]">
              Perspectives on Technology, Design & Commercial Growth.
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed font-normal">
              Strategic analysis, technical architecture guides, and market insights tailored for business leaders across Dubai and the GCC.
            </p>

            {/* Categories Nav */}
            <div className="flex flex-wrap items-center gap-2 pt-4">
              <Link
                href="/insights"
                className="px-4 py-2 rounded-xl text-xs font-semibold bg-[#1D68BD] text-white shadow-xs"
              >
                All Topics
              </Link>
              {categories.map((c) => (
                <Link
                  key={c.id}
                  href={`/category/${c.slug}`}
                  className="px-4 py-2 rounded-xl text-xs font-semibold bg-white/10 hover:bg-white/20 text-slate-200 border border-white/10 transition-colors backdrop-blur-sm"
                >
                  {c.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. FEATURED POST (HERO EDITORIAL) */}
      {featuredPost && (
        <section className="py-16 bg-white border-b border-[#E4E7EC]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="group bg-[#F7F9FC] rounded-3xl border border-[#E4E7EC] overflow-hidden grid grid-cols-1 lg:grid-cols-12 shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="lg:col-span-7 relative aspect-[16/10] lg:aspect-auto min-h-[300px] overflow-hidden">
                <Image
                  src={featuredPost.coverImage}
                  alt={featuredPost.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-xs">
                    <span className="font-bold text-[#1D68BD] uppercase bg-[#EBF3FE] px-2.5 py-1 rounded-sm">
                      {featuredPost.category?.name || "Insights"}
                    </span>
                    <span className="text-slate-400 flex items-center gap-1">
                      <Clock size={13} /> {featuredPost.readTime}
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1730] leading-snug group-hover:text-[#1D68BD] transition-colors">
                    <Link href={`/insights/${featuredPost.slug}`}>
                      {featuredPost.title}
                    </Link>
                  </h2>

                  <p className="text-sm sm:text-base text-[#667085] leading-relaxed line-clamp-3">
                    {featuredPost.excerpt}
                  </p>
                </div>

                <div className="pt-6 border-t border-slate-200 mt-6 flex items-center justify-between">
                  <div className="text-xs text-slate-500 font-medium">
                    By {featuredPost.author}
                  </div>
                  <Link
                    href={`/insights/${featuredPost.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1D68BD] group-hover:underline"
                  >
                    Read Article <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 3. REGULAR ARTICLES GRID */}
      <section className="py-20 bg-[#F7F9FC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#1D68BD]">
              KNOWLEDGE ARCHIVE
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1730] mt-1">
              Latest Technical & Growth Analyses
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <article
                key={post.id}
                className="group bg-white rounded-3xl border border-[#E4E7EC] overflow-hidden flex flex-col justify-between hover:shadow-xl transition-all duration-300"
              >
                <div>
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                    <Image
                      src={post.coverImage}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs px-2.5 py-1 rounded-md text-[10px] font-bold text-[#0B1730] tracking-wider uppercase border border-slate-200">
                      {post.category?.name}
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <div className="flex items-center gap-3 text-xs text-slate-400">
                      <span className="flex items-center gap-1">
                        <Clock size={12} /> {post.readTime}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-[#0B1730] group-hover:text-[#1D68BD] transition-colors leading-snug">
                      <Link href={`/insights/${post.slug}`}>{post.title}</Link>
                    </h3>

                    <p className="text-xs sm:text-sm text-[#667085] line-clamp-2 leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-slate-100 mt-3 flex items-center justify-between">
                  <span className="text-[11px] text-slate-400">{post.author}</span>
                  <Link
                    href={`/insights/${post.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#1D68BD]"
                  >
                    Read Article <ArrowRight size={13} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 4. EXECUTIVE WHITEPAPERS & RESEARCH REPORTS (NEW SECTION) */}
      <section className="py-24 bg-white border-t border-[#E4E7EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-bold tracking-wider uppercase text-[#1D68BD]">
              REGIONAL RESEARCH
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1730] tracking-tight mt-2">
              Executive Whitepapers & Reports
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whitepapers.map((wp) => (
              <div
                key={wp.title}
                className="p-8 rounded-3xl bg-[#F7F9FC] border border-[#E4E7EC] hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#1D68BD] bg-[#EBF3FE] px-2.5 py-0.5 rounded">
                    {wp.tag}
                  </span>
                  <h3 className="text-lg font-bold text-[#0B1730] mt-3 mb-2">{wp.title}</h3>
                  <p className="text-xs text-[#667085] leading-relaxed">{wp.desc}</p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-200/80">
                  <a
                    href={`https://wa.me/971524405785?text=Hello%20Bird%20Hills%20Tech%2C%20I%20would%20like%20to%20request%20a%20copy%20of%20the%20${encodeURIComponent(
                      wp.title
                    )}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1D68BD] hover:underline"
                  >
                    Request Full Briefing on WhatsApp <ArrowRight size={13} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCtaSection />
    </div>
  );
}
