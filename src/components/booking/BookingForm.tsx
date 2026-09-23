"use client";

import React, { useState } from "react";
import { Calendar as CalendarIcon, Clock, CheckCircle2, AlertCircle, Loader2, Video, MapPin } from "lucide-react";

export function BookingForm() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "Web Development Consultation",
    date: "",
    timeSlot: "10:00 AM - 10:45 AM (GST)",
    meetingType: "Video Call (Google Meet)",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [feedbackMessage, setFeedbackMessage] = useState("");

  const timeSlots = [
    "10:00 AM - 10:45 AM (GST)",
    "11:30 AM - 12:15 PM (GST)",
    "02:00 PM - 02:45 PM (GST)",
    "03:30 PM - 04:15 PM (GST)",
    "05:00 PM - 05:45 PM (GST)",
  ];

  const serviceOptions = [
    "Web Development Consultation",
    "Web Application Architecture",
    "E-commerce Scalability Briefing",
    "Brand & UI/UX Audit",
    "Digital Growth & SEO Strategy",
    "Enterprise AI Integration Scoping",
    "General Strategic Partnership",
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setFeedbackMessage("");

    try {
      const res = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to submit booking request");
      }

      setStatus("success");
      setFeedbackMessage(
        data.message || "Your consultation request has been confirmed. A calendar invitation has been generated."
      );
      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        service: "Web Development Consultation",
        date: "",
        timeSlot: "10:00 AM - 10:45 AM (GST)",
        meetingType: "Video Call (Google Meet)",
        message: "",
      });
    } catch (err: any) {
      console.error(err);
      setStatus("error");
      setFeedbackMessage(err.message || "An error occurred while booking. Please try again.");
    }
  };

  // Default minimum date to today or tomorrow
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDateStr = tomorrow.toISOString().split("T")[0];

  return (
    <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#E4E7EC] shadow-xl">
      {status === "success" ? (
        <div className="py-12 text-center space-y-4 animate-in fade-in zoom-in-95">
          <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto">
            <CheckCircle2 size={36} />
          </div>
          <h3 className="text-2xl font-extrabold text-[#0B1730]">Meeting Requested</h3>
          <p className="text-sm sm:text-base text-[#667085] max-w-md mx-auto leading-relaxed">
            {feedbackMessage}
          </p>
          <div className="pt-4">
            <button
              type="button"
              onClick={() => setStatus("idle")}
              className="px-6 py-2.5 rounded-xl bg-[#0B1730] text-white text-xs font-semibold hover:bg-[#152342] transition-colors"
            >
              Book Another Meeting
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

          {/* Meeting Format Pill Selector */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-[#070B14] uppercase tracking-wider">
              Meeting Location / Format
            </label>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setFormData({ ...formData, meetingType: "Video Call (Google Meet)" })}
                className={`py-3 px-4 rounded-xl border text-xs font-bold flex items-center justify-center gap-2 transition-all ${
                  formData.meetingType.includes("Video")
                    ? "bg-[#C59B27]/15 border-[#C59B27] text-[#B38728] shadow-sm"
                    : "bg-[#F7F9FC] border-[#E4E7EC] text-[#667085] hover:border-slate-300"
                }`}
              >
                <Video size={16} />
                Video Call (Google Meet)
              </button>
              <button
                type="button"
                onClick={() => setFormData({ ...formData, meetingType: "In-Person (Dubai Office)" })}
                className={`py-3 px-4 rounded-xl border text-xs font-bold flex items-center justify-center gap-2 transition-all ${
                  formData.meetingType.includes("In-Person")
                    ? "bg-[#C59B27]/15 border-[#C59B27] text-[#B38728] shadow-sm"
                    : "bg-[#F7F9FC] border-[#E4E7EC] text-[#667085] hover:border-slate-300"
                }`}
              >
                <MapPin size={16} />
                In-Person (Deira Office)
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Preferred Date */}
            <div className="space-y-1.5">
              <label htmlFor="date" className="text-xs font-bold text-[#070B14] uppercase tracking-wider">
                Preferred Date <span className="text-rose-500">*</span>
              </label>
              <input
                id="date"
                type="date"
                required
                min={minDateStr}
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                className="w-full text-sm bg-[#F7F9FC] border border-[#E4E7EC] rounded-xl px-4 py-3 text-[#101828] focus:outline-none focus:border-[#C59B27] focus:ring-1 focus:ring-[#C59B27] focus:bg-white transition-colors"
              />
            </div>

            {/* Time Slot */}
            <div className="space-y-1.5">
              <label htmlFor="timeSlot" className="text-xs font-bold text-[#070B14] uppercase tracking-wider">
                Time Window (Gulf Standard Time) <span className="text-rose-500">*</span>
              </label>
              <select
                id="timeSlot"
                value={formData.timeSlot}
                onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                className="w-full text-sm bg-[#F7F9FC] border border-[#E4E7EC] rounded-xl px-4 py-3 text-[#101828] focus:outline-none focus:border-[#C59B27] focus:ring-1 focus:ring-[#C59B27] focus:bg-white transition-colors cursor-pointer"
              >
                {timeSlots.map((slot) => (
                  <option key={slot} value={slot}>
                    {slot}
                  </option>
                ))}
              </select>
            </div>

            {/* Name */}
            <div className="space-y-1.5">
              <label htmlFor="bname" className="text-xs font-bold text-[#070B14] uppercase tracking-wider">
                Full Name <span className="text-rose-500">*</span>
              </label>
              <input
                id="bname"
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g. Sultan Al-Ketbi"
                className="w-full text-sm bg-[#F7F9FC] border border-[#E4E7EC] rounded-xl px-4 py-3 text-[#101828] placeholder-slate-400 focus:outline-none focus:border-[#C59B27] focus:ring-1 focus:ring-[#C59B27] focus:bg-white transition-colors"
              />
            </div>

            {/* Company */}
            <div className="space-y-1.5">
              <label htmlFor="bcompany" className="text-xs font-bold text-[#070B14] uppercase tracking-wider">
                Company Name
              </label>
              <input
                id="bcompany"
                type="text"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                placeholder="e.g. Apex Holdings DXB"
                className="w-full text-sm bg-[#F7F9FC] border border-[#E4E7EC] rounded-xl px-4 py-3 text-[#101828] placeholder-slate-400 focus:outline-none focus:border-[#C59B27] focus:ring-1 focus:ring-[#C59B27] focus:bg-white transition-colors"
              />
            </div>

            {/* Email */}
            <div className="space-y-1.5">
              <label htmlFor="bemail" className="text-xs font-bold text-[#070B14] uppercase tracking-wider">
                Business Email <span className="text-rose-500">*</span>
              </label>
              <input
                id="bemail"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="director@company.com"
                className="w-full text-sm bg-[#F7F9FC] border border-[#E4E7EC] rounded-xl px-4 py-3 text-[#101828] placeholder-slate-400 focus:outline-none focus:border-[#C59B27] focus:ring-1 focus:ring-[#C59B27] focus:bg-white transition-colors"
              />
            </div>

            {/* Phone */}
            <div className="space-y-1.5">
              <label htmlFor="bphone" className="text-xs font-bold text-[#070B14] uppercase tracking-wider">
                WhatsApp / Mobile <span className="text-rose-500">*</span>
              </label>
              <input
                id="bphone"
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+971 52 000 0000"
                className="w-full text-sm bg-[#F7F9FC] border border-[#E4E7EC] rounded-xl px-4 py-3 text-[#101828] placeholder-slate-400 focus:outline-none focus:border-[#C59B27] focus:ring-1 focus:ring-[#C59B27] focus:bg-white transition-colors"
              />
            </div>
          </div>

          {/* Service */}
          <div className="space-y-1.5">
            <label htmlFor="bservice" className="text-xs font-bold text-[#070B14] uppercase tracking-wider">
              Discussion Topic / Service Focus
            </label>
            <select
              id="bservice"
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

          {/* Brief */}
          <div className="space-y-1.5">
            <label htmlFor="bmsg" className="text-xs font-bold text-[#070B14] uppercase tracking-wider">
              Topics to Cover or Project Context
            </label>
            <textarea
              id="bmsg"
              rows={3}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Provide any specific goals, questions, or existing systems you would like to discuss..."
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
                Scheduling Consultation...
              </>
            ) : (
              <>
                <CalendarIcon size={18} />
                Confirm Consultation Request
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
export default BookingForm;
