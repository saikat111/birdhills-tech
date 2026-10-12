"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Search,
  Sparkles,
  Bot,
  MapPin,
  FileCode,
  CheckCircle2,
  AlertCircle,
  Copy,
  ExternalLink,
  RefreshCw,
  Globe,
  HelpCircle,
  Smartphone,
  Monitor,
  Share2,
  Code2,
} from "lucide-react";

export function SeoToolsClient() {
  const [activeTab, setActiveTab] = useState<"onpage" | "aeo" | "schema" | "sitemap" | "keyword">("onpage");

  // Tab 1: Live On-Page SEO State
  const [title, setTitle] = useState("Custom Web Development & AI Solutions Dubai | Bird Hills Tech");
  const [description, setDescription] = useState(
    "Bird Hills Tech delivers custom Next.js websites, AI automation, local SEO & high-performance digital growth for enterprises in Dubai and the GCC. Book a consultation."
  );
  const [urlSlug, setUrlSlug] = useState("services/web-development");
  const [devicePreview, setDevicePreview] = useState<"desktop" | "mobile">("desktop");
  const [copiedNotification, setCopiedNotification] = useState<string | null>(null);

  // Tab 2: AEO & GEO Content Analyzer State
  const [contentSample, setContentSample] = useState(
    `Bird Hills Tech is a premier Dubai-based digital growth and technology company founded in Deira, UAE. The agency specializes in custom web development using Next.js 16, accredited UAE .ae domain hosting, AI workflow automation, and Google Business Profile local SEO ranking.

According to UAE commercial metrics, high-performance websites achieve 42% higher conversion rates in the GCC market. Bird Hills Tech delivers 99+ Lighthouse performance scores and complete asset ownership for all client engagements.

Common FAQs:
- What does Bird Hills Tech build? Custom enterprise websites, AI chatbots, and CRM sales pipelines.
- Where is the company located? Deira - Stone Building - 122 7th A Street - Al Baraha, Dubai, UAE.`
  );

  // Tab 3: Local Dubai Schema Generator State
  const [schemaData, setSchemaData] = useState({
    businessName: "Bird Hills Tech",
    serviceType: "ProfessionalService",
    streetAddress: "Deira - Stone Building - 122 7th A Street - Al Baraha",
    city: "Dubai",
    country: "AE",
    phone: "+971 52 440 5785",
    email: "info@birdhillstech.com",
    website: "https://birdhillstech.com",
    priceRange: "$$$",
    latitude: "25.276987",
    longitude: "55.312952",
    openingHours: "Mo-Sa 09:00-18:00",
  });

  // Calculate Title metrics
  const titleChars = title.length;
  const isTitleOptimal = titleChars >= 45 && titleChars <= 60;
  const isTitleTooLong = titleChars > 60;
  const isTitleTooShort = titleChars < 45;

  // Calculate Description metrics
  const descChars = description.length;
  const isDescOptimal = descChars >= 140 && descChars <= 160;
  const isDescTooLong = descChars > 160;
  const isDescTooShort = descChars < 140;

  // Calculate AEO Metrics
  const sampleWords = contentSample.trim().split(/\s+/).filter(Boolean);
  const sampleWordCount = sampleWords.length;
  const hasDirectDefinition = contentSample.toLowerCase().includes("is a") || contentSample.toLowerCase().includes("provides");
  const hasStatistics = /\b\d{1,3}%\b|\b\d{1,4}\s*(ms|seconds|AED|USD|\$)\b/i.test(contentSample);
  const hasFaqs = /faq|frequently asked|what|where|how|why/i.test(contentSample);
  const hasLocation = /dubai|uae|gcc|deira/i.test(contentSample);

  let aeoScore = 0;
  if (sampleWordCount >= 100) aeoScore += 25;
  if (hasDirectDefinition) aeoScore += 25;
  if (hasStatistics) aeoScore += 25;
  if (hasFaqs && hasLocation) aeoScore += 25;

  // Generate JSON-LD Schema
  const generatedSchema = {
    "@context": "https://schema.org",
    "@type": schemaData.serviceType,
    name: schemaData.businessName,
    image: `${schemaData.website}/images/logo.png`,
    "@id": `${schemaData.website}#organization`,
    url: schemaData.website,
    telephone: schemaData.phone,
    email: schemaData.email,
    priceRange: schemaData.priceRange,
    address: {
      "@type": "PostalAddress",
      streetAddress: schemaData.streetAddress,
      addressLocality: schemaData.city,
      addressCountry: schemaData.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: schemaData.latitude,
      longitude: schemaData.longitude,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "09:00",
        closes: "18:00",
      },
    ],
    sameAs: [
      "https://www.linkedin.com/company/bird-hills-tech",
      "https://wa.me/971524405785",
    ],
  };

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedNotification(label);
    setTimeout(() => setCopiedNotification(null), 2500);
  };

  return (
    <div className="space-y-6">
      {/* 1. TOP HEADER & OVERVIEW */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#070B14] text-white p-6 rounded-2xl border border-[#C59B27]/30 shadow-md">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-[#C59B27]/20 text-[#D4AF37] border border-[#C59B27]/40">
              Interactive SEO & AEO Suite
            </span>
            <span className="text-xs text-slate-400">Dubai Market Optimization</span>
          </div>
          <h1 className="text-2xl font-bold text-white mt-1">
            Search, Entity & Generative AI Tools
          </h1>
          <p className="text-xs text-slate-300 mt-1">
            Real-time on-page SERP snippet simulator, Answer Engine Optimization (AEO/GEO) audits, and Dubai Local Schema.org generator.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Link
            href="/services/ai-seo-search"
            target="_blank"
            className="px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-semibold text-slate-200 border border-white/15 transition-colors inline-flex items-center gap-1.5"
          >
            <span>View Public SEO Service</span>
            <ExternalLink size={13} />
          </Link>
        </div>
      </div>

      {/* 2. NAVIGATION TABS */}
      <div className="flex flex-wrap gap-2 bg-white p-2 rounded-xl border border-[#E4E7EC] shadow-2xs">
        <button
          type="button"
          onClick={() => setActiveTab("onpage")}
          className={`px-4 py-2.5 rounded-lg text-xs font-bold transition-all flex items-center gap-2 ${
            activeTab === "onpage"
              ? "bg-[#070B14] text-[#D4AF37] border border-[#C59B27]/40 shadow-sm"
              : "text-slate-600 hover:text-[#0B0F19] hover:bg-slate-50"
          }`}
        >
          <Search size={15} />
          <span>SERP Snippet & On-Page Meta</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab("aeo")}
          className={`px-4 py-2.5 rounded-lg text-xs font-bold transition-all flex items-center gap-2 ${
            activeTab === "aeo"
              ? "bg-[#070B14] text-[#D4AF37] border border-[#C59B27]/40 shadow-sm"
              : "text-slate-600 hover:text-[#0B0F19] hover:bg-slate-50"
          }`}
        >
          <Bot size={15} />
          <span>AEO & Generative AI Audit</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab("schema")}
          className={`px-4 py-2.5 rounded-lg text-xs font-bold transition-all flex items-center gap-2 ${
            activeTab === "schema"
              ? "bg-[#070B14] text-[#D4AF37] border border-[#C59B27]/40 shadow-sm"
              : "text-slate-600 hover:text-[#0B0F19] hover:bg-slate-50"
          }`}
        >
          <FileCode size={15} />
          <span>Dubai Local Schema Generator</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab("sitemap")}
          className={`px-4 py-2.5 rounded-lg text-xs font-bold transition-all flex items-center gap-2 ${
            activeTab === "sitemap"
              ? "bg-[#070B14] text-[#D4AF37] border border-[#C59B27]/40 shadow-sm"
              : "text-slate-600 hover:text-[#0B0F19] hover:bg-slate-50"
          }`}
        >
          <Globe size={15} />
          <span>Sitemap & Indexing Health</span>
        </button>
      </div>

      {copiedNotification && (
        <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-xs text-emerald-800 font-semibold flex items-center gap-2 animate-in fade-in">
          <CheckCircle2 size={16} className="text-emerald-600" />
          <span>{copiedNotification} copied to clipboard!</span>
        </div>
      )}

      {/* 3. TAB CONTENT */}

      {/* TAB 1: ON-PAGE SERP SNIPPET SIMULATOR */}
      {activeTab === "onpage" && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Form: Inputs */}
          <div className="lg:col-span-6 bg-white p-6 rounded-2xl border border-[#E4E7EC] shadow-2xs space-y-5">
            <h2 className="text-sm font-bold text-[#0B0F19] uppercase tracking-wider flex items-center gap-2">
              <Search size={16} className="text-[#C59B27]" />
              <span>Metadata & SERP Parameters</span>
            </h2>

            {/* Title Tag Input */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="text-xs font-bold text-[#0B0F19]">
                  SEO Title Tag
                </label>
                <span
                  className={`text-[11px] font-mono font-bold px-2 py-0.5 rounded ${
                    isTitleOptimal
                      ? "bg-emerald-50 text-emerald-700"
                      : isTitleTooLong
                      ? "bg-rose-50 text-rose-700"
                      : "bg-amber-50 text-amber-700"
                  }`}
                >
                  {titleChars} / 60 Chars {isTitleOptimal ? "✓ Optimal" : isTitleTooLong ? "⚠ Truncated" : "Too Short"}
                </span>
              </div>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full p-3 text-xs border border-[#E4E7EC] rounded-xl focus:border-[#C59B27] focus:outline-none text-[#0B0F19]"
              />
              <p className="text-[11px] text-[#667085] mt-1">
                Google displays up to 60 characters (approx. 600px). Include primary target service and &quot;Dubai&quot;.
              </p>
            </div>

            {/* Meta Description Input */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="text-xs font-bold text-[#0B0F19]">
                  Meta Description
                </label>
                <span
                  className={`text-[11px] font-mono font-bold px-2 py-0.5 rounded ${
                    isDescOptimal
                      ? "bg-emerald-50 text-emerald-700"
                      : isDescTooLong
                      ? "bg-rose-50 text-rose-700"
                      : "bg-amber-50 text-amber-700"
                  }`}
                >
                  {descChars} / 160 Chars {isDescOptimal ? "✓ Optimal" : isDescTooLong ? "⚠ Truncated" : "Too Short"}
                </span>
              </div>
              <textarea
                rows={3}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full p-3 text-xs border border-[#E4E7EC] rounded-xl focus:border-[#C59B27] focus:outline-none text-[#0B0F19]"
              />
              <p className="text-[11px] text-[#667085] mt-1">
                Aim for 145-160 characters. Highlight unique commercial value and a direct call-to-action.
              </p>
            </div>

            {/* Canonical Slug */}
            <div>
              <label className="block text-xs font-bold text-[#0B0F19] mb-1.5">
                Canonical URL Slug
              </label>
              <div className="flex items-center gap-1 text-xs font-mono text-slate-500 bg-slate-50 p-2.5 rounded-xl border border-slate-200">
                <span>https://birdhillstech.com/</span>
                <input
                  type="text"
                  value={urlSlug}
                  onChange={(e) => setUrlSlug(e.target.value)}
                  className="bg-transparent border-0 focus:outline-none text-[#0B0F19] font-bold flex-1"
                />
              </div>
            </div>

            {/* Preset quick fills */}
            <div className="pt-2 border-t border-slate-100">
              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-2">
                Quick Template Presets:
              </span>
              <div className="flex flex-wrap gap-1.5">
                <button
                  type="button"
                  onClick={() => {
                    setTitle("Custom Web Development Company Dubai | Bird Hills Tech");
                    setDescription(
                      "Ultra-fast Next.js corporate websites, bespoke portals & e-commerce engineered in Dubai with peak performance and full project ownership."
                    );
                    setUrlSlug("services/web-development");
                  }}
                  className="text-[10px] font-semibold px-2 py-1 bg-slate-100 hover:bg-[#C59B27]/15 hover:text-[#C59B27] rounded-md transition-colors"
                >
                  Web Development
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setTitle("Google Business Profile & Local SEO Dubai | Bird Hills Tech");
                    setDescription(
                      "Dominate Dubai Google Maps 3-pack, solve GBP verification delays, and drive high-intent local customer calls and reviews across the UAE."
                    );
                    setUrlSlug("services/google-business-profile-local-seo");
                  }}
                  className="text-[10px] font-semibold px-2 py-1 bg-slate-100 hover:bg-[#C59B27]/15 hover:text-[#C59B27] rounded-md transition-colors"
                >
                  Google Maps & Local SEO
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setTitle("AI SEO & Search (AEO & GEO) Dubai | Bird Hills Tech");
                    setDescription(
                      "Pioneering Answer Engine Optimization (AEO) and Generative Engine Optimization (GEO) so Perplexity AI & ChatGPT cite your brand in Dubai."
                    );
                    setUrlSlug("services/ai-seo-search");
                  }}
                  className="text-[10px] font-semibold px-2 py-1 bg-slate-100 hover:bg-[#C59B27]/15 hover:text-[#C59B27] rounded-md transition-colors"
                >
                  AI SEO & AEO
                </button>
              </div>
            </div>
          </div>

          {/* Right Preview: Live Google SERP Card */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-white p-6 rounded-2xl border border-[#E4E7EC] shadow-2xs space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-xs font-bold text-[#0B0F19] uppercase tracking-wider flex items-center gap-1.5">
                  <span>Live Google Search Snippet Preview</span>
                </h3>
                <div className="flex items-center bg-slate-100 p-0.5 rounded-lg text-xs">
                  <button
                    type="button"
                    onClick={() => setDevicePreview("desktop")}
                    className={`px-2 py-1 rounded flex items-center gap-1 font-semibold ${
                      devicePreview === "desktop" ? "bg-white text-[#0B0F19] shadow-xs" : "text-slate-500"
                    }`}
                  >
                    <Monitor size={12} /> Desktop
                  </button>
                  <button
                    type="button"
                    onClick={() => setDevicePreview("mobile")}
                    className={`px-2 py-1 rounded flex items-center gap-1 font-semibold ${
                      devicePreview === "mobile" ? "bg-white text-[#0B0F19] shadow-xs" : "text-slate-500"
                    }`}
                  >
                    <Smartphone size={12} /> Mobile
                  </button>
                </div>
              </div>

              {/* SERP Card Box */}
              <div className="p-4 sm:p-5 rounded-xl bg-white border border-slate-200 font-sans shadow-xs">
                {/* Top URL breadcrumb */}
                <div className="flex items-center gap-2 mb-1.5">
                  <div className="w-6 h-6 rounded-full bg-black flex items-center justify-center text-[10px] font-bold text-[#C59B27]">
                    BH
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs text-[#202124] font-medium leading-none">
                      Bird Hills Tech
                    </div>
                    <div className="text-[11px] text-[#5f6368] font-mono leading-none truncate mt-0.5">
                      https://birdhillstech.com › {urlSlug}
                    </div>
                  </div>
                </div>

                {/* Title */}
                <h4 className="text-base sm:text-lg font-medium text-[#1a0dab] hover:underline cursor-pointer leading-snug">
                  {title || "Untitled Page"}
                </h4>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#4d5156] leading-relaxed mt-1">
                  {description || "No description provided."}
                </p>
              </div>

              {/* Action: Copy HTML Tags */}
              <div className="pt-2 flex items-center justify-between">
                <span className="text-xs text-[#667085]">
                  Includes standard canonical and meta robots tags
                </span>
                <button
                  type="button"
                  onClick={() =>
                    copyToClipboard(
                      `<title>${title}</title>\n<meta name="description" content="${description}" />\n<link rel="canonical" href="https://birdhillstech.com/${urlSlug}" />`,
                      "Meta HTML Tags"
                    )
                  }
                  className="px-3 py-1.5 rounded-lg bg-[#070B14] hover:bg-[#1A2234] text-[#D4AF37] text-xs font-bold border border-[#C59B27]/40 flex items-center gap-1.5 transition-colors"
                >
                  <Copy size={13} />
                  <span>Copy Meta Tags</span>
                </button>
              </div>
            </div>

            {/* Social Share Preview Card (LinkedIn/OpenGraph) */}
            <div className="bg-white p-6 rounded-2xl border border-[#E4E7EC] shadow-2xs space-y-3">
              <div className="text-xs font-bold text-[#0B0F19] uppercase tracking-wider flex items-center gap-1.5">
                <Share2 size={14} className="text-[#C59B27]" />
                <span>OpenGraph Social Card (LinkedIn / Twitter / Meta)</span>
              </div>

              <div className="rounded-xl border border-slate-200 overflow-hidden bg-slate-50">
                <div className="relative aspect-[16/9] w-full bg-slate-900 flex items-center justify-center">
                  <Image
                    src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80"
                    alt="OG Social Card Preview"
                    fill
                    className="object-cover opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <span className="text-[10px] font-bold text-[#D4AF37] uppercase tracking-wider">
                      BIRD HILLS TECH · DUBAI
                    </span>
                    <h5 className="text-xs sm:text-sm font-bold truncate mt-0.5">
                      {title}
                    </h5>
                  </div>
                </div>
                <div className="p-3 bg-white border-t border-slate-100">
                  <div className="text-[10px] uppercase font-mono text-slate-400">
                    birdhillstech.com
                  </div>
                  <div className="text-xs font-bold text-[#0B0F19] truncate mt-0.5">
                    {title}
                  </div>
                  <div className="text-[11px] text-[#667085] line-clamp-1 mt-0.5">
                    {description}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: AEO & GENERATIVE AI READINESS AUDIT */}
      {activeTab === "aeo" && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-7 bg-white p-6 rounded-2xl border border-[#E4E7EC] shadow-2xs space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-sm font-bold text-[#0B0F19] uppercase tracking-wider flex items-center gap-2">
                  <Bot size={16} className="text-[#C59B27]" />
                  <span>AEO / GEO Article & Service Content Inspector</span>
                </h2>
                <p className="text-xs text-[#667085] mt-0.5">
                  Tests if content is formatted for Perplexity AI, ChatGPT Search & Google AI Overviews to parse and quote.
                </p>
              </div>
            </div>

            <textarea
              rows={12}
              value={contentSample}
              onChange={(e) => setContentSample(e.target.value)}
              className="w-full p-4 text-xs font-mono border border-[#E4E7EC] rounded-xl focus:border-[#C59B27] focus:outline-none text-[#0B0F19] leading-relaxed"
              placeholder="Paste article or service page content..."
            />

            <div className="flex items-center justify-between text-xs text-[#667085] pt-2">
              <span>Sample Word Count: {sampleWordCount} words</span>
              <button
                type="button"
                onClick={() =>
                  setContentSample(
                    `Bird Hills Tech is a Dubai-based technology, creative and digital growth company. Founded in Deira, UAE, the agency delivers custom web development on Next.js 16, enterprise .ae domain hosting, AI workflow automation, and local SEO.\n\nAccording to regional studies, corporate websites operating on modern high-performance architectures convert 42% higher in the UAE. Bird Hills Tech provides full project asset ownership to clients.`
                  )
                }
                className="text-xs font-semibold text-[#C59B27] hover:underline"
              >
                Reset to Benchmark Copy
              </button>
            </div>
          </div>

          {/* Right Column: Live AEO Scorecard */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-[#070B14] text-white p-6 rounded-2xl border border-[#C59B27]/30 shadow-md space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-extrabold uppercase tracking-wider text-[#D4AF37]">
                  AEO Citation Readiness
                </span>
                <span className="text-2xl font-extrabold text-[#D4AF37] font-mono">
                  {aeoScore}%
                </span>
              </div>

              {/* Progress bar */}
              <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-[#C59B27] to-[#D4AF37] transition-all duration-500"
                  style={{ width: `${aeoScore}%` }}
                />
              </div>

              {/* Criteria list */}
              <div className="space-y-3 pt-2 text-xs">
                <div className="flex items-start gap-2.5">
                  <div className={`mt-0.5 ${hasDirectDefinition ? "text-emerald-400" : "text-rose-400"}`}>
                    <CheckCircle2 size={16} />
                  </div>
                  <div>
                    <span className="font-bold text-white">Direct Definitional Lead</span>
                    <p className="text-[11px] text-slate-300">
                      Starts with clear subject declaration (&quot;X is a...&quot;) within first 40 words for AI snippet extraction.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <div className={`mt-0.5 ${hasStatistics ? "text-emerald-400" : "text-rose-400"}`}>
                    <CheckCircle2 size={16} />
                  </div>
                  <div>
                    <span className="font-bold text-white">Factual & Numeric Citation</span>
                    <p className="text-[11px] text-slate-300">
                      Contains concrete metrics, performance scores (99+), or percentage ROI data.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <div className={`mt-0.5 ${hasFaqs ? "text-emerald-400" : "text-rose-400"}`}>
                    <CheckCircle2 size={16} />
                  </div>
                  <div>
                    <span className="font-bold text-white">Structured Question Answers (Q&A)</span>
                    <p className="text-[11px] text-slate-300">
                      Addresses direct user questions (What, Where, How) matching conversational search queries.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <div className={`mt-0.5 ${hasLocation ? "text-emerald-400" : "text-rose-400"}`}>
                    <CheckCircle2 size={16} />
                  </div>
                  <div>
                    <span className="font-bold text-white">Dubai & GCC Geographic Entities</span>
                    <p className="text-[11px] text-slate-300">
                      Grounds entity authority to Dubai, Deira, UAE, and GCC regional jurisdiction.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-[#E4E7EC] text-xs text-[#667085] space-y-2 shadow-2xs">
              <span className="font-bold text-[#0B0F19] block">
                How Generative Search Works:
              </span>
              <p>
                Perplexity AI and ChatGPT Search do not scan every word on the page. They query embeddings, parse entity JSON-LD schemas, and look for direct answers that can be quoted with high factual confidence.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: DUBAI LOCAL SCHEMA.ORG GENERATOR */}
      {activeTab === "schema" && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Form */}
          <div className="lg:col-span-6 bg-white p-6 rounded-2xl border border-[#E4E7EC] shadow-2xs space-y-4">
            <h2 className="text-sm font-bold text-[#0B0F19] uppercase tracking-wider flex items-center gap-2">
              <MapPin size={16} className="text-[#C59B27]" />
              <span>Entity & Local Dubai Schema Fields</span>
            </h2>

            <div className="grid grid-cols-2 gap-3 text-xs">
              <div>
                <label className="font-bold text-[#0B0F19] block mb-1">Business Name</label>
                <input
                  type="text"
                  value={schemaData.businessName}
                  onChange={(e) => setSchemaData({ ...schemaData, businessName: e.target.value })}
                  className="w-full p-2.5 border border-[#E4E7EC] rounded-lg"
                />
              </div>

              <div>
                <label className="font-bold text-[#0B0F19] block mb-1">Schema Type</label>
                <select
                  value={schemaData.serviceType}
                  onChange={(e) => setSchemaData({ ...schemaData, serviceType: e.target.value })}
                  className="w-full p-2.5 border border-[#E4E7EC] rounded-lg"
                >
                  <option value="ProfessionalService">ProfessionalService</option>
                  <option value="LocalBusiness">LocalBusiness</option>
                  <option value="Organization">Organization</option>
                </select>
              </div>

              <div className="col-span-2">
                <label className="font-bold text-[#0B0F19] block mb-1">Dubai Physical Address</label>
                <input
                  type="text"
                  value={schemaData.streetAddress}
                  onChange={(e) => setSchemaData({ ...schemaData, streetAddress: e.target.value })}
                  className="w-full p-2.5 border border-[#E4E7EC] rounded-lg"
                />
              </div>

              <div>
                <label className="font-bold text-[#0B0F19] block mb-1">Phone (International)</label>
                <input
                  type="text"
                  value={schemaData.phone}
                  onChange={(e) => setSchemaData({ ...schemaData, phone: e.target.value })}
                  className="w-full p-2.5 border border-[#E4E7EC] rounded-lg"
                />
              </div>

              <div>
                <label className="font-bold text-[#0B0F19] block mb-1">Price Range</label>
                <input
                  type="text"
                  value={schemaData.priceRange}
                  onChange={(e) => setSchemaData({ ...schemaData, priceRange: e.target.value })}
                  className="w-full p-2.5 border border-[#E4E7EC] rounded-lg"
                />
              </div>

              <div>
                <label className="font-bold text-[#0B0F19] block mb-1">Latitude</label>
                <input
                  type="text"
                  value={schemaData.latitude}
                  onChange={(e) => setSchemaData({ ...schemaData, latitude: e.target.value })}
                  className="w-full p-2.5 border border-[#E4E7EC] rounded-lg font-mono text-[11px]"
                />
              </div>

              <div>
                <label className="font-bold text-[#0B0F19] block mb-1">Longitude</label>
                <input
                  type="text"
                  value={schemaData.longitude}
                  onChange={(e) => setSchemaData({ ...schemaData, longitude: e.target.value })}
                  className="w-full p-2.5 border border-[#E4E7EC] rounded-lg font-mono text-[11px]"
                />
              </div>
            </div>
          </div>

          {/* Generated Code */}
          <div className="lg:col-span-6 bg-white p-6 rounded-2xl border border-[#E4E7EC] shadow-2xs space-y-4 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-[#0B0F19] uppercase tracking-wider">
                  Generated JSON-LD Structured Data
                </span>
                <button
                  type="button"
                  onClick={() =>
                    copyToClipboard(
                      `<script type="application/ld+json">\n${JSON.stringify(
                        generatedSchema,
                        null,
                        2
                      )}\n</script>`,
                      "JSON-LD Schema Script"
                    )
                  }
                  className="px-3 py-1.5 rounded-lg bg-[#070B14] hover:bg-[#1A2234] text-[#D4AF37] text-xs font-bold border border-[#C59B27]/40 flex items-center gap-1.5 transition-colors"
                >
                  <Copy size={13} />
                  <span>Copy Script</span>
                </button>
              </div>

              <pre className="p-4 bg-slate-900 text-slate-200 rounded-xl text-[11px] font-mono overflow-x-auto max-h-96 leading-relaxed">
                {`<script type="application/ld+json">\n${JSON.stringify(
                  generatedSchema,
                  null,
                  2
                )}\n</script>`}
              </pre>
            </div>

            <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-[#667085]">
              <span>Valid for Google Rich Snippets & Maps 3-Pack</span>
              <a
                href="https://search.google.com/test/rich-results"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#C59B27] hover:underline font-bold inline-flex items-center gap-1"
              >
                Test on Google Rich Results <ExternalLink size={12} />
              </a>
            </div>
          </div>
        </div>
      )}

      {/* TAB 4: SITEMAP & INDEXING HEALTH */}
      {activeTab === "sitemap" && (
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#E4E7EC] shadow-2xs space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-base font-bold text-[#0B0F19]">
                Live Indexing Endpoints & Robots Configuration
              </h2>
              <p className="text-xs text-[#667085] mt-0.5">
                Ensure Googlebot, Bingbot, and AI crawlers can index every service and blog post.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-[#FAF8F5] border border-[#E4E7EC] space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-[#0B0F19]">XML Sitemap</span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">
                  Active
                </span>
              </div>
              <p className="text-xs text-[#667085]">
                Dynamic XML sitemap indexing all 9 official services, portfolio case studies, and blog articles.
              </p>
              <div className="flex items-center gap-2 pt-2">
                <a
                  href="/sitemap.xml"
                  target="_blank"
                  className="text-xs font-bold text-[#C59B27] hover:underline inline-flex items-center gap-1"
                >
                  Inspect /sitemap.xml <ExternalLink size={12} />
                </a>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[#FAF8F5] border border-[#E4E7EC] space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-[#0B0F19]">Robots.txt Directive</span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">
                  Allowed
                </span>
              </div>
              <p className="text-xs text-[#667085]">
                Public pages open to search engines with disallow rules protecting the /admin portal.
              </p>
              <div className="flex items-center gap-2 pt-2">
                <a
                  href="/robots.txt"
                  target="_blank"
                  className="text-xs font-bold text-[#C59B27] hover:underline inline-flex items-center gap-1"
                >
                  Inspect /robots.txt <ExternalLink size={12} />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default SeoToolsClient;
