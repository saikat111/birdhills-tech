"use client";

import React, { useEffect, useState, useRef, Suspense } from "react";
import { usePathname, useSearchParams } from "next/navigation";

function NavigationProgressBar() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);
  const progressTimerRef = useRef<NodeJS.Timeout | null>(null);
  const cleanupTimerRef = useRef<NodeJS.Timeout | null>(null);

  const startProgress = () => {
    if (cleanupTimerRef.current) clearTimeout(cleanupTimerRef.current);
    if (progressTimerRef.current) clearInterval(progressTimerRef.current);

    setVisible(true);
    setIsLoading(true);
    setProgress(20);

    progressTimerRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 88) {
          if (progressTimerRef.current) clearInterval(progressTimerRef.current);
          return 88;
        }
        const step = Math.max(1, (90 - prev) * 0.15);
        return Math.min(88, prev + step);
      });
    }, 120);
  };

  const completeProgress = () => {
    if (progressTimerRef.current) clearInterval(progressTimerRef.current);

    setProgress(100);
    setIsLoading(false);

    cleanupTimerRef.current = setTimeout(() => {
      setVisible(false);
      setProgress(0);
    }, 300);
  };

  // Trigger completion whenever route or search parameters change
  useEffect(() => {
    if (visible) {
      completeProgress();
    }
  }, [pathname, searchParams]);

  // Intercept click events on internal links
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest("a");
      if (!target) return;

      const href = target.getAttribute("href");
      if (!href) return;

      // Ignore external, anchors, modifier clicks, downloads, or target="_blank"
      if (
        href.startsWith("http://") ||
        href.startsWith("https://") ||
        href.startsWith("mailto:") ||
        href.startsWith("tel:") ||
        href.startsWith("wa.me") ||
        href.startsWith("#") ||
        target.target === "_blank" ||
        target.hasAttribute("download") ||
        e.ctrlKey ||
        e.metaKey ||
        e.shiftKey ||
        e.altKey
      ) {
        return;
      }

      // Ignore if navigating to current exact pathname + search
      const currentFull = window.location.pathname + window.location.search;
      if (href === currentFull || href === window.location.pathname) {
        return;
      }

      startProgress();
    };

    document.addEventListener("click", handleClick, { capture: true });
    return () => {
      document.removeEventListener("click", handleClick, { capture: true });
      if (progressTimerRef.current) clearInterval(progressTimerRef.current);
      if (cleanupTimerRef.current) clearTimeout(cleanupTimerRef.current);
    };
  }, []);

  if (!visible) return null;

  return (
    <>
      {/* Top progress bar */}
      <div
        className="fixed top-0 left-0 right-0 z-[99999] h-[3px] pointer-events-none transition-all duration-200 ease-out"
        style={{
          width: `${progress}%`,
          background:
            "linear-gradient(90deg, #B38728 0%, #D4AF37 40%, #FFF2B2 70%, #D4AF37 100%)",
          boxShadow:
            "0 0 14px rgba(212, 175, 55, 0.9), 0 0 6px rgba(212, 175, 55, 0.7)",
          opacity: visible ? 1 : 0,
        }}
      />

      {/* Floating subtle pulse badge when loading */}
      {isLoading && (
        <div className="fixed top-3 right-4 z-[99999] pointer-events-none flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#070B14]/90 backdrop-blur-md border border-[#D4AF37]/40 shadow-xl text-white animate-in fade-in duration-150">
          <div className="w-2.5 h-2.5 rounded-full border-2 border-[#D4AF37] border-t-transparent animate-spin" />
          <span className="text-[10px] font-bold tracking-widest uppercase text-[#D4AF37]">
            Loading...
          </span>
        </div>
      )}
    </>
  );
}

export function NavigationProgress() {
  return (
    <Suspense fallback={null}>
      <NavigationProgressBar />
    </Suspense>
  );
}

export default NavigationProgress;
