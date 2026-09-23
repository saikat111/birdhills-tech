import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service | Bird Hills Tech Dubai",
  description: "Terms and conditions governing engagements and use of Bird Hills Tech services in Dubai, UAE.",
  alternates: {
    canonical: "https://birdhillstech.com/terms",
  },
};

export default function TermsPage() {
  return (
    <div className="flex flex-col min-h-screen pt-24">
      <section className="py-16 md:py-20 bg-[#FAF8F5] border-b border-slate-200/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-xs text-[#667085] mb-4">
            <Link href="/" className="hover:text-[#C59B27] transition-colors">
              Home
            </Link>
            <ChevronRight size={12} />
            <span className="text-[#070B14] font-semibold">Terms of Service</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#070B14]">Terms of Service</h1>
          <p className="text-xs text-slate-500 mt-2">
            Last Updated: January 2026 · Bird Hills Tech (Dubai, UAE)
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-slate max-w-none text-[#101828] space-y-8">
          <div>
            <h2 className="text-xl font-bold text-[#070B14] mb-3">1. Agreement to Terms</h2>
            <p className="text-sm sm:text-base text-[#667085] leading-relaxed">
              By accessing the website birdhillstech.com or commissioning services from Bird Hills
              Tech (&ldquo;Company&rdquo;), you agree to be bound by these Terms of Service and all
              applicable laws of the Emirate of Dubai and the United Arab Emirates.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#070B14] mb-3">2. Professional Services and Scoping</h2>
            <p className="text-sm sm:text-base text-[#667085] leading-relaxed">
              All client engagements—including web development, web application engineering,
              e-commerce solutions, corporate branding, digital marketing, and AI integrations—are
              governed by formal Statements of Work (SOW) executed between the client and Bird Hills
              Tech. Project deliverables, milestones, payment schedules, and acceptance criteria
              are defined within the applicable SOW.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#070B14] mb-3">3. Intellectual Property Rights</h2>
            <p className="text-sm sm:text-base text-[#667085] leading-relaxed">
              Upon receipt of final project payment in full, the client retains full ownership of the
              custom code, graphic assets, and brand collateral produced specifically for their
              engagement. Bird Hills Tech reserves the right to showcase completed non-confidential
              work in our corporate portfolio and case studies unless otherwise restricted under an
              executed Non-Disclosure Agreement (NDA).
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#070B14] mb-3">4. Governing Law and Jurisdiction</h2>
            <p className="text-sm sm:text-base text-[#667085] leading-relaxed">
              These Terms and any contractual disputes arising hereunder shall be governed by and
              construed in accordance with the laws of the Emirate of Dubai and the federal laws of
              the United Arab Emirates. Any dispute shall be subject to the exclusive jurisdiction of
              the competent courts of Dubai.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
