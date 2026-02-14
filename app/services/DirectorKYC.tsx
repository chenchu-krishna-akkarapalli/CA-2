import React from 'react';
import ServicePageTemplate from '../../components/ServicePageTemplate';

const DirectorKYC = () => {
  const pageData = {
    serviceName: "Director KYC",
    heroImage: "/hero-img/hero-2.png",
    heroTitle: "Director KYC (DIR-3 KYC)",
    heroSubtitle: "Annual KYC compliance for directors. Keep your DIN active with timely DIR-3 KYC filing.",

    description: `Director KYC (DIR-3 KYC) is a mandatory annual compliance for all directors holding a Director Identification Number (DIN). Every director must file this eForm annually to verify and update their personal details with the Ministry of Corporate Affairs.

The DIR-3 KYC form requires directors to verify their PAN, Aadhaar, mobile number, email, and residential address. Filing requires OTP verification and digital signature. Non-filing results in DIN deactivation.

Deactivated DIN means the person cannot function as a director, file forms, or sign documents until KYC is completed and DIN is reactivated. We ensure your directors stay compliant with timely KYC reminders and filing assistance.`,

    keyHighlights: [
      { title: "DIN Verification", desc: "Verify and update director details with MCA", icon: "M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" },
      { title: "OTP Verification", desc: "Secure verification via mobile and email OTP", icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" },
      { title: "Aadhaar Linking", desc: "Link Aadhaar with DIN for compliance", icon: "M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" },
      { title: "Annual Reminder", desc: "Never miss KYC deadline with our alerts", icon: "M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" },
      { title: "DIN Reactivation", desc: "Restore deactivated DIN quickly", icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" },
      { title: "Multiple Directors", desc: "Bulk KYC for all company directors", icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" }
    ],

    process: [
      { title: "Document Collection", desc: "Gather PAN, Aadhaar, address proof" },
      { title: "Form Preparation", desc: "Fill DIR-3 KYC with accurate details" },
      { title: "OTP Verification", desc: "Verify via mobile and email OTP" },
      { title: "DSC Filing", desc: "File with director's digital signature" }
    ],

    benefits: [
      { title: "DIN Active", desc: "Keep your DIN status active" },
      { title: "Hassle-Free", desc: "We handle the entire process" },
      { title: "Deadline Tracking", desc: "Annual reminders for renewal" },
      { title: "Quick Filing", desc: "Same day completion" },
      { title: "DSC Support", desc: "DSC issuance if required" },
      { title: "Multi-Director", desc: "Single point for all directors" }
    ],

    faqs: [
      { q: "What is the deadline for DIR-3 KYC?", a: "DIR-3 KYC must be filed annually before September 30 for all directors whose DIN was allotted on or before March 31 of that year. First-time allottees have 30 days." },
      { q: "What happens if DIR-3 KYC is not filed?", a: "DIN gets deactivated with 'Deactivated due to non-filing of DIR-3 KYC' status. Director cannot sign forms, approve filings, or function as director until reactivation." },
      { q: "How to reactivate deactivated DIN?", a: "File DIR-3 KYC with additional fee of ₹5,000. DIN gets reactivated within 2-3 working days after successful filing and fee payment." },
      { q: "Is Aadhaar mandatory for DIR-3 KYC?", a: "Aadhaar is mandatory for Indian directors. For foreign nationals, passport details are required. OTP verification is mandatory for both mobile and email." },
      { q: "Can we file DIR-3 KYC without DSC?", a: "No, DIR-3 KYC must be filed with the director's Digital Signature Certificate. If DSC is not available, it needs to be obtained first." }
    ],

    relatedServices: [
      { label: "Audit & Assurance", desc: "Complete compliance", href: "/services/auditing-assurance" },
      { label: "ROC Compliance", desc: "All MCA filings", href: "/services/roc-compliance" },
      { label: "Private Limited", desc: "Company incorporation", href: "/services/private-limited-company" },
      { label: "LLP Registration", desc: "DPIN compliance", href: "/services/llp-registration" }
    ]
  };

  return <ServicePageTemplate {...pageData} />;
};

export default DirectorKYC;
