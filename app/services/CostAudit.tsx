import React from 'react';
import ServicePageTemplate from '../../components/ServicePageTemplate';
import { motion } from 'framer-motion';

const CostAudit = () => {
    const pageData = {
        serviceName: "Cost Audit",
        heroImage: "/hero-img/hero-1.avif", // Using generic office image suitable for audit/compliance
        heroTitle: "Cost Audit & Compliance",
        heroSubtitle: "End-to-end cost audit compliance with structured cost records and seamless MCA filings.",
        description: `Comprehensive Cost Audit & Cost Records services covering the complete statutory lifecycleâ€”from appointment of the Cost Auditor to maintenance of cost records, conduct of cost audit, and filing of cost audit reports with MCA.

Ensures strict statutory compliance while enabling management to derive meaningful cost insights.`,

        keyHighlights: [
            {
                title: "End-to-End",
                desc: "End-to-end compliance ownership (Appointment â†’ Audit â†’ Filing)",
                icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
            },
            {
                title: "Documentation",
                desc: "Strong focus on documentation, timelines, and audit trail",
                icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            },
            {
                title: "Practical Systems",
                desc: "Practical, regulator-aligned cost systems",
                icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
            },
            {
                title: "Robust Execution",
                desc: "Independent, technically robust, and management-oriented execution",
                icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
            }
        ],

        relatedServices: [
            { label: "Statutory Audits", desc: "Company compliance", href: "/services/statutory-audits" },
            { label: "Internal Audits", desc: "Process review", href: "/services/internal-audits" },
            { label: "GST Audits", desc: "Tax compliance", href: "/services/gst-audits" },
            { label: "Project Reports", desc: "Feasibility Studies", href: "/services/project-report" }
        ]
    };

    const serviceOfferings = [
        {
            id: "cost_auditor_appointment",
            title: "Cost Auditor Appointment & MCA Forms",
            description: "Support for appointment of Cost Auditor and initial MCA compliances.",
            services: [
                "Assistance in appointment of Cost Auditor as per Companies Act, 2013",
                "Preparation of Board resolutions and statutory documentation",
                "Filing of MCA Form CRA-1 (Notice of appointment)",
                "Follow-up and compliance tracking for approvals"
            ]
        },
        {
            id: "central_gov_approval",
            title: "Central Government Approval",
            description: "Approval process with the Central Government where applicable.",
            services: [
                "Assistance in filing MCA Form CRA-2 (Application to Central Government)",
                "Coordination and documentation support for the approval process"
            ]
        },
        {
            id: "auditor_intimation",
            title: "Cost Auditor Intimation & Change",
            description: "Regulatory intimation and changes related to the Cost Auditor.",
            services: [
                "Filing of MCA Form CRA-3 (Intimation by Cost Auditor)",
                "Support in case of resignation, removal, or change of Cost Auditor"
            ]
        },
        {
            id: "statutory_cost_audit",
            title: "Statutory Cost Audit & Reporting",
            description: "Execution of statutory cost audit and reporting requirements.",
            services: [
                "Conduct of cost audit as prescribed under Cost Audit Rules",
                "Verification of cost statements, annexures, and quantitative records",
                "Reconciliation between cost records and financial accounts",
                "Preparation and filing of Cost Audit Report in MCA Form CRA-4"
            ]
        },
        {
            id: "cost_records",
            title: "Maintenance of Cost Records",
            description: "Design, implementation, and review of statutory cost records.",
            services: [
                "Design and implementation of cost record systems",
                "Identification of cost centres, cost drivers, and allocation bases",
                "Structuring quantitative records as prescribed under MCA rules",
                "Periodic review of cost records"
            ]
        },
        {
            id: "cas_compliance",
            title: "Cost Accounting Standards Compliance",
            description: "Alignment of cost systems with applicable Cost Accounting Standards (CAS).",
            services: [
                "Alignment of cost records with applicable CAS",
                "Review of allocation, absorption, and apportionment methodologies",
                "Documentation of cost policies and consistency checks"
            ]
        },
        {
            id: "process_review",
            title: "Cost System & Process Review",
            description: "Evaluation and strengthening of cost accounting frameworks.",
            services: [
                "Evaluation of existing cost accounting frameworks",
                "Gap analysis against statutory requirements",
                "Strengthening audit trail and documentation",
                "Integration of cost records with ERP systems"
            ]
        },
        {
            id: "management_analysis",
            title: "Management Oriented Cost Analysis",
            description: "Cost analytics designed for management decision-making.",
            services: [
                "Product, process, and segment-wise costing",
                "Margin, contribution, and profitability analysis",
                "Capacity utilization and overhead absorption reviews"
            ]
        }
    ];

    const targetAudience = [
        "Companies covered under statutory cost audit",
        "Manufacturing, processing, and regulated industries",
        "Infrastructure, power, and project-based entities",
        "Companies required to appoint a Cost Auditor and file CRA forms"
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
                            Comprehensive cost audit services covering the complete statutory lifecycle.
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
                                <h3 className="font-outfit font-bold text-lg text-brand-primary mb-3">
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
                                            <span className="font-inter text-[13px] text-gray-600 leading-relaxed">
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
                        "Seamless Cost Auditor appointment, timely filing of CRA-1, CRA-2, CRA-3 & CRA-4, compliant cost records, reduced regulatory risk, and actionable cost intelligence for management."
                    </p>
                </div>
            </section>

        </ServicePageTemplate>
    );
};

export default CostAudit;
