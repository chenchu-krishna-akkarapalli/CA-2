import React from 'react';
import ServicePageTemplate from '../../components/ServicePageTemplate';

const ROCCompliance = () => {
  const pageData = {
    serviceName: "ROC Compliance",
    heroImage: "/hero-img/hero-2.avif",
    heroTitle: "ROC Compliance Services",
    heroSubtitle: "Stay compliant with Ministry of Corporate Affairs. Annual filings, event-based filings, and company secretarial services.",

    description: `ROC (Registrar of Companies) Compliance is mandatory for all registered companies in India. The Companies Act, 2013 requires companies to file various forms and returns with MCA (Ministry of Corporate Affairs) to maintain their active status.

Key annual compliances include filing of Annual Return (MGT-7/7A), Financial Statements (AOC-4), and Director KYC (DIR-3 KYC). Additionally, event-based filings are required for changes in directors, registered office, share capital, charges, etc.

Non-compliance results in heavy penalties, disqualification of directors, and even striking off of companies. We ensure your company remains in good standing with timely and accurate ROC filings throughout the year.`,

    keyHighlights: [
      { title: "Annual Filings", desc: "MGT-7, AOC-4, and other annual returns", icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" },
      { title: "Event Filings", desc: "Director change, address change, share allotment", icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" },
      { title: "Board Meetings", desc: "Minutes preparation and compliance", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" },
      { title: "Statutory Registers", desc: "Maintain all required company registers", icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" },
      { title: "DIN KYC", desc: "Annual Director KYC compliance", icon: "M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" },
      { title: "Penalty Avoidance", desc: "Prevent penalties and director disqualification", icon: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" }
    ],

    process: [
      { title: "Calendar Setup", desc: "Create compliance calendar for your company" },
      { title: "Document Preparation", desc: "Prepare minutes, resolutions, and forms" },
      { title: "Review & Filing", desc: "Review and file with MCA portal" },
      { title: "Tracking", desc: "Track status and maintain records" }
    ],

    benefits: [
      { title: "Active Status", desc: "Maintain company's active status on MCA" },
      { title: "Director Protection", desc: "Prevent director disqualification" },
      { title: "Avoid Strike-Off", desc: "Keep company from being struck off" },
      { title: "Due Diligence Ready", desc: "Clean records for investors and buyers" },
      { title: "Dedicated Team", desc: "Company secretary handles all filings" },
      { title: "Reminder Service", desc: "Proactive compliance reminders" }
    ],

    faqs: [
      { q: "What are the annual ROC filings?", a: "Annual Return (MGT-7/7A) within 60 days of AGM, Financial Statements (AOC-4) within 30 days of AGM, and DIR-3 KYC for all directors by September 30." },
      { q: "What happens if ROC filings are not done?", a: "Additional fees for late filing, penalty on company and officers, director disqualification after 3 years of default, and company struck off after 2 years of no filing." },
      { q: "What is DIR-3 KYC?", a: "Annual KYC update required for all directors with DIN. Must be filed by September 30 each year. Non-filing leads to DIN deactivation." },
      { q: "When should AOC-4 and MGT-7 be filed?", a: "AOC-4 within 30 days of AGM. MGT-7 within 60 days of AGM. AGM must be held within 6 months from financial year end." },
      { q: "What event-based filings are required?", a: "DIR-12 for director changes, INC-22 for address change, SH-7 for share capital increase, PAS-3 for share allotment, CHG-1 for charges, and many more." }
    ],

    relatedServices: [
      { label: "Audit & Assurance", desc: "Complete compliance", href: "/services/auditing-assurance" },
      { label: "Director KYC", desc: "DIN compliance", href: "/services/director-kyc" },
      { label: "Private Limited Company", desc: "Company formation", href: "/services/private-limited-company" },
      { label: "GST Returns", desc: "Tax compliance", href: "/services/gst-returns" }
    ]
  };

  return <ServicePageTemplate {...pageData} />;
};

export default ROCCompliance;
