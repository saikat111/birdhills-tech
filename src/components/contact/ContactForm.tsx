"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "Web Development",
    budget: "$5,000 - $10,000",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [feedbackMessage, setFeedbackMessage] = useState("");

  const serviceOptions = [
    "Web Development",
    "Web Application",
    "Domain & Hosting",
    "E-commerce",
    "Branding & Design",
    "Digital Marketing",
    "SEO",
    "AI Solutions",
    "Consultation",
    "Other",
  ];

  const budgetOptions = [
    "Under $5,000",
    "$5,000 - $10,000",
    "$10,000 - $25,000",
    "$25,000 - $50,000",
    "$50,000+",
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setFeedbackMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to submit inquiry");
      }

      setStatus("success");
      setFeedbackMessage(
        data.message || "Thank you! Your project brief has been received. Our team will contact you shortly."
      );
      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        service: "Web Development",
        budget: "$5,000 - $10,000",
        message: "",
      });
    } catch (err: any) {
      console.error(err);
      setStatus("error");
      setFeedbackMessage(err.message || "An error occurred while submitting your message. Please try again.");
    }
  };

  return (
    <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#E4E7EC] shadow-xl">
      {status === "success" ? (
        <div className="py-12 text-center space-y-4 animate-in fade-in zoom-in-95">
          <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto">
            <CheckCircle2 size={36} />
          </div>
          <h3 className="text-2xl font-extrabold text-[#0B1730]">Inquiry Received</h3>
          <p className="text-sm sm:text-base text-[#667085] max-w-md mx-auto leading-relaxed">
            {feedbackMessage}
          </p>
          <div className="pt-4">
            <button
              type="button"
              onClick={() => setStatus("idle")}
              className="px-6 py-2.5 rounded-xl bg-[#0B1730] text-white text-xs font-semibold hover:bg-[#152342] transition-colors"
            >
              Send Another Inquiry
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          {status === "error" && (
            <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-xs text-rose-700 flex items-start gap-2.5">
              <AlertCircle size={16} className="shrink-0 mt-0.5" />
              <span>{feedbackMessage}</span>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Name */}
            <div className="space-y-1.5">
              <label htmlFor="name" className="text-xs font-bold text-[#070B14] uppercase tracking-wider">
                Full Name <span className="text-rose-500">*</span>
              </label>
              <input
                id="name"
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g. Tariq Al-Mansoor"
                className="w-full text-sm bg-[#F7F9FC] border border-[#E4E7EC] rounded-xl px-4 py-3 text-[#101828] placeholder-slate-400 focus:outline-none focus:border-[#C59B27] focus:ring-1 focus:ring-[#C59B27] focus:bg-white transition-colors"
              />
            </div>

            {/* Company */}
            <div className="space-y-1.5">
              <label htmlFor="company" className="text-xs font-bold text-[#070B14] uppercase tracking-wider">
                Company Name
              </label>
              <input
                id="company"
                type="text"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                placeholder="e.g. Gulf Horizon Holdings"
                className="w-full text-sm bg-[#F7F9FC] border border-[#E4E7EC] rounded-xl px-4 py-3 text-[#101828] placeholder-slate-400 focus:outline-none focus:border-[#C59B27] focus:ring-1 focus:ring-[#C59B27] focus:bg-white transition-colors"
              />
            </div>

            {/* Email */}
            <div className="space-y-1.5">
              <label htmlFor="email" className="text-xs font-bold text-[#070B14] uppercase tracking-wider">
                Work Email <span className="text-rose-500">*</span>
              </label>
              <input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="name@company.ae"
                className="w-full text-sm bg-[#F7F9FC] border border-[#E4E7EC] rounded-xl px-4 py-3 text-[#101828] placeholder-slate-400 focus:outline-none focus:border-[#C59B27] focus:ring-1 focus:ring-[#C59B27] focus:bg-white transition-colors"
              />
            </div>

            {/* Phone / WhatsApp */}
            <div className="space-y-1.5">
              <label htmlFor="phone" className="text-xs font-bold text-[#070B14] uppercase tracking-wider">
                Phone / WhatsApp <span className="text-rose-500">*</span>
              </label>
              <input
                id="phone"
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+971 50 000 0000"
                className="w-full text-sm bg-[#F7F9FC] border border-[#E4E7EC] rounded-xl px-4 py-3 text-[#101828] placeholder-slate-400 focus:outline-none focus:border-[#C59B27] focus:ring-1 focus:ring-[#C59B27] focus:bg-white transition-colors"
              />
            </div>

            {/* Service Interest */}
            <div className="space-y-1.5">
              <label htmlFor="service" className="text-xs font-bold text-[#070B14] uppercase tracking-wider">
                Service Required <span className="text-rose-500">*</span>
              </label>
              <select
                id="service"
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                className="w-full text-sm bg-[#F7F9FC] border border-[#E4E7EC] rounded-xl px-4 py-3 text-[#101828] focus:outline-none focus:border-[#C59B27] focus:ring-1 focus:ring-[#C59B27] focus:bg-white transition-colors cursor-pointer"
              >
                {serviceOptions.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>

            {/* Estimated Budget */}
            <div className="space-y-1.5">
              <label htmlFor="budget" className="text-xs font-bold text-[#070B14] uppercase tracking-wider">
                Estimated Project Budget
              </label>
              <select
                id="budget"
                value={formData.budget}
                onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                className="w-full text-sm bg-[#F7F9FC] border border-[#E4E7EC] rounded-xl px-4 py-3 text-[#101828] focus:outline-none focus:border-[#C59B27] focus:ring-1 focus:ring-[#C59B27] focus:bg-white transition-colors cursor-pointer"
              >
                {budgetOptions.map((b) => (
                  <option key={b} value={b}>
                    {b}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Project Details */}
          <div className="space-y-1.5">
            <label htmlFor="message" className="text-xs font-bold text-[#070B14] uppercase tracking-wider">
              Project Overview & Objectives <span className="text-rose-500">*</span>
            </label>
            <textarea
              id="message"
              required
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Tell us about your timeline, current technical landscape, or commercial goals..."
              className="w-full text-sm bg-[#F7F9FC] border border-[#E4E7EC] rounded-xl px-4 py-3 text-[#101828] placeholder-slate-400 focus:outline-none focus:border-[#C59B27] focus:ring-1 focus:ring-[#C59B27] focus:bg-white transition-colors resize-y"
            />
          </div>

          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full py-4 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#C59B27] to-[#B38728] hover:brightness-105 text-white text-base font-bold shadow-md shadow-[#C59B27]/25 transition-all flex items-center justify-center gap-2 disabled:opacity-60"
          >
            {status === "loading" ? (
              <>
                <Loader2 size={18} className="animate-spin" />
                Processing Submission...
              </>
            ) : (
              <>
                Send Project Brief
                <Send size={16} />
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
export default ContactForm;
