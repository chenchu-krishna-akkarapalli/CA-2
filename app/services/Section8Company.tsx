import React from 'react';
import ServicePageTemplate from '../../components/ServicePageTemplate';

const Section8Company = () => {
  const pageData = {
    serviceName: "Section 8 Company",
    heroImage: "/hero-img/hero-2.avif",
    heroTitle: "Section 8 Company Registration",
    heroSubtitle: "Establish a non-profit organization with charitable or social objectives. Perfect for NGOs, foundations, and social enterprises.",
    
    description: `Section 8 Company is a not-for-profit organization registered under the Companies Act, 2013, formed for promoting commerce, art, science, sports, education, research, social welfare, religion, charity, protection of environment, or any such useful object.

Unlike other companies, Section 8 companies cannot distribute dividends to their members. All profits must be applied towards promoting the company's objectives. The word 'Limited' or 'Private Limited' is not required to be added to the name, giving it a more professional appearance.

Section 8 companies enjoy several benefits including tax exemptions under Section 12A and 80G of Income Tax Act (upon registration), credibility among donors and stakeholders, and perpetual existence. They are preferred over trusts and societies due to better governance structure and regulatory framework.`,
    
    keyHighlights: [
      { title: "Tax Exemptions", desc: "Eligible for 12A and 80G registration for tax benefits", icon: "M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2zM10 8.5a.5.5 0 11-1 0 .5.5 0 011 0zm5 5a.5.5 0 11-1 0 .5.5 0 011 0z" },
      { title: "No 'Limited' Suffix", desc: "Company name appears more professional without Limited", icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" },
      { title: "Government Grants", desc: "Eligible to receive grants from government and foreign sources", icon: "M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" },
      { title: "Limited Liability", desc: "Members have limited liability as in private companies", icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" },
      { title: "Credibility", desc: "Regulated structure builds trust with donors and stakeholders", icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" },
      { title: "CSR Funding", desc: "Eligible to receive CSR funds from corporate companies", icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" }
    ],
    
    process: [
      { title: "Get DSC & DIN", desc: "Obtain Digital Signature and Director Identification for directors" },
      { title: "Name Approval", desc: "Apply for name with INC-1 form indicating charitable object" },
      { title: "License Application", desc: "Submit INC-12 for Section 8 license from Regional Director" },
      { title: "Incorporation", desc: "File SPICe+ form after receiving license approval" }
    ],
    
    benefits: [
      { title: "Social Impact", desc: "Create meaningful change in society through organized efforts" },
      { title: "Donor Confidence", desc: "Corporate structure instills confidence in donors and supporters" },
      { title: "Foreign Funding", desc: "With FCRA registration, can receive foreign contributions" },
      { title: "Perpetual Existence", desc: "Organization continues regardless of member changes" },
      { title: "Expert Assistance", desc: "We guide you through the entire registration process" },
      { title: "Post-Registration Support", desc: "Help with 12A, 80G, and FCRA registrations" }
    ],
    
    faqs: [
      { q: "What are the objects for which Section 8 Company can be formed?", a: "Section 8 Company can be formed for promoting commerce, art, science, sports, education, research, social welfare, religion, charity, protection of environment, or any other useful object." },
      { q: "What is the minimum number of members required?", a: "For Section 8 Private Company - minimum 2 members and 2 directors. For Section 8 Public Company - minimum 7 members and 3 directors." },
      { q: "Can Section 8 Company distribute profits?", a: "No, Section 8 Company cannot distribute dividends or profits to its members. All income must be used for promoting the company's charitable objectives." },
      { q: "How is Section 8 Company different from Trust or Society?", a: "Section 8 Company has better governance framework, centralized registration under MCA, easier to establish branches, and provides more credibility to donors and stakeholders." },
      { q: "What are the annual compliances for Section 8 Company?", a: "Section 8 Company needs to file annual returns, financial statements with ROC, and income tax returns. It must also maintain proper books of accounts and conduct board meetings." }
    ],
    
    relatedServices: [
      { label: "12A & 80G Registration", desc: "Tax exemptions", href: "/services/income-tax-return" },
      { label: "Private Limited Company", desc: "For-profit structure", href: "/services/private-limited-company" },
      { label: "GST Registration", desc: "Tax compliance", href: "/services/gst-registration" },
      { label: "Annual Compliance", desc: "ROC filings", href: "/services/roc-compliance" }
    ]
  };

  return <ServicePageTemplate {...pageData} />;
};

export default Section8Company;
