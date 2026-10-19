import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getHostingSubService, getAllHostingSubSlugs } from "@/data/subServicesData";
import SubServiceDetailView from "@/components/common/SubServiceDetailView";

export async function generateStaticParams() {
  const slugs = getAllHostingSubSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const data = getHostingSubService(slug);

  if (!data) {
    return {
      title: "Hosting Service Not Found | Bird Hills Tech",
    };
  }

  return {
    title: `${data.title} | Bird Hills Tech`,
    description: data.heroSubcopy,
    alternates: {
      canonical: `https://birdhillstech.com/hosting/${data.slug}`,
    },
    openGraph: {
      title: `${data.title} | Bird Hills Tech`,
      description: data.heroSubcopy,
      images: [data.heroImage],
    },
  };
}

export default async function HostingSubServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = getHostingSubService(slug);

  if (!data) {
    notFound();
  }

  return <SubServiceDetailView data={data} />;
}
