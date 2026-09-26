import { prisma } from "./prisma";

export interface SiteSettings {
  site_title: string;
  site_description: string;
  site_keywords: string;
  google_indexing: string;
  company_name: string;
  tagline: string;
  address: string;
  phone: string;
  whatsapp: string;
  email: string;
  website: string;
  working_hours: string;
  linkedin_url: string;
  twitter_url: string;
  instagram_url: string;
  github_url: string;
  facebook_url: string;
  youtube_url: string;
  ai_bot_name: string;
  ai_welcome_message: string;
  ai_qualification_notes: string;
  lead_notification_email: string;
  [key: string]: string;
}

export const defaultSettings: SiteSettings = {
  site_title: "Bird Hills Tech | Digital Marketing & Web Development Agency",
  site_description:
    "Bird Hills Tech delivers Digital Marketing, AI Business Automation, Web Development, Domain & Hosting Services for smarter, scalable business growth.",
  site_keywords:
    "Web Development Company in Dubai, Digital Marketing Agency in Dubai, AI Business Automation Dubai, Domain and Hosting Services, Local SEO Dubai, Bird Hills Tech",
  google_indexing: "disabled", // off by default
  company_name: "Bird Hills Tech",
  tagline: "Technology × Creative × Growth",
  address: "Deira - Stone Building - 122 7th A Street - Al Baraha - Dubai, UAE",
  phone: "+971 52 440 5785",
  whatsapp: "+971 52 440 5785",
  email: "contact@birdhillstech.com",
  website: "https://birdhillstech.com",
  working_hours: "Monday – Saturday: 9:00 AM – 6:00 PM (GST)",
  linkedin_url: "https://linkedin.com/company/birdhillstech",
  twitter_url: "https://twitter.com/birdhillstech",
  instagram_url: "https://instagram.com/birdhillstech",
  github_url: "https://github.com/birdhillstech",
  facebook_url: "https://facebook.com/birdhillstech",
  youtube_url: "https://youtube.com/@birdhillstech",
  ai_bot_name: "Bird Hills AI",
  ai_welcome_message: "Tell us what you're trying to build. I'll help you find the right direction.",
  ai_qualification_notes:
    "Prioritize commercial budget, timeline, and whether client has existing operations in Dubai / GCC.",
  lead_notification_email: "birdhillstech@gmail.com",
};

export async function getSiteSettings(): Promise<SiteSettings> {
  try {
    const records = await prisma.siteSetting.findMany();
    const map: Record<string, string> = { ...defaultSettings };
    records.forEach((r) => {
      if (r.value !== undefined && r.value !== null) {
        map[r.key] = r.value;
      }
    });
    return map as SiteSettings;
  } catch (err) {
    console.error("Error fetching site settings from DB:", err);
    return defaultSettings;
  }
}
