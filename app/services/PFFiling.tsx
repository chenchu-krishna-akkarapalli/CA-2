import React from 'react';
import ServicePageTemplate from '../../components/ServicePageTemplate';

const PFFiling = () => {
  const pageData = {
    serviceName: "PF Filing",
    heroImage: "/hero-img/hero-3.png",
    heroTitle: "Provident Fund (PF) Filing",
    heroSubtitle: "Complete EPF compliance for your business. Monthly returns, challan payment, and annual filings all managed.",
    
    description: `Provident Fund (PF) filing involves monthly and annual compliances under the Employees' Provident Funds and Miscellaneous Provisions Act, 1952. Employers with 20+ employees must register under EPF and file regular returns.

Monthly PF compliance includes calculating employee and employer contributions, generating challans via EPFO portal, making timely payments, and filing ECR (Electronic Challan cum Return). Annual returns and event-based filings also need attention.

PF compliance carries significant penalties for delays - ₹5/day for late payment and up to 100% of contribution as damages. Our PF filing services ensure accurate calculations, timely payments, and complete compliance with EPFO regulations.`,
    
    keyHighlights: [
      { title: "EPF Registration", desc: "New establishment registration with EPFO", icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" },
      { title: "Monthly ECR", desc: "Electronic Challan cum Return filing", icon: "M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" },
      { title: "Challan Generation", desc: "Accurate PF challan preparation", icon: "M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" },
      { title: "UAN Management", desc: "Employee UAN activation and management", icon: "M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" },
      { title: "KYC Seeding", desc: "Aadhaar, PAN, Bank KYC for employees", icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" },
      { title: "Claims Assistance", desc: "PF withdrawal and transfer support", icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" }
    ],
    
    process: [
      { title: "Data Collection", desc: "Collect employee wage data monthly" },
      { title: "Calculation", desc: "Calculate contributions accurately" },
      { title: "ECR Filing", desc: "File ECR and generate challan" },
      { title: "Payment", desc: "Make payment before 15th of next month" }
    ],
    
    benefits: [
      { title: "Timely Filing", desc: "Never miss the 15th deadline" },
      { title: "Accurate Calculation", desc: "Correct PF/EPS split computation" },
      { title: "Penalty Avoidance", desc: "Avoid late payment damages" },
      { title: "Employee Support", desc: "UAN and KYC assistance" },
      { title: "Annual Returns", desc: "Form 3A, 6A compliance" },
      { title: "Expert Team", desc: "Dedicated PF specialists" }
    ],
    
    faqs: [
      { q: "What is the due date for PF payment?", a: "PF contribution must be paid by the 15th of the following month. For example, March salary PF is due by April 15. Non-payment attracts interest @12% and damages up to 100%." },
      { q: "What are the current PF contribution rates?", a: "Employee contribution: 12% of basic + DA. Employer contribution: 12% (3.67% to EPF, 8.33% to EPS). Employer also pays 0.5% EDLI and admin charges." },
      { q: "Is PF applicable to all employees?", a: "PF is mandatory for employees earning basic + DA up to ₹15,000/month. Higher paid employees can opt out at joining, else it becomes mandatory." },
      { q: "How to check PF balance?", a: "Employees can check PF balance via UMANG app, EPFO portal, missed call to 011-22901406, or SMS to 7738299899. UAN activation and KYC seeding required." },
      { q: "What happens if PF is not deducted?", a: "Non-deduction is a compliance violation. Employer must deposit both employee and employer share, even if not deducted from salary, plus face penalties." }
    ],
    
    relatedServices: [
      { label: "ESI Filing", desc: "Employee insurance", href: "/services/esi-filing" },
      { label: "Payroll Processing", desc: "Salary management", href: "/services/payroll-processing" },
      { label: "TDS Returns", desc: "Salary TDS", href: "/services/tds-returns" },
      { label: "Professional Tax", desc: "PT compliance", href: "/services/professional-tax" }
    ]
  };

  return <ServicePageTemplate {...pageData} />;
};

export default PFFiling;
