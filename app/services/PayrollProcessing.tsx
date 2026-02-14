import React from 'react';
import ServicePageTemplate from '../../components/ServicePageTemplate';

const PayrollProcessing = () => {
  const pageData = {
    serviceName: "Payroll Processing",
    heroImage: "/hero-img/hero-2.png",
    heroTitle: "Payroll Processing Services",
    heroSubtitle: "End-to-end salary management for your business. From computation to compliance, we handle everything.",
    
    description: `Payroll Processing is a comprehensive service covering salary computation, statutory deductions, payslip generation, and compliance management. Accurate and timely payroll is crucial for employee satisfaction and regulatory compliance.

Our payroll services include salary structure design, monthly processing, TDS computation, PF/ESI calculations, professional tax deductions, reimbursement management, and generation of payslips, Form 16, and full & final settlements.

Outsourcing payroll to experts saves time, reduces errors, ensures compliance with labor laws, and lets you focus on core business. We use secure systems and maintain strict confidentiality of employee data.`,
    
    keyHighlights: [
      { title: "Salary Computation", desc: "Accurate calculation of gross and net pay", icon: "M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" },
      { title: "Statutory Compliance", desc: "PF, ESI, PT, TDS all handled", icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" },
      { title: "Payslip Generation", desc: "Professional digital payslips", icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" },
      { title: "Form 16 Issuance", desc: "Annual TDS certificates for employees", icon: "M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" },
      { title: "Leave & Attendance", desc: "Leave balance and LOP calculations", icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" },
      { title: "Full & Final", desc: "Exit settlements and clearance", icon: "M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" }
    ],
    
    process: [
      { title: "Data Input", desc: "Receive attendance, leaves, and variable inputs" },
      { title: "Processing", desc: "Calculate gross, deductions, and net pay" },
      { title: "Validation", desc: "Review and get client approval" },
      { title: "Disbursement", desc: "Generate payslips and bank file" }
    ],
    
    benefits: [
      { title: "Time Savings", desc: "Free internal resources" },
      { title: "Accuracy", desc: "Error-free calculations" },
      { title: "Compliance", desc: "All statutory needs met" },
      { title: "Confidentiality", desc: "Secure data handling" },
      { title: "Scalability", desc: "Grows with your team" },
      { title: "Expert Support", desc: "HR and tax specialists" }
    ],
    
    faqs: [
      { q: "What information do you need for payroll?", a: "We need employee master data (name, PAN, bank details), salary structure, attendance/leave data, variable inputs (incentives, overtime), and any changes (new hires, exits, increments)." },
      { q: "By when do we receive payslips?", a: "Payslips are generated within 2 working days of receiving approved inputs. We recommend finalizing inputs by 25th to process salary by month-end." },
      { q: "Do you handle payroll for contract staff?", a: "Yes, we handle payroll for permanent employees, contract staff, consultants, and retainers. Each category can have different salary structures and compliance requirements." },
      { q: "How is data security ensured?", a: "We use encrypted systems, secure servers, restricted access controls, and sign NDAs. Employee data is handled with strict confidentiality and is never shared with third parties." },
      { q: "Can you customize salary structure?", a: "Yes, we design tax-efficient salary structures with optimal mix of basic, HRA, special allowances, reimbursements, and flexible benefits based on your company policy." }
    ],
    
    relatedServices: [
      { label: "PF Filing", desc: "Provident fund", href: "/services/pf-filing" },
      { label: "ESI Filing", desc: "Employee insurance", href: "/services/esi-filing" },
      { label: "TDS Returns", desc: "Salary TDS", href: "/services/tds-returns" },
      { label: "Professional Tax", desc: "PT registration", href: "/services/professional-tax" }
    ]
  };

  return <ServicePageTemplate {...pageData} />;
};

export default PayrollProcessing;
