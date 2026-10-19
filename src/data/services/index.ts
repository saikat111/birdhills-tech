import { SubServiceDetail } from "../subServicesData";
import { WEB_DEV_SUB_SERVICES } from "./webDevSubServices";
import { MARKETING_SUB_SERVICES } from "./marketingSubServices";
import { LOCAL_SEO_SUB_SERVICES } from "./localSeoSubServices";
import { AI_SEO_SUB_SERVICES } from "./aiSeoSubServices";
import { AI_AUTOMATION_SUB_SERVICES } from "./aiAutomationSubServices";
import { CRM_SUB_SERVICES } from "./crmSubServices";
import { BRANDING_SUB_SERVICES } from "./brandingSubServices";
import { ANALYTICS_SUB_SERVICES } from "./analyticsSubServices";

export {
  WEB_DEV_SUB_SERVICES,
  MARKETING_SUB_SERVICES,
  LOCAL_SEO_SUB_SERVICES,
  AI_SEO_SUB_SERVICES,
  AI_AUTOMATION_SUB_SERVICES,
  CRM_SUB_SERVICES,
  BRANDING_SUB_SERVICES,
  ANALYTICS_SUB_SERVICES,
};

export const ALL_SERVICE_SUB_SERVICES: Record<string, Record<string, SubServiceDetail>> = {
  "web-development": WEB_DEV_SUB_SERVICES,
  "digital-marketing": MARKETING_SUB_SERVICES,
  "google-business-profile-local-seo": LOCAL_SEO_SUB_SERVICES,
  "ai-seo-search": AI_SEO_SUB_SERVICES,
  "ai-automation": AI_AUTOMATION_SUB_SERVICES,
  "crm-marketing-automation": CRM_SUB_SERVICES,
  "branding-creative": BRANDING_SUB_SERVICES,
  "analytics-cro": ANALYTICS_SUB_SERVICES,
};

export function getServiceSubService(serviceSlug: string, subSlug: string): SubServiceDetail | undefined {
  const serviceGroup = ALL_SERVICE_SUB_SERVICES[serviceSlug];
  if (!serviceGroup) return undefined;
  return serviceGroup[subSlug];
}

export function getAllServiceSubSlugs(): { slug: string; subSlug: string }[] {
  const result: { slug: string; subSlug: string }[] = [];
  for (const [serviceSlug, subServices] of Object.entries(ALL_SERVICE_SUB_SERVICES)) {
    for (const subSlug of Object.keys(subServices)) {
      result.push({ slug: serviceSlug, subSlug });
    }
  }
  return result;
}
