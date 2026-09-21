# Bird Hills Tech · Corporate Website & Admin CMS

<div align="center">
  <img src="public/images/logo.svg" alt="Bird Hills Tech" width="260" height="auto" />
  <p><strong>Technology × Creative × Growth</strong></p>
  <p><em>Enterprise Web Engineering, Bespoke Software, Brand Architecture & Digital Growth Partner in Dubai, UAE</em></p>
</div>

---

## Executive Overview

**Bird Hills Tech** is a Dubai-based technology, creative, and digital growth company located at Stone Building, 122 7th A Street, Al Baraha, Deira, Dubai, UAE (+971 52 440 5785, contact@birdhillstech.com).

This repository contains the complete, production-ready corporate web platform and integrated administrative CMS. Engineered without generic templates, the platform delivers a fast, responsive, and authoritative digital presence designed to convert regional and international enterprises across the GCC.

### Core Value Pillars
- **Technology:** Modern Next.js 16 architectures, bespoke web applications, enterprise e-commerce portals, and cloud integrations built for sub-second Core Web Vitals.
- **Creative:** Brand identity, executive design systems, conversion-driven UI/UX, and high-fidelity digital collateral.
- **Growth:** Targeted commercial search engine optimization (SEO), performance marketing across Google/Meta/LinkedIn, analytics architectures, and CRM funnels.

---

## Tech Stack & Architecture

- **Framework:** [Next.js 16 (App Router)](https://nextjs.org/) with React 19 & Turbopack
- **Language:** TypeScript (Strict mode enabled)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) with custom corporate tokens (`#0B1730` Deep Corporate Navy, `#1D68BD` Executive Blue, `#F7F9FC` Soft Background)
- **Database & ORM:** [SQLite](https://www.sqlite.org/) with [Prisma ORM 6](https://www.prisma.io/)
- **Security & Authentication:** `jose` (JWT HTTP-only encrypted session cookies) + `bcryptjs` password hashing
- **Motion & Icons:** Framer Motion & Lucide React
- **Validation:** Zod schemas & server-side sanitization

---

## Repository Structure

```
birdhills-tech/
├── prisma/
│   ├── schema.prisma        # 13 relational database models
│   ├── seed.ts              # Production database seed script
│   └── dev.db               # SQLite database
├── public/
│   ├── images/
│   │   ├── logo.svg         # Primary dark navy corporate logo
│   │   └── logo-white.svg   # Monochrome white logo
│   └── favicon.svg          # High-resolution vector favicon
├── src/
│   ├── app/
│   │   ├── page.tsx         # Complete 11-section corporate homepage
│   │   ├── about/           # 9-section corporate & philosophy page
│   │   ├── services/        # Services catalog & individual service routes (/services/[slug])
│   │   ├── work/            # Portfolio showcase & case study deep-dives (/work/[slug])
│   │   ├── insights/        # Strategic blog & thought leadership (/insights/[slug])
│   │   ├── category/        # Category-filtered blog archives (/category/[slug])
│   │   ├── contact/         # Direct contact with interactive form & Dubai map coordinates
│   │   ├── book-a-meeting/  # Multi-step meeting booking & consultation scheduler
│   │   ├── privacy-policy/  # UAE & regional regulatory privacy policy
│   │   ├── terms/           # Terms of service
│   │   ├── sitemap.ts       # Dynamic SEO sitemap generator
│   │   ├── robots.ts        # Search crawler directive rules
│   │   ├── admin/           # Administrative CMS portal
│   │   │   ├── login/       # Secure admin authentication
│   │   │   ├── dashboard/   # Executive KPI overview & live feeds
│   │   │   ├── leads/       # Inquiries & CRM management
│   │   │   ├── bookings/    # Consultation scheduling & meeting CRM
│   │   │   ├── services/    # Live service editor & manager
│   │   │   ├── projects/    # Case study publisher & asset linker
│   │   │   ├── blog/        # Thought leadership publishing engine
│   │   │   ├── blog-categories/ # Strategic taxonomy & topic clusters
│   │   │   ├── testimonials/# Verified reviews & social proof manager
│   │   │   ├── faqs/        # Knowledge base & objection handling
│   │   │   ├── content/     # Live headline & structured JSON page content editor
│   │   │   ├── media/       # Central image asset repository
│   │   │   └── settings/    # Corporate coordinates & AI assistant directives
│   │   └── api/             # Secure REST API endpoints
│   │       ├── chat/        # Autonomous AI lead qualification & conversation pipeline
│   │       ├── contact/     # Contact form intake & lead recorder
│   │       ├── bookings/    # Meeting scheduler & validation
│   │       └── admin/       # Complete CRUD API routes protected by admin session
│   ├── components/
│   │   ├── common/          # Header, Footer, Logo, Chatbot, WhatsApp, SectionHeading
│   │   ├── home/            # All 11 homepage modular sections
│   │   ├── work/            # Filterable case study components
│   │   ├── contact/         # Validated contact form
│   │   ├── booking/         # Interactive consultation form
│   │   └── admin/           # Dedicated admin CMS client tables & modals
│   └── lib/
│       ├── prisma.ts        # Global Prisma singleton client
│       ├── auth.ts          # Session decryption, verification & password utilities
│       └── ai/              # Extensible AI conversational & lead qualification service
└── README.md
```

---

## Quick Start & Local Setup

### 1. Prerequisites
- Node.js 20+ (LTS recommended)
- npm or pnpm

### 2. Installation
```bash
git clone https://github.com/saikat111/birdhills-tech.git
cd birdhills-tech
npm install
```

### 3. Database Initialization & Seeding
```bash
# Push schema to SQLite
npx prisma db push

# Populate with admin user, 8 services, 6 case studies, blog posts, FAQs & testimonials
npx prisma db seed
```

### 4. Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the public website.

---

## Admin CMS Credentials

The administrative control center is located at `/admin`:

- **URL:** [http://localhost:3000/admin/login](http://localhost:3000/admin/login)
- **Default Email:** `admin@birdhillstech.com`
- **Default Password:** `DubaiTech2026!`

*(Credentials and secrets can be configured via environment variables in `.env`)*

---

## Environment Variables (`.env`)

```env
# Database
DATABASE_URL="file:./dev.db"

# Session & Security
JWT_SECRET="birdhills-tech-super-secure-production-jwt-key-2026"

# Default Admin Seed
ADMIN_EMAIL="admin@birdhillstech.com"
ADMIN_PASSWORD="DubaiTech2026!"

# Optional AI Providers (System uses built-in heuristic qualifier if omitted)
GEMINI_API_KEY=""
OPENAI_API_KEY=""

# Public Website URL
NEXT_PUBLIC_SITE_URL="https://birdhillstech.com"
```

---

## Production Deployment

### Option A: Vercel / Next.js Managed Host
1. Connect your GitHub repository to Vercel.
2. Set environment variables (`DATABASE_URL`, `JWT_SECRET`).
3. For cloud-hosted databases in serverless environments, connect PostgreSQL/MySQL by adjusting `provider` in `prisma/schema.prisma`.

### Option B: Self-Hosted Node.js / Docker
```bash
npm run build
npm run start
```
The application will serve on port `3000` with cached production builds and zero runtime dependencies on external CMSs.

---

## Corporate Inquiries & Support

**Bird Hills Tech**  
Stone Building, 122 7th A Street, Al Baraha, Deira, Dubai, United Arab Emirates  
- **Phone / WhatsApp:** +971 52 440 5785  
- **Email:** [contact@birdhillstech.com](mailto:contact@birdhillstech.com)  
- **Website:** [birdhillstech.com](https://birdhillstech.com)
