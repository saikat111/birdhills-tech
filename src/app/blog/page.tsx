import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { prisma } from "@/lib/prisma";
import {
  Calendar,
  Clock,
  ArrowRight,
  User,
  Sparkles,
  Search,
  BookOpen,
  Share2,
  CheckCircle2,
} from "lucide-react";
import FinalCtaSection from "@/components/home/FinalCtaSection";

export const metadata: Metadata = {
  title: "Blog & Thought Leadership | Bird Hills Tech Dubai",
  description:
    "Perspectives on web architecture, software engineering, corporate branding, B2B digital marketing in the UAE, and enterprise AI integrations.",
  alternates: {
    canonical: "https://birdhillstech.com/blog",
  },
};

export const revalidate = 60;

export default async function BlogListingPage() {
  const posts = await prisma.blogPost.findMany({
    where: { status: "published" },
    include: { category: true },
    orderBy: { publishedAt: "desc" },
  });

  const categories = await prisma.blogCategory.findMany({
    orderBy: { name: "asc" },
  });

  const featuredPost = posts[0];
  const regularPosts = posts.slice(1);

  return (
    <div className="flex flex-col min-h-screen pt-24">
      {/* 1. VIBRANT HIGH-VISIBILITY HERO */}
      <section className="relative py-24 md:py-32 bg-[#070B14] text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=2000&q=90"
            alt="Dubai technology and innovation hub"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#070B14]/95 via-[#070B14]/80 to-[#070B14]/40" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#070B14]/90 via-transparent to-[#070B14]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-6">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-widest text-[#D4AF37] uppercase bg-[#C59B27]/15 border border-[#C59B27]/30 backdrop-blur-md">
              <Sparkles size={13} className="text-[#D4AF37]" />
              EXECUTIVE BRIEFINGS & TECHNICAL INSIGHTS
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12]">
              Knowledge, architecture & digital growth in Dubai.
            </h1>
            <p className="text-lg sm:text-xl text-slate-200 leading-relaxed font-normal drop-shadow-sm">
              In-depth research on high-performance web architecture, B2B demand generation in the GCC, prestige brand identity, and pragmatic AI execution.
            </p>
          </div>
        </div>
      </section>

      {/* 2. CATEGORY NAVIGATION BAR */}
      <section className="bg-white border-b border-[#E4E7EC] sticky top-16 md:top-20 z-20 shadow-2xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto py-4 scrollbar-none">
            <Link
              href="/blog"
              className="px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap bg-[#070B14] text-[#D4AF37] border border-[#C59B27]/50 shadow-xs"
            >
              All Articles ({posts.length})
            </Link>
            {categories.map((cat) => (
              <Link
                key={cat.id}
                href={`/category/${cat.slug}`}
                className="px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap bg-[#FAF8F5] text-[#475467] hover:bg-[#C59B27]/10 hover:text-[#C59B27] hover:border-[#C59B27]/30 border border-[#E4E7EC] transition-colors"
              >
                {cat.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 3. FEATURED POST SPOTLIGHT */}
      {featuredPost && (
        <section className="py-16 bg-[#FAF8F5]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-6">
              <span className="text-xs font-bold tracking-widest uppercase text-[#C59B27]">
                FEATURED ARTICLE
              </span>
            </div>

            <Link
              href={`/blog/${featuredPost.slug}`}
              className="group block bg-white rounded-3xl border border-[#E4E7EC] hover:border-[#C59B27]/40 hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12">
                {/* Visual Cover */}
                <div className="lg:col-span-7 relative h-72 lg:h-auto min-h-[340px] bg-slate-900 overflow-hidden">
                  <img
                    src={featuredPost.coverImage}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="eager"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white/95 backdrop-blur-md text-[#070B14] shadow-sm">
                      {featuredPost.category?.name || "Technology"}
                    </span>
                  </div>
                </div>

                {/* Narrative Details */}
                <div className="lg:col-span-5 p-8 lg:p-12 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 text-xs text-[#667085]">
                      <span className="flex items-center gap-1.5">
                        <Calendar size={13} className="text-[#C59B27]" />
                        {new Date(featuredPost.publishedAt).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock size={13} className="text-[#C59B27]" />
                        {featuredPost.readTime}
                      </span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-extrabold text-[#070B14] group-hover:text-[#C59B27] transition-colors leading-tight">
                      {featuredPost.title}
                    </h2>

                    <p className="text-sm sm:text-base text-[#667085] leading-relaxed line-clamp-4">
                      {featuredPost.excerpt}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-full bg-[#C59B27]/10 text-[#C59B27] flex items-center justify-center font-bold text-xs">
                        <User size={14} />
                      </div>
                      <span className="text-xs font-bold text-[#070B14]">
                        {featuredPost.author}
                      </span>
                    </div>

                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#C59B27] group-hover:translate-x-1 transition-transform">
                      Read Article
                      <ArrowRight size={14} />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* 4. RECENT POSTS GRID */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <span className="text-xs font-bold tracking-widest uppercase text-[#C59B27]">
                LATEST PERSPECTIVES
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#070B14] mt-1">
                Recent Engineering & Strategy Articles
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <article
                key={post.id}
                className="group bg-white rounded-3xl border border-[#E4E7EC] hover:border-[#C59B27]/40 hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between"
              >
                <div>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="relative block h-52 w-full bg-slate-100 overflow-hidden"
                  >
                    <img
                      src={post.coverImage}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/95 backdrop-blur-md text-[#070B14] shadow-sm">
                        {post.category?.name || "Technology"}
                      </span>
                    </div>
                  </Link>

                  <div className="p-6 sm:p-7 space-y-3">
                    <div className="flex items-center gap-3 text-xs text-[#667085]">
                      <span className="flex items-center gap-1">
                        <Calendar size={12} className="text-[#C59B27]" />
                        {new Date(post.publishedAt).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock size={12} className="text-[#C59B27]" />
                        {post.readTime}
                      </span>
                    </div>

                    <Link href={`/blog/${post.slug}`}>
                      <h3 className="text-lg font-bold text-[#070B14] group-hover:text-[#C59B27] transition-colors leading-snug">
                        {post.title}
                      </h3>
                    </Link>

                    <p className="text-xs sm:text-sm text-[#667085] leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                <div className="p-6 sm:p-7 pt-0 border-t border-slate-100 mt-4 flex items-center justify-between">
                  <span className="text-xs font-semibold text-[#475467]">
                    {post.author}
                  </span>

                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#C59B27] hover:underline"
                  >
                    Read More
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 5. NEWSLETTER / EXECUTIVE BRIEFING SUBSCRIPTION */}
      <section className="py-20 bg-[#070B14] text-white border-t border-[#C59B27]/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#C59B27]/10 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-widest text-[#D4AF37] uppercase bg-[#C59B27]/10 border border-[#C59B27]/30">
            DUBAI TECH BRIEFING
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Stay Ahead of the Middle East Digital Curve
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto">
            Get our monthly technical research and executive frameworks delivered directly to your inbox. No fluff, only actionable engineering and growth benchmarks.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto pt-2">
            <input
              type="email"
              placeholder="Enter your corporate email"
              className="w-full px-4 py-3.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-slate-400 text-xs focus:outline-none focus:border-[#C59B27]"
            />
            <button
              type="button"
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#C59B27] to-[#B38728] hover:brightness-105 text-white text-xs font-bold whitespace-nowrap transition-all shadow-md shadow-[#C59B27]/25"
            >
              Subscribe
            </button>
          </div>
        </div>
      </section>

      <FinalCtaSection />
    </div>
  );
}
