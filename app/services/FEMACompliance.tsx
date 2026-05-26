import React from 'react';
import ServicePageTemplate from '../../components/ServicePageTemplate';

const FEMACompliance = () => {
  const pageData = {
    serviceName: "FEMA Compliance",
    heroImage: "/hero-img/hero-1.avif",
    heroTitle: "FEMA Compliance Services",
    heroSubtitle: "Navigate foreign exchange regulations with ease. Expert assistance for all FEMA compliances and RBI filings.",
    
    description: `FEMA (Foreign Exchange Management Act, 1999) regulates all foreign exchange transactions in India. Any individual or company dealing with foreign investment, external commercial borrowings, or cross-border transactions must comply with FEMA regulations.

FEMA compliance includes RBI reporting for FDI inflows (FC-GPR), outbound investments (ODI), external commercial borrowings (ECB), and annual reporting (FLA Return). Non-compliance can result in heavy penalties and compounding proceedings.

We help NRIs, foreign companies, Indian subsidiaries, and businesses with foreign transactions navigate the complex FEMA landscape. From initial investment structuring to ongoing compliance, our experts ensure you meet all regulatory requirements.`,
    
    keyHighlights: [
      { title: "RBI Reporting", desc: "Timely filing of all mandatory RBI returns", icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" },
      { title: "FDI Compliance", desc: "FC-GPR and other FDI-related filings", icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
      { title: "ECB Management", desc: "External Commercial Borrowing compliance", icon: "M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" },
      { title: "ODI Compliance", desc: "Overseas Direct Investment filings", icon: "M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" },
      { title: "Compounding", desc: "Handle FEMA contraventions and penalties", icon: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" },
      { title: "Annual Returns", desc: "FLA and other annual compliance filings", icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" }
    ],
    
    process: [
      { title: "Transaction Analysis", desc: "Review forex transactions and identify compliances" },
      { title: "Document Preparation", desc: "Prepare necessary forms and supporting documents" },
      { title: "RBI Filing", desc: "Submit returns through authorized dealer banks" },
      { title: "Compliance Tracking", desc: "Monitor deadlines and maintain records" }
    ],
    
    benefits: [
      { title: "Avoid Penalties", desc: "Timely compliance prevents heavy penalties" },
      { title: "Expert Guidance", desc: "Navigate complex FEMA regulations" },
      { title: "Peace of Mind", desc: "Assured compliance with RBI requirements" },
      { title: "Transaction Support", desc: "Structuring advice for forex transactions" },
      { title: "Complete Solutions", desc: "All FEMA filings handled under one roof" },
      { title: "Compounding Support", desc: "Handle past non-compliances" }
    ],
    
    faqs: [
      { q: "What is FC-GPR filing?", a: "FC-GPR (Foreign Currency-Gross Provisional Return) must be filed within 30 days of allotment of shares to foreign investors, reporting details of FDI received." },
      { q: "What is FLA Return?", a: "Annual Return on Foreign Liabilities and Assets (FLA) must be filed by all Indian companies with FDI or overseas investments, by July 15 every year." },
      { q: "What are the penalties for FEMA non-compliance?", a: "Penalties can be up to 3 times the amount involved or â‚¹2 lakhs if amount is not quantifiable. Additional daily penalty of â‚¹5,000 for continuing contravention." },
      { q: "What is FEMA compounding?", a: "Compounding is the process to settle FEMA contraventions by paying a compounding fee to RBI, without prosecution. It's like a settlement procedure." },
      { q: "Who needs FEMA compliance?", a: "Companies with foreign investment, NRI-owned companies, businesses with ECB, ODI, import/export payments, and individuals with foreign assets or investments." }
    ],
    
    relatedServices: [
      { label: "NRI Company Incorporation", desc: "Start business", href: "/services/nri-company-incorporation" },
      { label: "Indian Subsidiary", desc: "Foreign company", href: "/services/indian-subsidiary" },
      { label: "Import Export Code", desc: "Trade license", href: "/services/import-export-code" },
      { label: "ROC Compliance", desc: "Company filings", href: "/services/roc-compliance" }
    ]
  };

  return <ServicePageTemplate {...pageData} />;
};

export default FEMACompliance;
