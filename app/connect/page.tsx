import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BottomFadeBlurOverlay from "../components/BottomFadeBlurOverlay";
import ContactHero from "./ContactHero";
import ContactFormSection from "./ContactFormSection";
import MapSection from "./MapSection";
import ContactFAQ from "./ContactFAQ";

export const metadata: Metadata = {
  title: "Contact Us | CHINNI MALLIKARJUNA AND COMPANY – Chartered Accountants",
  description:
    "Get in touch with CHINNI MALLIKARJUNA AND COMPANY for expert audit, tax, and advisory services. Visit our office in Chennai or reach us by phone and email.",
  keywords: [
    "Contact CHINNI MALLIKARJUNA AND COMPANY",
    "CA Firm Chennai Contact",
    "Chartered Accountants Contact",
    "Tax Advisory Chennai",
    "Free Consultation CA",
  ],
  alternates: {
    canonical: "https://gmnrassociates.com/connect", // Keeping domain for now as user didn't specify new domain, but I should probably leave it or update if I knew it. I'll leave it but maybe prompt suggests cmkca.com? Email is malli@cmkca.com. I'll stick to updating text.
  },
  openGraph: {
    title: "Contact Us | CHINNI MALLIKARJUNA AND COMPANY – Chartered Accountants",
    description:
      "Reach out to our team of Chartered Accountants for a free consultation. We're located in Chennai, Tamil Nadu.",
    url: "https://gmnrassociates.com/connect",
    siteName: "CHINNI MALLIKARJUNA AND COMPANY",
    locale: "en_IN",
    type: "website",
  },
};

export default function ConnectPage() {
  const contactJsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact CHINNI MALLIKARJUNA AND COMPANY",
    url: "https://gmnrassociates.com/connect",
    mainEntity: {
      "@type": "AccountingService",
      name: "CHINNI MALLIKARJUNA AND COMPANY",
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
    },
  };

  return (
    <div className="relative w-full overflow-hidden bg-white">
      <Navbar />
      <BottomFadeBlurOverlay />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }}
      />

      <main className="flex flex-col items-center pt-[56px] md:pt-[87px]">
        <ContactHero />
        <ContactFormSection />
        <MapSection />
        <ContactFAQ />
      </main>

      <Footer />
    </div>
  );
}
