import React from 'react';
import ServicePageTemplate from '../../components/ServicePageTemplate';

const SoleProprietorship = () => {
  const pageData = {
    serviceName: "Sole Proprietorship",
    heroImage: "/hero-img/hero-2.png",
    heroTitle: "Sole Proprietorship Registration",
    heroSubtitle: "The simplest way to start your business. Complete ownership and control with minimal compliance requirements.",
    
    description: `Sole Proprietorship is the simplest and most common form of business organization in India. It's a business owned and operated by a single individual where there is no legal distinction between the owner and the business entity.

This structure is ideal for small-scale businesses, freelancers, consultants, and individual traders who want to start quickly with minimum formalities. The proprietor has complete control over all business decisions and enjoys all profits.

While there's no formal registration requirement, establishing a sole proprietorship involves obtaining necessary registrations like GST, Shop Act License, and opening a current bank account in the business name. The proprietor bears unlimited liability for all business debts.`,
    
    keyHighlights: [
      { title: "Easiest to Start", desc: "No incorporation process, start immediately", icon: "M13 10V3L4 14h7v7l9-11h-7z" },
      { title: "Complete Control", desc: "All decisions made by single owner", icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" },
      { title: "All Profits Yours", desc: "No sharing of business profits", icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
      { title: "Minimal Compliance", desc: "Only basic tax filings required", icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" },
      { title: "Low Cost", desc: "Minimum setup and running costs", icon: "M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" },
      { title: "Privacy", desc: "No public disclosure of financial information", icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" }
    ],
    
    process: [
      { title: "Choose Business Name", desc: "Select a unique name for your business" },
      { title: "Get PAN Card", desc: "Use existing PAN or apply if not available" },
      { title: "Open Bank Account", desc: "Open current account in business name with supporting documents" },
      { title: "Obtain Registrations", desc: "Get GST, Shop Act License, MSME as per business needs" }
    ],
    
    benefits: [
      { title: "Start Today", desc: "Begin operations with minimal setup time" },
      { title: "Full Autonomy", desc: "Make all decisions without partners or board" },
      { title: "Tax Simplicity", desc: "Business income added to personal income" },
      { title: "Easy to Close", desc: "Simple process to discontinue business" },
      { title: "Registration Support", desc: "We help with all necessary registrations" },
      { title: "Bank Account Assistance", desc: "Support for opening business current account" }
    ],
    
    faqs: [
      { q: "Does sole proprietorship need registration?", a: "There's no specific registration for sole proprietorship. However, you need to obtain relevant licenses like GST Registration, Shop Act License, and MSME Registration as per your business activities." },
      { q: "Can I open a bank account in business name?", a: "Yes, you can open a current account in your business name (trading name). Banks require documents like PAN, Aadhaar, GST certificate, and Shop Act License." },
      { q: "What is the liability of a sole proprietor?", a: "Sole proprietor has unlimited liability. Personal assets can be used to settle business debts as there's no legal separation between owner and business." },
      { q: "Can sole proprietorship be converted to company?", a: "Yes, you can transfer sole proprietorship business to a Private Limited Company. The transition involves incorporating a company and transferring assets and liabilities." },
      { q: "What tax filings are required?", a: "Sole proprietor needs to file personal Income Tax Return including business income. If registered under GST, monthly/quarterly GST returns are also required." }
    ],
    
    relatedServices: [
      { label: "GST Registration", desc: "Tax compliance", href: "/services/gst-registration" },
      { label: "MSME Registration", desc: "MSME benefits", href: "/services/msme-udyam" },
      { label: "Private Limited Company", desc: "Corporate structure", href: "/services/private-limited-company" },
      { label: "Income Tax Return", desc: "Tax filing", href: "/services/income-tax-return" }
    ]
  };

  return <ServicePageTemplate {...pageData} />;
};

export default SoleProprietorship;
