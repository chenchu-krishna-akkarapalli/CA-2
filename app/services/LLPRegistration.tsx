import React from 'react';
import ServicePageTemplate from '../../components/ServicePageTemplate';

const LLPRegistration = () => {
  const pageData = {
    serviceName: "Limited Liability Partnership",
    heroImage: "/hero-img/hero-2.avif",
    heroTitle: "LLP Registration in India",
    heroSubtitle: "Combine the benefits of partnership with limited liability protection. Perfect for professionals, consultants, and small businesses.",
    
    description: `A Limited Liability Partnership (LLP) is a hybrid business structure that combines the flexibility of a partnership with the advantages of limited liability. Introduced in India through the LLP Act, 2008, it has become a popular choice for professionals and small businesses.

In an LLP, partners have limited liability, meaning their personal assets are protected from business debts. Unlike a traditional partnership, partners are not liable for the negligence or misconduct of other partners. This makes LLP an attractive option for professionals like CAs, lawyers, and consultants.

LLPs offer operational flexibility with minimal compliance requirements compared to private limited companies. There's no requirement for minimum capital contribution, and the internal governance is determined by the LLP Agreement. LLPs also enjoy pass-through taxation, avoiding the double taxation faced by companies.`,
    
    keyHighlights: [
      { title: "Limited Liability", desc: "Partners' personal assets are protected from business liabilities", icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" },
      { title: "No Minimum Capital", desc: "Start your LLP with any amount of capital contribution", icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
      { title: "Easy Compliance", desc: "Fewer regulatory requirements compared to private companies", icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" },
      { title: "Tax Benefits", desc: "No dividend distribution tax and lower audit threshold", icon: "M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" },
      { title: "Flexible Structure", desc: "LLP Agreement can be customized as per partners' needs", icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" },
      { title: "Professional Image", desc: "Separate legal entity status enhances business credibility", icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" }
    ],
    
    process: [
      { title: "Get DSC & DPIN", desc: "Obtain Digital Signature Certificate and Designated Partner Identification Number" },
      { title: "Name Reservation", desc: "Apply for LLP name through RUN-LLP form on MCA portal" },
      { title: "File FiLLiP Form", desc: "Submit incorporation form with LLP Agreement and partner details" },
      { title: "Certificate Issued", desc: "Receive Certificate of Incorporation with LLPIN" }
    ],
    
    benefits: [
      { title: "Ideal for Professionals", desc: "Perfect structure for CAs, lawyers, architects, and consultants" },
      { title: "No Audit Required", desc: "Audit not mandatory if turnover below â‚¹40 lakhs and capital below â‚¹25 lakhs" },
      { title: "Easy Conversion", desc: "Can be easily converted to Private Limited Company when needed" },
      { title: "Lower Compliance Cost", desc: "Only 2 annual filings required - Form 11 and Form 8" },
      { title: "Expert Guidance", desc: "Our team handles the entire registration process" },
      { title: "Quick Turnaround", desc: "Get your LLP registered in 10-15 working days" }
    ],
    
    faqs: [
      { q: "What is the minimum number of partners required for LLP?", a: "A minimum of 2 designated partners are required to form an LLP. There is no maximum limit on the number of partners." },
      { q: "Can a company or LLP be a partner in another LLP?", a: "Yes, a body corporate including a company or another LLP can become a partner in an LLP through its nominee." },
      { q: "Is there any minimum capital requirement?", a: "No, there is no minimum capital requirement for LLP registration. You can start with any amount of contribution." },
      { q: "What are the annual compliance requirements for LLP?", a: "LLPs need to file Form 11 (Annual Return) and Form 8 (Statement of Account & Solvency) annually. Income Tax Return filing is also mandatory." },
      { q: "Can an LLP be converted to a Private Limited Company?", a: "Yes, an LLP can be converted to a Private Limited Company under Section 366 of the Companies Act, 2013." }
    ],
    
    relatedServices: [
      { label: "Private Limited Company", desc: "Most preferred structure", href: "/services/private-limited-company" },
      { label: "Partnership Firm", desc: "Traditional partnership", href: "/services/partnership-firm" },
      { label: "GST Registration", desc: "Tax compliance", href: "/services/gst-registration" },
      { label: "Professional Tax", desc: "State tax registration", href: "/services/professional-tax" }
    ]
  };

  return <ServicePageTemplate {...pageData} />;
};

export default LLPRegistration;
