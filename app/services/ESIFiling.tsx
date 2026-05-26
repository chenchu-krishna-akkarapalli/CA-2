import React from 'react';
import ServicePageTemplate from '../../components/ServicePageTemplate';

const ESIFiling = () => {
  const pageData = {
    serviceName: "ESI Filing",
    heroImage: "/hero-img/hero-1.avif",
    heroTitle: "ESI Filing & Compliance",
    heroSubtitle: "Complete Employee State Insurance compliance. Monthly contributions, returns, and claims management for your workforce.",
    
    description: `ESI (Employee State Insurance) is a social security scheme providing medical, disability, maternity, and unemployment benefits to employees. Establishments with 10+ employees (20+ in some states) where employees earn up to â‚¹21,000/month must register under ESI Act.

ESI compliance involves monthly contribution payment, half-yearly returns, and maintaining proper records. The contribution rate is 3.25% from employer and 0.75% from employee. Benefits include medical treatment, cash benefits during sickness, maternity, and employment injury.

Non-compliance results in penalties, interest on delayed payments, and loss of benefits for employees. Our ESI filing services ensure accurate calculations, timely payments, and help employees access their entitled benefits.`,
    
    keyHighlights: [
      { title: "ESI Registration", desc: "New establishment registration with ESIC", icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" },
      { title: "Monthly Payment", desc: "Contribution challan and payment", icon: "M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" },
      { title: "Half-Yearly Returns", desc: "Form 5 and register maintenance", icon: "M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" },
      { title: "IP Number Generation", desc: "Insurance number for new employees", icon: "M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" },
      { title: "Claims Assistance", desc: "Help employees file benefit claims", icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" },
      { title: "Dispensary Tie-Up", desc: "Panel hospital and dispensary guidance", icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" }
    ],
    
    process: [
      { title: "Employee Data", desc: "Collect wage and attendance data" },
      { title: "Contribution Calculation", desc: "Calculate employer and employee share" },
      { title: "Challan Generation", desc: "Generate and pay monthly challan" },
      { title: "Return Filing", desc: "File half-yearly returns on time" }
    ],
    
    benefits: [
      { title: "Compliance Assured", desc: "Stay compliant with ESI Act" },
      { title: "Employee Benefits", desc: "Workers get medical coverage" },
      { title: "Timely Payment", desc: "Avoid penalties and interest" },
      { title: "Record Keeping", desc: "Proper registers maintained" },
      { title: "Claims Support", desc: "Help with benefit claims" },
      { title: "Expert Handling", desc: "Specialists manage compliance" }
    ],
    
    faqs: [
      { q: "What is the wage limit for ESI applicability?", a: "ESI is applicable to employees earning up to â‚¹21,000/month gross wages. Once covered, an employee remains covered for the contribution period even if wages exceed limit." },
      { q: "What is the due date for ESI payment?", a: "ESI contribution must be paid within 15 days of the following month. For March wages, payment is due by April 15. Late payment attracts 12% interest per annum." },
      { q: "What benefits do employees get under ESI?", a: "Medical benefit (treatment), Sickness benefit (70% wages), Maternity benefit (100% wages for 26 weeks), Disablement benefit, Dependent benefit, Funeral expenses, and Unemployment allowance." },
      { q: "How many employees trigger ESI registration?", a: "10 or more employees (20 in some states). The threshold is 10 in most states including Maharashtra, Karnataka, Tamil Nadu. Check state-specific rules." },
      { q: "Can ESI coverage continue after leaving job?", a: "Yes, medical benefits continue for contributory period if minimum 78 days contribution is made. Family also gets coverage during this extended period." }
    ],
    
    relatedServices: [
      { label: "PF Filing", desc: "Provident fund", href: "/services/pf-filing" },
      { label: "Payroll Processing", desc: "Salary management", href: "/services/payroll-processing" },
      { label: "Professional Tax", desc: "PT compliance", href: "/services/professional-tax" },
      { label: "TDS Returns", desc: "Salary TDS", href: "/services/tds-returns" }
    ]
  };

  return <ServicePageTemplate {...pageData} />;
};

export default ESIFiling;
