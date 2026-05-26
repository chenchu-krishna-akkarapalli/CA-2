"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import OptimizedImage from "./OptimizedImage";
import GetFreeQuote from "./GetFreeQuote";
import BottomFadeBlurOverlay from "./BottomFadeBlurOverlay";

/* ── Main Template ── */
const ServicePageTemplate = ({
  serviceName,
  heroImage,
  heroTitle,
  heroSubtitle,
  description,
  keyHighlights,
  process,
  benefits,
  faqs,
  relatedServices,
  icon: ServiceIcon,
  children,
}: {
  serviceName: string;
  heroImage: string;
  heroTitle: string;
  heroSubtitle: string;
  description: string;
  keyHighlights?: { title: string; desc?: string; description?: string; icon?: any }[];
  process?: { title: string; desc?: string; description?: string }[];
  benefits?: { title: string; desc?: string; description?: string }[];
  faqs?: { q: string; a: string }[];
  relatedServices?: { label: string; desc: string; href: string }[];
  icon?: any;
  children?: React.ReactNode;
}) => {
  return (
    <div className="w-full min-h-screen bg-white overflow-x-hidden">
      <BottomFadeBlurOverlay />
      <ServiceHero
        heroImage={heroImage}
        heroTitle={heroTitle}
        heroSubtitle={heroSubtitle}
        serviceName={serviceName}
      />
      <DescriptionSection description={description} serviceName={serviceName} />
      {children}
      {keyHighlights && <KeyHighlightsSection highlights={keyHighlights} />}
      {process && <ProcessSection process={process} />}
      {benefits && <BenefitsSection benefits={benefits} />}
      <GetFreeQuote serviceName={serviceName} />
      {faqs && <FAQSection faqs={faqs} />}
      {relatedServices && <RelatedServicesSection services={relatedServices} />}
    </div>
  );
};

/* ── Hero Section ── */
const ServiceHero = ({
  heroImage,
  heroTitle,
  heroSubtitle,
  serviceName,
}: {
  heroImage: string;
  heroTitle: string;
  heroSubtitle: string;
  serviceName: string;
}) => {
  return (
    <section
      className="relative w-full min-h-[420px] sm:min-h-[520px] lg:h-[667px] overflow-hidden bg-[#e6e6e6]"
      aria-label={serviceName}
    >
      {/* Background */}
      <div className="absolute inset-0" aria-hidden="true">
        <OptimizedImage
          src={heroImage}
          alt={serviceName}
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
      <div className="relative z-10 flex flex-col items-center justify-start h-full px-4 sm:px-8 py-16 sm:py-20 lg:py-0 lg:pt-[140px]">
        <div className="w-full max-w-[848px] flex flex-col items-center text-center">
          {/* Breadcrumb */}
          <motion.div
            className="font-outfit font-bold text-[12px] leading-[18px] text-brand-primary flex items-center gap-1"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
          >
            <Link href="/" className="hover:text-brand-accent transition-colors">Home</Link>
            <span>/</span>
            <Link href="/#what-we-do" className="hover:text-brand-accent transition-colors">Services</Link>
            <span>/</span>
            <span>{serviceName}</span>
          </motion.div>

          {/* Service Name */}
          <motion.h1
            className="mt-6 sm:mt-7 font-outfit font-bold text-[40px] sm:text-[56px] lg:text-[72px] leading-[44px] sm:leading-[55px] text-brand-primary"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.1, ease: [0.25, 0.4, 0.25, 1] }}
          >
            {heroTitle}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="mt-6 sm:mt-7 max-w-[734px] font-inter font-light text-[14px] sm:text-[15px] lg:text-[16px] leading-[20px] sm:leading-[22px] lg:leading-[19px] text-brand-primary"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
          >
            {heroSubtitle}
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="mt-9 flex flex-col sm:flex-row items-center gap-3.5 sm:gap-[41px]"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45, ease: [0.25, 0.4, 0.25, 1] }}
          >
            <a
              href="#get-quote"
              className="w-[134px] h-[36px] rounded-[6px] bg-gradient-btn-services flex items-center justify-center"
              aria-label="Get your quote"
            >
              <span className="font-outfit font-medium text-[14px] leading-[20px] text-white">
                connect with us
              </span>
            </a>
            <a
              href="tel:+917032163646"
              className="w-[134px] h-[36px] rounded-[6px] border border-brand-accent bg-white/50 backdrop-blur-[2px] flex items-center justify-center"
              aria-label="Call us now"
            >
              <span className="font-outfit font-medium text-[14px] leading-[20px] text-brand-primary">
                Call Now
              </span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

