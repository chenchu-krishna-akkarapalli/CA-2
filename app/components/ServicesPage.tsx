"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  Receipt,
  ShieldCheck,
  GitMerge,
  Lightbulb,
  Scale,
  BarChart3,
  FileCheck,
  Building2,
  Stamp,
  Wallet,
  Globe,
  TrendingUp,
  Ship,
} from "lucide-react";
import BlurText from "./BlurText";
import HeadingReveal from "./HeadingReveal";

/* ── All Services Data ── */
const ALL_SERVICES = [
  {
    id: 1,
    title: "Tax Management",
    Icon: Receipt,
    description: "Comprehensive tax planning and filing services",
    link: "/services/income-tax-return",
    className: "md:col-span-2 lg:col-span-2",
  },
  {
    id: 2,
    title: "Audit & Assurance",
    Icon: ShieldCheck,
    description: "Independent verification of financial statements",
    link: "/services/statutory-audits",
    className: "md:col-span-1 lg:col-span-1",
  },
  {
    id: 3,
    title: "Mergers & Acquisitions",
    Icon: GitMerge,
    description: "Strategic guidance for business combinations",
    link: "/services/due-diligence",
    className: "md:col-span-1 lg:col-span-1",
  },
  {
    id: 4,
    title: "Consulting",
    Icon: Lightbulb,
    description: "Expert advice for business optimization",
    link: "/services/project-report",
    className: "md:col-span-1 lg:col-span-1",
  },
  {
    id: 5,
    title: "Tax Litigation",
    Icon: Scale,
    description: "Expert representation in tax disputes and appeals",
    link: "/services/tax-litigation",
    className: "md:col-span-1 lg:col-span-1",
  },
  {
    id: 6,
    title: "Analytics & BI",
    Icon: BarChart3,
    description: "Turning financial data into actionable business insights",
    link: "/services/virtual-cfo",
    className: "md:col-span-2 lg:col-span-2",
  },
  {
    id: 7,
    title: "GST Registration",
    Icon: FileCheck,
    description: "Seamless GST registration and compliance",
    link: "/services/gst-registration",
    className: "md:col-span-1 lg:col-span-1",
  },
  {
    id: 8,
    title: "Company Registration",
    Icon: Building2,
    description: "End-to-end incorporation services for startups",
    link: "/services/private-limited-company",
    className: "md:col-span-1 lg:col-span-1",
  },
  {
    id: 9,
    title: "Trademark & IP",
    Icon: Stamp,
    description: "Protect your brand identity and intellectual property",
    link: "/services/trademark",
    className: "md:col-span-1 lg:col-span-1",
  },
  {
    id: 10,
    title: "Payroll Processing",
    Icon: Wallet,
    description: "Efficient payroll management and compliance",
    link: "/services/payroll-processing",
    className: "md:col-span-1 lg:col-span-1",
  },
  {
    id: 11,
    title: "FEMA Compliance",
    Icon: Globe,
    description: "Regulatory compliance for cross-border transactions",
    link: "/services/fema-compliance",
    className: "md:col-span-2 lg:col-span-2",
  },
  {
    id: 12,
    title: "Business Valuation",
    Icon: TrendingUp,
    description: "Accurate valuation services for your business assets",
    link: "/services/business-valuation",
    className: "md:col-span-1 lg:col-span-1",
  },
  {
    id: 13,
    title: "Import Export Code",
    Icon: Ship,
    description: "Registration for global trade operations",
    link: "/services/import-export-code",
    className: "md:col-span-1 lg:col-span-1",
  },
];

