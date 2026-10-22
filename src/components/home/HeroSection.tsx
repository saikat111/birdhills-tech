"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Calendar,
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
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2400&q=95",
    alt: "Futuristic corporate skyscraper architectural district and global tech headquarters",
    tag: "GLOBAL HEADQUARTERS · WORLDWIDE",
    location: "Enterprise Web Engineering & Global Digital Operations",
    highlight: "Custom Digital Platforms · Bespoke UI/UX Design · Full Project Delivery",
  },
  {
    image: "/ima/web8.jpg",
    alt: "High-performance enterprise software and web development IDE workspace with code analytics",
    tag: "FEATURED SERVICE · 01",
    location: "Next.js Web Applications & Custom Portals",
    highlight: "Enterprise Architecture · High-Converting UI/UX · Scalable Cloud Tech Stack",
  },
  {
    image:
      "https://plus.unsplash.com/premium_photo-1685086785054-d047cdc0e525?auto=format&fit=crop&w=2400&q=95",
    alt: "Illuminated high-speed cloud datacenter with glowing server racks and fiber optic connectivity",
    tag: "FEATURED SERVICE · 02",
    location: "Domain & NVMe Cloud Hosting",
    highlight: "Global Domain Registry · Pure NVMe SSD Edge Nodes · 99.99% Uptime SLA",
  },
  {
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=2400&q=95",
    alt: "Executive commercial digital analytics and multi-channel revenue growth dashboard",
    tag: "FEATURED SERVICE · 03",
    location: "Digital Marketing & Performance Ads",
    highlight: "High-Intent Google Ads · LinkedIn B2B Targeting · Closed-Loop Revenue Attribution",
  },
  {
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=2400&q=95",
    alt: "Autonomous artificial intelligence agents and smart conversational business workflow automation",
    tag: "FEATURED SERVICE · 04",
    location: "AI Automation & WhatsApp Bots",
    highlight: "Autonomous 24/7 AI Agents · Conversational WhatsApp Bots · Automated Workflow Pipelines",
  },
  {
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=2400&q=95",
    alt: "Collaborative software engineering team working together on enterprise digital platforms in modern tech studio",
    tag: "GLOBAL TECHNICAL SQUAD",
    location: "Full-Stack Software Engineers & Solution Architects",
    highlight: "Senior Technical Leadership · Type-Safe Engineering · Direct Global Delivery",
  },
];

