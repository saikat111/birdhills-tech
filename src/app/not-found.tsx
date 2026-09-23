import React from "react";
import Link from "next/link";
import { ArrowLeft, Home, Phone, Compass } from "lucide-react";
import Logo from "@/components/common/Logo";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#FAF8F5] flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 py-24 text-center">
      <div className="max-w-md w-full space-y-8 bg-white p-8 sm:p-10 rounded-3xl border border-slate-200/80 shadow-xl">
        <div className="flex justify-center">
          <Logo />
        </div>

        <div className="space-y-3">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold font-mono tracking-widest text-[#B38728] bg-[#C59B27]/10 border border-[#C59B27]/30">
            ERROR 404 · PAGE NOT FOUND
          </span>
          <h1 className="text-3xl font-extrabold text-[#070B14]">
            The requested page does not exist.
          </h1>
          <p className="text-sm text-[#667085] leading-relaxed">
            The page you are looking for may have been moved, renamed, or is temporarily
            unavailable. Please return to the homepage or explore our services.
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#C59B27] to-[#B38728] text-white text-xs font-bold hover:brightness-105 shadow-md shadow-[#C59B27]/25 transition-all"
          >
            <Home size={15} />
            Return to Homepage
          </Link>
          <Link
            href="/services"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white border border-[#E4E7EC] text-xs font-semibold text-[#070B14] hover:bg-[#FAF8F5] hover:border-[#C59B27]/40 transition-colors"
          >
            <Compass size={15} className="text-[#C59B27]" />
            Explore Services
          </Link>
        </div>

        <div className="pt-4 border-t border-slate-100 text-xs text-slate-400">
          Need immediate support? Contact our Dubai office at{" "}
          <a href="tel:+971524405785" className="text-[#C59B27] font-semibold hover:underline">
            +971 52 440 5785
          </a>
        </div>
      </div>
    </div>
  );
}
