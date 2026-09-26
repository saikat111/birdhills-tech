"use client";

import React, { useState } from "react";
import {
  Settings,
  Building2,
  Phone,
  Mail,
  MapPin,
  Globe,
  MessageSquare,
  Bot,
  Save,
  CheckCircle2,
  AlertCircle,
  Clock,
  ShieldCheck,
  Search,
  Eye,
} from "lucide-react";

interface SettingItem {
  id: string;
  key: string;
  value: string;
  description?: string | null;
}

interface SettingsClientProps {
  initialSettings: SettingItem[];
}

export function SettingsClient({ initialSettings }: SettingsClientProps) {
  // Convert settings array to key-value map
  const settingsMap: Record<string, string> = {};
  initialSettings.forEach((s) => {
    settingsMap[s.key] = s.value;
  });

  const [form, setForm] = useState({
    // SEO & Site Meta (Directly controls site title, meta description, and crawler indexing)
    site_title:
      settingsMap["site_title"] ||
      "Bird Hills Tech | Digital Marketing & Web Development Agency",
    site_description:
      settingsMap["site_description"] ||
      "Bird Hills Tech delivers Digital Marketing, AI Business Automation, Web Development, Domain & Hosting Services for smarter, scalable business growth.",
    site_keywords:
      settingsMap["site_keywords"] ||
      "Web Development Company in Dubai, Digital Marketing Agency in Dubai, AI Business Automation Dubai, Domain and Hosting Services, Local SEO Dubai, Bird Hills Tech",
    google_indexing:
      settingsMap["google_indexing"] || "disabled",

    // Company Profile
    company_name: settingsMap["company_name"] || "Bird Hills Tech",
    tagline: settingsMap["tagline"] || "Technology × Creative × Growth",
    address:
      settingsMap["address"] ||
      "Deira - Stone Building - 122 7th A Street - Al Baraha - Dubai, UAE",
    phone: settingsMap["phone"] || "+971 52 440 5785",
    whatsapp: settingsMap["whatsapp"] || "+971 52 440 5785",
    email: settingsMap["email"] || "contact@birdhillstech.com",
    website: settingsMap["website"] || "https://birdhillstech.com",
    working_hours:
      settingsMap["working_hours"] || "Monday – Saturday: 9:00 AM – 6:00 PM (GST)",

    // Social Links
    linkedin_url:
      settingsMap["linkedin_url"] || "https://linkedin.com/company/birdhillstech",
    twitter_url: settingsMap["twitter_url"] || "https://twitter.com/birdhillstech",
    instagram_url:
      settingsMap["instagram_url"] || "https://instagram.com/birdhillstech",
    github_url: settingsMap["github_url"] || "https://github.com/birdhillstech",

    // AI & Chatbot
    ai_bot_name: settingsMap["ai_bot_name"] || "Bird Hills Assistant",
    ai_welcome_message:
      settingsMap["ai_welcome_message"] ||
      "Hello! Welcome to Bird Hills Tech. How can we assist your technology or growth objectives in Dubai today?",
    ai_qualification_notes:
      settingsMap["ai_qualification_notes"] ||
      "Prioritize inquiring about commercial budget, timeline, and whether client has existing operations in Dubai / GCC.",

    // Notifications
    lead_notification_email:
      settingsMap["lead_notification_email"] || "birdhillstech@gmail.com",
  });

  const [activeTab, setActiveTab] = useState<"seo" | "general" | "social" | "ai" | "notifications">("seo");
  const [isSaving, setIsSaving] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleChange = (key: string, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    setSuccessMessage(null);
    setErrorMessage(null);

    try {
      const res = await fetch("/api/admin/settings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ settings: form }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to update settings");

      setSuccessMessage("Site settings and configurations saved successfully!");
      setTimeout(() => setSuccessMessage(null), 4000);
    } catch (err: any) {
      setErrorMessage(err.message || "An error occurred while saving settings.");
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#E4E7EC]">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#070B14]">
            System & Site Settings
          </h1>
          <p className="text-xs sm:text-sm text-[#667085] mt-1">
            Configure global Dubai business coordinates, live contact lines, AI agent behaviors, and social profiles.
          </p>
        </div>
      </div>

      {successMessage && (
        <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl flex items-center gap-2.5 text-xs text-emerald-800">
          <CheckCircle2 size={18} className="text-emerald-600 shrink-0" />
          <span>{successMessage}</span>
        </div>
      )}

      {errorMessage && (
        <div className="p-4 bg-rose-50 border border-rose-200 rounded-2xl flex items-center gap-2.5 text-xs text-rose-800">
          <AlertCircle size={18} className="text-rose-600 shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      {/* Tabs */}
      <div className="flex border-b border-[#E4E7EC] gap-2 overflow-x-auto">
        <button
          type="button"
          onClick={() => setActiveTab("seo")}
          className={`px-4 py-2.5 text-xs font-bold border-b-2 transition-colors whitespace-nowrap flex items-center gap-2 ${
            activeTab === "seo"
              ? "border-[#C59B27] text-[#C59B27]"
              : "border-transparent text-slate-500 hover:text-slate-800"
          }`}
        >
          <Search size={15} />
          Site Title, Meta &amp; SEO
        </button>

        <button
          type="button"
          onClick={() => setActiveTab("general")}
          className={`px-4 py-2.5 text-xs font-bold border-b-2 transition-colors whitespace-nowrap flex items-center gap-2 ${
            activeTab === "general"
              ? "border-[#C59B27] text-[#C59B27]"
              : "border-transparent text-slate-500 hover:text-slate-800"
          }`}
        >
          <Building2 size={15} />
          Corporate &amp; Contact
        </button>

        <button
          type="button"
          onClick={() => setActiveTab("social")}
          className={`px-4 py-2.5 text-xs font-bold border-b-2 transition-colors whitespace-nowrap flex items-center gap-2 ${
            activeTab === "social"
              ? "border-[#C59B27] text-[#C59B27]"
              : "border-transparent text-slate-500 hover:text-slate-800"
          }`}
        >
          <Globe size={15} />
          Social &amp; Web Channels
        </button>

        <button
          type="button"
          onClick={() => setActiveTab("ai")}
          className={`px-4 py-2.5 text-xs font-bold border-b-2 transition-colors whitespace-nowrap flex items-center gap-2 ${
            activeTab === "ai"
              ? "border-[#C59B27] text-[#C59B27]"
              : "border-transparent text-slate-500 hover:text-slate-800"
          }`}
        >
          <Bot size={15} />
          AI Chatbot Configuration
        </button>

        <button
          type="button"
          onClick={() => setActiveTab("notifications")}
          className={`px-4 py-2.5 text-xs font-bold border-b-2 transition-colors whitespace-nowrap flex items-center gap-2 ${
            activeTab === "notifications"
              ? "border-[#C59B27] text-[#C59B27]"
              : "border-transparent text-slate-500 hover:text-slate-800"
          }`}
        >
          <Mail size={15} />
          Alerts &amp; Routing
        </button>
      </div>

      <form onSubmit={handleSave} className="bg-white p-6 sm:p-8 rounded-2xl border border-[#E4E7EC] shadow-2xs space-y-6">
        {/* Tab 0: SEO & Meta (Site Title, Description, Indexing) */}
        {activeTab === "seo" && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-100">
              <div>
                <h3 className="text-sm font-bold text-[#070B14] uppercase tracking-wider">
                  Site Title &amp; Global Meta Description
                </h3>
                <p className="text-xs text-[#667085] mt-0.5">
                  Control what appears in browser tabs, Google search engine results, and social media share previews across the entire website.
                </p>
              </div>
              <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-amber-50 text-[#C59B27] border border-[#C59B27]/30 self-start sm:self-auto">
                Live Dynamic Sync
              </span>
            </div>

            {/* Site Title */}
            <div>
              <div className="flex items-center justify-between mb-1">
                <label className="block text-xs font-bold text-slate-700">
                  Global Site Title (Browser Tab &amp; Primary Google Search Title)
                </label>
                <span className={`text-[11px] font-mono ${form.site_title.length > 65 ? "text-amber-600 font-bold" : "text-slate-400"}`}>
                  {form.site_title.length} characters (recommended: 50–65)
                </span>
              </div>
              <input
                type="text"
                value={form.site_title}
                onChange={(e) => handleChange("site_title", e.target.value)}
                placeholder="Bird Hills Tech | Digital Marketing & Web Development Agency"
                className="w-full px-3.5 py-2.5 border border-[#E4E7EC] rounded-xl text-xs sm:text-sm text-[#070B14] focus:border-[#C59B27] focus:outline-none font-medium"
              />
              <p className="text-[11px] text-slate-400 mt-1">
                Appears in browser tabs and as the main blue headline on Google search engine results.
              </p>
            </div>

            {/* Site Description */}
            <div>
              <div className="flex items-center justify-between mb-1">
                <label className="block text-xs font-bold text-slate-700">
                  Global Meta Description (Search Snippet &amp; Social Share Previews)
                </label>
                <span className={`text-[11px] font-mono ${form.site_description.length > 165 ? "text-amber-600 font-bold" : "text-slate-400"}`}>
                  {form.site_description.length} characters (recommended: 120–160)
                </span>
              </div>
              <textarea
                rows={3}
                value={form.site_description}
                onChange={(e) => handleChange("site_description", e.target.value)}
                placeholder="Bird Hills Tech delivers Digital Marketing, AI Business Automation, Web Development, Domain & Hosting Services for smarter, scalable business growth."
                className="w-full px-3.5 py-2.5 border border-[#E4E7EC] rounded-xl text-xs sm:text-sm text-[#070B14] focus:border-[#C59B27] focus:outline-none leading-relaxed"
              />
              <p className="text-[11px] text-slate-400 mt-1">
                A concise description displayed below your title on Google search results and when links are shared on WhatsApp, LinkedIn, or Facebook.
              </p>
            </div>

            {/* Keywords */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Meta Keywords (Comma-separated)
              </label>
              <input
                type="text"
                value={form.site_keywords}
                onChange={(e) => handleChange("site_keywords", e.target.value)}
                placeholder="Web Development Company in Dubai, Digital Marketing Agency in Dubai, ..."
                className="w-full px-3 py-2 border border-[#E4E7EC] rounded-xl text-xs text-[#070B14] focus:border-[#C59B27] focus:outline-none"
              />
            </div>

            {/* Google Crawling / Indexing Control */}
            <div className="p-4 rounded-xl border border-slate-200 bg-[#FAF8F5] space-y-2">
              <label className="block text-xs font-bold text-[#070B14]">
                Search Engine Indexing &amp; Crawling Status
              </label>
              <p className="text-[11px] text-[#667085]">
                Control whether search engine spiders (GoogleBot, BingBot) are permitted to index and rank your pages.
              </p>
              <div className="flex flex-wrap gap-3 pt-1">
                <label className="inline-flex items-center gap-2 cursor-pointer bg-white px-3.5 py-2 rounded-xl border border-slate-200 text-xs font-semibold hover:border-[#C59B27]/40 transition-colors">
                  <input
                    type="radio"
                    name="google_indexing"
                    value="disabled"
                    checked={form.google_indexing === "disabled"}
                    onChange={(e) => handleChange("google_indexing", e.target.value)}
                    className="accent-[#C59B27]"
                  />
                  <span className="text-rose-600 font-bold">● Blocked (noindex, nofollow, disallow: /)</span>
                </label>
                <label className="inline-flex items-center gap-2 cursor-pointer bg-white px-3.5 py-2 rounded-xl border border-slate-200 text-xs font-semibold hover:border-[#C59B27]/40 transition-colors">
                  <input
                    type="radio"
                    name="google_indexing"
                    value="enabled"
                    checked={form.google_indexing === "enabled"}
                    onChange={(e) => handleChange("google_indexing", e.target.value)}
                    className="accent-[#C59B27]"
                  />
                  <span className="text-emerald-600 font-bold">● Allowed (Index &amp; Crawl live on Google)</span>
                </label>
              </div>
            </div>

            {/* Live Google Search Preview Card */}
            <div className="border border-slate-200 rounded-2xl p-5 bg-white space-y-2.5">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-wider">
                <Eye size={14} className="text-[#C59B27]" />
                <span>Live Google Search Snippet Preview</span>
              </div>
              <div className="p-4 rounded-xl bg-[#F8FAFC] border border-slate-100 max-w-2xl space-y-1 font-sans shadow-2xs">
                <div className="flex items-center gap-2 text-xs text-slate-600">
                  <div className="w-4 h-4 rounded-full bg-slate-200 flex items-center justify-center text-[10px]">🌐</div>
                  <span className="text-[12px] text-slate-700 font-normal">https://birdhillstech.com</span>
                </div>
                <div className="text-base sm:text-lg font-semibold text-[#1a0dab] hover:underline cursor-pointer truncate">
                  {form.site_title || "Bird Hills Tech | Digital Marketing & Web Development Agency"}
                </div>
                <div className="text-xs sm:text-sm text-[#4d5156] line-clamp-2 leading-relaxed">
                  {form.site_description || "Bird Hills Tech delivers Digital Marketing, AI Business Automation, Web Development, Domain & Hosting Services for smarter, scalable business growth."}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 1: General */}
        {activeTab === "general" && (
          <div className="space-y-6">
            <h3 className="text-sm font-bold text-[#070B14] uppercase tracking-wider">
              Dubai Headquarters & Identity
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Company Official Name
                </label>
                <input
                  type="text"
                  value={form.company_name}
                  onChange={(e) => handleChange("company_name", e.target.value)}
                  className="w-full px-3 py-2 border border-[#E4E7EC] rounded-xl text-xs text-[#070B14] focus:border-[#C59B27] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Brand Tagline
                </label>
                <input
                  type="text"
                  value={form.tagline}
                  onChange={(e) => handleChange("tagline", e.target.value)}
                  className="w-full px-3 py-2 border border-[#E4E7EC] rounded-xl text-xs text-[#070B14] focus:border-[#C59B27] focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Corporate Address (Dubai, UAE)
              </label>
              <input
                type="text"
                value={form.address}
                onChange={(e) => handleChange("address", e.target.value)}
                className="w-full px-3 py-2 border border-[#E4E7EC] rounded-xl text-xs text-[#070B14] focus:border-[#C59B27] focus:outline-none"
              />
              <p className="text-[11px] text-slate-400 mt-1">
                Standard: Deira - Stone Building - 122 7th A Street - Al Baraha - Dubai, UAE
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Corporate Phone Hotline
                </label>
                <input
                  type="text"
                  value={form.phone}
                  onChange={(e) => handleChange("phone", e.target.value)}
                  className="w-full px-3 py-2 border border-[#E4E7EC] rounded-xl text-xs text-[#070B14] focus:border-[#C59B27] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  WhatsApp Direct Line
                </label>
                <input
                  type="text"
                  value={form.whatsapp}
                  onChange={(e) => handleChange("whatsapp", e.target.value)}
                  className="w-full px-3 py-2 border border-[#E4E7EC] rounded-xl text-xs text-[#070B14] focus:border-[#C59B27] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Public Inquiries Email
                </label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  className="w-full px-3 py-2 border border-[#E4E7EC] rounded-xl text-xs text-[#070B14] focus:border-[#C59B27] focus:outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Production Domain
                </label>
                <input
                  type="url"
                  value={form.website}
                  onChange={(e) => handleChange("website", e.target.value)}
                  className="w-full px-3 py-2 border border-[#E4E7EC] rounded-xl text-xs text-[#070B14] focus:border-[#C59B27] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Dubai Working Hours
                </label>
                <input
                  type="text"
                  value={form.working_hours}
                  onChange={(e) => handleChange("working_hours", e.target.value)}
                  className="w-full px-3 py-2 border border-[#E4E7EC] rounded-xl text-xs text-[#070B14] focus:border-[#C59B27] focus:outline-none"
                />
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Social */}
        {activeTab === "social" && (
          <div className="space-y-6">
            <h3 className="text-sm font-bold text-[#070B14] uppercase tracking-wider">
              Social Profiles & Regional Channels
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  LinkedIn Corporate Page
                </label>
                <input
                  type="url"
                  value={form.linkedin_url}
                  onChange={(e) => handleChange("linkedin_url", e.target.value)}
                  placeholder="https://linkedin.com/company/..."
                  className="w-full px-3 py-2 border border-[#E4E7EC] rounded-xl text-xs text-[#070B14] focus:border-[#C59B27] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  X / Twitter Handle
                </label>
                <input
                  type="url"
                  value={form.twitter_url}
                  onChange={(e) => handleChange("twitter_url", e.target.value)}
                  placeholder="https://twitter.com/..."
                  className="w-full px-3 py-2 border border-[#E4E7EC] rounded-xl text-xs text-[#070B14] focus:border-[#C59B27] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Instagram Brand Profile
                </label>
                <input
                  type="url"
                  value={form.instagram_url}
                  onChange={(e) => handleChange("instagram_url", e.target.value)}
                  placeholder="https://instagram.com/..."
                  className="w-full px-3 py-2 border border-[#E4E7EC] rounded-xl text-xs text-[#070B14] focus:border-[#C59B27] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  GitHub Organization / Code Hub
                </label>
                <input
                  type="url"
                  value={form.github_url}
                  onChange={(e) => handleChange("github_url", e.target.value)}
                  placeholder="https://github.com/..."
                  className="w-full px-3 py-2 border border-[#E4E7EC] rounded-xl text-xs text-[#070B14] focus:border-[#C59B27] focus:outline-none"
                />
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: AI Assistant */}
        {activeTab === "ai" && (
          <div className="space-y-6">
            <h3 className="text-sm font-bold text-[#070B14] uppercase tracking-wider">
              Autonomous AI Chatbot Directives
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Assistant Display Name
                </label>
                <input
                  type="text"
                  value={form.ai_bot_name}
                  onChange={(e) => handleChange("ai_bot_name", e.target.value)}
                  className="w-full px-3 py-2 border border-[#E4E7EC] rounded-xl text-xs text-[#070B14] focus:border-[#C59B27] focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Chatbot Welcome Greeting
              </label>
              <textarea
                rows={2}
                value={form.ai_welcome_message}
                onChange={(e) => handleChange("ai_welcome_message", e.target.value)}
                className="w-full px-3 py-2 border border-[#E4E7EC] rounded-xl text-xs text-[#070B14] focus:border-[#C59B27] focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Lead Qualification Strategy Notes
              </label>
              <textarea
                rows={4}
                value={form.ai_qualification_notes}
                onChange={(e) => handleChange("ai_qualification_notes", e.target.value)}
                className="w-full px-3 py-2 border border-[#E4E7EC] rounded-xl text-xs text-[#070B14] focus:border-[#C59B27] focus:outline-none"
              />
            </div>
          </div>
        )}

        {/* Tab 4: Notifications */}
        {activeTab === "notifications" && (
          <div className="space-y-6">
            <h3 className="text-sm font-bold text-[#070B14] uppercase tracking-wider">
              Administrative Notifications & Dispatch
            </h3>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Lead Dispatch Email Address
              </label>
              <input
                type="email"
                value={form.lead_notification_email}
                onChange={(e) => handleChange("lead_notification_email", e.target.value)}
                className="w-full sm:w-96 px-3 py-2 border border-[#E4E7EC] rounded-xl text-xs text-[#070B14] focus:border-[#C59B27] focus:outline-none"
              />
              <p className="text-[11px] text-slate-400 mt-1">
                New contact form submissions and qualified AI chatbot leads will be dispatched here.
              </p>
            </div>
          </div>
        )}

        {/* Save Bar */}
        <div className="flex items-center justify-end pt-4 border-t border-[#E4E7EC]">
          <button
            type="submit"
            disabled={isSaving}
            className="px-6 py-2.5 bg-[#C59B27] hover:bg-[#B38728] text-white text-xs font-semibold rounded-xl shadow-xs transition-colors flex items-center gap-2 disabled:opacity-50"
          >
            <Save size={15} />
            {isSaving ? "Saving..." : "Save All Settings"}
          </button>
        </div>
      </form>
    </div>
  );
}
