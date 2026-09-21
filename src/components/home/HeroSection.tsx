"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Calendar,
  MapPin,
  ShieldCheck,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
} from "lucide-react";

interface HeroProps {
  eyebrow?: string;
  headline?: string;
  subcopy?: string;
}

const HERO_SLIDES = [
  {
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1600&q=85",
    alt: "Dubai modern downtown skyline and financial center",
    tag: "DUBAI HEADQUARTERS",
    title: "Deira · Al Baraha · UAE",
    subtitle: "Enterprise Digital Delivery · +971 52 440 5785",
  },
  {
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1600&q=85",
    alt: "Modern software engineering and Next.js code architecture",
    tag: "PRECISION ENGINEERING",
    title: "Next.js 16 & TypeScript",
    subtitle: "Sub-Second Core Web Vitals & Zero-Trust Security",
  },
  {
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=85",
    alt: "Executive corporate boardroom in Dubai",
    tag: "STRATEGIC CONSULTATION",
    title: "Direct Access to Directors",
    subtitle: "In-Person Briefings & Regional Digital Roadmap",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85",
    alt: "Creative UI/UX design and brand architecture studio",
    tag: "CREATIVE & BRAND SYSTEMS",
    title: "Prestige Visual Identity",
    subtitle: "Human-Centric UX & High-Converting Interfaces",
  },
  {
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=85",
    alt: "Digital marketing growth analytics and pipeline dashboard",
    tag: "MEASURABLE GROWTH",
    title: "B2B Acquisition & SEO",
    subtitle: "Closed-Loop Commercial Revenue Attribution",
  },
];

