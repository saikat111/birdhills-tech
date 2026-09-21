import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { prisma } from "@/lib/prisma";
import { Calendar, Clock, ArrowRight, User, Sparkles } from "lucide-react";
import FinalCtaSection from "@/components/home/FinalCtaSection";

export const metadata: Metadata = {
  title: "Insights & Engineering Articles | Bird Hills Tech",
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

  return (
    <div className="flex flex-col min-h-screen pt-24">
      {/* Hero */}
      <section className="py-20 md:py-28 bg-[#F7F9FC] border-b border-[#E4E7EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold tracking-widest text-[#1D68BD] uppercase">
              THOUGHT LEADERSHIP
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0B1730] tracking-tight leading-[1.12]">
              Perspectives on Technology, Design & Growth.
            </h1>
            <p className="text-lg sm:text-xl text-[#667085] leading-relaxed">
              Strategic analysis, technical deep dives, and commercial insights tailored for
              business leaders in Dubai and the GCC.
            </p>
          </div>

          {/* Categories Nav */}
          <div className="flex flex-wrap items-center gap-2 pt-8">
            <Link
              href="/insights"
              className="px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-[#0B1730] text-white shadow-xs"
            >
              All Topics
            </Link>
            {categories.map((c) => (
              <Link
                key={c.id}
                href={`/category/${c.slug}`}
                className="px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-white text-[#667085] hover:text-[#0B1730] hover:bg-slate-100 border border-[#E4E7EC] transition-colors"
              >
                {c.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post (Hero Editorial) */}
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

      {/* Regular Articles Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <article
                key={post.id}
                className="group bg-[#F7F9FC] rounded-2xl border border-[#E4E7EC] overflow-hidden flex flex-col justify-between hover:shadow-xl transition-all duration-300"
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

                <div className="p-6 pt-0 border-t border-slate-200/60 mt-3 flex items-center justify-between">
                  <span className="text-[11px] text-slate-400">{post.author}</span>
                  <Link
                    href={`/insights/${post.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#1D68BD]"
                  >
                    Read <ArrowRight size={13} />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {posts.length === 0 && (
            <div className="text-center py-20 bg-[#F7F9FC] rounded-2xl border border-dashed border-slate-300">
              <p className="text-slate-500">No articles published yet.</p>
            </div>
          )}
        </div>
      </section>

      <FinalCtaSection />
    </div>
  );
}
