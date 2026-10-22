import { SubServiceDetail } from "../subServicesData";

export const CRM_SUB_SERVICES: Record<string, SubServiceDetail> = {
  setup: {
    slug: "setup",
    parentSlug: "crm-marketing-automation",
    parentName: "CRM & Marketing Automation",
    parentHref: "/services/crm-marketing-automation",
    title: "Enterprise CRM Setup, Implementation & Architecture",
    eyebrow: "FOUNDATIONAL CRM ARCHITECTURE",
    badge: "Certified HubSpot & Zoho Specialists",
    heroHeadline: "Architect a Revenue-Driving CRM Custom-Built for Your Exact Sales Process",
    heroSubcopy:
      "A poorly configured CRM becomes an expensive digital Rolodex that reps avoid using. We architect, configure, and deploy enterprise CRM platforms (HubSpot, Salesforce, Zoho, Pipedrive) structured around your actual buyer journey, custom data properties, and automated stage gates.",
    heroImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=85",
    priceNote: "From $1,750 implementation",
    deliveryTimeline: "2 to 3 Weeks",
    metrics: [
      { value: "100%", label: "Adoption Rate", desc: "Intuitive layouts and streamlined rep data entry workflows" },
      { value: "360°", label: "Customer View", desc: "Consolidated sales, marketing, and support records in one pane" },
      { value: "0 Loss", label: "Clean Migration", desc: "Safe import of historical contacts, notes, and deals" },
      { value: "14 Days", label: "Rapid Deployment", desc: "Accelerated implementation methodology tailored to your industry" },
    ],
    challengeHeadline: "Why 60% of CRM Implementations Fail to Drive ROI",
    challengePoints: [
      "Companies buy expensive licenses but leave the platform in default configuration without tailored pipelines.",
      "Sales reps resist using the CRM because data entry is cumbersome, confusing, and lacks mobile convenience.",
      "Dirty historical data imports result in duplicate contacts, corrupted company names, and obsolete email addresses.",
      "Marketing and sales remain misaligned because lead lifecycles and handoff stages are not clearly defined.",
    ],
    approachHeadline: "Strategy-First CRM Architecture & Human-Centered Workflow Design",
    approachPoints: [
      "We interview sales directors and account reps to map real-world selling stages before touching CRM software settings.",
      "We engineer custom properties, mandatory field rules, and stage-gate requirements that keep pipeline data pristine.",
      "We build customized rep dashboards and views tailored to daily prospecting, deal closing, and executive forecasting.",
      "We conduct interactive, recorded team training sessions and deliver video standard operating procedures (SOPs).",
    ],
    features: [
      {
        title: "Platform Selection & Licensing Guidance",
        desc: "Unbiased technical advice on whether HubSpot, Salesforce, Zoho, or Pipedrive best fits your scale and budget.",
      },
      {
        title: "Custom Field & Object Architecture",
        desc: "Configuration of specialized properties, deal stages, and custom objects mirroring your exact business model.",
      },
      {
        title: "Legacy Data Scrubbing & Migration",
        desc: "De-duplicating, formatting, and migrating past spreadsheet records and old CRM archives with 100% data integrity.",
      },
      {
        title: "Lifecycle Stage Definition",
        desc: "Strict automated rules defining Subscriber, Lead, MQL, SQL, Opportunity, and Customer transitions.",
      },
      {
        title: "Executive Forecasting Dashboards",
        desc: "Real-time visibility into weighted pipeline values, conversion velocity, and rep quota attainment.",
      },
      {
        title: "User Permissions & Security Roles",
        desc: "Role-based access hierarchies ensuring sensitive deal numbers and contact records are viewed only by authorized personnel.",
      },
    ],
    deliverables: [
      "Fully configured production CRM environment tailored to your sales process",
      "Custom pipeline stages, deal probabilities, and mandatory data validation fields",
      "Migrated and cleansed historical contact, company, and deal database",
      "Executive and sales representative reporting dashboard suite",
      "Loom video walkthroughs and standard operating procedures (SOPs)",
      "30-day post-launch optimization support and user query helpdesk",
    ],
    techStack: ["HubSpot Sales Hub", "Salesforce CRM", "Zoho CRM", "Pipedrive", "Postman", "Zapier", "REST APIs"],
    processSteps: [
      { step: "Phase 1", title: "Discovery & Process Mapping", desc: "Analyze your sales cycles, buyer personas, deal stages, and required reporting metrics." },
      { step: "Phase 2", title: "Configuration & Data Cleaning", desc: "Build custom properties, clean historic database files, and structure permission roles." },
      { step: "Phase 3", title: "Automations & Dashboard Build", desc: "Implement task automations, stage-gate alerts, and executive revenue dashboards." },
      { step: "Phase 4", title: "Team Training & Go-Live", desc: "Train your sales and management teams with live role-playing and operational guidelines." },
    ],
    faqs: [
      {
        q: "Which CRM should our business choose: HubSpot or Zoho?",
        a: "HubSpot is generally ideal for companies that prioritize superior user experience, fast team adoption, and marketing-sales alignment. Zoho offers extreme cost-effectiveness and deep customization for complex multi-entity businesses. We evaluate your exact needs and recommend the best fit.",
      },
      {
        q: "Can you migrate our messy data from Excel spreadsheets?",
        a: "Yes. We run proprietary cleansing and de-duplication scripts to sanitize your spreadsheet data, normalize phone formats, and verify email addresses before uploading.",
      },
      {
        q: "How long does a full CRM rollout typically take?",
        a: "A standard implementation takes between 2 to 3 weeks from initial kickoff to live team adoption.",
      },
    ],
  },

  management: {
    slug: "management",
    parentSlug: "crm-marketing-automation",
    parentName: "CRM & Marketing Automation",
    parentHref: "/services/crm-marketing-automation",
    title: "Ongoing CRM Administration, Maintenance & Data Hygiene",
    eyebrow: "DEDICATED CRM OPERATIONS",
    badge: "Pristine Pipeline Health",
    heroHeadline: "Keep Your CRM Fast, Clean, and Aligned With Your Evolving Business",
    heroSubcopy:
      "A CRM naturally decays by 25-30% every year without dedicated stewardship. We provide managed CRM administration—regularly purging bad data, fixing broken automations, onboarding new sales reps, building custom reports, and ensuring your revenue engine never stalls.",
    heroImage: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1600&q=85",
    priceNote: "From $850 / month retained management",
    deliveryTimeline: "Ongoing Retained Support",
    metrics: [
      { value: "0%", label: "Duplicate Records", desc: "Automated daily de-duplication rules and merge protocols" },
      { value: "< 24h", label: "Admin Request SLA", desc: "Fast resolution for new user provisioning, custom fields, and reports" },
      { value: "99.9%", label: "Workflow Uptime", desc: "Continuous monitoring of webhooks and automated triggers" },
      { value: "Monthly", label: "Executive Health Audit", desc: "Detailed breakdown of pipeline hygiene and rep activity metrics" },
    ],
    challengeHeadline: "The Creeping Decay of Unmanaged CRMs",
    challengePoints: [
      "Duplicate contacts multiply rapidly as reps enter notes haphazardly, polluting attribution reporting.",
      "Departing sales reps leave abandoned leads behind with no automated re-assignment protocol.",
      "Legacy automation workflows trigger conflicting actions or send obsolete email templates to prospective clients.",
      "Leadership lacks time to build custom reports, leaving management blind to emerging pipeline trends.",
    ],
    approachHeadline: "Proactive CRM Governance & Dedicated Fractional Administration",
    approachPoints: [
      "We function as your dedicated CRM administrator, managing seat provisioning, role permissions, and user offboarding.",
      "Weekly automated data hygiene routines flag missing phone numbers, invalid emails, and inactive deals.",
      "Continuous optimization of sales workflows keeps pace with your new product launches and changing commissions.",
      "Monthly governance reviews highlight bottlenecked pipeline stages where deals stall unnecessarily.",
    ],
    features: [
      {
        title: "Automated Data Hygiene & Merging",
        desc: "Regular sweeps to identify, merge, and clean duplicate contacts, companies, and obsolete deal records.",
      },
      {
        title: "User Onboarding & Offboarding",
        desc: "Rapid provisioning of new sales rep seats, customized permissions, and automated deal re-allocation for departing staff.",
      },
      {
        title: "Workflow Maintenance & Bug Fixing",
        desc: "Troubleshooting broken webhooks, API disconnections, and trigger errors before they impact sales conversations.",
      },
      {
        title: "Custom Report & Dashboard Creation",
        desc: "On-demand creation of revenue forecasting models, rep activity scorecards, and marketing source attribution views.",
      },
      {
        title: "Custom Field & Pipeline Adjustments",
        desc: "Seamlessly adding new products, lead sources, and deal stages as your business services evolve.",
      },
      {
        title: "Quarterly Platform Optimization Audits",
        desc: "Comprehensive reviews to eliminate redundant properties, optimize workflow speeds, and lower software licensing tiers.",
      },
    ],
    deliverables: [
      "Dedicated CRM administrator assigned to your company account",
      "Weekly automated data hygiene and duplicate eradication protocols",
      "Custom monthly pipeline health and sales velocity audit report",
      "Unlimited minor workflow updates, report builds, and field modifications",
      "Priority 24-hour turnaround on administrative support tickets",
      "Executive strategy meeting every quarter to align CRM with company growth goals",
    ],
    techStack: ["HubSpot Admin", "Salesforce Setup", "Zoho Admin", "Insycle Data Hygiene", "Zapier", "Slack Integrations"],
    processSteps: [
      { step: "Phase 1", title: "Comprehensive Health Audit", desc: "Scan current CRM database for duplicates, orphaned contacts, broken automations, and inactive users." },
      { step: "Phase 2", title: "Cleanup & Stabilization", desc: "Standardize phone/country formatting, purge inactive bounces, and archive dead pipelines." },
      { step: "Phase 3", title: "SOP & Governance Rollout", desc: "Implement strict field validation rules preventing future data contamination." },
      { step: "Phase 4", title: "Continuous Monthly Management", desc: "Execute regular maintenance sweeps, fulfill team requests, and deliver monthly executive metrics." },
    ],
    faqs: [
      {
        q: "What types of requests are covered in monthly CRM management?",
        a: "Everything needed to keep your CRM humming: building custom reports, configuring new pipelines, adding fields, creating email templates, managing user seats, and fixing broken webhooks.",
      },
      {
        q: "Can you help lower our software subscription bills?",
        a: "Yes! Many businesses pay for expensive unused enterprise seats or inactive marketing contacts. We regularly audit and downgrade inactive tiers to save you thousands annually.",
      },
      {
        q: "How fast do you respond to administrative requests?",
        a: "Standard requests are resolved within 24 business hours, with urgent pipeline-blocking issues addressed within 2 hours.",
      },
    ],
  },

  "lead-automation": {
    slug: "lead-automation",
    parentSlug: "crm-marketing-automation",
    parentName: "CRM & Marketing Automation",
    parentHref: "/services/crm-marketing-automation",
    title: "Automated Inbound Lead Ingestion & Qualification Workflows",
    eyebrow: "INSTANT INBOUND VELOCITY",
    badge: "Zero Dropped Leads",
    heroHeadline: "Capture, Enrich, and Deliver Every Inbound Lead Directly to Sales in Real Time",
    heroSubcopy:
      "Leads shouldn't sit unattended in form submission notification emails. We build automated lead ingestion pipelines that capture prospects from websites, social media ads, landing pages, and third-party portals, enrich them with firmographic data, and assign them instantly to your sales team.",
    heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=85",
    priceNote: "From $1,050 implementation",
    deliveryTimeline: "5 to 10 Business Days",
    metrics: [
      { value: "0s", label: "Sync Latency", desc: "Instantaneous webhook push from ads and web forms to CRM" },
      { value: "100%", label: "Lead Capture", desc: "Failover fallback queues ensure zero leads are lost during outages" },
      { value: "30+ Data Points", label: "Automated Enrichment", desc: "Append company size, revenue, LinkedIn URLs, and tech stack" },
      { value: "3x", label: "Conversion Rate", desc: "Immediate engagement while buyer interest is at its absolute peak" },
    ],
    challengeHeadline: "How Broken Lead Ingestion Leaks Sales Opportunities",
    challengePoints: [
      "Leads submitted on Facebook/TikTok ads sit in CSV downloads for days before someone manually uploads them.",
      "Sales reps receive bare-bones contact records with no insight into company size, industry, or budget.",
      "Form submission errors cause high-intent prospects to receive 404 errors or disappear into spam folders.",
      "Marketing cannot trace which specific ad campaign, keyword, or landing page generated a closed customer.",
    ],
    approachHeadline: "Real-Time Webhook Architecture With Automatic Data Enrichment",
    approachPoints: [
      "We configure direct API webhooks connecting Meta Lead Ads, Google Ads, TikTok, and web forms straight to your CRM.",
      "Clearbit or Apollo enrichment APIs instantly look up company revenue, head count, and industry classification.",
      "Automated lead scoring algorithms tag leads as Hot, Warm, or Cold based on criteria fit and engagement signals.",
      "Instant SMS and push notifications alert the assigned sales rep with a click-to-call link within 60 seconds.",
    ],
    features: [
      {
        title: "Multi-Source Lead Aggregation",
        desc: "Ingests inquiries from web forms, Facebook Lead Ads, LinkedIn forms, TikTok ads, and Google Ads automatically.",
      },
      {
        title: "Automated B2B Data Enrichment",
        desc: "Appends company LinkedIn, industry vertical, estimated annual revenue, and executive titles to inbound emails.",
      },
      {
        title: "Intelligent Lead Scoring",
        desc: "Scores leads dynamically using fit criteria (budget, company size) and intent criteria (pages visited, email opens).",
      },
      {
        title: "Full UTM & Attribution Tracking",
        desc: "Carries campaign, source, medium, ad ID, and keyword data cleanly into CRM deal properties for precise ROI reporting.",
      },
      {
        title: "Deduplication & Contact Merging",
        desc: "Recognizes returning prospects and appends new activity to existing contact histories without cluttering your pipeline.",
      },
      {
        title: "Instant Sales Rep Dispatch",
        desc: "Sends real-time SMS, WhatsApp, and Slack notifications to sales reps with quick-dial buttons.",
      },
    ],
    deliverables: [
      "End-to-end webhook lead ingestion pipeline configured and tested",
      "API connections for all active advertising platforms (Meta, Google, TikTok, LinkedIn)",
      "Automated data enrichment module setup (Clearbit/Apollo integration)",
      "Predictive lead scoring criteria configuration in your CRM",
      "Attribution tracking schema capturing UTMs and referrer data",
      "Real-time sales alert notifications in Slack or Microsoft Teams",
    ],
    techStack: ["HubSpot", "Zapier", "n8n", "Clearbit", "Meta Lead Ads API", "Google Ads Webhooks", "Slack API"],
    processSteps: [
      { step: "Phase 1", title: "Lead Source Inventory", desc: "Audit all active entry points—forms, landing pages, ad networks, and partner directories." },
      { step: "Phase 2", title: "Webhook & Enrichment Setup", desc: "Build automated ingestion listeners, data validation filters, and enrichment lookups." },
      { step: "Phase 3", title: "Attribution & Scoring Logic", desc: "Map UTM parameters into CRM properties and calibrate automated scoring point thresholds." },
      { step: "Phase 4", title: "Stress Testing & Live Verification", desc: "Submit test leads across every channel to ensure zero drop-off, accurate scoring, and instant alerts." },
    ],
    faqs: [
      {
        q: "Can this connect to leads coming from Meta (Facebook & Instagram) ads directly?",
        a: "Yes! Meta leads push into your CRM within seconds of form submission without requiring any manual CSV downloading.",
      },
      {
        q: "What happens if our CRM experiences a temporary outage?",
        a: "Our ingestion workflows feature persistent dead-letter queues. If the destination CRM fails to respond, the system holds the lead and automatically retries once connectivity is restored.",
      },
      {
        q: "Can we enrich personal email addresses (like @gmail.com)?",
        a: "While B2B enrichment tools work best on corporate domain emails, our systems use phone numbers and names to find LinkedIn matches and reverse-lookup business affiliations where possible.",
      },
    ],
  },

  routing: {
    slug: "routing",
    parentSlug: "crm-marketing-automation",
    parentName: "CRM & Marketing Automation",
    parentHref: "/services/crm-marketing-automation",
    title: "Intelligent Lead Routing & Territory Round-Robin Systems",
    eyebrow: "FAIR & SPEEDY SALES ALLOCATION",
    badge: "Automated Round-Robin",
    heroHeadline: "Distribute Leads Instantly and Fairly to the Best Available Sales Rep",
    heroSubcopy:
      "Eliminate internal sales disputes and delayed follow-ups. We engineer intelligent routing rules that distribute inbound opportunities dynamically based on territory geography, rep language fluency, deal value thresholds, and real-time rep calendar availability.",
    heroImage: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1600&q=85",
    priceNote: "From $850 implementation",
    deliveryTimeline: "3 to 7 Business Days",
    metrics: [
      { value: "100%", label: "Fair Distribution", desc: "Algorithmic round-robin preventing rep favoritism or lead starvation" },
      { value: "< 2 min", label: "Contact SLA", desc: "Strict escalation rules re-assign leads if reps fail to respond" },
      { value: "Zero Bias", label: "Territory Precision", desc: "Exact country, state, or language matching" },
      { value: "40%", label: "Meeting Show-Up Lift", desc: "Connecting buyers to the most relevant domain specialist" },
    ],
    challengeHeadline: "Why Static or Manual Lead Assignment Cripples Sales Teams",
    challengePoints: [
      "Sales managers waste hours every morning manually reviewing lead lists and assigning names.",
      "Leads assigned to reps on holiday or sick leave sit ignored for days until the prospect buys elsewhere.",
      "High-value enterprise opportunities get mistakenly routed to junior SDRs while complex queries go unanswered.",
      "Internal sales friction occurs when reps accuse managers of favoring certain colleagues with better quality leads.",
    ],
    approachHeadline: "Algorithmic Dynamic Lead Distribution With Vacation & SLA Guardrails",
    approachPoints: [
      "We design weighted round-robin algorithms that balance lead volume evenly or proportionally according to rep quotas.",
      "Intelligent logic detects prospect location, language preference, and budget to route to the ideal specialist.",
      "Live calendar status integration automatically bypasses reps who are marked out-of-office or on annual leave.",
      "Automated SLA monitors re-route the lead to another available rep if the primary rep does not open the deal within 15 minutes.",
    ],
    features: [
      {
        title: "Weighted Round-Robin Distribution",
        desc: "Distributes leads sequentially or in weighted ratios matching individual rep experience and quota targets.",
      },
      {
        title: "Geographical & Territory Routing",
        desc: "Routes leads by country code, emirate/state, or postal district directly to designated regional account executives.",
      },
      {
        title: "Language & Skill-Based Matching",
        desc: "Routes Arabic-speaking leads to bilingual reps and enterprise inquiries to senior industry specialists.",
      },
      {
        title: "Out-of-Office & Vacation Safeguards",
        desc: "Integrates with Google/Outlook calendars to automatically exclude reps who are currently away from their desks.",
      },
      {
        title: "SLA Response Escalation Timers",
        desc: "If a lead is not contacted within 15 or 30 minutes, it automatically escalates to a backup rep or sales manager.",
      },
      {
        title: "VIP Account Ownership Protection",
        desc: "Recognizes existing enterprise customer relationships and routes new inquiries straight to their dedicated account director.",
      },
    ],
    deliverables: [
      "Custom lead distribution workflow architecture built into your CRM",
      "Territory and skill-based matching rule matrix documentation",
      "Out-of-office calendar bypass integration",
      "Automated SLA monitoring timers and escalation re-routing workflows",
      "Lead routing audit dashboard displaying rep volume equality",
      "Sales manager guide for adjusting rep weights and adding new team members",
    ],
    techStack: ["HubSpot Workflows", "Salesforce Flow", "Zoho Blueprint", "Zapier", "Make.com", "Google Workspace Calendar"],
    processSteps: [
      { step: "Phase 1", title: "Routing Rules Definition", desc: "Document territory boundaries, language requirements, budget tiers, and rep allocations." },
      { step: "Phase 2", title: "Logic Tree Engineering", desc: "Build conditional branches, weighted counter variables, and calendar availability triggers." },
      { step: "Phase 3", title: "SLA Escalation Setup", desc: "Configure deadline timers and secondary fallback routing rules for unresponsive reps." },
      { step: "Phase 4", title: "Simulation & Team Walkthrough", desc: "Run 50 simulated lead scenarios to verify perfect fairness and explain the rules to the sales floor." },
    ],
    faqs: [
      {
        q: "What happens if a rep forgets to set their out-of-office status?",
        a: "Our SLA response timers act as a safety net. If the assigned rep doesn't log activity on the lead within the specified SLA window (e.g., 20 minutes), the lead is automatically re-assigned to the next available rep.",
      },
      {
        q: "Can we give senior reps more leads than junior reps?",
        a: "Yes. We configure weighted round-robin rules (for example, 40% to Senior Rep A, 40% to Senior Rep B, and 20% to Junior Rep C).",
      },
      {
        q: "Can existing clients bypass round-robin and go straight to their account manager?",
        a: "Absolutely. The system first checks for existing contact and company ownership before applying any new lead distribution rules.",
      },
    ],
  },

  email: {
    slug: "email",
    parentSlug: "crm-marketing-automation",
    parentName: "CRM & Marketing Automation",
    parentHref: "/services/crm-marketing-automation",
    title: "Lifecycle Email Marketing & Behavioral Nurturing Automations",
    eyebrow: "HIGH-CONVERTING RETENTION",
    badge: "99.2% Inbox Placement",
    heroHeadline: "Convert Cold Leads Into Closed Deals With Automated Behavioral Email Sequences",
    heroSubcopy:
      "Most email marketing fails because it consists of generic monthly newsletters blasted to unsegmented lists. We engineer dynamic behavioral email sequences triggered by exact user actions—website visits, content downloads, and deal stages—delivering high-relevance messaging that moves deals forward.",
    heroImage: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?auto=format&fit=crop&w=1600&q=85",
    priceNote: "From $1,250 sequence package",
    deliveryTimeline: "7 to 14 Business Days",
    metrics: [
      { value: "48%", label: "Average Open Rate", desc: "Deliverability-optimized subject lines and clean sender reputations" },
      { value: "18%", label: "Click-Through Rate", desc: "Hyper-relevant contextual CTAs mapped to buyer intent" },
      { value: "2.8x", label: "Pipeline Velocity", desc: "Shorten enterprise sales cycles through automated educational content" },
      { value: "0% Spam", label: "DMARC/DKIM/SPF", desc: "Strict domain authentication protecting long-term reputation" },
    ],
    challengeHeadline: "Why Most Company Newsletters Get Ignored or Marked as Spam",
    challengePoints: [
      "Companies blast the same generic monthly updates to entire databases regardless of customer stage or interest.",
      "Unengaged subscribers drag down domain sender reputation, causing legitimate client proposals to land in spam folders.",
      "New leads receive a single welcome email and then go weeks with zero follow-up or education.",
      "Lack of dynamic personalization leaves emails feeling cold, robotic, and easily discarded.",
    ],
    approachHeadline: "Event-Triggered Behavioral Automation & Precision Audience Segmentation",
    approachPoints: [
      "We design automated nurture tracks triggered by real prospect behaviors (pricing page visits, whitepaper downloads).",
      "Segment contact databases dynamically by industry, job title, company size, and previous purchase history.",
      "Human-crafted copy written with compelling storytelling, high-value insights, and clear low-friction conversion CTAs.",
      "Continuous A/B split-testing of subject lines, sending times, and preview text to maximize open and reply rates.",
    ],
    features: [
      {
        title: "Behavioral Trigger Sequences",
        desc: "Emails send automatically when prospects visit your pricing page, abandon a cart, or engage with a proposal.",
      },
      {
        title: "Dynamic Content Personalization",
        desc: "Tailors email copy, testimonials, and case studies dynamically according to the recipient's industry vertical.",
      },
      {
        title: "Cold Lead Re-Engagement Tracks",
        desc: "Automated 'wake-up' campaigns designed to revive dormant opportunities and cleanse unresponsive contacts.",
      },
      {
        title: "VIP Customer Onboarding Workflows",
        desc: "Delivers step-by-step guidance, video walkthroughs, and milestone check-ins to ensure rapid user adoption.",
      },
      {
        title: "Rigorous Deliverability Optimization",
        desc: "Full SPF, DKIM, and DMARC alignment combined with automated bounce suppression to preserve inbox placement.",
      },
      {
        title: "Revenue & Attribution Analytics",
        desc: "Direct tracking from email clicks to CRM pipeline creation and closed revenue, not just vanity open metrics.",
      },
    ],
    deliverables: [
      "Full lifecycle email strategy roadmap (Welcome, Nurture, Re-engagement, Onboarding)",
      "Professionally written and responsive HTML/plain-text email templates",
      "Automated behavioral workflows configured in HubSpot, Klaviyo, or ActiveCampaign",
      "Audience segmentation logic and list hygiene suppression filters",
      "Cryptographic DNS deliverability audit (SPF, DKIM, DMARC validation)",
      "A/B testing framework and 30-day performance review report",
    ],
    techStack: ["HubSpot Marketing Hub", "Klaviyo", "ActiveCampaign", "Mailchimp", "Postmark", "Figma", "HTML5 Email"],
    processSteps: [
      { step: "Phase 1", title: "Customer Journey Mapping", desc: "Identify key transition moments from initial awareness to repeat customer advocacy." },
      { step: "Phase 2", title: "Copywriting & Template Design", desc: "Write compelling, conversational copy and code clean, mobile-responsive email layouts." },
      { step: "Phase 3", title: "Workflow Automation Setup", desc: "Configure branch triggers, delay timers, exclusion lists, and conversion goals." },
      { step: "Phase 4", title: "Deliverability Testing & Launch", desc: "Test across 30+ email clients (Outlook, Apple Mail, Gmail) and monitor initial inbox placement." },
    ],
    faqs: [
      {
        q: "Do you design visual image-heavy emails or plain-text style emails?",
        a: "For B2B services, conversational plain-text style emails generally achieve 2-3x higher response rates and superior deliverability. For e-commerce and consumer brands, we build stunning visual responsive HTML templates. We recommend the optimal format for your audience.",
      },
      {
        q: "How do you ensure emails don't end up in Gmail's Promotions tab?",
        a: "We minimize tracking link redirects, maintain low image-to-text ratios, ensure proper DNS authentication, and use natural human conversational phrasing.",
      },
      {
        q: "Can these sequences sync with what our sales reps are doing in the CRM?",
        a: "Yes! If a sales rep books a call or moves a deal to 'Contract Sent', the automated nurture sequence automatically unenrolls the prospect to avoid awkward mixed messaging.",
      },
    ],
  },

  "whatsapp-crm": {
    slug: "whatsapp",
    parentSlug: "crm-marketing-automation",
    parentName: "CRM & Marketing Automation",
    parentHref: "/services/crm-marketing-automation",
    title: "CRM-Connected WhatsApp Messaging & Broadcast Workflows",
    eyebrow: "NATIVE CRM MESSAGING",
    badge: "Official Meta API Sync",
    heroHeadline: "Send, Receive, and Automate WhatsApp Messages Directly Inside Your CRM",
    heroSubcopy:
      "Stop forcing your sales reps to toggle between personal WhatsApp chats and your company CRM. We integrate official WhatsApp messaging directly into your HubSpot, Salesforce, or Zoho contact timelines—enabling automated appointment confirmations, one-click template messaging, and complete conversation logging.",
    heroImage: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?auto=format&fit=crop&w=1600&q=85",
    priceNote: "From $1,150 setup",
    deliveryTimeline: "5 to 10 Business Days",
    metrics: [
      { value: "100%", label: "Timeline Visibility", desc: "Every WhatsApp message logged automatically to contact records" },
      { value: "98%", label: "Open Rates", desc: "Instant mobile attention compared to buried corporate emails" },
      { value: "1-Click", label: "Template Dispatch", desc: "Reps send pre-approved official messages with a single click" },
      { value: "Zero Leakage", label: "Company Asset Protection", desc: "Conversations belong to your business, not personal employee phones" },
    ],
    challengeHeadline: "The Chaotic Reality of WhatsApp in Modern Sales",
    challengePoints: [
      "Sales reps conduct business on personal phones; when a rep quits, all client relationships and chat histories vanish.",
      "Managers have zero visibility into what reps are saying to prospects or how quickly they respond.",
      "Copy-pasting conversation notes into the CRM takes hours and is rarely done consistently.",
      "Sending manual meeting reminders on WhatsApp wastes valuable sales rep time.",
    ],
    approachHeadline: "Seamless WhatsApp CRM Embedding With Automated Workflow Triggers",
    approachPoints: [
      "We integrate official WhatsApp Cloud API widgets directly onto the CRM contact and deal screen.",
      "Sales reps can chat, send attachments, and trigger pre-approved templates directly from their CRM desktop or mobile app.",
      "Automated CRM workflows trigger instant WhatsApp messages when deals change stages (e.g., proposal sent, meeting booked).",
      "Executive dashboards track message volume, response times, and conversion rates across the sales team.",
    ],
    features: [
      {
        title: "Direct In-CRM Chat Interface",
        desc: "Send and receive real-time WhatsApp text, images, and PDF proposals directly from HubSpot, Zoho, or Salesforce.",
      },
      {
        title: "Automated Stage-Change Triggers",
        desc: "Automatically send a WhatsApp confirmation when a meeting is booked, a proposal is viewed, or an invoice is generated.",
      },
      {
        title: "Pre-Approved Template Library",
        desc: "Empower reps to dispatch compliant, brand-consistent Meta message templates in one click.",
      },
      {
        title: "Automated Meeting Reminder Sequences",
        desc: "Send 24-hour and 2-hour WhatsApp reminders before scheduled Zoom/Google Meet calls to eliminate no-shows.",
      },
      {
        title: "Centralized Number Ownership",
        desc: "All client communications remain the intellectual property of your company even when team members move on.",
      },
      {
        title: "Shared Inbox Collaboration",
        desc: "Multiple reps and managers can view, comment on, and take over client chats with internal private notes.",
      },
    ],
    deliverables: [
      "Official Meta WhatsApp Cloud API registration and phone number activation",
      "CRM integration package installed and configured on your CRM portal",
      "Library of 10 customized, pre-approved Meta message templates",
      "Automated CRM workflow rules for meeting reminders and deal stage notifications",
      "Full team training session on desktop and mobile CRM WhatsApp usage",
      "Ongoing API compliance maintenance and template management support",
    ],
    techStack: ["WhatsApp Cloud API", "HubSpot Sales Hub", "Zoho CRM", "Salesforce", "Twilio", "Make.com"],
    processSteps: [
      { step: "Phase 1", title: "API Provisioning & Verification", desc: "Configure Meta Business Manager, submit business verification documents, and register phone numbers." },
      { step: "Phase 2", title: "CRM Widget Installation", desc: "Embed interactive chat panels and custom WhatsApp properties into your CRM deal and contact views." },
      { step: "Phase 3", title: "Template Drafting & Approval", desc: "Draft high-converting transactional templates and submit to Meta for rapid 24-hour approval." },
      { step: "Phase 4", title: "Workflow Automation & Handover", desc: "Activate meeting reminder triggers, automated stage-change notifications, and train reps." },
    ],
    faqs: [
      {
        q: "Can sales reps send WhatsApp messages from their mobile phones through the CRM?",
        a: "Yes! Using the official CRM mobile app (HubSpot/Zoho), reps can send and view WhatsApp messages directly on their smartphones without exposing personal numbers.",
      },
      {
        q: "Does this require buying new phone numbers?",
        a: "You can use an existing business landline, virtual VoIP number, or mobile number as long as it is not actively registered on personal WhatsApp.",
      },
      {
        q: "Are incoming replies synced back into the CRM automatically?",
        a: "Yes. Inbound client responses appear directly on the contact timeline and trigger instant push notifications to the deal owner.",
      },
    ],
  },

  pipeline: {
    slug: "pipeline",
    parentSlug: "crm-marketing-automation",
    parentName: "CRM & Marketing Automation",
    parentHref: "/services/crm-marketing-automation",
    title: "Visual Sales Pipeline Engineering & Deal Stage Governance",
    eyebrow: "PREDICTABLE REVENUE ARCHITECTURE",
    badge: "Accurate Revenue Forecasting",
    heroHeadline: "Structure High-Velocity Sales Pipelines That Accelerate Deals and Eliminate Stalls",
    heroSubcopy:
      "A disorganized sales pipeline causes deals to linger for months and makes accurate revenue forecasting impossible. We engineer structured, stage-gated sales pipelines with mandatory qualification criteria, automated deal-rot warnings, and weighted probability forecasting.",
    heroImage: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1600&q=85",
    priceNote: "From $1,050 pipeline architecture",
    deliveryTimeline: "5 to 10 Business Days",
    metrics: [
      { value: "32%", label: "Faster Sales Cycle", desc: "Clear criteria eliminate ambiguity and keep deals moving forward" },
      { value: "95%", label: "Forecast Accuracy", desc: "Weighted probabilities based on historical conversion data" },
      { value: "0", label: "Forgotten Deals", desc: "Automated deal-rotting alerts highlight neglected opportunities" },
      { value: "100%", label: "Stage Discipline", desc: "Mandatory fields prevent reps from skipping critical qualification steps" },
    ],
    challengeHeadline: "Why Most Sales Pipelines Provide Zero Visibility to Leadership",
    challengePoints: [
      "Deal stages are named vaguely (e.g. 'In Progress', 'Follow Up'), meaning different things to every sales rep.",
      "Dead deals sit in the pipeline for 180+ days because reps are reluctant to mark them 'Closed Lost'.",
      "Executive revenue forecasts are based on gut feeling and hope rather than mathematical probability.",
      "Reps skip key discovery questions, resulting in customized proposals that fail to close.",
    ],
    approachHeadline: "Exit-Criteria Stage Gates With Automated Pipeline Hygiene",
    approachPoints: [
      "We define clear, objective customer actions required to advance deals (e.g. 'Customer signed mutual NDA' vs 'Spoke on phone').",
      "Configure required pop-up fields at critical stage transitions, capturing budget, timeline, and competitor names.",
      "Implement automated deal-rotting alerts that notify sales managers when a deal sits unchanged for longer than average cycle duration.",
      "Engineer executive dashboards displaying pipeline velocity, stage drop-off rates, and rep conversion ratios.",
    ],
    features: [
      {
        title: "Objective Stage Gate Design",
        desc: "Each stage is governed by concrete customer verification actions rather than subjective sales rep optimism.",
      },
      {
        title: "Required Transition Properties",
        desc: "Forces reps to log essential qualification data (budget, decision-maker, target go-live) before moving deals.",
      },
      {
        title: "Automated Deal Rotting Flags",
        desc: "Visual color-coded alerts highlight deals that haven't had active communication in 7, 14, or 30 days.",
      },
      {
        title: "Multiple Specialized Pipelines",
        desc: "Separate, tailored pipeline architectures for New Business, Account Upselling, Renewals, and Partnerships.",
      },
      {
        title: "Mathematical Forecast Modeling",
        desc: "Weighted pipeline calculations accurately reflect expected cash collections based on historical conversion ratios.",
      },
      {
        title: "Closed-Lost Root Cause Analysis",
        desc: "Mandatory lost-reason surveys uncover whether deals are lost to price, product gaps, or competitor tactics.",
      },
    ],
    deliverables: [
      "Custom engineered sales pipeline architecture deployed in your CRM",
      "Detailed stage-gate definition dictionary with mandatory entry/exit criteria",
      "Automated rotting alerts and manager escalation workflows",
      "Closed-Lost analysis reporting dashboard",
      "Executive revenue forecast scorecard and conversion funnel visualization",
      "Sales rep pipeline hygiene standard operating procedure (SOP)",
    ],
    techStack: ["HubSpot Sales Hub", "Salesforce Sales Cloud", "Zoho CRM", "Pipedrive", "Datapad", "Google Sheets"],
    processSteps: [
      { step: "Phase 1", title: "Sales Cycle Auditing", desc: "Analyze historic win/loss data to identify the true milestones separating won deals from lost ones." },
      { step: "Phase 2", title: "Stage Gate Engineering", desc: "Define objective customer-facing criteria and configure mandatory input validation fields." },
      { step: "Phase 3", title: "Automation & Rotting Logic", desc: "Build automated reminder workflows, stale-deal cleanup rules, and escalation notifications." },
      { step: "Phase 4", title: "Forecasting Calibration & Training", desc: "Calibrate stage probabilities with leadership and run hands-on pipeline management training." },
    ],
    faqs: [
      {
        q: "How many stages should an ideal sales pipeline have?",
        a: "Most successful B2B pipelines have between 5 to 7 clearly defined stages. Having too few creates black holes where deals sit endlessly, while having too many creates unnecessary administrative overhead for reps.",
      },
      {
        q: "Can we have different pipelines for different services or products?",
        a: "Yes. For instance, you may need a 4-stage pipeline for quick transactional hosting sales and an 8-stage pipeline for enterprise bespoke software development.",
      },
      {
        q: "How does the pipeline handle deals that go completely dark?",
        a: "We build automated re-engagement workflows. If a deal rots for 30 days without contact, the rep receives a task to make a final call; if no response, it moves to 'Closed Lost - Dormant' and enters an automated marketing nurture sequence.",
      },
    ],
  },

  appointments: {
    slug: "appointments",
    parentSlug: "crm-marketing-automation",
    parentName: "CRM & Marketing Automation",
    parentHref: "/services/crm-marketing-automation",
    title: "Automated Calendar Scheduling & Show-Up Optimization",
    eyebrow: "FRICTIONLESS SCHEDULING",
    badge: "92%+ Meeting Show-Up Rate",
    heroHeadline: "Eliminate Scheduling Ping-Pong and Maximize Confirmed Sales Appointments",
    heroSubcopy:
      "Every email exchange spent negotiating a meeting time cuts conversion rates in half. We implement frictionless calendar scheduling systems connected directly to your CRM, equipped with round-robin rep distribution, pre-meeting qualifying questionnaires, and multi-channel SMS/WhatsApp reminders that slash no-shows.",
    heroImage: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=1600&q=85",
    priceNote: "From $750 setup",
    deliveryTimeline: "3 to 5 Business Days",
    metrics: [
      { value: "92%+", label: "Confirmed Show-Up Rate", desc: "Multi-touch SMS, WhatsApp, and email reminder cadence" },
      { value: "0", label: "Scheduling Friction", desc: "Instant timezone-aware booking via interactive widgets" },
      { value: "100%", label: "Calendar Sync", desc: "Real-time Google/Outlook calendar synchronization prevents double booking" },
      { value: "100%", label: "CRM Logging", desc: "Meetings, notes, and Zoom links automatically populated in CRM deals" },
    ],
    challengeHeadline: "The Frustration of Meeting No-Shows and Inefficient Booking",
    challengePoints: [
      "Sending back-and-forth emails proposing dates leads to lost momentum and leads booking with faster competitors.",
      "Up to 40% of scheduled prospects fail to show up for demo calls, wasting valuable executive time.",
      "Reps get double-booked because scheduling tools fail to synchronize across personal and business calendars.",
      "Sales reps show up to discovery calls blind because booking forms fail to collect essential project background.",
    ],
    approachHeadline: "Automated Multi-Channel Reminder Sequences & Pre-Call Engagement",
    approachPoints: [
      "We deploy sleek, branded calendar booking links embedded directly on landing pages and email signatures.",
      "Integrated qualifying forms collect company name, budget tier, and primary challenge before confirming slots.",
      "Automated confirmation workflows dispatch calendar invites (.ics), Google Meet/Zoom links, and preparatory guides.",
      "Multi-channel reminders (24h email + 2h WhatsApp message + 15m SMS) keep meetings top-of-mind with easy 1-click rescheduling.",
    ],
    features: [
      {
        title: "Branded Calendar Booking Pages",
        desc: "Custom styled booking widgets matching your corporate brand fonts, logos, and color palette.",
      },
      {
        title: "Multi-User Round Robin",
        desc: "Distributes inbound calls evenly or based on rep availability, timezone, or deal size.",
      },
      {
        title: "Pre-Call Qualifying Questions",
        desc: "Custom form fields capture budget, company size, and project timeline during the scheduling flow.",
      },
      {
        title: "Automated Multi-Channel Reminders",
        desc: "Sends perfectly timed reminders across Email, SMS, and WhatsApp with instant 1-click add-to-calendar buttons.",
      },
      {
        title: "Dynamic Meeting Buffers",
        desc: "Configures 15-minute preparation and wrap-up buffers between calls so reps never feel rushed.",
      },
      {
        title: "No-Show Recovery Workflows",
        desc: "If a prospect misses a call, a polite automated follow-up sequence instantly triggers inviting them to rebook.",
      },
    ],
    deliverables: [
      "Turnkey scheduling setup (HubSpot Meetings, Calendly, or Cal.com)",
      "Two-way synchronization with Google Workspace or Microsoft 365 calendars",
      "Automated SMS, WhatsApp, and email reminder workflow sequence",
      "Zoom / Google Meet dynamic link generation integration",
      "CRM pipeline deal creation trigger upon appointment confirmation",
      "No-show recovery automation sequence and tracking dashboard",
    ],
    techStack: ["HubSpot Meetings", "Calendly", "Cal.com", "Twilio SMS", "WhatsApp API", "Zoom API", "Google Calendar"],
    processSteps: [
      { step: "Phase 1", title: "Calendar & Availability Auditing", desc: "Map team work hours, time zones, meeting durations, and buffer requirements." },
      { step: "Phase 2", title: "Form & Booking Page Setup", desc: "Configure qualification form questions, brand styling, and round-robin team rules." },
      { step: "Phase 3", title: "Reminder Workflow Engineering", desc: "Build multi-channel reminder cadences across Email, SMS, and WhatsApp." },
      { step: "Phase 4", title: "CRM Sync & Stress Testing", desc: "Book test meetings across various timezones to verify CRM deal creation and reminder triggers." },
    ],
    faqs: [
      {
        q: "Can the scheduling tool automatically generate Zoom or Google Meet links?",
        a: "Yes. Every booked appointment dynamically creates a unique Zoom or Google Meet link and attaches it to both the prospect's and the rep's calendar invitations.",
      },
      {
        q: "What happens if a prospect cancels or reschedules?",
        a: "The system automatically frees up the sales rep's calendar slot, updates the meeting status in your CRM, and sends an updated calendar invite with zero manual effort.",
      },
      {
        q: "Can we restrict appointments so clients cannot book same-day surprises?",
        a: "Yes. We configure minimum advance notice rules (e.g. at least 4 hours or 24 hours in advance) and limit how far into the future clients can book.",
      },
    ],
  },

  integrations: {
    slug: "integrations",
    parentSlug: "crm-marketing-automation",
    parentName: "CRM & Marketing Automation",
    parentHref: "/services/crm-marketing-automation",
    title: "Custom Two-Way CRM API Integrations & ERP Data Synchronization",
    eyebrow: "SEAMLESS SYSTEM HARMONY",
    badge: "Enterprise API Connectivity",
    heroHeadline: "Unify Your Tech Stack With Custom Two-Way CRM & ERP Integrations",
    heroSubcopy:
      "When off-the-shelf connectors don't cut it, data silos develop. We build robust, custom API integrations connecting your CRM to proprietary ERPs, accounting platforms, customer portals, and internal SQL databases—ensuring live, bidirectional data consistency across your entire enterprise.",
    heroImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1600&q=85",
    priceNote: "From $1,500 custom integration",
    deliveryTimeline: "7 to 15 Business Days",
    metrics: [
      { value: "100%", label: "Real-Time Sync", desc: "Webhooks ensure instantaneous data updates across systems" },
      { value: "0", label: "Double-Entry Errors", desc: "Eliminate manual bookkeeping and customer record duplication" },
      { value: "99.99%", label: "API Resilience", desc: "Equipped with automatic queue retries and cryptographic validation" },
      { value: "Secure", label: "Bank-Grade Encryption", desc: "TLS 1.3 in-transit encryption with secure token management" },
    ],
    challengeHeadline: "The Friction of Disconnected Systems and Manual Data Bridges",
    challengePoints: [
      "Finance uses QuickBooks or Xero while Sales uses HubSpot, resulting in delayed invoicing and mismatched revenue numbers.",
      "Custom internal databases and customer portals cannot communicate with marketing automation platforms.",
      "Off-the-shelf Zapier connectors hit payload limitations, lack custom object support, or become cost-prohibitive.",
      "Data conflicts arise when records are updated simultaneously in two systems without conflict-resolution logic.",
    ],
    approachHeadline: "Engineered Microservice Middleware With Strict Schema Validation",
    approachPoints: [
      "We build resilient, lightweight serverless integration services (Node.js/Python) handling complex payload transformations.",
      "Bidirectional synchronization with stateful conflict-resolution rules ensures the master record remains accurate.",
      "Idempotency keys and rate-limit queueing protect third-party systems from request overloads during bulk syncs.",
      "Comprehensive telemetry and automated error logging notify engineers before discrepancies compound.",
    ],
    features: [
      {
        title: "Bidirectional CRM & ERP Sync",
        desc: "Connects CRM deals to NetSuite, SAP, Microsoft Dynamics, QuickBooks, or Xero for automated invoice generation.",
      },
      {
        title: "Custom Database Webhook Listeners",
        desc: "Syncs customer activity, usage limits, and product purchases directly from your PostgreSQL, MySQL, or MongoDB database.",
      },
      {
        title: "Automated Data Transformation",
        desc: "Translates nested JSON structures, currency conversions, and date formats cleanly between disparate APIs.",
      },
      {
        title: "Resilient Rate-Limit Throttling",
        desc: "Respects third-party API rate limits with intelligent request batching and exponential backoff retry algorithms.",
      },
      {
        title: "Cryptographic Webhook Verification",
        desc: "Validates HMAC digital signatures on incoming webhooks to prevent spoofing or unauthorized payload injection.",
      },
      {
        title: "Full Audit Logs & Telemetry",
        desc: "Detailed execution logs record every payload, timestamp, and HTTP status code for total enterprise transparency.",
      },
    ],
    deliverables: [
      "Turnkey deployed integration microservice hosted on cloud infrastructure",
      "Full API authentication and secure secret token management configuration",
      "Detailed data schema mapping dictionary between both platforms",
      "Automated error alert monitoring integration via Slack or email",
      "Comprehensive API documentation and endpoint test collection (Postman)",
      "90-day operational maintenance and API schema update warranty",
    ],
    techStack: ["Node.js", "Python", "FastAPI", "AWS Lambda", "HubSpot API", "Salesforce REST", "Postman", "PostgreSQL"],
    processSteps: [
      { step: "Phase 1", title: "API Architecture & Schema Mapping", desc: "Inspect endpoints, authentication mechanisms, rate limits, and map field-by-field relationships." },
      { step: "Phase 2", title: "Middleware Development & Transformation", desc: "Write lightweight serverless functions handling data validation, error recovery, and logging." },
      { step: "Phase 3", title: "Sandbox Testing & Edge Case Simulation", desc: "Execute thousands of sync operations in staging environments, testing network dropouts and duplicate payloads." },
      { step: "Phase 4", title: "Production Deployment & Cutover", desc: "Activate live webhooks, verify bidirectional synchronicity, and set up real-time error monitors." },
    ],
    faqs: [
      {
        q: "Can you connect our custom in-house software to a CRM?",
        a: "Yes! As long as your software can send webhooks or expose a secure REST/GraphQL API or database connection, we can build a custom bridge to any modern CRM.",
      },
      {
        q: "What happens if our accounting server is temporarily offline when a deal closes?",
        a: "Our integration architecture uses persistent queues. If the destination system fails to respond, requests are safely queued and retried with exponential backoff until successful.",
      },
      {
        q: "Where is the integration middleware hosted?",
        a: "We can deploy the serverless functions inside your existing AWS, Google Cloud, Azure, or private VPS environment, or provide fully managed hosting.",
      },
    ],
  },
};
