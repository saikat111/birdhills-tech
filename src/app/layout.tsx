import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import FloatingChatbot from "@/components/common/FloatingChatbot";
import WhatsAppButton from "@/components/common/WhatsAppButton";
import NavigationProgress from "@/components/common/NavigationProgress";
import { getSiteSettings } from "@/lib/settings";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSiteSettings();
  const allowCrawling = settings.google_indexing === "enabled";

  const keywordsArray = settings.site_keywords
    ? settings.site_keywords.split(",").map((k) => k.trim()).filter(Boolean)
    : [
        "Web Development Company in Dubai",
        "Digital Marketing Agency in Dubai",
        "AI Business Automation Dubai",
        "Domain and Hosting Services",
        "Local SEO Dubai",
        "Bird Hills Tech",
      ];

  return {
    metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || "https://birdhillstech.com"),
    title: {
      default: settings.site_title || "Bird Hills Tech | Digital Marketing & Web Development Agency",
      template: "%s | Bird Hills Tech",
    },
    description:
      settings.site_description ||
      "Bird Hills Tech delivers Digital Marketing, AI Business Automation, Web Development, Domain & Hosting Services for smarter, scalable business growth.",
    keywords: keywordsArray,
    authors: [{ name: settings.company_name || "Bird Hills Tech" }],
    creator: settings.company_name || "Bird Hills Tech",
    publisher: settings.company_name || "Bird Hills Tech",
    alternates: {
      canonical: "https://birdhillstech.com",
    },
    robots: allowCrawling
      ? {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
          },
        }
      : {
          index: false,
          follow: false,
          nocache: true,
          googleBot: {
            index: false,
            follow: false,
            noimageindex: true,
          },
        },
    openGraph: {
      type: "website",
      locale: "en_AE",
      url: "https://birdhillstech.com",
      siteName: settings.company_name || "Bird Hills Tech",
      title: settings.site_title || "Bird Hills Tech | Digital Marketing & Web Development Agency",
      description:
        settings.site_description ||
        "Bird Hills Tech delivers Digital Marketing, AI Business Automation, Web Development, Domain & Hosting Services for smarter, scalable business growth.",
      images: [
        {
          url: "/images/logo-icon.png",
          width: 512,
          height: 512,
          alt: settings.company_name || "Bird Hills Tech",
        },
      ],
    },
    twitter: {
      card: "summary",
      title: settings.site_title || "Bird Hills Tech | Digital Marketing & Web Development Agency",
      description:
        settings.site_description ||
        "Bird Hills Tech delivers Digital Marketing, AI Business Automation, Web Development, Domain & Hosting Services for smarter, scalable business growth.",
      images: ["/images/logo-icon.png"],
    },
    icons: {
      icon: [
        { url: "/images/logo-icon.png", sizes: "any" },
        { url: "/favicon.ico" },
      ],
      apple: "/images/logo-icon.png",
      shortcut: "/images/logo-icon.png",
    },
  };
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const settings = await getSiteSettings();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness", "ProfessionalService"],
    name: settings.company_name || "Bird Hills Tech",
    url: settings.website || "https://birdhillstech.com",
    logo: "https://birdhillstech.com/images/logo-full.png",
    image: "https://birdhillstech.com/images/logo-full.png",
    telephone: settings.phone,
    email: settings.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: settings.address || "Stone Building, 122 7th A Street, Al Baraha",
      addressLocality: "Dubai",
      addressRegion: "Dubai",
      addressCountry: "AE",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "25.2818",
      longitude: "55.3142",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "09:00",
        closes: "18:00",
      },
    ],
    sameAs: [
      settings.linkedin_url,
      settings.twitter_url,
      settings.instagram_url,
      settings.github_url,
      settings.facebook_url,
      settings.youtube_url,
    ].filter(Boolean),
    areaServed: ["United Arab Emirates", "Saudi Arabia", "Qatar", "GCC", "Global"],
    priceRange: "$$",
    description: settings.site_description,
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-white text-[#101828]">
        <NavigationProgress />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer settings={settings} />
        <FloatingChatbot settings={settings} />
        <WhatsAppButton whatsappNumber={settings.whatsapp} />
      </body>
    </html>
  );
}

