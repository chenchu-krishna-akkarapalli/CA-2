import React from 'react';
import ServicePageTemplate from '../../components/ServicePageTemplate';

const NidhiCompany = () => {
  const pageData = {
    serviceName: "Nidhi Company",
    heroImage: "/hero-img/hero-3.avif",
    heroTitle: "Nidhi Company Registration",
    heroSubtitle: "Start your own savings and lending company. A mutual benefit society to cultivate thrift and savings among members.",
    
    description: `Nidhi Company is a type of Non-Banking Financial Company (NBFC) recognized under Section 406 of the Companies Act, 2013. It is formed for cultivating the habit of thrift and savings amongst its members, receiving deposits from members, and lending to members for their mutual benefit.

Nidhi Companies are popular in South India and operate on the principle of mutual benefit. Members deposit their savings and can borrow at reasonable interest rates. Unlike other NBFCs, Nidhi Companies don't need RBI registration as they are exempt from core provisions of RBI Act.

The key advantage of Nidhi Company is that it can only accept deposits from and lend to its members. This makes it a safe and trusted model for community-based financial services. Nidhi Companies enjoy several exemptions from NBFC regulations while maintaining a structured governance framework.`,
    
    keyHighlights: [
      { title: "No RBI Registration", desc: "Exempt from RBI's NBFC regulations and requirements", icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" },
      { title: "Member-Only Operations", desc: "Accept deposits and provide loans only to members", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" },
      { title: "Mutual Benefit", desc: "Members help each other through savings and lending", icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" },
      { title: "Safe Investment", desc: "Regulated structure ensures safety of member deposits", icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" },
      { title: "Lower Compliance", desc: "Simpler compliance compared to other NBFCs", icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" },
      { title: "Community Focus", desc: "Ideal for serving local community financial needs", icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" }
    ],
    
    process: [
      { title: "DSC & DIN", desc: "Obtain Digital Signature and DIN for all 7 directors" },
      { title: "Name Approval", desc: "Apply for name ending with 'Nidhi Limited' through RUN" },
      { title: "Incorporation", desc: "File SPICe+ with minimum 7 members and â‚¹10 lakh capital" },
      { title: "NDH-4 Filing", desc: "Apply for Nidhi status declaration to Central Government" }
    ],
    
    benefits: [
      { title: "Financial Inclusion", desc: "Serve unbanked and underbanked communities" },
      { title: "Flexible Lending", desc: "Provide loans at reasonable rates to members" },
      { title: "Trust Building", desc: "Members trust the mutual benefit model" },
      { title: "Growth Potential", desc: "Expand membership and operations over time" },
      { title: "Complete Guidance", desc: "Expert support throughout registration process" },
      { title: "Compliance Support", desc: "Help with annual filings and member management" }
    ],
    
    faqs: [
      { q: "What is the minimum capital requirement for Nidhi Company?", a: "Minimum paid-up equity share capital of â‚¹10 lakhs is required at the time of incorporation." },
      { q: "How many members and directors are needed?", a: "Minimum 7 members (who are also shareholders) and 3 directors are required. Members can also be directors." },
      { q: "Can Nidhi Company accept deposits from non-members?", a: "No, Nidhi Company can only accept deposits from and provide loans to its members. Non-members cannot transact." },
      { q: "What is the maximum interest rate Nidhi Company can charge?", a: "Nidhi Company can charge maximum 7.5% above the highest rate of interest offered on deposits. The rate must be disclosed to members." },
      { q: "What are the annual compliance requirements?", a: "Nidhi Company must file Form NDH-1 (half-yearly return), NDH-3 (if applicable), annual financial statements, and annual return with ROC." }
    ],
    
    relatedServices: [
      { label: "Private Limited Company", desc: "Corporate structure", href: "/services/private-limited-company" },
      { label: "Producer Company", desc: "Member-based entity", href: "/services/producer-company" },
      { label: "ROC Compliance", desc: "Annual filings", href: "/services/roc-compliance" },
      { label: "GST Registration", desc: "Tax compliance", href: "/services/gst-registration" }
    ]
  };

  return <ServicePageTemplate {...pageData} />;
};

export default NidhiCompany;
