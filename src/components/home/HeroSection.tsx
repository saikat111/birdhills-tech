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
  MessageCircle,
  Zap,
  Layers,
} from "lucide-react";

interface HeroProps {
  eyebrow?: string;
  headline?: string;
  subcopy?: string;
}

const HERO_SLIDES = [
  {
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=2000&q=90",
    alt: "Dubai iconic Downtown skyline and Financial Centre at dusk",
    tag: "DUBAI HEADQUARTERS",
    location: "Deira · Al Baraha · Dubai, UAE",
    highlight: "Enterprise Digital Execution · +971 52 440 5785",
  },
  {
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=2000&q=90",
    alt: "Modern software development lab and Next.js engineering",
    tag: "PRECISION TECH STACK",
    location: "Next.js 16 · TypeScript · Prisma",
    highlight: "Sub-Second Core Web Vitals & Zero-Trust Security",
  },
  {
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2000&q=90",
    alt: "Executive corporate boardroom and strategic consulting suite in Dubai",
    tag: "EXECUTIVE ADVISORY",
    location: "Stone Building, Al Baraha, Deira",
    highlight: "Direct Access to Directors & Senior Solution Architects",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=90",
    alt: "High-end creative branding and UI/UX design studio",
    tag: "CREATIVE & BRAND SYSTEMS",
    location: "Prestige Visual Identity",
    highlight: "Human-Centric UX & High-Converting Gulf Interfaces",
  },
  {
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=2000&q=90",
    alt: "Digital marketing growth analytics and B2B revenue dashboard",
    tag: "MEASURABLE GROWTH",
    location: "Closed-Loop Attribution",
    highlight: "Commercial Demand Generation, High-Intent Google & SEO",
  },
];

