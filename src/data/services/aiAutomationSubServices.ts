import { SubServiceDetail } from "../subServicesData";

export const AI_AUTOMATION_SUB_SERVICES: Record<string, SubServiceDetail> = {
  "ai-agents": {
    slug: "ai-agents",
    parentSlug: "ai-automation",
    parentName: "AI Automation",
    parentHref: "/services/ai-automation",
    title: "Autonomous Enterprise AI Agents & Multi-Agent Systems",
    eyebrow: "AUTONOMOUS AGENTIC INTELLIGENCE",
    badge: "24/7 Multi-Task Execution",
    heroHeadline: "Deploy Custom AI Agents That Execute Complex Multi-Step Business Operations",
    heroSubcopy:
      "Transform manual knowledge work into automated execution. We architect and deploy goal-driven autonomous AI agents with access to your databases, APIs, ERPs, and messaging channels to research, reconcile, communicate, and solve operational tasks without human intervention.",
    heroImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1600&q=85",
    priceNote: "Custom deployment from AED 9,500 / $2,600",
    deliveryTimeline: "2 to 4 Weeks",
    metrics: [
      { value: "85%", label: "Manual Effort Eliminated", desc: "Routine back-office tasks handled automatically" },
      { value: "Sub-Second", label: "Tool Calling Latency", desc: "Optimized function-calling pipelines via OpenAI & Claude" },
      { value: "99.4%", label: "Task Accuracy", desc: "Strict guardrails, schema enforcement, and verification loops" },
      { value: "10x", label: "Throughput Capacity", desc: "Handle 10,000+ concurrent operations without head-count expansion" },
    ],
    challengeHeadline: "The Bottleneck of Human Repetitive Work & Brittle Automation",
    challengePoints: [
      "Traditional deterministic automation (simple if-this-then-that scripts) breaks whenever input formats, schemas, or edge cases vary slightly.",
      "Knowledge workers waste 40% of their workday copying data between systems, reading unformatted emails, and drafting standard replies.",
      "Generic chatbots fail at real enterprise work because they lack secure read/write database permissions and transactional verification.",
      "Hiring additional administrative staff inflates overhead without solving nighttime coverage or peak-demand backlogs.",
    ],
    approachHeadline: "Engineered Agentic Architecture With Strict Deterministic Guardrails",
    approachPoints: [
      "We design stateful, multi-agent workflows with tool-calling capabilities (SQL query, ERP mutation, CRM updating, API execution).",
      "Pydantic schemas and JSON validation guarantee that every agent action adheres to strict corporate data contracts.",
      "Human-in-the-loop escalation paths automatically flag high-risk transactions for senior staff review before execution.",
      "Comprehensive telemetry and logging provide full auditability for every thought chain, tool invocation, and decision.",
    ],
    features: [
      {
        title: "Database & API Tool Calling",
        desc: "Empower agents to securely query relational databases, invoke REST/GraphQL endpoints, and execute verified ERP transactions.",
      },
      {
        title: "Multi-Agent Collaboration",
        desc: "Orchestrate specialized agent squads (e.g., Researcher, Drafter, Fact-Checker, Dispatcher) working sequentially or in parallel.",
      },
      {
        title: "Contextual Long-Term Memory",
        desc: "Vector database integration (Pinecone/pgvector) gives agents persistent episodic memory of prior client interactions and preferences.",
      },
      {
        title: "Autonomous Error Recovery",
        desc: "Agents inspect error codes, self-heal parameter syntax, and retry failed operations using alternate paths before escalating.",
      },
      {
        title: "Enterprise Security Guardrails",
        desc: "Role-based access controls, prompt injection filtering, and token-level PII redaction protect enterprise IP and data sovereignty.",
      },
      {
        title: "Live Dashboard & Execution Telemetry",
        desc: "Real-time visibility into agent task queues, success rates, latency histograms, and API expenditure across your fleet.",
      },
    ],
    deliverables: [
      "Fully functional autonomous AI agent architecture deployed in your cloud or ours",
      "Custom system prompts, few-shot prompt libraries, and tool-calling function schemas",
      "Vector database setup for domain-specific long-term knowledge retrieval",
      "Human-in-the-loop web approval interface for sensitive operational workflows",
      "API connectors for your CRM, ERP, accounting software, and communication tools",
      "Full source code, API keys management setup, and technical handover documentation",
    ],
    techStack: ["LangChain", "LlamaIndex", "OpenAI GPT-4o", "Anthropic Claude 3.5 Sonnet", "Pinecone", "FastAPI", "Python", "Docker"],
    processSteps: [
      { step: "Phase 1", title: "Workflow Audit & Boundary Definition", desc: "Map exact inputs, decisions, error states, and permitted tool actions for your operational bottleneck." },
      { step: "Phase 2", title: "Agent Prototyping & Function Calling", desc: "Develop custom tool schemas, prompt reasoning loops, and deterministic schema enforcement." },
      { step: "Phase 3", title: "Integration & Benchmark Testing", desc: "Stress-test agents across 500+ synthetic edge cases, measuring accuracy, latency, and guardrail resilience." },
      { step: "Phase 4", title: "Production Deployment & Monitoring", desc: "Launch with real-time alerting, rate-limit management, and human-in-the-loop escalation triggers." },
    ],
    faqs: [
      {
        q: "What is the difference between an AI chatbot and an AI agent?",
        a: "A chatbot primarily answers questions by generating text. An AI agent has 'agency'—it can take real-world actions, call APIs, run SQL queries, book calendar slots, create invoices, and coordinate with other software systems to achieve a specific goal.",
      },
      {
        q: "How do you prevent the AI agent from hallucinating or making errors?",
        a: "We enforce strict JSON output schemas, deterministic verification functions, and narrow tool permissions. If an agent's proposed action violates constraints, it is rejected and re-prompted. For high-stakes operations (like wire transfers or contract dispatch), human sign-off is mandatory.",
      },
      {
        q: "Can the AI agent run entirely on our own private infrastructure?",
        a: "Yes. We can deploy private, self-hosted open-weights models (such as Llama 3 or Mistral) inside your isolated VPC (AWS, Azure, or local Dubai private cloud) with zero third-party telemetry.",
      },
    ],
  },

  chatbots: {
    slug: "chatbots",
    parentSlug: "ai-automation",
    parentName: "AI Automation",
    parentHref: "/services/ai-automation",
    title: "Custom RAG Conversational AI Chatbots & Customer Assistants",
    eyebrow: "RETRIEVAL-AUGMENTED GENERATION",
    badge: "Accurate & Hallucination-Free",
    heroHeadline: "Convert Inbound Inquiries Into Booked Sales With Smart RAG Chatbots",
    heroSubcopy:
      "Replace frustrating keyword-matching bots with contextual conversational assistants grounded exclusively in your company knowledge base, product catalogs, pricing rules, and documentation. Delivers instant, precise, human-toned answers 24/7.",
    heroImage: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1600&q=85",
    priceNote: "From AED 4,500 / $1,250 setup",
    deliveryTimeline: "7 to 14 Business Days",
    metrics: [
      { value: "0%", label: "Hallucination Rate", desc: "Hard citations and strict retrieval context filtering" },
      { value: "< 2s", label: "Average Response Time", desc: "Streaming low-latency inference across desktop & mobile" },
      { value: "42%", label: "Conversion Lift", desc: "Immediate engagement of high-intent website visitors" },
      { value: "80+", label: "Languages Supported", desc: "Native multilingual support including Arabic, English, Russian, French" },
    ],
    challengeHeadline: "Why Conventional Chatbots Frustrate Leads and Damage Brands",
    challengePoints: [
      "Traditional rule-based chatbots run into dead ends with simple phrasing changes, annoying prospects.",
      "Off-the-shelf generative bots frequently fabricate policies, invent discount codes, or hallucinate non-existent features.",
      "Visitors bouncing after business hours because no one is online to answer specific technical or pricing questions.",
      "Valuable conversation transcripts remain siloed without syncing qualified leads directly into CRM pipelines.",
    ],
    approachHeadline: "Enterprise Retrieval-Augmented Generation (RAG) With Semantic Search",
    approachPoints: [
      "We build vector embeddings of your manuals, PDFs, website URLs, and FAQs using cutting-edge semantic search models.",
      "Dynamic prompt engineering limits the bot to answering strictly from verified source chunks with clickable citations.",
      "Direct integration with WhatsApp, web widgets, Zendesk, HubSpot, and Salesforce captures user contact details seamlessly.",
      "Continuous hallucination monitoring and conversation review dashboards ensure quality never degrades.",
    ],
    features: [
      {
        title: "Semantic Vector Search (RAG)",
        desc: "Queries your exact documentation, product matrices, and service catalogues with high-precision chunking and re-ranking.",
      },
      {
        title: "Multi-Channel Omnipresence",
        desc: "Deploy a single unified brain across your website, WhatsApp, Instagram Direct, and internal Slack/Teams channels.",
      },
      {
        title: "Native Arabic & Multilingual Fluency",
        desc: "Engineered specifically for UAE and global audiences with flawless Arabic (MSA & Gulf dialect) and 80+ international languages.",
      },
      {
        title: "Lead Capture & CRM Sync",
        desc: "Intelligently extracts email, phone, budget, and timeline during conversation and creates enriched leads in your CRM.",
      },
      {
        title: "Instant Live-Agent Escalation",
        desc: "Detects user frustration or high-value VIP intent to seamlessly hand off the active chat to a human agent with full context.",
      },
      {
        title: "Strict Brand Voice Guardrails",
        desc: "Tuned to match your exact corporate tone—whether consultative, formal, friendly, or technically rigorous.",
      },
    ],
    deliverables: [
      "Custom branded web chat widget styled to your visual guidelines",
      "Fully trained RAG vector database indexing your company knowledge base",
      "Automated lead sync to HubSpot, Salesforce, or custom webhook",
      "Live conversation analytics dashboard and sentiment analysis reporting",
      "Arabic & English language fine-tuning and benchmark QA report",
      "30-day post-launch query optimization and knowledge base expansion",
    ],
    techStack: ["OpenAI GPT-4o Mini", "Pinecone", "LangChain", "Next.js", "Tailwind CSS", "HubSpot API", "WhatsApp Cloud API"],
    processSteps: [
      { step: "Phase 1", title: "Knowledge Extraction & Cleansing", desc: "Aggregate and sanitize your FAQs, pricing tables, product specs, and customer support transcripts." },
      { step: "Phase 2", title: "Chunking & Vector Indexing", desc: "Structure semantic embeddings with hybrid dense/sparse retrieval and re-ranking algorithms." },
      { step: "Phase 3", title: "UI Customization & Integrations", desc: "Design the client-facing chat interface and link webhooks to your CRM and email alerts." },
      { step: "Phase 4", title: "Simulated Stress Testing & Launch", desc: "Run 300+ tricky and adversarial queries to verify that guardrails, tone, and lead collection perform flawlessly." },
    ],
    faqs: [
      {
        q: "What happens if a user asks something that is NOT in our documentation?",
        a: "The chatbot is programmed to politely state that it doesn't have verified information on that topic, offer to take down their contact details for a specialist callback, or route the inquiry to live support.",
      },
      {
        q: "Can the chatbot book appointments directly into Google Calendar or Calendly?",
        a: "Yes. We integrate interactive booking links and native calendar slot selection directly inside the chat dialogue so users never have to leave the window.",
      },
      {
        q: "How easily can we update information when our prices or services change?",
        a: "You get a simple administrative portal to re-sync updated PDFs or documents in one click. The vector index refreshes within minutes.",
      },
    ],
  },

  workflow: {
    slug: "workflow",
    parentSlug: "ai-automation",
    parentName: "AI Automation",
    parentHref: "/services/ai-automation",
    title: "Cross-Platform Workflow & Systems Automation",
    eyebrow: "END-TO-END BUSINESS AUTOMATION",
    badge: "Zero-Latency Workflows",
    heroHeadline: "Connect Your Tech Stack & Automate High-Volume Manual Workflows",
    heroSubcopy:
      "Eliminate repetitive copy-pasting, disconnected spreadsheets, and delayed customer responses. We build enterprise-grade automation pipelines across your CRM, accounting software, email marketing, and ERP systems that trigger instantly and execute reliably.",
    heroImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=85",
    priceNote: "From AED 3,800 / $1,050 per workflow architecture",
    deliveryTimeline: "5 to 10 Business Days",
    metrics: [
      { value: "100%", label: "Data Consistency", desc: "Zero manual data re-entry errors across mirrored databases" },
      { value: "15 min to 0s", label: "Speed to Lead", desc: "Instantaneous dispatch of inbound customer submissions" },
      { value: "40 hrs/mo", label: "Time Saved per Employee", desc: "Automated report generation, invoicing, and status updates" },
      { value: "99.9%", label: "Workflow Reliability", desc: "Built with automatic retry policies and webhook failure queues" },
    ],
    challengeHeadline: "The Pain of Fragmented Software & Manual Data Shuffling",
    challengePoints: [
      "Staff wasting hours manually copying leads from marketing ads into CRMs and notifying sales reps via WhatsApp.",
      "Discrepancies between invoices generated in Stripe/QuickBooks and revenue recorded in the central CRM.",
      "Customer onboarding delays causing friction because welcome emails and document requests must be sent manually.",
      "Brittle DIY Zapier connections silently failing without error notification, leaving client data lost in transit.",
    ],
    approachHeadline: "Engineered Fault-Tolerant Automation Architecture",
    approachPoints: [
      "We design state-machine automation with idempotency keys, duplicate checks, and automated rollback capabilities.",
      "Deep API integration ensures bidirectional data synchronisation rather than surface-level one-way data dumps.",
      "Dead-letter queues and Slack/Telegram alerts notify your engineering team immediately if a third-party API changes.",
      "Full data privacy compliance ensuring customer PII is encrypted during every transition step.",
    ],
    features: [
      {
        title: "Bidirectional Data Synchronization",
        desc: "Keep contacts, deals, invoices, and inventories synchronized across HubSpot, Zoho, Salesforce, and ERPs.",
      },
      {
        title: "Instant Multi-Channel Alerts",
        desc: "Push qualified lead alerts, urgent support tickets, and large transaction notifications into Slack, Teams, or WhatsApp.",
      },
      {
        title: "Automated Document & Invoice Generation",
        desc: "Auto-fill legal agreements, proposal PDFs, NDAs, and VAT-compliant invoices upon deal stage triggers.",
      },
      {
        title: "Smart Conditional Routing",
        desc: "Route inbound opportunities dynamically based on territory, budget size, language, or current sales rep availability.",
      },
      {
        title: "Error Handling & Dead-Letter Queues",
        desc: "Self-healing retry logic queues requests during downstream service downtime, ensuring zero dropped leads.",
      },
      {
        title: "Automated Customer Onboarding Sequences",
        desc: "Instantly create project workspaces, invite client users, dispatch questionnaires, and schedule kick-off calls.",
      },
    ],
    deliverables: [
      "Complete visual workflow architecture documentation and schema mapping",
      "Tested and deployed automations on n8n, Make, or custom Node.js microservices",
      "Webhook listeners with cryptographic HMAC validation",
      "Centralized error logging dashboard with automated instant alerts",
      "Executive SOP (Standard Operating Procedure) training guides for internal teams",
      "60-day operational warranty with proactive maintenance",
    ],
    techStack: ["n8n", "Make.com", "Zapier", "Node.js", "Python", "REST APIs", "Webhooks", "PostgreSQL"],
    processSteps: [
      { step: "Phase 1", title: "Process Discovery & Mapping", desc: "Audit manual touchpoints, input schemas, validation requirements, and API rate limits." },
      { step: "Phase 2", title: "Workflow Prototyping & Security", desc: "Build logic trees, transformation modules, idempotency checks, and authentication layers." },
      { step: "Phase 3", title: "Staging Stress Testing", desc: "Simulate edge cases, payload surges, network dropouts, and invalid data formats." },
      { step: "Phase 4", title: "Production Cutover & Monitoring", desc: "Activate real-time webhooks with fallback alerts and administrative dashboards." },
    ],
    faqs: [
      {
        q: "Do we have to pay recurring monthly fees for tools like Zapier?",
        a: "Not necessarily. We can deploy open-source, self-hosted n8n on your own dedicated server, giving you unlimited execution runs without paying per-task SaaS fees.",
      },
      {
        q: "What happens if one of our software vendors updates their API?",
        a: "Our workflows include automated error handlers that alert our team immediately. We provide ongoing support plans to patch breaking API schema updates before your business is impacted.",
      },
      {
        q: "Can you automate workflows with legacy desktop software?",
        a: "Yes. Through headless browser automation, robotic process automation (RPA), and direct database connections, we can extract and push data into legacy systems without public APIs.",
      },
    ],
  },

  whatsapp: {
    slug: "whatsapp",
    parentSlug: "ai-automation",
    parentName: "AI Automation",
    parentHref: "/services/ai-automation",
    title: "Official WhatsApp Business API & Conversational AI Bots",
    eyebrow: "WHATSAPP COMMERCE & AUTOMATION",
    badge: "Official Meta Verified API",
    heroHeadline: "Turn WhatsApp Into Your #1 Revenue Channel With AI-Powered Automation",
    heroSubcopy:
      "In the UAE and across global markets, WhatsApp is where deals happen. We build official Meta Cloud API integrations, automated broadcast campaigns, interactive catalog browsing, and intelligent bilingual AI sales agents that close deals directly in WhatsApp chats.",
    heroImage: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?auto=format&fit=crop&w=1600&q=85",
    priceNote: "From AED 4,900 / $1,350 complete setup",
    deliveryTimeline: "7 to 14 Business Days",
    metrics: [
      { value: "98%", label: "Open Rate", desc: "Astronomically outperforming traditional email marketing" },
      { value: "45-60%", label: "Click-Through Rate", desc: "Direct interactive CTAs and button taps inside chat" },
      { value: "< 30s", label: "Instant Qualification", desc: "Engage prospects before competitors even check their inboxes" },
      { value: "Green Tick", label: "Official Meta Verification", desc: "Enhanced brand credibility and trust" },
    ],
    challengeHeadline: "Why Using Regular WhatsApp Numbers Restricts Business Growth",
    challengePoints: [
      "Standard WhatsApp Business accounts get banned instantly when sending bulk promotions or outbound campaigns.",
      "Team members use personal phones, making conversation histories private and risking client relationship loss if staff depart.",
      "Manual chatting limits how many leads your team can handle simultaneously during ad campaigns.",
      "Zero integration with your core CRM, forcing reps to manually copy contact details and payment confirmations.",
    ],
    approachHeadline: "Official Meta Cloud API Infrastructure With Intelligent Multi-User Shared Inboxes",
    approachPoints: [
      "We configure the official WhatsApp Cloud API under your verified Meta Business Manager account with complete green tick verification support.",
      "Deploy a centralized, multi-agent shared team inbox allowing 10+ reps to collaborate under one unified official number.",
      "Bilingual (Arabic & English) AI sales agents handle routine queries, share brochures, and qualify buyers 24/7.",
      "Deep bidirectional integration with HubSpot, Zoho, Salesforce, or your custom CRM records all conversations in customer timelines.",
    ],
    features: [
      {
        title: "Official Meta Cloud API Setup",
        desc: "High-throughput, unbannable infrastructure supporting thousands of template messages per minute with green tick assistance.",
      },
      {
        title: "Bilingual AI Chat Agent",
        desc: "Native English and Arabic natural language understanding answering questions, sharing price lists, and capturing booking slots.",
      },
      {
        title: "Multi-Agent Shared Team Inbox",
        desc: "Assign conversations to specific sales reps, add internal private notes, and monitor response time analytics in real time.",
      },
      {
        title: "Interactive Message Templates",
        desc: "Send high-converting rich media, quick-reply action buttons, list pickers, and product catalog carousels.",
      },
      {
        title: "Automated CRM Lead Ingestion",
        desc: "Inbound messages automatically create contact records, update pipeline deal stages, and trigger sales rep follow-up tasks.",
      },
      {
        title: "Outbound Broadcast Segmentation",
        desc: "Send personalized, compliant marketing updates and VIP announcements to opted-in audience segments.",
      },
    ],
    deliverables: [
      "Meta Business Manager verification and WhatsApp Business API activation",
      "Official approved message templates for transactional and marketing broadcasts",
      "Custom conversational AI logic flow configured for your specific industry",
      "Shared team inbox software setup with user permission hierarchies",
      "Full CRM synchronization (HubSpot, Zoho, or webhook-based)",
      "Staff onboarding workshop and compliance best-practice guide",
    ],
    techStack: ["WhatsApp Cloud API", "Meta Business Manager", "OpenAI GPT-4o", "HubSpot CRM", "n8n", "Node.js", "Webhooks"],
    processSteps: [
      { step: "Phase 1", title: "Meta Verification & Number Onboarding", desc: "Verify your legal entity on Meta and register your dedicated phone number on Cloud API tier." },
      { step: "Phase 2", title: "Conversation Logic & AI Prompting", desc: "Architect conversational decision trees, fallback logic, catalog assets, and bilingual prompts." },
      { step: "Phase 3", title: "CRM Sync & Team Inbox Configuration", desc: "Connect API webhooks to your sales pipeline and set up agent seat permissions." },
      { step: "Phase 4", title: "Template Approval & Live Campaign Launch", desc: "Submit Meta message templates for rapid approval and initiate pilot test campaigns." },
    ],
    faqs: [
      {
        q: "Can we keep using our existing business phone number for the WhatsApp API?",
        a: "Yes, provided the number is not currently linked to an active personal or standard WhatsApp Business app on a smartphone. We guide you through the seamless migration process.",
      },
      {
        q: "What are Meta's messaging fees for WhatsApp Business API?",
        a: "Meta charges per 24-hour conversation window based on category (Marketing, Utility, Authentication, or Service). Service conversations initiated by users are low-cost or free within the first 1,000 monthly tiers.",
      },
      {
        q: "Can multiple team members chat with clients at the same time from one number?",
        a: "Yes! That is one of the biggest benefits of the official API. Your entire sales and support team can work from a single unified verified company number with individual agent logins.",
      },
    ],
  },

  sales: {
    slug: "sales",
    parentSlug: "ai-automation",
    parentName: "AI Automation",
    parentHref: "/services/ai-automation",
    title: "AI-Powered B2B Sales Prospecting & Outreach Automation",
    eyebrow: "INTELLIGENT REVENUE GENERATION",
    badge: "Scalable B2B Pipeline Growth",
    heroHeadline: "Scale Outbound Lead Generation With AI Prospecting & Hyper-Personalized Sequences",
    heroSubcopy:
      "Stop burning sales rep hours on manual LinkedIn research and generic cold emails that land in spam. We engineer automated outbound engines that scrape high-intent B2B decision-makers, enrich contact data, and send 1-to-1 customized email and LinkedIn messages that generate qualified sales calls.",
    heroImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1600&q=85",
    priceNote: "From AED 5,500 / $1,500 monthly management",
    deliveryTimeline: "Setup in 10 Days",
    metrics: [
      { value: "40-65%", label: "Average Email Open Rate", desc: "Warm inbox infrastructure and DNS authentication" },
      { value: "12-22%", label: "Reply Rate", desc: "Hyper-relevant AI-personalized opening icebreakers" },
      { value: "15-30", label: "Qualified Meetings / Mo", desc: "Direct calendar bookings with verified decision-makers" },
      { value: "0% Risk", label: "Main Domain Protection", desc: "Isolated secondary outreach domains with automated warm-up" },
    ],
    challengeHeadline: "Why Conventional Outbound Sales is Dead",
    challengePoints: [
      "Blasting generic email templates burns your primary domain reputation and gets your corporate Google Workspace suspended.",
      "Sales development reps spend 70% of their day hunting for emails instead of talking to interested buyers.",
      "LinkedIn outreach accounts get flagged and restricted due to uncalibrated scraping and bot extensions.",
      "Inbound marketing alone leaves pipeline growth at the mercy of platform algorithms and ad spend fluctuations.",
    ],
    approachHeadline: "Hyper-Targeted Cold Outreach Infrastructure With AI Lead Enrichment",
    approachPoints: [
      "We build isolated secondary outreach domains configured with SPF, DKIM, DMARC, and 30-day algorithmic warm-up schedules.",
      "Filter verified prospect databases (Apollo, LinkedIn Sales Navigator, ZoomInfo) by exact ICP criteria, hiring signals, and tech stacks.",
      "AI models read each prospect's LinkedIn profile, recent company press releases, and website to draft bespoke opening lines.",
      "Automated reply classification tags interested responses, pushes them to CRM, and triggers instant SMS/WhatsApp alerts.",
    ],
    features: [
      {
        title: "Dedicated Outreach Infrastructure",
        desc: "Setup of 3 to 10 secondary domain assets with Google Workspace/Microsoft 365 inboxes and automated warm-up software.",
      },
      {
        title: "B2B Data Scraping & Waterfall Enrichment",
        desc: "Triple-check email deliverability using multiple validation APIs (ZeroBounce, NeverBounce) to ensure < 1% bounce rates.",
      },
      {
        title: "AI Dynamic Personalization",
        desc: "Generate bespoke research summaries and relevant icebreakers that read as if hand-written by a senior account executive.",
      },
      {
        title: "Multi-Touch Sequences",
        desc: "Synchronized email follow-ups, LinkedIn connection requests, profile views, and InMail touches spaced strategically.",
      },
      {
        title: "AI Response Triage",
        desc: "Automatically categorize replies (Interested, Not Now, Wrong Contact, Out of Office) and route positive leads directly to your calendar.",
      },
      {
        title: "CRM Pipeline Integration",
        desc: "Every converted response automatically syncs to HubSpot or Salesforce with complete context and engagement history.",
      },
    ],
    deliverables: [
      "Complete multi-domain cold email infrastructure setup and configured DNS records",
      "30-day automated inbox warm-up protocol and deliverability monitoring",
      "Custom Ideal Customer Profile (ICP) targeting matrices and verified prospect lists",
      "AI prompt engineering for hyper-personalized email copy and subject line testing",
      "Automated calendar booking links and CRM pipeline sync triggers",
      "Weekly performance reporting covering open rates, reply rates, and booked meetings",
    ],
    techStack: ["Instantly.ai", "Smartlead", "Apollo.io", "LinkedIn Sales Navigator", "OpenAI GPT-4o", "HubSpot", "Clay.com"],
    processSteps: [
      { step: "Phase 1", title: "Domain & Deliverability Architecture", desc: "Purchase and configure secondary outreach domains with full cryptographic email authentication." },
      { step: "Phase 2", title: "ICP Definition & Data Mining", desc: "Extract targeted lists of decision-makers matching your industry, revenue, and geographical targets." },
      { step: "Phase 3", title: "Copywriting & AI Personalization Logic", desc: "Craft compelling offer value propositions and program algorithmic 1-to-1 personalization hooks." },
      { step: "Phase 4", title: "Campaign Launch & Optimization", desc: "Ramp sending volumes smoothly, monitor inbox placement, and optimize sequences based on reply analytics." },
    ],
    faqs: [
      {
        q: "Will this risk our main company domain being marked as spam?",
        a: "Never. We strictly execute cold outreach from isolated secondary domains that mirror your brand name. Your primary corporate domain is completely insulated from cold sending volume.",
      },
      {
        q: "How many verified B2B leads do we get each month?",
        a: "Depending on your plan tier, we typically source, enrich, and contact between 1,500 and 5,000 verified decision-maker prospects per month.",
      },
      {
        q: "Is cold B2B email compliant with data privacy laws?",
        a: "Yes. Our campaigns strictly target corporate business addresses with legitimate business interest, include clear opt-out links, and comply fully with GDPR, CAN-SPAM, and regional regulations.",
      },
    ],
  },

  support: {
    slug: "support",
    parentSlug: "ai-automation",
    parentName: "AI Automation",
    parentHref: "/services/ai-automation",
    title: "24/7 AI Customer Support & Ticket Resolution Systems",
    eyebrow: "AUTONOMOUS CUSTOMER SERVICE",
    badge: "90% First-Touch Resolution",
    heroHeadline: "Deliver Instant, 24/7 Customer Support Without Ballooning Support Team Costs",
    heroSubcopy:
      "Transform your support operations from a cost center into a competitive advantage. We build enterprise AI support systems that resolve Tier-1 tickets, process refunds, guide troubleshooting, and manage customer inquiries instantly across email, chat, and helpdesk portals.",
    heroImage: "https://images.unsplash.com/photo-1534536281715-e28d76689b4d?auto=format&fit=crop&w=1600&q=85",
    priceNote: "From AED 5,200 / $1,400 monthly setup & maintenance",
    deliveryTimeline: "10 to 20 Business Days",
    metrics: [
      { value: "< 5s", label: "Initial Response Time", desc: "Zero waiting queues for customers day or night" },
      { value: "72%", label: "Autonomous Resolution", desc: "Routine inquiries solved without human intervention" },
      { value: "96%", label: "CSAT Score", desc: "Consistent, polite, and technically accurate customer interactions" },
      { value: "65%", label: "Support Cost Reduction", desc: "Scale ticket capacity without hiring additional shift workers" },
    ],
    challengeHeadline: "The Overwhelming Toll of High Ticket Volumes on Support Teams",
    challengePoints: [
      "Customers wait hours or days for simple answers like order status, password resets, or return policies.",
      "Human support reps burn out answering the same 20 repetitive questions dozens of times every single shift.",
      "Weekend and nighttime coverage requires costly outsourced call centers that lack deep product knowledge.",
      "Customer frustration spikes when disconnected support reps pass tickets back and forth between departments.",
    ],
    approachHeadline: "Deep Helpdesk Integration With Contextual AI Knowledge Engines",
    approachPoints: [
      "We connect AI reasoning agents directly into Zendesk, Freshdesk, Intercom, or Gorgias helpdesks.",
      "The AI reads inbound tickets, summarizes customer sentiment, searches internal SOPs, and drafts verified solutions.",
      "Equipped with secure API credentials, the AI can perform actions like tracking shipments, checking order states, or issuing vouchers.",
      "Complex edge cases are seamlessly flagged and routed to the right human specialist with pre-drafted context.",
    ],
    features: [
      {
        title: "Omnichannel Ticket Ingestion",
        desc: "Resolves customer requests coming from email, web forms, live chat, and social direct messages in one unified queue.",
      },
      {
        title: "Autonomous Action Execution",
        desc: "Connects to Shopify, WooCommerce, or custom databases to update addresses, reissue invoices, and verify subscription status.",
      },
      {
        title: "Intelligent Sentiment Analysis",
        desc: "Detects upset or at-risk customers instantly, adjusting tone to high empathy and escalating to senior supervisors.",
      },
      {
        title: "Auto-Drafting Mode for Human Review",
        desc: "Gradual deployment mode where AI drafts replies for human agents to review and approve with a single click before full autonomy.",
      },
      {
        title: "Multilingual Customer Service",
        desc: "Fluent support in English, Arabic, Russian, French, German, and Spanish with automatic language detection.",
      },
      {
        title: "Knowledge Gap Identification",
        desc: "Algorithms highlight recurring unanswered questions, showing your team exactly where documentation needs updating.",
      },
    ],
    deliverables: [
      "Full integration with Zendesk, Freshdesk, Intercom, Gorgias, or custom helpdesk",
      "Vectorization and indexing of customer knowledge base, SOPs, and past tickets",
      "Automated action connectors for e-commerce or ERP systems",
      "Agent-assist browser extension or interface for one-click draft approvals",
      "CSAT tracking and executive analytics dashboard",
      "Ongoing prompt tuning and accuracy optimization",
    ],
    techStack: ["Zendesk API", "Freshdesk", "Intercom", "OpenAI GPT-4o", "Pinecone", "Python", "Webhooks"],
    processSteps: [
      { step: "Phase 1", title: "Historical Ticket Analysis", desc: "Audit past 1,000+ support tickets to classify the top 20 repetitive customer inquiries and failure points." },
      { step: "Phase 2", title: "Knowledge Base Cleansing", desc: "Refine internal documentation, macro templates, and policy guidelines into structured training chunks." },
      { step: "Phase 3", title: "Assisted Pilot (Agent-in-the-Loop)", desc: "Deploy AI in draft-only mode where human agents evaluate, tweak, and approve generated responses." },
      { step: "Phase 4", title: "Autonomous Go-Live & Monitoring", desc: "Enable direct auto-resolution for verified low-risk ticket categories with real-time sentiment escalation." },
    ],
    faqs: [
      {
        q: "Can the AI accidentally promise something against company policy?",
        a: "No. The AI operates within strict deterministic guardrails. It cannot authorize refunds above specified thresholds or make commitments outside approved policy documentation.",
      },
      {
        q: "Can we start with human agents reviewing AI drafts first?",
        a: "Yes! In fact, we recommend this phased rollout. The AI prepares the draft, the human agent reviews and clicks 'Send', and the system learns from any edits made.",
      },
      {
        q: "Does this replace our entire customer support team?",
        a: "No. It handles high-volume repetitive Tier-1 inquiries (where customers just want instant answers), freeing your human agents to handle high-value relationship building and complex VIP issues.",
      },
    ],
  },

  qualification: {
    slug: "qualification",
    parentSlug: "ai-automation",
    parentName: "AI Automation",
    parentHref: "/services/ai-automation",
    title: "Real-Time AI Lead Qualification & Automated Calendar Booking",
    eyebrow: "LEAD CONVERSION ACCELERATION",
    badge: "Speed to Lead < 60 Seconds",
    heroHeadline: "Qualify Inbound Leads Instantly & Book High-Value Meetings Directly on Your Calendar",
    heroSubcopy:
      "When a potential buyer fills out your form, every minute of delay reduces conversion odds by 391%. We build real-time conversational qualification engines that immediately engage leads via SMS, WhatsApp, or phone, verify budget and requirements, and lock in qualified meetings on your sales team's calendar.",
    heroImage: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1600&q=85",
    priceNote: "From AED 4,200 / $1,150 setup",
    deliveryTimeline: "7 to 14 Business Days",
    metrics: [
      { value: "< 60s", label: "Response Time", desc: "Engage prospects while your brand is still fresh in their minds" },
      { value: "3.4x", label: "Show-Up Rate Increase", desc: "Automated SMS/WhatsApp reminders and calendar synchronization" },
      { value: "100%", label: "Budget & Fit Verification", desc: "No more wasted sales calls with unqualified prospects" },
      { value: "24/7", label: "Instant Scheduling", desc: "Never lose a high-value lead due to nighttime or timezone delays" },
    ],
    challengeHeadline: "The Silent Revenue Killer: Slow Response Times & Unqualified Meetings",
    challengePoints: [
      "Over 55% of inbound web leads are never followed up within the critical first hour, causing them to contact competitors.",
      "Sales reps waste half their calendar slots talking to unqualified tire-kickers with zero budget or decision-making power.",
      "Back-and-forth email scheduling ping-pong results in lost momentum and 40%+ meeting no-show rates.",
      "Weekend marketing ad spend generates leads that sit cold until Monday morning when interest has completely faded.",
    ],
    approachHeadline: "Instant Multi-Channel AI Concierge & Round-Robin Booking Engine",
    approachPoints: [
      "Inbound web form submissions immediately trigger an automated, personalized WhatsApp or SMS message within 30 seconds.",
      "An intelligent conversational assistant asks targeted qualifying questions (budget, timeline, project scope, location).",
      "Qualified buyers receive an interactive calendar slot picker synchronized with your sales team's real-time availability.",
      "Automated multi-channel reminders (WhatsApp + Email + SMS) ensure high show-up rates and pre-meeting questionnaire completion.",
    ],
    features: [
      {
        title: "Sub-Minute Speed to Lead",
        desc: "Instant automated outreach across WhatsApp, SMS, or interactive voice call the exact moment a form is submitted.",
      },
      {
        title: "Intelligent BANT Qualification",
        desc: "Screens for Budget, Authority, Need, and Timeline through natural, engaging human-like dialogue.",
      },
      {
        title: "Round-Robin Calendar Scheduling",
        desc: "Distributes booked calls evenly or based on rep expertise, geography, or deal size across Google or Outlook calendars.",
      },
      {
        title: "Automated Rescheduling & Reminders",
        desc: "Sends 24-hour and 1-hour pre-call WhatsApp reminders with one-click rescheduling buttons to prevent no-shows.",
      },
      {
        title: "Unqualified Lead Nurturing",
        desc: "Politely redirects unqualified leads to self-serve resources or lower-tier offerings without burning rep time.",
      },
      {
        title: "Live CRM Stage Updates",
        desc: "Updates deal stages in HubSpot, Zoho, or Salesforce with complete qualification transcripts and meeting links.",
      },
    ],
    deliverables: [
      "Form webhook listeners connected to instant messaging dispatchers",
      "Custom conversational qualification prompt flow tailored to your sales process",
      "Multi-user calendar integration (Calendly, HubSpot Meetings, or Cal.com)",
      "Automated SMS/WhatsApp reminder workflows and no-show recovery sequences",
      "Full CRM pipeline synchronization and custom qualification field mapping",
      "Live conversion reporting dashboard showing lead-to-meeting ratios",
    ],
    techStack: ["Cal.com", "Calendly", "HubSpot", "WhatsApp Cloud API", "Twilio", "Make.com", "OpenAI GPT-4o"],
    processSteps: [
      { step: "Phase 1", title: "Qualification Criteria Definition", desc: "Define must-have qualification thresholds, disqualified criteria, and sales rep allocation logic." },
      { step: "Phase 2", title: "Conversational Scripting & Tooling", desc: "Script natural dialogue flows, objection handling, and interactive booking widget behaviors." },
      { step: "Phase 3", title: "CRM & Calendar Integration", desc: "Sync sales reps' real-time calendar availability, timezones, and automatic meeting buffer times." },
      { step: "Phase 4", title: "Live Simulation & Launch", desc: "Execute end-to-end test leads from web form through to calendar invite and reminder notifications." },
    ],
    faqs: [
      {
        q: "What if a lead enters a fake phone number or email?",
        a: "Our system runs real-time HLR and format validation. If a number is invalid, it falls back to instant email outreach and flags the record in your CRM.",
      },
      {
        q: "Can the AI handle different time zones for international clients?",
        a: "Yes. The AI automatically detects the prospect's timezone and renders available meeting slots in their local time.",
      },
      {
        q: "Can we customize the qualification questions based on which marketing campaign they came from?",
        a: "Absolutely. We pass UTM parameters and campaign tags directly into the AI prompt so the conversation acknowledges the exact ad or offer they clicked.",
      },
    ],
  },

  content: {
    slug: "content",
    parentSlug: "ai-automation",
    parentName: "AI Automation",
    parentHref: "/services/ai-automation",
    title: "AI-Powered Content Marketing & Creative Asset Pipelines",
    eyebrow: "SCALABLE CONTENT ENGINE",
    badge: "10x Production Velocity",
    heroHeadline: "Scale High-Performing Marketing Content With Automated AI Creative Workflows",
    heroSubcopy:
      "Maintain a commanding digital presence without hiring a massive in-house editorial team. We engineer automated content pipelines that transform core concepts, podcast episodes, or market research into search-optimized blog articles, social media assets, newsletters, and ad creatives tailored to your brand voice.",
    heroImage: "https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=1600&q=85",
    priceNote: "From AED 3,500 / $950 monthly setup",
    deliveryTimeline: "7 to 10 Business Days",
    metrics: [
      { value: "10x", label: "Publishing Velocity", desc: "Produce weeks worth of cross-channel content in hours" },
      { value: "100%", label: "Brand Voice Consistency", desc: "Trained on your company tone, vocabulary, and style guides" },
      { value: "SEO-Ready", label: "Programmatic Formatting", desc: "Optimized semantic heading structures, internal links, and schemas" },
      { value: "Multi-Format", label: "Automated Repurposing", desc: "One core insight turns into 15 distinct platform assets" },
    ],
    challengeHeadline: "The Exhausting Grind of Cross-Platform Content Creation",
    challengePoints: [
      "Marketing teams struggle to consistently post across LinkedIn, Instagram, TikTok, newsletters, and company blogs.",
      "Generic ChatGPT output sounds robotic, repetitive, and fails to capture your brand's unique perspective.",
      "High agency fees for basic copywriting and graphic design drain marketing budgets without guaranteeing organic reach.",
      "Valuable long-form podcasts, webinars, and case studies sit unused because no one has time to repurpose them.",
    ],
    approachHeadline: "Bespoke Content Engines Grounded in Brand Voice Guidelines & Structured RAG",
    approachPoints: [
      "We build customized prompt templates trained on your best-performing past articles, executive writing samples, and brand books.",
      "Automated transcription and audio/video chunking pipelines convert webinars into bite-sized social posts and blog drafts.",
      "Human-in-the-loop review dashboards allow your editorial team to inspect, refine, and approve batches in minutes.",
      "Direct API integrations publish approved drafts directly to WordPress, Webflow, LinkedIn, and social schedulers.",
    ],
    features: [
      {
        title: "Brand Voice Fine-Tuning",
        desc: "System prompts engineered to avoid AI clichés, adopting your exact corporate tone, terminology, and formatting style.",
      },
      {
        title: "Multimedia Repurposing Pipelines",
        desc: "Upload one video or audio file to automatically generate a long-form article, 5 LinkedIn carousels, and 10 tweet threads.",
      },
      {
        title: "SEO-Optimized Long-Form Articles",
        desc: "Researches search intent, integrates target keywords naturally, and builds structured FAQs with JSON-LD schema.",
      },
      {
        title: "Programmatic Social Graphics",
        desc: "Automatically renders quote cards, statistic highlights, and carousel slides in your corporate brand colors and fonts.",
      },
      {
        title: "Automated Newsletter Curations",
        desc: "Aggregates industry news, summarizes key developments, and drafts weekly branded email newsletters for subscribers.",
      },
      {
        title: "Direct CMS & Social Publishing",
        desc: "Pushes approved content directly into WordPress, Ghost, Webflow, Buffer, or Hootsuite without copy-pasting.",
      },
    ],
    deliverables: [
      "Custom brand voice prompt system documentation and negative prompt guardrails",
      "Automated audio/video transcription and repurposing workflow in Make/n8n",
      "Programmatic image template generation setup (Bannerbear / Canva API)",
      "Direct CMS webhook integration for automated draft publishing",
      "Editorial review queue dashboard in Notion or Airtable",
      "Team training session on prompt engineering and asset curation",
    ],
    techStack: ["OpenAI GPT-4o", "Claude 3.5 Sonnet", "Airtable", "Bannerbear", "WordPress REST API", "n8n", "Whisper AI"],
    processSteps: [
      { step: "Phase 1", title: "Brand Voice & Asset Audit", desc: "Analyze top-performing historic content, writing style guides, and banned keyword lists." },
      { step: "Phase 2", title: "Pipeline Architecture & Prompting", desc: "Construct multi-stage drafting, critique, and SEO enrichment prompt chains." },
      { step: "Phase 3", title: "CMS & Social API Connections", desc: "Connect automated drafting workflows to your editorial database and publishing destinations." },
      { step: "Phase 4", title: "Quality Benchmarking & Training", desc: "Run pilot batches, calibrate tone nuances with editorial feedback, and onboard marketing staff." },
    ],
    faqs: [
      {
        q: "Will Google penalize our site for AI-generated content?",
        a: "Google's official guidelines reward helpful, high-quality content regardless of how it is produced. Our pipelines incorporate proprietary insights, unique data, and human editorial review to ensure high E-E-A-T value that ranks safely.",
      },
      {
        q: "Can the pipeline generate images and social graphics as well?",
        a: "Yes. We connect graphic rendering APIs to auto-generate branded slides, quote cards, and feature graphics using your exact typography, hex colors, and logo assets.",
      },
      {
        q: "How much human oversight is required?",
        a: "We design a 'review-and-approve' workflow where a human editor spends roughly 5-10 minutes reviewing and tweaking a finished draft rather than spending 4 hours writing from scratch.",
      },
    ],
  },

  "business-process": {
    slug: "business-process",
    parentSlug: "ai-automation",
    parentName: "AI Automation",
    parentHref: "/services/ai-automation",
    title: "Robotic Process Automation (RPA) & Business Process Optimization",
    eyebrow: "ENTERPRISE OPERATIONAL EFFICIENCY",
    badge: "100% Audit Compliance",
    heroHeadline: "Modernize Legacy Operations With Intelligent Robotic Process Automation",
    heroSubcopy:
      "Bridge the gap between modern cloud services and legacy desktop or on-premise software. We deploy intelligent RPA bots and data-extraction pipelines that automate invoice processing, financial reconciliation, compliance audits, and back-office operations with zero human error.",
    heroImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=85",
    priceNote: "From AED 8,500 / $2,300 implementation",
    deliveryTimeline: "2 to 4 Weeks",
    metrics: [
      { value: "99.8%", label: "Data Extraction Accuracy", desc: "Multi-model OCR and vision models for unformatted documents" },
      { value: "80%", label: "Processing Time Reduction", desc: "Invoices and paperwork handled in seconds instead of days" },
      { value: "0", label: "Clerical Data Entry Errors", desc: "Automated ledger reconciliation with verification checks" },
      { value: "Full Audit", label: "Traceability & Logging", desc: "Complete timestamped audit trails for financial compliance" },
    ],
    challengeHeadline: "The Burden of Manual Invoicing, Paperwork, and Legacy Systems",
    challengePoints: [
      "Finance teams manually re-typing data from thousands of vendor PDF invoices into ERPs and accounting systems.",
      "Legacy software lacking modern APIs forces staff into endless copy-pasting across multiple browser windows.",
      "Human clerical errors during data entry lead to tax discrepancies, overpayments, or delayed client billings.",
      "High employee turnover in operational roles requires constant re-training on convoluted administrative procedures.",
    ],
    approachHeadline: "Intelligent Document Processing (IDP) Combined With Headless Bot Automation",
    approachPoints: [
      "We utilize advanced vision models (GPT-4o Vision, AWS Textract) to extract data from unstructured invoices, receipts, and contracts.",
      "Intelligent bots validate line items against purchase orders, detect duplicate invoices, and verify tax registration numbers.",
      "Automated RPA scripts execute desktop and web interactions inside virtual environments to enter data into legacy software.",
      "Every transaction produces immutable cryptographic audit logs with full exception handling for discrepancies.",
    ],
    features: [
      {
        title: "Intelligent Document Processing (IDP)",
        desc: "Extracts table line items, VAT numbers, totals, and due dates from scanned PDFs, images, and unformatted emails.",
      },
      {
        title: "Automated 3-Way Matching",
        desc: "Reconciles purchase orders, receiving slips, and supplier invoices automatically before queuing payment approvals.",
      },
      {
        title: "Legacy Software Integration",
        desc: "Enables programmatic data entry into desktop ERPs, older accounting software, and portals lacking public APIs.",
      },
      {
        title: "Automated Bank Reconciliation",
        desc: "Matches bank statement feeds against general ledger transactions, identifying unmatched items for quick review.",
      },
      {
        title: "Compliance & VAT Auditing",
        desc: "Validates UAE Federal Tax Authority (FTA) or international VAT formatting rules automatically on all incoming invoices.",
      },
      {
        title: "Real-Time Exception Queue",
        desc: "Discrepant line items are automatically routed to senior accounting personnel with discrepancy highlights.",
      },
    ],
    deliverables: [
      "Deployed IDP extraction pipeline customized for your document templates",
      "Automated accounting/ERP integration scripts with schema verification",
      "Exception handling web interface for human approvers",
      "Comprehensive compliance and security documentation",
      "Automated daily reconciliation summary reports delivered via email or Slack",
      "3-month operational support and OCR retraining warranty",
    ],
    techStack: ["AWS Textract", "Python", "Playwright", "OpenAI Vision", "QuickBooks API", "Xero", "Docker", "PostgreSQL"],
    processSteps: [
      { step: "Phase 1", title: "Document Sampling & Schema Mapping", desc: "Collect representative samples of supplier invoices, statements, and forms to map field requirements." },
      { step: "Phase 2", title: "OCR & Vision Extraction Pipeline", desc: "Build extraction models with confidence scoring and fallback validation rules." },
      { step: "Phase 3", title: "ERP Connector & RPA Scripting", desc: "Develop reliable automation scripts that enter validated records directly into your destination systems." },
      { step: "Phase 4", title: "Parallel Run & Validation", desc: "Run automations concurrently alongside human staff for 2 weeks to verify 100% matching accuracy." },
    ],
    faqs: [
      {
        q: "Can the system handle invoices in Arabic and other languages?",
        a: "Yes. Our optical character recognition and vision models natively process Arabic, English, and dozens of international languages, including handwritten notes.",
      },
      {
        q: "What happens if an invoice has poor scan quality or coffee stains?",
        a: "If the AI confidence score drops below 95%, the system automatically flags the document in an exception review queue for a human clerk to verify, preventing corrupt data entries.",
      },
      {
        q: "Is our financial data stored securely during processing?",
        a: "Yes. We operate strict zero-data-retention policies with transit and rest encryption. Your financial data is never used to train public AI models.",
      },
    ],
  },

  n8n: {
    slug: "n8n",
    parentSlug: "ai-automation",
    parentName: "AI Automation",
    parentHref: "/services/ai-automation",
    title: "Self-Hosted n8n & Enterprise Integration Architecture",
    eyebrow: "COST-EFFECTIVE OPEN AUTOMATION",
    badge: "Unlimited Runs Without Per-Task Fees",
    heroHeadline: "Break Free From Sky-High Zapier Bills With Self-Hosted n8n Architecture",
    heroSubcopy:
      "When your business runs hundreds of thousands of automation tasks monthly, Zapier and Make pricing quickly explodes into thousands of dollars. We build, host, and maintain high-availability, self-hosted n8n infrastructure on your own private cloud—delivering unlimited automations, complete data privacy, and full custom code control.",
    heroImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1600&q=85",
    priceNote: "From AED 4,500 / $1,250 deployment & migration",
    deliveryTimeline: "5 to 10 Business Days",
    metrics: [
      { value: "80%+", label: "Cost Savings", desc: "Eliminate per-task billing compared to commercial SaaS platforms" },
      { value: "Unlimited", label: "Execution Volume", desc: "Run millions of workflow triggers without surprise usage overage fees" },
      { value: "100%", label: "Data Sovereignty", desc: "Customer data never leaves your private isolated cloud server" },
      { value: "Sub-50ms", label: "Execution Speed", desc: "Local database and webhook processing on dedicated hardware" },
    ],
    challengeHeadline: "Why High-Volume Businesses Outgrow Zapier and Proprietary SaaS",
    challengePoints: [
      "Astronomical monthly bills as workflow executions scale into the hundreds of thousands.",
      "Enterprise compliance violations when sensitive customer PII passes through third-party multi-tenant US servers.",
      "Strict execution timeouts and memory limits that prevent heavy data transformation or bulk file processing.",
      "Vendor lock-in with closed-source platforms where custom Node.js libraries cannot be imported.",
    ],
    approachHeadline: "Hardened Dockerized n8n Architecture With Redis Queue Clustering",
    approachPoints: [
      "We deploy enterprise n8n in queue mode using Docker, PostgreSQL, and Redis for horizontal scalability and high availability.",
      "Automated SSL certificates, daily encrypted backups, and isolated VPC firewall rules protect your automation hub.",
      "We migrate existing Zapier and Make workflows into robust, version-controlled n8n JSON templates.",
      "Custom npm packages, Python scripts, and internal API nodes can be injected directly into your workflow execution environment.",
    ],
    features: [
      {
        title: "Dedicated Private Cloud Hosting",
        desc: "Deployed on your own AWS, Hetzner, DigitalOcean, or private GCC cloud instance with full root ownership.",
      },
      {
        title: "Queue Mode Horizontal Scaling",
        desc: "Separates webhooks from background worker nodes via Redis, processing thousands of simultaneous webhooks effortlessly.",
      },
      {
        title: "Full Data Privacy & GDPR Compliance",
        desc: "Sensitive financial, legal, and medical data stays entirely within your private network boundaries.",
      },
      {
        title: "Custom Code & Library Support",
        desc: "Execute custom Node.js and Python modules inside workflows for complex cryptographic signing or advanced data math.",
      },
      {
        title: "Automated Zapier / Make Migration",
        desc: "We analyze and translate your existing workflows into streamlined, native n8n workflows with zero operational downtime.",
      },
      {
        title: "Proactive Health Monitoring & Backups",
        desc: "Automated daily database backups to S3, memory leak monitoring, and instant server alert notifications.",
      },
    ],
    deliverables: [
      "Fully configured production n8n cluster running in Docker queue mode",
      "PostgreSQL database configuration with connection pooling and automated backups",
      "SSL reverse proxy setup with strict Nginx or Caddy security headers",
      "Migration of your core high-volume workflows from Zapier/Make",
      "Git version control integration for workflow staging and rollbacks",
      "Complete administration manual and 60-day infrastructure monitoring",
    ],
    techStack: ["n8n", "Docker", "Docker Compose", "PostgreSQL", "Redis", "Nginx", "Linux", "Git"],
    processSteps: [
      { step: "Phase 1", title: "Infrastructure Sizing & Provisioning", desc: "Select and deploy optimal server specifications based on expected peak webhook volume." },
      { step: "Phase 2", title: "Containerization & Security Hardening", desc: "Deploy Dockerized n8n with isolated network bridges, Redis queue workers, and SSL certificates." },
      { step: "Phase 3", title: "Workflow Migration & Refactoring", desc: "Rebuild existing automations into modular n8n workflows, optimizing logic and API call efficiency." },
      { step: "Phase 4", title: "Load Testing & Handover", desc: "Blast simulated webhook bursts to verify queue stability, failure recovery, and backup automations." },
    ],
    faqs: [
      {
        q: "How does n8n compare to Zapier in terms of ease of use?",
        a: "n8n has an intuitive visual canvas very similar to Make and Zapier, but gives you much greater control over data transformations, branching logic, and custom code execution.",
      },
      {
        q: "Who handles maintenance, server updates, and security patches?",
        a: "We offer turnkey managed maintenance plans where we handle OS updates, n8n version upgrades, and database optimizations, or we can train your internal DevOps team.",
      },
      {
        q: "Can n8n connect to our internal custom database or proprietary API?",
        a: "Yes! Since n8n is open and self-hosted on your network, it can communicate directly with your internal private databases (Postgres, MySQL, MongoDB) and internal APIs without public exposure.",
      },
    ],
  },
};
