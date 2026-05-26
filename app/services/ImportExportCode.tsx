import React from 'react';
import ServicePageTemplate from '../../components/ServicePageTemplate';

const ImportExportCode = () => {
  const pageData = {
    serviceName: "Import Export Code",
    heroImage: "/hero-img/hero-1.avif",
    heroTitle: "Import Export Code (IEC) Registration",
    heroSubtitle: "Gateway to international trade. Mandatory license for importing or exporting goods and services from India.",
    
    description: `Import Export Code (IEC) is a 10-digit unique identification number issued by the Directorate General of Foreign Trade (DGFT), Ministry of Commerce. It's mandatory for any business that wants to import or export goods and services from India.

IEC is a lifetime license with no renewal required. It's linked to your PAN and serves as your primary business identity for all customs clearances and foreign trade transactions. Without IEC, customs will not allow import or export of goods.

The IEC registration process has been simplified and can be completed online. Once obtained, you can start importing or exporting immediately. IEC is also required for availing benefits under Foreign Trade Policy like duty exemptions and export incentives.`,
    
    keyHighlights: [
      { title: "Lifetime Validity", desc: "No renewal required once obtained", icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" },
      { title: "Customs Clearance", desc: "Mandatory for all import/export shipments", icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" },
      { title: "Export Benefits", desc: "Avail MEIS, SEIS and other export incentives", icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
      { title: "Service Exports", desc: "Required for IT/ITES service exports", icon: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" },
      { title: "Online Process", desc: "Quick registration through DGFT portal", icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" },
      { title: "PAN Linked", desc: "10-digit code linked to business PAN", icon: "M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" }
    ],
    
    process: [
      { title: "Document Collection", desc: "Gather PAN, Aadhaar, bank details, address proof" },
      { title: "Digital Signature", desc: "Obtain DSC for online application signing" },
      { title: "DGFT Application", desc: "Submit ANF 2A form on DGFT portal with fees" },
      { title: "IEC Issued", desc: "Receive IEC certificate within 2-3 working days" }
    ],
    
    benefits: [
      { title: "Global Trade", desc: "Import from and export to any country" },
      { title: "Duty Benefits", desc: "Avail customs duty exemptions and refunds" },
      { title: "Foreign Exchange", desc: "Receive payments in foreign currency" },
      { title: "Business Growth", desc: "Expand market beyond India's boundaries" },
      { title: "Quick Issuance", desc: "IEC issued in 2-3 working days" },
      { title: "Complete Assistance", desc: "DSC, application, and documentation support" }
    ],
    
    faqs: [
      { q: "Who needs IEC registration?", a: "Any person or business entity that wants to import or export goods. Also required for receiving foreign exchange for service exports above â‚¹5 lakhs annually." },
      { q: "Is IEC required for service exports?", a: "Yes, if you receive payment in foreign currency for services exceeding â‚¹5 lakhs per year, IEC is required. Below this threshold, IEC is not mandatory for services." },
      { q: "What is the validity of IEC?", a: "IEC has lifetime validity. However, you must update the IEC if there are any changes in business details. Annual update is required between April-June each year." },
      { q: "Can individuals get IEC?", a: "Yes, individuals with PAN can obtain IEC. However, the import/export business should be conducted in individual capacity, not as hobby or personal use." },
      { q: "What are the exemptions from IEC?", a: "IEC is not required for personal imports not connected with trade, import/export by government ministries, specified notified agencies, and goods exported/imported below â‚¹5 lakhs value (for commercial samples)." }
    ],
    
    relatedServices: [
      { label: "GST Registration", desc: "Tax compliance", href: "/services/gst-registration" },
      { label: "FSSAI License", desc: "Food exports", href: "/services/fssai-license" },
      { label: "Trademark Registration", desc: "Brand protection", href: "/services/trademark" },
      { label: "FEMA Compliance", desc: "Forex regulations", href: "/services/fema-compliance" }
    ]
  };

  return <ServicePageTemplate {...pageData} />;
};

export default ImportExportCode;