export function HeroSection({
  eyebrow = "TECHNOLOGY × CREATIVE × GROWTH",
  headline = "Your Digital Growth Partner in Dubai",
  subcopy = "We combine high-performance web development, prestigious creative design, and commercial digital marketing to build powerful digital operations and measurable business growth in the UAE.",
}: HeroProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-advance timer (5.5 seconds)
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5500);
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
    <section
      className="relative min-h-[90vh] lg:min-h-[96vh] pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden flex items-center bg-[#070D1B] text-white"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* 1. FULL-BLEED HIGH-VISIBILITY BACKGROUND IMAGE SLIDER */}
      <div className="absolute inset-0 z-0">
        {HERO_SLIDES.map((slide, index) => {
          const isActive = index === currentSlide;
          return (
            <div
              key={slide.image}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
            >
              <Image
                src={slide.image}
                alt={slide.alt}
                fill
                priority={index === 0}
                sizes="100vw"
                className="object-cover object-center scale-105 transition-transform duration-10000 ease-out"
                style={{
                  transform: isActive ? "scale(1)" : "scale(1.08)",
                  transition: "transform 7s ease-out, opacity 1s ease-in-out",
                }}
              />
            </div>
          );
        })}

        {/* Dynamic Multi-Layer Gradient Overlays for High Visual Contrast & Readability */}
        {/* Deep navy base gradient that preserves clear visibility of the image on the right/center while ensuring 100% readable text on the left */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#070D1B]/95 via-[#070D1B]/75 to-[#070D1B]/40 lg:to-[#070D1B]/25" />
        {/* Subtle top & bottom vignette to blend gracefully with the header and following sections */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#070D1B]/90 via-transparent to-[#070D1B]" />
        {/* Subtle tech grid texture */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none opacity-40" />
      </div>

      {/* 2. MAIN HERO CONTENT CONTAINER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Core Value Proposition */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-left">
            {/* Badges & Live Status */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase bg-[#1D68BD]/25 text-[#38BDF8] border border-[#38BDF8]/30 backdrop-blur-md shadow-sm">
                <Sparkles size={13} className="text-[#38BDF8]" />
                {eyebrow}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold text-slate-200 bg-white/10 border border-white/15 backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
                Dubai Headquarters · Al Baraha
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12]">
              {headline.split("Dubai")[0]}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] via-[#60A5FA] to-[#1D68BD] relative inline-block">
                Dubai
              </span>
              {headline.split("Dubai")[1] || ""}
            </h1>

            {/* Supporting Copy */}
            <p className="text-lg sm:text-xl text-slate-200 leading-relaxed max-w-2xl font-normal drop-shadow-sm">
              {subcopy}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-[#1D68BD] text-white text-base font-semibold shadow-lg shadow-[#1D68BD]/30 hover:bg-[#155196] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 group"
              >
                Start a Project
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
              <Link
                href="/book-a-meeting"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-white/15 hover:bg-white/25 text-white text-base font-semibold border border-white/25 backdrop-blur-md transition-all duration-200 shadow-sm"
              >
                <Calendar size={18} className="text-[#38BDF8]" />
                Book a Meeting
              </Link>
              <a
                href="https://wa.me/971524405785?text=Hello%20Bird%20Hills%20Tech%2C%20I%20would%20like%20to%20discuss%20a%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-4 rounded-xl text-sm font-bold text-[#25D366] hover:bg-[#25D366]/10 border border-[#25D366]/30 backdrop-blur-md transition-colors"
              >
                <MessageCircle size={17} />
                WhatsApp Us
              </a>
            </div>

            {/* 3 Core Value Pillars */}
            <div className="pt-6 border-t border-white/15 grid grid-cols-3 gap-4 text-left">
              <div>
                <div className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
                  <Zap size={13} className="text-[#38BDF8]" />
                  Technology
                </div>
                <div className="text-xs text-slate-300 mt-0.5">Sub-second Web Platforms</div>
              </div>
              <div>
                <div className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
                  <Layers size={13} className="text-[#38BDF8]" />
                  Creative
                </div>
                <div className="text-xs text-slate-300 mt-0.5">Prestige Corporate UI/UX</div>
              </div>
              <div>
                <div className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
                  <Sparkles size={13} className="text-[#38BDF8]" />
                  Growth
                </div>
                <div className="text-xs text-slate-300 mt-0.5">Measurable GCC Revenue ROI</div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Slide Showcase Card & Stats */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none space-y-4">
              {/* Glassmorphic Slide Controller Card */}
              <div className="rounded-2xl p-6 bg-[#0B1730]/75 backdrop-blur-xl border border-white/20 shadow-2xl relative overflow-hidden group">
                <div className="flex items-center justify-between gap-3 mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider text-[#38BDF8] bg-[#38BDF8]/10 border border-[#38BDF8]/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8] animate-ping" />
                    {activeSlideData.tag}
                  </span>
                  <div className="text-xs font-mono text-slate-300">
                    {currentSlide + 1} / {HERO_SLIDES.length}
                  </div>
                </div>

                <h3 className="text-lg font-bold text-white mb-1.5 leading-snug">
                  {activeSlideData.location}
                </h3>
                <p className="text-xs text-slate-300 mb-5 leading-relaxed">
                  {activeSlideData.highlight}
                </p>

                {/* Progress Indicators & Controls */}
                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  {/* Indicators */}
                  <div className="flex items-center gap-1.5">
                    {HERO_SLIDES.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setCurrentSlide(i)}
                        className={`h-2 rounded-full transition-all duration-300 ${
                          i === currentSlide
                            ? "w-8 bg-[#38BDF8]"
                            : "w-2 bg-white/30 hover:bg-white/60"
                        }`}
                        aria-label={`Slide ${i + 1}`}
                      />
                    ))}
                  </div>

                  {/* Navigation Arrows */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setIsPaused(!isPaused)}
                      className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
                      title={isPaused ? "Play Auto-Slide" : "Pause Auto-Slide"}
                    >
                      {isPaused ? <Play size={13} /> : <Pause size={13} />}
                    </button>
                    <button
                      onClick={handlePrev}
                      className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
                      aria-label="Previous Slide"
                    >
                      <ChevronLeft size={16} />
                    </button>
                    <button
                      onClick={handleNext}
                      className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
                      aria-label="Next Slide"
                    >
                      <ChevronRight size={16} />
                    </button>
                  </div>
                </div>
              </div>

              {/* Verified Proof Badges Floating Below */}
              <div className="grid grid-cols-2 gap-3">
                <div className="p-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#1D68BD]/30 border border-[#38BDF8]/40 flex items-center justify-center shrink-0">
                    <ShieldCheck size={18} className="text-[#38BDF8]" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">100% IP Ownership</div>
                    <div className="text-[11px] text-slate-300">Direct Source Code Transfer</div>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#25D366]/20 border border-[#25D366]/40 flex items-center justify-center shrink-0">
                    <Zap size={18} className="text-[#25D366]" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">&lt; 0.8s LCP Speed</div>
                    <div className="text-[11px] text-slate-300">Guaranteed Core Web Vitals</div>
                  </div>
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
