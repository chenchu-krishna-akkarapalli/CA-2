import React from 'react';
import ServicePageTemplate from '../../components/ServicePageTemplate';

const IndianSubsidiary = () => {
  const pageData = {
    serviceName: "Indian Subsidiary",
    heroImage: "/hero-img/hero-1.png",
    heroTitle: "Indian Subsidiary Company Registration",
    heroSubtitle: "Establish your foreign company's presence in India. The gateway to tap into India's massive market potential.",
    
    description: `An Indian Subsidiary is a company incorporated in India where a foreign company holds more than 50% of its share capital. This structure allows foreign companies to establish a strong presence in India while benefiting from limited liability protection.

Setting up an Indian Subsidiary is the most popular choice for foreign companies looking to enter the Indian market. The subsidiary operates as a separate legal entity from its parent company, with its own compliances under Indian laws including the Companies Act, 2013, FEMA regulations, and tax laws.

Foreign Direct Investment (FDI) in Indian subsidiaries is permitted under automatic route for most sectors. The subsidiary can be 100% foreign-owned in sectors where 100% FDI is allowed, making India an attractive destination for global businesses.`,
    
    keyHighlights: [
      { title: "Separate Legal Entity", desc: "Limited liability protection for parent company", icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" },
      { title: "100% FDI Allowed", desc: "Full foreign ownership in most sectors", icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
      { title: "Automatic Route", desc: "No prior government approval needed for most sectors", icon: "M13 10V3L4 14h7v7l9-11h-7z" },
      { title: "Repatriation Rights", desc: "Profits can be repatriated to parent company", icon: "M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" },
      { title: "Indian Market Access", desc: "Tap into 1.4 billion consumer market", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" },
      { title: "Tax Benefits", desc: "Eligible for various tax incentives and DTAA benefits", icon: "M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" }
    ],
    
    process: [
      { title: "DIN for Directors", desc: "Obtain DIN for Indian and foreign directors" },
      { title: "Name Approval", desc: "Reserve company name through SPICe+ Part A" },
      { title: "Incorporation", desc: "File SPICe+ with FDI declarations and NOC from parent" },
      { title: "Post-Incorporation", desc: "RBI filings, bank account, GST and other registrations" }
    ],
    
    benefits: [
      { title: "Brand Extension", desc: "Extend parent company's brand presence in India" },
      { title: "Local Operations", desc: "Hire local talent and operate locally" },
      { title: "Easy Funding", desc: "Receive funds from parent company as equity or loans" },
      { title: "Government Incentives", desc: "Access to various state and central incentives" },
      { title: "Expert Guidance", desc: "End-to-end support including FEMA compliance" },
      { title: "Fast Track Process", desc: "Quick incorporation with all regulatory filings" }
    ],
    
    faqs: [
      { q: "What is the minimum capital requirement for Indian Subsidiary?", a: "There is no minimum capital requirement. However, adequate capital should be brought in based on business plans and operational needs." },
      { q: "Can all directors be foreign nationals?", a: "Yes, all directors can be foreign nationals. However, at least one director must be resident in India (stayed in India for 182+ days in previous year)." },
      { q: "What are the RBI compliances for Indian Subsidiary?", a: "The subsidiary must report FDI to RBI through AD Bank using FC-GPR form within 30 days of allotment. Annual Return on Foreign Liabilities and Assets (FLA) is also required." },
      { q: "What is the difference between Subsidiary and Branch Office?", a: "Subsidiary is a separate Indian company with its own legal identity, while Branch Office is an extension of foreign company. Subsidiaries offer better flexibility and limited liability." },
      { q: "Which sectors allow 100% FDI?", a: "Most sectors allow 100% FDI under automatic route including IT, manufacturing, e-commerce (marketplace), etc. Some sectors like defense, telecom have sectoral caps." }
    ],
    
    relatedServices: [
      { label: "FEMA Compliance", desc: "Forex regulations", href: "/services/fema-compliance" },
      { label: "GST Registration", desc: "Tax compliance", href: "/services/gst-registration" },
      { label: "Import Export Code", desc: "Trade license", href: "/services/import-export-code" },
      { label: "ROC Compliance", desc: "Annual filings", href: "/services/roc-compliance" }
    ]
  };

  return <ServicePageTemplate {...pageData} />;
};

export default IndianSubsidiary;
