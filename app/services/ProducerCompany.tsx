import React from 'react';
import ServicePageTemplate from '../../components/ServicePageTemplate';

const ProducerCompany = () => {
  const pageData = {
    serviceName: "Producer Company",
    heroImage: "/hero-img/hero-2.png",
    heroTitle: "Producer Company Registration",
    heroSubtitle: "Organize producers for collective benefit. Perfect for farmers, artisans, and cooperatives seeking corporate structure.",
    
    description: `Producer Company is a hybrid between a cooperative society and a company, introduced to give producers the benefits of a corporate structure while maintaining cooperative principles. Governed by Part IXA of the Companies Act, 1956 (retained under 2013 Act), it allows primary producers to pool resources and market their products collectively.

Producer Companies are ideal for farmers, fishermen, weavers, artisans, and rural craftsmen who want to eliminate middlemen and get better prices for their produce. Members can be individual producers, producer institutions, or a combination of both.

The advantages include better bargaining power, access to credit facilities, government schemes eligibility, and professional management structure. Unlike cooperatives, Producer Companies have nationwide operations, easier capital raising, and are free from political interference.`,
    
    keyHighlights: [
      { title: "Farmer Empowerment", desc: "Help farmers and producers get better market prices", icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
      { title: "Government Benefits", desc: "Eligible for various government schemes and subsidies", icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" },
      { title: "Easy Credit", desc: "Better access to bank loans and financial institutions", icon: "M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" },
      { title: "Limited Liability", desc: "Members' liability limited to their shareholding", icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" },
      { title: "Democratic Control", desc: "One member one vote principle ensures fair governance", icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" },
      { title: "Nationwide Operations", desc: "Not restricted to state boundaries unlike cooperatives", icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" }
    ],
    
    process: [
      { title: "DSC & DIN", desc: "Obtain Digital Signature and DIN for 5+ producer directors" },
      { title: "Name Approval", desc: "Apply for name ending with 'Producer Company Limited'" },
      { title: "Draft Documents", desc: "Prepare MOA, AOA with objects related to production activities" },
      { title: "Incorporation", desc: "File SPICe+ with minimum 10 producer members" }
    ],
    
    benefits: [
      { title: "Collective Bargaining", desc: "Better negotiation power with buyers and suppliers" },
      { title: "Quality Control", desc: "Ensure product quality standards across members" },
      { title: "Market Access", desc: "Direct access to markets eliminating middlemen" },
      { title: "Technology Sharing", desc: "Share resources and modern farming techniques" },
      { title: "Expert Registration", desc: "Complete assistance with formation process" },
      { title: "Ongoing Support", desc: "Help with compliance and member management" }
    ],
    
    faqs: [
      { q: "Who can be a member of Producer Company?", a: "Any producer (individual engaged in primary produce like farming, fishing, handicrafts), or any Producer Institution (cooperative society, federation, etc.) can be a member." },
      { q: "What is the minimum requirement to form Producer Company?", a: "Minimum 10 individual producers or 2 producer institutions are required. There must be at least 5 directors." },
      { q: "What activities can Producer Company undertake?", a: "Production, procurement, grading, pooling, processing, manufacturing, marketing of primary produce. Also import/export, insurance, credit facilities, and technical services." },
      { q: "Can Producer Company distribute dividends?", a: "Yes, limited dividend (patronage bonus) can be distributed based on participation of members in the business, not just shareholding." },
      { q: "What is the difference between Producer Company and Cooperative?", a: "Producer Company operates nationwide, has professional management, easier to raise capital, less government interference, and follows company law compliance framework." }
    ],
    
    relatedServices: [
      { label: "Private Limited Company", desc: "Corporate structure", href: "/services/private-limited-company" },
      { label: "Section 8 Company", desc: "Non-profit entity", href: "/services/section-8-company" },
      { label: "FSSAI License", desc: "Food business", href: "/services/fssai-license" },
      { label: "Import Export Code", desc: "Export products", href: "/services/import-export-code" }
    ]
  };

  return <ServicePageTemplate {...pageData} />;
};

export default ProducerCompany;
