import React from 'react';
import ServicePageTemplate from '../../components/ServicePageTemplate';

const BusinessValuation = () => {
  const pageData = {
    serviceName: "Business Valuation",
    heroImage: "/hero-img/hero-1.png",
    heroTitle: "Business Valuation Services",
    heroSubtitle: "Professional company valuation for M&A, fundraising, and compliance. IBBI-registered valuers providing defensible valuations.",
    
    description: `Business Valuation is the process of determining the economic value of a business or company. Professional valuations are required for mergers & acquisitions, fundraising, share transfers, ESOP issuance, and various statutory compliances.

Our valuation services use internationally accepted methodologies including Discounted Cash Flow (DCF), Comparable Company Analysis, Asset-Based Valuation, and Earnings Multiple methods. We select appropriate methods based on business type and purpose of valuation.

Valuations are conducted by IBBI-registered valuers as required under Companies Act for certain transactions. We provide detailed valuation reports with methodology explanation, assumptions, and supporting analysis that stand up to scrutiny by regulators, investors, and tax authorities.`,
    
    keyHighlights: [
      { title: "IBBI Registered", desc: "Valuations by registered valuers", icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" },
      { title: "Multiple Methods", desc: "DCF, CCA, Asset-based approaches", icon: "M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" },
      { title: "M&A Support", desc: "Valuations for mergers and acquisitions", icon: "M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" },
      { title: "Fundraising", desc: "Startup and growth-stage valuations", icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
      { title: "Tax Compliance", desc: "Section 56(2) and other provisions", icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" },
      { title: "Detailed Reports", desc: "Comprehensive valuation documentation", icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" }
    ],
    
    process: [
      { title: "Engagement", desc: "Understand purpose and scope of valuation" },
      { title: "Data Gathering", desc: "Collect financials and business information" },
      { title: "Analysis", desc: "Apply appropriate valuation methodologies" },
      { title: "Report", desc: "Issue detailed valuation certificate/report" }
    ],
    
    benefits: [
      { title: "Regulatory Compliance", desc: "Meets Companies Act requirements" },
      { title: "Tax Defensible", desc: "Stands up to IT scrutiny" },
      { title: "Investor Ready", desc: "Professional reports for investors" },
      { title: "Multiple Methods", desc: "Cross-verified value conclusion" },
      { title: "Fast Turnaround", desc: "Quick delivery for deals" },
      { title: "Confidential", desc: "Strict data confidentiality" }
    ],
    
    faqs: [
      { q: "When is IBBI registered valuer mandatory?", a: "IBBI valuer is required for: Share allotment under preferential issue, share transfers to/from related parties, mergers under Fast Track scheme, IBC proceedings, and when specifically mandated by Companies Act provisions." },
      { q: "What valuation methods do you use?", a: "We use: Discounted Cash Flow (DCF) for growing companies, Comparable Company Analysis for mature businesses, Asset-Based for asset-heavy companies, and Earnings Multiple for profitable businesses. Method selection depends on business nature and purpose." },
      { q: "How long does valuation take?", a: "Standard valuations take 7-10 working days from receipt of all information. Complex valuations or those requiring site visits may take 15-20 days. Rush delivery available for urgent requirements." },
      { q: "What information is needed for valuation?", a: "We need: Last 3-5 years audited financials, management accounts, business plan/projections, details of assets, customer/supplier concentration, industry information, and any specific factors affecting value." },
      { q: "Is valuation report valid for how long?", a: "Valuation reports are typically valid for 6 months for regulatory filings. For transactions, banks and regulators may accept reports up to 12 months old. Fresh valuation recommended for material changes in business." }
    ],
    
    relatedServices: [
      { label: "Due Diligence", desc: "Transaction review", href: "/services/due-diligence" },
      { label: "Private Limited", desc: "Start company", href: "/services/private-limited-company" },
      { label: "Project Report", desc: "Business plans", href: "/services/project-report" },
      { label: "ROC Compliance", desc: "Share transfers", href: "/services/roc-compliance" }
    ]
  };

  return <ServicePageTemplate {...pageData} />;
};

export default BusinessValuation;
