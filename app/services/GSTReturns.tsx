import React from 'react';
import ServicePageTemplate from '../../components/ServicePageTemplate';

const GSTReturns = () => {
  const pageData = {
    serviceName: "GST Returns",
    heroImage: "/hero-img/hero-1.avif",
    heroTitle: "GST Return Filing Services",
    heroSubtitle: "Timely and accurate GST return filing. Stay compliant and maximize your input tax credit with expert assistance.",
    
    description: `GST Return Filing is a mandatory compliance for all GST-registered businesses. Returns must be filed monthly or quarterly based on your turnover and business type, reporting all sales, purchases, and tax liability.

Key returns include GSTR-1 (outward supplies), GSTR-3B (summary return), GSTR-9 (annual return), and others based on business nature. Late filing attracts interest (18% p.a.) and late fees (up to â‚¹200 per day).

Accurate GST return filing is crucial for claiming Input Tax Credit (ITC), which directly reduces your tax liability. Discrepancies in returns can lead to ITC mismatch, notices from department, and cash flow issues. Our experts ensure your returns are filed correctly and on time.`,
    
    keyHighlights: [
      { title: "Timely Filing", desc: "Never miss a deadline with our reminders and tracking", icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" },
      { title: "ITC Optimization", desc: "Maximize input tax credit claims", icon: "M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2zM10 8.5a.5.5 0 11-1 0 .5.5 0 011 0zm5 5a.5.5 0 11-1 0 .5.5 0 011 0z" },
      { title: "Reconciliation", desc: "GSTR-2A/2B reconciliation for accurate ITC", icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" },
      { title: "Error-Free", desc: "Quality checks to prevent notice and scrutiny", icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" },
      { title: "All Return Types", desc: "GSTR-1, 3B, 9, 9C, and all other returns", icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" },
      { title: "Notice Handling", desc: "Support for GST notices and assessments", icon: "M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" }
    ],
    
    process: [
      { title: "Data Collection", desc: "Gather sales, purchase invoices, and other documents" },
      { title: "Reconciliation", desc: "Match with GSTR-2A/2B and prepare working" },
      { title: "Return Preparation", desc: "Prepare returns with all required details" },
      { title: "Filing & Confirmation", desc: "File on GST portal and share acknowledgment" }
    ],
    
    benefits: [
      { title: "Avoid Penalties", desc: "Timely filing prevents late fees and interest" },
      { title: "Full ITC Benefit", desc: "Proper reconciliation ensures complete ITC claim" },
      { title: "Compliance Rating", desc: "Maintain good GST compliance score" },
      { title: "Notice Prevention", desc: "Accurate returns reduce scrutiny risk" },
      { title: "Expert Team", desc: "Experienced GST professionals handle your returns" },
      { title: "Year-Round Support", desc: "Help with all GST queries and issues" }
    ],
    
    faqs: [
      { q: "What are the due dates for GST returns?", a: "GSTR-1: 11th (monthly) or 13th (QRMP). GSTR-3B: 20th (monthly) or 22nd/24th (quarterly). GSTR-9: 31st December. Dates vary based on state and turnover." },
      { q: "What is the penalty for late GST return filing?", a: "Late fee of â‚¹50/day (â‚¹25 each CGST+SGST) for nil return and â‚¹100/day for others, up to maximum â‚¹10,000. Plus interest at 18% on unpaid tax." },
      { q: "What is QRMP scheme?", a: "Quarterly Return Monthly Payment scheme allows businesses with turnover up to â‚¹5 crores to file quarterly returns while paying tax monthly through PMT-06." },
      { q: "What is ITC reconciliation?", a: "Matching your purchase records with GSTR-2A/2B data to ensure you claim only eligible ITC. Mismatches can lead to ITC reversal and notices." },
      { q: "Is GSTR-9 mandatory?", a: "GSTR-9 annual return is mandatory for regular taxpayers with turnover above â‚¹2 crores. GSTR-9C reconciliation statement is required if turnover exceeds â‚¹5 crores." }
    ],
    
    relatedServices: [
      { label: "GST Registration", desc: "Get registered", href: "/services/gst-registration" },
      { label: "Income Tax Return", desc: "Direct tax filing", href: "/services/income-tax-return" },
      { label: "TDS Returns", desc: "TDS compliance", href: "/services/tds-returns" },
      { label: "ROC Compliance", desc: "Company filings", href: "/services/roc-compliance" }
    ]
  };

  return <ServicePageTemplate {...pageData} />;
};

export default GSTReturns;
