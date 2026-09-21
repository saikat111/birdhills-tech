import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { prisma } from "@/lib/prisma";
import { Clock, ArrowRight, ChevronRight } from "lucide-react";
import FinalCtaSection from "@/components/home/FinalCtaSection";

export async function generateStaticParams() {
  const categories = await prisma.blogCategory.findMany({ select: { slug: true } });
  return categories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const category = await prisma.blogCategory.findUnique({ where: { slug } });

  if (!category) {
    return { title: "Category Not Found" };
  }

  return {
    title: `${category.name} Insights | Bird Hills Tech Dubai`,
    description: category.description || `Articles and perspectives in ${category.name}`,
    alternates: {
      canonical: `https://birdhillstech.com/category/${category.slug}`,
    },
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = await prisma.blogCategory.findUnique({
    where: { slug },
    include: {
      posts: {
        where: { status: "published" },
        orderBy: { publishedAt: "desc" },
      },
    },
  });

  if (!category) {
    notFound();
  }

  const allCategories = await prisma.blogCategory.findMany();

  return (
    <div className="flex flex-col min-h-screen pt-24">
      {/* Hero */}
      <section className="py-20 md:py-28 bg-[#F7F9FC] border-b border-[#E4E7EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            <span className="text-[#0B1730] font-semibold">{category.name}</span>
          </div>

          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold tracking-widest text-[#1D68BD] uppercase">
              CATEGORY ARCHIVE
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0B1730] tracking-tight">
              {category.name}
            </h1>
            <p className="text-lg text-[#667085] leading-relaxed">
              {category.description || "In-depth analysis, case studies, and perspectives."}
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 pt-8">
            <Link
              href="/insights"
              className="px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-white text-[#667085] hover:text-[#0B1730] border border-[#E4E7EC]"
            >
              All Topics
            </Link>
            {allCategories.map((c) => {
              const isCurrent = c.id === category.id;
              return (
                <Link
                  key={c.id}
                  href={`/category/${c.slug}`}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-colors ${
                    isCurrent
                      ? "bg-[#0B1730] text-white shadow-xs"
                      : "bg-white text-[#667085] hover:text-[#0B1730] border border-[#E4E7EC]"
                  }`}
                >
                  {c.name}
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {category.posts.map((post) => (
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
                  </div>

                  <div className="p-6 space-y-3">
                    <div className="text-xs text-slate-400 flex items-center gap-1">
                      <Clock size={12} /> {post.readTime}
                    </div>

                    <h3 className="text-lg font-bold text-[#0B1730] group-hover:text-[#1D68BD] transition-colors leading-snug">
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </h3>

                    <p className="text-xs sm:text-sm text-[#667085] line-clamp-2 leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-slate-200/60 mt-3 flex items-center justify-between">
                  <span className="text-[11px] text-slate-400">{post.author}</span>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#1D68BD]"
                  >
                    Read <ArrowRight size={13} />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {category.posts.length === 0 && (
            <div className="text-center py-20 bg-[#F7F9FC] rounded-2xl border border-dashed border-slate-300">
              <p className="text-slate-500">No articles published in this category yet.</p>
            </div>
          )}
        </div>
      </section>

      <FinalCtaSection />
    </div>
  );
}
