import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { prisma } from "@/lib/prisma";
import {
  ChevronRight,
  Clock,
  Calendar,
  User,
  ArrowLeft,
  Share2,
  Bookmark,
  CheckCircle2,
} from "lucide-react";
import FinalCtaSection from "@/components/home/FinalCtaSection";

export async function generateStaticParams() {
  const posts = await prisma.blogPost.findMany({ select: { slug: true } });
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
    return { title: "Article Not Found" };
  }

  return {
    title: post.seoTitle || post.title,
    description: post.seoDescription || post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      images: [{ url: post.coverImage }],
    },
    alternates: {
      canonical: `https://birdhillstech.com/insights/${post.slug}`,
    },
  };
}

export default async function BlogPostDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await prisma.blogPost.findUnique({
    where: { slug },
    include: { category: true },
  });

  if (!post) {
    notFound();
  }

  // Related posts in same category
  const relatedPosts = await prisma.blogPost.findMany({
    where: {
      status: "published",
      categoryId: post.categoryId,
      NOT: { id: post.id },
    },
    include: { category: true },
    take: 2,
  });

  const formattedDate = new Date(post.publishedAt).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: post.coverImage,
    datePublished: post.publishedAt.toISOString(),
    author: {
      "@type": "Organization",
      name: "Bird Hills Tech",
    },
    publisher: {
      "@type": "Organization",
      name: "Bird Hills Tech",
      logo: {
        "@type": "ImageObject",
        url: "https://birdhillstech.com/images/logo.svg",
      },
    },
  };

  return (
    <article className="flex flex-col min-h-screen pt-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      {/* Header & Meta */}
      <header className="py-16 md:py-24 bg-[#F7F9FC] border-b border-[#E4E7EC]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-[#667085] mb-6">
            <Link href="/" className="hover:text-[#1D68BD]">
              Home
            </Link>
            <ChevronRight size={12} />
            <Link href="/insights" className="hover:text-[#1D68BD]">
              Insights
            </Link>
            <ChevronRight size={12} />
            <span className="text-[#0B1730] font-semibold">{post.category?.name}</span>
          </div>

          <div className="space-y-5">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-[#EBF3FE] text-[#1D68BD] border border-[#BFDBFE]">
              {post.category?.name || "Perspectives"}
            </span>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1730] tracking-tight leading-[1.18]">
              {post.title}
            </h1>

            <p className="text-base sm:text-xl text-[#667085] leading-relaxed">
              {post.excerpt}
            </p>

            {/* Author Bar */}
            <div className="pt-4 flex flex-wrap items-center justify-between gap-4 border-t border-slate-200">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#1D68BD] text-white flex items-center justify-center font-bold text-sm">
                  BH
                </div>
                <div>
                  <div className="text-xs font-bold text-[#0B1730]">{post.author}</div>
                  <div className="text-[11px] text-slate-400">
                    Dubai Corporate Practice · {formattedDate}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 text-xs text-slate-400">
                <span className="flex items-center gap-1">
                  <Clock size={13} /> {post.readTime}
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Featured Cover Image */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 sm:-mt-12 relative z-10">
        <div className="relative aspect-[16/9] rounded-3xl overflow-hidden shadow-2xl border border-slate-200 bg-slate-900">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 900px"
            className="object-cover"
          />
        </div>
      </div>

      {/* Body Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-slate prose-lg max-w-none text-[#101828] leading-relaxed space-y-6">
          {post.content.split("\n\n").map((para, idx) => {
            if (para.startsWith("## ")) {
              return (
                <h2
                  key={idx}
                  className="text-2xl sm:text-3xl font-extrabold text-[#0B1730] mt-10 mb-4 tracking-tight"
                >
                  {para.replace("## ", "")}
                </h2>
              );
            }
            if (para.startsWith("### ")) {
              return (
                <h3
                  key={idx}
                  className="text-xl sm:text-2xl font-bold text-[#0B1730] mt-8 mb-3 tracking-tight"
                >
                  {para.replace("### ", "")}
                </h3>
              );
            }
            if (para.startsWith("1. ") || para.startsWith("- ")) {
              return (
                <div key={idx} className="bg-[#F7F9FC] p-5 rounded-2xl border border-[#E4E7EC] my-4 text-sm leading-relaxed">
                  {para}
                </div>
              );
            }
            return (
              <p key={idx} className="text-base sm:text-lg text-slate-700 leading-relaxed">
                {para}
              </p>
            );
          })}
        </div>

        {/* Author Footnote / Firm Credential */}
        <div className="mt-16 p-8 rounded-3xl bg-[#F7F9FC] border border-[#E4E7EC] flex flex-col sm:flex-row items-center gap-6">
          <div className="w-16 h-16 rounded-2xl bg-[#0B1730] text-white flex items-center justify-center font-extrabold text-xl shrink-0">
            BHT
          </div>
          <div className="space-y-1.5 text-center sm:text-left">
            <h4 className="text-base font-bold text-[#0B1730]">
              Published by Bird Hills Tech
            </h4>
            <p className="text-xs sm:text-sm text-[#667085] leading-relaxed">
              Bird Hills Tech is a Dubai-based technology, creative and digital growth firm. We
              help ambitious enterprises architect high-performance websites, prestigious brand
              identities, and predictable B2B growth engines.
            </p>
            <div className="pt-2">
              <Link
                href="/book-a-meeting"
                className="text-xs font-bold text-[#1D68BD] hover:underline"
              >
                Schedule an executive briefing →
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Related Articles */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-[#F7F9FC] border-t border-[#E4E7EC]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-xl font-bold text-[#0B1730] mb-8">Related Perspectives</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedPosts.map((r) => (
                <div
                  key={r.id}
                  className="bg-white p-6 rounded-2xl border border-[#E4E7EC] shadow-2xs hover:shadow-lg transition-all"
                >
                  <span className="text-[10px] font-bold uppercase text-[#1D68BD]">
                    {r.category?.name}
                  </span>
                  <h4 className="text-lg font-bold text-[#0B1730] mt-1 mb-2 hover:text-[#1D68BD] transition-colors">
                    <Link href={`/insights/${r.slug}`}>{r.title}</Link>
                  </h4>
                  <p className="text-xs text-[#667085] line-clamp-2">{r.excerpt}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <FinalCtaSection />
    </article>
  );
}
