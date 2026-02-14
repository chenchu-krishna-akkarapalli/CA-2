import React from 'react';
import ServicePageTemplate from '../../components/ServicePageTemplate';

const ProfessionalTax = () => {
  const pageData = {
    serviceName: "Professional Tax",
    heroImage: "/hero-img/hero-2.png",
    heroTitle: "Professional Tax Registration",
    heroSubtitle: "State-level tax registration for employers and professionals. Mandatory for businesses with employees in most Indian states.",
    
    description: `Professional Tax is a state-level tax levied on professions, trades, and employment. Under Article 276 of the Indian Constitution, state governments are authorized to collect this tax from salaried individuals and self-employed professionals.

Employers are required to register under Professional Tax Act and deduct professional tax from employees' salaries. Self-employed professionals like doctors, lawyers, chartered accountants, and consultants must also register and pay professional tax directly.

The maximum professional tax payable is capped at ₹2,500 per year. While the tax amount is small, non-compliance attracts heavy penalties. Professional Tax registration is essential for obtaining other registrations and for maintaining good standing with state authorities.`,
    
    keyHighlights: [
      { title: "State Tax", desc: "Tax levied by state government on professionals", icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" },
      { title: "Employer Obligation", desc: "Employers must deduct PT from employee salary", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" },
      { title: "Maximum ₹2,500", desc: "Constitutional cap on annual professional tax", icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
      { title: "Tax Deductible", desc: "Professional tax paid is deductible under Income Tax", icon: "M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2zM10 8.5a.5.5 0 11-1 0 .5.5 0 011 0zm5 5a.5.5 0 11-1 0 .5.5 0 011 0z" },
      { title: "Dual Registration", desc: "Employer (PTEC) and Employee (PTRC) certificates", icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" },
      { title: "Compliance Required", desc: "Monthly/annual returns based on state rules", icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" }
    ],
    
    process: [
      { title: "Identify State", desc: "Determine applicable state and PT rules" },
      { title: "Document Preparation", desc: "Gather PAN, incorporation documents, address proof" },
      { title: "Online Application", desc: "Submit application on state PT portal" },
      { title: "Certificate Issued", desc: "Receive PTEC/PTRC certificate within 7-15 days" }
    ],
    
    benefits: [
      { title: "Legal Compliance", desc: "Avoid penalties and legal issues" },
      { title: "Employee Onboarding", desc: "Required for formal employment documentation" },
      { title: "Tender Eligibility", desc: "Often required for government contracts" },
      { title: "Income Tax Benefit", desc: "Professional tax is deductible from income" },
      { title: "Multi-State Support", desc: "Registration across all applicable states" },
      { title: "Ongoing Compliance", desc: "Return filing and payment assistance" }
    ],
    
    faqs: [
      { q: "Which states levy Professional Tax?", a: "Professional Tax is levied in Maharashtra, Karnataka, West Bengal, Andhra Pradesh, Telangana, Tamil Nadu, Gujarat, Madhya Pradesh, Kerala, Bihar, Jharkhand, Odisha, Assam, and Tripura." },
      { q: "What is PTEC and PTRC?", a: "PTEC (Professional Tax Enrollment Certificate) is for self-employed professionals. PTRC (Professional Tax Registration Certificate) is for employers who deduct and deposit PT on behalf of employees." },
      { q: "When is Professional Tax due?", a: "Monthly payment and return filing is required in most states, by 15th-20th of the following month. Some states allow quarterly filing for small employers." },
      { q: "What are the penalties for non-compliance?", a: "Late payment attracts interest (1-2% per month). Penalty for not registering can be ₹5,000 or more. Continued non-compliance may lead to prosecution." },
      { q: "Is Professional Tax applicable to all employees?", a: "PT is applicable based on salary slabs defined by each state. Generally, employees earning below ₹10,000-15,000 monthly may be exempt depending on state rules." }
    ],
    
    relatedServices: [
      { label: "Payroll Processing", desc: "Salary management", href: "/services/payroll-processing" },
      { label: "PF Filing", desc: "Employee benefits", href: "/services/pf-filing" },
      { label: "ESI Filing", desc: "Insurance compliance", href: "/services/esi-filing" },
      { label: "TDS Returns", desc: "Tax deduction", href: "/services/tds-returns" }
    ]
  };

  return <ServicePageTemplate {...pageData} />;
};

export default ProfessionalTax;
