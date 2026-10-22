import { SubServiceDetail } from "../subServicesData";

export const AI_SEO_SUB_SERVICES: Record<string, SubServiceDetail> = {
  "technical-seo": {
    slug: "technical-seo",
    parentSlug: "ai-seo-search",
    parentName: "AI SEO & Search",
    parentHref: "/services/ai-seo-search",
    title: "Technical SEO Audits, Core Web Vitals & Crawl Budget",
    eyebrow: "FOUNDATIONAL SEARCH ARCHITECTURE",
    badge: "Core Web Vitals < 0.8s",
    heroHeadline: "Eliminate Invisible Technical Bottlenecks & Accelerate Search Crawl Budget",
    heroSubcopy:
      "Even the most brilliant content cannot rank if search engine bots are trapped in redirect loops, blocked by rogue robots.txt directives, or slowed down by bloated JavaScript. We conduct deep-level technical SEO audits and code-level remediation to ensure flawless crawlability, indexation, and sub-second Core Web Vitals.",
    heroImage: "https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&w=1600&q=85",
    priceNote: "From $850 One-Time Audit / Sprint",
    deliveryTimeline: "Audit in 5 Days / Dev Sprint in 2 Weeks",
    metrics: [
      { value: "100%", label: "Clean Crawlability", desc: "Zero 404 loops, orphan pages, or broken canonical references" },
      { value: "sub-0.8s", label: "LCP Benchmark", desc: "Largest Contentful Paint passing all Google Core Web Vitals" },
      { value: "3x", label: "Crawl Efficiency", desc: "Optimizing server log response times for search engine spiders" },
      { value: "XML & HTML", label: "Dynamic Sitemaps", desc: "Automated real-time sitemaps communicating updates immediately" },
    ],
    challengeHeadline: "The Silent Technical Disasters Sabotaging Enterprise Websites",
    challengePoints: [
      "Client-side rendered Single Page Applications (SPAs) that search engine bots fail to render or index completely.",
      "Fragmented canonical tags that cause Google to index duplicate URL parameter strings and dilute ranking power.",
      "Slow server response times (TTFB > 1.2s) that cause Googlebot to abandon crawls before reading key pages.",
      "Bloated CSS, heavy uncompressed images, and third-party scripts that fail Google's Core Web Vitals mobile thresholds.",
    ],
    approachHeadline: "Our Code-Level Technical Remediation Standard",
    approachPoints: [
      "Full site crawl utilizing Screaming Frog enterprise spiders configured to execute modern JavaScript frameworks.",
      "Direct code-level remediation: optimizing server-side rendering (SSR), eliminating render-blocking CSS, and implementing dynamic font sub-setting.",
      "Server log analysis to track exactly how Googlebot, Bingbot, and AI crawlers (PerplexityBot, GPTBot) interact with your infrastructure.",
      "Restructuring robots.txt, dynamic XML sitemaps, and HTTP security headers for optimal search engine accessibility.",
    ],
    features: [
      {
        title: "JavaScript Rendering & SSR Optimization",
        desc: "Ensure your React, Vue, or Next.js application renders clean semantic HTML directly on the server for immediate indexation.",
      },
      {
        title: "Core Web Vitals Engineering Overhaul",
        desc: "Optimize Largest Contentful Paint (LCP), Interaction to Next Paint (INP), and Cumulative Layout Shift (CLS) into the green zone.",
      },
      {
        title: "Canonical Tag & Duplicate Parameter Consolidation",
        desc: "Resolve pagination issues, faceted eCommerce filter traps, and session ID parameters to concentrate equity on primary URLs.",
      },
      {
        title: "Crawl Budget & Server Log File Analysis",
        desc: "Analyze your web server logs to discover crawl frequency, eliminate 4xx/5xx errors, and guide bots toward your highest-value revenue pages.",
      },
      {
        title: "Dynamic XML Sitemap & IndexNow Pipelines",
        desc: "Implement automated sitemap generation and IndexNow protocols that ping Google and Bing the second new content is published.",
      },
      {
        title: "International Hreflang & Multi-Language Setup",
        desc: "Configure precise bidirectional hreflang tags for regional targeting, preventing language cannibalization across international sites.",
      },
    ],
    deliverables: [
      "Comprehensive 60+ point Technical SEO Audit Report with prioritized developer issue tickets",
      "Direct code pull requests (PRs) implementing fixes directly in your Next.js/WordPress codebase",
      "Before-and-after Core Web Vitals speed comparison verified on PageSpeed Insights",
      "Configured XML sitemap index and clean robots.txt directives",
      "Live Google Search Console monitoring dashboard tracking index coverage health",
    ],
    techStack: ["Screaming Frog SEO Spider", "Google Search Console API", "Lighthouse CLI", "Next.js 16 SSR", "IndexNow Protocol", "Cloudflare Workers"],
    processSteps: [
      { step: "01", title: "Deep Spider Crawl & Log Audit", desc: "Crawling every URL, script, stylesheet, and server access log entry." },
      { step: "02", title: "Bottleneck Identification & Action Plan", desc: "Prioritizing critical indexation, canonical, and speed blockers." },
      { step: "03", title: "Engineering Sprint & Code Patching", desc: "Writing code modifications, optimizing asset delivery, and adjusting server headers." },
      { step: "04", title: "Re-Crawl Verification & Search Console Validation", desc: "Confirming error eradication and requesting bulk re-indexing from Google." },
    ],
    faqs: [
      {
        q: "What is crawl budget and why does it matter for large websites?",
        a: "Crawl budget is the number of pages search engine bots will scan on your website during a given timeframe. If your site has slow server responses, infinite redirect loops, or thousands of useless URL parameters, Googlebot wastes its budget and fails to discover your revenue-generating pages.",
      },
      {
        q: "Do you just give us a PDF of issues or do you actually fix the code?",
        a: "Unlike traditional consulting agencies that hand you a 50-page PDF and walk away, our team includes senior software engineers. We write the actual code, patch the templates, and submit tested pull requests directly to your repository.",
      },
      {
        q: "What is the new INP (Interaction to Next Paint) metric?",
        a: "INP replaced First Input Delay (FID) as an official Google Core Web Vital. It measures the responsiveness of your website when a user clicks a button or menu. We optimize JavaScript execution and main-thread blocking to guarantee instant interaction.",
      },
    ],
  },

  "on-page-seo": {
    slug: "on-page-seo",
    parentSlug: "ai-seo-search",
    parentName: "AI SEO & Search",
    parentHref: "/services/ai-seo-search",
    title: "On-Page Semantic Keyword & Content Hierarchy Optimization",
    eyebrow: "SEMANTIC RELEVANCE & CONTENT ARCHITECTURE",
    badge: "Semantic Content Architecture",
    heroHeadline: "Engineer Flawless On-Page Content Hierarchies That Search Engines Love",
    heroSubcopy:
      "Modern search algorithms don't just count keyword frequency—they analyze entity relationships, topical depth, and structured semantic context. We overhaul your on-page elements, heading hierarchies, semantic schema markup, and internal linking to turn every webpage into an undeniable authority signal.",
    heroImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=85",
    priceNote: "From $500 / month Sprints",
    deliveryTimeline: "Ongoing Monthly Sprints",
    metrics: [
      { value: "100%", label: "Semantic Entity Alignment", desc: "Covering all essential NLP topics and semantic sub-entities" },
      { value: "H1 - H4", label: "Logical Heading Structure", desc: "Clean semantic HTML outlining content intent perfectly" },
      { value: "+65%", label: "Click-Through Rate (CTR)", desc: "Compelling, psychological title tags and meta descriptions" },
      { value: "Contextual", label: "Internal Linking Silos", desc: "Funneling link equity directly to high-margin revenue pages" },
    ],
    challengeHeadline: "Why Most On-Page SEO Tactics Are Stuck in 2012",
    challengePoints: [
      "Keyword stuffing that feels awkward and triggers Google's spam and over-optimization filters.",
      "Generic, boring title tags that blend into the SERP and achieve dismal click-through rates.",
      "Disorganized heading structures (multiple H1 tags, skipped levels) that confuse search engine parsers.",
      "Dead-end pages with zero internal links that fail to distribute page authority throughout the website.",
    ],
    approachHeadline: "Our Natural Language Processing (NLP) On-Page Framework",
    approachPoints: [
      "We use advanced NLP tools (SurferSEO, Clearscope) to analyze top-ranking pages and identify required semantic entities.",
      "Crafting magnetic, psychological title tags and meta descriptions designed to maximize organic click-through rates (CTR).",
      "Structuring content using strict semantic HTML: ordered H1/H2/H3 hierarchies, definition lists, and data comparison tables.",
      "Deploying contextual internal linking meshes that establish clear topical parent-child relationships across your pages.",
    ],
    features: [
      {
        title: "Semantic Entity & LSI Keyword Integration",
        desc: "Enrich your content with the exact contextual terms, synonyms, and sub-topics that Google's algorithm expects to find in authoritative guides.",
      },
      {
        title: "High-CTR Psychological Title Tag Engineering",
        desc: "Craft click-worthy meta titles that combine high-intent commercial keywords with emotional power words, maximizing your organic CTR.",
      },
      {
        title: "Strict Semantic Heading Hierarchy Architecture",
        desc: "Structure your page content with logical H1, H2, and H3 cascades that make it effortless for both human readers and AI crawlers to parse.",
      },
      {
        title: "Contextual Internal Linking Silos",
        desc: "Connect relevant articles and services through descriptive, contextual anchor text that passes link authority and keeps users engaged.",
      },
      {
        title: "Featured Snippet & Direct Answer Optimization",
        desc: "Format concise 40-to-60-word answer paragraphs, ordered step lists, and comparison tables designed to win Position Zero.",
      },
      {
        title: "Visual Media & Image Alt-Text Optimization",
        desc: "Compress images, use descriptive filenames, and write descriptive, keyword-aligned alt attributes for accessibility and image search ranking.",
      },
    ],
    deliverables: [
      "Full On-Page Optimization Audit and prioritized URL optimization sprint map",
      "Custom-written metadata sheets (Title Tags, Meta Descriptions, OG Tags) for all primary pages",
      "Content optimization scorecards verifying 85+ NLP content scores",
      "Contextual internal linking map connecting high-authority blog posts to commercial service pages",
      "Monthly keyword ranking and organic CTR performance report in Google Search Console",
    ],
    techStack: ["SurferSEO Enterprise", "Clearscope", "Google Search Console", "Ahrefs On-Page Analyzer", "JSON-LD Schema Generator"],
    processSteps: [
      { step: "01", title: "Target Page & Competitor NLP Audit", desc: "Analyzing top-ranking pages to extract required topical entities and content depth." },
      { step: "02", title: "Metadata & Heading Restructuring", desc: "Rewriting titles, descriptions, and headings for maximum click-throughs and relevance." },
      { step: "03", title: "Content Enrichment & Snippet Formatting", desc: "Adding concise definition blocks, comparison tables, and semantic proof terms." },
      { step: "04", title: "Internal Link Siloing & Validation", desc: "Deploying contextual internal links and verifying ranking movements in Search Console." },
    ],
    faqs: [
      {
        q: "What is semantic SEO and how is it different from traditional keyword optimization?",
        a: "Traditional SEO focused on repeating a specific keyword multiple times on a page. Semantic SEO focuses on meaning and topic depth—using Natural Language Processing (NLP) to cover all related sub-concepts, entities, and questions that prove comprehensive expertise to modern search engines.",
      },
      {
        q: "Can changing our title tags really improve our search rankings?",
        a: "Yes! Title tags remain one of the strongest direct ranking factors on Google. Furthermore, a well-crafted, psychological title tag can double or triple your Click-Through Rate (CTR) from the exact same ranking position, sending strong positive behavioral signals to Google.",
      },
      {
        q: "How many internal links should each page have?",
        a: "There is no fixed quota, but every commercial page should receive 3 to 10 contextual internal links from relevant blog articles and sister services, and should link outward to 2 to 4 complementary resources to keep visitors flowing through your conversion funnel.",
      },
    ],
  },

  aeo: {
    slug: "aeo",
    parentSlug: "ai-seo-search",
    parentName: "AI SEO & Search",
    parentHref: "/services/ai-seo-search",
    title: "Answer Engine Optimization (AEO) for Voice & AI Assistant Discovery",
    eyebrow: "NEXT-GENERATION ANSWER ENGINE RANKING",
    badge: "Direct Answer Citations",
    heroHeadline: "Position Your Brand as the Direct Answer on Siri, Google Assistant & Perplexity",
    heroSubcopy:
      "When users ask conversational questions like 'Who is the best corporate web developer?' or 'What is the cost of cloud migration?', search assistants don't return 10 blue links—they speak a single, definitive answer. We architect your content and schema to win those direct answer citations.",
    heroImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1600&q=85",
    priceNote: "From $650 / month Retainer",
    deliveryTimeline: "Ongoing Monthly Sprints",
    metrics: [
      { value: "Position 0", label: "Featured Snippets", desc: "Direct answer box placement above standard organic listings" },
      { value: "Conversational", label: "Query Targeting", desc: "Optimizing for spoken and voice search sentence structures" },
      { value: "100%", label: "FAQPage Schema", desc: "Structured data ingested directly by Google and AI assistants" },
      { value: "Direct", label: "Brand Citation", desc: "Mentioned by name in synthesized answer overviews" },
    ],
    challengeHeadline: "The Massive Shift from Search Queries to Direct Answers",
    challengePoints: [
      "Voice search, Google AI Overviews, and digital assistants deliver a single authoritative answer, completely bypassing pages ranked #2 to #10.",
      "Traditional long-winded corporate fluff gets skipped by answer engines looking for direct, factual definitions.",
      "Websites lacking structured FAQPage schema are invisible to voice search assistants like Apple Siri and Google Assistant.",
      "Failing to answer specific customer objections directly drives prospects into the arms of competitors who do.",
    ],
    approachHeadline: "Our Answer Engine Optimization (AEO) Architecture",
    approachPoints: [
      "We identify the high-volume conversational questions (Who, What, Where, How, Cost) asked by real commercial buyers.",
      "We format direct, 40-to-60-word definitive answer paragraphs immediately following clear question headings.",
      "We inject valid JSON-LD FAQPage, HowTo, and Speakable schema markup to provide structured answers directly to search spiders.",
      "We build authoritative comparison tables and bulleted step-by-step procedures that answer engines extract natively.",
    ],
    features: [
      {
        title: "Conversational Question Intent Mapping",
        desc: "Mine real-world customer queries from People Also Ask, AnswerThePublic, and voice search telemetry to identify exact search questions.",
      },
      {
        title: "Concise 45-Word Answer Block Structuring",
        desc: "Engineer razor-sharp, objective answer paragraphs immediately below question headers designed specifically for Featured Snippet capture.",
      },
      {
        title: "JSON-LD FAQPage & Speakable Schema Injection",
        desc: "Embed valid schema that explicitly instructs Google and voice assistants which text blocks are official answers suitable for audio playback.",
      },
      {
        title: "Step-by-Step Procedural Formatting",
        desc: "Format complex technical workflows into numbered, semantic step lists that answer engines can read sequentially without confusion.",
      },
      {
        title: "Comparative Data Matrix Tables",
        desc: "Build structured HTML comparison tables that answer engines quote when users ask 'What is the difference between X and Y?'.",
      },
      {
        title: "Voice Search Telemetry & Snippet Monitoring",
        desc: "Continuously track your Position Zero featured snippet captures and voice search visibility across target commercial terms.",
      },
    ],
    deliverables: [
      "Quarterly AEO Query Opportunity Map cataloging high-intent conversational questions",
      "Full suite of optimized Question & Answer modules integrated across key website pages",
      "Complete JSON-LD FAQPage and Speakable schema code validated in Google Rich Results Test",
      "Featured Snippet capture tracking dashboard measuring Position 0 impressions",
      "Monthly voice search and direct citation performance analysis",
    ],
    techStack: ["Google Search Console", "AnswerThePublic", "Schema FAQPage Validator", "Perplexity AI API", "Semrush Featured Snippets"],
    processSteps: [
      { step: "01", title: "Conversational Query Discovery", desc: "Cataloging all natural language questions your target buyers ask during research." },
      { step: "02", title: "Answer Block Engineering", desc: "Drafting concise, authoritative 45-word direct answer paragraphs and step lists." },
      { step: "03", title: "Structured Schema Ingestion", desc: "Injecting FAQPage and Speakable JSON-LD markup directly into the page header." },
      { step: "04", title: "Position Zero Tracking & Refinement", desc: "Monitoring snippet captures in Google and refining copy to hold top answer positions." },
    ],
    faqs: [
      {
        q: "What is Answer Engine Optimization (AEO)?",
        a: "Answer Engine Optimization (AEO) is the practice of designing and structuring your website content so that AI engines, voice assistants (Siri, Google Assistant), and Google Featured Snippets select your company's text as the single, authoritative direct answer to a user's question.",
      },
      {
        q: "How does AEO differ from traditional SEO?",
        a: "Traditional SEO aims to get your website ranked anywhere on page 1 of search results. AEO aims specifically for 'Position Zero'—the featured answer box at the very top of the page—or to be the single answer read aloud by a voice assistant.",
      },
      {
        q: "Can any website win Featured Snippets and Answer Boxes?",
        a: "Yes! Even smaller domains can outrank massive competitors for Featured Snippets if their content provides a clearer, more direct, and better-structured answer formatted to Google's snippet standards.",
      },
    ],
  },

  geo: {
    slug: "geo",
    parentSlug: "ai-seo-search",
    parentName: "AI SEO & Search",
    parentHref: "/services/ai-seo-search",
    title: "Generative Engine Optimization (GEO) for ChatGPT & Perplexity",
    eyebrow: "AI KNOWLEDGE GRAPH CITATIONS",
    badge: "LLM Citation Architecture",
    heroHeadline: "Ensure ChatGPT, Perplexity & Claude Recommend Your Brand to Enterprise Buyers",
    heroSubcopy:
      "Enterprise decision-makers are no longer just searching Google—they are prompting ChatGPT, Perplexity AI, and Claude to recommend the top software firms, marketing agencies, and cloud partners. We optimize your digital footprint for Large Language Models (LLMs), ensuring your company is cited and recommended in AI-synthesized responses.",
    heroImage: "https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&w=1600&q=85",
    priceNote: "From $750 / month Retainer",
    deliveryTimeline: "Ongoing Monthly Sprints",
    metrics: [
      { value: "Perplexity", label: "Source Citations", desc: "Rank as a primary hyperlinked source in Perplexity answers" },
      { value: "ChatGPT", label: "Brand Recommendation", desc: "Recommended when users prompt for top industry providers" },
      { value: "Vector", label: "Semantic Embeddings", desc: "Optimized for LLM retrieval-augmented generation (RAG)" },
      { value: "Wikidata", label: "Entity Authority", desc: "Grounding your brand in global authoritative knowledge graphs" },
    ],
    challengeHeadline: "The Blind Spot of Traditional Agencies in the AI Era",
    challengePoints: [
      "Traditional SEO strategies completely fail to optimize for how AI models retrieve, synthesize, and cite information.",
      "If your brand lacks clear entity definitions across trusted digital knowledge sources, LLMs will hallucinate or recommend competitors instead.",
      "AI models prefer highly factual, citation-dense content over subjective corporate marketing buzzwords.",
      "As AI search engines gain market share, companies that rely solely on 10 blue Google links will watch their pipeline shrink.",
    ],
    approachHeadline: "Our Generative Engine Optimization (GEO) Framework",
    approachPoints: [
      "We ground your corporate entity in recognized knowledge bases (Wikidata, Crunchbase, official registries) that LLMs train upon.",
      "We restructure your website content into authoritative, fact-dense formats optimized for Retrieval-Augmented Generation (RAG).",
      "We optimize for multi-source digital PR citations: getting your firm featured in industry rankings and third-party benchmark reports.",
      "Continuous prompt benchmarking: testing hundreds of AI search prompts across Perplexity, ChatGPT Search, and Gemini to track citations.",
    ],
    features: [
      {
        title: "LLM Semantic Entity Grounding",
        desc: "Build verified entity connections across Wikidata, Google Knowledge Graph, and corporate registries so LLMs recognize your firm as an authority.",
      },
      {
        title: "Retrieval-Augmented Generation (RAG) Formatting",
        desc: "Structure your text into modular chunks with clear headers, statistics, and verifiable claims that AI scrapers can parse and quote effortlessly.",
      },
      {
        title: "Perplexity AI Source Citation Architecture",
        desc: "Optimize your technical articles to appear as the primary footnoted citation links in Perplexity AI research answers.",
      },
      {
        title: "Multi-Platform AI Prompt Benchmarking",
        desc: "We run monthly prompt simulations across ChatGPT, Claude, Perplexity, and Gemini to track how often your brand is recommended.",
      },
      {
        title: "Digital PR & Co-Occurrence Optimization",
        desc: "Secure strategic mentions in third-party industry listicles and publications that LLMs crawl to verify vendor credibility.",
      },
      {
        title: "AI Knowledge Graph Disambiguation",
        desc: "Ensure AI models have zero ambiguity regarding your exact services, headquarters location, leadership team, and specialties.",
      },
    ],
    deliverables: [
      "Comprehensive Generative Engine Optimization (GEO) Audit and AI Visibility Baseline",
      "Entity structuring and submission to recognized digital knowledge graphs (Wikidata/Crunchbase)",
      "Suite of RAG-optimized authority articles with verified citations and structured data",
      "Monthly AI Citation Scorecard tracking brand mentions across ChatGPT, Perplexity, and Gemini",
      "Competitive AI share-of-voice report comparing your recommendations against top rivals",
    ],
    techStack: ["Perplexity API", "OpenAI GPT-4o", "Wikidata SPARQL", "Google Knowledge Graph API", "Claude 3.5 Sonnet", "Semrush"],
    processSteps: [
      { step: "01", title: "AI Brand Mention & Knowledge Graph Audit", desc: "Auditing how major LLMs currently describe and recommend your company." },
      { step: "02", title: "Entity Verification & Disambiguation", desc: "Establishing structured schema and knowledge graph entries across trusted nodes." },
      { step: "03", title: "RAG Content Architecture Overhaul", desc: "Re-engineering service pages into citation-dense, factual formats favored by AI." },
      { step: "04", title: "Prompt Testing & Ongoing Citation Growth", desc: "Continuously monitoring AI recommendations and optimizing for market dominance." },
    ],
    faqs: [
      {
        q: "What is Generative Engine Optimization (GEO)?",
        a: "Generative Engine Optimization (GEO) is the next evolution of search marketing. It focuses on optimizing a brand's online footprint so that generative AI platforms—like ChatGPT Search, Perplexity AI, Claude, and Google AI Overviews—recommend and cite your business when users ask for service recommendations.",
      },
      {
        q: "How does ChatGPT decide which companies to recommend?",
        a: "ChatGPT evaluates semantic embeddings across trusted web sources, digital PR mentions, Wikipedia/Wikidata entities, customer review sentiment, and structured schema data. Brands with strong, verified entity authority across multiple independent sources are recommended most frequently.",
      },
      {
        q: "Can GEO replace traditional SEO?",
        a: "GEO complements and builds upon traditional SEO. While Google search remains massive, AI-assisted search is growing at over 300% annually. Optimizing for both ensures your company captures traffic regardless of whether a buyer uses Google or ChatGPT.",
      },
    ],
  },

  "ai-search": {
    slug: "ai-search",
    parentSlug: "ai-seo-search",
    parentName: "AI SEO & Search",
    parentHref: "/services/ai-seo-search",
    title: "AI Search Engine Optimization & LLM Brand Citation Strategy",
    eyebrow: "AI-FIRST DISCOVERY ARCHITECTURE",
    badge: "AI Search Optimization",
    heroHeadline: "Future-Proof Your Inbound Pipeline for the Era of AI-Driven Search",
    heroSubcopy:
      "Search is experiencing its biggest transformation in 25 years. With Google AI Overviews, Perplexity AI, and generative search engines answering queries directly, websites built on old SEO tactics are losing visibility. We architect your digital presence specifically for AI search algorithms, ensuring sustained market leadership.",
    heroImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1600&q=85",
    priceNote: "From $750 / month Retainer",
    deliveryTimeline: "Ongoing Monthly Sprints",
    metrics: [
      { value: "AI Overviews", label: "Google SGE Presence", desc: "Featured in Google's top AI-synthesized answer cards" },
      { value: "Semantic", label: "Information Density", desc: "High factual depth prioritized by modern search crawlers" },
      { value: "Future-Proof", label: "Algorithm Resilience", desc: "Built to withstand core algorithmic AI updates" },
      { value: "Omni-AI", label: "Multi-Model Reach", desc: "Optimized across Google, OpenAI, Anthropic, and Perplexity" },
    ],
    challengeHeadline: "Why Traditional SEO Rankings No Longer Guarantee Clicks",
    challengePoints: [
      "Google AI Overviews push traditional #1 organic links below the fold on mobile screens, stealing over 30% of click traffic.",
      "AI models synthesize answers from multiple sources, favoring websites with high information density and verifiable claims.",
      "Thin, superficial articles written for old search engines get completely ignored by modern generative parsers.",
      "Failing to track how your brand is represented in AI responses leaves your executive team blind to emerging competitors.",
    ],
    approachHeadline: "Our AI Search Optimization Methodology",
    approachPoints: [
      "We optimize your core content around high-density factual information: proprietary data, clear methodologies, and authoritative proof.",
      "We structure content so that Google AI Overviews extracts your company as a primary source for key commercial queries.",
      "We implement comprehensive schema entity mapping connecting your brand to industry certifications, awards, and locations.",
      "We monitor synthetic AI search share-of-voice to ensure your brand maintains top visibility as search behavior evolves.",
    ],
    features: [
      {
        title: "Google AI Overview (SGE) Placement Strategy",
        desc: "Format content blocks specifically to be extracted and featured inside Google's prominent AI-generated answer summaries.",
      },
      {
        title: "Information-Dense Content Architecture",
        desc: "Replace fluff with hard data points, verifiable case studies, step-by-step methodologies, and expert technical insights.",
      },
      {
        title: "Multi-Model Semantic Entity Alignment",
        desc: "Ensure that Google Gemini, OpenAI GPT-4o, and Anthropic Claude consistently recognize and categorize your business accurately.",
      },
      {
        title: "Conversational Search Query Clustering",
        desc: "Cluster natural, conversational search queries (e.g., 'What is the most reliable enterprise Next.js agency in 2026?') into content hubs.",
      },
      {
        title: "AI Crawler Accessibility & Bot Management",
        desc: "Configure server headers and robots.txt to welcome beneficial AI search bots (PerplexityBot, Google-Extended, GPTBot) without server overload.",
      },
      {
        title: "Competitive AI Share-of-Voice Tracking",
        desc: "Benchmark how often your brand is cited compared to legacy competitors across the world's leading generative search engines.",
      },
    ],
    deliverables: [
      "Comprehensive AI Search Readiness Audit and optimization roadmap",
      "Suite of re-engineered service pages optimized for Google AI Overviews and Perplexity",
      "Validated JSON-LD schema entity graph connecting your website to verified external data sources",
      "AI search query monitoring report tracking positions in Google AI Overviews",
      "Quarterly executive briefing on AI search trends and strategic opportunities",
    ],
    techStack: ["Google AI Overviews", "Perplexity AI", "OpenAI SearchGPT", "Schema Entity Graph", "Google Search Console API"],
    processSteps: [
      { step: "01", title: "AI Search Baseline Audit", desc: "Testing key commercial search terms to analyze current AI Overview activations." },
      { step: "02", title: "Content Density & Entity Restructuring", desc: "Enhancing content with proprietary facts, data points, and clear structured blocks." },
      { step: "03", title: "Schema Graph & External Verification", desc: "Connecting your digital footprint to trusted third-party knowledge bases." },
      { step: "04", title: "Live Tracking & AI Overview Monitoring", desc: "Tracking citations, snippet captures, and inbound organic traffic from AI engines." },
    ],
    faqs: [
      {
        q: "What are Google AI Overviews?",
        a: "Google AI Overviews (formerly Search Generative Experience / SGE) are AI-synthesized summaries that appear at the very top of Google search results for complex queries, providing direct answers with source links above standard organic results.",
      },
      {
        q: "How can our company get featured in Google AI Overviews?",
        a: "Google AI Overviews extract information from websites that demonstrate high topical authority, clear semantic formatting, factual accuracy, and structured schema markup. We re-engineer your content to match these exact extraction patterns.",
      },
      {
        q: "Will AI search reduce our overall website traffic?",
        a: "While AI search reduces casual clicks on simple informational queries (like 'what is the weather'), it dramatically increases the quality of clicks on commercial queries. Visitors who click your citation link in an AI summary are highly educated and ready to buy.",
      },
    ],
  },

  "semantic-seo": {
    slug: "semantic-seo",
    parentSlug: "ai-seo-search",
    parentName: "AI SEO & Search",
    parentHref: "/services/ai-seo-search",
    title: "Semantic SEO, Topic Clusters & Knowledge Graph Embeddings",
    eyebrow: "TOPICAL AUTHORITY ARCHITECTURE",
    badge: "Topic Cluster Mastery",
    heroHeadline: "Build Unbreakable Topical Authority With Semantic Topic Clusters",
    heroSubcopy:
      "Ranking for competitive keywords today requires proving exhaustive topical authority across your entire domain. We architect semantic topic clusters, pillar pages, and knowledge graph embeddings that prove to search engines that your company is the definitive subject matter authority in your space.",
    heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=85",
    priceNote: "From $850 / month Retainer",
    deliveryTimeline: "Ongoing Monthly Sprints",
    metrics: [
      { value: "Topic Clusters", label: "Pillar Architecture", desc: "Structured hierarchical hubs covering every facet of your sector" },
      { value: "NLP", label: "Semantic Entities", desc: "Entity-first content matching Google's Knowledge Vault" },
      { value: "100%", label: "Internal Equity Flow", desc: "Zero orphan pages and frictionless link equity distribution" },
      { value: "+240%", label: "Topical Footprint", desc: "Exponential expansion in ranking keyword variations" },
    ],
    challengeHeadline: "Why Random Keyword-Targeted Blog Posts No Longer Work",
    challengePoints: [
      "Publishing disconnected blog posts that don't relate to each other fails to build topical depth in Google's knowledge graph.",
      "Search engines easily detect keyword-stuffed articles that lack the semantic co-occurring entities of real expert analysis.",
      "Orphaned pages without clear contextual internal linking fail to receive search engine crawl budget or page authority.",
      "Competitors with structured topic clusters outrank sites with 10x more backlinks simply because of superior topical completeness.",
    ],
    approachHeadline: "Our Semantic Topic Cluster Architecture",
    approachPoints: [
      "We design a comprehensive Topical Map cataloging every core pillar topic, sub-topic, and long-tail question in your industry.",
      "Each cluster consists of an exhaustive 'Pillar Page' surrounded by specialized 'Cluster Content' that interlink contextually.",
      "We map every concept to known entities in Google's Knowledge Graph using schema `about` and `mentions` properties.",
      "Rigorous anchor text management: using natural, descriptive anchors that reinforce topical relationships without triggering spam penalties.",
    ],
    features: [
      {
        title: "Comprehensive Topical Authority Mapping",
        desc: "We build an architectural blueprint covering 100% of the concepts, entities, and questions required to establish topical supremacy.",
      },
      {
        title: "Pillar Page & Cluster Content Hubs",
        desc: "Architect definitive pillar resources supported by tightly interlinked cluster articles that pass authority back and forth seamlessly.",
      },
      {
        title: "Schema `about` & `mentions` Entity Injection",
        desc: "Explicitly declare to search engines which real-world entities, technologies, and concepts your content discusses using schema.org markup.",
      },
      {
        title: "Strict Semantic Internal Linking Silos",
        desc: "Design closed-loop internal link structures where cluster articles link up to the pillar page and sideways to relevant sibling topics.",
      },
      {
        title: "Keyword Cannibalization Audit & Consolidation",
        desc: "Identify and merge overlapping historical articles that compete against each other, consolidating ranking power into single powerhouse URLs.",
      },
      {
        title: "Knowledge Graph Integration Verification",
        desc: "Verify that Google's algorithm correctly recognizes your brand as an entity associated with your target industry topics.",
      },
    ],
    deliverables: [
      "Master Topical Authority Blueprint and Cluster Visualization Map",
      "Suite of in-depth pillar pages and supporting cluster articles published on your site",
      "Comprehensive internal linking matrix with exact descriptive anchor texts",
      "Full JSON-LD structured schema with `about` and `mentions` entity definitions",
      "Monthly topical footprint report tracking growth in total ranking keyword clusters",
    ],
    techStack: ["Ahrefs Topical Authority", "SurferSEO Content Planner", "Google Knowledge Graph Search API", "Screaming Frog", "Neo4j / Graph Visualizer"],
    processSteps: [
      { step: "01", title: "Industry Topical Map Blueprint", desc: "Cataloging all sub-topics, entities, and questions needed for full topical coverage." },
      { step: "02", title: "Content Gap & Cannibalization Audit", desc: "Auditing existing content to consolidate duplicates and identify missing cluster hubs." },
      { step: "03", title: "Pillar & Cluster Writing Sprints", desc: "Writing and publishing deep-dive pillar guides and supporting cluster resources." },
      { step: "04", title: "Semantic Silo Linking & Monitoring", desc: "Deploying bidirectional internal links and tracking entity association in Search Console." },
    ],
    faqs: [
      {
        q: "What is a topic cluster and how does it help SEO?",
        a: "A topic cluster is an SEO model where a central 'pillar' page covering a broad topic is linked to multiple specialized 'cluster' pages that explore sub-topics in detail. When structured correctly, Google recognizes your domain as a comprehensive authority on that topic, lifting rankings across every page in the cluster simultaneously.",
      },
      {
        q: "What is keyword cannibalization and how do you fix it?",
        a: "Keyword cannibalization happens when multiple pages on your website target the same or very similar search queries, confusing Google about which URL to rank and causing both to perform poorly. We solve this by consolidating overlapping pages into a single authoritative master page and setting up 301 redirects.",
      },
      {
        q: "How many articles are typically in a topic cluster?",
        a: "A standard topic cluster consists of 1 comprehensive pillar page (2,500+ words) and 5 to 10 supporting cluster articles (1,200 to 1,800 words each), depending on the complexity of the subject matter.",
      },
    ],
  },

  "programmatic-seo": {
    slug: "programmatic-seo",
    parentSlug: "ai-seo-search",
    parentName: "AI SEO & Search",
    parentHref: "/services/ai-seo-search",
    title: "Programmatic SEO Architecture & High-Scale Page Generation",
    eyebrow: "SCALE ORGANIC SEARCH EXPONENTIALLY",
    badge: "Scale 10,000+ Pages",
    heroHeadline: "Generate Thousands of High-Quality Landing Pages to Capture Long-Tail Search",
    heroSubcopy:
      "Writing thousands of localized or industry-specific landing pages by hand is cost-prohibitive. We engineer programmatic SEO architectures that generate hundreds or thousands of unique, high-value, data-driven landing pages based on structured databases—capturing massive long-tail search volume with zero duplicate content penalties.",
    heroImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1600&q=85",
    priceNote: "From $1,800 / Architecture Build",
    deliveryTimeline: "3 - 5 Weeks",
    metrics: [
      { value: "1,000s+", label: "Landing Pages", desc: "Scalable page generation powered by relational databases" },
      { value: "Long-Tail", label: "Search Domination", desc: "Targeting low-competition, high-intent specific queries" },
      { value: "0 Penalty", label: "Unique Data Points", desc: "Dynamic data sets ensuring every page offers genuine value" },
      { value: "< 0.5s", label: "Static Generation", desc: "Next.js SSG pre-rendering every page at lightning speed" },
    ],
    challengeHeadline: "Why Amateur Programmatic SEO Projects Get De-Indexed",
    challengePoints: [
      "Using simple search-and-replace templates with thin text creates low-value doorway pages that Google swiftly bans.",
      "Failing to integrate rich, unique proprietary data sets makes pages appear automated and unhelpful to real users.",
      "Poor internal linking and sitemap architectures cause search engine bots to ignore 90% of generated URLs.",
      "Slow database queries on dynamic pages crash servers when search engine spiders attempt to crawl thousands of URLs.",
    ],
    approachHeadline: "Our Enterprise Programmatic Architecture",
    approachPoints: [
      "We build robust relational databases populated with proprietary data, statistics, localized information, and custom attributes.",
      "Bespoke Next.js Static Site Generation (SSG) with Incremental Static Regeneration (ISR) pre-renders pages into static, instant-loading HTML.",
      "Each page includes dynamic unique components: localized FAQs, customized pricing calculators, regional maps, and tailored testimonials.",
      "Structured internal linking hubs (state/city indices, industry directories) guarantee 100% crawlability and indexation.",
    ],
    features: [
      {
        title: "Relational Database & Data Enrichment Pipeline",
        desc: "We clean, structure, and enrich custom data sets (locations, software integrations, job categories, prices) to power page generation.",
      },
      {
        title: "Next.js Static Site Generation (SSG & ISR)",
        desc: "Pre-render thousands of pages at build time with edge caching, ensuring every programmatic page achieves 99+ Core Web Vitals.",
      },
      {
        title: "Dynamic Content Modulation & Unique Modules",
        desc: "Every page features unique data modules, localized statistics, custom charts, and targeted FAQs to eliminate thin content risks.",
      },
      {
        title: "Automated Dynamic Schema Entity Ingestion",
        desc: "Dynamically generate custom JSON-LD schema (Service, LocalBusiness, Product) tailored specifically to each page's variables.",
      },
      {
        title: "Hierarchical Index Hubs & Sitemaps",
        desc: "Structured category breadcrumbs and segmented XML sitemaps ensuring Googlebot can discover and index every single URL efficiently.",
      },
      {
        title: "Automated Lead Routing & Conversion Hooks",
        desc: "Every generated page includes tailored call-to-action buttons and lead forms that pass the page's exact parameters into your CRM.",
      },
    ],
    deliverables: [
      "Full programmatic database architecture and enriched data pipelines",
      "Next.js template codebase with dynamic SSG/ISR page generation routes",
      "Segmented XML sitemaps submitted directly to Google Search Console and Bing",
      "Automated internal linking directory structure for seamless navigation",
      "Comprehensive performance analytics tracking indexation rates and long-tail traffic growth",
    ],
    techStack: ["Next.js 16 SSG", "Prisma ORM", "PostgreSQL", "Cloudflare Edge", "Google Search Console API", "Tailwind CSS v4"],
    processSteps: [
      { step: "01", title: "Keyword Pattern & Opportunity Discovery", desc: "Identifying high-volume programmatic keyword templates (e.g., [Service] in [City])." },
      { step: "02", title: "Database Construction & Enrichment", desc: "Gathering and verifying proprietary data points to make every page genuinely useful." },
      { step: "03", title: "Template Design & Next.js Development", desc: "Coding the modular, responsive template with dynamic schema and fast loading." },
      { step: "04", title: "Batch Staging & Staggered Indexing", desc: "Testing sample batches, verifying indexation in Search Console, and rolling out the full directory." },
    ],
    faqs: [
      {
        q: "What is programmatic SEO (pSEO)?",
        a: "Programmatic SEO is the process of using code, templates, and structured databases to create hundreds or thousands of high-quality, targeted landing pages automatically. It allows businesses to capture massive long-tail search volume (like '[Service] in [City]' or '[Software] vs [Competitor]') without writing each page manually.",
      },
      {
        q: "Will Google penalize our site for having thousands of programmatic pages?",
        a: "Not if the pages provide genuine, unique value! Google only penalizes low-quality 'doorway pages' that have no real data. Companies like TripAdvisor, Zapier, Wise, and Yelp generate over 80% of their organic traffic through programmatic SEO by providing rich, useful data on every page.",
      },
      {
        q: "How fast do programmatic pages get indexed by Google?",
        a: "With our structured internal linking hubs, dynamic sitemaps, and IndexNow API integrations, Google typically begins indexing pages within days, scaling across the full database over 4 to 8 weeks.",
      },
    ],
  },

  "content-strategy": {
    slug: "content-strategy",
    parentSlug: "ai-seo-search",
    parentName: "AI SEO & Search",
    parentHref: "/services/ai-seo-search",
    title: "AI-Augmented Editorial Content Strategy & Search Intent Mapping",
    eyebrow: "INTELLECTUAL PROPERTY & EDITORIAL PLANNING",
    badge: "Strategic Content Blueprint",
    heroHeadline: "Data-Driven Content Strategies That Align Brand Narrative With Search Demand",
    heroSubcopy:
      "Writing content without an editorial strategy is throwing money into the dark. We engineer comprehensive 6-to-12-month content blueprints combining commercial search volume data, competitor vulnerability audits, and customer buying stages to guarantee that every piece of content published generates measurable pipeline.",
    heroImage: "https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=1600&q=85",
    priceNote: "From $650 / Strategy Blueprint",
    deliveryTimeline: "2 Weeks",
    metrics: [
      { value: "6 - 12 Mo", label: "Editorial Roadmap", desc: "Fully planned publishing schedules with exact briefs and keywords" },
      { value: "Full-Funnel", label: "Buyer Journey Alignment", desc: "Top-of-funnel awareness down to bottom-of-funnel conversion" },
      { value: "100%", label: "Commercial Intent", desc: "Eliminating vanity topics that fail to generate qualified pipeline" },
      { value: "Zero Guesswork", label: "Data-Backed Topics", desc: "Prioritized by revenue potential and ranking difficulty" },
    ],
    challengeHeadline: "Why Most Corporate Editorial Calendars Produce Zero Business Revenue",
    challengePoints: [
      "Companies write about internal office announcements and generic topics that nobody on the internet is searching for.",
      "Failing to understand the buyer's journey results in an overload of introductory content with zero decision-stage comparison articles.",
      "Lack of structured content briefs forces writers to guess at word count, search intent, and required sub-topics.",
      "Publishing without promotion or internal linking leaves valuable articles buried in website archives with zero traffic.",
    ],
    approachHeadline: "Our Full-Funnel Content Architecture Framework",
    approachPoints: [
      "We map your content directly to the 3 stages of buyer readiness: Problem-Aware (TOFU), Solution-Aware (MOFU), and Vendor-Selection (BOFU).",
      "We conduct exhaustive competitor gap audits to identify high-value commercial keywords your competitors have neglected.",
      "Every topic in the roadmap includes a comprehensive brief: target search intent, required entities, primary CTA, and internal link targets.",
      "Multi-channel distribution planning: ensuring every article is repurposed into executive LinkedIn posts, email newsletters, and sales collateral.",
    ],
    features: [
      {
        title: "Full-Funnel Buyer Journey Intent Mapping",
        desc: "Balance your editorial calendar across educational awareness guides, technical comparison teardowns, and high-converting commercial landing assets.",
      },
      {
        title: "Competitor Vulnerability & Content Gap Auditing",
        desc: "Identify lucrative commercial topics where top competitors have weak or outdated content, allowing you to leapfrog their rankings quickly.",
      },
      {
        title: "Comprehensive Pre-Written Content Briefs",
        desc: "Every article comes with an exhaustive brief specifying target word count, primary/secondary keywords, required sub-headings, and specific CTA hooks.",
      },
      {
        title: "Topical Authority Cluster Blueprints",
        desc: "Organize topics into structured pillar-and-cluster groups to maximize domain authority and avoid keyword cannibalization.",
      },
      {
        title: "Multi-Channel Repurposing Workflows",
        desc: "Pre-plan how each long-form article will be diced into LinkedIn carousels, executive email newsletters, and sales pitch collateral.",
      },
      {
        title: "KPI Governance & Content Velocity Milestones",
        desc: "Establish clear publishing velocity benchmarks and organic search traffic targets to track ROI every quarter.",
      },
    ],
    deliverables: [
      "Master 6-Month Editorial Content Roadmap Spreadsheet with prioritized publication dates",
      "12 to 24 Comprehensive Content Briefs with target search intent, H2/H3 outlines, and keyword maps",
      "Competitor Content Gap Analysis identifying top immediate revenue opportunities",
      "Content Repurposing Guidelines for your marketing and social media teams",
      "Executive strategy presentation walking your stakeholders through the content growth blueprint",
    ],
    techStack: ["Ahrefs Content Gap", "Semrush Topic Research", "Notion Content System", "SurferSEO Content Planner", "Google Analytics 4"],
    processSteps: [
      { step: "01", title: "Stakeholder Discovery & Audience Modeling", desc: "Interviewing your leadership to define buyer personas, pain points, and commercial priorities." },
      { step: "02", title: "Search Volume & Competitor Gap Mining", desc: "Auditing thousands of search queries to pinpoint high-yield commercial topics." },
      { step: "03", title: "Funnel Mapping & Brief Architecture", desc: "Structuring topics across buyer stages and writing detailed editorial outlines." },
      { step: "04", title: "Strategy Handover & Publishing Governance", desc: "Delivering the complete roadmap and establishing publishing review cadences." },
    ],
    faqs: [
      {
        q: "What is included in a Content Brief?",
        a: "A content brief is a comprehensive blueprint for writers that includes: target primary and secondary keywords, search intent breakdown, recommended word count, required H2 and H3 headings, semantic entities to include, target audience persona, and the specific Call-to-Action.",
      },
      {
        q: "Can our existing in-house team write the articles based on your strategy?",
        a: "Yes! Our strategy and briefs are so detailed that your in-house team can execute them with complete confidence. Alternatively, our senior technical copywriting team can handle 100% of the writing and publication.",
      },
      {
        q: "How often should our company publish new content?",
        a: "For sustained organic growth in competitive sectors, we recommend publishing 2 to 4 high-authority, comprehensive articles per month rather than churning out low-quality daily posts.",
      },
    ],
  },

  automation: {
    slug: "automation",
    parentSlug: "ai-seo-search",
    parentName: "AI SEO & Search",
    parentHref: "/services/ai-seo-search",
    title: "SEO Workflow Automation, Rank Tracking & Anomaly Alerts",
    eyebrow: "AUTONOMOUS SEARCH INTELLIGENCE",
    badge: "Automated SEO Systems",
    heroHeadline: "Automate Repetitive SEO Workflows & Detect Ranking Drops in Real Time",
    heroSubcopy:
      "Manual SEO reporting, broken link checks, and daily rank checking waste hours of valuable executive time. We build autonomous SEO workflow automations using n8n, webhooks, and AI pipelines that monitor rankings daily, alert your developers to indexation anomalies instantly, and automate schema generation.",
    heroImage: "https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&w=1600&q=85",
    priceNote: "From $500 / month Retainer",
    deliveryTimeline: "Workflow Setup in 1 - 2 Weeks",
    metrics: [
      { value: "Real-Time", label: "Rank Anomaly Alerts", desc: "Instant Slack/WhatsApp notifications for sudden rank drops" },
      { value: "Automated", label: "IndexNow Pings", desc: "Instant notification to search engines upon content updates" },
      { value: "0 Hours", label: "Manual Reporting", desc: "Automated executive Looker Studio dashboards refreshing daily" },
      { value: "Continuous", label: "404 & Redirect Audits", desc: "Automated crawler alerts catching broken links before Google does" },
    ],
    challengeHeadline: "Why Manual SEO Management Causes Catastrophic Blind Spots",
    challengePoints: [
      "Developers deploy website updates that accidentally add 'noindex' tags, causing organic rankings to plummet for days before anyone notices.",
      "Marketing teams spend 15+ hours every month manually taking screenshots and compiling tedious PDF reports.",
      "Broken external links and redirect chains accumulate quietly, bleeding page authority and frustrating prospective clients.",
      "Slow manual notification to Google means new blog posts take weeks to be discovered and indexed.",
    ],
    approachHeadline: "Our Autonomous SEO Engineering Standard",
    approachPoints: [
      "We deploy custom n8n and Python automation pipelines that monitor site health, robots.txt changes, and Google Search Console data 24/7.",
      "Instant Slack and WhatsApp alert bots notify your technical team the moment a critical page loses indexation or drops in rank.",
      "Automated IndexNow webhooks ping search engines the millisecond a new post or page is published in your CMS.",
      "Automated Looker Studio dashboards pull real-time data from GA4, Google Search Console, and rank trackers with zero manual labor.",
    ],
    features: [
      {
        title: "24/7 Automated Rank & Traffic Anomaly Alerts",
        desc: "Custom webhook bots monitor daily keyword rankings and alert your team on Slack or WhatsApp if high-value keywords experience volatility.",
      },
      {
        title: "Automated 'Noindex' & Robots.txt Watchdogs",
        desc: "Automated scripts poll your live robots.txt and meta tags every hour to catch accidental developer staging blocks before rankings drop.",
      },
      {
        title: "Real-Time IndexNow Search Engine Pinging",
        desc: "Instantly alert Google, Bing, and Yandex whenever content is added or updated, speeding up indexation from weeks to minutes.",
      },
      {
        title: "Continuous 404 & Broken Link Scrapers",
        desc: "Automated scheduled spiders crawl your site weekly, alerting your developers to broken internal links and redirect loops.",
      },
      {
        title: "Automated Structured Schema Generation",
        desc: "Custom API pipelines that generate valid JSON-LD schema (FAQPage, Article, Service) automatically whenever new content is drafted.",
      },
      {
        title: "Self-Updating Executive Looker Dashboards",
        desc: "Beautiful, interactive client dashboards that refresh automatically, showing keyword positions, traffic growth, and conversion revenue.",
      },
    ],
    deliverables: [
      "Custom n8n / Zapier SEO automation workflows deployed on your private cloud",
      "Slack / WhatsApp / Email alert integration for critical SEO anomalies and rank drops",
      "Automated IndexNow protocol integration connected directly to your CMS webhooks",
      "Interactive, self-updating Looker Studio executive performance dashboard",
      "Complete documentation and maintenance warranty for all automated pipelines",
    ],
    techStack: ["n8n Workflow Automation", "Python / Node.js Scripts", "IndexNow API", "Google Search Console API", "Looker Studio", "Slack / WhatsApp API"],
    processSteps: [
      { step: "01", title: "Workflow Audit & Pain Point Mapping", desc: "Identifying manual, repetitive SEO tasks and dangerous monitoring blind spots." },
      { step: "02", title: "Automation Pipeline Architecture", desc: "Building custom n8n workflows connecting Search Console, crawlers, and alert channels." },
      { step: "03", title: "Webhook & CMS Event Binding", desc: "Connecting CMS publish hooks to IndexNow and automated schema generators." },
      { step: "04", title: "Testing, Threshold Calibration & Launch", desc: "Simulating anomalies to verify alert triggers and handing over the live dashboard." },
    ],
    faqs: [
      {
        q: "What is an SEO watchdog and why does our business need one?",
        a: "An SEO watchdog is an automated monitoring script that checks your website every hour for catastrophic errors—such as an accidental 'noindex' tag added during a website update, a broken robots.txt file, or a server crash. Catching these errors within an hour prevents catastrophic loss of search rankings.",
      },
      {
        q: "Can these automations run on our private servers?",
        a: "Yes! We specialize in self-hosted n8n and Node.js automation instances that run securely on your private cloud infrastructure, guaranteeing complete privacy and zero monthly third-party software fees.",
      },
      {
        q: "What happens if a keyword suddenly drops in rankings?",
        a: "Our automated system detects the drop, analyzes whether competitors changed their content or if your page had a technical issue, and sends an alert directly to your team with specific diagnostic insights.",
      },
    ],
  },
};
