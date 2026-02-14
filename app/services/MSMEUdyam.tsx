import React from 'react';
import ServicePageTemplate from '../../components/ServicePageTemplate';

const MSMEUdyam = () => {
  const pageData = {
    serviceName: "MSME/Udyam Registration",
    heroImage: "/hero-img/hero-1.png",
    heroTitle: "MSME/Udyam Registration",
    heroSubtitle: "Unlock government benefits for your small business. Free registration with lifetime validity and multiple advantages.",
    
    description: `MSME (Micro, Small and Medium Enterprises) Registration, now known as Udyam Registration, is a government initiative to classify and support small businesses in India. The registration is based on investment in plant/machinery and annual turnover criteria.

Udyam Registration replaced the earlier Udyog Aadhaar process from July 1, 2020. The registration is completely free, paperless, and done online through the Udyam portal. Once registered, businesses receive a unique Udyam Registration Number (URN) and certificate.

Registered MSMEs enjoy numerous benefits including priority sector lending, credit guarantee schemes, subsidy schemes, protection against delayed payments, reduced interest rates, and preference in government tenders. It's an essential registration for any small or medium business.`,
    
    keyHighlights: [
      { title: "Free Registration", desc: "No fees charged for Udyam Registration", icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
      { title: "Lifetime Validity", desc: "No renewal required once registered", icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" },
      { title: "Priority Lending", desc: "Banks prioritize loans to registered MSMEs", icon: "M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" },
      { title: "Government Schemes", desc: "Access to various central and state subsidies", icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" },
      { title: "Tender Preference", desc: "Preference in government procurement", icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" },
      { title: "Payment Protection", desc: "Legal protection against delayed payments", icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" }
    ],
    
    process: [
      { title: "Aadhaar Verification", desc: "Owner/proprietor Aadhaar required for registration" },
      { title: "PAN Validation", desc: "Business PAN or proprietor PAN verified" },
      { title: "Fill Details", desc: "Enter business details, investment, and turnover" },
      { title: "Instant Certificate", desc: "Udyam certificate generated immediately" }
    ],
    
    benefits: [
      { title: "Lower Interest Rates", desc: "Reduced interest on business loans" },
      { title: "Collateral-Free Loans", desc: "CGTMSE scheme provides credit guarantee" },
      { title: "Subsidy Schemes", desc: "Access to PMEGP, CLCSS, and state subsidies" },
      { title: "GeM Benefits", desc: "Easier vendor registration on Government e-Marketplace" },
      { title: "Expert Assistance", desc: "We ensure correct classification and registration" },
      { title: "Post-Registration Support", desc: "Help with scheme applications and benefits" }
    ],
    
    faqs: [
      { q: "What is the classification criteria for MSME?", a: "Micro: Investment ≤₹1 Cr & Turnover ≤₹5 Cr. Small: Investment ≤₹10 Cr & Turnover ≤₹50 Cr. Medium: Investment ≤₹50 Cr & Turnover ≤₹250 Cr." },
      { q: "Who can register for Udyam?", a: "Any proprietorship, partnership, LLP, private company, or any other form of business engaged in manufacturing or service activities." },
      { q: "Is GST registration required for Udyam?", a: "GST registration is not mandatory but if you have GSTIN, it will be linked to Udyam registration for turnover verification from GST returns." },
      { q: "Can I update my Udyam Registration?", a: "Yes, you can update details anytime through the Udyam portal. Reclassification happens automatically based on ITR and GST return data." },
      { q: "What are delayed payment provisions?", a: "Buyers must pay MSMEs within 45 days of supply. If delayed, they must pay compound interest at 3x bank rate. MSMEs can approach MSME Facilitation Council for recovery." }
    ],
    
    relatedServices: [
      { label: "GST Registration", desc: "Tax compliance", href: "/services/gst-registration" },
      { label: "Business Loans", desc: "Financing", href: "/services/project-report" },
      { label: "Private Limited Company", desc: "Company formation", href: "/services/private-limited-company" },
      { label: "Import Export Code", desc: "Trade license", href: "/services/import-export-code" }
    ]
  };

  return <ServicePageTemplate {...pageData} />;
};

export default MSMEUdyam;
