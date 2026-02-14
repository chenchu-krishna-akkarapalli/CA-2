import React from 'react';
import ServicePageTemplate from '../../components/ServicePageTemplate';

const TDSReturns = () => {
  const pageData = {
    serviceName: "TDS Returns",
    heroImage: "/hero-img/hero-1.png",
    heroTitle: "TDS Return Filing Services",
    heroSubtitle: "Quarterly TDS compliance made easy. Accurate filing, timely submission, and proper TDS certificate generation.",
    
    description: `TDS (Tax Deducted at Source) Return filing is mandatory for all deductors who have a TAN number. TDS returns report details of tax deducted from payments like salary, rent, professional fees, contractor payments, interest, and more.

Four types of TDS returns must be filed quarterly: 24Q (salary), 26Q (non-salary payments to residents), 27Q (payments to non-residents), and 26QB (property transactions). Each return has specific due dates and failure to file attracts penalties.

Accurate TDS return filing ensures that employees and vendors receive credit in their Form 26AS, enabling them to claim TDS while filing their income tax returns. We handle the complete TDS cycle from deduction to certificate generation.`,
    
    keyHighlights: [
      { title: "All Return Types", desc: "24Q, 26Q, 27Q, and 27EQ filing", icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" },
      { title: "Form 16/16A", desc: "Generate TDS certificates for employees and vendors", icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" },
      { title: "Timely Filing", desc: "Never miss quarterly deadlines", icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" },
      { title: "26AS Reflection", desc: "Ensure TDS reflects in deductees' Form 26AS", icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" },
      { title: "Lower TDS", desc: "Apply for lower TDS certificates where applicable", icon: "M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2zM10 8.5a.5.5 0 11-1 0 .5.5 0 011 0zm5 5a.5.5 0 11-1 0 .5.5 0 011 0z" },
      { title: "Correction Returns", desc: "File correction statements for errors", icon: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" }
    ],
    
    process: [
      { title: "Data Collection", desc: "Gather deduction details, PAN of deductees" },
      { title: "Return Preparation", desc: "Prepare return with TDS rates verification" },
      { title: "Filing", desc: "File on TRACES portal with DSC" },
      { title: "Certificate Generation", desc: "Download and distribute Form 16/16A" }
    ],
    
    benefits: [
      { title: "Avoid Penalties", desc: "Late filing fee ₹200/day, up to TDS amount" },
      { title: "No Interest Burden", desc: "Timely deposit prevents 1.5% monthly interest" },
      { title: "Employee Satisfaction", desc: "Timely Form 16 for their ITR filing" },
      { title: "Vendor Relations", desc: "Proper TDS certificates maintain good relations" },
      { title: "Expert Team", desc: "Dedicated TDS specialists for accuracy" },
      { title: "Year-Round Support", desc: "Handle notices and assessments" }
    ],
    
    faqs: [
      { q: "What are the due dates for TDS returns?", a: "Q1 (Apr-Jun): 31st July. Q2 (Jul-Sep): 31st October. Q3 (Oct-Dec): 31st January. Q4 (Jan-Mar): 31st May. Government deductors have extended dates." },
      { q: "What is the penalty for late TDS filing?", a: "Late filing fee of ₹200 per day until return is filed, up to the amount of TDS. Plus penalty up to ₹1 lakh under section 271H." },
      { q: "What is the interest on late TDS deposit?", a: "1% per month if TDS not deducted, 1.5% per month if deducted but not deposited. Interest calculated from due date to actual deposit date." },
      { q: "When should Form 16 be issued?", a: "Form 16 must be issued to employees by June 15th every year. Form 16A should be issued within 15 days from the due date of filing TDS return." },
      { q: "Can TDS returns be revised?", a: "Yes, correction statements can be filed on TRACES for errors in PAN, amount, challan details, etc. There's no time limit for corrections." }
    ],
    
    relatedServices: [
      { label: "TAN Registration", desc: "Get TAN", href: "/services/tan-registration" },
      { label: "Payroll Processing", desc: "Salary management", href: "/services/payroll-processing" },
      { label: "Income Tax Return", desc: "ITR filing", href: "/services/income-tax-return" },
      { label: "Professional Tax", desc: "State tax", href: "/services/professional-tax" }
    ]
  };

  return <ServicePageTemplate {...pageData} />;
};

export default TDSReturns;
