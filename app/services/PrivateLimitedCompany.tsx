import React from 'react';
import ServicePageTemplate from '../../components/ServicePageTemplate';

const PrivateLimitedCompany = () => {
  const pageData = {
    serviceName: "Private Limited Company",
    heroImage: "/hero-img/hero-1.avif",
    heroTitle: "Private Limited Company Registration",
    heroSubtitle: "Start your entrepreneurial journey with India's most preferred business structure. Get your Pvt Ltd company registered in just 7-10 working days.",

    description: `A Private Limited Company is the most popular form of business entity in India, preferred by startups, small businesses, and growing enterprises. It offers limited liability protection to shareholders while providing flexibility in operations and access to funding.

Under the Companies Act, 2013, a Private Limited Company is a separate legal entity distinct from its owners. This means the company can own property, enter into contracts, sue or be sued in its own name. The liability of shareholders is limited to the extent of their shareholding.

Private Limited Companies are ideal for businesses planning to raise funding from investors, as they can easily issue shares and attract venture capital. The credibility of a Pvt Ltd company also makes it easier to get loans from banks and financial institutions.`,

    keyHighlights: [
      { title: "Limited Liability", desc: "Personal assets of shareholders are protected from business debts and liabilities", icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" },
      { title: "Separate Legal Entity", desc: "Company exists independently from its owners with perpetual succession", icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" },
      { title: "Easy Funding", desc: "Attract investors and raise capital through equity shares easily", icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
      { title: "Tax Benefits", desc: "Lower corporate tax rates and various deductions available", icon: "M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" },
      { title: "Credibility", desc: "Enhanced brand image and trust among customers and vendors", icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" },
      { title: "Perpetual Existence", desc: "Company continues to exist regardless of changes in ownership", icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" }
    ],

    process: [
      { title: "Get DSC & DIN", desc: "Obtain Digital Signature Certificate and Director Identification Number for all directors" },
      { title: "Name Approval", desc: "Apply for company name approval through RUN (Reserve Unique Name) portal" },
      { title: "File SPICe+ Form", desc: "Submit incorporation form with MOA, AOA, and required documents" },
      { title: "Get Certificate", desc: "Receive Certificate of Incorporation with PAN, TAN, and GSTIN" }
    ],

    benefits: [
      { title: "Quick Registration", desc: "Complete registration in 7-10 working days with our expert assistance" },
      { title: "100% Online Process", desc: "Entirely paperless process with digital signatures and e-filing" },
      { title: "Expert Support", desc: "Dedicated professionals to guide you through every step" },
      { title: "Post-Incorporation Support", desc: "Help with bank account opening, GST registration, and compliance setup" },
      { title: "Affordable Pricing", desc: "Transparent pricing with no hidden charges" },
      { title: "Compliance Calendar", desc: "Free compliance calendar to track all your filing deadlines" }
    ],

    faqs: [
      { q: "What is the minimum capital required to start a Private Limited Company?", a: "There is no minimum capital requirement to start a Private Limited Company in India. You can start with any amount of authorized capital. However, we recommend starting with at least â‚¹1 lakh authorized capital for better credibility." },
      { q: "How many directors and shareholders are required?", a: "A minimum of 2 directors and 2 shareholders are required. The maximum number of directors can be 15 (can be increased with special resolution), and the maximum shareholders can be 200." },
      { q: "Can NRIs or foreign nationals be directors?", a: "Yes, NRIs and foreign nationals can be directors in an Indian Private Limited Company. However, at least one director must be a resident of India (stayed in India for 182+ days in the previous calendar year)." },
      { q: "How long does it take to register a Private Limited Company?", a: "With all documents in place, the registration typically takes 7-10 working days. This includes DSC issuance (1-2 days), name approval (2-3 days), and certificate of incorporation (4-5 days)." },
      { q: "What are the annual compliance requirements?", a: "Annual compliances include filing Annual Return (MGT-7), Financial Statements (AOC-4), Income Tax Return, and conducting at least 4 board meetings per year. GST returns are required if registered under GST." }
    ],

    relatedServices: [
      { label: "LLP Registration", desc: "Flexible partnership structure", href: "/services/llp" },
      { label: "One Person Company", desc: "Single owner structure", href: "/services/opc" },
      { label: "GST Registration", desc: "Tax compliance", href: "/services/gst-registration" },
      { label: "Trademark", desc: "Brand protection", href: "/services/trademark" }
    ]
  };

  return <ServicePageTemplate {...pageData} />;
};

export default PrivateLimitedCompany;
