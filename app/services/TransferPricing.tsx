import React from 'react';
import ServicePageTemplate from '../../components/ServicePageTemplate';

const TransferPricing = () => {
  const pageData = {
    serviceName: "Transfer Pricing Reports",
    heroImage: "/hero-img/hero-2.png",
    heroTitle: "Transfer Pricing Reports",
    heroSubtitle: "Professional services for Transfer Pricing Reports. Expert guidance and compliance support.",
    
    description: `Comprehensive assistance for Transfer Pricing Reports. We ensure full compliance with all regulations and provide strategic advice to optimize your business operations. Our team of experts handles every aspect with precision and care.`,
    
    keyHighlights: [
      { title: "Expert Support", desc: "Guided by experienced professionals", icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" },
      { title: "Compliance", desc: "Adherence to all legal requirements", icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" },
      { title: "Timely Service", desc: "Quick turnaround time", icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" },
    ],
    
    process: [
      { title: "Consultation", desc: "Understand your requirements" },
      { title: "Documentation", desc: "Gather necessary documents" },
      { title: "Processing", desc: "Execute the service/filing" },
      { title: "Completion", desc: "Final deliverable and support" }
    ],
    
    benefits: [
      { title: "Peace of Mind", desc: "Handle complexities effortlessly" },
      { title: "Cost Effective", desc: "Competitive pricing" },
      { title: "Accuracy", desc: "Error-free processing" },
    ],
    
    faqs: [
      { q: "What documents are required?", a: "Documents vary by service. Contact us for a detailed checklist." },
      { q: "How long does it take?", a: "Timelines depend on the specific service and government processing times." },
    ],
    
    relatedServices: [
      { label: "GST Returns", desc: "Monthly filings", href: "/services/gst-returns" },
      { label: "Income Tax", desc: "Annual Experience", href: "/services/income-tax-return" },
    ]
  };

  return <ServicePageTemplate {...pageData} />;
};

export default TransferPricing;