/* ── Description Section ── */
const DescriptionSection = ({
  description,
  serviceName,
}: {
  description: string;
  serviceName: string;
}) => {
  return (
    <section className="w-full py-[60px] md:py-[80px] px-[5%]">
      <div className="max-w-[1000px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-accent/10 rounded-full mb-6">
            <span className="w-2 h-2 bg-brand-accent rounded-full" />
            <span className="font-inter text-[13px] text-brand-accent font-medium">Overview</span>
          </div>

          <h2 className="font-outfit font-bold text-[clamp(28px,3vw,40px)] leading-[1.2] text-brand-primary mb-6">
            What is <span className="text-brand-accent">{serviceName}?</span>
          </h2>

          <div className="prose prose-lg max-w-none">
            {description.split("\n\n").map((paragraph, i) => (
              <p
                key={i}
                className="font-inter text-[clamp(16px,1.2vw,18px)] leading-[1.8] text-text-secondary mb-4"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

/* ── Key Highlights Section ── */
const KeyHighlightsSection = ({
  highlights,
}: {
  highlights: { title: string; desc?: string; description?: string; icon?: any }[];
}) => {
  const HighlightCard = ({
    highlight,
    index,
  }: {
    highlight: { title: string; desc?: string; description?: string; icon?: any };
    index: number;
  }) => {
    return (
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 0.4, 0.25, 1] }}
      >
        <motion.div
          whileHover={{ y: -8 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="bg-white border border-brand-secondary rounded-[30px] overflow-hidden h-full flex flex-col items-center justify-start pt-[40px] pb-[32px] px-6 text-center transition-shadow duration-300 hover:shadow-card"
        >
          {/* Icon Box */}
          <div className="size-[80px] rounded-[22px] border border-brand-secondary bg-gradient-primary flex items-center justify-center flex-shrink-0">
            {highlight.icon && typeof highlight.icon !== "string" ? (
              <highlight.icon className="w-[40px] h-[40px] text-white" strokeWidth={1.5} />
            ) : (
              <svg className="w-[40px] h-[40px] text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d={typeof highlight.icon === "string" ? highlight.icon : "M5 13l4 4L19 7"}
                />
              </svg>
            )}
          </div>

          {/* Title */}
          <h3 className="mt-[16px] font-outfit font-semibold text-[22px] sm:text-[24px] leading-[28px] text-brand-primary">
            {highlight.title}
          </h3>

          {/* Description */}
          <p className="mt-[10px] max-w-[280px] font-inter font-normal text-[14px] sm:text-[15px] leading-[20px] text-brand-primary/60">
            {highlight.desc || highlight.description}
          </p>
        </motion.div>
      </motion.div>
    );
  };

  const midPoint = Math.ceil(highlights.length / 2);
  const leftHighlights = highlights.slice(0, midPoint);
  const rightHighlights = highlights.slice(midPoint);

  return (
    <section className="w-full py-[60px] md:py-[80px] px-[4%] bg-gradient-to-b from-brand-accent/5 to-white overflow-hidden">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          className="flex flex-col items-center gap-[10px] mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-outfit font-bold text-[30px] sm:text-[40px] lg:text-[50px] leading-[36px] sm:leading-[44px] lg:leading-[55px] text-center">
            <span className="text-brand-primary">Key</span>{" "}
            <span className="text-brand-accent">Highlights</span>
          </h2>
          <div className="h-[6px] w-[180px] sm:w-[260px] lg:w-[300px] rounded-full bg-gradient-to-b from-brand-primary to-brand-accent" />
        </motion.div>

        <div className="max-w-[1000px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-[20px] justify-center">
            <div className="flex flex-col gap-[20px] w-full lg:w-[48%] max-w-[464px] mx-auto lg:mx-0">
              {leftHighlights.map((highlight, index) => (
                <HighlightCard key={index} highlight={highlight} index={index} />
              ))}
            </div>
            <div className="flex flex-col gap-[20px] w-full lg:w-[48%] max-w-[464px] mx-auto lg:mx-0 lg:mt-[120px]">
              {rightHighlights.map((highlight, index) => (
                <HighlightCard key={index} highlight={highlight} index={index + leftHighlights.length} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ── Process Section ── */
const ProcessSection = ({ process }: { process: { title: string; desc?: string; description?: string }[] }) => {
  return (
    <section className="w-full py-[60px] md:py-[80px] px-[5%]">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-inter font-semibold text-[14px] tracking-[3px] uppercase text-brand-accent mb-4">
            How It Works
          </p>
          <h2 className="font-outfit font-bold text-[clamp(28px,3vw,40px)] leading-[1.2]">
            <span className="text-brand-primary">Simple</span>
            <span className="text-brand-accent"> Process</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Connecting Line */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
            className="absolute top-[34px] left-[10%] right-[10%] h-[3px] bg-gradient-to-r from-brand-accent via-brand-primary to-brand-accent hidden lg:block origin-left z-0"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {process.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
              >
                <div className="relative text-center">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="relative z-10 w-[70px] h-[70px] mx-auto mb-6 rounded-full bg-gradient-primary flex items-center justify-center shadow-lg group"
                  >
                    <span className="font-outfit font-bold text-[24px] text-white">{i + 1}</span>
                    <div className="absolute inset-0 rounded-full bg-brand-accent opacity-0 group-hover:animate-ping" />
                  </motion.div>
                  <h3 className="font-outfit font-bold text-[18px] text-brand-primary mb-3">
                    {step.title}
                  </h3>
                  <p className="font-inter text-[14px] text-text-secondary leading-[1.6]">
                    {step.desc || step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

/* ── Benefits Section ── */
const BenefitsSection = ({ benefits }: { benefits: { title: string; desc?: string; description?: string }[] }) => {
  return (
    <section className="w-full py-[60px] md:py-[80px] px-[5%] bg-[#f5f8f5]">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          className="flex flex-col items-center gap-[10px] mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-outfit font-bold text-[30px] sm:text-[40px] lg:text-[50px] leading-[36px] sm:leading-[44px] lg:leading-[55px] text-center">
            <span className="text-brand-primary">Key</span>{" "}
            <span className="text-brand-accent">Benefits</span>
          </h2>
          <div className="h-[6px] w-[180px] sm:w-[260px] lg:w-[300px] rounded-full bg-gradient-to-b from-brand-primary to-brand-accent" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px]">
          {benefits.map((benefit, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.25, 0.4, 0.25, 1] }}
            >
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="bg-white border border-brand-secondary rounded-[30px] overflow-hidden h-full flex flex-col items-center justify-start pt-[36px] pb-[28px] px-6 text-center transition-shadow duration-300 hover:shadow-card"
              >
                {/* Icon Box */}
                <div className="size-[70px] rounded-[18px] border border-brand-secondary bg-gradient-primary flex items-center justify-center flex-shrink-0">
                  <svg className="w-[34px] h-[34px] text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 13l4 4L19 7" />
                  </svg>
                </div>

                {/* Title */}
                <h3 className="mt-[14px] font-outfit font-semibold text-[18px] sm:text-[20px] leading-[26px] text-brand-primary">
                  {benefit.title}
                </h3>

                {/* Description */}
                <p className="mt-[8px] max-w-[260px] font-inter font-normal text-[13px] sm:text-[14px] leading-[20px] text-brand-primary/60">
                  {benefit.desc || benefit.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ── FAQ Section ── */
const FAQSection = ({ faqs }: { faqs: { q: string; a: string }[] }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="w-full py-[60px] md:py-[80px] px-[5%]">
      <div className="max-w-[800px] mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-inter font-semibold text-[14px] tracking-[3px] uppercase text-brand-accent mb-4">
            Common Questions
          </p>
          <h2 className="font-outfit font-bold text-[clamp(28px,3vw,40px)] leading-[1.2]">
            <span className="text-brand-primary">Frequently Asked</span>
            <span className="text-brand-accent"> Questions</span>
          </h2>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <div className="bg-white rounded-[12px] border border-surface-card-border shadow-sm overflow-hidden">
                <button
                  onClick={() => setActiveIndex(activeIndex === i ? -1 : i)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-inter font-semibold text-[16px] text-brand-primary pr-4">
                    {faq.q}
                  </span>
                  <svg
                    className={`w-5 h-5 text-brand-accent flex-shrink-0 transition-transform duration-300 ${activeIndex === i ? "rotate-180" : ""
                      }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-500 ${activeIndex === i ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                    }`}
                >
                  <p className="px-5 pb-5 font-inter text-[15px] text-text-secondary leading-[1.7]">
                    {faq.a}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ── Related Services Section ── */
const RelatedServicesSection = ({
  services,
}: {
  services: { label: string; desc: string; href: string }[];
}) => {
  return (
    <section className="w-full py-[60px] md:py-[80px] px-[5%] bg-gradient-to-b from-white to-brand-accent/5">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          className="flex flex-col items-center gap-[10px] mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-outfit font-bold text-[30px] sm:text-[40px] lg:text-[50px] leading-[36px] sm:leading-[44px] lg:leading-[55px] text-center">
            <span className="text-brand-primary">Related</span>{" "}
            <span className="text-brand-accent">Services</span>
          </h2>
          <div className="h-[6px] w-[180px] sm:w-[260px] lg:w-[300px] rounded-full bg-gradient-to-b from-brand-primary to-brand-accent" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[20px]">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.25, 0.4, 0.25, 1] }}
            >
              <Link href={service.href} className="block h-full group">
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="bg-white border border-brand-secondary rounded-[30px] overflow-hidden h-full flex flex-col items-center justify-start pt-[36px] pb-[28px] px-5 text-center transition-shadow duration-300 hover:shadow-card"
                >
                  {/* Icon Box */}
                  <div className="size-[60px] rounded-[16px] border border-brand-secondary bg-gradient-primary flex items-center justify-center flex-shrink-0">
                    <svg className="w-[28px] h-[28px] text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>

                  {/* Title */}
                  <h3 className="mt-[14px] font-outfit font-semibold text-[17px] sm:text-[18px] leading-[24px] text-brand-primary group-hover:text-brand-accent transition-colors">
                    {service.label}
                  </h3>

                  {/* Description */}
                  <p className="mt-[8px] max-w-[240px] font-inter font-normal text-[13px] leading-[18px] text-brand-primary/55">
                    {service.desc}
                  </p>

                  {/* CTA */}
                  <span className="mt-auto pt-4 inline-flex items-center gap-1.5 font-outfit font-medium text-[13px] text-brand-accent tracking-wide uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Learn More
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicePageTemplate;
