import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";
import SmoothScroller from "./components/SmoothScroller";
import { AppStoreProvider } from "./store/AppStore";
import ClientInit from "./components/ClientInit";
import AdaptiveAnalytics from "./components/AdaptiveAnalytics";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const SITE_DOMAIN = "https://www.cmkca.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_DOMAIN),
  title: {
    default: "CHINNI MALLIKARJUNA AND COMPANY | Chartered Accountants – Audit, Tax & Advisory",
    template: "%s | CHINNI MALLIKARJUNA AND COMPANY",
  },
  description:
    "CHINNI MALLIKARJUNA AND COMPANY (CMK & Co.) is a leading Chartered Accountants firm in Chennai delivering expert audit, taxation, company registration, NRI advisory, and strategic financial services.",
  keywords: [
    "Chartered Accountants",
    "CA Firm Chennai",
    "CHINNI MALLIKARJUNA AND COMPANY",
    "Audit Services",
    "Tax Advisory",
    "Company Registration",
    "GST Filing",
    "NRI Taxation",
    "Income Tax Appeals",
    "CMA Reports",
    "Business Valuation",
    "Virtual CFO",
  ],
  authors: [{ name: "CHINNI MALLIKARJUNA AND COMPANY", url: SITE_DOMAIN }],
  creator: "CHINNI MALLIKARJUNA AND COMPANY",
  publisher: "CHINNI MALLIKARJUNA AND COMPANY",
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/favicon.svg",
    shortcut: "/favicon.ico",
  },
  openGraph: {
    title: "CHINNI MALLIKARJUNA AND COMPANY | Chartered Accountants – Audit, Tax & Advisory",
    description:
      "Leading Chartered Accountants firm delivering trusted audit, taxation, and corporate advisory services in Chennai, India.",
    url: SITE_DOMAIN,
    siteName: "CHINNI MALLIKARJUNA AND COMPANY",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: `${SITE_DOMAIN}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "CHINNI MALLIKARJUNA AND COMPANY - Chartered Accountants",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CHINNI MALLIKARJUNA AND COMPANY | Chartered Accountants",
    description:
      "Trusted CA firm delivering value-driven financial, audit, and tax solutions.",
    images: [`${SITE_DOMAIN}/og-image.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: SITE_DOMAIN,
  },
  other: {
    "ai-summary":
      "CHINNI MALLIKARJUNA AND COMPANY is a premier Chartered Accountants firm in Chennai providing Audit, GST, Income Tax, Company Setup, NRI Tax, and Valuation services.",
    "ai-content-type": "professional-services",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLdData = [
    {
      "@context": "https://schema.org",
      "@type": "AccountingService",
      "@id": `${SITE_DOMAIN}/#organization`,
      name: "CHINNI MALLIKARJUNA AND COMPANY",
      alternateName: "CMK & Co.",
      description:
        "Chartered Accountants firm delivering statutory audit, tax advisory, company incorporation, and financial consulting in Chennai.",
      url: SITE_DOMAIN,
      telephone: "+91 7032 163 646",
      email: "malli@cmkca.com",
      address: {
        "@type": "PostalAddress",
        streetAddress:
          "No. 10/31, G1, Ten Downing, Rajalakshmi Nagar 3rd Main Road, Velachery",
        addressLocality: "Chennai",
        addressRegion: "Tamil Nadu",
        postalCode: "600042",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: "12.9789",
        longitude: "80.2207",
      },
      openingHours: "Mo-Sa 09:00-18:00",
      areaServed: ["Chennai", "Tamil Nadu", "India", "Global NRIs"],
      priceRange: "$$",
      sameAs: [
        "https://www.cmkca.com",
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FinancialService",
      name: "CHINNI MALLIKARJUNA AND COMPANY Financial Advisory",
      url: SITE_DOMAIN,
      serviceType: [
        "Statutory Audit",
        "Tax Audit",
        "GST Compliance",
        "Company Incorporation",
        "NRI Tax Advisory",
        "CMA Reports & Bank Loans",
        "Business Valuation",
      ],
      provider: {
        "@type": "AccountingService",
        name: "CHINNI MALLIKARJUNA AND COMPANY",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "CHINNI MALLIKARJUNA AND COMPANY",
      url: SITE_DOMAIN,
      logo: `${SITE_DOMAIN}/logo.png`,
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+91 7032 163 646",
        contactType: "customer service",
        email: "malli@cmkca.com",
        availableLanguage: ["English", "Tamil", "Telugu"],
      },
    },
  ];

  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable}`}>
      <head>
        {/* Schema.org JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdData),
          }}
        />
        <meta name="theme-color" content="#0f172a" />
      </head>
      <body className={`${outfit.variable} ${inter.variable} bg-white antialiased`}>
        <ClientInit />
        <AppStoreProvider>
          <SmoothScroller>{children}</SmoothScroller>
        </AppStoreProvider>
        <AdaptiveAnalytics />
      </body>
    </html>
  );
}
