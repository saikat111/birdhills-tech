import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getServiceSubService, getAllServiceSubSlugs } from "@/data/services";
import SubServiceDetailView from "@/components/common/SubServiceDetailView";

export async function generateStaticParams() {
  return getAllServiceSubSlugs();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; subSlug: string }>;
}): Promise<Metadata> {
  const { slug, subSlug } = await params;
  const data = getServiceSubService(slug, subSlug);

  if (!data) {
    return {
      title: "Service Not Found | Bird Hills Tech",
    };
  }

  return {
    title: `${data.title} | Bird Hills Tech`,
    description: data.heroSubcopy,
    alternates: {
      canonical: `https://birdhillstech.com/services/${slug}/${subSlug}`,
    },
    openGraph: {
      title: `${data.title} | Bird Hills Tech`,
      description: data.heroSubcopy,
      images: [data.heroImage],
    },
  };
}

export default async function ServiceSubDetailPage({
  params,
}: {
  params: Promise<{ slug: string; subSlug: string }>;
}) {
  const { slug, subSlug } = await params;
  const data = getServiceSubService(slug, subSlug);

  if (!data) {
    notFound();
  }

  return <SubServiceDetailView data={data} />;
}
