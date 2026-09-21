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
    default: "Bird Hills Tech | Technology × Creative × Growth in Dubai",
    template: "%s | Bird Hills Tech Dubai",
  },
  description:
    "Bird Hills Tech combines web development, creative design and digital marketing to build powerful digital experiences and measurable business growth in Dubai, UAE.",
  keywords: [
    "Web Development Company in Dubai",
    "Digital Marketing Agency in Dubai",
    "Website Development Dubai",
    "SEO Dubai",
    "Branding and Design Dubai",
    "AI Solutions Dubai",
    "Bird Hills Tech",
  ],
  authors: [{ name: "Bird Hills Tech" }],
  creator: "Bird Hills Tech",
  publisher: "Bird Hills Tech",
  openGraph: {
    type: "website",
    locale: "en_AE",
    url: "https://birdhillstech.com",
    siteName: "Bird Hills Tech",
    title: "Bird Hills Tech | Your Digital Growth Partner in Dubai",
    description:
      "We combine web development, creative design and digital marketing to build powerful digital experiences and measurable business growth in Dubai.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=85",
        width: 1200,
        height: 630,
        alt: "Bird Hills Tech Dubai",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bird Hills Tech | Technology × Creative × Growth in Dubai",
    description:
      "Enterprise web development, corporate branding and performance marketing partner in Dubai, UAE.",
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
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
