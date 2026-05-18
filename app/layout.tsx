import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";
import SmoothScroller from "./components/SmoothScroller";
import { AppStoreProvider } from "./store/AppStore";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://gmnrassociates.com"),
  title: "CHINNI MALLIKARJUNA AND COMPANY | Chartered Accountants – Audit, Tax & Advisory",
  description:
    "CHINNI MALLIKARJUNA AND COMPANY is a trusted Chartered Accountants firm in Chennai delivering quality audit, taxation, and advisory services. Strategic financial solutions for businesses.",
  keywords: [
    "Chartered Accountants",
    "CA Firm Chennai",
    "Audit Services",
    "Tax Advisory",
    "CHINNI MALLIKARJUNA AND COMPANY",
    "Financial Consulting",
    "Business Registration",
    "GST Filing",
    "Income Tax",
    "Compliance Services",
  ],
  authors: [{ name: "CHINNI MALLIKARJUNA AND COMPANY" }],
  openGraph: {
    title: "CHINNI MALLIKARJUNA AND COMPANY | Chartered Accountants – Audit, Tax & Advisory",
    description:
      "Trusted CA firm delivering value-driven financial solutions. Audit, taxation, and advisory services in Chennai.",
    url: "https://gmnrassociates.com",
    siteName: "CHINNI MALLIKARJUNA AND COMPANY",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CHINNI MALLIKARJUNA AND COMPANY | Chartered Accountants",
    description:
      "Trusted CA firm delivering value-driven financial solutions.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable}`}>
      <head>
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AccountingService",
              name: "CHINNI MALLIKARJUNA AND COMPANY",
              description:
                "Chartered Accountants firm delivering audit, taxation, and advisory services in Chennai.",
              url: "https://gmnrassociates.com",
              telephone: ["+91 7032 163 646"],
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
              openingHours: "Mo-Sa 09:00-18:00",
              areaServed: "Chennai",
              priceRange: "$$",
            }),
          }}
        />
      </head>
      <body className={`${outfit.variable} ${inter.variable} bg-white`}>
        <AppStoreProvider>
          <SmoothScroller>{children}</SmoothScroller>
        </AppStoreProvider>
      </body>
    </html>
  );
}
