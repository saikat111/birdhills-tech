# Bird Hills Tech · Regional UAE & GCC Commercial Hub

<div align="center">
  <img src="public/images/logo.svg" alt="Bird Hills Tech Dubai" width="280" height="auto" />
  <p><strong>Technology × Creative × Growth</strong></p>
  <p><em>Enterprise Web Engineering, Bespoke Software, Brand Architecture & Digital Growth Partner in Dubai, UAE</em></p>
</div>

---

## Executive Overview

**Bird Hills Tech** is a premier digital technology, creative, and commercial growth company headquartered in Dubai, UAE:
- **Headquarters:** Stone Building, 122 7th A Street, Al Baraha, Deira, Dubai, UAE
- **Hotline & WhatsApp:** +971 52 440 5785
- **Official Inquiries:** contact@birdhillstech.com / support@birdhillstech.com
- **Commercial Currency:** UAE Dirhams (AED) · VAT Compliant Invoicing

This repository contains the complete, production-ready corporate web platform and integrated administrative CMS engineered specifically for the **UAE & GCC enterprise market**. The platform features sub-second Core Web Vitals (< 0.8s LCP), accredited .ae domain registry integration, sub-15ms GCC cloud edge hosting, UAE PDPL privacy compliance, and Google Maps local 3-pack dominance.

*(For the international USD platform targeting clients outside the GCC, see the [Bird Hills Tech Global Platform](https://github.com/saikat111/birdhills-tech-global.git)).*

---

## Core Value Pillars & Standards

- **Technology (AED 4,500+):** Modern Next.js 16 architectures, React 19, TypeScript, bespoke web applications, enterprise portals, and cloud integrations built for sub-second Core Web Vitals and 100% intellectual property transfer.
- **Infrastructure (AED 120/mo+):** Accredited .ae domain registrations, Anycast DNS, pure NVMe cloud edge servers with sub-15ms GCC latency, and corporate business email deliverability (DKIM/SPF/DMARC).
- **Creative (AED 3,800+):** Executive brand identity systems, vector logo design, bilingual English/Arabic (RTL) typography, and conversion-driven UI/UX design systems.
- **Growth (AED 1,500/mo+):** High-intent Google Ads, LinkedIn B2B targeting, Google Maps 3-pack ranking, AEO/GEO generative AI search optimization, and closed-loop CRM revenue attribution.

---

## Image & Asset Architecture

All visuals across the entire platform are **high-resolution locally generated 3D tech assets** stored directly in `public/images/generated/` (over 136 tailored visual assets). Zero external hotlinks (Unsplash, etc.) are used in production, guaranteeing:
- 100% privacy and zero third-party cookie/tracking exposure.
- Sub-second image load times via Next.js edge optimization.
- Consistent executive dark navy (`#070B14`, `#0B1730`) and gold (`#C59B27`, `#D4AF37`) visual identity.

---

## Tech Stack & Architecture

- **Framework:** Next.js 16 (App Router) with React 19 & Turbopack
- **Language:** TypeScript (Strict mode enabled)
- **Styling:** Tailwind CSS v4 with custom executive tokens
- **Database & ORM:** MySQL (Hostinger Cloud) / SQLite with Prisma ORM 6
- **Security & Authentication:** `jose` (JWT HTTP-only encrypted session cookies) + `bcryptjs`
- **Email Dispatch:** Hostinger SMTP (`smtp.hostinger.com:465`)
- **Motion & Icons:** Framer Motion & Lucide React
- **Validation:** Zod schemas & server-side sanitization

---

## Repository Structure

```
birdhills-tech/
├── prisma/
│   ├── schema.prisma        # Relational database models
│   └── seed.ts              # Production database seed script (AED pricing)
├── public/
│   ├── images/
│   │   ├── logo.svg         # Primary dark navy corporate logo
│   │   ├── logo-white.svg   # Monochrome white logo
│   │   └── generated/       # 136+ locally generated 3D tech showcase assets
│   └── favicon.svg          # High-resolution vector favicon
├── src/
│   ├── app/
│   │   ├── page.tsx         # Corporate homepage (9 services, hero slider, SEO hub)
│   │   ├── about/           # Corporate story, engineering standards, Dubai studio
│   │   ├── services/        # 9 Core Practice Areas + 74 Sub-Service Pages
│   │   ├── work/            # Portfolio showcase & case studies
│   │   ├── hosting/         # NVMe Cloud Hosting & Business Email (AED plans)
│   │   ├── domains/         # Accredited .ae & Global Domain Registry (AED pricing)
│   │   ├── pricing/         # Transparent UAE Corporate Invoicing (AED tiers)
│   │   ├── contact/         # Contact intake & Dubai headquarters coordinates
│   │   ├── book-a-meeting/  # Multi-step executive consultation booking engine
│   │   ├── admin/           # Administrative CMS portal (leads, bookings, content, blog)
│   │   └── api/             # Secure REST API endpoints (contact, bookings, admin CRUD)
│   ├── components/
│   │   ├── common/          # Header, Footer, SubServiceDetailView, FaqAccordion
│   │   ├── home/            # HeroSection, ServicesSection, SeoKnowledgeTabs, ComparisonMatrix
│   │   ├── pricing/         # PricingCardsClient (AED retainers & tiers)
│   │   └── domains/         # DomainSearchClient (.ae & global TLD lookup)
│   └── data/
│       └── services/        # Detailed metadata for all 74 individual sub-services
└── README.md
```

---

## Quick Start & Local Setup

### 1. Prerequisites
- Node.js 20+ (LTS recommended)
- npm

### 2. Installation
```bash
git clone https://github.com/saikat111/birdhills-tech.git
cd birdhills-tech
npm install
```

### 3. Local Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the public website.

---

## Admin CMS Credentials

The administrative control center is located at `/admin`:

- **URL:** [http://localhost:3000/admin/login](http://localhost:3000/admin/login)
- **Default Email:** `admin@birdhillstech.com`
- **Default Password:** `GlobalTech2026!`

---

## Currency & Invoicing Standards

- **UAE Platform (`birdhills-tech`):** Quoted and invoiced in **UAE Dirhams (AED)**.
- **Global Platform (`birdhills-tech-global`):** Quoted and invoiced in **US Dollars (USD / $)**.
