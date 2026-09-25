import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import FloatingChatbot from "@/components/common/FloatingChatbot";
import WhatsAppButton from "@/components/common/WhatsAppButton";

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

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || "https://birdhillstech.com"),
  title: {
    default: "Bird Hills Tech | Digital Marketing & Web Development Agency",
    template: "%s | Bird Hills Tech",
  },
  description:
    "Bird Hills Tech delivers Digital Marketing, AI Business Automation, Web Development, Domain & Hosting Services for smarter, scalable business growth.",
  keywords: [
    "Web Development Company in Dubai",
    "Digital Marketing Agency in Dubai",
    "AI Business Automation Dubai",
    "Domain and Hosting Services",
    "Local SEO Dubai",
    "Bird Hills Tech",
  ],
  authors: [{ name: "Bird Hills Tech" }],
  creator: "Bird Hills Tech",
  publisher: "Bird Hills Tech",
  robots: {
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
    siteName: "Bird Hills Tech",
    title: "Bird Hills Tech | Digital Marketing & Web Development Agency",
    description:
      "Bird Hills Tech delivers Digital Marketing, AI Business Automation, Web Development, Domain & Hosting Services for smarter, scalable business growth.",
    images: [
      {
        url: "/images/logo-icon.png",
        width: 512,
        height: 512,
        alt: "Bird Hills Tech",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Bird Hills Tech | Digital Marketing & Web Development Agency",
    description:
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness"],
    name: "Bird Hills Tech",
    url: "https://birdhillstech.com",
    logo: "https://birdhillstech.com/images/logo.svg",
    telephone: "+971524405785",
    email: "contact@birdhillstech.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Deira - Stone Building - 122 7th A Street - Al Baraha",
      addressLocality: "Dubai",
      addressRegion: "Dubai",
      addressCountry: "AE",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "25.2818",
      longitude: "55.3142",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    sameAs: [],
    priceRange: "$$",
    description:
      "Bird Hills Tech combines technology, creative strategy and digital marketing to build powerful digital experiences and measurable business growth.",
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
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingChatbot />
        <WhatsAppButton />
      </body>
    </html>
  );
}
