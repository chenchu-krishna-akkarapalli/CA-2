import React from 'react';
import ServicePageTemplate from '../../components/ServicePageTemplate';

const DueDiligence = () => {
  const pageData = {
    serviceName: "Due Diligence",
    heroImage: "/hero-img/hero-2.png",
    heroTitle: "Due Diligence Services",
    heroSubtitle: "Comprehensive financial, legal, and tax due diligence for M&A transactions. Make informed investment decisions.",

    description: `Due Diligence is a comprehensive investigation and analysis of a business conducted before a merger, acquisition, investment, or major transaction. It helps identify risks, validate assumptions, and ensure informed decision-making.

Our due diligence services cover financial due diligence (verification of financials, earnings quality, working capital analysis), tax due diligence (tax compliance, contingent liabilities, structuring opportunities), and legal due diligence (contracts, litigation, regulatory compliance).

A thorough due diligence protects investors from hidden liabilities, validates the business value, provides negotiation leverage, and identifies deal breakers early. We provide actionable insights and clear recommendations for deal structuring.`,

    keyHighlights: [
      { title: "Financial DD", desc: "Earnings quality and balance sheet review", icon: "M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" },
      { title: "Tax Due Diligence", desc: "Tax risks and compliance verification", icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" },
      { title: "Legal Review", desc: "Contracts, litigation, and compliance", icon: "M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" },
      { title: "Risk Assessment", desc: "Identify and quantify deal risks", icon: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" },
      { title: "Working Capital", desc: "Net working capital analysis", icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" },
      { title: "Deal Structuring", desc: "Recommendations for transaction structure", icon: "M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" }
    ],

    process: [
      { title: "Scoping", desc: "Define DD scope and focus areas" },
      { title: "Data Room Review", desc: "Analyze documents and information" },
      { title: "Management Meetings", desc: "Discussions and clarifications" },
      { title: "Report & Debrief", desc: "Findings, risks, and recommendations" }
    ],

    benefits: [
      { title: "Risk Discovery", desc: "Identify hidden liabilities" },
      { title: "Value Validation", desc: "Verify business worth" },
      { title: "Deal Leverage", desc: "Negotiate better terms" },
      { title: "Informed Decision", desc: "Make smart investments" },
      { title: "Post-Deal Planning", desc: "Integration roadmap" },
      { title: "Expert Team", desc: "CMA, CS, and legal experts" }
    ],

    faqs: [
      { q: "What is covered in financial due diligence?", a: "Financial DD covers: Quality of earnings analysis, balance sheet review, working capital normalization, debt/debt-like items, off-balance sheet items, related party transactions, accounting policy review, and financial projections validation." },
      { q: "How long does due diligence take?", a: "Duration depends on company size and complexity. Small companies: 2-3 weeks, Mid-size: 4-6 weeks, Large/complex: 8-12 weeks. Timeline also depends on data room readiness and management availability." },
      { q: "What's the difference between buy-side and sell-side DD?", a: "Buy-side DD is conducted by acquirer to identify risks and validate value. Sell-side (Vendor DD) is done by seller before marketing to identify and fix issues, provide ready reports to buyers, and speed up transaction." },
      { q: "Do you sign NDAs for due diligence?", a: "Yes, we sign comprehensive NDAs before accessing any information. Our team maintains strict confidentiality. We can also work with existing NDAs between transaction parties." },
      { q: "What outputs do we receive from due diligence?", a: "You receive: Executive summary of key findings, detailed DD report with findings by area, risk matrix with quantification, recommendations for deal structure, and management presentation for deal team." }
    ],

    relatedServices: [
      { label: "Business Valuation", desc: "Company worth", href: "/services/business-valuation" },
      { label: "Project Report", desc: "Business planning", href: "/services/project-report" },
      { label: "Analytics & BI", desc: "Financial analysis", href: "/services/analytics-bi" },
      { label: "ROC Compliance", desc: "Share transfers", href: "/services/roc-compliance" }
    ]
  };

  return <ServicePageTemplate {...pageData} />;
};

export default DueDiligence;
