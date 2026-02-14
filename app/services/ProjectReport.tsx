import React from 'react';
import ServicePageTemplate from '../../components/ServicePageTemplate';

const ProjectReport = () => {
  const pageData = {
    serviceName: "Project Report",
    heroImage: "/hero-img/hero-1.png",
    heroTitle: "Project Report Preparation",
    heroSubtitle: "Comprehensive project reports for bank loans, MSME schemes, and investor presentations. Professionally crafted reports that get approvals.",

    description: `A Project Report is a detailed document presenting the feasibility, technical aspects, financial projections, and viability of a business venture. Banks, financial institutions, and government schemes require professionally prepared project reports for loan sanction.

Our project reports include industry analysis, market potential, technical requirements, cost of project, means of finance, projected financials (5-7 years), break-even analysis, and key assumptions. Reports are prepared as per bank and scheme guidelines.

A well-prepared project report increases approval chances, speeds up sanction, and helps in getting better terms. We have prepared 500+ successful project reports across industries including manufacturing, trading, services, hospitality, and healthcare.`,

    keyHighlights: [
      { title: "Bank Loan Reports", desc: "Reports for term loan and working capital", icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" },
      { title: "MSME Schemes", desc: "Reports for PMEGP, CGTMSE, Mudra", icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" },
      { title: "Financial Projections", desc: "5-7 year revenue and profit forecasts", icon: "M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" },
      { title: "Industry Analysis", desc: "Market size, growth, and competition study", icon: "M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" },
      { title: "Technical Feasibility", desc: "Process, machinery, and infrastructure", icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" },
      { title: "Break-Even Analysis", desc: "BEP calculation and sensitivity analysis", icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" }
    ],

    process: [
      { title: "Discussion", desc: "Understand business model and requirements" },
      { title: "Research", desc: "Industry study and data gathering" },
      { title: "Drafting", desc: "Prepare comprehensive project report" },
      { title: "Review & Finalize", desc: "Incorporate feedback and deliver" }
    ],

    benefits: [
      { title: "Bank Ready", desc: "Reports meet bank requirements" },
      { title: "Higher Approval", desc: "Professional reports get approved" },
      { title: "Fast Turnaround", desc: "Quick delivery timelines" },
      { title: "Industry Expertise", desc: "Experience across sectors" },
      { title: "Presentation Support", desc: "Help in bank meetings" },
      { title: "Revisions Included", desc: "Updates as per bank feedback" }
    ],

    faqs: [
      { q: "What details do you need to prepare a project report?", a: "We need business idea, proposed location, products/services, capacity, machinery requirements, promoter background, and investment amount. We'll guide you through the information gathering process." },
      { q: "How long does it take to prepare a project report?", a: "Standard project reports take 5-7 working days. Complex projects or scheme-specific reports may take 10-15 days. Rush delivery available for urgent requirements." },
      { q: "Can you prepare reports for specific bank formats?", a: "Yes, we prepare reports as per specific bank formats including SBI, HDFC, ICICI, and nationalized banks. We also prepare scheme-specific formats for PMEGP, CGTMSE, Stand-Up India." },
      { q: "Do you help with loan processing after project report?", a: "Yes, we assist with complete loan documentation, CIBIL improvement guidance, collateral valuation, and accompany you for bank meetings if needed." },
      { q: "What is the cost of project report preparation?", a: "Cost varies based on project size and complexity. Basic reports start from ₹15,000, while detailed DPRs for large projects may cost more. We provide quotes after understanding requirements." }
    ],

    relatedServices: [
      { label: "Analytics & BI", desc: "Business intelligence", href: "/services/analytics-bi" },
      { label: "Business Valuation", desc: "Company worth", href: "/services/business-valuation" },
      { label: "MSME Registration", desc: "Udyam certificate", href: "/services/msme-udyam" },
      { label: "Private Limited", desc: "Start company", href: "/services/private-limited-company" }
    ]
  };

  return <ServicePageTemplate {...pageData} />;
};

export default ProjectReport;
