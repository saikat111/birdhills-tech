"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle, MessageSquare, ArrowRight } from "lucide-react";
import Link from "next/link";

export interface FaqItem {
  question: string;
  answer: string;
  category?: string;
}

interface FaqAccordionProps {
  items: FaqItem[];
  title?: string;
  eyebrow?: string;
  description?: string;
  includeSchema?: boolean;
  theme?: "light" | "dark";
  showContactCta?: boolean;
}

export default function FaqAccordion({
  items,
  title = "Frequently Asked Questions",
  eyebrow = "DIRECT CLARITY & ANSWERS",
  description = "Straightforward answers to common questions about our technical execution, commercial terms, timelines, and ongoing support.",
  includeSchema = true,
  theme = "light",
  showContactCta = true,
}: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", ...Array.from(new Set(items.map((i) => i.category).filter(Boolean) as string[]))];

  const filteredItems = selectedCategory === "All"
    ? items
    : items.filter((i) => i.category === selectedCategory);

  const toggleItem = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  // Structured Data Schema for Google Rich Snippets
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  const isDark = theme === "dark";

  return (
    <section className={`py-20 md:py-28 relative overflow-hidden ${isDark ? "bg-[#070B14] text-white" : "bg-[#F7F9FC] text-[#070B14]"}`}>
      {includeSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          {eyebrow && (
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-widest text-[#C59B27] uppercase bg-[#C59B27]/10 border border-[#C59B27]/25 mb-4">
              <HelpCircle size={13} className="text-[#C59B27]" />
              {eyebrow}
            </span>
          )}
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight ${isDark ? "text-white" : "text-[#070B14]"}`}>
            {title}
          </h2>
          {description && (
            <p className={`mt-4 text-base sm:text-lg leading-relaxed ${isDark ? "text-slate-300" : "text-[#475467]"}`}>
              {description}
            </p>
          )}

          {/* Category Filter Pills (if multiple categories exist) */}
          {categories.length > 2 && (
            <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setSelectedCategory(cat);
                    setOpenIndex(0);
                  }}
                  className={`px-4 py-2 text-xs font-bold rounded-lg transition-all duration-200 cursor-pointer ${
                    selectedCategory === cat
                      ? "bg-[#0B1730] text-[#C59B27] shadow-sm ring-1 ring-[#C59B27]/40"
                      : isDark
                      ? "bg-white/5 text-slate-300 hover:bg-white/10"
                      : "bg-white text-[#475467] hover:bg-slate-100 border border-slate-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3.5">
          {filteredItems.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-xl transition-all duration-200 border ${
                  isDark
                    ? isOpen
                      ? "bg-white/[0.06] border-[#C59B27]/40 shadow-lg"
                      : "bg-white/[0.02] border-white/10 hover:border-white/20"
                    : isOpen
                    ? "bg-white border-[#C59B27]/40 shadow-md ring-1 ring-[#C59B27]/20"
                    : "bg-white border-slate-200/80 hover:border-slate-300"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleItem(idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className={`text-base sm:text-lg font-bold pr-2 transition-colors ${
                    isOpen
                      ? "text-[#C59B27]"
                      : isDark ? "text-white" : "text-[#070B14]"
                  }`}>
                    {item.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen
                        ? "rotate-180 bg-[#C59B27]/20 text-[#C59B27]"
                        : isDark
                        ? "bg-white/10 text-slate-300"
                        : "bg-slate-100 text-slate-600"
                    }`}
                  >
                    <ChevronDown size={17} />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm sm:text-base leading-relaxed border-t border-dashed transition-all animate-in fade-in-50 duration-200">
                    <div
                      className={`pt-3 ${
                        isDark
                          ? "text-slate-300 border-white/10"
                          : "text-[#475467] border-slate-100"
                      }`}
                    >
                      {item.answer}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Box */}
        {showContactCta && (
          <div className={`mt-12 p-6 sm:p-8 rounded-2xl border text-center flex flex-col sm:flex-row items-center justify-between gap-6 ${
            isDark
              ? "bg-[#0B1730]/60 border-[#C59B27]/30"
              : "bg-white border-slate-200 shadow-sm"
          }`}>
            <div className="text-left space-y-1">
              <h3 className={`text-lg font-bold ${isDark ? "text-white" : "text-[#070B14]"}`}>
                Have a specific question about your project?
              </h3>
              <p className={`text-sm ${isDark ? "text-slate-300" : "text-[#667085]"}`}>
                Speak directly with our senior technical partners in Dubai. No sales pressure, just direct feasibility answers.
              </p>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold bg-[#C59B27] hover:bg-[#b0881e] text-[#070B14] transition-colors shadow-sm"
              >
                <span>Ask Our Team</span>
                <ArrowRight size={14} />
              </Link>
              <Link
                href="https://wa.me/971524405785"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold border transition-colors ${
                  isDark
                    ? "border-white/20 text-white hover:bg-white/10"
                    : "border-slate-300 text-[#070B14] hover:bg-slate-50"
                }`}
              >
                <MessageSquare size={14} />
                <span>WhatsApp</span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
