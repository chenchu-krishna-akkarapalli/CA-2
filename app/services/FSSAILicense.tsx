import React from 'react';
import ServicePageTemplate from '../../components/ServicePageTemplate';

const FSSAILicense = () => {
  const pageData = {
    serviceName: "FSSAI License",
    heroImage: "/hero-img/hero-2.png",
    heroTitle: "FSSAI Food License Registration",
    heroSubtitle: "Essential license for food business operators. Ensure food safety compliance and build customer trust.",
    
    description: `FSSAI (Food Safety and Standards Authority of India) License is mandatory for all food business operators in India. Under the Food Safety and Standards Act, 2006, any business involved in manufacturing, processing, packaging, storage, transportation, distribution, or sale of food products must obtain FSSAI license.

FSSAI license comes in three categories: Basic Registration (FSSAI Registration) for small businesses with turnover up to ₹12 lakhs, State License for medium businesses with turnover ₹12-20 crores, and Central License for large businesses or those operating in multiple states.

The 14-digit FSSAI license number must be displayed on all food product labels and premises. It ensures that food products meet the safety standards set by FSSAI and gives consumers confidence in the quality and hygiene of food products.`,
    
    keyHighlights: [
      { title: "Legal Requirement", desc: "Mandatory for all food businesses in India", icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" },
      { title: "Consumer Trust", desc: "FSSAI logo builds customer confidence", icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" },
      { title: "E-Commerce Enabled", desc: "Required for selling food online", icon: "M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" },
      { title: "14-Digit License", desc: "Unique identification for food business", icon: "M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" },
      { title: "Quality Standards", desc: "Ensures food meets safety standards", icon: "M4.871 4A17.926 17.926 0 003 12c0 2.874.673 5.59 1.871 8m14.258 0A17.926 17.926 0 0021 12c0-2.874-.673-5.59-1.871-8M9 9h1.246a1 1 0 01.961.725l1.586 5.55a1 1 0 00.961.725H15m1-7h-.08a2 2 0 00-1.519.698L9.6 15.302A2 2 0 018.08 16H8" },
      { title: "Avoid Penalties", desc: "Non-compliance attracts heavy fines", icon: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" }
    ],
    
    process: [
      { title: "Identify License Type", desc: "Determine Basic, State, or Central license requirement" },
      { title: "Document Preparation", desc: "Collect identity proof, address proof, food safety plan" },
      { title: "Online Application", desc: "Submit application on FoSCoS portal with fees" },
      { title: "License Issued", desc: "Receive FSSAI license after inspection (if required)" }
    ],
    
    benefits: [
      { title: "Legal Operations", desc: "Operate food business without legal issues" },
      { title: "Brand Value", desc: "FSSAI certified label adds credibility" },
      { title: "Market Access", desc: "Required for supplying to retailers and hotels" },
      { title: "Export Enabled", desc: "Prerequisite for food export business" },
      { title: "Quick Processing", desc: "License obtained in 15-30 days" },
      { title: "Renewal Support", desc: "Assistance with license renewal" }
    ],
    
    faqs: [
      { q: "Who needs FSSAI license?", a: "Anyone involved in food manufacturing, processing, packaging, storage, transport, distribution, or retail including restaurants, cafes, food trucks, caterers, e-commerce food sellers, and food importers." },
      { q: "What is the validity of FSSAI license?", a: "FSSAI license can be obtained for 1 to 5 years. The fee varies based on license type and validity period. Renewal must be done 30 days before expiry." },
      { q: "What is the difference between license types?", a: "Basic Registration: Turnover up to ₹12 lakhs. State License: Turnover ₹12 lakhs to ₹20 crores, single state operation. Central License: Turnover above ₹20 crores or multi-state operations." },
      { q: "Is inspection required for FSSAI license?", a: "Physical inspection is required for State and Central licenses. For Basic Registration, inspection may be done randomly. Online video inspection is also available." },
      { q: "What are the penalties for operating without license?", a: "Fine up to ₹5 lakhs for operating without license. Imprisonment up to 6 months for repeated offenses. Products can be seized and destroyed." }
    ],
    
    relatedServices: [
      { label: "Trademark Registration", desc: "Brand protection", href: "/services/trademark" },
      { label: "GST Registration", desc: "Tax compliance", href: "/services/gst-registration" },
      { label: "Import Export Code", desc: "Export food products", href: "/services/import-export-code" },
      { label: "MSME Registration", desc: "Business benefits", href: "/services/msme-udyam" }
    ]
  };

  return <ServicePageTemplate {...pageData} />;
};

export default FSSAILicense;
