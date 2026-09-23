"use client";

import React, { useState } from "react";
import {
  FileText,
  Edit3,
  Save,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
  Plus,
  Trash2,
  Globe,
  Sparkles,
  Info,
} from "lucide-react";

interface PageContentItem {
  id: string;
  slug: string;
  title: string;
  contentJson: string;
  seoTitle?: string | null;
  seoDescription?: string | null;
  updatedAt: string | Date;
}

interface ContentClientProps {
  initialPages: PageContentItem[];
}

const DEFAULT_PAGES = [
  {
    slug: "homepage",
    title: "Homepage Copy & Hero",
    seoTitle: "Bird Hills Tech | Technology × Creative × Growth in Dubai",
    seoDescription: "Dubai-based technology, creative and digital growth firm. We combine custom web development, software engineering, and performance marketing.",
    contentJson: JSON.stringify(
      {
        heroEyebrow: "TECHNOLOGY × CREATIVE × GROWTH",
        heroHeadline: "Your Digital Growth Partner in Dubai",
        heroSubcopy:
          "We combine web development, creative design and digital marketing to build powerful digital experiences and measurable business growth.",
        trustStatement:
          "Helping ambitious UAE and international businesses build, launch and scale digital operations.",
        dubaiHeading: "Built in Dubai. Built for a global tomorrow.",
        dubaiSubcopy:
          "Based in Dubai, Bird Hills Tech works with ambitious businesses to create modern digital experiences combining technology, creativity and measurable growth.",
        ctaHeadline: "Let's Build Something Exceptional Together",
        ctaSubcopy:
          "Schedule a consultation with our technology and growth directors in Dubai to discuss your product, platform, or expansion.",
      },
      null,
      2
    ),
  },
  {
    slug: "about",
    title: "About Us & Corporate Philosophy",
    seoTitle: "About Bird Hills Tech | Dubai Technology & Creative Agency",
    seoDescription: "Learn about Bird Hills Tech, a Dubai firm uniting technology, creative design, and commercial growth.",
    contentJson: JSON.stringify(
      {
        missionStatement:
          "To engineer superior technology and creative digital assets that empower businesses across Dubai and the GCC to lead their markets.",
        visionStatement:
          "To be the premier digital growth architecture partner for leading enterprises in the Middle East.",
        coreValues: [
          "Engineering Rigor: No shortcuts or bloated templates.",
          "Design Precision: Aesthetic excellence tailored to regional and global standards.",
          "Measurable ROI: Technology that generates revenue and accelerates pipeline.",
          "Client Transparency: Direct access to directors and dedicated technical teams.",
        ],
      },
      null,
      2
    ),
  },
  {
    slug: "contact",
    title: "Contact Page Details",
    seoTitle: "Contact Bird Hills Tech | Deira, Dubai Office",
    seoDescription: "Get in touch with Bird Hills Tech. Visit our Dubai office or schedule an online strategy session.",
    contentJson: JSON.stringify(
      {
        officeAddress: "Deira - Stone Building - 122 7th A Street - Al Baraha - Dubai, UAE",
        businessHours: "Monday – Saturday: 9:00 AM – 6:00 PM (Gulf Standard Time)",
        phoneHotline: "+971 52 440 5785",
        whatsappHotline: "+971 52 440 5785",
        emailInquiries: "contact@birdhillstech.com",
        responseCommitment: "All commercial inquiries receive director response within 2 hours during UAE business hours.",
      },
      null,
      2
    ),
  },
];

