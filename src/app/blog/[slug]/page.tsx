import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { prisma } from "@/lib/prisma";
import {
  Calendar,
  Clock,
  User,
  ArrowRight,
  ChevronRight,
  Share2,
  Bookmark,
  MessageCircle,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import FinalCtaSection from "@/components/home/FinalCtaSection";

export async function generateStaticParams() {
  const posts = await prisma.blogPost.findMany({
    where: { status: "published" },
    select: { slug: true },
  });
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await prisma.blogPost.findUnique({
    where: { slug },
    include: { category: true },
  });

  if (!post) {
    return { title: "Article Not Found | Bird Hills Tech" };
  }

  return {
    title: post.seoTitle || `${post.title} | Bird Hills Tech Blog`,
    description: post.seoDescription || post.excerpt,
    alternates: {
      canonical: `https://birdhillstech.com/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [{ url: post.coverImage }],
    },
  };
}

export default async function SingleBlogPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await prisma.blogPost.findUnique({
    where: { slug },
    include: { category: true },
  });

  if (!post || post.status !== "published") {
    notFound();
  }

  // Related posts
  const relatedPosts = await prisma.blogPost.findMany({
    where: {
      status: "published",
      NOT: { id: post.id },
      ...(post.categoryId ? { categoryId: post.categoryId } : {}),
    },
    take: 3,
    include: { category: true },
  });

  // Share URLs
  const pageUrl = `https://birdhillstech.com/blog/${post.slug}`;
  const shareWa = `https://wa.me/?text=${encodeURIComponent(post.title + " - " + pageUrl)}`;
  const shareLi = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(pageUrl)}`;
  const shareTw = `https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(pageUrl)}`;

  // Parse paragraphs and headings for structured display
  const contentParagraphs = post.content.split("\n\n").filter(Boolean);

  return (
    <div className="flex flex-col min-h-screen pt-24 bg-white">
      {/* 1. ARTICLE HEADER & BREADCRUMB */}
      <section className="pt-12 pb-16 bg-[#F7F9FC] border-b border-[#E4E7EC]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-xs text-[#667085] mb-6 flex-wrap">
            <Link href="/" className="hover:text-[#C59B27] transition-colors">
              Home
            </Link>
            <ChevronRight size={12} />
            <Link href="/blog" className="hover:text-[#C59B27] transition-colors">
              Blog
            </Link>
            <ChevronRight size={12} />
            {post.category && (
              <>
                <Link
                  href={`/category/${post.category.slug}`}
                  className="hover:text-[#C59B27] transition-colors"
                >
                  {post.category.name}
                </Link>
                <ChevronRight size={12} />
              </>
            )}
            <span className="text-[#070B14] font-semibold truncate max-w-xs">
              {post.title}
            </span>
          </div>

          {/* Category Badge & Meta */}
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-3">
              <span className="px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#C59B27]/10 text-[#B38728] border border-[#C59B27]/30">
                {post.category?.name || "Technology"}
              </span>
              <span className="text-xs text-[#667085] flex items-center gap-1.5">
                <Calendar size={13} className="text-[#C59B27]" />
                {new Date(post.publishedAt).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
              <span className="text-xs text-[#667085] flex items-center gap-1.5">
                <Clock size={13} className="text-[#C59B27]" />
                {post.readTime}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#070B14] tracking-tight leading-[1.18]">
              {post.title}
            </h1>

            <p className="text-base sm:text-lg text-[#667085] leading-relaxed font-normal">
              {post.excerpt}
            </p>

            {/* Author Attribution & Share Row */}
            <div className="pt-6 border-t border-slate-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#B38728] text-white font-bold text-sm flex items-center justify-center shadow-xs">
                  {post.author.charAt(0)}
                </div>
                <div>
                  <div className="text-xs font-bold text-[#070B14]">{post.author}</div>
                  <div className="text-[11px] text-[#667085]">Bird Hills Tech Editorial Board</div>
                </div>
              </div>

              {/* Social Share Buttons */}
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold text-[#667085] mr-1 flex items-center gap-1">
                  <Share2 size={13} />
                  Share:
                </span>
                <a
                  href={shareWa}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-[#25D366]/10 text-[#128C7E] hover:bg-[#25D366]/20 transition-colors text-xs font-semibold flex items-center gap-1"
                >
                  <MessageCircle size={14} />
                  <span>WhatsApp</span>
                </a>
                <a
                  href={shareLi}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2.5 py-1.5 rounded-lg bg-[#0077b5]/10 text-[#0077b5] hover:bg-[#0077b5]/20 transition-colors text-xs font-semibold"
                >
                  LinkedIn
                </a>
                <a
                  href={shareTw}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2.5 py-1.5 rounded-lg bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors text-xs font-semibold"
                >
                  X (Twitter)
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. FEATURED COVER IMAGE */}
      <section className="py-8 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative aspect-[16/9] rounded-3xl overflow-hidden shadow-xl border border-[#E4E7EC] bg-slate-100">
            {post.coverImage ? (
              <img
                src={post.coverImage}
                alt={post.title}
                className="w-full h-full object-cover"
                loading="eager"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-[#FAF8F5]">
                <Sparkles size={48} className="text-[#C59B27]/40" />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 3. MAIN ARTICLE BODY + SIDEBAR */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Executive Summary Callout Box */}
          <div className="p-6 sm:p-7 rounded-2xl bg-[#FAF8F5] border-l-4 border-[#C59B27] mb-10 space-y-2 shadow-2xs">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#C59B27]">
              <Sparkles size={14} />
              <span>Executive Summary & Key Takeaways</span>
            </div>
            <p className="text-xs sm:text-sm text-[#475467] leading-relaxed">
              {post.excerpt}
            </p>
          </div>

          {/* Formatted Article Content */}
          <div className="prose prose-slate max-w-none space-y-6 text-[#344054] text-base leading-relaxed">
            {contentParagraphs.map((para, i) => {
              // Check if paragraph is an image: ![alt](url)
              if (para.includes("![") && para.includes("](")) {
                const imgMatch = para.match(/^!\[(.*?)\]\((.*?)\)(?:\s*\n\s*\*?(.*?)\*?)?$/);
                if (imgMatch) {
                  const altText = imgMatch[1] || "Article visual";
                  const imgSrc = imgMatch[2];
                  const captionText = imgMatch[3];
                  return (
                    <figure key={i} className="my-8 rounded-2xl overflow-hidden border border-slate-200 bg-slate-50 shadow-sm">
                      <img
                        src={imgSrc}
                        alt={altText}
                        className="w-full h-auto max-h-[620px] object-cover"
                        loading="lazy"
                      />
                      {captionText && (
                        <figcaption className="p-3 text-center text-xs text-slate-500 italic bg-white border-t border-slate-100">
                          {captionText}
                        </figcaption>
                      )}
                    </figure>
                  );
                }
              }

              // Check if paragraph is a heading
              if (para.startsWith("## ")) {
                return (
                  <h2
                    key={i}
                    className="text-2xl sm:text-3xl font-extrabold text-[#070B14] tracking-tight pt-6 pb-2 border-b border-slate-100"
                  >
                    {para.replace("## ", "")}
                  </h2>
                );
              }
              if (para.startsWith("### ")) {
                return (
                  <h3
                    key={i}
                    className="text-xl font-bold text-[#070B14] tracking-tight pt-4"
                  >
                    {para.replace("### ", "")}
                  </h3>
                );
              }
              if (para.startsWith("> ")) {
                return (
                  <blockquote
                    key={i}
                    className="p-4 my-4 border-l-4 border-[#C59B27] bg-[#FAF8F5] rounded-r-xl italic text-slate-700"
                  >
                    {para.replace("> ", "")}
                  </blockquote>
                );
              }
              if (para.startsWith("- ") || para.startsWith("* ")) {
                const items = para.split("\n").filter(Boolean);
                return (
                  <ul key={i} className="space-y-2 my-4 list-none pl-0">
                    {items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-sm sm:text-base">
                        <CheckCircle2 size={16} className="text-[#C59B27] shrink-0 mt-1" />
                        <span>{item.replace(/^[-*]\s+/, "")}</span>
                      </li>
                    ))}
                  </ul>
                );
              }

              return (
                <p key={i} className="text-base sm:text-lg leading-relaxed text-[#475467]">
                  {para}
                </p>
              );
            })}
          </div>

          {/* Author Bio Box */}
          <div className="mt-16 p-8 rounded-3xl bg-[#FAF8F5] border border-slate-200/80 flex flex-col sm:flex-row items-center sm:items-start gap-6">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#B38728] text-white font-extrabold text-xl flex items-center justify-center shrink-0 shadow-md">
              {post.author.charAt(0)}
            </div>
            <div className="space-y-2 text-center sm:text-left">
              <div className="text-xs font-bold uppercase tracking-wider text-[#C59B27]">
                WRITTEN BY
              </div>
              <h4 className="text-lg font-bold text-[#070B14]">{post.author}</h4>
              <p className="text-xs sm:text-sm text-[#667085] leading-relaxed">
                Senior Technology & Digital Strategy Specialist at Bird Hills Tech Dubai. Advising enterprise leadership on modern Next.js cloud architecture, high-converting digital branding, and revenue-centric digital transformation across the UAE.
              </p>
            </div>
          </div>

          {/* Direct Consultation Trigger */}
          <div className="mt-12 p-8 rounded-3xl bg-[#070B14] border border-[#C59B27]/30 text-white text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#C59B27]/15 via-transparent to-transparent pointer-events-none" />
            <div className="space-y-2 relative z-10">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#D4AF37]">
                ENTERPRISE IMPLEMENTATION
              </span>
              <h3 className="text-xl font-bold text-white">
                Ready to implement this architecture in your business?
              </h3>
              <p className="text-xs text-slate-300 max-w-md">
                Schedule a 30-minute technical session with our Dubai senior architects to review your systems.
              </p>
            </div>
            <Link
              href="/book-a-meeting"
              className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#C59B27] to-[#B38728] text-white text-xs font-bold hover:brightness-105 transition-all whitespace-nowrap shrink-0 shadow-md shadow-[#C59B27]/25 relative z-10"
            >
              Book Strategy Session
            </Link>
          </div>
        </div>
      </section>

      {/* 4. RELATED ARTICLES */}
      {relatedPosts.length > 0 && (
        <section className="py-20 bg-[#FAF8F5] border-t border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <span className="text-xs font-bold tracking-widest uppercase text-[#C59B27]">
                FURTHER READING
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#070B14] mt-1">
                Related Articles & Perspectives
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((r) => (
                <Link
                  key={r.id}
                  href={`/blog/${r.slug}`}
                  className="group bg-white rounded-2xl border border-slate-200/80 hover:border-[#C59B27]/50 hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between"
                >
                  <div>
                    <div className="relative h-44 w-full bg-slate-100 overflow-hidden">
                      <img
                        src={r.coverImage}
                        alt={r.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-6 space-y-2">
                      <span className="text-[10px] font-bold uppercase text-[#C59B27]">
                        {r.category?.name || "Insight"}
                      </span>
                      <h3 className="text-base font-bold text-[#070B14] group-hover:text-[#C59B27] transition-colors line-clamp-2">
                        {r.title}
                      </h3>
                      <p className="text-xs text-[#667085] line-clamp-2">
                        {r.excerpt}
                      </p>
                    </div>
                  </div>
                  <div className="p-6 pt-0 text-xs font-bold text-[#C59B27] flex items-center gap-1">
                    <span>Read Article</span>
                    <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <FinalCtaSection />
    </div>
  );
}
