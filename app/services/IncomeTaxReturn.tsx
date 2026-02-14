import React from 'react';
import ServicePageTemplate from '../../components/ServicePageTemplate';

const IncomeTaxReturn = () => {
  const pageData = {
    serviceName: "Income Tax Return",
    heroImage: "/hero-img/hero-2.png",
    heroTitle: "Income Tax Return Filing Services",
    heroSubtitle: "Expert ITR filing for individuals and businesses. Maximize deductions, claim refunds, and stay compliant with tax laws.",
    
    description: `Income Tax Return (ITR) filing is mandatory for individuals and businesses with income above the basic exemption limit. Even if your income is below the threshold, filing ITR is beneficial for loan applications, visa processing, and building financial credibility.

Different ITR forms (ITR-1 to ITR-7) apply based on income sources and taxpayer category. Choosing the right form and correctly reporting all income sources, deductions, and exemptions is crucial to avoid notices and penalties.

Our tax experts analyze your financial situation, identify all applicable deductions (80C, 80D, HRA, etc.), ensure accurate reporting, and help you pay the right amount of tax - not more, not less. We also handle advance tax calculation and assist with tax notices.`,
    
    keyHighlights: [
      { title: "All ITR Forms", desc: "ITR-1 to ITR-7 for all taxpayer categories", icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" },
      { title: "Tax Optimization", desc: "Maximize deductions and minimize tax liability", icon: "M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2zM10 8.5a.5.5 0 11-1 0 .5.5 0 011 0zm5 5a.5.5 0 11-1 0 .5.5 0 011 0z" },
      { title: "Refund Claims", desc: "Claim eligible tax refunds quickly", icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
      { title: "Capital Gains", desc: "Expert handling of stock, property, and crypto gains", icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" },
      { title: "Foreign Income", desc: "NRI returns and foreign asset reporting", icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
      { title: "Notice Support", desc: "Handle tax notices and assessments", icon: "M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" }
    ],
    
    process: [
      { title: "Document Collection", desc: "Gather Form 16, investment proofs, and income documents" },
      { title: "Tax Computation", desc: "Calculate tax with all deductions and exemptions" },
      { title: "Return Preparation", desc: "Prepare return in correct ITR form" },
      { title: "E-Filing & Verification", desc: "File online and complete e-verification" }
    ],
    
    benefits: [
      { title: "Timely Filing", desc: "Beat the deadline and avoid penalties" },
      { title: "Tax Savings", desc: "Claim all eligible deductions you might miss" },
      { title: "Error-Free", desc: "Prevent mistakes that trigger notices" },
      { title: "Old Regime vs New", desc: "Analysis to choose the beneficial tax regime" },
      { title: "Expert Review", desc: "CA-reviewed returns for accuracy" },
      { title: "Post-Filing Support", desc: "Help with refund tracking and notices" }
    ],
    
    faqs: [
      { q: "Who must file Income Tax Return?", a: "Individuals with gross income above ₹2.5 lakhs (₹3 lakhs for seniors, ₹5 lakhs for super seniors). Also mandatory if you have foreign assets, bank deposits above ₹1 crore, or TDS/TCS above ₹25,000." },
      { q: "What is the due date for ITR filing?", a: "For individuals and non-audit cases: 31st July. For audit cases: 31st October. For transfer pricing cases: 30th November. Belated return: 31st December with penalty." },
      { q: "Which ITR form should I use?", a: "ITR-1: Salary, one house property, other income up to ₹50L. ITR-2: Capital gains, more than one house. ITR-3: Business income. ITR-4: Presumptive taxation." },
      { q: "What happens if I don't file ITR?", a: "Penalty up to ₹5,000 (₹1,000 if income below ₹5 lakhs), inability to carry forward losses, higher TDS rates, and potential prosecution for deliberate evasion." },
      { q: "Can I revise my ITR after filing?", a: "Yes, revised return can be filed within 31st December of the assessment year if original return was filed on time. Belated returns cannot be revised after the deadline." }
    ],
    
    relatedServices: [
      { label: "TDS Returns", desc: "TDS compliance", href: "/services/tds-returns" },
      { label: "GST Returns", desc: "Indirect tax", href: "/services/gst-returns" },
      { label: "Tax Planning", desc: "Advisory services", href: "/services/project-report" },
      { label: "ROC Compliance", desc: "Company filings", href: "/services/roc-compliance" }
    ]
  };

  return <ServicePageTemplate {...pageData} />;
};

export default IncomeTaxReturn;
