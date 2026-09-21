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

  // 3. Official 9 Services Suite & Sub-Services Tree
  const servicesData = [
    {
      title: "Web Development",
      slug: "web-development",
      category: "Technology",
      icon: "Code2",
      shortDesc: "Custom business websites, Next.js web applications, and high-performance digital platforms.",
      fullDesc: "Enterprise-grade web development engineered for market leaders in Dubai and the GCC. From custom business websites to headless e-commerce, custom web apps, and full redesigns, we build for sub-second page loads, zero technical debt, and maximum conversion.",
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
        "Sub-second Core Web Vitals (< 0.8s LCP) driving higher conversions",
        "Future-proof scalability without proprietary software lock-in",
        "100% full intellectual property and source code ownership"
      ]),
      seoTitle: "Web Development Company in Dubai | Custom Websites & Platforms | Bird Hills Tech",
      seoDescription: "Award-caliber web development in Dubai. Bird Hills Tech crafts ultra-fast business websites, WordPress, custom platforms, and e-commerce.",
      sortOrder: 1,
      published: true,
    },
    {
      title: "Domain & Hosting",
      slug: "domain-hosting",
      category: "Infrastructure",
      icon: "Server",
      shortDesc: "Official .ae accredited registry, NVMe cloud hosting, enterprise email, and zero-downtime migrations.",
      fullDesc: "Mission-critical cloud infrastructure and domain registry services. We provide high-speed NVMe storage, sub-15ms GCC latency, bank-grade DNSSEC security, branded business email inboxes, and free 24/7 white-glove website migration.",
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
        "Sub-15ms local latency across the UAE and GCC region",
        "99.99% network uptime SLA guarantee backed by local Dubai nodes",
        "Zero-downtime migration guarantee signed by senior cloud engineers"
      ]),
      seoTitle: "Cloud Web Hosting & .ae Domain Registrar Dubai | Bird Hills Tech",
      seoDescription: "High-speed NVMe cloud hosting, official .ae domain registration, managed VPS, and enterprise business email in Dubai with zero-downtime migration.",
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
      seoTitle: "Digital Marketing Agency Dubai | Performance Marketing & PPC | Bird Hills Tech",
      seoDescription: "Scale your revenue with Bird Hills Tech, a premier digital marketing agency in Dubai. High-intent Google Ads, Meta performance, and B2B lead generation.",
      sortOrder: 3,
      published: true,
    },
    {
      title: "Google Business Profile & Local SEO",
      slug: "google-business-profile-local-seo",
      category: "Local Dominance",
      icon: "MapPin",
      shortDesc: "Dominate Google Maps, local Dubai map pack results, and verified multi-location business authority.",
      fullDesc: "Capture local high-intent customers the moment they search for your services in Dubai, Abu Dhabi, and across the UAE. We manage Google Business Profile verification, keyword optimization, local citation syndication, and review generation strategies.",
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
        { step: "02", title: "Geo-Grid Analysis", desc: "Mapping ranking radius across key Dubai commercial districts." },
        { step: "03", title: "Local Citation Building", desc: "Submitting verified listings to authoritative UAE business directories." },
        { step: "04", title: "Review & Content Sprints", desc: "Systematic review acquisition workflows and geo-targeted weekly updates." }
      ]),
      benefitsJson: JSON.stringify([
        "Top-3 Google Maps ranking across high-density Dubai commercial zones",
        "Immediate customer phone calls, driving directions, and website clicks",
        "Authoritative 5-star reputation that builds instant prospect trust"
      ]),
      seoTitle: "Google Business Profile Optimization & Local SEO Dubai | Bird Hills Tech",
      seoDescription: "Dominate Google Maps and local search in Dubai. Expert GBP creation, verification assistance, local citations, and review management strategies.",
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
      seoTitle: "AI SEO Agency Dubai | AEO & Generative Engine Optimization | Bird Hills Tech",
      seoDescription: "Dominate the new era of AI search. Bird Hills Tech specializes in AEO, GEO, semantic SEO, and technical search engine optimization in Dubai.",
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
      seoTitle: "AI Automation & AI Agents Dubai | n8n & WhatsApp Automation | Bird Hills Tech",
      seoDescription: "Supercharge your business with AI agents, WhatsApp automation, and n8n workflows in Dubai. Custom conversational bots and autonomous operations.",
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
      seoTitle: "CRM & Marketing Automation Services Dubai | Bird Hills Tech",
      seoDescription: "Transform your sales pipeline with CRM setup and marketing automation in Dubai. Automated lead routing, WhatsApp workflows, and calendar booking.",
      sortOrder: 7,
      published: true,
    },
    {
      title: "Branding & Creative",
      slug: "branding-creative",
      category: "Creative",
      icon: "Sparkles",
      shortDesc: "Authoritative corporate brand identities, vector logo design, UI/UX systems, and high-converting creative assets.",
      fullDesc: "Stand out with undeniable prestige in Dubai's competitive corporate landscape. We craft authoritative brand identities, precision vector logos, comprehensive design systems, high-converting ad creative, and social media systems that command respect.",
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
        "Immediate corporate authority and trust in the Dubai and Gulf business landscape",
        "Cohesive multi-channel visual system that enhances brand recall",
        "Premium aesthetic that positions your business to command higher fees"
      ]),
      seoTitle: "Branding Agency Dubai | Logo & Corporate Identity Design | Bird Hills Tech",
      seoDescription: "Elevate your business with prestigious corporate branding in Dubai. Logo design, brand guidelines, UI/UX design, and digital marketing graphics.",
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
      seoTitle: "Analytics & Conversion Rate Optimization (CRO) Dubai | Bird Hills Tech",
      seoDescription: "Maximize your marketing ROI with GA4, Meta CAPI, and CRO in Dubai. Accurate attribution tracking, conversion testing, and executive reporting.",
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

  // 10. Pricing Packages
  const pricingTiersData = [
    {
      name: "Growth Launchpad",
      slug: "growth-launchpad",
      badge: "SMEs & Fast Launch",
      description: "Custom high-speed corporate web platform built on Next.js with CMS integration, SEO readiness, and conversion architecture.",
      priceAed: "$4,950",
      priceUsd: "$4,950",
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
      description: "Enterprise web application or custom digital portal with advanced database modeling, role-based workflows, and regional integrations.",
      priceAed: "$9,500",
      priceUsd: "$9,500",
      billingType: "one-time",
      deliveryTime: "4-6 Weeks Delivery",
      popular: true,
      sortOrder: 2,
      active: true,
      featuresJson: JSON.stringify([
        "Everything in Growth Launchpad",
        "Custom Web App or Customer Portal",
        "Role-Based Access Control (RBAC) & Auth",
        "Payment Gateway (Stripe / Apple Pay / GCC)",
        "Custom ERP, CRM & API Integrations",
        "Bilingual Localization (English + Arabic RTL)",
        "Zero-Trust Security & Latency Profiling",
        "90 Days SLA Technical Warranty"
      ]),
    },
    {
      name: "Bespoke Enterprise",
      slug: "bespoke-enterprise",
      badge: "Conglomerates & FinTech",
      description: "Tailored multi-platform digital ecosystem designed for GCC family offices, regional conglomerates, and high-security enterprise operations.",
      priceAed: "$19,500+",
      priceUsd: "$19,500+",
      billingType: "one-time",
      deliveryTime: "8-12 Weeks Delivery",
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
        "Standard GCC Edge CDN Caching",
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
        "Free Domain Name (.com / .ae) for 1st Year",
        "Free Wildcard SSL & Dedicated IP Support",
        "Unlimited Professional Email Inboxes",
        "Dubai GCC Edge Cloud Node Acceleration",
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
        "DIFC & Regional UAE Data Compliance",
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