export function ContentClient({ initialPages }: ContentClientProps) {
  const [pages, setPages] = useState<PageContentItem[]>(
    initialPages.length > 0
      ? initialPages
      : (DEFAULT_PAGES as unknown as PageContentItem[])
  );

  const [activeSlug, setActiveSlug] = useState<string>(
    initialPages[0]?.slug || DEFAULT_PAGES[0].slug
  );

  const activePage = pages.find((p) => p.slug === activeSlug) || pages[0];

  const [form, setForm] = useState({
    title: activePage?.title || "",
    contentRaw: activePage?.contentJson || "{}",
    seoTitle: activePage?.seoTitle || "",
    seoDescription: activePage?.seoDescription || "",
  });

  const [isSaving, setIsSaving] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSelectPage = (slug: string) => {
    const selected = pages.find((p) => p.slug === slug);
    if (selected) {
      setActiveSlug(slug);
      setForm({
        title: selected.title,
        contentRaw: selected.contentJson,
        seoTitle: selected.seoTitle || "",
        seoDescription: selected.seoDescription || "",
      });
      setSuccessMessage(null);
      setErrorMessage(null);
    }
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    setSuccessMessage(null);
    setErrorMessage(null);

    // Validate JSON
    try {
      JSON.parse(form.contentRaw);
    } catch {
      setErrorMessage("Content must be valid JSON format.");
      setIsSaving(false);
      return;
    }

    try {
      const res = await fetch("/api/admin/content", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          slug: activeSlug,
          title: form.title,
          contentJson: form.contentRaw,
          seoTitle: form.seoTitle,
          seoDescription: form.seoDescription,
        }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to update content");

      setPages((prev) => {
        const existingIdx = prev.findIndex((p) => p.slug === activeSlug);
        if (existingIdx >= 0) {
          const updated = [...prev];
          updated[existingIdx] = data.page;
          return updated;
        }
        return [...prev, data.page];
      });

      setSuccessMessage(`Page content for "${activeSlug}" updated successfully!`);
      setTimeout(() => setSuccessMessage(null), 4000);
    } catch (err: any) {
      setErrorMessage(err.message || "An error occurred while saving.");
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#E4E7EC]">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#070B14]">
            Website Page Content
          </h1>
          <p className="text-xs sm:text-sm text-[#667085] mt-1">
            Edit live headline copy, value statements, and metadata across website pages.
          </p>
        </div>
      </div>

      {/* Main Grid: Sidebar + Editor */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Page Selection */}
        <div className="lg:col-span-4 space-y-2">
          <div className="text-xs font-bold uppercase tracking-wider text-[#667085] px-2 mb-1">
            Editable Page Sections
          </div>
          {pages.map((p) => {
            const isSelected = p.slug === activeSlug;
            return (
              <button
                key={p.slug}
                type="button"
                onClick={() => handleSelectPage(p.slug)}
                className={`w-full text-left p-4 rounded-2xl border transition-all flex items-center justify-between ${
                  isSelected
                    ? "bg-[#C59B27] text-white border-[#C59B27] shadow-sm"
                    : "bg-white border-[#E4E7EC] text-[#070B14] hover:bg-[#F7F9FC]"
                }`}
              >
                <div>
                  <div className="text-xs font-bold">{p.title}</div>
                  <div
                    className={`text-[10px] font-mono mt-0.5 ${
                      isSelected ? "text-blue-100" : "text-slate-400"
                    }`}
                  >
                    /{p.slug === "homepage" ? "" : p.slug}
                  </div>
                </div>
                <Edit3 size={15} className={isSelected ? "text-white" : "text-slate-400"} />
              </button>
            );
          })}

          <div className="p-4 bg-blue-50/70 rounded-2xl border border-blue-200 mt-4 text-xs text-blue-900 leading-relaxed flex items-start gap-2.5">
            <Info size={16} className="text-[#C59B27] shrink-0 mt-0.5" />
            <div>
              <strong>CMS Content Control:</strong> Updates made here are saved directly to the database and can be bound dynamically across page templates.
            </div>
          </div>
        </div>

        {/* Right Column: Active Editor */}
        <div className="lg:col-span-8 bg-white p-6 rounded-2xl border border-[#E4E7EC] shadow-2xs space-y-5">
          <div className="flex items-center justify-between pb-4 border-b border-[#E4E7EC]">
            <div>
              <h2 className="text-base font-bold text-[#070B14] flex items-center gap-2">
                <FileText size={18} className="text-[#C59B27]" />
                Editing: {activePage?.title}
              </h2>
              <span className="text-[10px] text-slate-400 font-mono">
                Slug: /{activeSlug === "homepage" ? "" : activeSlug}
              </span>
            </div>

            <a
              href={activeSlug === "homepage" ? "/" : `/${activeSlug}`}
              target="_blank"
              rel="noreferrer"
              className="text-xs text-[#C59B27] hover:underline font-semibold inline-flex items-center gap-1"
            >
              View Page <ExternalLink size={13} />
            </a>
          </div>

          {successMessage && (
            <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl flex items-center gap-2 text-xs text-emerald-800">
              <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
              <span>{successMessage}</span>
            </div>
          )}

          {errorMessage && (
            <div className="p-3 bg-rose-50 border border-rose-200 rounded-xl flex items-center gap-2 text-xs text-rose-800">
              <AlertCircle size={16} className="text-rose-600 shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          <form onSubmit={handleSave} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Internal Page Name
              </label>
              <input
                type="text"
                required
                value={form.title}
                onChange={(e) => setForm({ ...form, title: e.target.value })}
                className="w-full px-3 py-2 border border-[#E4E7EC] rounded-xl text-xs text-[#070B14] focus:border-[#C59B27] focus:outline-none"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  SEO Meta Title Tag
                </label>
                <input
                  type="text"
                  value={form.seoTitle}
                  onChange={(e) => setForm({ ...form, seoTitle: e.target.value })}
                  placeholder="Appears in Google search results"
                  className="w-full px-3 py-2 border border-[#E4E7EC] rounded-xl text-xs text-[#070B14] focus:border-[#C59B27] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  SEO Meta Description
                </label>
                <input
                  type="text"
                  value={form.seoDescription}
                  onChange={(e) => setForm({ ...form, seoDescription: e.target.value })}
                  placeholder="150-160 character snippet for search engines"
                  className="w-full px-3 py-2 border border-[#E4E7EC] rounded-xl text-xs text-[#070B14] focus:border-[#C59B27] focus:outline-none"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-1">
                <label className="text-xs font-bold text-slate-700">
                  Structured Content Data (JSON)
                </label>
                <span className="text-[10px] text-slate-400">
                  Formatted key-value strings & arrays
                </span>
              </div>
              <textarea
                rows={14}
                required
                value={form.contentRaw}
                onChange={(e) => setForm({ ...form, contentRaw: e.target.value })}
                className="w-full px-3 py-2.5 border border-[#E4E7EC] rounded-xl text-xs font-mono text-[#070B14] focus:border-[#C59B27] focus:outline-none leading-relaxed bg-[#F8FAFC]"
              />
            </div>

            <div className="flex items-center justify-end gap-3 pt-4 border-t border-[#E4E7EC]">
              <button
                type="submit"
                disabled={isSaving}
                className="px-5 py-2.5 bg-[#C59B27] hover:bg-[#B38728] text-white text-xs font-semibold rounded-xl shadow-xs transition-colors flex items-center gap-1.5 disabled:opacity-50"
              >
                <Save size={15} />
                {isSaving ? "Saving..." : "Save Page Content"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
