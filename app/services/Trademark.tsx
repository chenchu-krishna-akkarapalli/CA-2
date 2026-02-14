import React from 'react';
import ServicePageTemplate from '../../components/ServicePageTemplate';

const Trademark = () => {
  const pageData = {
    serviceName: "Trademark Registration",
    heroImage: "/hero-img/hero-2.png",
    heroTitle: "Trademark Registration Services",
    heroSubtitle: "Protect your brand identity. Exclusive rights to your name, logo, and tagline for 10 years with unlimited renewals.",
    
    description: `Trademark registration provides legal protection to your brand name, logo, tagline, or any distinctive sign that identifies your products or services. Under the Trade Marks Act, 1999, a registered trademark gives you exclusive rights to use the mark and take legal action against infringers.

A trademark can be a word, symbol, design, phrase, or combination that distinguishes your goods/services from others. Registration provides nationwide protection, prevents others from using similar marks, and adds significant value to your business.

Trademark registration is valid for 10 years and can be renewed indefinitely. The ® symbol can only be used after registration, while ™ can be used for unregistered marks. We handle the complete process from trademark search to registration certificate.`,
    
    keyHighlights: [
      { title: "Legal Protection", desc: "Exclusive rights to use the trademark nationwide", icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" },
      { title: "10-Year Validity", desc: "Registration valid for decade with unlimited renewals", icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" },
      { title: "Brand Value", desc: "Registered trademark adds business value", icon: "M13 10V3L4 14h7v7l9-11h-7z" },
      { title: "Legal Action", desc: "Sue infringers and claim damages", icon: "M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" },
      { title: "Use ® Symbol", desc: "Official registered trademark symbol usage", icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" },
      { title: "Asset Creation", desc: "Trademark is a valuable intellectual property asset", icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" }
    ],
    
    process: [
      { title: "Trademark Search", desc: "Check availability and similarity with existing marks" },
      { title: "Application Filing", desc: "Submit TM-A form with mark specimen and class details" },
      { title: "Examination", desc: "Registrar examines the application for compliance" },
      { title: "Registration", desc: "Certificate issued after publication and no objection" }
    ],
    
    benefits: [
      { title: "Brand Protection", desc: "Prevent unauthorized use of your brand" },
      { title: "Customer Trust", desc: "Registered mark builds consumer confidence" },
      { title: "Business Asset", desc: "Can be licensed, franchised, or sold" },
      { title: "Global Rights", desc: "Priority for international trademark filing" },
      { title: "Expert Search", desc: "Comprehensive similarity search before filing" },
      { title: "Objection Handling", desc: "Support for examination and hearing" }
    ],
    
    faqs: [
      { q: "What can be registered as a trademark?", a: "Words, logos, symbols, slogans, colors, sounds, shapes, or any combination that distinguishes your goods/services. It must be distinctive and not descriptive or generic." },
      { q: "What are trademark classes?", a: "There are 45 classes - 34 for goods and 11 for services. Each class covers specific types of products/services. Registration is required in each relevant class." },
      { q: "How long does trademark registration take?", a: "If no objection, registration takes 12-18 months. You get application number immediately and can use ™ symbol. If objections arise, it may take longer." },
      { q: "What is the difference between ™ and ®?", a: "™ can be used for unregistered trademarks to claim common law rights. ® can only be used after official registration is granted." },
      { q: "Can trademark registration be refused?", a: "Yes, if the mark is not distinctive, is deceptive, is similar to existing marks, contains prohibited elements, or is contrary to law or morality." }
    ],
    
    relatedServices: [
      { label: "Copyright Registration", desc: "Creative protection", href: "/services/copyright" },
      { label: "Patent Registration", desc: "Invention protection", href: "/services/patent" },
      { label: "Private Limited Company", desc: "Company formation", href: "/services/private-limited-company" },
      { label: "GST Registration", desc: "Tax compliance", href: "/services/gst-registration" }
    ]
  };

  return <ServicePageTemplate {...pageData} />;
};

export default Trademark;
