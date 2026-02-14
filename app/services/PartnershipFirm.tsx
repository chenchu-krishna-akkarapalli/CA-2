import React from 'react';
import ServicePageTemplate from '../../components/ServicePageTemplate';

const PartnershipFirm = () => {
  const pageData = {
    serviceName: "Partnership Firm",
    heroImage: "/hero-img/hero-1.png",
    heroTitle: "Partnership Firm Registration",
    heroSubtitle: "Start a business with partners sharing profits and responsibilities. Simple structure for collaborative ventures.",
    
    description: `A Partnership Firm is a business structure where two or more individuals come together to carry on a business and share its profits. Governed by the Indian Partnership Act, 1932, it's one of the oldest and most popular forms of business organization in India.

Partnership firms are easy to form with minimal legal formalities. The partnership agreement defines the rights, duties, and profit-sharing ratio among partners. While registration is not mandatory, registered partnerships enjoy better legal standing and can sue third parties for recovery.

This structure is ideal for small and medium businesses like retail shops, professional services, trading businesses, and family enterprises. Partners contribute capital, skills, or both, and share unlimited liability for business debts.`,
    
    keyHighlights: [
      { title: "Easy Formation", desc: "Simple to establish with minimal legal formalities", icon: "M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" },
      { title: "Combined Resources", desc: "Pool capital, skills, and expertise of partners", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" },
      { title: "Shared Decisions", desc: "Partners collectively make business decisions", icon: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" },
      { title: "Flexible Operations", desc: "Partners can customize profit sharing and duties", icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" },
      { title: "Tax Benefits", desc: "Partnership income taxed at firm level with partner exemptions", icon: "M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" },
      { title: "Less Compliance", desc: "Fewer regulatory requirements than companies", icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" }
    ],
    
    process: [
      { title: "Draft Agreement", desc: "Prepare partnership deed defining terms and conditions" },
      { title: "Stamp Duty", desc: "Pay stamp duty as per state regulations on the deed" },
      { title: "Notarization", desc: "Get the partnership deed notarized (optional but recommended)" },
      { title: "Registration", desc: "Register with Registrar of Firms to get registration certificate" }
    ],
    
    benefits: [
      { title: "Quick Setup", desc: "Can be formed within a few days" },
      { title: "Low Cost", desc: "Minimal registration and compliance costs" },
      { title: "Tax Efficiency", desc: "Remuneration and interest to partners are deductible" },
      { title: "Legal Protection", desc: "Registered firms can sue third parties" },
      { title: "Expert Drafting", desc: "Professional partnership deed preparation" },
      { title: "Full Support", desc: "End-to-end registration assistance" }
    ],
    
    faqs: [
      { q: "Is partnership registration mandatory?", a: "No, registration is optional. However, unregistered firms cannot sue third parties for recovery of dues. It's highly recommended to register." },
      { q: "What is the minimum number of partners required?", a: "Minimum 2 partners are required. Maximum is 50 partners for any business (earlier it was 20)." },
      { q: "What should be included in partnership deed?", a: "Name of firm and partners, business nature, capital contribution, profit sharing ratio, duties of partners, admission/retirement/death clauses, dispute resolution mechanism." },
      { q: "What is the liability of partners?", a: "Partners have unlimited liability, meaning personal assets can be used to pay business debts. Each partner is jointly and severally liable for firm's obligations." },
      { q: "Can a partnership firm be converted to LLP or Company?", a: "Yes, partnership firm can be converted to LLP under LLP Act or to Private Limited Company under Companies Act, 2013." }
    ],
    
    relatedServices: [
      { label: "LLP Registration", desc: "Limited liability", href: "/services/llp-registration" },
      { label: "Private Limited Company", desc: "Corporate structure", href: "/services/private-limited-company" },
      { label: "GST Registration", desc: "Tax compliance", href: "/services/gst-registration" },
      { label: "PAN Application", desc: "Tax identity", href: "/services/tan-registration" }
    ]
  };

  return <ServicePageTemplate {...pageData} />;
};

export default PartnershipFirm;
