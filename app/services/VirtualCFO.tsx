import React from 'react';
import ServicePageTemplate from '../../components/ServicePageTemplate';
import { Briefcase, BarChart3, ShieldCheck, FileCheck, Layers, Users } from 'lucide-react';

const VirtualCFO = () => {
    // 1. Define the service benefits/features
    const features = [
        {
            title: "Financial Strategy & Planning",
            description: "Long-term financial planning aligned with business objectives, capital structuring, and funding strategy advisory.",
            icon: Briefcase
        },
        {
            title: "Management Reporting & MIS",
            description: "Design and review of MIS dashboards, profitability analysis, and variance analysis for better decision-making.",
            icon: BarChart3
        },
        {
            title: "Governance & Controls",
            description: "Strengthening internal control frameworks, designing SOPs for finance functions, and reviewing delegation of authority.",
            icon: ShieldCheck
        },
        {
            title: "Compliance Oversight",
            description: "Proactive monitoring of GST, Income-tax, ROC, and regulatory compliances, and coordination with auditors.",
            icon: FileCheck
        },
        {
            title: "Cost & Profitability Management",
            description: "Cost structure analysis, pricing advisory, and project cost monitoring for operational efficiency.",
            icon: Layers
        },
        {
            title: "Promoter & Board Support",
            description: "Financial insights for decisions, support in stakeholder discussions, and independent financial perspective.",
            icon: Users
        }
    ];

    // 2. Define Frequently Asked Questions (FAQs)
    const faqs = [
        {
            q: "Who is this service for?",
            a: "Our Virtual CFO services are ideal for MSMEs, mid-sized enterprises, real-estate developers, family-owned businesses, and companies transitioning from compliance-only to strategic finance."
        },
        {
            q: "Why choose the Virtual CFO model?",
            a: "It provides cost-effective access to senior financial expertise, offering independent advice, deep regulatory understanding, and flexible engagement scaled to your business needs."
        },
        {
            q: "How does it help with decision-making?",
            a: "We provide better financial discipline, improved profitability visibility, stronger controls, and informed decision-making without adding permanent overheads."
        },
        {
            q: "What is the key outcome of this service?",
            a: "The primary outcome is better financial discipline, improved profitability visibility, stronger controls, and informed decision-making—without adding permanent overheads."
        }
    ];

    // 3. Define Related Services
    const relatedServices = [
        { label: "Statutory Audits", desc: "Company compliance audit", href: "/services/statutory-audits" },
        { label: "Internal Audits", desc: "Process & risk audit", href: "/services/internal-audits" },
        { label: "GST Advisory", desc: "Expert tax advice", href: "/services/gst-consultation" }
    ];


    return (
        <>
            <ServicePageTemplate
                serviceName="Virtual CFO Services"
                heroImage="/hero-img/hero-2.png"
                heroTitle="Strategic Financial Leadership"
                heroSubtitle="Expert financial oversight and strategic direction for your growing business."
                description="Strategic financial leadership—without the cost of a full-time CFO. Our Virtual CFO (vCFO) services provide businesses with high-level financial oversight, strategic direction, and governance support on a flexible, outsourced basis."
                icon={Briefcase}
                keyHighlights={features}
                faqs={faqs}
                relatedServices={relatedServices}
            >
                <section className="w-full pb-[60px] md:pb-[80px] px-[5%]">
                    <div className="max-w-[1000px] mx-auto">
                        <p className="font-inter text-[clamp(16px,1.2vw,18px)] leading-[1.8] text-text-secondary mb-12">
                            Designed for growing companies, MSMEs, real-estate developers, and promoter-driven organizations, our vCFO model bridges the gap between day-to-day accounting and board-level decision-making.
                        </p>

                        <div className="grid md:grid-cols-2 gap-12">
                            <div>
                                <h3 className="font-outfit font-bold text-[24px] text-brand-dark-green mb-6">Who Is This For?</h3>
                                <ul className="space-y-4">
                                    <li className="flex items-start gap-3">
                                        <div className="w-2 h-2 rounded-full bg-brand-green mt-2.5 shrink-0" />
                                        <span className="font-inter text-[16px] text-text-secondary leading-relaxed">MSMEs and mid-sized enterprises</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-2 h-2 rounded-full bg-brand-green mt-2.5 shrink-0" />
                                        <span className="font-inter text-[16px] text-text-secondary leading-relaxed">Real-estate and infrastructure projects</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-2 h-2 rounded-full bg-brand-green mt-2.5 shrink-0" />
                                        <span className="font-inter text-[16px] text-text-secondary leading-relaxed">Family-owned and promoter-managed businesses</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-2 h-2 rounded-full bg-brand-green mt-2.5 shrink-0" />
                                        <span className="font-inter text-[16px] text-text-secondary leading-relaxed">Companies transitioning from compliance-only finance to strategic finance</span>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="font-outfit font-bold text-[24px] text-brand-dark-green mb-6">Why Our Virtual CFO Model?</h3>
                                <ul className="space-y-4">
                                    <li className="flex items-start gap-3">
                                        <div className="w-2 h-2 rounded-full bg-brand-green mt-2.5 shrink-0" />
                                        <span className="font-inter text-[16px] text-text-secondary leading-relaxed">Cost-effective access to senior financial expertise</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-2 h-2 rounded-full bg-brand-green mt-2.5 shrink-0" />
                                        <span className="font-inter text-[16px] text-text-secondary leading-relaxed">Independent, objective, and compliance-driven advice</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-2 h-2 rounded-full bg-brand-green mt-2.5 shrink-0" />
                                        <span className="font-inter text-[16px] text-text-secondary leading-relaxed">Deep understanding of Indian regulatory and cost structures</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-2 h-2 rounded-full bg-brand-green mt-2.5 shrink-0" />
                                        <span className="font-inter text-[16px] text-text-secondary leading-relaxed">Flexible engagement—scaled to your business needs</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </ServicePageTemplate>
        </>
    );
};

export default VirtualCFO;