export function HeroSection({
  eyebrow = "TECHNOLOGY × CREATIVE × GROWTH",
  headline = "Your Digital Growth Partner in Dubai",
  subcopy = "We combine web development, creative design and digital marketing to build powerful digital experiences and measurable business growth.",
}: HeroProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-advance timer
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const activeSlideData = HERO_SLIDES[currentSlide];

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-[#F7F9FC] via-white to-white">
      {/* Background Subtle Corporate Grid Texture */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#E4E7EC15_1px,transparent_1px),linear-gradient(to_bottom,#E4E7EC15_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      {/* Decorative Atmospheric Glow */}
      <div className="absolute top-20 right-1/4 w-96 h-96 bg-[#1D68BD]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Text Content */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-left">
            {/* Eyebrow & Location Indicator */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[11px] sm:text-xs font-bold tracking-wider uppercase bg-[#EBF3FE] text-[#1D68BD] border border-[#BFDBFE]/60 shadow-2xs">
                <Sparkles size={13} className="text-[#1D68BD]" />
                {eyebrow}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[11px] sm:text-xs font-semibold text-[#101828] bg-white border border-[#E4E7EC] shadow-2xs">
                <MapPin size={13} className="text-[#1D68BD]" />
                Dubai · UAE
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0B1730] tracking-tight leading-[1.12]">
              {headline.split("Dubai")[0]}
              <span className="text-[#1D68BD] relative inline-block">
                Dubai
                <svg
                  className="absolute left-0 -bottom-2 w-full h-2 text-[#1D68BD]/25"
                  viewBox="0 0 100 8"
                  preserveAspectRatio="none"
                >
                  <path d="M0,5 Q50,0 100,5" stroke="currentColor" strokeWidth="4" fill="none" />
                </svg>
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-lg sm:text-xl text-[#667085] leading-relaxed max-w-2xl font-normal">
              {subcopy}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-[#1D68BD] text-white text-base font-semibold shadow-md hover:bg-[#155196] hover:shadow-lg transition-all duration-200 group"
              >
                Start a Project
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
              <Link
                href="/book-a-meeting"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-white text-[#101828] text-base font-semibold border border-[#E4E7EC] hover:bg-[#F7F9FC] hover:border-slate-300 transition-all duration-200 shadow-2xs"
              >
                <Calendar size={18} className="text-[#1D68BD]" />
                Book a Meeting
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center gap-1.5 px-5 py-4 rounded-xl text-xs font-bold text-[#1D68BD] hover:bg-[#EBF3FE] transition-colors"
              >
                View Transparent Pricing →
              </Link>
            </div>

            {/* Value Highlights */}
            <div className="pt-4 border-t border-slate-200/80 grid grid-cols-3 gap-4 text-left">
              <div>
                <div className="text-xs font-bold text-[#0B1730] uppercase tracking-wider">
                  Technology
                </div>
                <div className="text-xs text-[#667085] mt-0.5">High-speed web platforms</div>
              </div>
              <div>
                <div className="text-xs font-bold text-[#0B1730] uppercase tracking-wider">
                  Creative
                </div>
                <div className="text-xs text-[#667085] mt-0.5">Editorial corporate UI/UX</div>
              </div>
              <div>
                <div className="text-xs font-bold text-[#0B1730] uppercase tracking-wider">
                  Growth
                </div>
                <div className="text-xs text-[#667085] mt-0.5">Measurable ROI & SEO</div>
              </div>
            </div>
          </div>

          {/* Hero Visual: Auto-Slider Image Carousel */}
          <div
            className="lg:col-span-5 relative"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer Frame with soft shadow */}
              <div className="relative rounded-3xl p-2.5 bg-gradient-to-tr from-slate-200 via-white to-sky-100 shadow-2xl border border-white">
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-[#0B1730]">
                  {/* Slider Images with cross-fade */}
                  {HERO_SLIDES.map((slide, index) => {
                    const isActive = index === currentSlide;
                    return (
                      <div
                        key={slide.tag}
                        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                          isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                        }`}
                      >
                        <Image
                          src={slide.image}
                          alt={slide.alt}
                          fill
                          priority={index === 0}
                          sizes="(max-width: 768px) 100vw, 50vw"
                          className={`object-cover object-center transition-transform duration-7000 ease-out ${
                            isActive ? "scale-105" : "scale-100"
                          }`}
                        />
                        {/* Dark Gradient Overlay for Typography contrast */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1730]/90 via-[#0B1730]/25 to-transparent" />
                      </div>
                    );
                  })}

                  {/* Overlaid Slide Caption Badge */}
                  <div className="absolute bottom-16 left-5 right-5 z-20 p-4 rounded-xl bg-white/95 backdrop-blur-md shadow-xl border border-white/60 text-left transition-all duration-300">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[10px] font-bold tracking-wider uppercase text-[#1D68BD]">
                        {activeSlideData.tag}
                      </span>
                      <ShieldCheck size={16} className="text-emerald-600" />
                    </div>
                    <div className="text-sm font-extrabold text-[#0B1730]">
                      {activeSlideData.title}
                    </div>
                    <div className="text-[11px] text-[#667085] mt-0.5 truncate">
                      {activeSlideData.subtitle}
                    </div>
                  </div>

                  {/* Slider Bottom Navigation & Progress Dots */}
                  <div className="absolute bottom-4 left-5 right-5 z-20 flex items-center justify-between">
                    {/* Navigation Dots */}
                    <div className="flex items-center gap-1.5">
                      {HERO_SLIDES.map((_, i) => (
                        <button
                          key={i}
                          type="button"
                          onClick={() => setCurrentSlide(i)}
                          aria-label={`Go to slide ${i + 1}`}
                          className={`h-1.5 rounded-full transition-all duration-300 ${
                            i === currentSlide
                              ? "w-7 bg-[#1D68BD]"
                              : "w-2 bg-white/60 hover:bg-white"
                          }`}
                        />
                      ))}
                    </div>

                    {/* Controls & Counter */}
                    <div className="flex items-center gap-1 bg-black/40 backdrop-blur-sm rounded-full p-1 border border-white/20 text-white text-[11px]">
                      <button
                        type="button"
                        onClick={handlePrev}
                        aria-label="Previous Slide"
                        className="p-1 hover:bg-white/20 rounded-full transition-colors"
                      >
                        <ChevronLeft size={13} />
                      </button>
                      <span className="px-1.5 font-mono text-[10px]">
                        0{currentSlide + 1} / 0{HERO_SLIDES.length}
                      </span>
                      <button
                        type="button"
                        onClick={handleNext}
                        aria-label="Next Slide"
                        className="p-1 hover:bg-white/20 rounded-full transition-colors"
                      >
                        <ChevronRight size={13} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Live Beacon Pill */}
              <div className="hidden sm:flex absolute -top-5 -left-6 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-xl shadow-lg border border-[#E4E7EC] items-center gap-3 z-30">
                <div className="w-3 h-3 rounded-full bg-[#1D68BD] animate-ping" />
                <div className="text-xs font-semibold text-[#0B1730]">
                  Connected Engineering & Marketing
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default HeroSection;
