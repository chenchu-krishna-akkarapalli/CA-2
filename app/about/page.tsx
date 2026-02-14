import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AnimatedSection from "../components/AnimatedSection";
import BottomFadeBlurOverlay from "../components/BottomFadeBlurOverlay";
import AboutHeroSection from "../about-sections/AboutHeroSection";

const WhoWeAreSection = dynamic(() => import("@/app/about-sections/WhoWeAreSection"), {
  loading: () => <div className="w-full max-w-[1132px] h-[520px]" aria-hidden="true" />,
});

const OurJourneySection = dynamic(() => import("@/app/about-sections/OurJourneySection"), {
  loading: () => <div className="w-full h-[560px]" aria-hidden="true" />,
});

const CoreValuesSection = dynamic(() => import("@/app/about-sections/CoreValuesSection"), {
  loading: () => <div className="w-full max-w-[1132px] h-[760px]" aria-hidden="true" />,
});

const MeetTheExpertsSection = dynamic(
  () => import("@/app/about-sections/MeetTheExpertsSection"),
  {
    loading: () => <div className="w-full max-w-[1087px] h-[980px]" aria-hidden="true" />,
  }
);

export const metadata: Metadata = {
  title: "About Us | CHINNI MALLIKARJUNA AND COMPANY – Chartered Accountants",
  description:
    "Learn about CHINNI MALLIKARJUNA AND COMPANY — a trusted CA firm in Chennai. Meet our expert team of Chartered Accountants delivering audit, tax, and advisory services.",
  keywords: [
    "About CHINNI MALLIKARJUNA AND COMPANY",
    "Chartered Accountants Chennai",
    "CA Firm Chennai",
    "Audit Tax Advisory",
    "Tax Consulting Chennai",
    "Compliance Services",
  ],
  alternates: {
    canonical: "https://gmnrassociates.com/about",
  },
  openGraph: {
    title: "About Us | CHINNI MALLIKARJUNA AND COMPANY – Chartered Accountants",
    description:
      "A young and dynamic CA firm built on integrity, expertise, and a commitment to quality financial services.",
    url: "https://gmnrassociates.com/about",
    siteName: "CHINNI MALLIKARJUNA AND COMPANY",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/hero-img/hero-1.png",
        width: 1200,
        height: 630,
        alt: "CHINNI MALLIKARJUNA AND COMPANY – Chartered Accountants",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | CHINNI MALLIKARJUNA AND COMPANY",
    description:
      "Meet the team behind CHINNI MALLIKARJUNA AND COMPANY — a trusted Chartered Accountants firm in Chennai.",
    images: ["/hero-img/hero-1.png"],
  },
};

export default function AboutPage() {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://gmnrassociates.com/#organization",
    name: "CHINNI MALLIKARJUNA AND COMPANY",
    url: "https://gmnrassociates.com",
    email: "malli@cmkca.com",
    telephone: ["+91 7032 163 646"],
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "No. 10/31, G1, Ten Downing, Rajalakshmi Nagar 3rd Main Road, Velachery",
      addressLocality: "Chennai",
      addressRegion: "Tamil Nadu",
      postalCode: "600042",
      addressCountry: "IN",
    },
  };

  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://gmnrassociates.com/#localbusiness",
    name: "CHINNI MALLIKARJUNA AND COMPANY",
    url: "https://gmnrassociates.com",
    description:
      "Chartered Accountants firm delivering audit, taxation, and advisory services in Chennai.",
    email: "malli@cmkca.com",
    telephone: ["+91 7032 163 646"],
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
  };

  return (
    <div className="relative w-full overflow-hidden bg-white">
      <Navbar />
      <BottomFadeBlurOverlay />

      {/* JSON-LD (About-specific) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />

      <main className="flex flex-col items-center pt-[56px] md:pt-[87px]">
        {/* Hero Section */}
        <AboutHeroSection />

        {/* Who We Are */}
        <AnimatedSection delay={0.1}>
          <div className="mt-[40px] sm:mt-[55px] lg:mt-[70px] flex justify-center px-4 lg:px-8">
            <WhoWeAreSection />
          </div>
        </AnimatedSection>

        {/* Our Journey */}
        <AnimatedSection delay={0.1}>
          <div className="mt-[40px] sm:mt-[55px] lg:mt-[70px]">
            <OurJourneySection />
          </div>
        </AnimatedSection>

        {/* Core Values */}
        <AnimatedSection delay={0.1}>
          <div className="mt-[40px] sm:mt-[55px] lg:mt-[70px] flex justify-center px-4 lg:px-8">
            <CoreValuesSection />
          </div>
        </AnimatedSection>

        {/* Meet The Experts */}
        <AnimatedSection delay={0.1}>
          <div className="mt-[40px] sm:mt-[55px] lg:mt-[70px] mb-[40px] lg:mb-[70px] flex justify-center px-4 lg:px-8">
            <MeetTheExpertsSection />
          </div>
        </AnimatedSection>
      </main>

      <Footer />
    </div>
  );
}
