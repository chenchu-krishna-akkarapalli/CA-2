import React from 'react';
import ServicePageTemplate from '../../components/ServicePageTemplate';

const OnePersonCompany = () => {
  const pageData = {
    serviceName: "One Person Company",
    heroImage: "/hero-img/hero-1.avif",
    heroTitle: "One Person Company (OPC) Registration",
    heroSubtitle: "Start your business as a single entrepreneur with the benefits of a private limited company. Full control with limited liability.",
    
    description: `One Person Company (OPC) is a revolutionary business structure introduced by the Companies Act, 2013, allowing a single entrepreneur to operate a corporate entity. It's the perfect blend of sole proprietorship flexibility and corporate advantages.

An OPC requires only one shareholder and one director (who can be the same person), making it ideal for solo entrepreneurs who want to establish a formal business structure. The owner gets limited liability protection while enjoying complete control over business decisions.

OPC offers all benefits of a private limited company including separate legal entity status, perpetual succession, and enhanced credibility. Recent amendments have removed the â‚¹2 crore turnover ceiling, making it more attractive for growing businesses. After 2 years, OPC can voluntarily convert to Private Limited Company or LLP.`,
    
    keyHighlights: [
      { title: "Single Ownership", desc: "Only one person required to form and run the company", icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" },
      { title: "Limited Liability", desc: "Personal assets protected from business debts", icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" },
      { title: "Easy Compliance", desc: "Lesser regulatory requirements than private limited", icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" },
      { title: "Complete Control", desc: "No interference from other shareholders or directors", icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" },
      { title: "Perpetual Succession", desc: "Business continues even if owner passes away", icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" },
      { title: "No AGM Required", desc: "Deemed approval for resolutions, no formal meetings needed", icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" }
    ],
    
    process: [
      { title: "Get DSC & DIN", desc: "Obtain Digital Signature Certificate and Director Identification Number" },
      { title: "Name Approval", desc: "Apply for company name through SPICe+ Part A form" },
      { title: "Submit SPICe+ Form", desc: "File incorporation form with MOA, AOA and nominee details" },
      { title: "Certificate Issued", desc: "Receive Incorporation Certificate with CIN number" }
    ],
    
    benefits: [
      { title: "Single Entrepreneur", desc: "Perfect for solo entrepreneurs wanting corporate structure" },
      { title: "Bank Loan Eligible", desc: "Corporate status helps in getting business loans" },
      { title: "Tax Benefits", desc: "Eligible for startup tax exemptions under Section 80IAC" },
      { title: "Easy Conversion", desc: "Can convert to Pvt Ltd when business grows" },
      { title: "Professional Support", desc: "Our experts handle complete registration process" },
      { title: "Quick Processing", desc: "Get incorporated in 7-10 working days" }
    ],
    
    faqs: [
      { q: "Who can form a One Person Company?", a: "Only a natural person who is an Indian citizen and resident in India can form an OPC. NRIs and foreign nationals cannot incorporate an OPC." },
      { q: "What is the role of a nominee in OPC?", a: "A nominee is required who will become the member of OPC in case of death or incapacity of the original member. The nominee must also be an Indian citizen and resident." },
      { q: "What are the minimum capital requirements?", a: "There is no minimum capital requirement for OPC. You can start with any amount of authorized and paid-up capital." },
      { q: "Can OPC be converted to Private Limited Company?", a: "Yes, OPC can be voluntarily converted to Private Limited Company after 2 years from incorporation, or mandatorily if paid-up capital exceeds â‚¹50 lakhs or turnover exceeds â‚¹2 crores." },
      { q: "What are the compliance requirements for OPC?", a: "OPC needs to file annual return, financial statements, and income tax return. Board meetings are not mandatory, and resolutions are deemed passed when signed by the director." }
    ],
    
    relatedServices: [
      { label: "Private Limited Company", desc: "Multiple shareholders", href: "/services/private-limited-company" },
      { label: "Sole Proprietorship", desc: "Simplest structure", href: "/services/sole-proprietorship" },
      { label: "GST Registration", desc: "Tax compliance", href: "/services/gst-registration" },
      { label: "Trademark Registration", desc: "Brand protection", href: "/services/trademark" }
    ]
  };

  return <ServicePageTemplate {...pageData} />;
};

export default OnePersonCompany;
