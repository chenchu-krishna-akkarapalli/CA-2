import React from 'react';
import ServicePageTemplate from '../../components/ServicePageTemplate';

const GSTRegistration = () => {
  const pageData = {
    serviceName: "GST Registration",
    heroImage: "/hero-img/hero-2.png",
    heroTitle: "GST Registration Services",
    heroSubtitle: "Get your business GST compliant with hassle-free registration. Essential for all businesses with turnover above threshold limits.",
    
    description: `Goods and Services Tax (GST) Registration is mandatory for businesses with annual turnover exceeding ₹40 lakhs (₹20 lakhs for service providers and ₹10 lakhs for special category states). GST has replaced multiple indirect taxes and unified India into a single market.

GST registration provides a unique 15-digit GSTIN (GST Identification Number) that enables businesses to collect tax from customers, claim input tax credit on purchases, and participate in interstate trade. Without GST registration, businesses cannot charge GST or claim input credits.

Whether you're a manufacturer, trader, service provider, or e-commerce seller, GST registration is essential for legitimate business operations. The registration process is entirely online through the GST portal, and we help you navigate through the documentation and verification process.`,
    
    keyHighlights: [
      { title: "Legal Compliance", desc: "Mandatory registration ensures legal business operations", icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" },
      { title: "Input Tax Credit", desc: "Claim credit on taxes paid on business purchases", icon: "M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2zM10 8.5a.5.5 0 11-1 0 .5.5 0 011 0zm5 5a.5.5 0 11-1 0 .5.5 0 011 0z" },
      { title: "Interstate Trade", desc: "Enable seamless trade across state boundaries", icon: "M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" },
      { title: "Business Credibility", desc: "GST number enhances trust with customers and vendors", icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" },
      { title: "E-Commerce Selling", desc: "Required for selling on Amazon, Flipkart, etc.", icon: "M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" },
      { title: "Government Tenders", desc: "Essential for participating in government contracts", icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" }
    ],
    
    process: [
      { title: "Document Collection", desc: "Gather PAN, Aadhaar, business proof, and address documents" },
      { title: "Application Filing", desc: "Submit GST REG-01 form on GST portal with documents" },
      { title: "Verification", desc: "Application verified by tax officer, ARN generated" },
      { title: "GSTIN Issued", desc: "Receive 15-digit GSTIN within 3-7 working days" }
    ],
    
    benefits: [
      { title: "Pan-India Business", desc: "Operate and sell across all states seamlessly" },
      { title: "Vendor Payments", desc: "Large companies require GSTIN for vendor onboarding" },
      { title: "Bank Loans", desc: "GST registration helps in getting business loans" },
      { title: "Online Selling", desc: "Mandatory for all e-commerce platforms" },
      { title: "Quick Processing", desc: "Get GSTIN in 3-7 working days" },
      { title: "Complete Support", desc: "Document preparation and application filing" }
    ],
    
    faqs: [
      { q: "What is the threshold for mandatory GST registration?", a: "For goods: ₹40 lakhs (₹20 lakhs for special category states). For services: ₹20 lakhs (₹10 lakhs for special category states). E-commerce sellers need registration regardless of turnover." },
      { q: "What documents are required for GST registration?", a: "PAN card, Aadhaar card, business address proof (electricity bill, rent agreement), bank statement/cancelled cheque, photos of proprietor/partners/directors, and business registration documents." },
      { q: "Can I apply for GST registration voluntarily?", a: "Yes, businesses below threshold limit can register voluntarily to avail input tax credit benefits and enhance business credibility." },
      { q: "What are GST return filing requirements?", a: "Regular taxpayers need to file GSTR-1 (monthly/quarterly) for outward supplies, GSTR-3B (monthly) for summary return, and GSTR-9 annual return." },
      { q: "What is the penalty for not registering under GST?", a: "Operating without mandatory GST registration attracts penalty of 100% of tax due or ₹10,000, whichever is higher. Prosecution may also be initiated for willful evasion." }
    ],
    
    relatedServices: [
      { label: "GST Returns", desc: "Monthly filings", href: "/services/gst-returns" },
      { label: "Import Export Code", desc: "Trade license", href: "/services/import-export-code" },
      { label: "MSME Registration", desc: "Business benefits", href: "/services/msme-udyam" },
      { label: "Private Limited Company", desc: "Company formation", href: "/services/private-limited-company" }
    ]
  };

  return <ServicePageTemplate {...pageData} />;
};

export default GSTRegistration;
