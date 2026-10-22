import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  console.log("Seeding Bird Hills Tech database...");

  // 1. Admin User
  const defaultAdminEmail = process.env.ADMIN_EMAIL || "admin@birdhillstech.com";
  const defaultAdminPass = process.env.ADMIN_PASSWORD || "GlobalTech2026!";
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
    { key: "site_title", value: "Bird Hills Tech | Digital Marketing & Web Development Agency", description: "Main website SEO browser title" },
    { key: "site_description", value: "Bird Hills Tech delivers Digital Marketing, AI Business Automation, Web Development, Domain & Hosting Services for smarter, scalable business growth.", description: "Main website SEO meta description" },
    { key: "site_keywords", value: "Web Development Company, Digital Marketing Agency, AI Business Automation, Domain and Hosting Services, Enterprise SEO, Bird Hills Tech", description: "Meta search keywords" },
    { key: "google_indexing", value: "enabled", description: "Google and search crawler indexing status (disabled or enabled)" },
    { key: "company_name", value: "Bird Hills Tech", description: "Official company name" },
    { key: "tagline", value: "Technology × Creative × Growth", description: "Primary brand positioning" },
    { key: "address", value: "Global Digital Operations & Worldwide Client Services", description: "Registered corporate address" },
    { key: "phone", value: "+971 52 440 5785", description: "Corporate hotline" },
    { key: "whatsapp", value: "+971 52 440 5785", description: "WhatsApp direct chat" },
    { key: "email", value: "contact@birdhillstech.com", description: "Official business inquiry email" },
    { key: "website", value: "https://birdhillstech.com", description: "Production domain" },
    { key: "hero_eyebrow", value: "TECHNOLOGY × CREATIVE × GROWTH", description: "Homepage Hero eyebrow" },
    { key: "hero_headline", value: "Your Global Digital Growth Partner", description: "Homepage Hero headline" },
    { key: "hero_subcopy", value: "We combine web development, creative design and digital marketing to build powerful digital experiences and measurable business growth.", description: "Homepage Hero description" },
    { key: "trust_headline", value: "Trusted by ambitious businesses", description: "Trust section heading" },
    { key: "trust_statement", value: "Technology · Creative · Growth — Helping ambitious businesses build, launch and grow.", description: "Trust typography statement" },
    { key: "global_headline", value: "Built with precision. Built for a global tomorrow.", description: "Global presence headline" },
    { key: "global_subcopy", value: "Bird Hills Tech works with ambitious businesses worldwide to create modern digital experiences combining technology, creativity and measurable growth.", description: "Global presence description" },
  ];

  for (const s of settings) {
    await prisma.siteSetting.upsert({
      where: { key: s.key },
      update: { value: s.value, description: s.description },
      create: { key: s.key, value: s.value, description: s.description },
    });
  }

  // 3. Official 9 Services Suite & Sub-Services Tree
  const servicesData = [
    {
      title: "Web Development",
      slug: "web-development",
      category: "Technology",
      icon: "Code2",
      shortDesc: "Custom business websites, Next.js web applications, and high-performance digital platforms.",
      fullDesc: "Enterprise-grade web development engineered for international market leaders and high-growth companies. From custom business websites to headless e-commerce, custom web apps, and full redesigns, we build for sub-second page loads, zero technical debt, and maximum conversion.",
      featuresJson: JSON.stringify([
        "Business Websites",
        "WordPress",
        "eCommerce",
        "Landing Pages",
        "Custom Development",
        "Website Redesign",
        "Website Support"
      ]),
      processJson: JSON.stringify([
        { step: "01", title: "Architecture & Wireframing", desc: "Detailed technical scope, database modeling, and interactive prototyping." },
        { step: "02", title: "Clean Engineering", desc: "Type-safe Next.js 16 and TypeScript with strict performance budgets." },
        { step: "03", title: "Rigorous QA", desc: "Cross-device testing, accessibility audits, and latency profiling." },
        { step: "04", title: "Production Launch", desc: "Zero-downtime deployment, SSL hardening, and continuous SLA support." }
      ]),
      benefitsJson: JSON.stringify([
        "Industry-leading performance and rapid loading driving higher conversions",
        "Future-proof scalability without proprietary software lock-in",
        "Full intellectual property and source code ownership"
      ]),
      seoTitle: "Web Development Company | Custom Websites & Platforms | Bird Hills Tech",
      seoDescription: "Award-caliber web development. Bird Hills Tech crafts ultra-fast business websites, WordPress, custom platforms, and e-commerce.",
      sortOrder: 1,
      published: true,
    },
    {
      title: "Domain & Hosting",
      slug: "domain-hosting",
      category: "Infrastructure",
      icon: "Server",
      shortDesc: "Official accredited registry, NVMe cloud hosting, enterprise email, and zero-downtime migrations.",
      fullDesc: "Mission-critical cloud infrastructure and domain registry services. We provide high-speed NVMe storage, ultra-low international latency, bank-grade DNSSEC security, branded business email inboxes, and free 24/7 white-glove website migration.",
      featuresJson: JSON.stringify([
        "Domain Registration",
        "Domain Transfer & Management",
        "Web Hosting",
        "Business Email",
        "SSL & Website Security",
        "DNS Management",
        "Website Migration",
        "Backup & Maintenance"
      ]),
      processJson: JSON.stringify([
        { step: "01", title: "Infrastructure Audit", desc: "Evaluating traffic volume, CPU/RAM requirements, and security tier." },
        { step: "02", title: "DNS & Environment Setup", desc: "Configuring Anycast DNS, SSL certificates, and isolated cloud nodes." },
        { step: "03", title: "White-Glove Migration", desc: "Zero-downtime database and file replication with staging verification." },
        { step: "04", title: "24/7 Monitoring", desc: "Automated daily off-site backups, DDoS mitigation, and uptime SLAs." }
      ]),
      benefitsJson: JSON.stringify([
        "Ultra-low latency across global edge cloud networks",
        "99.99% network uptime SLA guarantee backed by global enterprise nodes",
        "Zero-downtime migration guarantee signed by senior cloud engineers"
      ]),
      seoTitle: "Cloud Web Hosting & Domain Registrar | Bird Hills Tech",
      seoDescription: "High-speed NVMe cloud hosting, official domain registration, managed VPS, and enterprise business email with zero-downtime migration.",
      sortOrder: 2,
      published: true,
    },
    {
      title: "Digital Marketing",
      slug: "digital-marketing",
      category: "Growth",
      icon: "TrendingUp",
      shortDesc: "Closed-loop B2B lead generation, Google Ads, Meta advertising, and high-ROI multi-channel campaigns.",
      fullDesc: "Data-driven performance marketing built for qualified customer acquisition. We eliminate ad spend waste through precision commercial keyword bidding, B2B LinkedIn targeting, creative conversion funnels, and revenue attribution.",
      featuresJson: JSON.stringify([
        "SEO",
        "Google Ads",
        "Meta Ads",
        "TikTok Ads",
        "Social Media Marketing",
        "Content Marketing",
        "Email Marketing",
        "Remarketing",
        "Lead Generation"
      ]),
      processJson: JSON.stringify([
        { step: "01", title: "Audience Profiling", desc: "Pinpointing decision-makers, commercial search intent, and buyer triggers." },
        { step: "02", title: "Creative Architecture", desc: "High-converting corporate messaging, ad creatives, and lead funnels." },
        { step: "03", title: "Precision Bidding", desc: "Algorithmic bidding targeting high-value commercial inquiries." },
        { step: "04", title: "Attribution & Scaling", desc: "Weekly CAC/LTV reporting and budget reallocation toward winning channels." }
      ]),
      benefitsJson: JSON.stringify([
        "Predictable flow of verified commercial business inquiries",
        "Elimination of ad budget waste with strict negative keyword filtering",
        "Transparent real-time reporting tied directly to revenue outcomes"
      ]),
      seoTitle: "Digital Marketing Agency | Performance Marketing & PPC | Bird Hills Tech",
      seoDescription: "Scale your revenue with Bird Hills Tech, a premier global digital marketing agency. High-intent Google Ads, Meta performance, and B2B lead generation.",
      sortOrder: 3,
      published: true,
    },
    {
      title: "Google Business Profile & Local SEO",
      slug: "google-business-profile-local-seo",
      category: "Local Dominance",
      icon: "MapPin",
      shortDesc: "Dominate Google Maps, local map pack results, and verified multi-location business authority.",
      fullDesc: "Capture local high-intent customers the moment they search for your services in your key commercial zones and target markets. We manage Google Business Profile verification, keyword optimization, local citation syndication, and review generation strategies.",
      featuresJson: JSON.stringify([
        "Google Business Profile Creation",
        "GBP Verification Assistance",
        "GBP Profile Optimization",
        "Google Maps Optimization",
        "Local SEO",
        "Local Keyword Optimization",
        "Review Management Strategy",
        "Local Citations",
        "GBP Posts & Content",
        "Multi-Location Management"
      ]),
      processJson: JSON.stringify([
        { step: "01", title: "GBP Audit & Verification", desc: "Resolving profile verification, category selection, and NAP consistency." },
        { step: "02", title: "Geo-Grid Analysis", desc: "Mapping ranking radius across key commercial districts." },
        { step: "03", title: "Local Citation Building", desc: "Submitting verified listings to authoritative business directories." },
        { step: "04", title: "Review & Content Sprints", desc: "Systematic review acquisition workflows and geo-targeted weekly updates." }
      ]),
      benefitsJson: JSON.stringify([
        "Top-3 Google Maps ranking across high-density commercial zones",
        "Immediate customer phone calls, driving directions, and website clicks",
        "Authoritative 5-star reputation that builds instant prospect trust"
      ]),
      seoTitle: "Google Business Profile Optimization & Local SEO | Bird Hills Tech",
      seoDescription: "Dominate Google Maps and local search. Expert GBP creation, verification assistance, local citations, and review management strategies.",
      sortOrder: 4,
      published: true,
    },
    {
      title: "AI SEO & Search",
      slug: "ai-seo-search",
      category: "Next-Gen Search",
      icon: "Search",
      shortDesc: "Answer Engine Optimization (AEO) and Generative Engine Optimization (GEO) for AI search dominance.",
      fullDesc: "Search has evolved beyond ten blue links. We optimize your brand to be recommended by AI answer engines including ChatGPT Search, Perplexity AI, Google AI Overviews, and Gemini. Combine technical SEO with semantic knowledge-graph optimization.",
      featuresJson: JSON.stringify([
        "Technical SEO",
        "On-Page SEO",
        "AEO — Answer Engine Optimization",
        "GEO — Generative Engine Optimization",
        "AI Search Optimization",
        "Semantic SEO",
        "Programmatic SEO",
        "AI Content Strategy",
        "SEO Automation"
      ]),
      processJson: JSON.stringify([
        { step: "01", title: "Semantic Knowledge Graph", desc: "Mapping entity relationships and industry authorities across web graphs." },
        { step: "02", title: "AEO / GEO Formatting", desc: "Structuring content for LLM citation, fact extraction, and answer snippets." },
        { step: "03", title: "Programmatic Scaling", desc: "Automating high-volume landing pages for granular long-tail intent." },
        { step: "04", title: "AI Citation Tracking", desc: "Monitoring brand recommendation frequency across Perplexity and Gemini." }
      ]),
      benefitsJson: JSON.stringify([
        "Direct citations and recommendations in ChatGPT, Gemini, and Perplexity",
        "First-mover advantage over competitors still relying solely on legacy SEO",
        "Long-term compound organic pipeline that scales without ad spend"
      ]),
      seoTitle: "AI SEO Agency | AEO & Generative Engine Optimization | Bird Hills Tech",
      seoDescription: "Dominate the new era of AI search. Bird Hills Tech specializes in AEO, GEO, semantic SEO, and technical search engine optimization.",
      sortOrder: 5,
      published: true,
    },
    {
      title: "AI Automation",
      slug: "ai-automation",
      category: "Automation",
      icon: "Bot",
      shortDesc: "Autonomous AI agents, conversational WhatsApp qualifiers, n8n workflows, and zero-touch business operations.",
      fullDesc: "Turn repetitive manual tasks into autonomous digital workers. We design custom AI agents, intelligent WhatsApp lead qualifiers, automated customer support bots, and robust n8n workflow pipelines that operate 24/7 without human intervention.",
      featuresJson: JSON.stringify([
        "AI Agents",
        "AI Chatbots",
        "AI Workflow Automation",
        "WhatsApp Automation",
        "AI Sales Automation",
        "AI Customer Support",
        "AI Lead Qualification",
        "AI Content Automation",
        "Business Process Automation",
        "n8n Automation"
      ]),
      processJson: JSON.stringify([
        { step: "01", title: "Workflow Friction Audit", desc: "Pinpointing manual bottlenecks where automation yields immediate hours saved." },
        { step: "02", title: "Architecture & Logic", desc: "Designing multi-step n8n logic, prompt guardrails, and secure API bridges." },
        { step: "03", title: "WhatsApp & CRM Sync", desc: "Deploying conversational AI with instant CRM lead dispatch." },
        { step: "04", title: "Testing & SLA Tuning", desc: "Live user testing, response latency optimization, and continuous monitoring." }
      ]),
      benefitsJson: JSON.stringify([
        "Instant sub-10-second response to customer inquiries 24 hours a day",
        "Elimination of hours spent on manual data entry and repetitive follow-ups",
        "Seamless integration with WhatsApp Cloud API, CRMs, and email systems"
      ]),
      seoTitle: "AI Automation & AI Agents | n8n & WhatsApp Automation | Bird Hills Tech",
      seoDescription: "Supercharge your business with AI agents, WhatsApp automation, and n8n workflows. Custom conversational bots and autonomous operations.",
      sortOrder: 6,
      published: true,
    },
    {
      title: "CRM & Marketing Automation",
      slug: "crm-marketing-automation",
      category: "Pipeline & Operations",
      icon: "Workflow",
      shortDesc: "Enterprise CRM setup, intelligent lead routing, automated WhatsApp/email cadences, and calendar booking.",
      fullDesc: "Never let another qualified lead slip through the cracks. We architect unified CRM ecosystems (HubSpot, Zoho, Salesforce, HighLevel) with automated lead distribution, personalized multi-channel follow-ups, and calendar booking pipelines.",
      featuresJson: JSON.stringify([
        "CRM Setup",
        "Lead Management",
        "Lead Automation",
        "Lead Routing",
        "Email Automation",
        "WhatsApp Automation",
        "Sales Pipeline Automation",
        "Appointment Automation",
        "CRM Integrations"
      ]),
      processJson: JSON.stringify([
        { step: "01", title: "Sales Journey Blueprint", desc: "Mapping customer touchpoints from initial ad click to signed contract." },
        { step: "02", title: "CRM Architecture", desc: "Custom pipeline stages, deal fields, user permissions, and notifications." },
        { step: "03", title: "Automated Cadences", desc: "Trigger-based email and WhatsApp workflows based on lead behavior." },
        { step: "04", title: "Team Enablement", desc: "Hands-on staff training and executive analytics dashboard configuration." }
      ]),
      benefitsJson: JSON.stringify([
        "3x faster lead response times, dramatically increasing close rates",
        "Zero lost leads with automated fail-safes and instant team notifications",
        "Clear visibility into rep performance and revenue pipeline health"
      ]),
      seoTitle: "CRM & Marketing Automation Services | Bird Hills Tech",
      seoDescription: "Transform your sales pipeline with CRM setup and marketing automation. Automated lead routing, WhatsApp workflows, and calendar booking.",
      sortOrder: 7,
      published: true,
    },
    {
      title: "Branding & Creative",
      slug: "branding-creative",
      category: "Creative",
      icon: "Sparkles",
      shortDesc: "Authoritative corporate brand identities, vector logo design, UI/UX systems, and high-converting creative assets.",
      fullDesc: "Stand out with undeniable prestige in competitive corporate landscapes. We craft authoritative brand identities, precision vector logos, comprehensive design systems, high-converting ad creative, and social media systems that command respect.",
      featuresJson: JSON.stringify([
        "Brand Identity",
        "Logo Design",
        "UI/UX Design",
        "Ad Creative",
        "Social Media Design",
        "Marketing Graphics"
      ]),
      processJson: JSON.stringify([
        { step: "01", title: "Brand Discovery", desc: "Defining market positioning, brand personality, and competitive difference." },
        { step: "02", title: "Concept Exploration", desc: "Vector logo sketching, typography pairing, and luxury color palettes." },
        { step: "03", title: "Design System Build", desc: "Creating comprehensive digital brand guidelines and asset libraries." },
        { step: "04", title: "Collateral Rollout", desc: "Applying the brand across digital ads, social templates, and stationery." }
      ]),
      benefitsJson: JSON.stringify([
        "Immediate corporate authority and trust in modern commercial landscapes",
        "Cohesive multi-channel visual system that enhances brand recall",
        "Premium aesthetic that positions your business to command higher fees"
      ]),
      seoTitle: "Branding Agency | Logo & Corporate Identity Design | Bird Hills Tech",
      seoDescription: "Elevate your business with prestigious corporate branding. Logo design, brand guidelines, UI/UX design, and digital marketing graphics.",
      sortOrder: 8,
      published: true,
    },
    {
      title: "Analytics & CRO",
      slug: "analytics-cro",
      category: "Data & Optimization",
      icon: "BarChart3",
      shortDesc: "Server-side Meta CAPI, Google Analytics 4, multi-touch attribution, and systematic conversion rate optimization.",
      fullDesc: "Make data-backed decisions that drive measurable revenue. We deploy server-side tracking, advanced Google Tag Manager containers, Meta Conversions API (CAPI), and continuous A/B conversion testing to turn more visitors into paying customers.",
      featuresJson: JSON.stringify([
        "Google Analytics",
        "Google Tag Manager",
        "Conversion Tracking",
        "Meta Pixel & CAPI",
        "Conversion Optimization",
        "Lead Attribution",
        "Marketing Dashboards",
        "Reporting & Analytics"
      ]),
      processJson: JSON.stringify([
        { step: "01", title: "Tracking Audit", desc: "Diagnosing broken events, duplicate triggers, and attribution gaps." },
        { step: "02", title: "Server-Side Setup", desc: "Deploying Meta CAPI and GTM Server containers for 100% data fidelity." },
        { step: "03", title: "CRO Hypotheses", desc: "Analyzing heatmaps, drop-off funnels, and formulating conversion tests." },
        { step: "04", title: "Executive Dashboards", desc: "Live Looker Studio reports showing exact cost-per-acquisition and ROI." }
      ]),
      benefitsJson: JSON.stringify([
        "100% accurate conversion data bypassing iOS and browser ad-blockers",
        "Higher ROAS on ad campaigns through algorithmic machine learning feeding",
        "Systematic lift in website conversion rates through proven A/B testing"
      ]),
      seoTitle: "Analytics & Conversion Rate Optimization (CRO) | Bird Hills Tech",
      seoDescription: "Maximize your marketing ROI with GA4, Meta CAPI, and CRO. Accurate attribution tracking, conversion testing, and executive reporting.",
      sortOrder: 9,
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

  // 4. Projects (Realistic Sample Case Studies clearly marked)
  const projectsData = [
    {
      title: "Gulf Trade Logistics Cloud Platform",
      slug: "gulf-trade-logistics",
      client: "Gulf Trade Solutions",
      industry: "Logistics & Supply Chain",
      category: "Web Applications",
      shortDesc: "Centralized logistics tracking web application replacing spreadsheets with live container milestone telemetry, automated customs docs, and client billing.",
      description: "A comprehensive digital transformation project replacing legacy email-based freight tracking with an ultra-responsive Next.js portal providing real-time cargo milestone updates, automated customs documentation, and unified client invoicing.",
      challenge: "The client managed over 4,000 monthly shipments using disconnected spreadsheets and manual phone calls, leading to communication bottlenecks and customer churn during peak international customs processing periods.",
      approach: "Bird Hills Tech conducted detailed workflow mapping to design a frictionless portal where clients can track consignments, upload clearing documents, and pay port charges in under 60 seconds.",
      solution: "Engineered a high-performance web platform powered by Next.js, PostgreSQL/SQLite, and real-time webhook notifications. Implemented bilingual document generation and SMS/WhatsApp alert dispatching.",
      results: "Cut shipment status inquiry calls by 68%, decreased customs clearance document validation times from 14 hours to 45 minutes, and improved on-time client payments by 34%.",
      servicesJson: JSON.stringify(["Web Development", "UI/UX Design", "Custom Web Application"]),
      techJson: JSON.stringify(["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "WhatsApp Cloud API"]),
      featured: true,
      status: "published",
      coverImage: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
      seoTitle: "Gulf Trade Logistics Cloud Platform | Bird Hills Tech Case Study",
      seoDescription: "Discover how Bird Hills Tech modernized logistics operations with a bespoke cloud portal and real-time tracking architecture.",
    },
    {
      title: "Aurora High Jewelry E-Commerce Experience",
      slug: "aurora-luxury-retail",
      client: "Aurora High Jewelry",
      industry: "Luxury Retail & High Jewelry",
      category: "E-commerce",
      shortDesc: "Bespoke digital boutique and VIP appointment booking experience with fluid page transitions for high jewelry.",
      description: "Crafting an ultra-luxury online flagship store showcasing one-of-a-kind gemstones, high jewelry collections, and an exclusive private salon consultation booking workflow.",
      challenge: "High jewelry clients expect tactile sophistication and absolute trust. Previous generic e-commerce templates failed to convey prestige, resulting in negligible online engagement for high-ticket pieces.",
      approach: "Designed a minimalist editorial aesthetic inspired by luxury Swiss watchmakers, integrating 360-degree gemstone viewers, custom carat filters, and direct WhatsApp VIP concierge routing.",
      solution: "Built a headless commerce architecture with fluid page transitions, integrated Apple Pay and global payment gateways, and launched an interactive private salon booking experience.",
      results: "Increased average order value by 140%, generated over 85 qualified private VIP salon consultations in the first quarter, and achieved a 99/100 Core Web Vitals performance score.",
      servicesJson: JSON.stringify(["E-commerce Solutions", "Branding & Creative", "UI/UX Design"]),
      techJson: JSON.stringify(["Next.js", "Shopify Storefront API", "Tailwind CSS", "Framer Motion", "Stripe"]),
      featured: true,
      status: "published",
      coverImage: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1200&q=80",
      seoTitle: "Aurora Luxury High Jewelry E-Commerce | Bird Hills Tech Case Study",
      seoDescription: "How Bird Hills Tech created an editorial luxury shopping experience and VIP concierge booking platform for high jewelry.",
    },
    {
      title: "Vertex Capital Corporate Portal & Investor Hub",
      slug: "vertex-capital-partners",
      client: "Vertex Capital Global",
      industry: "Financial Services & Private Equity",
      category: "UI/UX & Web",
      shortDesc: "Authoritative corporate portal and quarterly investor reporting dashboard for an international investment firm.",
      description: "A secure corporate web presence and investor portal designed to articulate investment strategy, display audited fund performances, and provide institutional investors with confidential document vaults.",
      challenge: "Vertex Capital required an institutional digital brand that matched their $250M AUM standing and satisfied strict compliance standards for investor document sharing.",
      approach: "Developed an executive visual language combining deep corporate navy, refined typography, and mathematical data visualizations for portfolio allocation and IRR trends.",
      solution: "Constructed an authenticated investor hub with role-based access control, cryptographic document watermarking, and dynamic portfolio analytics.",
      results: "Successfully supported the close of Fund II with over 40 LP institutional investors onboarded digitally within 30 days of launch.",
      servicesJson: JSON.stringify(["Web Applications", "UI/UX Design", "Branding & Creative"]),
      techJson: JSON.stringify(["Next.js", "React", "Tailwind CSS", "Prisma", "Chart.js", "Edge Auth"]),
      featured: true,
      status: "published",
      coverImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
      seoTitle: "Vertex Capital Investor Portal | Bird Hills Tech Case Study",
      seoDescription: "Examine the design and engineering of an institutional investment portal created by Bird Hills Tech for private equity leaders.",
    },
    {
      title: "NovaTech Global B2B Demand Engine",
      slug: "novatech-b2b-growth",
      client: "NovaTech Global",
      industry: "Enterprise SaaS & Cloud",
      category: "Growth & Marketing",
      shortDesc: "Integrated B2B acquisition campaign driving enterprise software demos across key regional and international markets.",
      description: "End-to-end performance marketing and SEO campaign targeting CIOs, CTOs, and IT directors across key enterprise sectors, supported by conversion-optimized landing pages.",
      challenge: "High cost-per-click on generic search terms and low conversion rates on technical whitepaper downloads were draining commercial marketing budgets without generating pipeline.",
      approach: "Restructured ad spend toward high-intent solution terms on Google Ads and hyper-targeted account-based advertising on LinkedIn, paired with interactive ROI calculators.",
      solution: "Created 12 dedicated industry landing pages with interactive ROI estimators, localized ad creatives, and direct calendar demo booking integrations.",
      results: "Decreased Cost Per Qualified Lead (CPQL) by 47%, generated 120+ verified enterprise software demos in 6 months, and secured 3 government tier-1 pilots.",
      servicesJson: JSON.stringify(["Digital Marketing", "SEO Solutions", "Web Development"]),
      techJson: JSON.stringify(["Google Ads", "LinkedIn Campaign Manager", "Next.js", "HubSpot CRM", "Google Analytics 4"]),
      featured: true,
      status: "published",
      coverImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
      seoTitle: "NovaTech B2B Growth Engine | Bird Hills Tech Case Study",
      seoDescription: "See how Bird Hills Tech scaled enterprise SaaS pipeline through data-driven search marketing and landing page optimization.",
    },
    {
      title: "Zenith Properties AI Concierge & PropTech Portal",
      slug: "zenith-real-estate-ai",
      client: "Zenith Living Global",
      industry: "Real Estate & Luxury PropTech",
      category: "AI & Web",
      shortDesc: "Custom Next.js property portal with interactive masterplans, 3D off-plan showcase, and automated 24/7 WhatsApp lead qualification for international buyers.",
      description: "An intelligent conversational agent deployed on the web and WhatsApp that engages international property buyers, answers project availability queries, and schedules showroom viewings.",
      challenge: "Real estate inquiries arrived around the clock from international time zones. Sales agents took an average of 4.5 hours to respond, by which time prime buyer interest had waned.",
      approach: "Built a customized conversational agent trained on Zenith's luxury project brochures, floor plans, payment schedules, and international buyer qualification criteria.",
      solution: "Integrated the assistant directly into the web floating widget and WhatsApp Business API with real-time CRM lead routing and automated Google Meet calendar scheduling.",
      results: "Response time reduced from 4.5 hours to 3 seconds. The assistant qualified 410+ serious leads with budget above $800,000 in 90 days, closing 12 off-plan property sales.",
      servicesJson: JSON.stringify(["AI Automation", "Web Development", "PropTech Portal", "WhatsApp API"]),
      techJson: JSON.stringify(["Next.js", "Node.js", "OpenAI / Claude API", "WhatsApp Business API", "PostgreSQL"]),
      featured: true,
      status: "published",
      coverImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      seoTitle: "Zenith Real Estate AI Concierge & PropTech Portal | Bird Hills Tech",
      seoDescription: "Explore how Bird Hills Tech built an intelligent 24/7 AI lead qualification assistant and PropTech portal for luxury international real estate developments.",
    },
    {
      title: "Falcon Industrial Infrastructure Identity",
      slug: "falcon-engineering-rebrand",
      client: "Falcon Infrastructure Group",
      industry: "Industrial & Civil Contracting",
      category: "Branding & Web",
      shortDesc: "Modern corporate rebranding and responsive tender documentation system for an established engineering firm.",
      description: "Complete visual reinvention for an established civil engineering contractor, modernizing their market image to compete for major municipal and infrastructure tenders.",
      challenge: "Despite extensive engineering credentials, the company's outdated brand identity caused them to appear behind younger international competitors in municipal bids.",
      approach: "Engineered an authoritative, geometric brand symbol representing precision engineering and resilience, paired with an executive typography system.",
      solution: "Delivered comprehensive identity guidelines, tender presentation templates, branded site safety gear, vehicle fleet livery, and a sleek responsive corporate website.",
      results: "The refreshed brand supported winning 2 major municipal infrastructure tenders valued over $22M within the first 6 months of rollout.",
      servicesJson: JSON.stringify(["Branding & Creative", "UI/UX Design", "Web Development"]),
      techJson: JSON.stringify(["Figma", "Adobe Illustrator", "Next.js", "Tailwind CSS"]),
      featured: true,
      status: "published",
      coverImage: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80",
      seoTitle: "Falcon Engineering Corporate Rebrand | Bird Hills Tech Case Study",
      seoDescription: "How Bird Hills Tech repositioned a leading civil contractor with an authoritative corporate identity and tender presentation system.",
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
    update: { name: "Growth & Marketing", description: "B2B performance acquisition, SEO, and commercial conversion strategies for high-growth enterprises." },
    create: { name: "Growth & Marketing", slug: "growth", description: "B2B performance acquisition, SEO, and commercial conversion strategies for high-growth enterprises." }
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
      title: "The 2026 Guide to Next.js Web Development for Modern Enterprises",
      slug: "modern-enterprise-web-development-2026",
      categoryId: catTech.id,
      author: "Bird Hills Tech Engineering Team",
      readTime: "7 min read",
      coverImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
      excerpt: "Why slow legacy templates are costing modern businesses millions, and how high-performance Next.js architectures deliver sub-second page loads and higher conversions.",
      status: "published",
      seoTitle: "Next.js Web Development in 2026 | Enterprise Guide | Bird Hills Tech",
      seoDescription: "Discover how Next.js 16, sub-second Core Web Vitals, and headless architectures help modern enterprises outperform competitors in speed and conversion.",
      content: `## The Modern Web Standard for Enterprises

The global commercial market moves fast. Whether your company operates in major financial centers or global tech hubs, prospective clients evaluate your operational credibility in seconds based entirely on digital performance.

If a corporate website takes 3 to 5 seconds to load on mobile or lags when navigating portfolios, visitors leave. In today's competitive corporate landscape, technical friction directly burns marketing budget.

---

### 1. Speed Is a Direct Credibility Signal

Google's Core Web Vitals are clear: users form lasting impressions within the first 400 milliseconds. When an enterprise platform loads instantly:

* **Sub-0.8s Largest Contentful Paint (LCP)** keeps high-intent prospects engaged rather than bouncing back to search engines.
* **Zero Cumulative Layout Shift (CLS)** ensures interactive elements don't jump around as images load.
* **Server-Side Rendering (SSR)** serves pre-rendered HTML from global edge caches with sub-second latency.

Traditional WordPress templates rely on dozens of unoptimized plugins, external scripts, and bloated database queries. Modern engineering with **Next.js and TypeScript** compiles pages into lean, optimized code with zero runtime bloat.

---

### 2. Localization & Global Payment Rails

Operating successfully in international markets requires more than translating text. A truly localized digital presence demands:

* **Multilingual & RTL Layouts**: Proper bidirectional CSS typography, preserving editorial elegance in both Latin and Right-to-Left scripts.
* **Global Payment Gateways**: Smooth integration with Apple Pay, Stripe, PayPal, and regional buy-now-pay-later services.
* **Corporate Compliance**: Aligning with global data protection standards (GDPR, SOC2) and hosting sensitive client records securely.

---

### 3. Full Source Code & IP Ownership

One of the biggest pain points growing businesses face is vendor lock-in. Many traditional agencies build on closed proprietary platforms or withhold admin rights, forcing clients into perpetual licensing fees.

At Bird Hills Tech, we work differently. We build on open, modern web standards and transfer **100% intellectual property, design assets, and Git repositories** directly to your team upon milestone completion. You own your code, forever.`
    },
    {
      title: "Why Top Real Estate Brokers Are Building Custom PropTech Portals",
      slug: "real-estate-proptech-lead-generation",
      categoryId: catTech.id,
      author: "Bird Hills Tech PropTech Squad",
      readTime: "6 min read",
      coverImage: "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=1200&q=80",
      excerpt: "Relying solely on aggregator portals is cutting developer and brokerage margins. Here is how custom web platforms and WhatsApp automation cut lead costs by 45%.",
      status: "published",
      seoTitle: "Real Estate Web Development & PropTech Lead Portals | Bird Hills Tech",
      seoDescription: "Learn how modern real estate brokerages and developers capture direct buyer leads with custom web portals, interactive masterplans, and WhatsApp automation.",
      content: `## The Problem with Portal Dependency in Real Estate

The real estate market is moving faster than ever. Yet, many brokerages face shrinking profit margins because they rely almost entirely on aggregator portals.

When every broker posts the exact same project on the same portals, price wars and portal ad bidding eat up commissions. The smartest developers and top-tier brokerages are shifting strategy: they build **direct-to-consumer digital portals**.

---

### 1. The Value of Owning the First-Party Relationship

A dedicated PropTech web platform gives you complete control over the buyer's journey:

* **Interactive Masterplans & Floorplan Explorers**: Buyers can filter by payment plan, square footage, and view corridors without external distractions or competing ads.
* **Investment & Yield Calculators**: Embedded financial tools that show international investors ROI, capital appreciation, and payment schedules.
* **Direct VIP Showroom Scheduling**: Synchronized with your sales team's Google Calendar and Microsoft 365 in real time.

---

### 2. Instant WhatsApp Qualification (Sub-5-Second Response)

International property investors browse projects across different time zones at all hours. If an inquiry sits in an email inbox for 4 hours, the lead goes cold.

By integrating automated WhatsApp Cloud API qualifiers:
1. The visitor taps "Request Brochure & Floorplan" on your custom web portal.
2. An automated WhatsApp message arrives in 3 seconds with the requested PDF.
3. The system asks two qualifying questions: *"What is your target investment budget?"* and *"Are you looking for personal living or investment yield?"*
4. Serious leads are immediately routed to a senior broker on duty with full contact context.

Brokers using this setup report a **45% reduction in Cost Per Qualified Lead (CPQL)** compared to generic portal ads.`
    },
    {
      title: "How Businesses Win the Google Maps 3-Pack: A Local SEO Playbook",
      slug: "google-business-profile-local-seo-playbook",
      categoryId: catGrowth.id,
      author: "Bird Hills Tech SEO Practice",
      readTime: "8 min read",
      coverImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
      excerpt: "An actionable, field-tested guide to ranking in the top 3 on Google Maps, resolving verification roadblocks, and capturing local high-intent customers.",
      status: "published",
      seoTitle: "Google Maps Local SEO Playbook | Rank in the 3-Pack | Bird Hills Tech",
      seoDescription: "Field-tested local SEO strategies for modern businesses. Master Google Business Profile optimization, local citations, and Google Maps rankings.",
      content: `## Local Search Is Where High-Intent Deals Start

When prospective customers look for corporate services, specialized healthcare, premium rentals, or commercial contractors, they don't browse page three of Google. They look at the **Google Maps 3-Pack** right on their phones.

Being in the top 3 on Google Maps means receiving direct phone calls, messages, and website visits every single day without paying per click.

---

### 1. Exact Commercial Name & NAP Alignment

Google uses strict trust verification algorithms. Discrepancies between your legal registered entity and your online profiles will suppress your rankings.

* **Name**: Use your legal registered business name. Do not stuff keyword spam into your primary business title (Google penalizes this with suspensions).
* **Address**: Use accurate commercial building and street address details. Avoid P.O. Box only listings.
* **Phone**: Use a verified dedicated business telephone line that matches your official website footer and commercial directory listings.

---

### 2. Geo-Grid Optimization Across Key Commercial Zones

Ranking in one specific commercial district does not automatically mean you rank across neighboring metro sectors.

To expand your ranking radius across all high-density commercial hubs:
* Build dedicated location-specific landing pages on your website with unique schema markup.
* Syndicate verified citations across trusted commercial business directories.
* Systematically collect genuine customer reviews mentioning specific services and locations.`
    },
    {
      title: "Beyond Generic Chatbots: Real AI Automation for Enterprises in 2026",
      slug: "practical-ai-integrations-for-enterprises",
      categoryId: catAI.id,
      author: "Bird Hills Tech AI Practice",
      readTime: "6 min read",
      coverImage: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80",
      excerpt: "Moving past scripted FAQ bots: how forward-thinking firms use autonomous LLM agents and n8n workflows to automate repetitive operational bottlenecks.",
      status: "published",
      seoTitle: "Enterprise AI Automation & WhatsApp Agents | Bird Hills Tech",
      seoDescription: "Discover how real AI agents, n8n automated pipelines, and private knowledge retrieval (RAG) eliminate manual administrative overhead for modern companies.",
      content: `## The Death of Scripted Chatbots

We have all experienced frustrating, rigid chatbots that output *"Sorry, I didn't understand that. Please choose from 1 to 5."* These legacy bots damage brand prestige and frustrate high-value clients.

In 2026, enterprise AI looks completely different. With modern Large Language Models and workflow automation platforms like **n8n**, companies can deploy autonomous digital agents that think, reason, and execute tasks with human-level context.

---

### 1. 24/7 Multilingual WhatsApp Lead Qualification

Across global markets, messaging is rapidly becoming the primary channel for business communication.

A custom AI agent connected directly to your official WhatsApp Business Cloud API can:
* Read and respond fluently in English, Arabic, French, Spanish, and 80+ international languages.
* Parse incoming customer requirements, answer technical scope questions from your approved company knowledge base, and collect verified contact details.
* Automatically create a new deal in **HubSpot**, **Salesforce**, or **Zoho CRM**, tag the acquisition source, and alert your sales team.

---

### 2. Private Internal Knowledge Assistants (RAG)

For law firms, engineering consultancies, and enterprise operators, senior executives spend up to 25% of their working hours searching through past tenders, PDF contracts, and internal standard operating procedures (SOPs).

By deploying a **Private Retrieval-Augmented Generation (RAG)** pipeline:
* Your internal documents are encrypted and indexed into a secure vector database.
* Staff can ask complex questions in plain language: *"What was our agreed payment milestone structure for the 2024 enterprise logistics contract?"*
* The assistant replies in 2 seconds with exact source citations and page numbers, keeping all data strictly private and confidential within your cloud boundary.`
    },
    {
      title: "B2B Customer Acquisition: Google Search, LinkedIn, and Closed-Loop Revenue",
      slug: "b2b-digital-growth-engine",
      categoryId: catGrowth.id,
      author: "Bird Hills Tech Growth Team",
      readTime: "7 min read",
      coverImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
      excerpt: "Why vanity impressions mean nothing without closed deals, and how serious B2B companies structure paid search and LinkedIn demand generation.",
      status: "published",
      seoTitle: "B2B Demand Generation & Performance Marketing | Bird Hills Tech",
      seoDescription: "Learn how B2B companies build high-converting customer acquisition pipelines with Google Ads, LinkedIn ABM, and closed-loop revenue tracking.",
      content: `## Stop Paying for Vanity Clicks

Every marketing agency can show you fancy charts with impressions, clicks, and pageviews. But when commercial directors review financial reports at month-end, the only question that matters is: **How much qualified revenue pipeline did our marketing spend produce?**

In the B2B sector, consumer-style marketing tactics fail. Decision-makers in corporate procurement, IT infrastructure, and civil contracting don't buy on impulse.

---

### 1. High-Intent Commercial Search Over Broad Keywords

If you bid on generic keywords like *"software company"* or *"consulting firm"*, you will burn thousands of dollars on irrelevant consumer traffic and students looking for jobs.

Instead, precision B2B search focuses exclusively on **high-intent, decision-stage queries**:
* *"Enterprise ERP implementation partner"*
* *"Healthcare compliance management software"*
* *"Commercial infrastructure engineering contractors"*

Pairing these exact queries with custom Next.js landing pages built for one specific service increases conversion rates from the typical 1.5% industry average to over 6.8%.

---

### 2. Account-Based Marketing (ABM) on LinkedIn

LinkedIn is where global business leaders operate daily. Rather than running broad sponsored posts to millions of users, Account-Based Marketing allows us to:

* Build a matched list of target corporate accounts across key industries.
* Filter strictly by seniority: Managing Directors, C-Level Executives, and Procurement Heads.
* Deliver tailored case studies addressing their industry's exact operational bottlenecks.

---

### 3. Closed-Loop CRM Attribution

Never accept an ad report that only tracks *"leads"* without knowing what happened to them. 

By integrating **server-side tracking (Meta CAPI, Google Enhanced Conversions)** directly with your CRM, every dollar of marketing spend is connected to actual closed contracts, Customer Acquisition Cost (CAC), and Customer Lifetime Value (LTV).`
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
      quote: "Bird Hills Tech brought an exceptional level of technical rigor and brand clarity to our platform. Their understanding of fast-paced business execution made collaboration seamless and results immediate.",
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

  // 7. Comprehensive Marketing-Ready FAQs
  const faqsData = [
    {
      question: "What core services does Bird Hills Tech provide?",
      answer: "Bird Hills Tech is positioned at the intersection of Technology, Creative Strategy, and Digital Growth. We engineer custom Next.js web applications, provide accredited domain registration and pure NVMe global cloud hosting, execute performance digital marketing and local SEO, and build autonomous AI agents with WhatsApp automations.",
      category: "General",
      sortOrder: 1,
      active: true
    },
    {
      question: "Where is your team located, and can we meet in person?",
      answer: "Our operations coordinate global client deliveries and technical projects worldwide (+971 52 440 5785). We welcome clients for video strategy sessions or in-person consultations at our headquarters and corporate client offices.",
      category: "General",
      sortOrder: 2,
      active: true
    },
    {
      question: "Do we retain 100% intellectual property and source code ownership?",
      answer: "Yes, 100%. We operate with a strict zero-vendor-lock-in philosophy. Upon final milestone completion, full source code repositories (Git), database models, Figma design systems, and deployment keys are transferred permanently to your company.",
      category: "General",
      sortOrder: 3,
      active: true
    },
    {
      question: "Why choose custom Next.js development over off-the-shelf WordPress themes?",
      answer: "Next.js 16 delivers sub-second page loads (< 0.8s LCP), enterprise data security, and zero plugin dependencies. In competitive markets, slow corporate websites lose high-intent clients within 3 seconds. Custom code compiles cleanly, scales infinitely, and avoids ongoing plugin vulnerabilities.",
      category: "Web Development",
      sortOrder: 4,
      active: true
    },
    {
      question: "Do your web platforms support native Arabic Right-to-Left (RTL) localization?",
      answer: "Yes. All our digital platforms support true bidirectional RTL/LTR typography, localized UI component hierarchies, and bilingual English/Arabic content switching designed to command prestige across international markets.",
      category: "Web Development",
      sortOrder: 5,
      active: true
    },
    {
      question: "Can you integrate global and regional payment gateways like Stripe, Apple Pay, and local methods?",
      answer: "Yes. We regularly integrate seamless checkout flows with Stripe, Apple Pay, Google Pay, PayPal, and popular regional buy-now-pay-later services (Tabby, Tamara).",
      category: "Web Development",
      sortOrder: 6,
      active: true
    },
    {
      question: "How do your digital marketing and SEO services drive actual commercial ROI?",
      answer: "Unlike traditional agencies reporting superficial clicks and impressions, our growth practice tracks closed-loop commercial pipeline. We focus on high-intent commercial search queries on Google and B2B decision-makers on LinkedIn, tying every dollar directly to qualified CRM opportunities and Customer Acquisition Cost (CAC) targets.",
      category: "Digital Marketing & SEO",
      sortOrder: 7,
      active: true
    },
    {
      question: "How do you help businesses rank #1 on Google Maps in target markets?",
      answer: "We resolve commercial entity verification roadblocks, execute geo-grid ranking expansion across key commercial zones, syndicate citations on authoritative business directories, and establish structured review acquisition systems.",
      category: "Digital Marketing & SEO",
      sortOrder: 8,
      active: true
    },
    {
      question: "What is AI Search Optimization (AEO & GEO)?",
      answer: "Search is evolving into conversational answer engines. We optimize your corporate website knowledge graph, schema markup, and entity authority so AI engines like ChatGPT Search, Perplexity AI, Google AI Overviews, and Gemini directly recommend and quote your company.",
      category: "Digital Marketing & SEO",
      sortOrder: 9,
      active: true
    },
    {
      question: "Where are your web hosting cloud nodes physically located?",
      answer: "Our primary edge infrastructure is deployed in Tier-3/Tier-4 enterprise data centres, paired with global Cloudflare edge caching to ensure ultra-low regional latency across worldwide metropolitan areas.",
      category: "Hosting & Cloud",
      sortOrder: 10,
      active: true
    },
    {
      question: "What are the requirements for registering an official domain?",
      answer: "Official domains can be registered by any local or international entity or individual. There are no restrictive presence requirements for standard registrations, allowing instant activation and DNS propagation.",
      category: "Hosting & Cloud",
      sortOrder: 11,
      active: true
    },
    {
      question: "How does your Free Zero-Downtime Website Migration work?",
      answer: "Our senior DevOps team replicates your databases, files, SSL certificates, and email inboxes to our pure NVMe edge cloud, verifies everything on a private staging URL, and updates DNS records with zero lost emails and zero website downtime.",
      category: "Hosting & Cloud",
      sortOrder: 12,
      active: true
    },
    {
      question: "How do your AI WhatsApp agents qualify leads automatically?",
      answer: "Connected to your official WhatsApp Business Cloud API, our autonomous agents engage inbound prospects in under 3 seconds in English and Arabic. They answer technical queries from your approved knowledge base, verify budget and project timelines, and route qualified deals directly to your CRM.",
      category: "AI Automation",
      sortOrder: 13,
      active: true
    },
    {
      question: "Can you automate internal business processes with n8n and CRM systems?",
      answer: "Yes. We build end-to-end automated pipelines that synchronize lead forms, generate PDF proposals, trigger WhatsApp alerts, and update deals across HubSpot, Zoho, Salesforce, or Google Sheets without manual human intervention.",
      category: "AI Automation",
      sortOrder: 14,
      active: true
    },
    {
      question: "What payment methods and currencies are accepted?",
      answer: "All pricing is quoted in US Dollars (USD). We accept corporate bank transfers, international SWIFT wires, credit cards, and Stripe invoices with structured milestone sign-offs.",
      category: "Pricing & Terms",
      sortOrder: 15,
      active: true
    },
    {
      question: "What is your typical project payment schedule?",
      answer: "Standard fixed-price projects follow a clear 3-stage milestone: 50% upon project kickoff and architecture sign-off, 25% upon interactive staging review, and 25% upon final QA testing and production deployment.",
      category: "Pricing & Terms",
      sortOrder: 16,
      active: true
    },
    {
      question: "What post-launch SLA and technical warranty do you provide?",
      answer: "Every custom web platform includes 30 to 90 days of comprehensive post-launch warranty covering bug resolution, performance monitoring, and security patching. We also offer dedicated monthly SLA retainers with 15-minute emergency response times.",
      category: "Pricing & Terms",
      sortOrder: 17,
      active: true
    },
    {
      question: "How quickly can your team begin discovery on our project?",
      answer: "We can initiate technical discovery within 24 to 48 hours of agreement. Schedule a consultation directly through our website scheduler or message our partners on WhatsApp at +971 52 440 5785 to get started immediately.",
      category: "General",
      sortOrder: 18,
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
      budget: "$15,000 - $30,000",
      message: "Looking to build a private investor portal for our family office.",
      source: "Contact Form",
      status: "Qualified",
      notes: "Followed up via phone. Meeting scheduled for next Tuesday."
    },
    {
      name: "Sarah Jenkins",
      company: "Lumiere Health Clinic",
      email: "sarah@lumiereskin.com",
      phone: "+971 55 987 6543",
      service: "Digital Marketing",
      budget: "$7,500 - $15,000",
      message: "Need Google Ads and SEO to increase monthly consultations.",
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
    timeSlot: "11:00 AM - 11:45 AM (UTC / Global Hours)",
    message: "Discussing our global e-commerce platform transition.",
    status: "Confirmed",
    notes: "Video meeting link sent via email."
  };

  const existingBooking = await prisma.booking.findFirst({ where: { email: sampleBooking.email } });
  if (!existingBooking) {
    await prisma.booking.create({ data: sampleBooking });
  }

  // 10. Pricing Packages
  const pricingTiersData = [
    {
      name: "Growth Launchpad",
      slug: "growth-launchpad",
      badge: "SMEs & Fast Launch",
      description: "Custom high-speed corporate web platform built on Next.js with CMS integration, SEO readiness, and conversion architecture.",
      priceAed: "$1,250",
      priceUsd: "$1,250",
      billingType: "one-time",
      deliveryTime: "2-3 Weeks Delivery",
      popular: false,
      sortOrder: 1,
      active: true,
      featuresJson: JSON.stringify([
        "Custom Next.js & TypeScript Architecture",
        "Sub-second Core Web Vitals (< 0.8s LCP)",
        "Mobile-First Responsive Design",
        "Integrated Headless Content Management (CMS)",
        "Technical SEO & Google Indexing Schema",
        "Lead Capture & Contact Pipeline Integration",
        "30 Days Dedicated Post-Launch Support",
        "100% Full IP & Source Code Ownership"
      ]),
    },
    {
      name: "Corporate Pro & SaaS",
      slug: "corporate-pro",
      badge: "Most Popular",
      description: "Enterprise web application or custom digital portal with advanced database modeling, role-based workflows, and global integrations.",
      priceAed: "$2,600",
      priceUsd: "$2,600",
      billingType: "one-time",
      deliveryTime: "4-5 Weeks Delivery",
      popular: true,
      sortOrder: 2,
      active: true,
      featuresJson: JSON.stringify([
        "Everything in Growth Launchpad",
        "Custom Web App or Customer Portal",
        "Role-Based Access Control (RBAC) & Auth",
        "Payment Gateway (Stripe / Apple Pay / Global)",
        "Custom ERP, CRM & API Integrations",
        "Bilingual Localization (English + Arabic RTL)",
        "Zero-Trust Security & Latency Profiling",
        "90 Days SLA Technical Warranty"
      ]),
    },
    {
      name: "Bespoke Enterprise",
      slug: "bespoke-enterprise",
      badge: "Enterprises & FinTech",
      description: "Tailored multi-platform digital ecosystem designed for international family offices, corporate enterprises, and high-security operations.",
      priceAed: "From $5,000",
      priceUsd: "From $5,000",
      billingType: "one-time",
      deliveryTime: "6-8 Weeks Delivery",
      popular: false,
      sortOrder: 3,
      active: true,
      featuresJson: JSON.stringify([
        "Full Custom Architecture & Multi-Tenant Setup",
        "Dedicated Product Squad & Technical Lead",
        "Private AI Agent & Workflow Automation",
        "High-Concurrency Microservices & Cloud Infrastructure",
        "Enterprise Penetration Testing & Compliance",
        "Custom Analytics & Attribution Dashboard",
        "Direct Director-Level Advisory & Steering",
        "Annual SLA with 24/7 Incident Escalation"
      ]),
    },
  ];

  for (const tier of pricingTiersData) {
    const existing = await prisma.pricingTier.findUnique({ where: { slug: tier.slug } });
    if (existing) {
      await prisma.pricingTier.update({ where: { id: existing.id }, data: tier });
    } else {
      await prisma.pricingTier.create({ data: tier });
    }
  }

  // 7. Seed Hosting and Domain Plans
  const hostingPlansData = [
    {
      name: "Starter Cloud Hosting",
      slug: "cloud-starter",
      category: "cloud",
      priceUsd: "$9.99",
      billingCycle: "/ month",
      badge: "Fast SME Launch",
      description: "Ideal for personal brands, small corporate portfolios, and early-stage startups needing high speed.",
      storage: "25 GB NVMe SSD",
      bandwidth: "Unmetered Bandwidth",
      popular: false,
      sortOrder: 1,
      active: true,
      featuresJson: JSON.stringify([
        "1 High-Speed Website",
        "25 GB Enterprise NVMe SSD Storage",
        "Unmetered Monthly Bandwidth",
        "Free Automatic Let's Encrypt SSL",
        "10 Corporate Email Accounts",
        "Global Edge CDN Caching",
        "Weekly Automated Backups",
        "99.9% Uptime Network SLA"
      ]),
    },
    {
      name: "Business Pro Cloud",
      slug: "cloud-business",
      category: "cloud",
      priceUsd: "$24.99",
      billingCycle: "/ month",
      badge: "Most Popular",
      description: "Comprehensive cloud hosting for growing businesses, e-commerce stores, and high-traffic portals.",
      storage: "100 GB NVMe SSD",
      bandwidth: "Unmetered Bandwidth",
      popular: true,
      sortOrder: 2,
      active: true,
      featuresJson: JSON.stringify([
        "Unlimited Hosted Websites",
        "100 GB Ultra-Fast NVMe SSD Storage",
        "Free Domain Name (.com) for 1st Year",
        "Free Wildcard SSL & Dedicated IP Support",
        "Unlimited Professional Email Inboxes",
        "Global Edge Cloud Node Acceleration",
        "Daily Automated Off-Site Backups",
        "1-Click Staging & Git Deployment Hub",
        "24/7 Priority Emergency Support"
      ]),
    },
    {
      name: "Managed Cloud VPS",
      slug: "managed-vps",
      category: "vps",
      priceUsd: "$59.99",
      billingCycle: "/ month",
      badge: "Dedicated Resources",
      description: "Isolated virtual private server for SaaS applications, custom databases, and heavy APIs.",
      storage: "250 GB NVMe Storage",
      bandwidth: "10 TB Premium Traffic",
      popular: false,
      sortOrder: 3,
      active: true,
      featuresJson: JSON.stringify([
        "4 vCPU Dedicated Compute Cores",
        "16 GB High-Speed RAM",
        "250 GB Pure NVMe RAID-10 Storage",
        "Dedicated Clean IPv4 & IPv6 Addresses",
        "Full Root & SSH Terminal Access",
        "Next.js, Node.js, Docker & Python Ready",
        "Enterprise DDoS Shield (100 Gbps+)",
        "Daily Real-Time Snapshots & Rollbacks",
        "Dedicated DevOps Technical Account Lead"
      ]),
    },
    {
      name: "Enterprise Dedicated Server",
      slug: "enterprise-dedicated",
      category: "dedicated",
      priceUsd: "$149.99",
      billingCycle: "/ month",
      badge: "Maximum Power",
      description: "Mission-critical bare-metal infrastructure for financial services, institutions, and high-security compliance.",
      storage: "1 TB NVMe RAID-1",
      bandwidth: "Unmetered 10 Gbps Port",
      popular: false,
      sortOrder: 4,
      active: true,
      featuresJson: JSON.stringify([
        "16 vCPU Cores / 32 Threads Bare-Metal",
        "64 GB ECC Server Memory",
        "1 TB Enterprise NVMe Dual Mirror Array",
        "Unmetered 10 Gbps Low-Latency Uplink",
        "Hardware Firewall & Custom IDS/IPS",
        "Enterprise Global Data Compliance & SOC2-Ready",
        "24/7 Proactive Hardware Monitoring",
        "15-Minute Guaranteed Critical SLA Response"
      ]),
    },
  ];

  for (const plan of hostingPlansData) {
    const existing = await prisma.hostingPlan.findUnique({ where: { slug: plan.slug } });
    if (existing) {
      await prisma.hostingPlan.update({ where: { id: existing.id }, data: plan });
    } else {
      await prisma.hostingPlan.create({ data: plan });
    }
  }

  console.log("Database seed completed successfully with USD Pricing & Hosting plans!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
