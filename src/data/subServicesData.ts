// Master Sub-Services Content & Data Repository
// Contains detailed, human-written content for all 74 menu sub-services
// Configured for Global Enterprise (birdhillstech.com)

export interface SubServiceDetail {
  slug: string;
  parentSlug: string;
  parentName: string;
  parentHref: string;
  title: string;
  eyebrow: string;
  badge: string;
  heroHeadline: string;
  heroSubcopy: string;
  heroImage: string;
  priceNote: string;
  deliveryTimeline: string;
  metrics: { value: string; label: string; desc: string }[];
  challengeHeadline: string;
  challengePoints: string[];
  approachHeadline: string;
  approachPoints: string[];
  features: { title: string; desc: string }[];
  deliverables: string[];
  techStack: string[];
  processSteps: { step: string; title: string; desc: string }[];
  faqs: { q: string; a: string }[];
}

export const HOSTING_SUB_SERVICES: Record<string, SubServiceDetail> = {
  email: {
    slug: "email",
    parentSlug: "hosting",
    parentName: "Domain & Hosting",
    parentHref: "/hosting",
    title: "Corporate Business Email & Exchange Hosting",
    eyebrow: "PROFESSIONAL BUSINESS INBOXES",
    badge: "99.99% Deliverability",
    heroHeadline: "Enterprise Business Email With Guaranteed Deliverability & Zero Spam",
    heroSubcopy:
      "Stop your mission-critical client communications from landing in spam folders. We deploy enterprise-grade business email infrastructure featuring dedicated IP reputations, full SPF/DKIM/DMARC cryptographic validation, and multi-layer antivirus shielding.",
    heroImage: "/images/generated/sub_domain_dns.jpg",
    priceNote: "From $3.50 / mailbox / month",
    deliveryTimeline: "Same-Day Setup",
    metrics: [
      { value: "99.99%", label: "Uptime SLA", desc: "Redundant cluster mail routing across distributed nodes" },
      { value: "100%", label: "DMARC/SPF/DKIM", desc: "Authenticated cryptographic email delivery" },
      { value: "0% Loss", label: "Zero-Downtime Migration", desc: "Seamless transfer from Google Workspace or Microsoft 365" },
      { value: "256-Bit", label: "TLS Encryption", desc: "Full end-to-end encryption in transit and at rest" },
    ],
    challengeHeadline: "Why Cheap Shared Hosting Email Cripples Business Credibility",
    challengePoints: [
      "Shared mail servers often get blacklisted because of neighboring bad actors, causing legitimate invoices and proposals to bounce.",
      "Missing or misconfigured SPF, DKIM, and DMARC records trigger automatic spam filtering in corporate Outlook and Gmail inboxes.",
      "Generic email providers lack responsive emergency support when an executive mailbox is locked or delayed.",
      "Cumbersome migration risks lost customer threads, unread invoices, and broken calendar synchronization.",
    ],
    approachHeadline: "How Bird Hills Tech Architects Hardened Mail Infrastructure",
    approachPoints: [
      "We configure isolated mail relays with strict reputation monitoring to guarantee inbox landing rates.",
      "Complete DNS records management, generating custom 2048-bit DKIM private keys and strict DMARC p=quarantine policies.",
      "White-glove mailbox migration copying all existing folders, archives, and calendars with zero missing emails.",
      "Multi-device sync via IMAP/ActiveSync for iOS, Android, macOS Mail, and Microsoft Outlook.",
    ],
    features: [
      {
        title: "Dedicated Clean IP Reputation",
        desc: "Outbound communications route through clean corporate relays protected against blacklists and reputation degradation.",
      },
      {
        title: "Advanced Anti-Spam & AI Threat Defense",
        desc: "Real-time heuristics detect spoofing attempts, malicious attachments, and phishing attacks before reaching your employees.",
      },
      {
        title: "Generous Mailbox Quotas & Archiving",
        desc: "High-capacity storage per account with automated cloud archiving, attachment compression, and legal discovery retention.",
      },
      {
        title: "Seamless Calendar & Contacts Sync",
        desc: "Native CalDAV and CardDAV synchronization keeps your meetings, reminders, and corporate directories synced across all devices.",
      },
      {
        title: "Webmail & Custom App Access",
        desc: "Access your email anywhere via modern, responsive webmail or connect directly to Microsoft 365, Thunderbird, or Apple Mail.",
      },
      {
        title: "24/7 Priority Mailbox Support",
        desc: "Direct access to senior mail administrators for rapid MX reconfiguration, password resets, and audit logs.",
      },
    ],
    deliverables: [
      "Fully configured domain mailboxes with custom aliases (sales@, info@, billing@)",
      "Cryptographic SPF, DKIM, and DMARC DNS validation and reports",
      "Step-by-step setup guides for iPhone, Android, and Outlook",
      "Automated daily cloud backup of all mailboxes and folders",
      "Emergency recovery protocol and administrator credentials",
    ],
    techStack: ["SpamAssassin", "OpenDKIM", "DMARC Policy Engine", "Cloudflare DNS", "TLS 1.3", "Roundcube / ActiveSync"],
    processSteps: [
      { step: "01", title: "Domain & DNS Audit", desc: "We inspect your current MX and DNS records to plan a frictionless handover." },
      { step: "02", title: "Mailbox Provisioning", desc: "Setting up user inboxes, security policies, storage quotas, and custom aliases." },
      { step: "03", title: "Data Migration", desc: "Cloning legacy messages, subfolders, and attachments into the new server." },
      { step: "04", title: "DNS Cutover & Verification", desc: "Updating MX routing with zero downtime and verifying inbox deliverability." },
    ],
    faqs: [
      {
        q: "Can I migrate my existing emails from Google Workspace or Microsoft 365?",
        a: "Yes. Our engineers handle full IMAP mailbox synchronization, copying every historical message, sent item, and folder structure without any downtime.",
      },
      {
        q: "Will our domain email work on iPhones and Outlook?",
        a: "Absolutely. We support standard IMAP, POP3, and SMTP protocols with SSL/TLS encryption, and provide auto-configuration profiles for iOS, Android, and Outlook.",
      },
      {
        q: "How does DMARC protect my brand from phishing?",
        a: "DMARC instructs receiving mail servers (like Google and Microsoft) to verify that incoming emails claiming to be from your domain genuinely originated from our authenticated servers, rejecting impersonators.",
      },
    ],
  },
  security: {
    slug: "security",
    parentSlug: "hosting",
    parentName: "Domain & Hosting",
    parentHref: "/hosting",
    title: "SSL & Enterprise Website Cybersecurity",
    eyebrow: "INFRASTRUCTURE HARDENING",
    badge: "Bank-Grade Encryption",
    heroHeadline: "Fortify Your Web Assets With Multi-Layer SSL & Active Threat Shielding",
    heroSubcopy:
      "Protect your customer data, defend against automated bot assaults, and eliminate 'Not Secure' browser warnings. We engineer comprehensive web application firewalls (WAF), automated Wildcard TLS 1.3 certificates, and real-time vulnerability monitoring.",
    heroImage: "/images/generated/sub_hosting_security.jpg",
    priceNote: "Free with managed hosting / Custom enterprise plans available",
    deliveryTimeline: "Instant Implementation",
    metrics: [
      { value: "TLS 1.3", label: "Encryption Standard", desc: "State-of-the-art cipher suites with zero legacy vulnerabilities" },
      { value: "sub-10ms", label: "WAF Processing", desc: "High-speed edge traffic filtering with zero noticeable latency" },
      { value: "Layer 3/4/7", label: "DDoS Mitigation", desc: "Shielding against volumetric and application-layer floods" },
      { value: "A+ Rating", label: "SSL Labs Score", desc: "Strict HSTS and secure cipher suite enforcement" },
    ],
    challengeHeadline: "The Escalating Cyber Threats Facing Modern Businesses",
    challengePoints: [
      "Expired SSL certificates trigger alarming browser warnings that cause over 80% of prospective clients to immediately leave your website.",
      "Malicious bots constantly scrape pricing, attempt credential stuffing on login forms, and inject malicious scripts into forms.",
      "Volumetric DDoS attacks overwhelm unshielded web servers, causing catastrophic offline downtime during peak campaigns.",
      "Unpatched CMS dependencies leave backdoors open for stealthy defacement and search engine blacklisting.",
    ],
    approachHeadline: "Our Multi-Tier Defense Architecture",
    approachPoints: [
      "Automated SSL renewal cycles via Let's Encrypt and Sectigo Commercial Trust, guaranteeing your certificates never lapse.",
      "Web Application Firewall (WAF) rule sets tuned to block OWASP Top 10 vulnerabilities (SQLi, XSS, CSRF).",
      "Strict Transport Security (HSTS) with preloading so all HTTP requests are cryptographically upgraded before hitting the network.",
      "Continuous edge monitoring and real-time IP reputation filtering that detects and mitigates threats in milliseconds.",
    ],
    features: [
      {
        title: "Automated Wildcard & EV SSL Certificates",
        desc: "Full encryption across your apex domain, all subdomains (*.yourdomain.com), and staging environments with auto-renewal.",
      },
      {
        title: "Managed Web Application Firewall (WAF)",
        desc: "Deep packet inspection blocks malicious traffic patterns, SQL injection, cross-site scripting, and zero-day exploits.",
      },
      {
        title: "DDoS Protection & Volumetric Absorbers",
        desc: "Multi-terabit Anycast network scrubbing absorbs distributed denial-of-service traffic before it ever touches your hosting server.",
      },
      {
        title: "Zero-Trust Bot Management",
        desc: "Distinguish between beneficial search crawlers and hostile scrapers, blocking automated credential abuse without irritating CAPTCHAs.",
      },
      {
        title: "Automated Malware Scanning & Auto-Patching",
        desc: "Daily file integrity monitoring scans your codebase for unauthorized alterations, webshells, and backdoors with instant alerts.",
      },
      {
        title: "HTTP/3 & Post-Quantum Encryption Readiness",
        desc: "Next-generation QUIC and HTTP/3 transport protocols delivering both maximum transmission velocity and modern crypto security.",
      },
    ],
    deliverables: [
      "A+ Rated SSL Labs Certificate deployment with HSTS header integration",
      "Active Cloudflare / Edge WAF rule set configuration and custom challenge policies",
      "Automated daily malware scan report and instant containment alerts",
      "DDoS mitigation routing with SLA uptime guarantees",
      "Security compliance verification badge for customer trust",
    ],
    techStack: ["Cloudflare WAF", "Let's Encrypt", "TLS 1.3", "ModSecurity", "Imunify360", "HSTS Preload Engine"],
    processSteps: [
      { step: "01", title: "Security Vulnerability Scan", desc: "Auditing your current server headers, open ports, and cipher suite hygiene." },
      { step: "02", title: "Certificate Issuance & Binding", desc: "Generating private keys, installing certificates, and enforcing HTTPS redirect." },
      { step: "03", title: "WAF & Bot Policy Hardening", desc: "Configuring firewall thresholds tailored to your web application's traffic profile." },
      { step: "04", title: "Live Penetration Verification", desc: "Simulating attacks to confirm that all security controls respond correctly." },
    ],
    faqs: [
      {
        q: "What is the difference between standard and Wildcard SSL?",
        a: "A standard SSL certificate secures only a single domain (e.g. yourdomain.com). A Wildcard SSL certificate covers an unlimited number of subdomains (*.yourdomain.com, api.yourdomain.com, app.yourdomain.com) under one unified cryptographic seal.",
      },
      {
        q: "Will an enterprise firewall slow down my website speed?",
        a: "No. Our enterprise WAF runs on global Anycast edge nodes located close to your visitors. Static assets are cached at the edge, actually speeding up page delivery by 40%–60% while filtering malicious traffic simultaneously.",
      },
      {
        q: "How quickly can you resolve an active malware or defacement incident?",
        a: "Our emergency security engineering team can isolate, sanitize, and restore compromised web applications within 2 to 4 hours under our rapid incident recovery protocol.",
      },
    ],
  },
  migration: {
    slug: "migration",
    parentSlug: "hosting",
    parentName: "Domain & Hosting",
    parentHref: "/hosting",
    title: "Zero-Downtime Website & Server Migration",
    eyebrow: "SEAMLESS INFRASTRUCTURE TRANSFER",
    badge: "100% Zero Downtime",
    heroHeadline: "Seamless Website & Database Migration Handled By Senior DevOps Engineers",
    heroSubcopy:
      "Tired of sluggish hosting, frequent server crashes, and subpar agency support? We migrate your corporate websites, complex eCommerce stores, MySQL/PostgreSQL databases, and business emails with zero data loss and guaranteed zero downtime.",
    heroImage: "/images/generated/sub_hosting_migration.jpg",
    priceNote: "Free migration included with all hosting packages",
    deliveryTimeline: "24 - 48 Hours",
    metrics: [
      { value: "0 Minutes", label: "Downtime Guarantee", desc: "Parallel server staging ensures your site never goes offline" },
      { value: "100%", label: "Data Integrity", desc: "Byte-for-byte checksum verification across all databases and files" },
      { value: "All Mail", label: "Mailbox Retention", desc: "Every folder, read status, and message copied without gap" },
      { value: "Post-Audit", label: "Full QA Review", desc: "Forms, payments, and tracking codes verified prior to DNS switch" },
    ],
    challengeHeadline: "The Common Disasters of Amateur Website Migrations",
    challengePoints: [
      "Inexperienced developers change nameservers prematurely, resulting in hours or days of 404 errors and lost customer revenue.",
      "Database encoding mismatches corrupt Arabic typography, emojis, and special characters across your product catalog.",
      "Email cutovers executed without synchronization cause incoming customer inquiries to vanish into the void.",
      "Broken file permissions and hardcoded URLs trigger silent failures in contact forms and payment gateways.",
    ],
    approachHeadline: "The Bird Hills Tech Zero-Downtime Migration Protocol",
    approachPoints: [
      "We build and test a complete replica of your application on our high-speed NVMe servers under a private staging URL.",
      "We lower your DNS TTLs in advance to ensure instant global propagation when we trigger the cutover.",
      "A final differential database and mailbox sync runs immediately before the DNS switch to capture any last-minute transactions.",
      "Post-migration performance and security hardening is applied immediately to unlock immediate speed gains.",
    ],
    features: [
      {
        title: "Full Codebase & Asset Duplication",
        desc: "All source files, media uploads, and framework dependencies are synchronized using secure high-speed rsync channels.",
      },
      {
        title: "Relational Database Migration & Checksum",
        desc: "MySQL, MariaDB, and PostgreSQL databases are dumped, transferred, and validated with complete schema integrity.",
      },
      {
        title: "Live Staging Preview & Client Approval",
        desc: "Test every page, form, and checkout flow on a dedicated preview URL before making any public routing modifications.",
      },
      {
        title: "Continuous Email Synchronization",
        desc: "IMAP sync ensures that every email received during the transfer window is preserved and delivered to your inbox.",
      },
      {
        title: "SSL & DNS Orchestration",
        desc: "SSL certificates are pre-provisioned on the new server so that not a single visitor ever encounters a security warning.",
      },
      {
        title: "Immediate Performance Optimization",
        desc: "Once migrated, we optimize database indexes, configure OPcache, and enable Redis object caching for instant speed boosts.",
      },
    ],
    deliverables: [
      "Complete site backup archive provided for your permanent records",
      "Private staging URL for testing prior to live deployment",
      "Full migration execution report detailing all transferred assets",
      "SSL certificate pre-validation and DNS verification check",
      "30-day post-migration warranty with zero-cost bug resolution",
    ],
    techStack: ["rsync / SSH", "MySQL Dump", "Redis Cache", "PHP-FPM / OPcache", "Cloudflare DNS", "SSL Pre-provisioning"],
    processSteps: [
      { step: "01", title: "Discovery & Credentials Handover", desc: "We review your current host, application architecture, and server dependencies." },
      { step: "02", title: "Staging Replica Deployment", desc: "Cloning files, databases, and mailboxes onto our NVMe environment for testing." },
      { step: "03", title: "QA Testing & Client Sign-Off", desc: "You review and verify the fully functional website on our staging domain." },
      { step: "04", title: "Delta Sync & Seamless Cutover", desc: "Final data sync, DNS switch, and immediate SSL activation with zero downtime." },
    ],
    faqs: [
      {
        q: "Will my website go down while you are moving it?",
        a: "No. Your website remains 100% active on your old host until the new server is completely tested and ready. The DNS switch takes seconds, ensuring uninterrupted visitor access.",
      },
      {
        q: "What credentials do you need to begin the migration?",
        a: "We typically only require your current hosting control panel login (cPanel, Plesk, or SSH) and DNS access. Our engineers handle everything else.",
      },
      {
        q: "Can you migrate websites built on WordPress, Shopify, or custom code?",
        a: "Yes. We migrate WordPress, WooCommerce, custom Next.js/Node.js web applications, Laravel, and headless platforms with equal proficiency.",
      },
    ],
  },
  maintenance: {
    slug: "maintenance",
    parentSlug: "hosting",
    parentName: "Domain & Hosting",
    parentHref: "/hosting",
    title: "Managed Cloud Backup & Proactive Server Maintenance",
    eyebrow: "CONTINUOUS UPTIME & DISASTER RECOVERY",
    badge: "24/7 SLA Monitoring",
    heroHeadline: "Proactive Cloud Maintenance, Automated Off-Site Backups & 24/7 Monitoring",
    heroSubcopy:
      "Your website is your primary business storefront. Don't wait for a hardware crash, corrupted database update, or security incident to realize you need professional DevOps support. We maintain, back up, and optimize your systems around the clock.",
    heroImage: "/images/generated/sub_hosting_maintenance.jpg",
    priceNote: "From $50 / month / server",
    deliveryTimeline: "Continuous Monthly Retainer",
    metrics: [
      { value: "Hourly/Daily", label: "Automated Snapshots", desc: "Encrypted multi-datacenter off-site backups" },
      { value: "< 15 Mins", label: "Recovery Time (RTO)", desc: "Rapid point-in-time rollbacks if data is corrupted" },
      { value: "60-Second", label: "Uptime Health Checks", desc: "Synthetic latency and HTTP status monitoring" },
      { value: "100%", label: "Patch Compliance", desc: "Scheduled zero-downtime security and kernel patching" },
    ],
    challengeHeadline: "The Catastrophic Cost of Unmaintained Web Infrastructure",
    challengePoints: [
      "Unmanaged servers suffer from accumulated log bloat, fragmented database tables, and memory leaks that degrade speed over time.",
      "Backups stored on the same physical server as the website are completely useless if the drive fails or is ransomware-encrypted.",
      "Outdated software libraries leave known Common Vulnerabilities and Exposures (CVEs) unpatched for months.",
      "When unexpected outages occur over the weekend, businesses lose hours of sales before anyone even notices.",
    ],
    approachHeadline: "Our Proactive System Administration Service",
    approachPoints: [
      "We keep automated, immutable off-site snapshots stored across geo-redundant storage with 30-day retention policies.",
      "Continuous health monitoring polls your endpoints every minute from multiple global nodes, alerting our team instantly.",
      "Staged software updates test compatibility in isolated staging containers before applying them to your production systems.",
      "Regular database defragmentation, query optimization, and cache clearing keep load times blisteringly fast.",
    ],
    features: [
      {
        title: "Geo-Redundant Off-Site Backups",
        desc: "Automated incremental snapshots encrypted with AES-256 and stored in an independent secondary data center facility.",
      },
      {
        title: "1-Click Point-in-Time Disaster Recovery",
        desc: "Accidentally broke a plugin or corrupted customer records? Roll back to any historical snapshot in under 15 minutes.",
      },
      {
        title: "24/7/365 Synthetic Uptime Monitoring",
        desc: "Automated multi-region monitoring checks HTTP response codes, SSL validity, and page rendering every 60 seconds.",
      },
      {
        title: "Operating System & Security Patching",
        desc: "System engineers proactively patch Linux kernels, web servers (Nginx/LiteSpeed), and database engines without downtime.",
      },
      {
        title: "Database Optimization & Cache Tuning",
        desc: "Routine cleanup of transient data, query slow-log analysis, and memory cache tuning for sustained sub-second performance.",
      },
      {
        title: "Dedicated Emergency Developer Hours",
        desc: "Every maintenance tier includes guaranteed engineering hours for bug fixing, feature tweaks, and technical guidance.",
      },
    ],
    deliverables: [
      "Monthly executive health and uptime report",
      "Verified backup snapshot archive with 30-day version history",
      "Real-time status dashboard link for internal stakeholders",
      "Direct Slack/WhatsApp escalation channel with senior DevOps team",
      "Quarterly technical review and infrastructure scaling plan",
    ],
    techStack: ["Borg Backup", "Zabbix / Datadog", "UptimeRobot", "Ansible Automation", "Redis", "MySQL Optimizer"],
    processSteps: [
      { step: "01", title: "Infrastructure Audit & Baseline", desc: "Documenting server specs, current backup schemes, and system resource utilization." },
      { step: "02", title: "Off-Site Backup Pipeline", desc: "Setting up automated, encrypted data replication to our secure secondary storage." },
      { step: "03", title: "Monitoring & Alerting Setup", desc: "Connecting 60-second multi-region uptime sensors and incident escalation paths." },
      { step: "04", title: "Continuous Maintenance Sprints", desc: "Executing monthly updates, database tune-ups, and disaster recovery dry-runs." },
    ],
    faqs: [
      {
        q: "Where are the backup files physically stored?",
        a: "Backups are encrypted using AES-256 and stored in a completely separate physical data center and cloud account from your live server, ensuring total disaster survivability.",
      },
      {
        q: "How fast can you restore our website if it gets hacked or deleted?",
        a: "Under our Disaster Recovery SLA, our recovery time objective (RTO) is under 15 to 30 minutes, restoring your full database, files, and configurations to the exact minute of the last clean snapshot.",
      },
      {
        q: "Do you test our backups to ensure they actually work?",
        a: "Yes. Every quarter we conduct a routine dry-run restoration on an isolated sandbox server to guarantee data integrity.",
      },
    ],
  },
};

