import { SubServiceDetail } from "../subServicesData";

export const MARKETING_SUB_SERVICES: Record<string, SubServiceDetail> = {
  seo: {
    slug: "seo",
    parentSlug: "digital-marketing",
    parentName: "Digital Marketing",
    parentHref: "/services/digital-marketing",
    title: "Enterprise Performance SEO & Organic Search Growth",
    eyebrow: "DATA-DRIVEN ORGANIC REVENUE",
    badge: "Top 3 Ranking Strategy",
    heroHeadline: "Dominate High-Intent Search Queries & Capture Sustainable Commercial Revenue",
    heroSubcopy:
      "Stop wasting time on low-intent vanity keywords that generate impressions but zero sales. We engineer full-funnel search engine optimization strategies focused exclusively on high-commercial intent queries, technical Core Web Vitals perfection, and authoritative industry backlinks.",
    heroImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=85",
    priceNote: "From $850 / month Retainer",
    deliveryTimeline: "Ongoing Monthly Sprints",
    metrics: [
      { value: "Top 3", label: "Commercial Rankings", desc: "Targeting queries with immediate buyer intent" },
      { value: "+180%", label: "Average Organic Lift", desc: "Qualified inbound pipeline growth within 6 months" },
      { value: "0", label: "Black-Hat Tactics", desc: "100% white-hat algorithmic safety with zero penalty risk" },
      { value: "Real-Time", label: "Revenue Attribution", desc: "Closed-loop analytics tying rankings to actual inquiries" },
    ],
    challengeHeadline: "Why Most Traditional SEO Agency Retainers Fail",
    challengePoints: [
      "Agencies report 'keyword rank increases' for obscure, zero-search-volume terms that bring zero paying customers.",
      "Generic blog posts written without topical authority or expert perspective fail to rank or convert in competitive sectors.",
      "Ignoring technical SEO foundations (slow page speeds, broken canonicals, crawl budget waste) severely handicaps good content.",
      "Toxic, automated backlink blasts risk devastating manual Google penalties that de-index your primary domain.",
    ],
    approachHeadline: "Our Commercial Revenue SEO Framework",
    approachPoints: [
      "We build semantic topic clusters around high-ticket commercial keywords with verified buyer intent.",
      "Technical audits resolving indexation traps, Core Web Vitals bottlenecks, and structured schema entity graphs.",
      "Authoritative, executive thought leadership written to satisfy Google's strict E-E-A-T (Experience, Expertise, Authoritativeness, Trust) standards.",
      "High-authority white-hat digital PR and editorial link acquisition from legitimate industry publications.",
    ],
    features: [
      {
        title: "Commercial Search Intent Mapping",
        desc: "We analyze competitor keyword gaps to target high-intent transactional queries that prospective clients use right before making a purchasing decision.",
      },
      {
        title: "Technical SEO & Core Web Vitals Hardening",
        desc: "Deep crawl audits resolve redirect chains, render-blocking scripts, canonical confusion, and mobile usability issues for maximum crawl efficiency.",
      },
      {
        title: "Topic Cluster & Semantic Content Architecture",
        desc: "We organize your website into authoritative topical hubs that establish your domain as the definitive industry authority in Google's knowledge graph.",
      },
      {
        title: "Schema.org & Structured Entity Graph",
        desc: "Advanced JSON-LD schema (Organization, Service, FAQ, Product, Review) feeds structured data directly into Google SERP rich snippets.",
      },
      {
        title: "High-Authority Editorial Link Building",
        desc: "Zero spam networks. We earn legitimate editorial placements and digital PR citations on real business publications with high domain ratings.",
      },
      {
        title: "Closed-Loop GA4 & CRM Revenue Tracking",
        desc: "We track organic traffic all the way to scheduled calls and signed contracts, proving direct return on investment every month.",
      },
    ],
    deliverables: [
      "Comprehensive technical SEO health audit and prioritized engineering roadmap",
      "Quarterly commercial keyword target map with search volume and intent classification",
      "Monthly high-authority editorial articles optimized for Google and AI search engines",
      "Live Looker Studio dashboard tracking keyword ranks, organic traffic, and conversions",
      "Monthly strategy call with your dedicated Senior SEO Director",
    ],
    techStack: ["Ahrefs Enterprise", "Semrush", "Screaming Frog", "Google Search Console", "Google Analytics 4", "Looker Studio"],
    processSteps: [
      { step: "01", title: "Technical & Competitor Baseline Audit", desc: "Evaluating current indexation, site health, and competitor keyword vulnerabilities." },
      { step: "02", title: "Information Architecture & Keyword Mapping", desc: "Assigning primary and secondary commercial keywords to existing and new pages." },
      { step: "03", title: "On-Page Optimization & Schema Injection", desc: "Upgrading titles, headings, internal linking, and JSON-LD structured data." },
      { step: "04", title: "Authority Building & Continuous Rank Sprints", desc: "Publishing expert content, acquiring backlinks, and optimizing for top-3 positions." },
    ],
    faqs: [
      {
        q: "How long does it take to see tangible results from SEO?",
        a: "While technical fixes and low-competition quick wins often show ranking improvements within 30 to 60 days, significant commercial organic revenue growth typically compounds between months 3 to 6 as domain authority builds.",
      },
      {
        q: "Do you guarantee #1 rankings on Google?",
        a: "No ethical agency can guarantee #1 rankings because Google's algorithm is proprietary. However, we guarantee strict white-hat execution, weekly sprint deliverables, and have an exceptional track record of ranking clients in the top 3 for high-value commercial terms.",
      },
      {
        q: "How is your approach different from typical SEO agencies?",
        a: "Most agencies focus on raw traffic volume from useless informational queries. We focus exclusively on commercial purchase intent queries that directly generate inquiries, phone calls, and enterprise pipeline.",
      },
    ],
  },

  "google-ads": {
    slug: "google-ads",
    parentSlug: "digital-marketing",
    parentName: "Digital Marketing",
    parentHref: "/services/digital-marketing",
    title: "High-Intent Google Ads & PPC Performance Management",
    eyebrow: "PRECISION PAID SEARCH ACQUISITION",
    badge: "High ROAS Management",
    heroHeadline: "Capture High-Intent Inquiries Right When Buyers Are Searching For You",
    heroSubcopy:
      "Stop wasting advertising budget on broad match keywords, click-fraud bots, and irrelevant search traffic. We manage performance Google Ads campaigns across Search, Performance Max, and YouTube, engineered for maximum Return on Ad Spend (ROAS) and lowest Cost Per Qualified Acquisition.",
    heroImage: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&w=1600&q=85",
    priceNote: "From $750 / month Management Fee",
    deliveryTimeline: "Campaign Launch in 5 - 7 Days",
    metrics: [
      { value: "4x - 8x", label: "Target ROAS", desc: "Optimizing for actual enterprise contract revenue" },
      { value: "-35%", label: "Wasted Ad Spend Cut", desc: "Aggressive negative keyword sculpting and match-type control" },
      { value: "100%", label: "Server-Side Tracking", desc: "Enhanced conversions passing accurate signals to Google AI" },
      { value: "Weekly", label: "Bid & Query Optimization", desc: "Continuous sprint adjustments based on conversion value" },
    ],
    challengeHeadline: "Why Most Google Ads Budgets Are Silently Wasted",
    challengePoints: [
      "Google's default automated settings push broad match terms that spend budget on job seekers, student research, and irrelevant clicks.",
      "Sending paid traffic to a generic homepage with poor relevance scores results in high Cost Per Click (CPC) and terrible conversion rates.",
      "Lack of negative keyword lists allows money to leak on competitor brand names and unrelated product searches.",
      "Broken conversion tracking misinforms Google's Smart Bidding algorithms, optimizing for cheap clicks rather than high-value clients.",
    ],
    approachHeadline: "Our High-ROAS Google Ads Architecture",
    approachPoints: [
      "Tight Single-Themed Ad Groups (STAG) ensuring 100% ad copy relevance to the exact search query for 9+ Quality Scores.",
      "Exhaustive negative keyword lists built from day one to block non-commercial, informational, and junk queries.",
      "Dedicated, ultra-fast custom landing pages tailored specifically to each campaign theme for maximum conversion rate.",
      "Enhanced Conversions integration feeding verified revenue data directly into Google's Target CPA and Target ROAS bidding algorithms.",
    ],
    features: [
      {
        title: "High-Intent Search Campaign Structuring",
        desc: "We focus on high-ticket, high-intent transactional keywords with exact and phrase match types to ensure zero budget leakage.",
      },
      {
        title: "Performance Max (PMax) Precision Management",
        desc: "Carefully structured asset groups with audience signals and brand exclusions, preventing Google from wasting budget on cheap display inventory.",
      },
      {
        title: "Aggressive Negative Keyword Sculpting",
        desc: "Thousands of pre-curated negative terms (free, jobs, salary, templates, cheap) protect your budget from day one.",
      },
      {
        title: "High-Converting Dedicated Landing Pages",
        desc: "We pair your campaigns with bespoke, sub-second landing pages engineered for maximum mobile conversion and Quality Score optimization.",
      },
      {
        title: "Google Enhanced Conversions & Offline Import",
        desc: "Pass verified phone calls, qualified leads, and offline sales back into Google Ads to train the AI to find higher-value customers.",
      },
      {
        title: "Competitor Interception & Brand Defense",
        desc: "Defend your brand name against competitors trying to steal your customers while ethically capturing market share on generic industry searches.",
      },
    ],
    deliverables: [
      "Complete Google Ads account architecture, campaign builds, and ad extensions",
      "Full library of high-performing ad copy variants with responsive search ad (RSA) optimization",
      "Negative keyword lists with automated search term harvesting rules",
      "Server-side conversion tracking setup via Google Tag Manager & Enhanced Conversions",
      "Real-time transparent Looker Studio performance dashboard and weekly optimizations",
    ],
    techStack: ["Google Ads Search", "Google Performance Max", "Google Tag Manager", "Enhanced Conversions", "Looker Studio", "ClickCease"],
    processSteps: [
      { step: "01", title: "Market Search Audit & Unit Economics", desc: "Calculating your target Cost Per Acquisition (CPA) and auditing search volume." },
      { step: "02", title: "Campaign Architecture & Ad Copywriting", desc: "Writing compelling responsive search ads with dynamic keyword insertion." },
      { step: "03", title: "Landing Page & Tracking Validation", desc: "Testing conversion pixels, offline lead webhooks, and call tracking numbers." },
      { step: "04", title: "Live Launch & Continuous Scaling", desc: "Monitoring search query reports daily, weeding out wasted spend, and scaling winners." },
    ],
    faqs: [
      {
        q: "What monthly ad spend budget do we need to start?",
        a: "We generally recommend a minimum monthly Google Ads media spend of $1,500 to $3,000 depending on industry competition to gather statistically significant conversion data and achieve consistent inbound pipeline.",
      },
      {
        q: "Do you take a percentage of our advertising budget?",
        a: "We believe percentage-of-spend models create a conflict of interest that incentivizes agencies to spend more of your money. We operate on a transparent, flat monthly management tier based on campaign complexity.",
      },
      {
        q: "Who owns the Google Ads account?",
        a: "You retain 100% ownership of your Google Ads account, data, and billing. We are simply granted manager access. If you ever pause our services, your account and historical data remain entirely yours.",
      },
    ],
  },

  "meta-ads": {
    slug: "meta-ads",
    parentSlug: "digital-marketing",
    parentName: "Digital Marketing",
    parentHref: "/services/digital-marketing",
    title: "Precision Meta (Facebook & Instagram) Advertising Funnels",
    eyebrow: "PAID SOCIAL CUSTOMER ACQUISITION",
    badge: "Full-Funnel Meta Ads",
    heroHeadline: "Scale Inquiries & High-Ticket Customers Across Instagram & Facebook",
    heroSubcopy:
      "Meta's advertising engine remains the world's most powerful demand-generation platform when paired with thumb-stopping creative and server-side tracking. We build full-funnel Meta advertising campaigns that educate, nurture, and convert cold prospects into qualified inbound buyers.",
    heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=85",
    priceNote: "From $750 / month Management Fee",
    deliveryTimeline: "Campaign Launch in 5 - 7 Days",
    metrics: [
      { value: "3.5x+", label: "Average Campaign ROAS", desc: "Targeted full-funnel customer acquisition return" },
      { value: "100%", label: "Meta Conversions API (CAPI)", desc: "Server-side tracking immune to iOS privacy blockers" },
      { value: "Creative", label: "Iterative Testing Sprints", desc: "Continuous fresh ad hooks to eliminate creative fatigue" },
      { value: "Instant", label: "WhatsApp & Lead Forms", desc: "Instant lead synchronization with your sales CRM" },
    ],
    challengeHeadline: "Why Most Meta Campaigns Suffer From Ad Fatigue and High CPA",
    challengePoints: [
      "Boring, static ads that look like corporate stock photos get scrolled past in under 0.5 seconds on Instagram feeds.",
      "iOS tracking restrictions blind standard browser pixels, causing Meta's algorithms to lose 30%–50% of real conversion data.",
      "Running only bottom-of-funnel ads to cold audiences burns budget because prospects don't yet know, like, or trust your brand.",
      "Failing to refresh video hooks and image angles causes ad fatigue, driving Cost Per Acquisition (CPA) higher every week.",
    ],
    approachHeadline: "Our Creative-Led Paid Social Strategy",
    approachPoints: [
      "Full-funnel architecture: Top-of-funnel problem-aware content, middle-of-funnel proof & case studies, bottom-of-funnel conversion offers.",
      "Direct Meta Conversions API (CAPI) implementation with server-side event deduplication for maximum data fidelity.",
      "Rapid creative testing methodology testing 3–5 new hooks, visuals, and copy angles every sprint.",
      "Instant Lead Forms and direct Click-to-WhatsApp ads configured for friction-free mobile lead capture.",
    ],
    features: [
      {
        title: "Thumb-Stopping Creative & Video Concepts",
        desc: "High-contrast visual design, short-form video hooks, and carousel frameworks that capture attention in fast-scrolling feeds.",
      },
      {
        title: "Full-Funnel Retargeting Sequences",
        desc: "Multi-touch retargeting that serves specific video testimonials and case studies to people who visited your site but haven't yet inquired.",
      },
      {
        title: "Meta Conversions API (CAPI) Architecture",
        desc: "Server-to-server tracking recovers lost conversions from iOS Safari and ad-blockers, achieving 95%+ event match quality scores.",
      },
      {
        title: "High-Intent Click-to-WhatsApp Funnels",
        desc: "Connect qualified prospects directly to your sales team's WhatsApp with automated opening messages that begin sales conversations immediately.",
      },
      {
        title: "Lookalike & Advantage+ Audience Modeling",
        desc: "Leverage Meta's machine learning algorithms seeded with your highest-value customer data to discover ready-to-buy lookalikes.",
      },
      {
        title: "Weekly Creative Refresh Sprints",
        desc: "We continuously produce and test fresh hooks, static assets, and headline angles to eliminate ad fatigue before it impacts performance.",
      },
    ],
    deliverables: [
      "Comprehensive Meta campaign strategy and full-funnel structure in your Ad Account",
      "Suite of high-resolution ad graphics, motion assets, and direct-response ad copy",
      "Meta Conversions API (CAPI) server-side installation with Event Quality certification",
      "Instant lead capture webhook connecting directly to your CRM and email notifications",
      "Weekly performance optimization reporting with creative breakdown insights",
    ],
    techStack: ["Meta Ads Manager", "Meta Conversions API (CAPI)", "Figma Creative Studio", "Google Tag Manager Server-Side", "HubSpot / WhatsApp API"],
    processSteps: [
      { step: "01", title: "Audience & Customer Research", desc: "Identifying your target customer avatars, pain points, desires, and objections." },
      { step: "02", title: "Creative Production & Copywriting", desc: "Designing high-converting static carousels, video hooks, and persuasive ad angles." },
      { step: "03", title: "CAPI Server Tracking Integration", desc: "Connecting server-side event streams to ensure 100% conversion attribution." },
      { step: "04", title: "Launch & Algorithmic Optimization", desc: "A/B testing creative variations, pruning underperformers, and scaling winning ad sets." },
    ],
    faqs: [
      {
        q: "Does Meta Ads work for B2B and high-ticket service companies?",
        a: "Yes! Decision-makers and enterprise founders browse Instagram and Facebook outside work hours. With precise lookalike targeting and educational thought leadership ads, Meta is frequently one of our highest-ROI channels for high-ticket B2B services.",
      },
      {
        q: "How do you handle creative design for the ads?",
        a: "Our in-house creative design team designs all static assets, carousels, motion graphics, and drafts all direct-response copy as part of our monthly management service.",
      },
      {
        q: "How does the Meta Conversions API (CAPI) improve my results?",
        a: "CAPI bypasses browser ad-blockers and iOS privacy restrictions by sending conversion events directly from our cloud server to Meta. This gives Meta's AI complete visibility into your buyers, lowering your Cost Per Lead by 20%–35%.",
      },
    ],
  },

  "tiktok-ads": {
    slug: "tiktok-ads",
    parentSlug: "digital-marketing",
    parentName: "Digital Marketing",
    parentHref: "/services/digital-marketing",
    title: "TikTok Advertising & Direct-Response Video Acquisition",
    eyebrow: "HIGH-VELOCITY SHORT-FORM ACQUISITION",
    badge: "Direct-Response Video",
    heroHeadline: "Scale Inquiries & Commercial Growth on TikTok With Native Video Creative",
    heroSubcopy:
      "TikTok has evolved into a massive commercial discovery engine. We design native, direct-response video ad campaigns that look like organic content while driving qualified customer inquiries, app installs, and eCommerce sales at lower CPMs than traditional platforms.",
    heroImage: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1600&q=85",
    priceNote: "From $750 / month Management Fee",
    deliveryTimeline: "Campaign Launch in 7 Days",
    metrics: [
      { value: "sub-2s", label: "Hook Rate", desc: "Pattern-interrupting opening frames stopping the scroll" },
      { value: "40% Lower", label: "Average CPM", desc: "Significantly lower cost per thousand impressions than legacy networks" },
      { value: "TikTok Events", label: "Server-Side API", desc: "Precision event matching and revenue attribution" },
      { value: "Direct", label: "Lead Generation", desc: "In-app instant forms with automated CRM routing" },
    ],
    challengeHeadline: "Why Corporate Ads Fail Miserably on TikTok",
    challengePoints: [
      "Polished corporate commercials look like advertisements and are swiped away in less than one second.",
      "Traditional marketing teams lack the rapid creative velocity needed to test new hooks and trends weekly.",
      "Lack of sound-on optimization and native caption formatting cuts engagement in half.",
      "Inadequate pixel tracking fails to capture conversions that occur on mobile safari and webviews.",
    ],
    approachHeadline: "Our Native Direct-Response TikTok Framework",
    approachPoints: [
      "'Don't Make Ads, Make TikToks'—we script and edit native UGC-style and high-impact founder-led videos that feel authentic.",
      "Aggressive testing of the first 3 seconds ('The Hook') to maximize video completion and click-through rates.",
      "In-App Instant Lead Generation Forms that capture pre-filled phone numbers and emails without loading a slow website.",
      "Full TikTok Events API server-side integration for accurate conversion modeling and algorithm optimization.",
    ],
    features: [
      {
        title: "Native Direct-Response Video Creative",
        desc: "Scripted and edited specifically for TikTok's vertical 9:16 format with dynamic captions, trending audio, and sound-on pacing.",
      },
      {
        title: "TikTok Instant Lead Generation Forms",
        desc: "High-speed native forms that open instantly within the app, capturing verified customer details with zero loading drop-off.",
      },
      {
        title: "TikTok Events API Server Tracking",
        desc: "Server-side event streaming ensuring complete attribution and maximum machine learning data for TikTok's bidding algorithm.",
      },
      {
        title: "Strategic Creator & UGC Collaboration",
        desc: "We coordinate authentic creator partnerships and user-generated content that build trust and validate your product offerings.",
      },
      {
        title: "Audience Spark Ads Amplification",
        desc: "Boost high-performing organic posts directly through the ad manager to accumulate social proof and drive scalable conversions.",
      },
      {
        title: "Weekly Creative Testing Sprints",
        desc: "Constant production of new angles, hooks, and calls-to-action to keep Cost Per Acquisition low and scalable.",
      },
    ],
    deliverables: [
      "Dedicated TikTok Ads campaign architecture and account configuration",
      "Pack of scripted, native 9:16 vertical video ad creatives with dynamic text overlays",
      "TikTok Events API server-side integration and pixel verification",
      "Instant form CRM webhook integration routing leads to WhatsApp and email",
      "Comprehensive monthly performance reporting and video hook analysis",
    ],
    techStack: ["TikTok Ads Manager", "TikTok Events API", "CapCut Pro / Premiere", "Google Tag Manager", "Zapier / Webhooks"],
    processSteps: [
      { step: "01", title: "Creative Angle & Trend Ideation", desc: "Developing problem/solution hooks and native video concepts tailored to your audience." },
      { step: "02", title: "Video Production & Editing", desc: "Editing high-tempo vertical videos with captions, music, and clear calls-to-action." },
      { step: "03", title: "Campaign Setup & Pixel Tracking", desc: "Configuring custom audiences, interest tags, and server-side tracking pipelines." },
      { step: "04", title: "Optimization & Creative Iteration", desc: "Scaling high-performing hooks and retiring fatigued creatives weekly." },
    ],
    faqs: [
      {
        q: "Is TikTok suitable for our business or is it just for teenagers?",
        a: "Over 65% of TikTok users are now over the age of 25, including high-income professionals, entrepreneurs, and luxury consumers. It has become one of the fastest-growing channels for real estate, legal, medical, tech, and premium B2C brands.",
      },
      {
        q: "Do we have to appear on camera to run TikTok Ads?",
        a: "Not necessarily. We can produce voiceover-led screen walkthroughs, animated motion graphics, b-roll product demos, or work with dedicated creators on your behalf.",
      },
      {
        q: "How does TikTok compare to Meta Ads in cost?",
        a: "TikTok typically delivers 30%–50% lower CPMs (Cost Per Thousand Impressions) than Meta, making it an extraordinarily cost-effective channel for brand awareness and high-volume lead capture.",
      },
    ],
  },

  "social-media": {
    slug: "social-media",
    parentSlug: "digital-marketing",
    parentName: "Digital Marketing",
    parentHref: "/services/digital-marketing",
    title: "B2B Social Media Marketing & Executive Positioning",
    eyebrow: "EXECUTIVE BRAND LEADERSHIP",
    badge: "B2B Brand Authority",
    heroHeadline: "Build Industry Authority & Win High-Value Enterprise Clients on Social Media",
    heroSubcopy:
      "Social media for enterprise companies isn't about generic motivational quotes or dancing videos. We manage executive social positioning across LinkedIn, Instagram, and X, turning your company and executive leadership into respected, go-to authorities that attract lucrative commercial deals.",
    heroImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1600&q=85",
    priceNote: "From $650 / month Management",
    deliveryTimeline: "Continuous Monthly Retainer",
    metrics: [
      { value: "C-Level", label: "Executive Positioning", desc: "Attracting institutional decision-makers and high-ticket partners" },
      { value: "100%", label: "Custom Content", desc: "Bespoke graphics, slides, and authoritative written analysis" },
      { value: "LinkedIn", label: "B2B Focus", desc: "Targeting enterprise accounts and corporate procurement leaders" },
      { value: "Consistent", label: "Publishing Cadence", desc: "Multi-channel distribution with active community engagement" },
    ],
    challengeHeadline: "Why Most Corporate Social Media Channels Look Like Ghost Towns",
    challengePoints: [
      "Posting boring, sterile company announcements that receive zero likes, comments, or meaningful engagement.",
      "Treating LinkedIn like a job board rather than a primary channel for commercial influence and deal-making.",
      "Inconsistent posting cadence that signals to prospective enterprise clients that your business is inactive.",
      "Failing to articulate technical expertise in a way that resonates with both technical and financial decision-makers.",
    ],
    approachHeadline: "Our Authority-First B2B Social Framework",
    approachPoints: [
      "We interview your leadership team to extract unique industry insights, contrarian viewpoints, and proprietary methodologies.",
      "Transforming raw insights into high-authority LinkedIn carousels, executive opinion pieces, and visual breakdown graphics.",
      "Consistent, strategic posting schedules paired with proactive engagement in relevant industry conversations.",
      "Inbound pipeline tracking capturing leads that originate from social interactions and executive direct messages.",
    ],
    features: [
      {
        title: "Executive Personal Branding (Founder & C-Suite)",
        desc: "Position your founders and directors as authoritative industry leaders through ghostwritten thought leadership and strategic commentary.",
      },
      {
        title: "High-Impact LinkedIn Document Carousels",
        desc: "Bespoke multi-slide visual frameworks that break down complex technical topics into easily digestible, highly shareable insights.",
      },
      {
        title: "Bespoke Multi-Channel Visual Asset Design",
        desc: "Custom branded infographics, quotes, and statistics cards adhering strictly to your corporate typography and brand guidelines.",
      },
      {
        title: "Proactive Community Engagement & Outreach",
        desc: "Actively commenting on target prospect accounts, joining industry debates, and nurturing relationships in executive DMs.",
      },
      {
        title: "Content Repurposing & Multi-Channel Syndication",
        desc: "Extract maximum leverage by converting a single case study or whitepaper into multiple tweets, LinkedIn posts, and Instagram slides.",
      },
      {
        title: "Inbound Pipeline & Lead Attribution Tracking",
        desc: "Identify enterprise accounts engaging with your content and route interested prospects directly into your sales CRM.",
      },
    ],
    deliverables: [
      "Monthly content calendar with fully drafted copy, hashtags, and visual assets",
      "12 to 20 bespoke branded graphics and multi-page PDF carousels per month",
      "Executive profile optimization for key founders and leadership team members",
      "Scheduled publication across LinkedIn, X (Twitter), and Instagram",
      "Monthly analytics report measuring reach, engagement, and inbound inquiries",
    ],
    techStack: ["LinkedIn Creator Tools", "Buffer / Metricool", "Figma Design Studio", "Canva Enterprise", "Notion Content Pipeline"],
    processSteps: [
      { step: "01", title: "Brand Voice & Positioning Workshop", desc: "Defining your tone of voice, core topic pillars, and target audience personas." },
      { step: "02", title: "Monthly Content Calendar & Asset Production", desc: "Drafting high-value posts and designing bespoke slide carousels for review." },
      { step: "03", title: "Client Approval & Scheduled Distribution", desc: "You review and approve all posts inside an intuitive visual calendar dashboard." },
      { step: "04", title: "Engagement & Performance Optimization", desc: "Engaging with comments, analyzing top-performing posts, and refining topics." },
    ],
    faqs: [
      {
        q: "How much time will our executive team need to spend each month?",
        a: "Just 45 to 60 minutes for a monthly briefing interview. Our editorial team extracts your insights and handles 100% of the writing, graphic design, scheduling, and formatting.",
      },
      {
        q: "Which platforms should B2B companies prioritize?",
        a: "LinkedIn is by far the most lucrative platform for B2B and enterprise services. We typically pair a strong LinkedIn presence with complementary distribution on X (Twitter) and Instagram.",
      },
      {
        q: "Do you use generic AI-generated posts?",
        a: "Never. Generic AI posts are easily spotted and destroy executive credibility. All content is custom-written by senior technical copywriters based on your real business experience and case studies.",
      },
    ],
  },

  "content-marketing": {
    slug: "content-marketing",
    parentSlug: "digital-marketing",
    parentName: "Digital Marketing",
    parentHref: "/services/digital-marketing",
    title: "Authority Content Marketing & Strategic Thought Leadership",
    eyebrow: "COMPOUNDING EDITORIAL EQUITY",
    badge: "E-E-A-T Certified",
    heroHeadline: "High-Authority Content That Educates Buyers & Dominates Industry Search",
    heroSubcopy:
      "Fluff blog posts written for word count don't close enterprise deals. We produce authoritative industry whitepapers, comprehensive technical guides, and strategic case studies designed to satisfy Google's strict E-E-A-T guidelines, earn high-quality backlinks, and convince skeptical buyers.",
    heroImage: "https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=1600&q=85",
    priceNote: "From $800 / month Retainer",
    deliveryTimeline: "Continuous Monthly Sprints",
    metrics: [
      { value: "E-E-A-T", label: "Content Standard", desc: "Demonstrated experience, expertise, authoritativeness, and trust" },
      { value: "Long-Form", label: "Deep-Dive Articles", desc: "1,500 - 3,000 word comprehensive industry resources" },
      { value: "Evergreen", label: "Compounding Traffic", desc: "Articles that generate qualified leads for years after publication" },
      { value: "Zero AI Slop", label: "Human-Crafted", desc: "Researched and written by technical industry specialists" },
    ],
    challengeHeadline: "The Downfall of Cheap Content Mills and Low-Quality AI Articles",
    challengePoints: [
      "Low-cost writers churn out surface-level articles that offer zero new insight and fail to impress intelligent buyers.",
      "Mass-produced generic AI content gets penalized and suppressed by Google's helpful content search algorithm updates.",
      "Articles without clear call-to-actions or commercial relevance fail to convert reading traffic into actual business inquiries.",
      "Inconsistent publishing schedules fail to build the compounding topical authority required to outrank legacy competitors.",
    ],
    approachHeadline: "Our Editorial Thought Leadership Architecture",
    approachPoints: [
      "We conduct primary research, analyze industry regulatory changes, and interview subject matter experts.",
      "Every piece is structured around high-intent semantic keyword clusters to maximize ranking potential across Google and AI search engines.",
      "Rich media integration: custom data tables, downloadable PDF checklists, bespoke infographics, and structured FAQ schemas.",
      "Strategic content syndication across executive newsletters, LinkedIn, and high-authority industry partners.",
    ],
    features: [
      {
        title: "Deep-Dive Pillar Guides & Topical Hubs",
        desc: "Comprehensive 2,500+ word definitive guides that establish your website as the undisputed benchmark resource in your sector.",
      },
      {
        title: "Enterprise Case Studies & Customer Proof",
        desc: "Compelling problem-approach-results narratives showcasing how your company solved complex technical challenges for real clients.",
      },
      {
        title: "Executive Whitepapers & Industry Reports",
        desc: "Gated, high-value downloadable PDF assets designed to capture verified corporate email addresses and phone numbers.",
      },
      {
        title: "Semantic Search & Question Optimization",
        desc: "Formatted to rank in Google Featured Snippets and provide direct citations in Perplexity AI and ChatGPT Search responses.",
      },
      {
        title: "Custom Technical Diagrams & Infographics",
        desc: "Visual charts, process workflows, and comparison tables designed to earn organic backlinks from other industry websites.",
      },
      {
        title: "Continuous On-Page Conversion Architecture",
        desc: "Inline lead magnets, context-aware consultation booking boxes, and newsletter opt-ins that turn passive readers into active sales leads.",
      },
    ],
    deliverables: [
      "Quarterly content strategy and editorial calendar mapped to buyer intent stages",
      "Fully researched, written, and edited high-authority articles with custom header imagery",
      "Complete CMS formatting and publication on your website with meta tags and schema markup",
      "Downloadable gated lead magnet PDFs with automated email delivery sequences",
      "Monthly performance report analyzing organic rankings, time on page, and lead conversions",
    ],
    techStack: ["Ahrefs Content Explorer", "SurferSEO", "Grammarly Business", "Figma Infographics", "Google Search Console", "WordPress / Next.js CMS"],
    processSteps: [
      { step: "01", title: "Topical Gap & Search Intent Analysis", desc: "Identifying unanswered questions and high-value queries in your market." },
      { step: "02", title: "Deep Research & Technical Outline", desc: "Structuring comprehensive outlines with data sources, case examples, and keywords." },
      { step: "03", title: "Expert Drafting & Graphic Production", desc: "Writing authoritative copy and designing custom diagrams to illustrate key concepts." },
      { step: "04", title: "CMS Publication & Distribution", desc: "Publishing with optimized schema, internal linking, and syndicating to social channels." },
    ],
    faqs: [
      {
        q: "Who actually writes the content for our website?",
        a: "Our content is written by experienced, professional technical copywriters who specialize in business, technology, finance, and enterprise services. We never use cheap offshore content mills.",
      },
      {
        q: "How does high-quality content help generate real sales leads?",
        a: "When a potential high-ticket client researches a complex challenge, finding your comprehensive, authoritative guide proves your expertise before they even speak to your sales team. This builds immediate trust and shortens your sales cycle.",
      },
      {
        q: "Do you handle uploading and formatting the articles on our website?",
        a: "Yes. We format the entire post in your CMS (Next.js, WordPress, Sanity, Webflow), optimize all images with WebP compression, add meta descriptions, and publish it ready for readers.",
      },
    ],
  },

  "email-marketing": {
    slug: "email-marketing",
    parentSlug: "digital-marketing",
    parentName: "Digital Marketing",
    parentHref: "/services/digital-marketing",
    title: "Lifecycle Email Marketing & Automated Drip Funnels",
    eyebrow: "RETENTION & REVENUE AUTOMATION",
    badge: "Automated Lead Nurturing",
    heroHeadline: "Convert Leads Into Paying Customers on Autopilot With Lifecycle Email Marketing",
    heroSubcopy:
      "Email marketing delivers the highest ROI of any digital channel when done right. We architect automated customer onboarding sequences, abandoned inquiry re-engagement funnels, and executive weekly briefings that nurture cold prospects into ready-to-buy commercial clients.",
    heroImage: "https://images.unsplash.com/photo-1579389083078-4e7018379f7e?auto=format&fit=crop&w=1600&q=85",
    priceNote: "From $550 / month Management",
    deliveryTimeline: "Funnel Setup in 1 - 2 Weeks",
    metrics: [
      { value: "42:1", label: "Average Email ROI", desc: "Highest converting channel across modern digital marketing" },
      { value: "35%+", label: "Average Open Rate", desc: "Compelling subject lines and clean sender reputations" },
      { value: "100%", label: "Automated Triggers", desc: "Behavior-based email workflows running 24/7" },
      { value: "0 Spam", label: "Deliverability Standards", desc: "Strict list hygiene and verified domain authentication" },
    ],
    challengeHeadline: "Why Most Corporate Email Marketing Campaigns Get Ignored or Marked as Spam",
    challengePoints: [
      "Sending sporadic, unsegmented email blasts that don't match the recipient's specific interest or buying stage.",
      "Poor sender domain hygiene (missing SPF/DKIM/DMARC) causing critical emails to land directly in promotional or spam tabs.",
      "Ugly, over-designed HTML templates that render broken or unreadable on modern smartphone email clients.",
      "Failing to implement automated behavioral sequences that follow up immediately when a prospect submits an inquiry.",
    ],
    approachHeadline: "Our Behavioral Lifecycle Email Framework",
    approachPoints: [
      "We design clean, modern, mobile-responsive email templates that look like direct personal communications from leadership.",
      "Behavior-triggered workflows: instant welcome drip series, quote follow-up sequences, and re-engagement campaigns.",
      "Granular list segmentation based on lead source, service interest, budget tier, and past interaction history.",
      "Continuous A/B testing of subject lines, preview text, send times, and call-to-action button placements.",
    ],
    features: [
      {
        title: "Automated Lead Nurturing Drip Sequences",
        desc: "Multi-day email workflows that educate prospects on your methodology, address objections, and invite them to book a consultation.",
      },
      {
        title: "Instant Inquiry & Quote Follow-Up Triggers",
        desc: "Ensure no hot lead goes cold by triggering personalized follow-up sequences the moment a contact form is submitted on your site.",
      },
      {
        title: "Executive Thought Leadership Newsletters",
        desc: "High-value bi-weekly or monthly briefing emails that position your firm at the forefront of your clients' minds.",
      },
      {
        title: "List Segmentation & Tagging Architecture",
        desc: "Segment your database by industry, commercial budget, and engagement velocity to deliver hyper-relevant messages to each group.",
      },
      {
        title: "Strict Deliverability & Inbox Placement Audits",
        desc: "Continuous monitoring of bounce rates, spam complaints, and domain authentication to guarantee placement in the primary inbox.",
      },
      {
        title: "CRM & E-Commerce Webhook Synchronization",
        desc: "Two-way integration with HubSpot, Klaviyo, ActiveCampaign, or Mailchimp ensuring customer data is synchronized in real time.",
      },
    ],
    deliverables: [
      "Complete email marketing platform setup and custom domain DNS authentication",
      "Suite of bespoke, mobile-responsive email templates matching your brand",
      "3 to 5 fully written and automated behavioral drip sequences (Welcome, Follow-Up, Re-engagement)",
      "Automated lead capture form integrations across your website and landing pages",
      "Monthly campaign performance reports analyzing open rates, click rates, and attributed revenue",
    ],
    techStack: ["Klaviyo", "HubSpot Email", "ActiveCampaign", "Mailchimp", "Litmus Email Testing", "SendGrid"],
    processSteps: [
      { step: "01", title: "Domain Authentication & List Audit", desc: "Validating DKIM/DMARC records and cleaning inactive contacts." },
      { step: "02", title: "Template Design & Funnel Architecture", desc: "Designing clean email templates and mapping out behavioral trigger paths." },
      { step: "03", title: "Copywriting & Automation Logic", desc: "Writing compelling email sequences with personalized merge tags and triggers." },
      { step: "04", title: "Testing, Launch & Split-Testing", desc: "Verifying rendering across mobile and desktop clients and activating automations." },
    ],
    faqs: [
      {
        q: "Which email marketing platform should our business use?",
        a: "For B2B services, HubSpot or ActiveCampaign is exceptional. For eCommerce storefronts, Klaviyo is the gold standard. We evaluate your existing software stack and recommend the optimal platform.",
      },
      {
        q: "How do you prevent our emails from landing in the spam folder?",
        a: "We configure strict cryptographic authentication (SPF, DKIM, DMARC), implement double opt-in protocols, maintain high list hygiene, and avoid spam-trigger keywords in our subject lines.",
      },
      {
        q: "Can you write all the email copy and design the templates?",
        a: "Yes. Our team handles 100% of the copywriting, visual design, technical automation setup, and performance monitoring.",
      },
    ],
  },

  remarketing: {
    slug: "remarketing",
    parentSlug: "digital-marketing",
    parentName: "Digital Marketing",
    parentHref: "/services/digital-marketing",
    title: "Multi-Touch Dynamic Remarketing & Conversion Retargeting",
    eyebrow: "RE-ENGAGE & CONVERT HIGH-VALUE VISITORS",
    badge: "Recover Lost Leads",
    heroHeadline: "Re-Engage High-Value Prospects Who Visited Your Website But Didn't Inquire",
    heroSubcopy:
      "Over 95% of first-time website visitors leave without submitting an inquiry. Don't let those expensive visits evaporate. We engineer multi-touch cross-platform remarketing campaigns across Google Display, YouTube, LinkedIn, and Meta that keep your brand top-of-mind until prospects are ready to buy.",
    heroImage: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=1600&q=85",
    priceNote: "From $500 / month Management",
    deliveryTimeline: "Setup in 5 - 7 Days",
    metrics: [
      { value: "3x - 5x", label: "Higher CTR", desc: "Compared to standard cold prospecting advertising" },
      { value: "-45%", label: "Lower Cost Per Lead", desc: "Capitalizing on pre-existing brand familiarity" },
      { value: "360°", label: "Omnichannel Reach", desc: "Display, YouTube, Meta, and LinkedIn coverage" },
      { value: "Frequency", label: "Capped Delivery", desc: "Prevents ad annoyance by limiting daily impressions per user" },
    ],
    challengeHeadline: "Why Single-Touch Advertising Leaves Massive Revenue on the Table",
    challengePoints: [
      "B2B and high-ticket service sales cycles take days or weeks—expecting cold traffic to convert on their first visit is unrealistic.",
      "Visitors get interrupted by calls, meetings, or research and forget to return to your website.",
      "Without remarketing, the thousands of dollars spent driving initial clicks to your site are permanently lost.",
      "Uncontrolled remarketing that stalks users with the same annoying banner 50 times a day damages corporate brand reputation.",
    ],
    approachHeadline: "Our Strategic Sequential Remarketing Framework",
    approachPoints: [
      "We segment audiences by their depth of engagement: pricing page visitors, service page viewers, and abandoned form submitters.",
      "Sequential storytelling: Day 1–7 delivers case study proof; Day 8–14 highlights client video testimonials; Day 15–30 introduces an executive consultation offer.",
      "Strict frequency capping (2–3 impressions per day maximum) ensures high visibility without feeling invasive.",
      "Omnichannel retargeting across Google Display Network, YouTube, Meta, and LinkedIn to meet prospects wherever they browse.",
    ],
    features: [
      {
        title: "Behavior-Based Audience Segmentation",
        desc: "Serve completely different ads to someone who read a single blog post versus someone who spent 5 minutes on your pricing page.",
      },
      {
        title: "Sequential Storytelling Ad Sequences",
        desc: "Guide prospects through an intentional narrative arc: address initial hesitations, demonstrate proof, and present compelling reasons to act.",
      },
      {
        title: "Omnichannel Cross-Device Reach",
        desc: "Reach decision-makers on their desktop at the office and follow up on their mobile Instagram or YouTube feeds in the evening.",
      },
      {
        title: "Dynamic Creative & Offer Customization",
        desc: "Automatically display the exact service category or product the visitor previously browsed, creating personalized relevance.",
      },
      {
        title: "Strict Impression Frequency Capping",
        desc: "Protect brand prestige by ensuring ads are seen just enough to maintain awareness without annoying prospective clients.",
      },
      {
        title: "Conversion Exclusion Logic",
        desc: "The second a prospect submits an inquiry or books a call, they are instantly removed from remarketing lists to save ad spend.",
      },
    ],
    deliverables: [
      "Complete remarketing audience segmentation architecture in Google, Meta, and LinkedIn",
      "Full suite of custom-designed static banners, animated display ads, and carousel creatives",
      "Sequential campaign setup with automated frequency controls and conversion exclusions",
      "Cross-platform pixel verification and server-side tracking validation",
      "Monthly performance reporting analyzing assisted conversions and return on ad spend",
    ],
    techStack: ["Google Display Network", "Meta Custom Audiences", "LinkedIn Matched Audiences", "YouTube Remarketing", "Google Tag Manager"],
    processSteps: [
      { step: "01", title: "Audience Segmentation Mapping", desc: "Defining behavioral triggers for high-intent versus casual site visitors." },
      { step: "02", title: "Creative Banner & Video Production", desc: "Designing polished display banners, video snippets, and case study creatives." },
      { step: "03", title: "Pixel Setup & Audience Population", desc: "Connecting tracking tags and populating custom retargeting pools." },
      { step: "04", title: "Campaign Launch & Sequential Testing", desc: "Activating frequency-capped sequences and tracking recovered inquiries." },
    ],
    faqs: [
      {
        q: "Why is remarketing so much more cost-effective than standard advertising?",
        a: "Because you are only showing ads to people who have already visited your website and demonstrated interest in your services. Their likelihood of converting is 3x to 5x higher, dramatically reducing your Cost Per Acquisition.",
      },
      {
        q: "Will remarketing make our brand look spammy or annoying?",
        a: "Not with our approach. We implement strict frequency capping (limiting ads to 2–3 views per day) and use helpful, educational content rather than aggressive, repetitive sales banners.",
      },
      {
        q: "How many website visitors do we need before we can run remarketing?",
        a: "Google and Meta typically require an audience pool of at least 100 to 1,000 active visitors to begin serving ads. If you are already running SEO or paid traffic, you can start immediately.",
      },
    ],
  },

  "lead-gen": {
    slug: "lead-gen",
    parentSlug: "digital-marketing",
    parentName: "Digital Marketing",
    parentHref: "/services/digital-marketing",
    title: "B2B Lead Generation & Predictable Sales Pipeline Acquisition",
    eyebrow: "PREDICTABLE COMMERCIAL GROWTH",
    badge: "Closed-Loop Sales Pipeline",
    heroHeadline: "Build a Predictable Pipeline of Qualified B2B Decision-Makers",
    heroSubcopy:
      "Tired of relying on unpredictable word-of-mouth referrals or cold calling? We engineer end-to-end B2B lead generation engines combining precision paid search, high-converting interactive funnels, and automated CRM qualification that fill your sales calendar with qualified decision-makers.",
    heroImage: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1600&q=85",
    priceNote: "From $1,250 / month Management Retainer",
    deliveryTimeline: "Engine Setup in 2 Weeks",
    metrics: [
      { value: "Qualified", label: "Lead Standard", desc: "Verified corporate budget, timeline, and decision-making authority" },
      { value: "sub-5 Min", label: "Response Routing", desc: "Instant automated WhatsApp and email notification to sales" },
      { value: "2x - 3x", label: "Pipeline Velocity", desc: "Pre-qualifying leads before they ever reach your calendar" },
      { value: "100%", label: "Closed-Loop CRM", desc: "Tracking cost per lead directly to closed revenue" },
    ],
    challengeHeadline: "The Pain of Unpredictable and Low-Quality B2B Inquiries",
    challengePoints: [
      "Spending valuable hours on sales calls with unqualified prospects who don't have the budget or authority to buy.",
      "Relying on random referrals creates stressful revenue rollercoasters with feast-and-famine cash flow cycles.",
      "Slow response times: taking 24 hours to reply to an inbound inquiry allows competitors to steal the deal.",
      "Inability to forecast quarterly revenue because there is no repeatable mechanism to generate new customer pipeline.",
    ],
    approachHeadline: "Our End-to-End Pipeline Acquisition Engine",
    approachPoints: [
      "We target high-intent commercial decision-makers through Google Search, LinkedIn B2B, and precision Meta funnels.",
      "Multi-step interactive qualification funnels screen prospects for budget, company size, and project timeline before booking.",
      "Direct calendar integration (Calendly/HubSpot) allowing pre-qualified prospects to schedule sales meetings directly on your calendar.",
      "Instant multi-channel notifications (WhatsApp, SMS, CRM) empowering your sales reps to strike while the lead is hot.",
    ],
    features: [
      {
        title: "Multi-Channel Commercial Traffic Acquisition",
        desc: "Coordinated campaigns across Google Ads, LinkedIn B2B, and Meta targeting verified executives and business owners.",
      },
      {
        title: "Interactive Lead Qualification Funnels",
        desc: "Custom interactive questionnaires that qualify budget and timeline while educating the prospect on your unique value proposition.",
      },
      {
        title: "Direct Executive Calendar Scheduling",
        desc: "Eliminate email back-and-forth by embedding self-service calendar booking tools directly at the end of the qualification funnel.",
      },
      {
        title: "Instant WhatsApp & CRM Lead Routing",
        desc: "Webhooks instantly alert your sales team on WhatsApp with the prospect's full profile the moment they submit their information.",
      },
      {
        title: "Automated Pre-Call Nurture Sequences",
        desc: "Send automated case studies and introductory videos before the scheduled call so prospects arrive pre-sold on your expertise.",
      },
      {
        title: "Closed-Loop Pipeline Revenue Reporting",
        desc: "Track every lead stage in your CRM (Inquiry, Qualified, Meeting Held, Proposal Sent, Won) to continuously optimize for profit.",
      },
    ],
    deliverables: [
      "Complete B2B lead generation architecture and paid campaign builds",
      "Custom multi-step interactive qualification landing page and lead magnet",
      "Direct calendar integration with automated SMS and WhatsApp confirmation triggers",
      "CRM pipeline staging and automated lead notification webhooks",
      "Bi-weekly pipeline review meetings and ongoing campaign optimization",
    ],
    techStack: ["Google Ads", "LinkedIn Ads", "HubSpot CRM", "Calendly / Cal.com", "WhatsApp Business API", "Zapier / n8n"],
    processSteps: [
      { step: "01", title: "Ideal Customer Profile (ICP) Scoping", desc: "Defining target company revenue, decision-maker job titles, and pain points." },
      { step: "02", title: "Funnel & Qualification Architecture", desc: "Building the custom interactive qualification questionnaire and booking flow." },
      { step: "03", title: "Targeted Paid Campaign Launch", desc: "Deploying high-intent search and social campaigns targeting qualified decision-makers." },
      { step: "04", title: "Pipeline Optimization & Scaling", desc: "Analyzing meeting show-up rates, lead quality, and scaling budget into winning channels." },
    ],
    faqs: [
      {
        q: "What defines a 'qualified lead' under your framework?",
        a: "A qualified lead is a verified decision-maker (Owner, CEO, Director, Procurement Lead) who meets your minimum budget threshold, has an active project timeline, and has booked a dedicated strategy session on your calendar.",
      },
      {
        q: "How quickly do leads begin flowing once launched?",
        a: "Because we utilize direct-response paid search and targeted social campaigns, qualified inquiries typically begin arriving within 48 to 72 hours of campaign activation.",
      },
      {
        q: "Can this system integrate with our existing sales team's workflow?",
        a: "Yes. Inquiries can be routed directly into your existing CRM (HubSpot, Salesforce, Zoho, Pipedrive), sent via Slack/WhatsApp notifications, or booked directly into individual sales reps' Google or Outlook calendars.",
      },
    ],
  },
};
