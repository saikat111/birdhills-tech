import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getDomainSubService, getAllDomainSubSlugs } from "@/data/subServicesData";
import SubServiceDetailView from "@/components/common/SubServiceDetailView";

export async function generateStaticParams() {
  const slugs = getAllDomainSubSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const data = getDomainSubService(slug);

  if (!data) {
    return {
      title: "Domain Service Not Found | Bird Hills Tech",
    };
  }

  return {
    title: `${data.title} | Bird Hills Tech`,
    description: data.heroSubcopy,
    alternates: {
      canonical: `https://birdhillstech.com/domains/${data.slug}`,
    },
    openGraph: {
      title: `${data.title} | Bird Hills Tech`,
      description: data.heroSubcopy,
      images: [data.heroImage],
    },
  };
}

export default async function DomainSubServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = getDomainSubService(slug);

  if (!data) {
    notFound();
  }

  return <SubServiceDetailView data={data} />;
}