export const DOMAINS_SUB_SERVICES: Record<string, SubServiceDetail> = {
  transfer: {
    slug: "transfer",
    parentSlug: "domains",
    parentName: "Domain & Hosting",
    parentHref: "/domains",
    title: "Zero-Downtime Domain Transfer & Portfolio Management",
    eyebrow: "DOMAIN ASSET CONSOLIDATION",
    badge: "Free 1-Year Extension",
    heroHeadline: "Consolidate, Protect & Accelerate Your Corporate Domain Portfolio",
    heroSubcopy:
      "Tired of inflated renewal fees, unresponsive registrars, and fragmented domain accounts? Transfer your corporate domain names (.com, .ae, .ai, .io, and 400+ extensions) to Bird Hills Tech with zero downtime, a free 1-year renewal extension, and centralized portfolio DNS control.",
    heroImage: "/images/generated/sub_domain_transfer.jpg",
    priceNote: "Standard registry transfer fee includes free 1-year renewal",
    deliveryTimeline: "Instant to 5 Days (TLD dependent)",
    metrics: [
      { value: "0 Seconds", label: "Downtime During Transfer", desc: "DNS and MX records remain fully active throughout" },
      { value: "+1 Year", label: "Free Registration Added", desc: "Full 12-month extension included automatically" },
      { value: "Free", label: "WHOIS Identity Privacy", desc: "Shield your personal details from spam scrapers" },
      { value: "400+", label: "Supported TLDs", desc: "From regional .ae to tech .ai, .io, and international .com" },
    ],
    challengeHeadline: "Why Corporate Domain Fragmentation Creates Severe Risk",
    challengePoints: [
      "Dispersed domain registrations across multiple legacy registrars lead to accidental expirations and lost digital brand equity.",
      "Legacy registrars hide renewal price hikes, charging double or triple the standard wholesale registration fees.",
      "Complicated transfer authorization steps, registry locks, and unhelpful support cause weeks of frustrating delays.",
      "Poor nameserver infrastructure at budget registrars introduces 100ms+ DNS resolution lag on every single web request.",
    ],
    approachHeadline: "The Bird Hills Tech Frictionless Transfer Guarantee",
    approachPoints: [
      "We mirror your current DNS zone file on our enterprise Anycast nameservers prior to initiating the transfer, guaranteeing zero downtime.",
      "We guide you through unlocking your domain and retrieving your EPP/Auth code in minutes.",
      "Every transferred domain receives a complimentary 1-year registration extension added to your remaining time.",
      "Centralized portfolio dashboard with automated renewal alerts, role-based access, and registrar lock protection.",
    ],
    features: [
      {
        title: "Free 1-Year Registration Extension",
        desc: "You never lose remaining time on your domain. Your transfer automatically adds a full 365 days of registration onto your current expiration date.",
      },
      {
        title: "Zero-Downtime DNS Mirroring",
        desc: "We replicate all your existing website, email, and verification records before initiation so your business operations continue uninterrupted.",
      },
      {
        title: "Complimentary WHOIS Privacy Protection",
        desc: "Keep your name, phone number, and physical office address shielded from domain scrapers, telemarketers, and phishing rings.",
      },
      {
        title: "Registrar Lock & Theft Prevention",
        desc: "Multi-factor authentication and registry lock prevent unauthorized transfer requests or domain hijacking attempts.",
      },
      {
        title: "Bulk Corporate Portfolio Management",
        desc: "Consolidate tens or hundreds of brand domains into a single unified dashboard with centralized invoicing and automated renewals.",
      },
      {
        title: "Dedicated DNS Concierge Support",
        desc: "Our senior DNS engineers handle all verification codes, EPP coordination, and registrar communications on your behalf.",
      },
    ],
    deliverables: [
      "Full domain transfer execution to accredited registrar tier",
      "1-year extension receipt and confirmed expiration date update",
      "Active WHOIS privacy protection enabled by default",
      "Centralized domain management portal credentials",
      "DNS record backup export in standard BIND zone format",
    ],
    techStack: ["ICANN Accredited System", "Anycast DNS", "DNSSEC Engine", "EPP Protocol", "WHOIS Shield", "Automated Renewal Gateway"],
    processSteps: [
      { step: "01", title: "Unlock & Retrieve Auth Code", desc: "Unlock your domain at your current registrar and copy the EPP/Auth authorization code." },
      { step: "02", title: "Initiate Transfer & Pre-Configure DNS", desc: "Submit your domain with us and mirror existing MX and web records to guarantee zero downtime." },
      { step: "03", title: "Registry Verification", desc: "Approve the automated confirmation email sent by the registry." },
      { step: "04", title: "Transfer Complete & +1 Year Added", desc: "Your domain is now safely housed with Bird Hills Tech with an additional year added." },
    ],
    faqs: [
      {
        q: "Will my website or email stop working during the domain transfer?",
        a: "No. The domain transfer process occurs strictly at the administrative registry level. As long as your nameservers and DNS records remain configured, your website and emails experience zero seconds of downtime.",
      },
      {
        q: "Do I lose any remaining registration time when transferring early?",
        a: "No. Any remaining registration time on your domain is fully preserved, and our transfer adds an additional full year on top of your existing expiration date.",
      },
      {
        q: "Can I transfer country-code TLDs as well as .com and .ai?",
        a: "Yes. We support direct transfers for popular regional extensions, global .com/.net/.org extensions, and modern tech extensions like .ai and .io.",
      },
    ],
  },
  dns: {
    slug: "dns",
    parentSlug: "domains",
    parentName: "Domain & Hosting",
    parentHref: "/domains",
    title: "Global Anycast DNS Management & DNSSEC Security",
    eyebrow: "HIGH-VELOCITY DOMAIN ROUTING",
    badge: "Sub-10ms Resolution",
    heroHeadline: "Global Anycast DNS Routing With Instant Propagation & DNSSEC Shielding",
    heroSubcopy:
      "Every single visitor, email, and API connection begins with a DNS lookup. Slow DNS adds hundreds of milliseconds of lag to your website. We engineer multi-region Anycast DNS infrastructure that resolves queries in under 10 milliseconds, propagates records in seconds, and protects against spoofing with cryptographic DNSSEC.",
    heroImage: "/images/generated/sub_domain_dns.jpg",
    priceNote: "Included free with all Bird Hills Tech domains and hosting",
    deliveryTimeline: "Instant Activation",
    metrics: [
      { value: "< 10ms", label: "Query Resolution", desc: "Global edge routing ensures instant domain lookups" },
      { value: "< 5 Secs", label: "Record Propagation", desc: "Instant updates without waiting 24 to 48 hours" },
      { value: "100%", label: "DNSSEC Cryptography", desc: "Eliminates DNS cache poisoning and man-in-the-middle attacks" },
      { value: "100% Uptime", label: "Anycast Redundancy", desc: "Automatic failover across 250+ global edge locations" },
    ],
    challengeHeadline: "The Hidden Bottlenecks of Legacy Domain Nameservers",
    challengePoints: [
      "Traditional unicast nameservers located on a single server introduce massive latency delays for visitors outside that immediate geographic zone.",
      "Outdated DNS propagation windows (24–48 hours) paralyze urgent marketing campaigns and critical email server reconfigurations.",
      "Unsigned DNS records leave your domain vulnerable to DNS spoofing, cache poisoning, and traffic interception.",
      "Nameserver outages at budget domain registrars take down your entire digital presence—even if your web server is fully operational.",
    ],
    approachHeadline: "Enterprise Anycast DNS Architecture",
    approachPoints: [
      "We route all DNS traffic through an enterprise Anycast mesh of 250+ global locations, answering queries from the physically nearest node.",
      "Instant record updates with 60-second TTL options, allowing rapid modifications and effortless disaster recovery cutovers.",
      "Cryptographic DNSSEC signing validates that query responses are authentic, untampered, and legitimately originating from your domain.",
      "Intuitive dashboard supporting all advanced record types: A, AAAA, CNAME, ALIAS, MX, TXT, SRV, CAA, and PTR.",
    ],
    features: [
      {
        title: "250+ Global Anycast PoP Routing",
        desc: "Your domain lookups are answered simultaneously across North America, Europe, the Middle East, and Asia with sub-10ms latency.",
      },
      {
        title: "Cryptographic DNSSEC Authentication",
        desc: "Protects your users against DNS cache poisoning, domain spoofing, and man-in-the-middle attacks with automated key rotation.",
      },
      {
        title: "Instant Global Record Propagation",
        desc: "Modify an IP address or MX record and watch it reflect across global resolvers in under 10 seconds—no more waiting for days.",
      },
      {
        title: "ALIAS & CNAME Flattening at Apex",
        desc: "Point your root apex domain (yourdomain.com) directly to cloud platforms like Vercel, AWS, or Cloudflare with zero CNAME restrictions.",
      },
      {
        title: "Automated CAA Record Security",
        desc: "Specify exactly which Certificate Authorities (like Let's Encrypt or DigiCert) are authorized to issue SSL certificates for your domain.",
      },
      {
        title: "Granular Role-Based Access Controls",
        desc: "Delegate DNS management to developers or agencies with audit logging and permission boundaries to prevent accidental deletion.",
      },
    ],
    deliverables: [
      "Full Anycast DNS configuration with custom branded nameservers (ns1/ns2)",
      "Automated DNSSEC key generation and parent registry DS record linking",
      "Complete zone file export backup (standard RFC format)",
      "Automated CAA security records preventing unauthorized SSL generation",
      "Live DNS health inspection report confirming 100% resolution integrity",
    ],
    techStack: ["Cloudflare Anycast", "DNSSEC (ECDSA P-256)", "RFC 1035 Standards", "DoH / DoT Protocols", "CAA Policy Engine", "Edns-Client-Subnet"],
    processSteps: [
      { step: "01", title: "Zone File Audit", desc: "Extracting and verifying all existing A, MX, CNAME, and TXT verification records." },
      { step: "02", title: "Anycast Provisioning", desc: "Importing records into our global Anycast cluster with optimized TTL timers." },
      { step: "03", title: "DNSSEC Cryptographic Handshake", desc: "Generating public keys and binding DS records with the top-level domain registry." },
      { step: "04", title: "Global Verification Check", desc: "Validating sub-10ms resolution across global nodes from Tokyo to London and New York." },
    ],
    faqs: [
      {
        q: "What is Anycast DNS and why does it make my website faster?",
        a: "Anycast allows multiple servers across the world to share the exact same IP address. When a visitor looks up your website, their computer connects to the geographically nearest nameserver in milliseconds, reducing initial page connection latency.",
      },
      {
        q: "What is DNSSEC and does my website need it?",
        a: "DNSSEC adds cryptographic signatures to your DNS records. It ensures that attackers cannot redirect your visitors to phishing clones by tampering with internet routing tables, and is an essential standard for banking, ecommerce, and corporate trust.",
      },
      {
        q: "How fast do DNS record changes take effect?",
        a: "On our Anycast network, DNS record changes propagate worldwide in under 5 to 10 seconds due to real-time distributed edge cache invalidation.",
      },
    ],
  },
};

export function getHostingSubService(slug: string): SubServiceDetail | undefined {
  return HOSTING_SUB_SERVICES[slug];
}

export function getAllHostingSubSlugs(): string[] {
  return Object.keys(HOSTING_SUB_SERVICES);
}

export function getDomainSubService(slug: string): SubServiceDetail | undefined {
  return DOMAINS_SUB_SERVICES[slug];
}

export function getAllDomainSubSlugs(): string[] {
  return Object.keys(DOMAINS_SUB_SERVICES);
}
