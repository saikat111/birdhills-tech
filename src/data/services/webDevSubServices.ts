import { SubServiceDetail } from "../subServicesData";

export const WEB_DEV_SUB_SERVICES: Record<string, SubServiceDetail> = {
  "business-websites": {
    slug: "business-websites",
    parentSlug: "web-development",
    parentName: "Web Development",
    parentHref: "/services/web-development",
    title: "Corporate & Business Website Development",
    eyebrow: "BESPOKE CORPORATE WEB PRESENCE",
    badge: "Next.js 16 & TypeScript",
    heroHeadline: "Prestigious Corporate Websites Engineered for Speed, Authority & Conversion",
    heroSubcopy:
      "Your corporate website is the digital headquarters of your enterprise. We engineer custom, high-performance web platforms using Next.js 16 and modern headless architectures. Delivering sub-second load times, flawless mobile responsiveness, and custom CMS workflows tailored to your brand.",
    heroImage: "/images/generated/sub_webdev_support.jpg",
    priceNote: "From $1,250 / Project",
    deliveryTimeline: "2 - 3 Weeks",
    metrics: [
      { value: "< 0.8s", label: "Core Web Vitals", desc: "Sub-second LCP score for maximum Google ranking" },
      { value: "100%", label: "Source Code Ownership", desc: "Full Git repository and asset handover with zero lock-in" },
      { value: "100%", label: "Responsive Design", desc: "Pixel-perfect rendering on desktop, tablet, and mobile" },
      { value: "A+", label: "Security & Speed", desc: "Zero plugin vulnerabilities and hardened edge delivery" },
    ],
    challengeHeadline: "Why Generic Corporate Templates Damage Enterprise Reputation",
    challengePoints: [
      "Off-the-shelf WordPress themes and visual builders load hundreds of unnecessary scripts, ballooning load times past 5 seconds.",
      "Generic layouts fail to communicate corporate distinction, making multi-million dollar firms look like amateur startups.",
      "Legacy sites lack modern headless content management, forcing teams to rely on technical agencies for basic text and team updates.",
      "Poor accessibility and broken mobile layouts alienate C-level prospects viewing your site on smartphones.",
    ],
    approachHeadline: "Our Architectural Approach to Corporate Web Platforms",
    approachPoints: [
      "We design bespoke UI/UX systems aligned with your brand guidelines, corporate identity, and executive messaging.",
      "Every component is built with React 19, Next.js 16, and TypeScript—compiled into static, edge-cached HTML for instant loading.",
      "We integrate modern headless CMS solutions (Sanity, Strapi, or Custom Prisma Studio) for effortless in-house content updates.",
      "Comprehensive on-page schema entity graphs ground your brand authority for both Google SERPs and generative AI search engines.",
    ],
    features: [
      {
        title: "Bespoke Corporate UI/UX Architecture",
        desc: "Tailor-made design systems crafted from scratch in Figma with tailored typography, custom micro-interactions, and executive aesthetics.",
      },
      {
        title: "Sub-Second Global Edge Acceleration",
        desc: "Pages are pre-rendered at build time and cached across 250+ global edge locations, ensuring instant delivery worldwide.",
      },
      {
        title: "Integrated Headless Content Management",
        desc: "Empower your marketing and communications team to update case studies, press releases, team bios, and services with zero coding required.",
      },
      {
        title: "Multi-Language & Localization Readiness",
        desc: "Full internationalization architecture supporting true Right-to-Left (RTL) Arabic, French, German, or multi-region localization.",
      },
      {
        title: "Interactive Client Portals & Inquiries",
        desc: "Automated inquiry routing connects your lead forms directly into HubSpot, Salesforce, Zoho, or your internal CRM pipeline.",
      },
      {
        title: "Enterprise Security & Compliance",
        desc: "Zero-database exposure at the edge, automated SSL, CSRF protection, and GDPR and international data compliance built into every build.",
      },
    ],
    deliverables: [
      "Complete bespoke Next.js 16 & TypeScript codebase with 100% intellectual property handover",
      "Interactive Figma UI/UX prototype and brand asset library",
      "Intuitive headless CMS dashboard with user training documentation",
      "Technical SEO entity schema integration (Organization, Service, FAQPage)",
      "90 days of dedicated post-launch warranty and SLA support",
    ],
    techStack: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS v4", "Prisma ORM", "Vercel / AWS", "Cloudflare"],
    processSteps: [
      { step: "01", title: "Discovery & Information Architecture", desc: "Mapping your business goals, target audience personas, and content hierarchy." },
      { step: "02", title: "Figma UI/UX & Interactive Prototype", desc: "Designing high-fidelity screens for desktop and mobile with client review milestones." },
      { step: "03", title: "Component Engineering & CMS Setup", desc: "Writing clean, modular code and configuring your seamless editorial CMS dashboard." },
      { step: "04", title: "Rigorous QA, Speed Auditing & Launch", desc: "Cross-browser testing, accessibility audit, DNS cutover, and Google indexing submission." },
    ],
    faqs: [
      {
        q: "Why should we build with Next.js instead of WordPress?",
        a: "Next.js websites load up to 10x faster, cannot be hacked via outdated plugins, and provide total freedom to build custom interactive portals and applications that WordPress simply cannot support without severe performance penalties.",
      },
      {
        q: "Will our internal marketing team be able to edit page copy and images easily?",
        a: "Yes. We configure an intuitive, visual content management dashboard where your team can create blog posts, edit service copy, update team members, and upload images without touching a line of code.",
      },
      {
        q: "Do we own the source code and design assets after the project?",
        a: "100%. We provide full handover of the Git repository, Figma designs, and deployment configurations. You have total asset ownership with zero proprietary agency lock-ins.",
      },
    ],
  },

  wordpress: {
    slug: "wordpress",
    parentSlug: "web-development",
    parentName: "Web Development",
    parentHref: "/services/web-development",
    title: "Enterprise Headless & Custom WordPress Development",
    eyebrow: "MODERN WORDPRESS ENGINEERING",
    badge: "Zero Plugin Bloat",
    heroHeadline: "Enterprise WordPress Architecture Engineered for Maximum Velocity & Security",
    heroSubcopy:
      "Tired of sluggish WordPress sites bogged down by 50+ plugins, constant security alerts, and fragile updates? We build custom, bloat-free WordPress websites and decoupled Headless WordPress solutions that pair WordPress's beloved editorial interface with the blazing speed and security of a Next.js frontend.",
    heroImage: "/images/generated/sub_webdev_wordpress.jpg",
    priceNote: "From $1,200 / Project",
    deliveryTimeline: "2 - 4 Weeks",
    metrics: [
      { value: "0 Bloat", label: "Third-Party Plugins", desc: "Custom native block themes replacing unstable commercial add-ons" },
      { value: "< 1.0s", label: "Page Load Time", desc: "Full page caching and optimized database queries" },
      { value: "100%", label: "Gutenberg Native", desc: "Modular block editor providing total layout flexibility" },
      { value: "Hardened", label: "Security Profile", desc: "Custom login obscuration, 2FA, and automated file firewalls" },
    ],
    challengeHeadline: "The Downward Spiral of Traditional Cheap WordPress Sites",
    challengePoints: [
      "Inexperienced agencies install dozens of conflicting plugins for basic features, dragging page speeds down to a crawl.",
      "Automatic plugin updates regularly break layouts, disconnect contact forms, and crash checkouts without warning.",
      "Outdated WordPress installations are the #1 target for automated brute-force attacks, malware injections, and webshells.",
      "Cluttered page builder backends (Elementor/Divi) generate messy HTML that severely hurts your Google organic SEO rankings.",
    ],
    approachHeadline: "The Bird Hills Tech Modern WordPress Standard",
    approachPoints: [
      "We build bespoke, lightweight Gutenberg block themes tailored precisely to your brand—no bulky third-party builders.",
      "For enterprise clients, we deploy Headless WordPress: using WP purely as a private backend API and rendering pages on Next.js.",
      "Database query optimization, automated object caching with Redis, and image conversion to WebP/AVIF.",
      "Bank-grade hardening: custom REST API rate-limiting, disabled XML-RPC, and two-factor authentication.",
    ],
    features: [
      {
        title: "Bespoke Gutenberg Custom Block Suites",
        desc: "Custom-coded, reusable editor blocks that give your team freedom to build beautiful pages while preserving brand design guidelines.",
      },
      {
        title: "Headless Decoupled Architecture Option",
        desc: "Connect your WordPress backend to a blazing-fast Next.js frontend for unhackable security and sub-second Core Web Vitals.",
      },
      {
        title: "Advanced Custom Fields (ACF Pro) Modeling",
        desc: "Structured data architecture organized logically so your staff can input complex case studies, real estate listings, or staff directories easily.",
      },
      {
        title: "Redis Object Caching & Database Tuning",
        desc: "In-memory caching absorbs heavy traffic spikes and keeps database query execution times below 20 milliseconds.",
      },
      {
        title: "Automated Staging & Git Version Control",
        desc: "Safe development workflows where all changes are tested on a private staging environment before deploying to production.",
      },
      {
        title: "Built-In Security & Firewall Hardening",
        desc: "Multi-layer security protocols block brute force logins, disable file execution in upload folders, and monitor file integrity.",
      },
    ],
    deliverables: [
      "Custom WordPress theme code with zero commercial builder dependencies",
      "Full library of bespoke Gutenberg blocks tailored to your page layouts",
      "Staging and production deployment setup on fast NVMe cloud servers",
      "Comprehensive editor training guide and personalized video walkthrough",
      "Automated off-site backup configuration and 60 days of warranty support",
    ],
    techStack: ["WordPress Core", "PHP 8.3", "Gutenberg Blocks", "ACF Pro", "Redis Cache", "MySQL / MariaDB", "Next.js (Headless)"],
    processSteps: [
      { step: "01", title: "Information Architecture & Wireframes", desc: "Defining custom post types, taxonomy structures, and page templates." },
      { step: "02", title: "Custom Block & Theme Coding", desc: "Writing clean, semantic PHP, CSS, and React block code with zero bloated libraries." },
      { step: "03", title: "Data Migration & Content Loading", desc: "Importing existing posts, media, and SEO metadata with 301 redirect mapping." },
      { step: "04", title: "Speed Hardening & Production Launch", desc: "Configuring server caching, executing security lockdowns, and going live." },
    ],
    faqs: [
      {
        q: "What is Headless WordPress and when should we use it?",
        a: "Headless WordPress separates your content management backend from the frontend visitors see. Your team still edits content in the familiar WordPress dashboard, but your visitors browse a ultra-fast, unhackable Next.js frontend. It is ideal for high-traffic brands and security-conscious enterprises.",
      },
      {
        q: "Can you take over and fix an existing slow WordPress website?",
        a: "Yes. We offer WordPress performance and security remediation services, removing redundant plugins, auditing database queries, and rebuilding heavy pages into clean, lightweight templates.",
      },
      {
        q: "Will we be able to update content without hiring a developer every time?",
        a: "Absolutely. Our custom Gutenberg blocks provide an intuitive visual drag-and-drop editing experience while strictly maintaining your typography and colors.",
      },
    ],
  },

  ecommerce: {
    slug: "ecommerce",
    parentSlug: "web-development",
    parentName: "Web Development",
    parentHref: "/services/web-development",
    title: "Custom eCommerce Development & High-Velocity Storefronts",
    eyebrow: "HIGH-CONVERTING DIGITAL COMMERCE",
    badge: "Sub-Second Checkout",
    heroHeadline: "Turn Browsers Into High-Ticket Buyers With Frictionless Digital Commerce",
    heroSubcopy:
      "A slow or confusing checkout flow destroys your return on ad spend. We engineer enterprise eCommerce storefronts built on custom Next.js architectures, headless Shopify, and hardened WooCommerce. Featuring instant cart calculations, localized payment gateways, and conversion-optimized checkout funnels.",
    heroImage: "/images/generated/sub_webdev_ecommerce.jpg",
    priceNote: "From $1,800 / Storefront",
    deliveryTimeline: "3 - 5 Weeks",
    metrics: [
      { value: "sub-1s", label: "Catalog Navigation", desc: "Instant product filtering and search with zero page refreshes" },
      { value: "+35%", label: "Checkout Conversion Lift", desc: "Streamlined single-page checkouts eliminating drop-offs" },
      { value: "Multi-Currency", label: "Payment Gateways", desc: "Stripe, Apple Pay, Google Pay, Tabby, and regional gateways" },
      { value: "Real-Time", label: "Inventory Sync", desc: "Automated two-way stock synchronization with your ERP" },
    ],
    challengeHeadline: "Why Most Online Stores Fail to Scale Revenue",
    challengePoints: [
      "Sluggish product catalog pages cause impatient mobile shoppers to bounce to competitors within seconds.",
      "Cluttered, multi-step checkout processes with hidden fees cause over 70% of shopping carts to be abandoned.",
      "Lack of regional payment options (like Buy Now Pay Later - Tabby/Tamara, Apple Pay, or local cards) cripples conversions.",
      "Weak inventory and order management integration results in accidental overselling and customer support friction.",
    ],
    approachHeadline: "Our High-Performance Commerce Architecture",
    approachPoints: [
      "We engineer instant, client-side product filtering by category, price, attributes, and tags with zero server lag.",
      "Single-page, distraction-free checkout with native Apple Pay, Google Pay, and localized regional payment providers.",
      "Automated abandoned cart email sequences and WhatsApp re-engagement flows to recover lost sales automatically.",
      "Robust webhook integrations connecting orders directly to your shipping carriers, fulfillment centers, and ERP systems.",
    ],
    features: [
      {
        title: "Instant Faceted Search & Filtering",
        desc: "Lightning-fast product discovery with instant keyword suggestions, dynamic price sliders, and attribute filters that update without page reloads.",
      },
      {
        title: "Frictionless Single-Page Checkout",
        desc: "Streamlined checkout optimized for mobile shoppers with address auto-complete, 1-click Apple Pay, and guest checkout options.",
      },
      {
        title: "Multi-Currency & International Commerce",
        desc: "Dynamic currency switching, localized tax calculations, and multi-warehouse shipping rules for global and GCC markets.",
      },
      {
        title: "Buy Now Pay Later (BNPL) Integration",
        desc: "Direct integration with Tabby, Tamara, Klarna, and regional split-payment providers to dramatically boost average order value (AOV).",
      },
      {
        title: "Automated Cart Recovery Pipelines",
        desc: "Trigger high-converting email and WhatsApp follow-up messages when shoppers leave items behind, recovering 15%–25% of lost revenue.",
      },
      {
        title: "Custom ERP & Inventory Synchronization",
        desc: "Two-way automated sync with Odoo, SAP, Zoho Inventory, or custom ERP systems to keep stock levels accurate in real time.",
      },
    ],
    deliverables: [
      "Fully operational high-performance eCommerce store ready for commercial sales",
      "Configured payment gateway integration with sandbox testing and live cutover",
      "Automated transactional emails (Order Confirmation, Shipping Update, Invoice)",
      "Server-side GA4 eCommerce analytics and Meta Conversions API tracking",
      "Comprehensive product management training documentation and video guide",
    ],
    techStack: ["Next.js Commerce", "Shopify Storefront API", "WooCommerce", "Stripe Connect", "Tabby / Tamara", "Algolia Search", "Tailwind CSS"],
    processSteps: [
      { step: "01", title: "Commerce Strategy & Catalog Modeling", desc: "Structuring product categories, variants, shipping zones, and tax rules." },
      { step: "02", title: "UX Wireframing & Product Pages", desc: "Designing high-conversion product layouts, quick-view modals, and cart flows." },
      { step: "03", title: "Cart, Checkout & Payment Gateway Integration", desc: "Connecting secure payment processors, BNPL solutions, and shipping APIs." },
      { step: "04", title: "End-to-End Transaction Testing & Launch", desc: "Executing test transactions, verifying webhooks, and opening the store to customers." },
    ],
    faqs: [
      {
        q: "Which platform do you recommend: Shopify, WooCommerce, or Custom?",
        a: "For pure ease of catalog management, Shopify or Headless Shopify is fantastic. For complete data ownership and zero monthly transaction commissions, custom Next.js with Stripe or WooCommerce is superior. We evaluate your product volume and recommend the ideal fit.",
      },
      {
        q: "Can you integrate international and regional payment methods like Tabby, Tamara, and Stripe?",
        a: "Yes. We have deep experience integrating regional and global payment gateways, including Stripe, PayPal, Tabby, Tamara, and regional merchant services.",
      },
      {
        q: "How do we manage product stock and fulfill orders?",
        a: "You will have an intuitive dashboard to manage inventory, track tracking numbers, process refunds, and generate packing slips with a few clicks.",
      },
    ],
  },

  "landing-pages": {
    slug: "landing-pages",
    parentSlug: "web-development",
    parentName: "Web Development",
    parentHref: "/services/web-development",
    title: "High-Converting Landing Page Design & Engineering",
    eyebrow: "PAID CAMPAIGN CONVERSION ARCHITECTURE",
    badge: "High ROAS / Low CPA",
    heroHeadline: "Convert Paid Ad Clicks Into Qualified Leads With High-Velocity Landing Pages",
    heroSubcopy:
      "Sending expensive Google Ads or Meta traffic to your generic homepage burns advertising budget. We architect dedicated, high-intent landing pages engineered around psychological persuasion, sub-second load times, and distraction-free conversion paths.",
    heroImage: "/images/generated/sub_webdev_landing.jpg",
    priceNote: "From $650 / Landing Page",
    deliveryTimeline: "5 - 7 Days",
    metrics: [
      { value: "sub-0.6s", label: "Mobile Page Load", desc: "Zero bounce rate caused by frustrating latency" },
      { value: "2x - 4x", label: "Average Conversion Lift", desc: "Compared against sending ad traffic to a generic homepage" },
      { value: "10/10", label: "Google Ad Quality Score", desc: "High page relevance lowers your Cost Per Click (CPC)" },
      { value: "Instant", label: "CRM Lead Sync", desc: "Webhooks route inquiries directly to WhatsApp and sales teams" },
    ],
    challengeHeadline: "Why Sending Paid Traffic to a Standard Homepage Wastes Budget",
    challengePoints: [
      "Standard homepages have top navigation menus, social links, and diverse topics that distract paid visitors from taking action.",
      "Every 1-second delay in mobile page loading causes a 20% drop in advertising conversions.",
      "Generic messaging fails to match the exact keyword query that the user searched, resulting in immediate abandonment.",
      "Lack of server-side conversion tracking prevents advertising algorithms from optimizing for actual qualified revenue leads.",
    ],
    approachHeadline: "Our Scientific Landing Page Conversion Protocol",
    approachPoints: [
      "Distraction-free layout: we remove global headers and external links, funneling 100% of attention toward the primary conversion CTA.",
      "Clear message match aligning the ad copy directly with the hero headline for instant cognitive reassurance.",
      "High-speed lightweight Next.js code achieving 99+ Google PageSpeed mobile scores for lower CPC bidding.",
      "Dynamic text replacement (DTR) capable of adapting headlines based on UTM parameters or search queries.",
    ],
    features: [
      {
        title: "Zero-Distraction Conversion Layout",
        desc: "Engineered specifically for direct response: single focal CTA, sticky mobile booking buttons, and zero competing exit paths.",
      },
      {
        title: "Dynamic Keyword & UTM Insertion",
        desc: "Match the visitor's exact search intent automatically, swapping headlines based on campaign keywords for higher quality scores.",
      },
      {
        title: "Multi-Step Interactive Lead Qualification Forms",
        desc: "Break long forms into engaging micro-steps that dramatically reduce user friction and capture high-intent contact details.",
      },
      {
        title: "Instant WhatsApp & Call Action Triggers",
        desc: "1-tap click-to-WhatsApp and click-to-call buttons optimized for mobile ad visitors in high-velocity commercial markets.",
      },
      {
        title: "A/B Multivariate Testing Architecture",
        desc: "Deploy split-testing experiments on headlines, hero visuals, and CTA offers to scientifically identify highest-performing variants.",
      },
      {
        title: "Server-Side Tracking & Pixel Precision",
        desc: "Pre-configured Meta Conversions API (CAPI) and Google Ads enhanced conversions to feed machine learning bidding algorithms accurate data.",
      },
    ],
    deliverables: [
      "High-converting landing page built and hosted on blazing-fast infrastructure",
      "Interactive mobile-first Figma design file and creative assets",
      "Connected lead capture pipeline routing to email, CRM, and WhatsApp",
      "Complete Google Ads and Meta Pixel event tracking verification",
      "A/B testing setup for ongoing conversion rate experimentation",
    ],
    techStack: ["Next.js 16", "Tailwind CSS v4", "Google Tag Manager", "Meta CAPI", "HubSpot API", "Framer Motion"],
    processSteps: [
      { step: "01", title: "Ad Campaign & Competitor Audit", desc: "Analyzing your target keywords, ad creative angles, and competitor landing pages." },
      { step: "02", title: "Persuasive Copywriting & Wireframe", desc: "Drafting high-intent headlines, benefit stacks, social proof, and objection handlers." },
      { step: "03", title: "High-Speed Next.js Engineering", desc: "Coding the lightweight page with instant form validation and tracking events." },
      { step: "04", title: "Tracking Verification & Campaign Launch", desc: "Testing lead webhooks, verifying ad pixels, and connecting to your live ad campaigns." },
    ],
    faqs: [
      {
        q: "Why shouldn't I just use Unbounce, Leadpages, or ClickFunnels?",
        a: "SaaS landing page builders add heavy third-party JavaScript that slows page loads down to 3–5 seconds on mobile. Custom Next.js landing pages load in under 600 milliseconds, giving your Google Ads a higher Quality Score and lowering your Cost Per Click by up to 30%.",
      },
      {
        q: "How fast can you deliver a custom landing page?",
        a: "Our rapid sprint team can design, write, code, and deploy a high-converting landing page in 5 to 7 business days.",
      },
      {
        q: "Can the landing page connect to our HubSpot or CRM system?",
        a: "Yes. Every lead is instantly forwarded to your CRM, email notification list, and sales team's WhatsApp simultaneously.",
      },
    ],
  },

  "custom-development": {
    slug: "custom-development",
    parentSlug: "web-development",
    parentName: "Web Development",
    parentHref: "/services/web-development",
    title: "Bespoke Web Application & SaaS Portal Engineering",
    eyebrow: "ENTERPRISE SOFTWARE ENGINEERING",
    badge: "Full-Stack Custom Code",
    heroHeadline: "Scalable Web Applications, Customer Portals & SaaS Systems Built to Last",
    heroSubcopy:
      "When off-the-shelf software can't support your unique business operations, you need tailored software. We engineer full-stack web applications, interactive client portals, and multi-tenant SaaS platforms using Next.js, Node.js, and relational databases designed for enterprise scale.",
    heroImage: "/images/generated/sub_webdev_custom.jpg",
    priceNote: "From $2,800 / Application",
    deliveryTimeline: "4 - 8 Weeks",
    metrics: [
      { value: "TypeScript", label: "Type-Safe Architecture", desc: "Clean, self-documenting code with zero runtime surprises" },
      { value: "Zero-Trust", label: "Security & RBAC", desc: "Role-based access control and encrypted database storage" },
      { value: "API-First", label: "Microservice Ready", desc: "RESTful and GraphQL APIs ready for mobile and third-party sync" },
      { value: "100%", label: "IP Handover", desc: "You own all code repositories, database schemas, and documentation" },
    ],
    challengeHeadline: "The Limitations of Off-The-Shelf SaaS Platforms",
    challengePoints: [
      "Rigid subscription tools force your team into clunky workflows that don't match how your business actually operates.",
      "Per-seat licensing costs skyrocket as your company expands, turning monthly software fees into a massive financial drain.",
      "Third-party software traps your proprietary customer data inside closed ecosystems with limited export capability.",
      "Lack of custom API integrations creates fragmented data silos and hours of manual copy-paste administrative work.",
    ],
    approachHeadline: "Our Full-Stack Software Engineering Standards",
    approachPoints: [
      "We build modular architectures using Next.js 16, TypeScript, Node.js, and relational PostgreSQL/MySQL databases.",
      "Security-first design: robust authentication (JWT, OAuth, NextAuth), salted password hashing, and granular permissions.",
      "Modern relational data modeling with Prisma ORM, automated database migrations, and ACID transactional integrity.",
      "Complete CI/CD deployment pipelines on AWS or Vercel with automated staging environments and automated testing.",
    ],
    features: [
      {
        title: "Interactive Client & Vendor Portals",
        desc: "Secure self-service dashboards where clients can review documents, track project milestones, manage invoices, and submit requests.",
      },
      {
        title: "Role-Based Access Control (RBAC)",
        desc: "Granular permission layers (Super Admin, Manager, Staff, Customer) ensuring users only see the data they are authorized to access.",
      },
      {
        title: "REST & GraphQL API Microservices",
        desc: "Well-documented, rate-limited APIs designed to connect seamlessly with mobile apps, legacy ERPs, and external partners.",
      },
      {
        title: "Real-Time Data Pipelines & Webhooks",
        desc: "WebSocket and webhook integrations for instant notifications, live dashboards, and automated inter-system synchronization.",
      },
      {
        title: "Automated Document & Invoice Generation",
        desc: "Server-side dynamic PDF creation for commercial invoices, contracts, proposals, and regulatory compliance reports.",
      },
      {
        title: "High-Concurrency Cloud Infrastructure",
        desc: "Containerized deployments configured with auto-scaling to effortlessly handle thousands of simultaneous active users.",
      },
    ],
    deliverables: [
      "Full production-ready web application deployed on your private cloud infrastructure",
      "Complete Git repository containing clean, documented TypeScript source code",
      "Interactive Swagger / OpenAPI documentation for all backend endpoints",
      "Database schema definitions and automated backup migration scripts",
      "Comprehensive admin user manual and developer handover documentation",
    ],
    techStack: ["Next.js 16", "TypeScript", "Node.js", "Prisma ORM", "PostgreSQL", "Tailwind CSS v4", "Docker / AWS"],
    processSteps: [
      { step: "01", title: "Product Blueprint & Technical Specs", desc: "Detailed scoping of user roles, database schemas, and UI wireframes." },
      { step: "02", title: "Interactive UI/UX Clickable Prototype", desc: "Designing all dashboard states and workflows in Figma for stakeholder sign-off." },
      { step: "03", title: "Full-Stack Agile Sprint Engineering", desc: "Bi-weekly staging demo releases with continuous client feedback loops." },
      { step: "04", title: "Security Penetration Audit & Production Cutover", desc: "Load testing, role permission verification, and zero-downtime deployment." },
    ],
    faqs: [
      {
        q: "Who owns the code and database when the application is complete?",
        a: "You own 100% of the intellectual property, code repositories, database schemas, and infrastructure credentials upon project completion. We never charge ongoing licensing fees for your own software.",
      },
      {
        q: "Can you build an app that connects to our existing ERP or CRM?",
        a: "Yes. Our senior engineers specialize in writing secure API integrations connecting your custom web application directly to SAP, Oracle, Zoho, HubSpot, or proprietary databases.",
      },
      {
        q: "How do you handle software bugs and feature expansions after launch?",
        a: "Every custom application includes a 90-day technical warranty. We also provide flexible ongoing monthly DevOps and sprint retainers for continuous feature iterations.",
      },
    ],
  },

  redesign: {
    slug: "redesign",
    parentSlug: "web-development",
    parentName: "Web Development",
    parentHref: "/services/web-development",
    title: "Legacy Website Redesign & Technical Modernization",
    eyebrow: "DIGITAL TRANSFORMATION & REBUILD",
    badge: "Preserve 100% SEO Rank",
    heroHeadline: "Modernize Your Outdated Website Without Losing Your Hard-Earned Google Rankings",
    heroSubcopy:
      "Is your current website embarrassing your brand, loading like a dinosaur, or failing to convert modern mobile traffic? We execute complete corporate redesigns and structural rebuilds, transforming outdated sites into modern, high-speed digital assets while strictly preserving your SEO traffic and URL equity.",
    heroImage: "/images/generated/sub_webdev_redesign.jpg",
    priceNote: "From $1,350 / Redesign",
    deliveryTimeline: "3 - 4 Weeks",
    metrics: [
      { value: "0%", label: "Organic Traffic Loss", desc: "Strict 1-to-1 301 redirect mapping protects every ranking URL" },
      { value: "3x - 5x", label: "Speed Acceleration", desc: "Replacing legacy frameworks with modern Next.js edge architecture" },
      { value: "100%", label: "Mobile Optimization", desc: "Thumb-friendly mobile interfaces built for modern screen ratios" },
      { value: "Fresh", label: "Brand Positioning", desc: "Elevate perception to match your current enterprise maturity" },
    ],
    challengeHeadline: "The Extreme Risks of Incompetent Website Redesigns",
    challengePoints: [
      "Amateur agencies delete legacy URLs without 301 redirects, causing catastrophic crashes in Google search traffic overnight.",
      "Outdated design frameworks fail to reflect company growth, leaving prospective clients with an impression of stagnation.",
      "Legacy sites have accumulated years of technical debt, broken internal links, and unsupported plugins.",
      "Content migrations executed without planning result in missing case studies, corrupted media, and broken client forms.",
    ],
    approachHeadline: "Our SEO-Safe Modernization Protocol",
    approachPoints: [
      "Comprehensive SEO crawl: we extract every ranking URL, meta tag, and backlink to create a flawless 301 redirect map.",
      "Re-imagining your visual identity in Figma with contemporary typography, modern spacing, and high-impact visual storytelling.",
      "Rebuilding the frontend on Next.js 16 to achieve 99+ Core Web Vitals scores and instantaneous page transitions.",
      "Parallel development on a private staging URL ensures your existing website remains live and generating business until launch day.",
    ],
    features: [
      {
        title: "1-to-1 SEO Redirect Mapping Guarantee",
        desc: "Every legacy URL is mapped to its new counterpart with permanent 301 redirects, preserving your domain authority and organic rankings.",
      },
      {
        title: "Modern Contemporary UI/UX Re-Skinning",
        desc: "Transform dated, boxy layouts into sleek, spacious digital experiences that impress high-value enterprise decision-makers.",
      },
      {
        title: "Complete Mobile-First Re-Engineering",
        desc: "Re-architect menus, navigation, forms, and media layouts specifically for flawless navigation on modern mobile displays.",
      },
      {
        title: "Full Content Sanitization & Migration",
        desc: "We clean up bloated HTML from old blog posts and case studies, preserving your historical content in clean, semantic markup.",
      },
      {
        title: "Core Web Vitals & Performance Overhaul",
        desc: "Slash page weight from 5MB+ down to under 500KB with automated image optimization, modern font loading, and script minimization.",
      },
      {
        title: "Conversion Funnel Optimization",
        desc: "Strategically place high-converting CTAs, clear service breakdown cards, and direct consultation booking triggers throughout.",
      },
    ],
    deliverables: [
      "Completely modernized corporate web platform launched with zero downtime",
      "Full 301 redirect index mapped and verified in Google Search Console",
      "Comparative before-and-after Core Web Vitals speed audit report",
      "Figma design system files and clean Next.js source code repository",
      "60-day post-launch rank monitoring and conversion stabilization warranty",
    ],
    techStack: ["Next.js 16", "TypeScript", "Tailwind CSS v4", "Screaming Frog SEO", "Google Search Console", "Vercel / Cloudflare"],
    processSteps: [
      { step: "01", title: "Comprehensive SEO Crawl & Audit", desc: "Cataloging all existing URLs, organic keywords, and ranking landing pages." },
      { step: "02", title: "Strategic Wireframing & Design", desc: "Presenting modern design directions that elevate your brand without alienating users." },
      { step: "03", title: "Staging Build & Content Transfer", desc: "Constructing the modern site on Next.js and migrating all historical content." },
      { step: "04", title: "Redirect Verification & Seamless Launch", desc: "Testing all 301 rules, cutting over DNS, and monitoring organic rankings." },
    ],
    faqs: [
      {
        q: "Will we lose our existing Google search rankings during a redesign?",
        a: "No—when executed properly. We perform exhaustive URL audits and implement permanent 301 redirects for every single page. Because the new site will be significantly faster and mobile-optimized, our clients almost always see an increase in rankings after launch.",
      },
      {
        q: "How long does a website redesign take?",
        a: "A typical corporate redesign takes between 3 to 4 weeks from initial wireframes to live launch, depending on the volume of content being migrated.",
      },
      {
        q: "Will our current website stay online while you work on the new one?",
        a: "Yes. All development occurs on a secure staging server. Your existing site remains 100% online and untouched until the moment we switch DNS.",
      },
    ],
  },

  support: {
    slug: "support",
    parentSlug: "web-development",
    parentName: "Web Development",
    parentHref: "/services/web-development",
    title: "Dedicated Website Maintenance, Support & DevOps SLA",
    eyebrow: "CONTINUOUS TECHNICAL PARTNERSHIP",
    badge: "24/7 Rapid Response",
    heroHeadline: "Proactive Website Maintenance, Security Monitoring & Engineering Sprints",
    heroSubcopy:
      "A website is never 'done'—it requires continuous security patching, performance audits, and rapid engineering support. Partner directly with our senior developers for ongoing feature enhancements, uptime guarantees, and instant bug fixes without the overhead of hiring an in-house developer.",
    heroImage: "/images/generated/sub_webdev_support.jpg",
    priceNote: "From $400 / month Retainer",
    deliveryTimeline: "Continuous Monthly Partnership",
    metrics: [
      { value: "< 2 Hours", label: "Critical Response SLA", desc: "Rapid resolution for emergency issues and outages" },
      { value: "Monthly", label: "Dedicated Dev Hours", desc: "Direct engineering time for new features and updates" },
      { value: "Daily", label: "Off-Site Cloud Backups", desc: "Encrypted point-in-time snapshots for total peace of mind" },
      { value: "Weekly", label: "Security & Vulnerability Audits", desc: "Proactive patching before exploits can occur" },
    ],
    challengeHeadline: "Why Leaving Your Website Unmaintained Is a Ticking Time Bomb",
    challengePoints: [
      "Small layout bugs and broken contact forms go unnoticed for weeks, quietly bleeding valuable business leads.",
      "Outdated software libraries accumulate known security vulnerabilities that expose your database to hackers.",
      "When unexpected crashes occur, scrambling to find a freelance developer on short notice is expensive and stressful.",
      "Without regular database optimization and cache tuning, load times steadily degrade month after month.",
    ],
    approachHeadline: "Our Proactive Engineering SLA Protocol",
    approachPoints: [
      "We assign dedicated senior engineers who know your codebase intimately—no generic call centers or slow ticketing queues.",
      "Continuous synthetic uptime monitoring checks your site every 60 seconds, alerting our on-call team instantly if issues arise.",
      "Dedicated monthly developer hours rolled over into proactive feature rollouts, conversion tweaks, or new landing pages.",
      "Monthly executive reports summarizing uptime performance, security status, and completed technical improvements.",
    ],
    features: [
      {
        title: "Guaranteed Response Time SLA",
        desc: "Direct access to our senior engineering team with guaranteed response times under 2 hours for critical priority incidents.",
      },
      {
        title: "Dedicated Monthly Engineering Hours",
        desc: "Use your allocated developer hours each month for whatever you need: new landing pages, banner updates, or custom API features.",
      },
      {
        title: "Automated Multi-Region Backups",
        desc: "Daily automated off-site backups with 1-click snapshot restore capabilities to roll back any accidental mistakes in minutes.",
      },
      {
        title: "Core Web Vitals & Latency Monitoring",
        desc: "Continuous monitoring ensures that your website maintains its sub-second page speed benchmarks over time.",
      },
      {
        title: "Form & Conversion Flow Health Audits",
        desc: "Routine automated testing of your contact forms, checkout flows, and CRM webhooks to guarantee zero dropped customer inquiries.",
      },
      {
        title: "Security Hardening & Dependency Patching",
        desc: "Proactive updates to npm packages, PHP dependencies, and server packages to eliminate known security vulnerabilities.",
      },
    ],
    deliverables: [
      "Monthly executive maintenance and health scorecard report",
      "Direct private Slack or WhatsApp channel with your assigned lead developer",
      "Transparent task tracking dashboard showing utilized engineering hours",
      "Verified daily off-site cloud backups with 30-day retention",
      "Immediate emergency escalation protocol with 24/7 on-call coverage",
    ],
    techStack: ["Next.js / Node.js", "WordPress / PHP", "GitHub Actions CI/CD", "Datadog / UptimeRobot", "AWS S3 Backups", "Sentry Error Tracking"],
    processSteps: [
      { step: "01", title: "Codebase Onboarding & Health Audit", desc: "Inspecting your codebase, documentation, server environment, and access keys." },
      { step: "02", title: "Monitoring & Backup Infrastructure", desc: "Connecting 60-second synthetic monitoring and automated off-site backup pipelines." },
      { step: "03", title: "Private Support Channel Activation", desc: "Setting up your team's direct Slack/WhatsApp bridge for frictionless task requests." },
      { step: "04", title: "Monthly Sprints & Proactive Care", desc: "Executing requested changes, security updates, and performance tuning continuously." },
    ],
    faqs: [
      {
        q: "What can we use our monthly developer hours for?",
        a: "You can use your hours for anything you need: creating new landing pages, tweaking copy, adding new staff members, integrating new marketing pixels, optimizing speed, or building custom features.",
      },
      {
        q: "What happens if our website goes down over the weekend?",
        a: "Our automated monitoring alerts our on-call senior DevOps team instantly. We begin investigation and resolution immediately, typically resolving server issues before your team even notices.",
      },
      {
        q: "Can you maintain websites built by other agencies?",
        a: "Yes. We regularly take over websites built by previous agencies. We perform a comprehensive code and security audit during onboarding to stabilize and document the application.",
      },
    ],
  },
};
