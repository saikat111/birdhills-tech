import { SubServiceDetail } from "../subServicesData";

export const ANALYTICS_SUB_SERVICES: Record<string, SubServiceDetail> = {
  ga4: {
    slug: "ga4",
    parentSlug: "analytics-cro",
    parentName: "Analytics & CRO",
    parentHref: "/services/analytics-cro",
    title: "Google Analytics 4 (GA4) Enterprise Setup & Event Schema Architecture",
    eyebrow: "FOUNDATIONAL MEASUREMENT",
    badge: "Certified Google Analytics Experts",
    heroHeadline: "Fix Broken Analytics With Precision Google Analytics 4 Architecture",
    heroSubcopy:
      "Most GA4 accounts are broken—burdened with missing conversion events, skewed session metrics, and zero cross-domain tracking. We architect enterprise GA4 implementations with structured custom event schemas, clean data streams, enhanced e-commerce funnels, and BigQuery data export pipelines.",
    heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=85",
    priceNote: "From AED 3,800 / $1,050 setup & audit",
    deliveryTimeline: "5 to 10 Business Days",
    metrics: [
      { value: "100%", label: "Event Accuracy", desc: "Rigorous debugging eliminates duplicate and phantom conversions" },
      { value: "BigQuery", label: "Raw Data Export", desc: "Bypass GA4 thresholding and 14-month data retention limits" },
      { value: "0 Loss", label: "Cross-Domain Tracking", desc: "Seamless attribution across subdomains and payment gateways" },
      { value: "Full Audit", label: "GDPR & Consent Mode v2", desc: "Compliant tracking adhering strictly to international privacy laws" },
    ],
    challengeHeadline: "Why Default GA4 Setups Mislead Marketing Decisions",
    challengePoints: [
      "GA4 auto-collected events miss critical micro-conversions like PDF downloads, video watch times, and multi-step form steps.",
      "Google's default 14-month data retention wipes out your historical year-over-year comparison capabilities.",
      "Cross-domain tracking failures cause payment gateways (like Stripe or Telr) to overwrite traffic attribution as referral traffic.",
      "Google Consent Mode v2 misconfigurations result in unmeasured European/UK traffic or potential compliance penalties.",
    ],
    approachHeadline: "Engineered Custom Event Schemas & BigQuery Warehouse Integration",
    approachPoints: [
      "We build a documented Measurement Plan mapping every user interaction to standardized GA4 event parameters.",
      "Custom JavaScript dataLayer variables capture dynamic product IDs, user IDs, transaction values, and lead parameters.",
      "We link GA4 directly to Google BigQuery, ensuring unlimited lifetime storage of raw, un-sampled event logs.",
      "We configure Google Consent Mode v2 to model conversions legally for users who decline non-essential cookies.",
    ],
    features: [
      {
        title: "Standardized Custom Event Schema",
        desc: "Custom event naming conventions (e.g. `lead_form_submit`, `pricing_toggle`) with descriptive dimensions.",
      },
      {
        title: "Enhanced E-Commerce Tracking",
        desc: "Complete implementation of `view_item`, `add_to_cart`, `begin_checkout`, and `purchase` with tax and shipping parameters.",
      },
      {
        title: "Google BigQuery Data Warehouse Sync",
        desc: "Automated daily export of raw, hit-level hit data bypassing GA4 sampling and the 14-month retention wall.",
      },
      {
        title: "Cross-Domain & Subdomain Linker",
        desc: "Ensures seamless user session continuity between your main domain, subdomain checkout, and client portals.",
      },
      {
        title: "Google Consent Mode v2 Implementation",
        desc: "Complies with EU/UK privacy standards while using Google AI conversion modeling to recover unconsented data.",
      },
      {
        title: "Internal Traffic & Bot Filtering",
        desc: "Eliminates office IP addresses, testing environments, and known bot spiders to keep metrics completely pure.",
      },
    ],
    deliverables: [
      "Comprehensive Measurement Plan & Data Dictionary spreadsheet",
      "Production GA4 property setup with custom definitions, metrics, and audiences",
      "Google BigQuery raw event export configuration",
      "Consent Mode v2 banner integration and verification report",
      "Executive Looker Studio validation dashboard",
      "30-day post-launch data integrity monitoring and discrepancy reconciliation",
    ],
    techStack: ["Google Analytics 4", "Google Tag Manager", "Google BigQuery", "Looker Studio", "JavaScript DataLayer", "Cookiebot"],
    processSteps: [
      { step: "Phase 1", title: "Measurement Audit & Architecture", desc: "Audit current GA4 tracking, map missing business KPIs, and draft a structured event dictionary." },
      { step: "Phase 2", title: "DataLayer & GTM Configuration", desc: "Deploy custom dataLayer pushes, triggers, and parameters through Google Tag Manager." },
      { step: "Phase 3", title: "Consent Mode & BigQuery Setup", desc: "Integrate privacy consent banners and activate automated BigQuery streaming exports." },
      { step: "Phase 4", title: "Debugging & QA Validation", desc: "Perform real-time debug view testing across all conversion funnels to ensure 100% parameter accuracy." },
    ],
    faqs: [
      {
        q: "Why do we need BigQuery if we already have Google Analytics 4?",
        a: "By default, the GA4 user interface limits custom exploration data to 14 months and frequently applies 'thresholding' (hiding small data segments). BigQuery stores your raw, unsampled data forever with full SQL query power.",
      },
      {
        q: "What is Google Consent Mode v2 and do we need it?",
        a: "If you advertise on Google Ads or receive traffic from the UK or European Economic Area, Consent Mode v2 is legally mandatory. It adjusts Google tag behavior based on user cookie preferences and recovers lost conversions using machine learning.",
      },
      {
        q: "How long does a full GA4 implementation audit and fix take?",
        a: "A typical enterprise audit, dataLayer architecture, and deployment takes between 5 to 10 business days.",
      },
    ],
  },

  gtm: {
    slug: "gtm",
    parentSlug: "analytics-cro",
    parentName: "Analytics & CRO",
    parentHref: "/services/analytics-cro",
    title: "Google Tag Manager (GTM) Server-Side & Web Container Engineering",
    eyebrow: "ENTERPRISE TAG MANAGEMENT",
    badge: "Server-Side Tagging Specialists",
    heroHeadline: "Accelerate Page Speed and Secure Data With Server-Side Google Tag Manager",
    heroSubcopy:
      "Client-side marketing pixels slow down your website, get blocked by ad blockers and Apple iOS privacy updates, and expose user data to third parties. We architect advanced Server-Side and Web Google Tag Manager containers that speed up your site, protect customer privacy, and recover lost conversion data.",
    heroImage: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=1600&q=85",
    priceNote: "From AED 4,500 / $1,250 server-side architecture",
    deliveryTimeline: "7 to 14 Business Days",
    metrics: [
      { value: "30-50%", label: "Faster Page Speed", desc: "Offload dozens of client-side tracking scripts to a single cloud server" },
      { value: "15-25%", label: "More Conversions Recorded", desc: "Bypass ad blockers and browser privacy restrictions (ITP/Brave)" },
      { value: "100%", label: "First-Party Cookies", desc: "Extend Safari cookie expiration from 24 hours to up to 2 years" },
      { value: "Zero PII Leakage", label: "Data Redaction", desc: "Scrub IP addresses and sensitive user parameters before forwarding to third parties" },
    ],
    challengeHeadline: "Why Traditional Client-Side Tagging is Obsolete",
    challengePoints: [
      "Heavy marketing tags (Facebook Pixel, TikTok, LinkedIn, Hotjar) drag down Core Web Vitals and hurt SEO rankings.",
      "Ad blockers and Apple Safari ITP (Intelligent Tracking Prevention) wipe out cookies after 24 hours, breaking ad attribution.",
      "Third-party scripts injected into browsers introduce significant security vulnerabilities and malware risks.",
      "Marketing teams constantly beg developers to add or update tracking snippets, stalling campaign launches.",
    ],
    approachHeadline: "First-Party Cloud Server Tagging With Client-Side Cleansing",
    approachPoints: [
      "We deploy dedicated Google Cloud Run or AWS server-side GTM containers mapped to your own custom subdomain (e.g., `metrics.yourdomain.com`).",
      "Browsers send a single lightweight stream to your private server, which enriches the payload and distributes it server-to-server.",
      "Cookies are set with the `HttpOnly` and `Secure` flags as true first-party cookies, completely immune to Safari ITP restrictions.",
      "Sensitive customer PII (credit cards, passwords, phone numbers) is stripped out before payloads are dispatched to ad networks.",
    ],
    features: [
      {
        title: "Dedicated Cloud Server Deployment",
        desc: "Dockerized GTM server container deployed on Google Cloud Platform or AWS with auto-scaling high availability.",
      },
      {
        title: "First-Party Custom Domain Mapping",
        desc: "Routes all analytics traffic through your own brand domain, bypassing browser content blockers.",
      },
      {
        title: "Cookie Lifetime Extension (Safari ITP)",
        desc: "Sets authentic server-side cookies extending attribution lookback windows up to 400 days in Apple Safari.",
      },
      {
        title: "PII Redaction & Governance",
        desc: "Removes IP addresses and anonymizes user parameters to ensure full GDPR, CCPA, and UAE data law compliance.",
      },
      {
        title: "Web Container Modularization",
        desc: "Clean organization of web tags, triggers, and variables with strict naming conventions and version control.",
      },
      {
        title: "Consolidated Tag Dispatch",
        desc: "One single browser event feeds GA4, Meta CAPI, Google Ads Enhanced Conversions, and LinkedIn Insight simultaneously.",
      },
    ],
    deliverables: [
      "Deployed and configured Server-Side GTM container on Google Cloud Platform or AWS",
      "Custom first-party subdomain mapping with automatic SSL certificate renewal",
      "Re-architected Web GTM container with consolidated triggers and standardized dataLayer",
      "Server-side Meta Conversions API (CAPI) and Google Ads Conversion setup",
      "Comprehensive Tag Governance & Data Flow Architecture documentation",
      "Complete staging test report demonstrating page speed and cookie longevity gains",
    ],
    techStack: ["Google Tag Manager (Web & Server)", "Google Cloud Platform (Cloud Run)", "AWS", "Docker", "JavaScript", "Meta CAPI"],
    processSteps: [
      { step: "Phase 1", title: "Tag Audit & Pruning", desc: "Audit all existing client-side scripts, identify redundant pixels, and document target data flows." },
      { step: "Phase 2", title: "Cloud Server Provisioning", desc: "Deploy Dockerized GTM server on Google Cloud Run with custom subdomain routing." },
      { step: "Phase 3", title: "Server-Side Tag Migration", desc: "Migrate GA4, Meta CAPI, and Google Ads conversions to fire directly from your server container." },
      { step: "Phase 4", title: "Speed & Attribution Validation", desc: "Verify page speed improvements, ad blocker resilience, and Safari cookie durability." },
    ],
    faqs: [
      {
        q: "How much does hosting a server-side GTM container cost?",
        a: "A standard setup on Google Cloud Platform (Cloud Run) typically costs between $10 to $30 per month in cloud compute fees for most medium-sized websites, with free-tier allowances covering smaller sites.",
      },
      {
        q: "Will server-side GTM make our website visibly faster?",
        a: "Yes. By removing bulky client-side tracking libraries from the browser, your page requires less JavaScript parsing, improving your Google PageSpeed and Core Web Vitals scores.",
      },
      {
        q: "Can ad blockers still block tracking with Server-Side GTM?",
        a: "Because all analytics requests are routed through your own first-party domain (e.g. `data.yourdomain.com`) as standard secure HTTPS traffic, typical browser ad-blockers cannot identify or block the requests.",
      },
    ],
  },

  tracking: {
    slug: "tracking",
    parentSlug: "analytics-cro",
    parentName: "Analytics & CRO",
    parentHref: "/services/analytics-cro",
    title: "Full-Funnel Conversion Tracking & E-Commerce DataLayer Architecture",
    eyebrow: "ACCURATE CONVERSION TELEMETRY",
    badge: "100% Data Precision",
    heroHeadline: "Track Every Step of the Buyer Journey With Bulletproof Conversion Telemetry",
    heroSubcopy:
      "When ad networks don't receive accurate conversion signals, smart bidding algorithms fail and ad spend is wasted. We build robust, error-free conversion tracking frameworks and standardized e-commerce dataLayers—capturing exact revenue, lead values, micro-actions, and offline sales.",
    heroImage: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1600&q=85",
    priceNote: "From AED 3,500 / $950 complete setup",
    deliveryTimeline: "5 to 10 Business Days",
    metrics: [
      { value: "0%", label: "Data Discrepancy", desc: "Perfect alignment between payment processor receipts and ad platform reporting" },
      { value: "100%", label: "Enhanced Conversions", desc: "Hashed first-party user data matches buyers to ad clicks" },
      { value: "Full Funnel", label: "Micro & Macro Events", desc: "Track every step from click to contract signing" },
      { value: "Offline Sync", label: "CRM Revenue Matching", desc: "Feed closed enterprise deals back into Google & Meta ads" },
    ],
    challengeHeadline: "The Blind Spot of Broken Conversion Tracking",
    challengePoints: [
      "Ad platforms claim 50 purchases while your bank account only shows 20, destroying trust in advertising ROI.",
      "Missing Enhanced Conversions prevents Google and Meta algorithms from finding higher-value customers.",
      "iFrame forms, embedded scheduling widgets, and external checkouts drop tracking parameters silently.",
      "Offline sales won weeks after the initial ad click never feed back into advertising algorithms to train them.",
    ],
    approachHeadline: "Standardized DataLayer Implementation With Cryptographic Hashing",
    approachPoints: [
      "We code standardized JSON dataLayers directly into your web templates, exposing verified transaction IDs and prices.",
      "We implement Google Ads Enhanced Conversions and Meta Advanced Matching using client-side SHA-256 hashed emails.",
      "We build offline conversion import pipelines syncing CRM 'Closed Won' deals back to Google Ads via API.",
      "Cross-domain postMessage listeners capture form completions inside third-party embedded iFrames.",
    ],
    features: [
      {
        title: "Standardized E-Commerce DataLayer",
        desc: "Native dataLayer implementation adhering strictly to GA4 and Google Ads schema specifications.",
      },
      {
        title: "Google Ads Enhanced Conversions",
        desc: "Sends SHA-256 hashed customer email and phone data to boost conversion reporting accuracy by 10-15%.",
      },
      {
        title: "Meta Advanced Matching",
        desc: "Passes hashed user data with Meta Pixel and CAPI events, significantly improving ad set match rates.",
      },
      {
        title: "Offline Conversion Imports (OCI)",
        desc: "Automated daily sync feeding actual cash-collected revenue from HubSpot or Salesforce back into Google Ads.",
      },
      {
        title: "iFrame & Multi-Domain Listeners",
        desc: "Captures lead submissions inside embedded Typeforms, Calendly widgets, or third-party reservation systems.",
      },
      {
        title: "Transaction De-Duplication Safeguards",
        desc: "Attaches unique transaction IDs to purchases, preventing accidental double-counting on page refreshes.",
      },
    ],
    deliverables: [
      "Complete custom dataLayer code specification and implementation guide",
      "Configured Enhanced Conversions in Google Ads and Meta Business Manager",
      "Offline conversion API pipeline linking CRM deals to advertising platforms",
      "Full tracking test matrix covering desktop, iOS, Android, and private browsers",
      "Attribution reconciliation report comparing CRM sales to platform conversions",
      "Executive handover documentation and conversion monitoring guide",
    ],
    techStack: ["Google Tag Manager", "Google Ads API", "Meta Conversions API", "JavaScript", "HubSpot", "Shopify DataLayer"],
    processSteps: [
      { step: "Phase 1", title: "Funnel Mapping & Audit", desc: "Identify every conversion action: lead forms, button clicks, appointment bookings, and checkouts." },
      { step: "Phase 2", title: "DataLayer Coding & Verification", desc: "Implement clean dataLayer pushes exposing transaction values, IDs, and hashed customer parameters." },
      { step: "Phase 3", title: "Platform Tagging & Advanced Matching", desc: "Configure GTM tags with Enhanced Conversions and Meta Advanced Matching enabled." },
      { step: "Phase 4", title: "Transaction Testing & Live Verification", desc: "Place real test transactions to verify that deduplication, tax/shipping values, and offline sync match 100%." },
    ],
    faqs: [
      {
        q: "What are Google Enhanced Conversions?",
        a: "Enhanced Conversions is a Google feature that hashes first-party customer data (like email and phone number) upon form submission or purchase, securely matching it against logged-in Google accounts to attribute conversions that cookies missed.",
      },
      {
        q: "Can you track bookings made inside an embedded Calendly or Typeform?",
        a: "Yes. We implement custom JavaScript window event listeners that detect postMessage events fired by Calendly or Typeform, triggering conversion tags seamlessly.",
      },
      {
        q: "How does offline conversion tracking help our advertising?",
        a: "Instead of telling Google Ads you just got a 'lead', offline tracking informs the algorithm which leads actually signed a contract and paid money. Google's AI then optimizes ads to find more paying customers rather than low-quality form fillers.",
      },
    ],
  },

  capi: {
    slug: "capi",
    parentSlug: "analytics-cro",
    parentName: "Analytics & CRO",
    parentHref: "/services/analytics-cro",
    title: "Meta Conversions API (CAPI), TikTok & Google Ads Server-to-Server Tracking",
    eyebrow: "SERVER-SIDE ATTRIBUTION",
    badge: "9.0+ Meta Event Quality",
    heroHeadline: "Bypass Browser Ad Blockers With Server-to-Server Conversions API (CAPI)",
    heroSubcopy:
      "Client-side tracking pixels now miss up to 30% of conversions due to Apple iOS privacy settings, Brave browser shields, and ad blockers. We engineer server-to-server Conversions API (CAPI) integrations for Meta, TikTok, and Google—delivering 100% conversion capture, higher Event Quality scores, and lower customer acquisition costs.",
    heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=85",
    priceNote: "From AED 4,200 / $1,150 setup",
    deliveryTimeline: "5 to 10 Business Days",
    metrics: [
      { value: "9.0+ / 10", label: "Meta Event Quality", desc: "Top-tier match rates with multi-parameter server enrichment" },
      { value: "100%", label: "Event Deduplication", desc: "Flawless browser-server event_id pairing prevents duplicate metrics" },
      { value: "30%", label: "Recovered Conversions", desc: "Capture transactions completely missed by browser-side pixels" },
      { value: "Zero Loss", label: "iOS Resilience", desc: "Immune to Apple Safari ITP and private browsing restrictions" },
    ],
    challengeHeadline: "Why Relying Solely on Browser Pixels Destroys Ad Optimization",
    challengePoints: [
      "Apple's App Tracking Transparency (ATT) and Safari ITP block browser cookies after 24 hours.",
      "Ad-blocking browser extensions silently block Facebook Pixel and TikTok scripts before they execute.",
      "Lower event match quality scores in Meta Ads Manager force algorithms to guess, driving up your cost per acquisition.",
      "Amateur server setups cause duplicate counting because events lack unique event IDs for deduplication.",
    ],
    approachHeadline: "Hybrid Dual-Tagging Architecture With Server-Side Deduplication",
    approachPoints: [
      "We deploy a hybrid architecture firing both browser pixels and direct server-to-server API calls simultaneously.",
      "Shared cryptographic `event_id` parameters ensure Meta and TikTok deduplicate events with 100% precision.",
      "We enrich server payloads with IP addresses, user agents, hashed customer emails, and phone numbers.",
      "Direct cloud server dispatch ensures events reach Meta and TikTok servers even when user browsers block tracking entirely.",
    ],
    features: [
      {
        title: "Meta Conversions API (CAPI) Integration",
        desc: "Direct REST API pipeline sending purchase, lead, and view content events straight to Meta servers.",
      },
      {
        title: "TikTok Events API Setup",
        desc: "Server-side integration capturing TikTok conversions unaffected by mobile browser restrictions.",
      },
      {
        title: "Deterministic Event Deduplication",
        desc: "Matches browser and server events via unique `event_id` timestamps, guaranteeing zero duplicate conversions.",
      },
      {
        title: "Advanced Customer Data Enrichment",
        desc: "Collects and hashes customer email, phone, city, and zip code to achieve Event Match Quality scores above 8.5/10.",
      },
      {
        title: "Google Ads Server-Side Tagging",
        desc: "Dispatches Google conversion events server-to-server with first-party cookie longevity.",
      },
      {
        title: "Real-Time Health Monitoring",
        desc: "Automated webhook alert triggers if Meta CAPI error rates rise or API tokens expire.",
      },
    ],
    deliverables: [
      "Production deployment of Meta CAPI and TikTok Events API (via Server-Side GTM or direct API)",
      "Full browser-server deduplication implementation and verification",
      "Customer data hashing module meeting GDPR and Meta privacy guidelines",
      "Meta Events Manager Event Quality Score optimization report (targeting 8.5+ score)",
      "Server endpoint maintenance and permanent access token generation",
      "30-day post-launch attribution comparison and ROAS review",
    ],
    techStack: ["Meta Conversions API", "TikTok Events API", "Google Tag Manager Server", "Node.js", "Python", "SHA-256 Hashing"],
    processSteps: [
      { step: "Phase 1", title: "API Authentication & Token Setup", desc: "Generate permanent system user access tokens in Meta Business Manager and TikTok Events Manager." },
      { step: "Phase 2", title: "Deduplication ID Architecture", desc: "Implement deterministic `event_id` generation across both browser and server layers." },
      { step: "Phase 3", title: "Server-to-Server Payload Build", desc: "Construct enriched payloads with hashed user parameters and first-party cookie identifiers (`_fbp`, `_fbc`)." },
      { step: "Phase 4", title: "Live Payload Inspection & QA", desc: "Verify live event receipt in Meta Test Events tool and confirm deduplication status." },
    ],
    faqs: [
      {
        q: "What is an Event Quality Score in Meta Ads Manager?",
        a: "Meta scores your event match quality from 1 to 10 based on how many customer parameters (hashed email, phone, city, IP) you send. Scores above 8.0 unlock significantly better algorithm targeting and lower cost per conversion.",
      },
      {
        q: "Does this replace the standard Meta browser pixel?",
        a: "No, Meta recommends a 'hybrid' setup. The browser pixel runs alongside the server CAPI, and Meta's deduplication engine automatically merges them using matching `event_id` values for maximum reliability.",
      },
      {
        q: "What happens if a user visits from a browser with an active ad blocker?",
        a: "The browser pixel will be blocked, but the server-side Conversions API event fires directly from your server to Meta's servers, ensuring the conversion is fully recorded and attributed.",
      },
    ],
  },

  cro: {
    slug: "cro",
    parentSlug: "analytics-cro",
    parentName: "Analytics & CRO",
    parentHref: "/services/analytics-cro",
    title: "Conversion Rate Optimization (CRO), A/B Testing & Funnel Diagnostics",
    eyebrow: "REVENUE MULTIPLIER",
    badge: "Data-Driven Growth",
    heroHeadline: "Turn More of Your Existing Website Traffic Into Paying Customers",
    heroSubcopy:
      "Doubling your conversion rate doubles your revenue without spending an extra dollar on advertising. We conduct rigorous user behavior analysis, qualitative user testing, heatmaps, and statistical A/B split-testing to eliminate checkout friction and maximize landing page revenue.",
    heroImage: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1600&q=85",
    priceNote: "From AED 6,500 / $1,750 / month CRO sprint",
    deliveryTimeline: "Ongoing Monthly Testing",
    metrics: [
      { value: "35-70%", label: "Average Conversion Lift", desc: "Validated over 90-day testing cycles with statistical significance" },
      { value: "95%+", label: "Statistical Confidence", desc: "Scientific testing methods that prevent false-positive conclusions" },
      { value: "100%", label: "Heatmap & Recording Insights", desc: "Identify the exact friction points causing users to bounce" },
      { value: "2x", label: "Return on Ad Spend", desc: "Higher conversion rates make current advertising instantly more profitable" },
    ],
    challengeHeadline: "The Tragedy of Leaky Marketing Funnels",
    challengePoints: [
      "Companies pour thousands into paid traffic, only to see 97% of visitors leave without buying or inquiring.",
      "Redesigns based on executive personal opinions often result in lower conversions than the original site.",
      "Hidden mobile UX glitches (such as tiny buttons or broken form fields) silently kill conversions for 60%+ of users.",
      "Confusing value propositions cause prospective buyers to hesitate and navigate away to competitors.",
    ],
    approachHeadline: "Scientific CRO Methodology: Research, Hypothesize, Test, Validate",
    approachPoints: [
      "We analyze heatmaps, session recordings, and drop-off funnels in Hotjar and GA4 to pinpoint exact exit points.",
      "We formulate evidence-based hypotheses grounded in behavioral psychology and conversion heuristics.",
      "We build and deploy clean, flicker-free A/B split tests with 95%+ statistical significance thresholds.",
      "Winning variations are permanently hardcoded into your website codebase for compounding revenue growth.",
    ],
    features: [
      {
        title: "Session Recording & Heatmap Diagnostics",
        desc: "Analyzes mouse movements, scroll depth, and rage clicks across thousands of real user visits.",
      },
      {
        title: "Checkout & Form Drop-Off Audits",
        desc: "Isolates the specific form fields and checkout steps causing friction and abandoned carts.",
      },
      {
        title: "Evidence-Based A/B Split Testing",
        desc: "Tests alternative headlines, visual layouts, CTAs, social proof elements, and pricing presentations.",
      },
      {
        title: "Flicker-Free Test Deployment",
        desc: "Anti-flicker script integration ensures test variants load instantly without jarring visual flashes.",
      },
      {
        title: "Mobile Usability Optimization",
        desc: "Tailors thumb-friendly ergonomics, simplified mobile checkout keyboards, and sticky action buttons.",
      },
      {
        title: "Qualitative User Surveys",
        desc: "Deploy on-site exit-intent micro-surveys asking abandoning visitors what stopped them from completing their order.",
      },
    ],
    deliverables: [
      "Full Funnel Friction & Heuristic Audit Report (identifying top 10 conversion bottlenecks)",
      "Prioritized CRO Test Roadmap scored by projected business impact and technical effort",
      "Full design and copywriting for all A/B test variations in Figma",
      "Test setup and monitoring in VWO, Optimizely, or Google Optimize alternatives",
      "Bi-weekly executive statistical significance readout calls",
      "Developer-ready code packages for winning variations",
    ],
    techStack: ["VWO", "Hotjar", "Microsoft Clarity", "Optimizely", "Figma", "Google Analytics 4", "JavaScript"],
    processSteps: [
      { step: "Phase 1", title: "Diagnostic Research & Heuristic Audit", desc: "Analyze quantitative GA4 drop-offs and qualitative session recordings to find conversion leaks." },
      { step: "Phase 2", title: "Hypothesis Formulation & Design", desc: "Design test variations focused on reducing friction and amplifying value clarity." },
      { step: "Phase 3", title: "Test Launch & Traffic Splitting", desc: "Launch A/B tests with strict 50/50 traffic splits and 95% statistical confidence thresholds." },
      { step: "Phase 4", title: "Statistical Analysis & Hardcoding", desc: "Verify winner metrics and permanently deploy winning elements into production code." },
    ],
    faqs: [
      {
        q: "How much monthly traffic do we need to run valid A/B tests?",
        a: "To achieve statistical significance within 2-4 weeks, we generally recommend a minimum of 15,000 monthly unique visitors and at least 200 conversions per month. For lower-traffic sites, we execute high-impact qualitative conversion optimizations.",
      },
      {
        q: "Will running A/B testing software slow down our website?",
        a: "We deploy modern asynchronous testing scripts and anti-flicker snippets engineered to prevent page lag and eliminate cumulative layout shifts (CLS).",
      },
      {
        q: "What is an average conversion lift from a CRO engagement?",
        a: "While results vary by industry, well-structured CRO programs typically generate a 20% to 50% increase in baseline conversion rates over a 3 to 6-month testing cycle.",
      },
    ],
  },

  attribution: {
    slug: "attribution",
    parentSlug: "analytics-cro",
    parentName: "Analytics & CRO",
    parentHref: "/services/analytics-cro",
    title: "Multi-Touch Marketing Attribution & Incrementality Measurement",
    eyebrow: "TRUE ROI VISIBILITY",
    badge: "Scientific Budget Allocation",
    heroHeadline: "Uncover Which Marketing Channels Actually Drive Real Revenue",
    heroSubcopy:
      "When every ad platform takes credit for the same sale, marketing leaders make bad budget decisions. We implement multi-touch attribution models and marketing mix incrementality frameworks—revealing the true customer path to purchase across Google, Meta, LinkedIn, organic search, and offline touches.",
    heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=85",
    priceNote: "From AED 5,500 / $1,500 attribution architecture",
    deliveryTimeline: "10 to 15 Business Days",
    metrics: [
      { value: "0%", label: "Over-Claimed Revenue", desc: "Eliminate double-counting across overlapping ad platforms" },
      { value: "First to Last", label: "Multi-Touch Modeling", desc: "Evaluate First-Touch, Linear, Time-Decay, and Data-Driven models" },
      { value: "Incrementality", label: "Lift Testing", desc: "Measure true causal sales lift vs baseline organic purchases" },
      { value: "100%", label: "Cross-Channel Clarity", desc: "Unified dashboard mapping customer journeys from touch to close" },
    ],
    challengeHeadline: "The Conflict of Overlapping Self-Attributed Ad Networks",
    challengePoints: [
      "Meta, Google, and TikTok all claim 100% credit for the same customer purchase, inflating reported ROAS.",
      "Last-click attribution unfairly rewards branded search while starving top-of-funnel awareness channels that created the demand.",
      "High-consideration B2B enterprise sales have 10+ touchpoints over 90 days, making simple tracking models useless.",
      "Companies waste budget scaling channels that merely capture existing demand rather than generating incremental lift.",
    ],
    approachHeadline: "Data-Driven Multi-Touch Modeling & Incrementality Holdout Tests",
    approachPoints: [
      "We stitch cross-channel user journeys using first-party visitor IDs, UTM taxonomy, and CRM timestamps.",
      "We compare multiple attribution models (Data-Driven, Position-Based, First-Click, Last-Click) to understand channel roles.",
      "We execute geo-lift and audience holdout experiments to measure true causal incrementality.",
      "Consolidated executive dashboards show exactly how marketing spend drives closed revenue across all channels.",
    ],
    features: [
      {
        title: "Unified UTM & Campaign Taxonomy",
        desc: "Enforces standardized naming conventions across all paid ads, emails, and organic links for clean data rollups.",
      },
      {
        title: "Multi-Touch Journey Stitching",
        desc: "Tracks the sequence of interactions (e.g. TikTok video view -> Google search -> Email nurture -> Sale).",
      },
      {
        title: "Data-Driven Attribution Modeling",
        desc: "Assigns algorithmic fractional credit based on how each touchpoint influenced the conversion probability.",
      },
      {
        title: "Incrementality & Holdout Testing",
        desc: "Measures whether paid campaigns are generating net-new sales or merely taking credit for users who would have bought anyway.",
      },
      {
        title: "B2B Account-Level Journey Mapping",
        desc: "Aggregates touchpoints across multiple stakeholders within the same enterprise company record.",
      },
      {
        title: "Blended Customer Acquisition Cost (CAC)",
        desc: "Calculates true blended and paid CAC across all channels for honest financial reporting to stakeholders.",
      },
    ],
    deliverables: [
      "Enterprise UTM Taxonomy Framework and automated URL builder sheet",
      "Multi-touch attribution model deployment in GA4 and Looker Studio",
      "Channel overlap and cannibalization diagnostic report",
      "Incrementality holdout testing framework design and execution guide",
      "Executive Marketing Mix Model (MMM) budget allocation scorecard",
      "Quarterly attribution review and budget re-allocation strategy session",
    ],
    techStack: ["Google Analytics 4 Data-Driven Attribution", "Looker Studio", "Google BigQuery", "HubSpot", "Triple Whale / Northbeam"],
    processSteps: [
      { step: "Phase 1", title: "UTM & Tracking Standardization", desc: "Audit and enforce strict campaign naming taxonomies across all advertising channels." },
      { step: "Phase 2", title: "Cross-Channel Identity Stitching", desc: "Link ad click IDs (GCLID, FBCLID) and CRM contact records into a unified user timeline." },
      { step: "Phase 3", title: "Attribution Modeling Calibration", desc: "Configure position-based and algorithmic data-driven models to evaluate touchpoint weights." },
      { step: "Phase 4", title: "Executive Dashboarding & Budget Shifts", desc: "Publish real-time ROAS dashboards and reallocate ad budgets toward true incremental drivers." },
    ],
    faqs: [
      {
        q: "Why is Last-Click attribution dangerous for scaling businesses?",
        a: "Last-Click gives 100% credit to the final link clicked (often branded search or a direct visit). This leads businesses to over-invest in brand search while killing top-of-funnel social and video campaigns that actually introduced new buyers to the brand.",
      },
      {
        q: "What is an incrementality test?",
        a: "An incrementality test withholds advertising from a small control group (or geographical region) to see how many people buy organically without ads. The difference between the exposed and holdout groups represents your true incremental sales lift.",
      },
      {
        q: "Can this model track long-cycle B2B deals with multiple decision-makers?",
        a: "Yes. By rolling up contact interactions into parent CRM Company Objects, we can measure how touches with the CTO, CFO, and End-User collectively contributed to closed enterprise revenue.",
      },
    ],
  },

  dashboards: {
    slug: "dashboards",
    parentSlug: "analytics-cro",
    parentName: "Analytics & CRO",
    parentHref: "/services/analytics-cro",
    title: "Executive Business Intelligence Dashboards (Looker Studio & Power BI)",
    eyebrow: "REAL-TIME BUSINESS INTELLIGENCE",
    badge: "Automated Data Visualizations",
    heroHeadline: "Replace Manual Spreadsheets With Automated Real-Time Executive Dashboards",
    heroSubcopy:
      "Stop wasting days copying numbers between Facebook Ads, Google Ads, Stripe, and your CRM. We engineer automated, visually compelling executive dashboards in Looker Studio and Power BI that give founders, CMOs, and boards real-time clarity on revenue, ROAS, CAC, and operational velocity.",
    heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=85",
    priceNote: "From AED 3,800 / $1,050 custom dashboard",
    deliveryTimeline: "5 to 10 Business Days",
    metrics: [
      { value: "100%", label: "Automated Data Feeds", desc: "No more manual copy-pasting into weekly Excel sheets" },
      { value: "Real-Time", label: "Live Telemetry", desc: "Up-to-the-minute visibility on revenue and marketing performance" },
      { value: "Single Pane", label: "Unified Stack", desc: "Google, Meta, TikTok, CRM, and accounting metrics in one place" },
      { value: "1-Click", label: "Executive PDF Export", desc: "Automated scheduled email reports sent to investors and leadership" },
    ],
    challengeHeadline: "The Chaos of Disconnected Data and Manual Spreadsheet Reporting",
    challengePoints: [
      "Marketing managers spend 10+ hours every week manually compiling slides and spreadsheets for leadership.",
      "Different departments present conflicting numbers because they calculate CAC and LTV differently.",
      "Executive leadership only spots underperforming campaigns weeks later when month-end reports arrive.",
      "Ugly, cluttered charts make it difficult for board members and investors to grasp business trajectory.",
    ],
    approachHeadline: "Automated Cloud Data Pipelines & Human-Centered Dashboard Design",
    approachPoints: [
      "We connect your advertising networks, Google Analytics, CRM, and payment gateways into unified data models.",
      "We design sleek, branded dashboards styled with your corporate colors, intuitive hierarchy, and high-contrast KPIs.",
      "Executive summary views highlight high-level revenue and margins, with click-to-drill filters for deep operational dives.",
      "Automated scheduled email deliveries dispatch clean PDF snapshots to executive inboxes every Monday morning.",
    ],
    features: [
      {
        title: "Cross-Platform Ad Spend & ROAS View",
        desc: "Aggregates Google Ads, Meta Ads, TikTok, and LinkedIn spend against total revenue to report Blended ROAS.",
      },
      {
        title: "Sales Pipeline Velocity Tracking",
        desc: "Visualizes lead-to-opportunity ratios, rep closing rates, and average sales cycle length directly from your CRM.",
      },
      {
        title: "Customer Acquisition Cost (CAC) & LTV",
        desc: "Calculates real-time blended CAC, paid CAC, and compares it against 30/60/90-day Customer Lifetime Value.",
      },
      {
        title: "Interactive Date & Geo Filters",
        desc: "Enables executives to filter data by date range, country, product category, or sales rep in one click.",
      },
      {
        title: "Mobile-Responsive Executive Views",
        desc: "Optimized layouts for iPad and mobile screens, giving founders quick metric checks on the go.",
      },
      {
        title: "Automated Monday Morning Reports",
        desc: "Schedules automated PDF delivery directly to executive and board member inboxes every week.",
      },
    ],
    deliverables: [
      "Turnkey custom Looker Studio or Microsoft Power BI dashboard suite",
      "Direct API connectors configured for ad networks, GA4, Stripe, and CRM",
      "Calculated metrics data dictionary (defining exact CAC, ROAS, and LTV formulas)",
      "Automated weekly PDF email delivery schedule setup",
      "Recorded video walkthrough explaining all filters, charts, and metric definitions",
      "30-day post-delivery dashboard maintenance and custom metric tweaking",
    ],
    techStack: ["Google Looker Studio", "Microsoft Power BI", "Supermetrics", "Google BigQuery", "Stripe API", "HubSpot"],
    processSteps: [
      { step: "Phase 1", title: "KPI Alignment & Wireframing", desc: "Identify essential executive KPIs, define metric formulas, and sketch dashboard wireframe layouts." },
      { step: "Phase 2", title: "Data Pipeline Connection", desc: "Connect data sources via native APIs, BigQuery, or Supermetrics connectors." },
      { step: "Phase 3", title: "Visual Dashboard Design", desc: "Build out responsive, branded charts, scorecard widgets, and conditional formatting alerts." },
      { step: "Phase 4", title: "Data Validation & Automation", desc: "Verify data accuracy against source platforms and activate automated scheduled reports." },
    ],
    faqs: [
      {
        q: "Do we need to pay for ongoing third-party connector software?",
        a: "Not necessarily. For Google products (GA4, Google Ads, Search Console, BigQuery), Looker Studio connects 100% free. For third-party platforms (like Meta Ads or TikTok), we can use low-cost connectors or build free automated BigQuery pipelines.",
      },
      {
        q: "Can the dashboard combine data from multiple advertising accounts?",
        a: "Yes! We can roll up data from 5+ Meta ad accounts, multiple Google Ads accounts, and different currencies into a single unified global view.",
      },
      {
        q: "Is Looker Studio or Power BI better for our company?",
        a: "Looker Studio is fast, flexible, cloud-native, and ideal for marketing teams and digital businesses. Power BI is superior for enterprise finance, complex relational data models, and Microsoft 365 environments. We build in either platform.",
      },
    ],
  },

  reporting: {
    slug: "reporting",
    parentSlug: "analytics-cro",
    parentName: "Analytics & CRO",
    parentHref: "/services/analytics-cro",
    title: "Automated Performance Reporting & Proactive Anomaly Detection",
    eyebrow: "PROACTIVE TELEMETRY",
    badge: "24/7 Anomaly Alerts",
    heroHeadline: "Never Miss a Performance Drop With Automated Anomaly Detection & Reporting",
    heroSubcopy:
      "Campaign tracking breaks silently, conversion tracking drops out, and ad budgets overspend without warning. We engineer automated reporting pipelines and 24/7 real-time anomaly detection alerts that instantly notify your team via Slack or WhatsApp whenever conversions, spend, or traffic deviate from normal baselines.",
    heroImage: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=1600&q=85",
    priceNote: "From AED 3,200 / $850 implementation",
    deliveryTimeline: "3 to 7 Business Days",
    metrics: [
      { value: "< 15 min", label: "Alert Latency", desc: "Immediate Slack/WhatsApp notification when conversion drops occur" },
      { value: "0", label: "Wasted Ad Spend", desc: "Catch broken checkout pages before burning thousands in ad budget" },
      { value: "100%", label: "Automated Recaps", desc: "Daily and weekly performance summaries delivered automatically" },
      { value: "Custom", label: "Threshold Guardrails", desc: "Calibrated to your seasonal and day-of-week traffic patterns" },
    ],
    challengeHeadline: "The Costly Consequence of Silent Tracking Failures",
    challengePoints: [
      "A website update breaks checkout tracking, and marketing only discovers the issue 5 days later after burning ad budget.",
      "Ad networks accidentally overspend daily budgets by 300% due to automated bid strategy errors.",
      "Sudden drops in organic search traffic go unnoticed for weeks until the monthly revenue report is compiled.",
      "Marketing teams waste precious hours manually drafting routine weekly update emails to executive stakeholders.",
    ],
    approachHeadline: "Automated Statistical Anomaly Watchdogs & Multi-Channel Alerting",
    approachPoints: [
      "We write automated monitoring scripts that compare hourly conversion rates against historical standard deviations.",
      "If conversion volume drops by more than 40% compared to typical baseline, an urgent alert fires to Slack/WhatsApp.",
      "Automated daily digest scripts summarize spend, leads, and revenue in a clean, bulleted format delivered each morning.",
      "Executive monthly PDF presentations are generated and dispatched automatically with zero human effort.",
    ],
    features: [
      {
        title: "Real-Time Anomaly Detection",
        desc: "Monitors conversion rates, bounce spikes, and 404 errors, alerting engineers before revenue suffers.",
      },
      {
        title: "Ad Spend Guardrails & Budget Pacing",
        desc: "Tracks daily campaign pacing and flags any overspending ad set before budgets are exhausted.",
      },
      {
        title: "Instant Slack & WhatsApp Alerts",
        desc: "Sends clean, actionable notifications directly into your team's primary communication channels.",
      },
      {
        title: "Automated Daily Morning Digest",
        desc: "Summarizes yesterday's top KPIs: total spend, revenue, new leads, and cost per acquisition.",
      },
      {
        title: "Weekly Stakeholder Email Recaps",
        desc: "Generates polished, beautifully formatted weekly progress reports for clients or executive leadership.",
      },
      {
        title: "Tag Health & SSL Expiry Watchdogs",
        desc: "Regular automated ping tests verify that Google Tag Manager containers and SSL certificates remain active.",
      },
    ],
    deliverables: [
      "Automated anomaly detection pipeline running on Python / Cloud Functions",
      "Slack / Microsoft Teams / WhatsApp integration configured with urgent incident webhooks",
      "Daily KPI summary automated email/Slack dispatcher",
      "Threshold calibration document tailored to your baseline weekly traffic curves",
      "Tag uptime watchdog monitoring pixel activity across key landing pages",
      "Full documentation and incident response playbook",
    ],
    techStack: ["Python", "Google Cloud Functions", "Slack API", "Twilio / WhatsApp", "Google Analytics Data API", "n8n"],
    processSteps: [
      { step: "Phase 1", title: "Baseline Calibration", desc: "Analyze 90 days of historic performance to establish statistical variance thresholds for day vs night and weekends." },
      { step: "Phase 2", title: "Monitoring Script Development", desc: "Develop serverless scripts polling GA4, Google Ads, and Meta APIs on scheduled intervals." },
      { step: "Phase 3", title: "Webhook Alert Channels", desc: "Connect alert triggers to dedicated Slack channels, SMS, or WhatsApp groups with severity tags." },
      { step: "Phase 4", title: "Simulation & Handover", desc: "Simulate test alert triggers, verify delivery speeds, and train team on incident response playbooks." },
    ],
    faqs: [
      {
        q: "What triggers an urgent anomaly alert?",
        a: "Common triggers include: zero conversions recorded in a 3-hour window when typically 10+ occur, sudden 50%+ spikes in cost per acquisition, or ad spend pacing 2x above budget limits.",
      },
      {
        q: "Can the alerts be sent to WhatsApp instead of Slack?",
        a: "Yes! We can route high-priority alerts to an executive WhatsApp group or individual phone numbers via the official WhatsApp Business API or Twilio.",
      },
      {
        q: "Does this require us to change our existing tracking setup?",
        a: "No. Our anomaly monitors query the APIs of your existing platforms (Google Analytics, Meta, Google Ads) without altering your current website code.",
      },
    ],
  },
};