/* ── Service Card ── */
const ServiceCard = ({
  service,
  index,
}: {
  service: (typeof ALL_SERVICES)[number];
  index: number;
}) => {
  const Icon = service.Icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay: 0.05 * index, ease: [0.25, 0.4, 0.25, 1] }}
      className={`${service.className || ""}`}
    >
      <Link href={service.link} className="block h-full group">
        <motion.div
          whileHover={{ y: -8 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="bg-white border border-brand-secondary rounded-[30px] overflow-hidden h-full min-h-[280px] flex flex-col items-center justify-start pt-[40px] pb-[32px] px-6 text-center transition-shadow duration-300 hover:shadow-card"
        >
          {/* Icon Box */}
          <div className="size-[90px] rounded-[22px] border border-brand-secondary bg-gradient-primary flex items-center justify-center flex-shrink-0">
            <Icon className="w-[46px] h-[46px] text-white" strokeWidth={1.5} />
          </div>

          {/* Title */}
          <h3 className="mt-[18px] font-outfit font-semibold text-[22px] sm:text-[24px] leading-[28px] text-brand-primary group-hover:text-brand-accent transition-colors">
            {service.title}
          </h3>

          {/* Description */}
          <p className="mt-[12px] max-w-[280px] font-inter font-normal text-[14px] sm:text-[15px] leading-[20px] text-brand-primary/65">
            {service.description}
          </p>

          {/* View Details CTA */}
          <div className="mt-auto pt-5">
            <span className="inline-flex items-center gap-1.5 font-outfit font-medium text-[13px] text-brand-accent tracking-wide uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              View Details
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
};

/* ── Services Hero ── */
const ServicesHero = () => {
  return (
    <section
      className="relative w-full min-h-[420px] sm:min-h-[520px] lg:h-[667px] overflow-hidden bg-[#e6e6e6]"
      aria-label="Our Services Hero"
    >
      {/* Background */}
      <div className="absolute inset-0" aria-hidden="true">
        <Image
          src="/Assets/figma/about/about-hero-bg.png"
          alt=""
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </div>

      {/* Bottom Decorator Wave */}
      <div
        className="absolute bottom-0 h-[140px] sm:h-[170px] lg:h-[186px] w-full lg:w-[1440px] left-0 lg:left-1/2 lg:-translate-x-1/2"
        aria-hidden="true"
      >
        <Image
          src="/Assets/figma/about/decorator-hero-section.svg"
          alt=""
          fill
          className="object-fill"
          sizes="100vw"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 sm:px-8 py-16 sm:py-20 lg:py-0">
        {/* gap-[15px] mobile → gap-[25px] desktop between all text blocks */}
        <div className="w-full max-w-[848px] flex flex-col items-center text-center gap-[15px] lg:gap-[25px]">
          {/* Breadcrumb */}
          <motion.p
            className="font-outfit font-bold text-[12px] leading-[18px] text-brand-primary"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
          >
            Home/Services
          </motion.p>

          {/* Title — BlurText word-by-word, Direction Bottom, 250 ms delay */}
          <h1 className="font-outfit font-bold text-[54px] sm:text-[72px] lg:text-[96px] leading-[44px] sm:leading-[55px] text-center">
            <BlurText
              segments={[
                { text: "Our", className: "text-brand-primary" },
                { text: "Services", className: "text-brand-accent" },
              ]}
              className="justify-center"
            />
          </h1>

          {/* Tagline */}
          <motion.p
            className="max-w-[734px] font-outfit font-bold text-[24px] sm:text-[34px] lg:text-[50px] leading-[30px] sm:leading-[44px] lg:leading-[55px]"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55, ease: [0.25, 0.4, 0.25, 1] }}
          >
            <span className="text-brand-primary">Comprehensive </span>
            <span className="text-black">- </span>
            <span className="text-brand-accent">Financial Solutions</span>
          </motion.p>

          {/* Subtitle */}
          <motion.p
            className="font-inter font-light text-[14px] sm:text-[15px] lg:text-[16px] leading-[20px] sm:leading-[22px] lg:leading-[19px] text-brand-primary"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
          >
            Navigate the complexities of business finance with our expert services.
            From incorporation to taxation, we have got you covered.
          </motion.p>

          {/* Buttons — centered, adaptive padding */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-[41px] w-full"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.85, ease: [0.25, 0.4, 0.25, 1] }}
          >
            <a
              href="#services-grid"
              className="rounded-[6px] bg-gradient-btn-services inline-flex items-center justify-center px-5 py-[8px]"
              aria-label="Explore all services"
            >
              <span className="font-outfit font-medium text-[14px] leading-[20px] text-white">
                Explore All
              </span>
            </a>
            <Link
              href="/connect"
              className="rounded-[6px] border border-brand-accent bg-white/50 backdrop-blur-[2px] inline-flex items-center justify-center px-5 py-[8px]"
              aria-label="Get a free consultation"
            >
              <span className="font-outfit font-medium text-[14px] leading-[20px] text-brand-primary">
                Free Consult
              </span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

/* ── Services Page ── */
const ServicesPage = () => {
  return (
    <div className="w-full min-h-screen bg-white">
      {/* Hero Section */}
      <ServicesHero />

      <section id="services-grid" className="py-[60px] px-[5%]">
        <div className="max-w-[1400px] mx-auto">
          {/* Section Headline */}
          <div className="flex flex-col items-center gap-[10px] mb-12 sm:mb-16">
            <HeadingReveal>
              <h2 className="font-outfit font-bold text-[30px] sm:text-[40px] lg:text-[50px] leading-[36px] sm:leading-[44px] lg:leading-[55px] text-center">
                <span className="text-brand-primary">Our</span>{" "}
                <span className="text-brand-accent">Expertise</span>
              </h2>
            </HeadingReveal>
            <div className="h-[6px] w-[180px] sm:w-[260px] lg:w-[300px] rounded-full bg-gradient-to-b from-brand-primary to-brand-accent" />
            <p className="mt-3 font-inter text-[15px] sm:text-[16px] lg:text-[18px] text-brand-primary/60 max-w-[600px] text-center">
              Tailored financial and compliance solutions designed to help your
              business thrive in a complex regulatory environment.
            </p>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-fr">
            {ALL_SERVICES.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
