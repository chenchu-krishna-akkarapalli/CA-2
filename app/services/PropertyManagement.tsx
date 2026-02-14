import React from 'react';
import ServicePageTemplate from '../../components/ServicePageTemplate';

const PropertyManagement = () => {
  const pageData = {
    serviceName: "Property Management",
    heroImage: "/hero-img/hero-2.png",
    heroTitle: "NRI Property Management Services",
    heroSubtitle: "Hassle-free management of your Indian properties. Complete solutions from tenant management to legal documentation.",
    
    description: `Property Management for NRIs is a comprehensive service that helps Non-Resident Indians manage their real estate assets in India without being physically present. From finding tenants to collecting rent and handling maintenance, we take care of everything.

NRIs often struggle to manage properties in India due to distance, time zone differences, and lack of local presence. Our services include tenant verification, rent collection, property maintenance, bill payments, legal documentation, and periodic property inspections.

We also assist with property buying/selling, registration, mutation, and tax-related matters. Whether it's ancestral property or investment real estate, our team ensures your Indian property assets are well-managed and legally compliant.`,
    
    keyHighlights: [
      { title: "Tenant Management", desc: "Find, verify, and manage reliable tenants", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" },
      { title: "Rent Collection", desc: "Regular rent collection and remittance to NRO account", icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
      { title: "Property Maintenance", desc: "Regular upkeep and emergency repairs", icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" },
      { title: "Legal Documentation", desc: "Rent agreements, POA, and legal compliance", icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" },
      { title: "Bill Payments", desc: "Handle property tax, utilities, and maintenance charges", icon: "M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" },
      { title: "Property Inspection", desc: "Regular photo/video updates of your property", icon: "M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" }
    ],
    
    process: [
      { title: "Property Assessment", desc: "Evaluate property condition and rental potential" },
      { title: "Documentation", desc: "Set up Power of Attorney and management agreement" },
      { title: "Tenant Placement", desc: "Find and verify suitable tenants" },
      { title: "Ongoing Management", desc: "Regular management with monthly reporting" }
    ],
    
    benefits: [
      { title: "Peace of Mind", desc: "Focus on work abroad while we manage property" },
      { title: "Maximized Returns", desc: "Optimal rent and minimal vacancy" },
      { title: "Legal Protection", desc: "Proper documentation prevents disputes" },
      { title: "Transparent Reporting", desc: "Monthly statements and updates" },
      { title: "Local Expertise", desc: "On-ground team handles everything" },
      { title: "Tax Assistance", desc: "Help with TDS compliance and returns" }
    ],
    
    faqs: [
      { q: "What services are included in property management?", a: "Tenant finding and verification, rent agreement, rent collection, maintenance coordination, bill payments, property inspections, legal compliance, and monthly reporting." },
      { q: "How is rent transferred to NRIs?", a: "Rent is collected and deposited to your NRO account in India. TDS at applicable rate is deducted before crediting. You can then repatriate as per FEMA rules." },
      { q: "Is TDS applicable on rent paid to NRIs?", a: "Yes, TDS at 30% (plus surcharge and cess) is deductible on rent paid to NRIs. Lower rate may apply under DTAA. Tenant must obtain TAN and file TDS returns." },
      { q: "Can you help with property sale?", a: "Yes, we assist with property valuation, buyer finding, negotiation, documentation, registration, and ensuring FEMA compliance for sale proceeds." },
      { q: "How do I authorize you to manage my property?", a: "A registered Power of Attorney (POA) is executed in your favor or a local representative. POA can be executed at Indian embassy/consulate abroad." }
    ],
    
    relatedServices: [
      { label: "PAN for NRI", desc: "Tax identity", href: "/services/pan-for-nri" },
      { label: "Income Tax Return", desc: "Tax filing", href: "/services/income-tax-return" },
      { label: "FEMA Compliance", desc: "Forex regulations", href: "/services/fema-compliance" },
      { label: "TDS Returns", desc: "Tax deduction", href: "/services/tds-returns" }
    ]
  };

  return <ServicePageTemplate {...pageData} />;
};

export default PropertyManagement;
