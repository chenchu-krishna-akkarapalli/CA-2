import React from 'react';
import ServicePageTemplate from '../../components/ServicePageTemplate';

const TaxLitigation = () => {
    const pageData = {
        serviceName: "Tax Litigation",
        heroImage: "/hero-img/hero-1.png",
        heroTitle: "Tax Litigation & Dispute Resolution",
        heroSubtitle: "End-to-end representation and advisory services in matters relating to GST and Income-tax litigation.",
        description: `Tax disputes require a precise understanding of law, procedure, and practical application. We provide end-to-end representation and advisory services in matters relating to GST and Income-tax litigation, ensuring timely, compliant, and well-reasoned handling of disputes at every stage.

Our approach focuses on early issue identification, strong legal positioning, and effective resolution, while safeguarding the client’s rights and minimizing prolonged litigation.`,
        keyHighlights: [
            { title: "Representation", desc: "Expert representation before authorities and tribunals.", icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" },
            { title: "Advisory", desc: "Strategic advice on litigation strategy and risk.", icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" },
            { title: "Resolution", desc: "Focus on effective and timely dispute resolution.", icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" },
            { title: "Compliance", desc: "Ensuring strict adherence to statutory provisions.", icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" }
        ],
        relatedServices: [
            { label: "GST Registration", desc: "Comprehensive GST Services", href: "/services/gst-registration" },
            { label: "Income Tax", desc: "Filing & Compliance", href: "/services/income-tax-return" },
            { label: "Audit Services", desc: "Internal & Statutory Audits", href: "/services/statutory-audits" },
            { label: "Business Consulting", desc: "Strategic Growth", href: "/services/business-plan" }
        ]
    };

    return (
        <ServicePageTemplate {...pageData}>
            <div className="w-full px-[5%] pb-[80px]">
                <div className="max-w-[1200px] mx-auto space-y-16">

                    {/* GST Component */}
                    <div className="bg-gradient-to-br from-brand-green/5 to-white rounded-[30px] p-8 md:p-12 shadow-strategic border border-brand-border-green transition-all hover:shadow-xl">
                        <h3 className="font-outfit font-bold text-[28px] md:text-[32px] text-brand-dark-green mb-6 border-b-2 border-brand-green pb-2 inline-block">GST Litigation</h3>
                        <p className="font-inter text-text-secondary text-lg mb-8">We assist clients in handling disputes arising under the GST law, including matters before departmental authorities and appellate forums.</p>
                        <div className="grid md:grid-cols-2 gap-4">
                            {[
                                "Reply to GST notices (SCN, DRC-01, DRC-07, etc.)",
                                "Representation before Proper Officer, Appellate Authority, and Tribunal",
                                "Disputes relating to classification, valuation, and rate of tax",
                                "Input Tax Credit (ITC) denial, reversal, and mismatches",
                                "Reverse Charge Mechanism (RCM) disputes",
                                "Refund rejections and blocked credit issues",
                                "Audit, inspection, search, and seizure related proceedings"
                            ].map((item, i) => (
                                <div key={i} className="flex items-start gap-3">
                                    <span className="mt-1.5 w-2 h-2 rounded-full bg-brand-green shrink-0" />
                                    <p className="font-inter text-brand-dark-green">{item}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Income Tax Component */}
                    <div className="bg-gradient-to-br from-brand-green/5 to-white rounded-[30px] p-8 md:p-12 shadow-strategic border border-brand-border-green transition-all hover:shadow-xl">
                        <h3 className="font-outfit font-bold text-[28px] md:text-[32px] text-brand-dark-green mb-6 border-b-2 border-brand-dark-green pb-2 inline-block">Income-tax Litigation</h3>
                        <p className="font-inter text-text-secondary text-lg mb-8">We provide comprehensive support in income-tax disputes, from assessment stage to appellate proceedings.</p>
                        <div className="grid md:grid-cols-2 gap-4">
                            {[
                                "Drafting replies to notices under the Income-tax Act",
                                "Representation during assessment, reassessment, and scrutiny proceedings",
                                "Appeals before Commissioner (Appeals) and higher appellate authorities",
                                "Disputes relating to additions, disallowances, penalties, and interest",
                                "Rectification and revision applications",
                                "Advisory on litigation strategy and risk assessment"
                            ].map((item, i) => (
                                <div key={i} className="flex items-start gap-3">
                                    <span className="mt-1.5 w-2 h-2 rounded-full bg-brand-dark-green shrink-0" />
                                    <p className="font-inter text-brand-dark-green">{item}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Approach Component - Dark Mode Style */}
                    <div className="bg-gradient-primary rounded-[24px] p-8 md:p-12 shadow-xl text-white relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-brand-green/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 transition-all duration-1000 group-hover:scale-150" />
                        <h3 className="font-outfit font-bold text-[28px] md:text-[32px] text-white mb-8 text-center relative z-10">Our Litigation Approach</h3>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
                            {[
                                { title: "Law-driven", desc: "Documentation-focused approach" },
                                { title: "Strategic", desc: "Clear strategy at each stage of proceedings" },
                                { title: "Compliance", desc: "Compliance-oriented, not adversarial" },
                                { title: "Transparent", desc: "Transparent communication with clients" },
                                { title: "Accurate", desc: "Timely filings and procedural accuracy" },
                                { title: "Efficient", desc: "Efficient dispute resolution" }
                            ].map((item, i) => (
                                <div key={i} className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:bg-white/20 hover:scale-105 transition-all duration-300">
                                    <h4 className="font-bold text-brand-green text-lg mb-2">{item.title}</h4>
                                    <p className="text-white/80 text-sm">{item.desc}</p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-12 text-center relative z-10">
                            <p className="text-white/90 italic text-lg leading-relaxed max-w-3xl mx-auto">"We aim to resolve disputes efficiently while maintaining strict adherence to statutory provisions and judicial precedents."</p>
                        </div>
                    </div>

                </div>
            </div>
        </ServicePageTemplate>
    );
};

export default TaxLitigation;
