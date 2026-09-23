import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | Bird Hills Tech Dubai",
  description: "Privacy policy and data governance practices of Bird Hills Tech (Dubai, UAE).",
  alternates: {
    canonical: "https://birdhillstech.com/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col min-h-screen pt-24">
      <section className="py-16 md:py-20 bg-[#FAF8F5] border-b border-slate-200/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-xs text-[#667085] mb-4">
            <Link href="/" className="hover:text-[#C59B27] transition-colors">
              Home
            </Link>
            <ChevronRight size={12} />
            <span className="text-[#070B14] font-semibold">Privacy Policy</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#070B14]">Privacy Policy</h1>
          <p className="text-xs text-slate-500 mt-2">
            Last Updated: January 2026 · Bird Hills Tech (Dubai, UAE)
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-slate max-w-none text-[#101828] space-y-8">
          <div>
            <h2 className="text-xl font-bold text-[#070B14] mb-3">1. Information We Collect</h2>
            <p className="text-sm sm:text-base text-[#667085] leading-relaxed">
              Bird Hills Tech (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) collects
              information that you provide directly to us when you fill out contact forms, book a
              strategic consultation, communicate via our website assistant, or correspond with us
              via telephone or WhatsApp (+971 52 440 5785). This information typically includes your
              name, email address, telephone number, company affiliation, and project requirements.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#070B14] mb-3">2. How We Use Your Information</h2>
            <p className="text-sm sm:text-base text-[#667085] leading-relaxed">
              We process your personal information solely for commercial communication, providing
              custom project proposals, fulfilling our contractual obligations, scheduling
              consultations, and maintaining our ongoing client partnerships. We do not sell, rent,
              or monetize your contact information with external data brokers.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#070B14] mb-3">3. Data Protection and Regional Compliance</h2>
            <p className="text-sm sm:text-base text-[#667085] leading-relaxed">
              We maintain technical, administrative, and physical security measures designed to
              protect personal data against unauthorized access, loss, or alteration. Our operations
              adhere to the United Arab Emirates Federal Decree-Law No. 45 of 2021 regarding Personal
              Data Protection (PDPL) as well as international best practices.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#070B14] mb-3">4. Cookies and Analytical Telemetry</h2>
            <p className="text-sm sm:text-base text-[#667085] leading-relaxed">
              Our website uses strictly necessary and anonymized analytical cookies to measure Core
              Web Vitals performance, user traffic paths, and session integrity. You may disable
              cookies in your browser settings without impacting core navigation.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#070B14] mb-3">5. Contact and Inquiries</h2>
            <p className="text-sm sm:text-base text-[#667085] leading-relaxed">
              If you have any questions regarding this Privacy Policy or wish to request data
              rectification or deletion, please contact our legal representative at:
              <br />
              <strong className="text-[#070B14]">Bird Hills Tech</strong>
              <br />
              Deira - Stone Building - 122 7th A Street - Al Baraha - Dubai, UAE
              <br />
              Email: contact@birdhillstech.com · Phone: +971 52 440 5785
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
