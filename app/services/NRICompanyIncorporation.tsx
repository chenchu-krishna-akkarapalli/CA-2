import React from 'react';
import ServicePageTemplate from '../../components/ServicePageTemplate';

const NRICompanyIncorporation = () => {
  const pageData = {
    serviceName: "NRI Company Incorporation",
    heroImage: "/hero-img/hero-2.avif",
    heroTitle: "Company Incorporation for NRIs",
    heroSubtitle: "Start your business in India as an NRI. Full ownership allowed in most sectors with simplified incorporation process.",
    
    description: `NRIs (Non-Resident Indians) and PIOs (Persons of Indian Origin) can easily incorporate companies in India under the Foreign Direct Investment (FDI) policy. Most sectors allow 100% NRI investment under the automatic route without any prior approval.

NRIs can start a Private Limited Company, LLP, or even be a director in Indian companies while residing abroad. The incorporation process is similar to resident Indians but requires additional documentation and compliance with FEMA (Foreign Exchange Management Act) regulations.

FDI reporting to RBI is mandatory within 30 days of receiving investment. NRIs can repatriate profits and dividends freely after paying applicable taxes. We handle the complete process including incorporation, bank account opening, and RBI compliance.`,
    
    keyHighlights: [
      { title: "100% Ownership", desc: "Full NRI ownership allowed in most sectors", icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" },
      { title: "Automatic Route", desc: "No government approval needed for most sectors", icon: "M13 10V3L4 14h7v7l9-11h-7z" },
      { title: "Remote Process", desc: "Incorporate without visiting India", icon: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" },
      { title: "Profit Repatriation", desc: "Take profits and dividends out of India", icon: "M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" },
      { title: "FEMA Compliant", desc: "All foreign exchange regulations handled", icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" },
      { title: "Virtual Director", desc: "Be a director from abroad", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" }
    ],
    
    process: [
      { title: "DSC & DIN", desc: "Obtain Digital Signature and Director ID using foreign passport" },
      { title: "Name Approval", desc: "Reserve company name through SPICe+ Part A" },
      { title: "Incorporation", desc: "File SPICe+ with FDI declaration and documents" },
      { title: "Post-Incorporation", desc: "Bank account, RBI filing, GST and other registrations" }
    ],
    
    benefits: [
      { title: "India Presence", desc: "Establish legitimate business presence in India" },
      { title: "Growth Market", desc: "Access to 1.4 billion consumer market" },
      { title: "Tax Treaties", desc: "Benefit from DTAA provisions" },
      { title: "Easy Banking", desc: "Open Indian corporate bank account" },
      { title: "End-to-End Service", desc: "From DSC to bank account opening" },
      { title: "Ongoing Compliance", desc: "ROC, tax, and FEMA compliance support" }
    ],
    
    faqs: [
      { q: "Can NRIs be directors in Indian companies?", a: "Yes, NRIs can be directors. However, at least one director must be resident in India (stayed 182+ days in previous year)." },
      { q: "What documents are needed from NRI directors?", a: "Valid passport, overseas address proof, PAN (or apply for new), apostilled/notarized affidavits, and specimen signature." },
      { q: "How can NRIs invest in their Indian company?", a: "NRIs can invest through inward remittance from NRE/NRO account or foreign bank. FCGPR filing with RBI is mandatory within 30 days." },
      { q: "Which sectors are restricted for NRI investment?", a: "Sectors like lottery, gambling, atomic energy, and tobacco have restrictions. Defense, telecom, and media have sectoral caps requiring government approval." },
      { q: "Can NRIs be sole shareholders?", a: "Yes, NRIs can be 100% shareholders in a Private Limited Company where FDI is allowed under automatic route." }
    ],
    
    relatedServices: [
      { label: "Indian Subsidiary", desc: "Foreign company subsidiary", href: "/services/indian-subsidiary" },
      { label: "FEMA Compliance", desc: "Forex regulations", href: "/services/fema-compliance" },
      { label: "PAN for NRI", desc: "Tax identity", href: "/services/pan-for-nri" },
      { label: "GST Registration", desc: "Tax compliance", href: "/services/gst-registration" }
    ]
  };

  return <ServicePageTemplate {...pageData} />;
};

export default NRICompanyIncorporation;
