import React from 'react';
import ServicePageTemplate from '../../components/ServicePageTemplate';

const PANForNRI = () => {
  const pageData = {
    serviceName: "PAN for NRI",
    heroImage: "/hero-img/hero-1.avif",
    heroTitle: "PAN Card for NRI/Foreign Nationals",
    heroSubtitle: "Essential identification for financial transactions in India. Quick PAN card for NRIs and foreign citizens.",
    
    description: `PAN (Permanent Account Number) is mandatory for NRIs (Non-Resident Indians) and foreign nationals who have taxable income in India, own property, invest in stocks/mutual funds, or conduct financial transactions in India.

NRIs can apply for PAN through Form 49A (for Indian citizens living abroad) or Form 49AA (for foreign citizens). The process has been simplified with online application and e-signature options, eliminating the need to visit India.

PAN is required for property transactions, opening bank accounts, investing in India, receiving rental income, selling assets, and filing income tax returns. Foreign nationals with business dealings in India also need PAN for compliance purposes.`,
    
    keyHighlights: [
      { title: "Online Application", desc: "Apply from anywhere without visiting India", icon: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" },
      { title: "No India Visit", desc: "Complete process remotely with e-KYC", icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
      { title: "Property Transactions", desc: "Mandatory for buying/selling property in India", icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" },
      { title: "Investment Enabled", desc: "Required for stocks, mutual funds, deposits", icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" },
      { title: "Tax Compliance", desc: "File Indian income tax returns", icon: "M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" },
      { title: "Lifetime Validity", desc: "PAN never expires, no renewal needed", icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" }
    ],
    
    process: [
      { title: "Document Preparation", desc: "Passport, visa, overseas address proof, photo" },
      { title: "Form Submission", desc: "File Form 49A/49AA online with NSDL/UTIITSL" },
      { title: "E-KYC/Physical", desc: "Complete verification through e-sign or courier" },
      { title: "PAN Delivery", desc: "e-PAN immediately, physical card in 15-20 days" }
    ],
    
    benefits: [
      { title: "Financial Access", desc: "Open NRO/NRE accounts and invest in India" },
      { title: "Property Rights", desc: "Buy, sell, or inherit property legally" },
      { title: "Tax Filing", desc: "Claim TDS refunds and file returns" },
      { title: "Business Dealings", desc: "Conduct business transactions in India" },
      { title: "Expert Assistance", desc: "Help with documentation and verification" },
      { title: "Global Delivery", desc: "PAN card delivered to overseas address" }
    ],
    
    faqs: [
      { q: "Is PAN mandatory for NRIs?", a: "PAN is mandatory if you have taxable income in India, property transactions, investments in securities, or receive income on which TDS is deducted." },
      { q: "What documents are needed for NRI PAN?", a: "Valid passport (Indian for citizens, foreign for others), overseas address proof, and passport-size photo. OCI/PIO card holders need additional documents." },
      { q: "Can NRIs get e-PAN?", a: "Yes, after successful application, e-PAN is issued immediately via email. Physical PAN card is sent to overseas address within 15-20 days." },
      { q: "What address should be used in PAN application?", a: "NRIs should use their overseas address. For communication, an Indian address can be provided if available." },
      { q: "Can foreign citizens get Indian PAN?", a: "Yes, foreign nationals with business dealings or investments in India can apply using Form 49AA with passport and address proof." }
    ],
    
    relatedServices: [
      { label: "NRI Company Incorporation", desc: "Start business in India", href: "/services/nri-company-incorporation" },
      { label: "FEMA Compliance", desc: "Forex regulations", href: "/services/fema-compliance" },
      { label: "Income Tax Return", desc: "Tax filing", href: "/services/income-tax-return" },
      { label: "Property Management", desc: "Real estate services", href: "/services/property-management" }
    ]
  };

  return <ServicePageTemplate {...pageData} />;
};

export default PANForNRI;
