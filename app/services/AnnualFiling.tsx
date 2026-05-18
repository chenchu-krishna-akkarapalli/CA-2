import React from 'react';
import ServicePageTemplate from '../../components/ServicePageTemplate';
import { motion } from 'framer-motion';

const AnnualFiling = () => {
  const pageData = {
    serviceName: "Auditing & Assurance",
    heroImage: "/hero-img/hero-1.png",
    heroTitle: "Auditing & Assurance Services",
    heroSubtitle: "Independent assurance that strengthens trust, controls, and decision-making.",
    description: `Auditing & Assurance services that go beyond statutory compliance, focusing on clarity, credibility, and confidence in financial and operational information.

Helps promoters, boards, lenders, and stakeholders rely on numbers that truly reflect business reality.

Risk-focused and insight-driven review of systems, controls, and performance rather than a post-mortem exercise.`,

    keyHighlights: [
      {
        title: "Risk-Based Approach",
        desc: "Risk-based and materiality-focused approach to auditing.",
        icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
      },
      {
        title: "Practical Insights",
        desc: "Practical, implementable recommendations for business growth.",
        icon: "M13 10V3L4 14h7v7l9-11h-7z"
      },
      {
        title: "Expert Knowledge",
        desc: "Strong understanding of Indian regulatory and cost environments.",
        icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
      },
      {
        title: "Integrity & Trust",
        desc: "Independence, integrity, and professional skepticism at every stage.",
        icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
      }
    ],

    relatedServices: [
      { label: "Internal Audit", desc: "Process & Control Review", href: "/services/internal-audit" },
      { label: "Tax Audit", desc: "Income Tax Compliance", href: "/services/tax-audit" },
      { label: "Due Diligence", desc: "Investment Support", href: "/services/due-diligence" },
      { label: "GST Audit", desc: "Indirect Tax Review", href: "/services/gst-audit" }
    ]
  };

  const serviceOfferings = [
    {
      id: "statutory_and_regulatory_audits",
      title: "Statutory & Regulatory Audits",
      description: "Audits conducted to meet statutory and regulatory requirements.",
      services: [
        "Statutory audits under the Companies Act, LLP Act, and other applicable laws",
        "Tax audits under the Income-tax Act",
        "Cost audits and cost compliance reporting",
        "Special purpose audits as required by regulators or stakeholders"
      ]
    },
    {
      id: "internal_audit_and_risk_reviews",
      title: "Internal Audit & Risk Reviews",
      description: "Evaluation of internal processes, controls, and risks.",
      services: [
        "Internal audit framework design and execution",
        "Process audits and control testing",
        "Risk assessment and mitigation advisory",
        "Operational efficiency and compliance reviews"
      ]
    },
    {
      id: "assurance_and_certification_services",
      title: "Assurance & Certification Services",
      description: "Independent certifications and assurance engagements.",
      services: [
        "Certification of financial statements and returns",
        "Net worth, turnover, and cost certifications",
        "Due diligence support for lenders, investors, and acquisitions",
        "Agreed-upon procedures (AUP) engagements"
      ]
    },
    {
      id: "systems_controls_and_sop_reviews",
      title: "Systems, Controls & SOP Reviews",
      description: "Assessment and strengthening of systems and internal controls.",
      services: [
        "Review of accounting systems and ERP controls",
        "Evaluation of internal financial controls (IFC)",
        "SOP documentation and implementation support",
        "Gap analysis and control improvement recommendations"
      ]
    },
    {
      id: "gst_and_indirect_tax_audits",
      title: "GST & Indirect Tax Audits",
      description: "Audit and compliance support for GST and indirect taxes.",
      services: [
        "GST audit and reconciliation support",
        "Review of returns, credits, and compliance processes",
        "Pre-departmental audit readiness and risk reviews"
      ]
    }
  ];

  const targetAudience = [
    "Companies seeking reliable and transparent financial reporting",
    "MSMEs and growing enterprises with evolving control frameworks",
    "Real-estate, construction, and project-based organizations",
    "Promoter-driven businesses requiring independent assurance"
  ];

  return (
    <ServicePageTemplate {...pageData}>
      {/* Service Offerings Section */}
      <section className="w-full py-16 px-[5%] bg-gray-50">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-outfit font-bold text-[clamp(28px,3vw,40px)] leading-[1.2] text-brand-primary mb-4">
              Service <span className="text-brand-accent">Offerings</span>
            </h2>
            <p className="font-inter text-gray-600 max-w-2xl mx-auto">
              We provide a comprehensive range of independent assurance services tailored to your specialized needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceOfferings.map((offering, index) => (
              <motion.div
                key={offering.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <h3 className="font-outfit font-bold text-xl text-brand-primary mb-3">
                  {offering.title}
                </h3>
                <p className="font-inter text-sm text-brand-accent mb-4 font-medium">
                  {offering.description}
                </p>
                <ul className="space-y-3">
                  {offering.services.map((service, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-brand-accent mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="font-inter text-[14px] text-gray-600 leading-relaxed">
                        {service}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="w-full py-16 px-[5%] bg-white">
        <div className="max-w-[1000px] mx-auto text-center">
          <h2 className="font-outfit font-bold text-[clamp(24px,2.5vw,36px)] text-brand-primary mb-10">
            Who Is This <span className="text-brand-accent">For?</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            {targetAudience.map((audience, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-4 p-4 rounded-xl bg-brand-accent/5 border border-brand-accent/10"
              >
                <div className="w-10 h-10 rounded-full bg-brand-accent/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-brand-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <span className="font-inter text-gray-700 font-medium">
                  {audience}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcome Section */}
      <section className="w-full py-12 px-[5%] bg-brand-primary text-white">
        <div className="max-w-[1000px] mx-auto text-center">
          <h3 className="font-outfit font-bold text-2xl mb-4">Our Commitment</h3>
          <p className="font-inter text-lg text-white/90 leading-relaxed italic">
            "Audits that enhance credibility, improve controls, reduce regulatory exposure, and add real business value beyond statutory compliance."
          </p>
        </div>
      </section>

    </ServicePageTemplate>
  );
};

export default AnnualFiling;
