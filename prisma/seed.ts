import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  console.log("Seeding Bird Hills Tech database...");

  // 1. Admin User
  const defaultAdminEmail = process.env.ADMIN_EMAIL || "admin@birdhillstech.com";
  const defaultAdminPass = process.env.ADMIN_PASSWORD || "DubaiTech2026!";
  const passwordHash = await bcrypt.hash(defaultAdminPass, 10);

  const admin = await prisma.adminUser.upsert({
    where: { email: defaultAdminEmail },
    update: {
      passwordHash,
      name: "Bird Hills Administrator",
      role: "admin",
    },
    create: {
      email: defaultAdminEmail,
      passwordHash,
      name: "Bird Hills Administrator",
      role: "admin",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    },
  });
  console.log(`Created/updated admin user: ${admin.email}`);

  // 2. Site Settings
  const settings = [
    { key: "company_name", value: "Bird Hills Tech", description: "Official company name" },
    { key: "tagline", value: "Technology × Creative × Growth", description: "Primary brand positioning" },
    { key: "address", value: "Deira - Stone Building - 122 7th A Street - Al Baraha - Dubai, UAE", description: "Registered corporate address" },
    { key: "phone", value: "+971 52 440 5785", description: "Corporate hotline" },
    { key: "whatsapp", value: "+971 52 440 5785", description: "WhatsApp direct chat" },
    { key: "email", value: "contact@birdhillstech.com", description: "Official business inquiry email" },
    { key: "website", value: "https://birdhillstech.com", description: "Production domain" },
    { key: "hero_eyebrow", value: "TECHNOLOGY × CREATIVE × GROWTH", description: "Homepage Hero eyebrow" },
    { key: "hero_headline", value: "Your Digital Growth Partner in Dubai", description: "Homepage Hero headline" },
    { key: "hero_subcopy", value: "We combine web development, creative design and digital marketing to build powerful digital experiences and measurable business growth.", description: "Homepage Hero description" },
    { key: "trust_headline", value: "Trusted by ambitious businesses", description: "Trust section heading" },
    { key: "trust_statement", value: "Technology · Creative · Growth — Helping ambitious businesses build, launch and grow.", description: "Trust typography statement" },
    { key: "dubai_headline", value: "Built in Dubai. Built for a global tomorrow.", description: "Dubai presence headline" },
    { key: "dubai_subcopy", value: "Based in Dubai, Bird Hills Tech works with ambitious businesses to create modern digital experiences combining technology, creativity and measurable growth.", description: "Dubai presence description" },
  ];

  for (const s of settings) {
    await prisma.siteSetting.upsert({
      where: { key: s.key },
      update: { value: s.value, description: s.description },
      create: { key: s.key, value: s.value, description: s.description },
    });
  }

  // 3. Services (All 8 services)
  const servicesData = [
    {
      title: "Web Development",
      slug: "web-development",
      category: "Technology",
      icon: "Code2",
      shortDesc: "Custom websites, web applications and business platforms built for performance.",
      fullDesc: "Enterprise-grade web development tailored for high-growth businesses in Dubai and the GCC region. We architect fast, scalable, and secure digital platforms utilizing modern web frameworks, strict accessibility compliance, and lightning-fast Core Web Vitals.",
      featuresJson: JSON.stringify([
        "Modern Next.js & React Architectures",
        "Sub-second Core Web Vitals & Performance",
        "Custom API, Headless CMS & ERP Integrations",
        "Robust Security & Zero-Trust Architecture",
        "Full Mobile Responsiveness & Localization"
      ]),
      processJson: JSON.stringify([
        { step: "01", title: "Architecture & Wireframing", desc: "Detailed technical scope, database modeling, and interactive prototyping." },
        { step: "02", title: "Clean Engineering", desc: "Type-safe, component-driven development with strict performance budgets." },
        { step: "03", title: "Rigorous QA", desc: "Cross-browser testing, automated linting, security audits, and latency profiling." },
        { step: "04", title: "Launch & CI/CD", desc: "Zero-downtime deployment, SSL hardening, caching, and CDN optimization." }
      ]),
      benefitsJson: JSON.stringify([
        "Higher conversion rates driven by sub-second page loads",
        "Future-proof scalability without architecture lock-in",
        "Enterprise-level code quality with full ownership"
      ]),
      seoTitle: "Web Development Company in Dubai | Custom Websites & Platforms | Bird Hills Tech",
      seoDescription: "Award-caliber web development in Dubai. Bird Hills Tech crafts ultra-fast websites, custom portals, and web platforms built for measurable commercial growth.",
      sortOrder: 1,
      published: true,
    },
    {
      title: "Web Applications",
      slug: "web-applications",
      category: "Technology",
      icon: "Layers",
      shortDesc: "Bespoke SaaS platforms, internal business software, and interactive customer portals.",
      fullDesc: "We transform complex business workflows into seamless, intuitive web applications. Whether you need an internal operations hub, customer management portal, or multi-tenant SaaS application, we deliver precision engineering built for reliability.",
      featuresJson: JSON.stringify([
        "Custom SaaS Platform Architecture",
        "Role-Based Access Control (RBAC)",
        "Complex Workflow Automation",
        "Real-Time Data Pipelines & WebSockets",
        "Enterprise Database Optimization"
      ]),
      processJson: JSON.stringify([
        { step: "01", title: "Requirements Discovery", desc: "Deep dive into business logic, user journeys, and technical constraints." },
        { step: "02", title: "System Architecture", desc: "Database schema design, microservices/serverless planning, and API contracts." },
        { step: "03", title: "Iterative Sprints", desc: "Agile build sprints with bi-weekly demo milestones." },
        { step: "04", title: "Enterprise Deployment", desc: "Automated test suites, containerization, and monitoring setup." }
      ]),
      benefitsJson: JSON.stringify([
        "Streamlined operations and reduced manual overhead",
        "Secure cloud infrastructure that scales seamlessly with demand",
        "Intuitive dashboards that improve staff productivity"
      ]),
      seoTitle: "Custom Web Application Development Dubai | SaaS & Portals | Bird Hills Tech",
      seoDescription: "Bespoke web applications and enterprise software development in Dubai. Scalable SaaS systems, customer portals, and internal business platforms.",
      sortOrder: 2,
      published: true,
    },
    {
      title: "E-commerce Solutions",
      slug: "ecommerce",
      category: "Technology",
      icon: "ShoppingBag",
      shortDesc: "Scalable online stores with strong user experiences and conversion-focused architecture.",
      fullDesc: "High-converting digital commerce experiences built for the modern Middle Eastern consumer. We engineer lightning-fast checkout funnels, seamless regional payment gateways (Stripe, Tabby, Tamara, Telr), and intelligent inventory synchronization.",
      featuresJson: JSON.stringify([
        "Frictionless Multi-Step & One-Page Checkouts",
        "GCC Payment Gateways (Apple Pay, Tabby, Tamara)",
        "Multi-Currency & Bilingual (EN/AR) Support",
        "Real-Time Inventory & ERP Synchronization",
        "High-Speed Mobile Shopping Experiences"
      ]),
      processJson: JSON.stringify([
        { step: "01", title: "Commerce Strategy", desc: "Product catalog architecture, customer segmentation, and payment gateway selection." },
        { step: "02", title: "UX/UI Design", desc: "Mobile-first shopping journeys tailored to maximize average order value (AOV)." },
        { step: "03", title: "Platform Build", desc: "Headless commerce or custom store development with payment integration." },
        { step: "04", title: "Optimization", desc: "Checkout speed tuning, cart abandonment flows, and analytics tracking." }
      ]),
      benefitsJson: JSON.stringify([
        "Significant reduction in shopping cart abandonment",
        "Full support for Buy Now Pay Later (BNPL) regional checkouts",
        "Omnichannel order and inventory management"
      ]),
      seoTitle: "E-Commerce Website Development Dubai | High-Converting Online Stores",
      seoDescription: "Scale your online retail business with Bird Hills Tech. Premium e-commerce development in Dubai with localized GCC payment integrations and rapid checkout.",
      sortOrder: 3,
      published: true,
    },
    {
      title: "UI/UX Design",
      slug: "ui-ux-design",
      category: "Creative",
      icon: "Palette",
      shortDesc: "Human-centered digital interfaces crafted for clarity, elegance, and business conversion.",
      fullDesc: "We design digital experiences that captivate and convert. Combining deep user behavioral research, editorial aesthetics, and intuitive interaction design, our products feel prestigious and effortless to navigate.",
      featuresJson: JSON.stringify([
        "Comprehensive User Journey Mapping",
        "High-Fidelity Interactive Prototypes",
        "Design Systems & Component Libraries",
        "Accessibility (WCAG 2.1 AA) Compliance",
        "Mobile App & Responsive Web Interfaces"
      ]),
      processJson: JSON.stringify([
        { step: "01", title: "User Research", desc: "Auditing competitive landscape, user pain points, and commercial objectives." },
        { step: "02", title: "Information Architecture", desc: "Site maps, wireframes, and task flow diagrams." },
        { step: "03", title: "Visual System", desc: "Typography scale, color psychology, and custom UI components in Figma." },
        { step: "04", title: "Handoff & Specs", desc: "Pixel-perfect developer handoff with micro-interaction documentation." }
      ]),
      benefitsJson: JSON.stringify([
        "Clarity that reduces user churn and support overhead",
        "A premium visual standard that commands high market valuation",
        "Reusable design systems that accelerate future feature releases"
      ]),
      seoTitle: "UI/UX Design Agency Dubai | Premium Digital Product Design",
      seoDescription: "Transform user journeys with Dubai's premier UI/UX design agency. We craft intuitive, high-converting digital interfaces for enterprise and growth companies.",
      sortOrder: 4,
      published: true,
    },
    {
      title: "Branding & Design",
      slug: "branding",
      category: "Creative",
      icon: "Sparkles",
      shortDesc: "Brand identity, UI/UX design, creative direction and digital experiences.",
      fullDesc: "Crafting distinct, authoritative corporate identities that stand out in the competitive Dubai and international markets. We establish unified visual identities, strategic positioning, and corporate design guidelines that instill lasting trust.",
      featuresJson: JSON.stringify([
        "Brand Identity & Corporate Logo Systems",
        "Brand Strategy & Positioning Statements",
        "Comprehensive Brand Guidelines Manuals",
        "Collateral, Stationery & Pitch Deck Design",
        "Digital & Social Media Design Systems"
      ]),
      processJson: JSON.stringify([
        { step: "01", title: "Brand Archetype", desc: "Clarifying company values, market positioning, and distinctive tone of voice." },
        { step: "02", title: "Identity Exploration", desc: "Concept sketching, typography pairings, and color harmonies." },
        { step: "03", title: "System Refinement", desc: "Applying the brand to real-world touchpoints and digital interfaces." },
        { step: "04", title: "Guidelines Delivery", desc: "Complete vector asset packages and digital brand manual." }
      ]),
      benefitsJson: JSON.stringify([
        "Immediate corporate credibility in the UAE business landscape",
        "Cohesive multi-channel recognition across physical and digital formats",
        "Strong emotional resonance that justifies premium pricing"
      ]),
      seoTitle: "Corporate Branding Agency Dubai | Logo & Brand Identity Design",
      seoDescription: "Build an authoritative corporate brand identity with Bird Hills Tech in Dubai. Strategic branding, logo systems, and visual identities crafted for market leaders.",
      sortOrder: 5,
      published: true,
    },
    {
      title: "Digital Marketing",
      slug: "digital-marketing",
      category: "Growth",
      icon: "TrendingUp",
      shortDesc: "SEO, paid advertising, social media and data-driven marketing strategies.",
      fullDesc: "Data-driven multi-channel growth campaigns built for qualified B2B and high-ticket B2C customer acquisition. We focus on measurable commercial returns—generating qualified pipeline rather than meaningless impression metrics.",
      featuresJson: JSON.stringify([
        "High-Intent Google Ads & Search Marketing",
        "Targeted B2B LinkedIn Campaign Architecture",
        "Meta Performance Advertising (Instagram & Facebook)",
        "End-to-End Analytics & Conversion Attribution",
        "Landing Page Conversion Rate Optimization (CRO)"
      ]),
      processJson: JSON.stringify([
        { step: "01", title: "Audience Profiling", desc: "Pinpointing target decision-makers, search intent, and buyer triggers." },
        { step: "02", title: "Creative & Copy", desc: "High-converting corporate messaging, ad creatives, and lead funnels." },
        { step: "03", title: "Launch & Bidding", desc: "Precision bidding strategies targeting high-value commercial keywords." },
        { step: "04", title: "Attribution & Scale", desc: "Weekly CAC/LTV reporting and budget reallocation toward winning channels." }
      ]),
      benefitsJson: JSON.stringify([
        "Predictable flow of qualified business inquiries",
        "Elimination of ad spend waste through strict negative keyword filtering",
        "Transparent real-time reporting tied to revenue outcomes"
      ]),
      seoTitle: "Digital Marketing Agency Dubai | Performance Marketing & PPC | Bird Hills Tech",
      seoDescription: "Scale your revenue with Bird Hills Tech, a premier digital marketing agency in Dubai. Data-driven Google Ads, social marketing, and conversion optimization.",
      sortOrder: 6,
      published: true,
    },
    {
      title: "SEO Solutions",
      slug: "seo",
      category: "Growth",
      icon: "Search",
      shortDesc: "Technical SEO, local Dubai authority, and sustainable organic search dominance.",
      fullDesc: "Dominate Google search results for commercial intent keywords in Dubai and the GCC. Our systematic organic search methodology tackles technical foundation, site architecture, semantic content authority, and high-trust digital citations.",
      featuresJson: JSON.stringify([
        "Technical SEO & Core Web Vitals Optimization",
        "Local Dubai Map Pack & Business Authority",
        "Commercial Intent Keyword Mapping",
        "High-Authority Digital PR & Citation Building",
        "Semantic Structured Data & Rich Snippets"
      ]),
      processJson: JSON.stringify([
        { step: "01", title: "Technical Audit", desc: "Comprehensive crawl to uncover indexation blockers, redirects, and speed bottlenecks." },
        { step: "02", title: "Keyword Architecture", desc: "Mapping commercial search terms to dedicated service and landing pages." },
        { step: "03", title: "On-Page Optimization", desc: "Metadata, semantic HTML, internal linking, and structured schema." },
        { step: "04", title: "Authority Growth", desc: "Building credible domain trust through editorial backlinks and local citations." }
      ]),
      benefitsJson: JSON.stringify([
        "Long-term compound acquisition channel with zero cost-per-click",
        "Top-3 Google visibility for prime Dubai business searches",
        "High trust signaled to prospects searching for your services"
      ]),
      seoTitle: "SEO Agency Dubai | Search Engine Optimization UAE | Bird Hills Tech",
      seoDescription: "Dominate organic search in Dubai with Bird Hills Tech. Comprehensive technical SEO, local ranking acceleration, and high-impact B2B search strategies.",
      sortOrder: 7,
      published: true,
    },
    {
      title: "AI Solutions",
      slug: "ai-solutions",
      category: "Technology",
      icon: "Cpu",
      shortDesc: "AI integrations, automation and intelligent digital experiences.",
      fullDesc: "Bridge the gap between AI hype and practical business advantage. We build custom conversational AI agents, intelligent workflow automations, and proprietary knowledge assistants that dramatically accelerate client response times and eliminate repetitive manual tasks.",
      featuresJson: JSON.stringify([
        "Intelligent Lead Qualification Assistants",
        "Internal Knowledge Retrieval (RAG) Systems",
        "Workflow Automation & CRM Auto-Routing",
        "Multimodal AI Integration (Voice, Text, Vision)",
        "Secure Private Enterprise Model Deployments"
      ]),
      processJson: JSON.stringify([
        { step: "01", title: "Use-Case Audit", desc: "Identifying high-friction workflows where AI generates immediate ROI." },
        { step: "02", title: "Data & Security Architecture", desc: "Ensuring company data privacy and selecting the ideal model provider." },
        { step: "03", title: "Integration & Testing", desc: "Connecting AI agents with existing CRMs, WhatsApp, and databases." },
        { step: "04", title: "Fine-Tuning & Monitoring", desc: "Ongoing evaluation, guardrail enforcement, and prompt optimization." }
      ]),
      benefitsJson: JSON.stringify([
        "24/7 instant client inquiry qualification and scheduling",
        "Dramatically reduced operational workload for support and sales teams",
        "Competitive edge in tech-forward Dubai enterprise sectors"
      ]),
      seoTitle: "AI Solutions & Automation Dubai | Enterprise AI Integrations | Bird Hills Tech",
      seoDescription: "Transform your business operations with custom AI solutions in Dubai. Intelligent conversational assistants, automated workflows, and enterprise AI integrations.",
      sortOrder: 8,
      published: true,
    },
  ];

  for (const s of servicesData) {
    await prisma.service.upsert({
      where: { slug: s.slug },
      update: s,
      create: s,
    });
  }
  console.log(`Seeded ${servicesData.length} services.`);

  // 4. Projects (Realistic Dubai Sample Case Studies clearly marked)
  const projectsData = [
    {
      title: "Gulf Trade Logistics Cloud Platform",
      slug: "gulf-trade-logistics",
      client: "Gulf Trade Solutions (Sample Case Study)",
      industry: "Logistics & Supply Chain",
      category: "Web",
      shortDesc: "Next-generation freight tracking and client portal built for regional transport operations in Dubai.",
      description: "A comprehensive digital transformation project replacing legacy email-based freight tracking with an ultra-responsive Next.js portal providing real-time cargo milestone updates, automated customs documentation, and unified client invoicing.",
      challenge: "The client managed over 4,000 monthly shipments using disconnected spreadsheets and manual phone calls, leading to communication bottlenecks and customer churn during peak UAE customs processing periods.",
      approach: "Bird Hills Tech conducted on-site workflow mapping in Deira to design a frictionless portal where clients can track consignments, upload clearing documents, and pay port charges in under 60 seconds.",
      solution: "Engineered a high-performance web platform powered by Next.js, PostgreSQL/SQLite, and real-time webhook notifications. Implemented bilingual Arabic/English document generation and SMS/WhatsApp alert dispatching.",
      results: "Cut shipment status inquiry calls by 68%, decreased customs clearance document validation times from 14 hours to 45 minutes, and improved on-time client payments by 34%.",
      servicesJson: JSON.stringify(["Web Development", "UI/UX Design", "Custom Web Application"]),
      techJson: JSON.stringify(["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "WhatsApp Cloud API"]),
      featured: true,
      status: "published",
      coverImage: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
      seoTitle: "Gulf Trade Logistics Cloud Platform | Bird Hills Tech Case Study",
      seoDescription: "Discover how Bird Hills Tech modernized regional logistics in Dubai with a bespoke cloud portal and real-time tracking architecture.",
    },
    {
      title: "Aurora High Jewelry E-Commerce Experience",
      slug: "aurora-luxury-retail",
      client: "Aurora Jewels DXB (Sample Case Study)",
      industry: "Luxury Retail & High Jewelry",
      category: "E-commerce",
      shortDesc: "Bespoke digital boutique and VIP appointment booking experience for a Dubai Gold Souk jeweler.",
      description: "Crafting an ultra-luxury online flagship store showcasing one-of-a-kind gemstones, high jewelry collections, and an exclusive private salon consultation booking workflow.",
      challenge: "High jewelry clients expect tactile sophistication and absolute trust. Previous generic e-commerce templates failed to convey prestige, resulting in negligible online engagement for high-ticket pieces.",
      approach: "Designed a minimalist editorial aesthetic inspired by luxury Swiss watchmakers, integrating 360-degree gemstone viewers, custom carat filters, and direct WhatsApp VIP concierge routing.",
      solution: "Built a headless commerce architecture with sub-second page transitions, integrated Apple Pay and regional payment gateways, and launched an interactive private salon booking experience.",
      results: "Increased average order value by 140%, generated over 85 qualified private VIP salon consultations in the first quarter, and achieved a 99/100 Core Web Vitals performance score.",
      servicesJson: JSON.stringify(["E-commerce Solutions", "Branding & Design", "UI/UX Design"]),
      techJson: JSON.stringify(["Next.js", "Shopify Storefront API", "Tailwind CSS", "Framer Motion", "Stripe"]),
      featured: true,
      status: "published",
      coverImage: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1200&q=80",
      seoTitle: "Aurora Luxury High Jewelry E-Commerce | Bird Hills Tech Case Study",
      seoDescription: "How Bird Hills Tech created an editorial luxury shopping experience and VIP concierge booking platform for high jewelry in Dubai.",
    },
    {
      title: "Vertex Capital Corporate Portal & Investor Hub",
      slug: "vertex-capital-partners",
      client: "Vertex Capital (Sample Case Study)",
      industry: "Financial Services & Private Equity",
      category: "UI/UX",
      shortDesc: "Authoritative corporate portal and quarterly investor reporting dashboard for a DIFC investment firm.",
      description: "A secure corporate web presence and investor portal designed to articulate investment strategy, display audited fund performances, and provide institutional investors with confidential document vaults.",
      challenge: "Vertex Capital required an institutional digital brand that matched their \$250M AUM standing and satisfied strict compliance standards for investor document sharing.",
      approach: "Developed an executive visual language combining deep corporate navy, refined typography, and mathematical data visualizations for portfolio allocation and IRR trends.",
      solution: "Constructed an authenticated investor hub with role-based access control, cryptographic document watermarking, and dynamic portfolio analytics.",
      results: "Successfully supported the close of Fund II with over 40 LP institutional investors onboarded digitally within 30 days of launch.",
      servicesJson: JSON.stringify(["Web Applications", "UI/UX Design", "Branding & Design"]),
      techJson: JSON.stringify(["Next.js", "React", "Tailwind CSS", "Prisma", "Chart.js", "Edge Auth"]),
      featured: true,
      status: "published",
      coverImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
      seoTitle: "Vertex Capital Investor Portal | Bird Hills Tech Case Study",
      seoDescription: "Examine the design and engineering of an institutional investment portal created by Bird Hills Tech for DIFC private equity leaders.",
    },
    {
      title: "NovaTech Middle East B2B Demand Engine",
      slug: "novatech-b2b-growth",
      client: "NovaTech Middle East (Sample Case Study)",
      industry: "Enterprise SaaS & Cloud",
      category: "Marketing",
      shortDesc: "Integrated B2B acquisition campaign driving enterprise software demos across the UAE, KSA, and Qatar.",
      description: "End-to-end performance marketing and SEO campaign targeting CIOs, CTOs, and IT directors across key Gulf enterprise sectors, supported by conversion-optimized landing pages.",
      challenge: "High cost-per-click on generic search terms and low conversion rates on technical whitepaper downloads were draining commercial marketing budgets without generating pipeline.",
      approach: "Restructured ad spend toward high-intent solution terms on Google Ads and hyper-targeted account-based advertising on LinkedIn, paired with interactive ROI calculators.",
      solution: "Created 12 dedicated industry landing pages with interactive ROI estimators, localized Arabic ad creatives, and direct calendar demo booking integrations.",
      results: "Decreased Cost Per Qualified Lead (CPQL) by 47%, generated 120+ verified enterprise software demos in 6 months, and secured 3 government tier-1 pilots.",
      servicesJson: JSON.stringify(["Digital Marketing", "SEO Solutions", "Web Development"]),
      techJson: JSON.stringify(["Google Ads", "LinkedIn Campaign Manager", "Next.js", "HubSpot CRM", "Google Analytics 4"]),
      featured: false,
      status: "published",
      coverImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
      seoTitle: "NovaTech B2B Growth Engine | Bird Hills Tech Case Study",
      seoDescription: "See how Bird Hills Tech scaled enterprise SaaS pipeline across the GCC through data-driven search marketing and landing page optimization.",
    },
    {
      title: "Zenith Properties AI Concierge & Lead Qualifier",
      slug: "zenith-real-estate-ai",
      client: "Zenith Living (Sample Case Study)",
      industry: "Real Estate & Luxury Developments",
      category: "AI",
      shortDesc: "Automated WhatsApp and web AI assistant qualifying high-net-worth property investors 24/7.",
      description: "An intelligent conversational agent deployed on the web and WhatsApp that engages international property buyers, answers project availability queries, and schedules showroom viewings.",
      challenge: "Real estate inquiries arrived around the clock from international time zones. Sales agents took an average of 4.5 hours to respond, by which time prime buyer interest had waned.",
      approach: "Built a customized conversational agent trained on Zenith's luxury project brochures, floor plans, payment schedules, and Dubai Golden Visa qualification criteria.",
      solution: "Integrated the assistant directly into the web floating widget and WhatsApp Business API with real-time CRM lead routing and automated Google Meet calendar scheduling.",
      results: "Response time reduced from 4.5 hours to 3 seconds. The assistant qualified 410+ serious leads with budget above AED 3M in 90 days, closing 12 off-plan property sales.",
      servicesJson: JSON.stringify(["AI Solutions", "Web Development", "Consultation"]),
      techJson: JSON.stringify(["Next.js", "Node.js", "OpenAI / Claude API", "WhatsApp Business API", "PostgreSQL"]),
      featured: true,
      status: "published",
      coverImage: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
      seoTitle: "Zenith Real Estate AI Concierge | Bird Hills Tech Case Study",
      seoDescription: "Explore how Bird Hills Tech built an intelligent 24/7 AI lead qualification assistant for luxury Dubai real estate developments.",
    },
    {
      title: "Falcon Industrial Infrastructure Identity",
      slug: "falcon-engineering-rebrand",
      client: "Falcon Infrastructure (Sample Case Study)",
      industry: "Industrial & Civil Contracting",
      category: "Branding",
      shortDesc: "Modern corporate rebranding and tender documentation system for a 20-year UAE engineering firm.",
      description: "Complete visual reinvention for an established civil engineering contractor, modernizing their market image to compete for major municipal and federal infrastructure tenders.",
      challenge: "Despite extensive engineering credentials, the company's outdated 2004 brand identity caused them to appear behind younger international competitors in municipal bids.",
      approach: "Engineered an authoritative, geometric brand symbol representing precision engineering and desert resilience, paired with an executive bilingual typography system.",
      solution: "Delivered comprehensive identity guidelines, tender presentation templates, branded site safety gear, vehicle fleet livery, and a sleek responsive corporate website.",
      results: "The refreshed brand supported winning 2 major municipal infrastructure tenders valued over AED 80M within the first 6 months of rollout.",
      servicesJson: JSON.stringify(["Branding & Design", "UI/UX Design", "Web Development"]),
      techJson: JSON.stringify(["Figma", "Adobe Illustrator", "Next.js", "Tailwind CSS"]),
      featured: false,
      status: "published",
      coverImage: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80",
      seoTitle: "Falcon Engineering Corporate Rebrand | Bird Hills Tech Case Study",
      seoDescription: "How Bird Hills Tech repositioned a leading UAE civil contractor with an authoritative corporate identity and tender presentation system.",
    }
  ];

  for (const p of projectsData) {
    await prisma.project.upsert({
      where: { slug: p.slug },
      update: p,
      create: p,
    });
  }
  console.log(`Seeded ${projectsData.length} projects.`);

  // 5. Blog Categories and Posts
  const catTech = await prisma.blogCategory.upsert({
    where: { slug: "technology" },
    update: { name: "Technology & Engineering", description: "Modern web architecture, SaaS development, and cloud performance." },
    create: { name: "Technology & Engineering", slug: "technology", description: "Modern web architecture, SaaS development, and cloud performance." }
  });

  const catGrowth = await prisma.blogCategory.upsert({
    where: { slug: "growth" },
    update: { name: "Growth & Marketing", description: "B2B performance acquisition, SEO, and commercial conversion strategies in the UAE." },
    create: { name: "Growth & Marketing", slug: "growth", description: "B2B performance acquisition, SEO, and commercial conversion strategies in the UAE." }
  });

  const catCreative = await prisma.blogCategory.upsert({
    where: { slug: "creative" },
    update: { name: "Creative & Design", description: "Corporate branding, UI/UX systems, and digital customer psychology." },
    create: { name: "Creative & Design", slug: "creative", description: "Corporate branding, UI/UX systems, and digital customer psychology." }
  });

  const catAI = await prisma.blogCategory.upsert({
    where: { slug: "ai" },
    update: { name: "AI & Automation", description: "Practical generative AI, conversational assistants, and operational efficiency." },
    create: { name: "AI & Automation", slug: "ai", description: "Practical generative AI, conversational assistants, and operational efficiency." }
  });

  const blogPostsData = [
    {
      title: "What Serious Dubai Businesses Look For in Modern Web Development (2026 Edition)",
      slug: "modern-web-development-dubai-2026",
      categoryId: catTech.id,
      excerpt: "Why slow templates and disconnected agencies are being replaced by high-performance Next.js architectures built for corporate conversion.",
      author: "Bird Hills Tech Engineering Team",
      readTime: "6 min read",
      coverImage: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80",
      content: `## The Modern Web Paradigm in Dubai

The UAE's corporate landscape is moving at breakneck speed. Today, enterprise decision-makers in Dubai, Abu Dhabi, and across the GCC judge business capability in seconds based on digital execution.

A corporate website is no longer a static brochure—it is your highest-leverage digital asset. When a prospective client visits your site after a high-stakes business meeting in DIFC or Downtown Dubai, what do they experience?

### 1. Speed is the Ultimate Credibility Signal
Google's Core Web Vitals benchmark is unequivocal: users form opinions about brand competence within 200 milliseconds. If your web pages lag, freeze, or take multiple seconds to render, visitors subconsciously associate that friction with operational inefficiency.

Modern engineering frameworks like Next.js, Edge compute, and optimized asset delivery pipelines ensure pages render in under 400ms across both 5G mobile devices and desktop fiber connections.

### 2. Connected Strategy Over Disconnected Freelance Work
Too many Dubai businesses suffer from fractured digital execution: a designer builds in Figma, an overseas developer writes inconsistent code, and a separate marketing team complains that the site cannot convert visitors.

Bird Hills Tech was founded specifically to eliminate this disconnect by unifying engineering, design systems, and conversion marketing under a single cohesive execution framework.

### 3. Localization and Multi-Currency Readiness
Operating in the GCC requires native consideration of bilingual typography (English and Arabic), localized payment rails (Stripe, Apple Pay, Tabby, Tamara), and responsive layouts that gracefully accommodate differing text directions and regional compliance.

Building with scalable headless architectures ensures your brand can expand effortlessly from Dubai to Riyadh, Doha, and beyond.`,
      seoTitle: "Modern Web Development Standards in Dubai 2026 | Bird Hills Tech",
      seoDescription: "Discover how modern Next.js architecture and conversion-first engineering help serious Dubai companies dominate their markets in 2026.",
      status: "published"
    },
    {
      title: "Beyond Vanity Metrics: How B2B Companies in the UAE Build Predictable Growth Engines",
      slug: "b2b-digital-growth-engine-uae",
      categoryId: catGrowth.id,
      excerpt: "Why impressions and clicks mean nothing without qualified sales pipeline, and how to structure commercial acquisition in the Gulf.",
      author: "Bird Hills Tech Growth Team",
      readTime: "5 min read",
      coverImage: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80",
      content: `## The Cost of Vanity Metrics in the UAE Market

Every marketing agency can show impressions and vanity engagement. But when commercial leaders sit in boardrooms in Deira or Business Bay, the only metric that matters is: **How many qualified business opportunities did our investment generate?**

### The Flawed Playbook
Traditional agency models run broad-match Google Ads and boost random social media posts. The result? Inflated click counts, unqualified consumer inquiries, and wasted marketing budgets.

### The Bird Hills Tech Growth Methodology

1. **High-Intent Search Dominance**: We isolate search queries with commercial purchase intent (e.g., "commercial fit-out contractor Dubai" rather than generic phrases).
2. **Account-Based Precision**: On LinkedIn and programmatic channels, we filter strictly by job title, company size, and geographic jurisdiction.
3. **Frictionless Conversion Architecture**: We replace clunky 15-field forms with interactive, mobile-optimized inquiry flows and direct WhatsApp business integration.
4. **Closed-Loop CRM Attribution**: Every dollar of ad spend is tied directly to customer acquisition cost (CAC) and customer lifetime value (LTV).`,
      seoTitle: "B2B Digital Marketing in UAE: Building Predictable Growth | Bird Hills Tech",
      seoDescription: "Learn how serious B2B companies in Dubai and the UAE build high-conversion customer acquisition engines that generate qualified pipeline.",
      status: "published"
    },
    {
      title: "Smarter Digital Experiences: Real-World AI Integrations Delivering Actual Value",
      slug: "practical-ai-integrations-for-dubai-enterprises",
      categoryId: catAI.id,
      excerpt: "Moving past the AI hype: practical automations, conversational qualifiers, and internal knowledge assistants for Dubai companies.",
      author: "Bird Hills Tech AI Practice",
      readTime: "7 min read",
      coverImage: "https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&w=1200&q=80",
      content: `## AI Beyond the Hype

Artificial intelligence has dominated corporate discussions across the UAE. But amidst the avalanche of buzzwords, forward-thinking business owners ask a simple question: **Where does AI create immediate, measurable commercial value?**

### 1. 24/7 Intelligent Inquiry Qualification
Dubai is a global crossroads. Prospective buyers from Europe, Asia, and North America submit inquiries while your local office is closed. Traditional contact forms result in hours of delay.

A custom conversational AI assistant can:
- Instantly understand the visitor's core requirements.
- Calculate approximate budget fit and timeline viability.
- Collect structured contact credentials.
- Auto-book a calendar meeting with your senior consultants.

### 2. Internal Operations and Knowledge Automation
For law firms, logistics operators, and construction consultants in the UAE, hours are wasted searching through internal specifications, past tenders, and standard operating procedures.

Private vector retrieval (RAG) engines allow team members to ask questions in natural language and receive instant, source-cited answers from internal documentation.

### 3. Pragmatic Implementation Strategy
At Bird Hills Tech, we engineer AI as a seamless utility layer. We build modular service architectures that protect company privacy while seamlessly integrating with your existing CRM and communication platforms.`,
      seoTitle: "Practical AI Solutions for Dubai Businesses | Bird Hills Tech",
      seoDescription: "Discover how real-world AI assistants and workflow automations save hours and qualify high-value business leads for Dubai enterprises.",
      status: "published"
    },
    {
      title: "Corporate Identity & Digital Trust in the Gulf Market",
      slug: "corporate-brand-identity-dubai-gulf",
      categoryId: catCreative.id,
      excerpt: "How established brands communicate prestige, institutional stability, and modern vision in the Middle East.",
      author: "Bird Hills Tech Creative Direction",
      readTime: "5 min read",
      coverImage: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=80",
      content: `## The Architecture of Digital Trust

In the Gulf business ecosystem, relationships and reputation precede transactions. Before a client signs a contract, they scrutinize every visual and verbal signal your organization puts forward.

### The Visual Language of Authority
A brand identity in Dubai must balance international sophistication with regional confidence. This involves:
- **Restrained Color Palettes**: Deep navies, crisp whites, and purposeful blue accents communicate institutional stability far better than chaotic, saturated gradients.
- **Editorial Typography**: Pairing clean, modern grotesque sans-serifs with generous whitespace creates an immediate sense of scale and deliberation.
- **Micro-Interactions**: Smooth, subtle UI movements indicate engineering craftsmanship, whereas flashy animations cheapen the experience.

### Brand as a Commercial Multiplier
A world-class visual identity allows your company to command higher fee structures, attract superior enterprise talent, and close major corporate partnerships with confidence.`,
      seoTitle: "Corporate Brand Identity & Digital Trust in Dubai | Bird Hills Tech",
      seoDescription: "Explore how executive design systems, typography hierarchy, and corporate branding build lasting business trust across the Gulf.",
      status: "published"
    }
  ];

  for (const post of blogPostsData) {
    await prisma.blogPost.upsert({
      where: { slug: post.slug },
      update: post,
      create: post,
    });
  }
  console.log(`Seeded ${blogPostsData.length} blog posts.`);

  // 6. Testimonials (Sample tasteful endorsements clearly formatted for admin control)
  const testimonialsData = [
    {
      authorName: "Tariq Al-Hashemi",
      role: "Managing Director",
      company: "Gulf Logistics & Trade (Sample Endorsement)",
      quote: "Bird Hills Tech brought an exceptional level of technical rigor and brand clarity to our platform. Their understanding of Dubai's business tempo made collaboration seamless and results immediate.",
      rating: 5,
      avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
      sortOrder: 1,
      active: true,
    },
    {
      authorName: "Marcus Sterling",
      role: "Vice President of Growth",
      company: "Apex Capital Partners (Sample Endorsement)",
      quote: "The difference between generic agencies and Bird Hills Tech is their focus on measurable commercial impact. Every line of code and design decision served our investor acquisition objectives.",
      rating: 5,
      avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
      sortOrder: 2,
      active: true,
    },
    {
      authorName: "Elena Rostova",
      role: "Head of Marketing",
      company: "Aurora Retail Group (Sample Endorsement)",
      quote: "Our new e-commerce flagship store performs flawlessly. Page loads are instantaneous and customer inquiries on WhatsApp have more than doubled since launching with Bird Hills Tech.",
      rating: 5,
      avatarUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
      sortOrder: 3,
      active: true,
    }
  ];

  for (const t of testimonialsData) {
    const existing = await prisma.testimonial.findFirst({ where: { authorName: t.authorName } });
    if (existing) {
      await prisma.testimonial.update({ where: { id: existing.id }, data: t });
    } else {
      await prisma.testimonial.create({ data: t });
    }
  }

  // 7. FAQs
  const faqsData = [
    {
      question: "What core services does Bird Hills Tech provide?",
      answer: "Bird Hills Tech is intentionally positioned at the intersection of Technology, Creative Strategy, and Digital Growth. We provide custom web development, web applications, e-commerce architectures, corporate UI/UX and branding, performance digital marketing, technical SEO, and AI workflow integrations.",
      category: "General",
      sortOrder: 1,
      active: true
    },
    {
      question: "Where is Bird Hills Tech located?",
      answer: "We are proudly based in Dubai, UAE. Our registered corporate address is Deira - Stone Building - 122 7th A Street - Al Baraha - Dubai, UAE. We welcome client consultations at our premises and can also arrange strategic meetings across Dubai.",
      category: "General",
      sortOrder: 2,
      active: true
    },
    {
      question: "How does the project engagement process work?",
      answer: "Every project follows our 6-step roadmap: 01 Discover (understand goals & constraints), 02 Strategize (define technical and commercial direction), 03 Design (create UI systems & prototypes), 04 Develop (clean type-safe engineering), 05 Launch (rigorous testing & deployment), and 06 Grow (conversion monitoring, SEO & scaling).",
      category: "Process",
      sortOrder: 3,
      active: true
    },
    {
      question: "Can we schedule an in-person meeting in Dubai?",
      answer: "Yes, absolutely. You can schedule a meeting directly through our 'Book a Meeting' page, contact us via phone/WhatsApp at +971 52 440 5785, or request an introductory briefing at your Dubai office.",
      category: "General",
      sortOrder: 4,
      active: true
    },
    {
      question: "What technology stack do you build with?",
      answer: "We specialize in modern, high-performance web ecosystems including Next.js, React, TypeScript, Tailwind CSS, Prisma, PostgreSQL/SQLite, Node.js, and leading cloud providers (Vercel, AWS, Google Cloud). We prioritize sub-second Core Web Vitals, enterprise security, and clean maintainable code.",
      category: "Services",
      sortOrder: 5,
      active: true
    },
    {
      question: "How do your digital marketing and SEO services drive actual ROI?",
      answer: "Unlike traditional agencies that report vanity clicks and impressions, our growth practice tracks qualified pipeline, customer acquisition cost (CAC), and commercial deal sizes. We target high-intent commercial keywords and decision-makers on Google, LinkedIn, and Meta.",
      category: "Services",
      sortOrder: 6,
      active: true
    }
  ];

  for (const faq of faqsData) {
    const existing = await prisma.fAQ.findFirst({ where: { question: faq.question } });
    if (existing) {
      await prisma.fAQ.update({ where: { id: existing.id }, data: faq });
    } else {
      await prisma.fAQ.create({ data: faq });
    }
  }

  // 8. Sample Leads for Admin CMS Demonstration
  const sampleLeads = [
    {
      name: "Sultan Al-Ketbi",
      company: "Al-Ketbi Capital",
      email: "sultan@alketbicapital.ae",
      phone: "+971 50 123 4567",
      service: "Web Applications",
      budget: "AED 50,000 - 100,000",
      message: "Looking to build a private investor portal for our GCC family office.",
      source: "Contact Form",
      status: "Qualified",
      notes: "Followed up via phone. Meeting scheduled for next Tuesday at DIFC."
    },
    {
      name: "Sarah Jenkins",
      company: "Lumiere Skin Clinic DXB",
      email: "sarah@lumiereskin.com",
      phone: "+971 55 987 6543",
      service: "Digital Marketing",
      budget: "AED 25,000 - 50,000",
      message: "Need Google Ads and SEO to increase monthly consultations in Jumeirah.",
      source: "AI Chatbot",
      status: "New",
      notes: "Qualified via website AI assistant. High intent for local SEO."
    }
  ];

  for (const lead of sampleLeads) {
    const existing = await prisma.lead.findFirst({ where: { email: lead.email } });
    if (!existing) {
      await prisma.lead.create({ data: lead });
    }
  }

  // 9. Sample Booking for Admin CMS Demonstration
  const sampleBooking = {
    name: "Omar Mansoor",
    company: "Apex Global Trading",
    email: "omar@apexglobal.ae",
    phone: "+971 52 999 8888",
    service: "E-commerce Solutions",
    date: "2026-09-28",
    timeSlot: "11:00 AM - 11:45 AM (GST)",
    message: "Discussing our regional wholesale e-commerce platform transition.",
    status: "Confirmed",
    notes: "Video meeting link sent via email."
  };

  const existingBooking = await prisma.booking.findFirst({ where: { email: sampleBooking.email } });
  if (!existingBooking) {
    await prisma.booking.create({ data: sampleBooking });
  }

  console.log("Database seed completed successfully!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
