import React from 'react';
import ServicePageTemplate from '../../components/ServicePageTemplate';

const TANRegistration = () => {
  const pageData = {
    serviceName: "TAN Registration",
    heroImage: "/hero-img/hero-1.avif",
    heroTitle: "TAN Registration Services",
    heroSubtitle: "Tax Deduction and Collection Account Number for businesses required to deduct TDS. Essential for salary payments and vendor payments.",
    
    description: `Tax Deduction and Collection Account Number (TAN) is a 10-digit alphanumeric number required by all persons responsible for deducting or collecting tax at source. TAN is issued by the Income Tax Department under Section 203A of the Income Tax Act, 1961.

Every business that pays salary, rent, professional fees, contractor payments, or makes other specified payments must deduct TDS and deposit it with the government. TAN is mandatory for filing TDS returns, making TDS payments, and issuing TDS certificates (Form 16/16A).

Without TAN, businesses cannot comply with TDS provisions, leading to penalties and disallowance of expenses. We help you obtain TAN quickly and ensure smooth compliance with all TDS regulations.`,
    
    keyHighlights: [
      { title: "TDS Compliance", desc: "Mandatory for all TDS deduction and payment", icon: "M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" },
      { title: "10-Digit Number", desc: "Unique identifier for TDS transactions", icon: "M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" },
      { title: "Online Process", desc: "Quick application through NSDL/TIN portal", icon: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" },
      { title: "Form 16/16A", desc: "Issue TDS certificates to employees and vendors", icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" },
      { title: "Avoid Penalties", desc: "Non-compliance attracts heavy penalties", icon: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" },
      { title: "Return Filing", desc: "Required for quarterly TDS return filing", icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" }
    ],
    
    process: [
      { title: "Fill Form 49B", desc: "Complete TAN application form with business details" },
      { title: "Submit Online", desc: "File application on NSDL-TIN portal with fee payment" },
      { title: "Acknowledgment", desc: "Receive 14-digit acknowledgment number for tracking" },
      { title: "TAN Allotment", desc: "TAN allotted and intimation sent within 15 days" }
    ],
    
    benefits: [
      { title: "Legal Compliance", desc: "Meet statutory obligations for tax deduction" },
      { title: "Employee Payments", desc: "Issue Form 16 to employees for their tax filing" },
      { title: "Vendor Management", desc: "Proper TDS deduction on vendor payments" },
      { title: "Expense Claims", desc: "TDS compliance ensures expense deductibility" },
      { title: "Fast Processing", desc: "TAN allotment in 10-15 days" },
      { title: "Complete Support", desc: "Form filling and submission assistance" }
    ],
    
    faqs: [
      { q: "Who needs to obtain TAN?", a: "Any person (individual, company, firm, etc.) responsible for deducting TDS on payments like salary, rent, professional fees, contract payments, etc. must have TAN." },
      { q: "What is the structure of TAN?", a: "TAN is a 10-character alphanumeric code. First 4 are letters (first 3 represent city/state code), next 5 are numbers, and last is a letter." },
      { q: "Can a person have multiple TANs?", a: "Generally, one TAN per deductor. However, branches in different states may need separate TANs. Multiple TANs for same entity attract penalties." },
      { q: "What is the penalty for not having TAN?", a: "Penalty of â‚¹10,000 can be imposed for not applying for TAN. TDS returns cannot be filed without quoting TAN, leading to further penalties." },
      { q: "What are TAN-related compliance requirements?", a: "Deduct TDS at applicable rates, deposit TDS by due dates, file quarterly TDS returns (24Q, 26Q, 27Q), and issue TDS certificates (Form 16/16A)." }
    ],
    
    relatedServices: [
      { label: "TDS Returns", desc: "Quarterly filings", href: "/services/tds-returns" },
      { label: "Payroll Processing", desc: "Salary management", href: "/services/payroll-processing" },
      { label: "Income Tax Return", desc: "Annual filing", href: "/services/income-tax-return" },
      { label: "GST Registration", desc: "Indirect tax", href: "/services/gst-registration" }
    ]
  };

  return <ServicePageTemplate {...pageData} />;
};

export default TANRegistration;