export function HeroSection({
  eyebrow = "TECHNOLOGY × CREATIVE × GROWTH",
  headline = "Your Global Digital Growth Partner",
  subcopy = "We combine high-performance web development, prestigious creative design, and commercial digital marketing to build powerful digital operations and measurable business growth worldwide.",
}: HeroProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-advance timer (4.5 seconds) - plays by default continuously
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 4500);
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
    <section className="relative min-h-[90vh] lg:min-h-[96vh] pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden flex items-center bg-[#070B14] text-white">
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
                quality={95}
                sizes="100vw"
                className="object-cover object-center"
                style={{
                  transform: isActive ? "scale(1.02)" : "scale(1.08)",
                  transition: "transform 7s ease-out, opacity 1s ease-in-out",
                }}
              />
            </div>
          );
        })}

        {/* Balanced Dynamic Overlays: Crystal Clear, Vibrant Background with High Contrast for Text */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#070B14]/85 via-[#070B14]/55 to-[#070B14]/20 lg:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#070B14]/65 via-transparent to-[#070B14]/90" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(212,175,55,0.12),transparent_50%)] pointer-events-none" />
      </div>

      {/* 2. MAIN HERO CONTENT CONTAINER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Core Value Proposition */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-left">
            {/* Badges & Live Status */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase bg-[#C59B27]/20 text-[#D4AF37] border border-[#C59B27]/40 backdrop-blur-md shadow-sm">
                <Sparkles size={13} className="text-[#D4AF37]" />
                {eyebrow}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold text-slate-200 bg-white/10 border border-white/15 backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
                Featured Practice Disciplines · Technology × Creative × Growth
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12] drop-shadow-md">
              {headline.includes("Global") ? (
                <>
                  {headline.split("Global")[0]}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F3E7C4] via-[#D4AF37] to-[#C59B27] relative inline-block drop-shadow-sm">
                    Global
                  </span>
                  {headline.split("Global")[1] || ""}
                </>
              ) : (
                headline
              )}
            </h1>

            {/* Supporting Copy */}
            <p className="text-lg sm:text-xl text-slate-100 leading-relaxed max-w-2xl font-normal drop-shadow-md">
              {subcopy}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#C59B27] to-[#B38728] text-white text-base font-bold shadow-lg shadow-[#C59B27]/30 hover:brightness-105 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 group"
              >
                <span>Start a Project</span>
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
              <Link
                href="/book-a-meeting"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-white/15 hover:bg-white/25 text-white text-base font-semibold border border-white/25 backdrop-blur-md transition-all duration-200 shadow-sm"
              >
                <Calendar size={18} className="text-[#D4AF37]" />
                <span>Book a Meeting</span>
              </Link>
              <a
                href="https://wa.me/971524405785?text=Hello%20Bird%20Hills%20Tech%2C%20I%20would%20like%20to%20discuss%20a%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-4 rounded-xl text-sm font-bold text-[#25D366] hover:bg-[#25D366]/10 border border-[#25D366]/30 backdrop-blur-md transition-colors"
              >
                <MessageCircle size={17} />
                <span>WhatsApp Us</span>
              </a>
            </div>

            {/* 3 Core Value Pillars */}
            <div className="pt-6 border-t border-white/15 grid grid-cols-3 gap-4 text-left">
              <div>
                <div className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
                  <Zap size={13} className="text-[#D4AF37]" />
                  Technology
                </div>
                <div className="text-xs text-slate-300 mt-0.5">High-Performance Platforms</div>
              </div>
              <div>
                <div className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
                  <Layers size={13} className="text-[#D4AF37]" />
                  Creative
                </div>
                <div className="text-xs text-slate-300 mt-0.5">Prestige Corporate UI/UX</div>
              </div>
              <div>
                <div className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
                  <Sparkles size={13} className="text-[#D4AF37]" />
                  Growth
                </div>
                <div className="text-xs text-slate-300 mt-0.5">Measurable Global Revenue ROI</div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Slide Showcase Card & Stats */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none space-y-4">
              {/* Glassmorphic Slide Controller Card */}
              <div className="rounded-2xl p-6 bg-[#070B14]/80 backdrop-blur-xl border border-[#C59B27]/30 shadow-2xl relative overflow-hidden group">
                <div className="flex items-center justify-between gap-3 mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider text-[#D4AF37] bg-[#C59B27]/15 border border-[#C59B27]/30">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-ping" />
                    {activeSlideData.tag}
                  </span>
                  <div className="text-xs font-mono text-slate-300">
                    {currentSlide + 1} / {HERO_SLIDES.length}
                  </div>
                </div>

                {/* Visual Slide Preview Thumbnail */}
                <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden mb-4 border border-white/10 group-hover:border-[#D4AF37]/40 transition-colors shadow-inner">
                  <Image
                    src={activeSlideData.image}
                    alt={activeSlideData.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 420px"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070B14]/75 via-transparent to-transparent" />
                  <div className="absolute bottom-2 left-3 right-3 text-[11px] text-white/95 font-medium truncate drop-shadow">
                    {activeSlideData.location}
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
                            ? "w-8 bg-[#D4AF37]"
                            : "w-2 bg-white/30 hover:bg-white/60"
                        }`}
                        aria-label={`Slide ${i + 1}`}
                      />
                    ))}
                  </div>

                  {/* Play/Pause & Arrow Navigation */}
                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => setIsPaused(!isPaused)}
                      className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                      aria-label={isPaused ? "Play auto-slideshow" : "Pause auto-slideshow"}
                      title={isPaused ? "Play slideshow" : "Pause slideshow"}
                    >
                      {isPaused ? <Play size={14} /> : <Pause size={14} />}
                    </button>
                    <button
                      onClick={handlePrev}
                      className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                      aria-label="Previous slide"
                    >
                      <ChevronLeft size={16} />
                    </button>
                    <button
                      onClick={handleNext}
                      className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                      aria-label="Next slide"
                    >
                      <ChevronRight size={16} />
                    </button>
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
