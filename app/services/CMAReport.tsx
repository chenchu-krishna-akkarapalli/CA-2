import React from 'react';
import ServicePageTemplate from '../../components/ServicePageTemplate';
import { motion } from 'framer-motion';

const CMAReport = () => {
  const pageData = {
    serviceName: "Analytics & Business Intelligence",
    heroImage: "/hero-img/hero-3.avif",
    heroTitle: "Analytics & Business Intelligence",
    heroSubtitle: "Turning financial data into actionable business insights.",
    description: `Analytics & Business Intelligence services designed to help organizations move from raw data and static reports to meaningful, decision-ready insights.

Provides promoters, management, and functional heads with clarity and controlâ€”without unnecessary complexity.

Purpose-driven analytical frameworks aligned with business models, cost structures, and regulatory realities rather than generic dashboards.`,

    keyHighlights: [
      {
        title: "Business-First",
        desc: "Business-first, not tool-first approach to data.",
        icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
      },
      {
        title: "Clean Data",
        desc: "Clean, reliable, and reconciled data foundation.",
        icon: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
      },
      {
        title: "Practical Insights",
        desc: "Aligned with finance, cost, and compliance needs.",
        icon: "M13 10V3L4 14h7v7l9-11h-7z"
      },
      {
        title: "Decision Ready",
        desc: "Designed for decision-makers, not just data scientists.",
        icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
      }
    ],

    relatedServices: [
      { label: "Virtual CFO", desc: "Strategic Finance", href: "/services/virtual-cfo" },
      { label: "Project Reports", desc: "Feasibility Studies", href: "/services/project-report" },
      { label: "GST Audits", desc: "Compliance Review", href: "/services/gst-audits" },
      { label: "Business Valuation", desc: "Fair Value Assessment", href: "/services/business-valuation" }
    ]
  };

  const serviceOfferings = [
    {
      id: "management_dashboards_and_mis",
      title: "Management Dashboards & MIS",
      description: "Customized reporting and dashboards for management visibility.",
      services: [
        "Custom-designed MIS and executive dashboards",
        "Real-time visibility into revenue, costs, and cash flows",
        "Business-unit, project-wise, and location-wise reporting"
      ]
    },
    {
      id: "financial_and_cost_analytics",
      title: "Financial & Cost Analytics",
      description: "Deep analysis of cost structures and profitability drivers.",
      services: [
        "Cost behavior and cost driver analysis",
        "Margin and contribution analysis",
        "Product, service, and project profitability reviews"
      ]
    },
    {
      id: "performance_and_variance_analysis",
      title: "Performance & Variance Analysis",
      description: "Tracking performance against plans and identifying deviations early.",
      services: [
        "Budget vs actual analysis",
        "Trend analysis and key performance indicators (KPIs)",
        "Early warning signals for cost overruns and revenue leakages"
      ]
    },
    {
      id: "gst_tax_and_compliance_analytics",
      title: "GST, Tax & Compliance Analytics",
      description: "Analytics focused on indirect tax efficiency and compliance risk.",
      services: [
        "GST return reconciliations and mismatch analytics",
        "ITC utilization and blockage analysis",
        "Compliance risk dashboards for proactive management"
      ]
    },
    {
      id: "project_and_real_estate_analytics",
      title: "Project & Real Estate Analytics",
      description: "Specialized analytics for project-based and real-estate businesses.",
      services: [
        "Project cost tracking and stage-wise profitability",
        "Cash-flow monitoring and funding gap analysis",
        "Revenue recognition and cost-to-complete insights"
      ]
    },
    {
      id: "decision_support_analytics",
      title: "Decision Support Analytics",
      description: "Advanced analytics to support strategic and operational decisions.",
      services: [
        "Scenario and sensitivity analysis",
        "Pricing and cost optimization models",
        "Data-backed support for strategic and operational decisions"
      ]
    }
  ];

  const targetAudience = [
    "MSMEs and mid-sized enterprises seeking data-driven clarity",
    "Promoter-managed and family-run businesses",
    "Construction, real-estate, and project-driven organizations",
    "Companies upgrading from spreadsheet-based reporting"
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
              We provide purpose-driven analytical frameworks to transform your data into actionable insights.
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
          <h3 className="font-outfit font-bold text-2xl mb-4">The Outcome</h3>
          <p className="font-inter text-lg text-white/90 leading-relaxed italic">
            "Faster decisions, better cost control, improved profitability visibility, and reduced compliance riskâ€”powered by analytics that management can actually use."
          </p>
        </div>
      </section>

    </ServicePageTemplate>
  );
};

export default CMAReport;
