"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Star, Quote, ChevronLeft, ChevronRight, CheckCircle2 } from "lucide-react";

interface TestimonialItem {
  id: string;
  authorName: string;
  role: string;
  company: string;
  quote: string;
  rating: number;
  avatarUrl?: string | null;
}

interface TestimonialsProps {
  testimonials: TestimonialItem[];
}

export function TestimonialsSection({ testimonials }: TestimonialsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const items = testimonials && testimonials.length > 0 ? testimonials : [];

  // Auto-slide effect - continuous autoplay
  useEffect(() => {
    if (items.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [items.length]);

  if (items.length === 0) return null;

  const current = items[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  return (
    <section className="py-24 bg-gradient-to-b from-white via-[#F7F9FC] to-white border-t border-[#E4E7EC] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Navigation Arrows */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-widest text-[#B38728] uppercase bg-[#C59B27]/10 border border-[#C59B27]/30 mb-3">
              CLIENT TESTIMONIALS & PROOF
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#070B14] tracking-tight leading-tight">
              Trusted by leaders who expect measurable excellence.
            </h2>
          </div>

          {/* Carousel Arrows */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous Testimonial"
              className="p-3 rounded-xl border border-[#E4E7EC] bg-white text-[#070B14] hover:bg-[#C59B27] hover:text-white hover:border-[#C59B27] shadow-2xs transition-all"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next Testimonial"
              className="p-3 rounded-xl border border-[#E4E7EC] bg-white text-[#070B14] hover:bg-[#C59B27] hover:text-white hover:border-[#C59B27] shadow-2xs transition-all"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Featured Auto-Sliding Card */}
        <div className="relative bg-white rounded-3xl p-8 sm:p-12 lg:p-16 border border-slate-200/80 shadow-xl overflow-hidden">
          {/* Background watermark quote */}
          <Quote
            size={180}
            className="absolute -bottom-10 -right-10 text-slate-100/80 pointer-events-none select-none"
          />

          <div className="relative z-10 max-w-4xl space-y-8">
            {/* Stars & Verified Badge */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(current.rating || 5)].map((_, i) => (
                  <Star key={i} size={18} className="fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                <CheckCircle2 size={12} />
                Verified Executive Review
              </span>
            </div>

            {/* Quote Typography */}
            <blockquote className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#070B14] leading-snug tracking-tight">
              &ldquo;{current.quote}&rdquo;
            </blockquote>

            {/* Author Information */}
            <div className="pt-6 border-t border-slate-100 flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-4">
                {current.avatarUrl ? (
                  <div className="relative w-14 h-14 rounded-full overflow-hidden shrink-0 border-2 border-[#C59B27]/30 shadow-sm">
                    <Image
                      src={current.avatarUrl}
                      alt={current.authorName}
                      fill
                      sizes="56px"
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#B38728] text-white font-bold text-lg flex items-center justify-center shrink-0 shadow-sm">
                    {current.authorName.charAt(0)}
                  </div>
                )}
                <div>
                  <div className="text-base sm:text-lg font-extrabold text-[#070B14]">
                    {current.authorName}
                  </div>
                  <div className="text-xs sm:text-sm text-[#667085]">
                    {current.role} ·{" "}
                    <span className="text-[#C59B27] font-semibold">{current.company}</span>
                  </div>
                </div>
              </div>

              {/* Progress dots */}
              <div className="flex items-center gap-2">
                {items.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setCurrentIndex(idx)}
                    aria-label={`Go to review ${idx + 1}`}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      idx === currentIndex ? "w-8 bg-[#C59B27]" : "w-2.5 bg-slate-200 hover:bg-slate-300"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Thumbnail Preview Bar of other clients */}
        {items.length > 1 && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
            {items.map((item, idx) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setCurrentIndex(idx)}
                className={`p-4 rounded-2xl text-left border transition-all ${
                  idx === currentIndex
                    ? "bg-white border-[#C59B27] shadow-md ring-1 ring-[#C59B27]"
                    : "bg-[#FAF8F5] border-slate-200/80 hover:bg-white text-slate-600"
                }`}
              >
                <div className="flex items-center gap-2.5 mb-1">
                  <span className="text-xs font-bold text-[#070B14] truncate">
                    {item.authorName}
                  </span>
                  <span className="text-[10px] text-slate-400 truncate">({item.company})</span>
                </div>
                <p className="text-[11px] text-[#667085] line-clamp-1 italic">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </button>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
export default TestimonialsSection;
