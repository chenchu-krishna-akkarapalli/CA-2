"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";
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

/* ── Hero Section (Mobile Fluid Architecture) ── */
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
        className="absolute bottom-0 h-[120px] sm:h-[170px] lg:h-[186px] w-full lg:w-[1440px] left-0 lg:left-1/2 lg:-translate-x-1/2"
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
      <div className="relative z-10 flex flex-col items-center justify-start h-full px-4 sm:px-8 pt-[96px] sm:pt-[110px] lg:pt-[140px] pb-12 sm:pb-20">
        <div className="w-full max-w-[848px] flex flex-col items-center text-center">
          {/* Breadcrumb */}
          <motion.div
            className="font-outfit font-bold text-[11px] sm:text-[12px] leading-[18px] text-brand-primary flex items-center gap-1"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
          >
            <Link href="/" className="hover:text-brand-accent transition-colors">Home</Link>
            <span>/</span>
            <Link href="/#what-we-do" className="hover:text-brand-accent transition-colors">Services</Link>
            <span>/</span>
            <span className="truncate max-w-[160px] sm:max-w-none">{serviceName}</span>
          </motion.div>

          {/* Service Hero Title — Balanced Mobile Scaling */}
          <motion.h1
            className="mt-4 sm:mt-7 font-outfit font-extrabold text-[26px] sm:text-[50px] lg:text-[72px] leading-[32px] sm:leading-[55px] lg:leading-[55px] text-brand-primary text-balance tracking-tight"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.1, ease: [0.25, 0.4, 0.25, 1] }}
          >
            {heroTitle}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="mt-3.5 sm:mt-7 max-w-xs sm:max-w-[734px] font-inter font-normal sm:font-light text-[13.5px] sm:text-[15px] lg:text-[16px] leading-[22px] sm:leading-[22px] lg:leading-[19px] text-brand-primary/90 px-1"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
          >
            {heroSubtitle}
          </motion.p>

          {/* Buttons — Mobile Ergonomic Touch Targets */}
          <motion.div
            className="mt-6 sm:mt-9 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-[41px] w-full max-w-xs sm:max-w-none"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45, ease: [0.25, 0.4, 0.25, 1] }}
          >
            <a
              href="#get-quote"
              className="w-full sm:w-[150px] min-h-[44px] rounded-xl sm:rounded-[6px] bg-gradient-btn-services flex items-center justify-center shadow-md active:scale-95 transition-all"
              aria-label="Get your quote"
            >
              <span className="font-outfit font-semibold text-[14px] sm:text-[15px] text-white">
                Connect With Us
              </span>
            </a>
            <a
              href="tel:+917032163646"
              className="w-full sm:w-[134px] min-h-[44px] rounded-xl sm:rounded-[6px] border border-brand-accent bg-white/70 backdrop-blur-[2px] flex items-center justify-center active:scale-95 transition-all"
              aria-label="Call us now"
            >
              <span className="font-outfit font-semibold text-[14px] text-brand-primary">
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
    <section className="w-full py-8 sm:py-[60px] md:py-[80px] px-4 sm:px-[5%]">
      <div className="max-w-[1000px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
        >
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-brand-accent/10 rounded-full mb-4 sm:mb-6">
            <span className="w-2 h-2 bg-brand-accent rounded-full" />
            <span className="font-inter text-[12px] sm:text-[13px] text-brand-accent font-medium">Overview</span>
          </div>

          <h2 className="font-outfit font-bold text-[22px] sm:text-[clamp(28px,3vw,40px)] leading-[1.2] text-brand-primary mb-4 sm:mb-6">
            What is <span className="text-brand-accent">{serviceName}?</span>
          </h2>

          <div className="prose prose-lg max-w-none">
            {description.split("\n\n").map((paragraph, i) => (
              <p
                key={i}
                className="font-inter text-[13.5px] sm:text-[clamp(16px,1.2vw,18px)] leading-[1.7] sm:leading-[1.8] text-slate-600 mb-3 sm:mb-4"
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

/* ── Key Highlights Section (Bento Grid Mobile Architecture) ── */
const renderHighlightIcon = (icon: any, className: string = "w-4 h-4") => {
  if (!icon || typeof icon === "string") {
    return <CheckCircle2 className={className} />;
  }
  const IconComponent = icon;
  return <IconComponent className={className} strokeWidth={2} />;
};

const KeyHighlightsSection = ({
  highlights,
}: {
  highlights: { title: string; desc?: string; description?: string; icon?: any }[];
}) => {
  return (
    <section className="w-full py-8 sm:py-[60px] md:py-[80px] px-3.5 sm:px-[4%] bg-gradient-to-b from-brand-accent/5 to-white overflow-hidden">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          className="flex flex-col items-center gap-2 sm:gap-[10px] mb-6 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-outfit font-bold text-[24px] sm:text-[40px] lg:text-[50px] leading-[30px] sm:leading-[44px] lg:leading-[55px] text-center tracking-tight">
            <span className="text-brand-primary">Key</span>{" "}
            <span className="text-brand-accent">Highlights</span>
          </h2>
          <div className="h-[4px] sm:h-[6px] w-[140px] sm:w-[260px] lg:w-[300px] rounded-full bg-gradient-to-r from-brand-primary to-brand-accent" />
        </motion.div>

        {/* ── MOBILE BENTO GRID (< 768px) ── */}
        <div className="grid md:hidden grid-cols-2 gap-2.5">
          {/* Bento Cell 1: Span 2 Hero Card */}
          {highlights[0] && (
            <motion.div
              className="col-span-2 bg-gradient-to-br from-slate-900 via-brand-primary to-slate-800 rounded-2xl p-4 text-white shadow-sm relative overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-outfit font-bold tracking-wider uppercase px-2.5 py-0.5 rounded-full bg-brand-accent/20 border border-brand-accent/30 text-brand-accent">
                  KEY ADVANTAGE
                </span>
                <div className="w-8 h-8 rounded-lg bg-brand-accent text-white flex items-center justify-center">
                  {renderHighlightIcon(highlights[0].icon, "w-4 h-4 text-white")}
                </div>
              </div>
              <h3 className="font-outfit font-extrabold text-[17px] leading-tight text-white mb-1.5">
                {highlights[0].title}
              </h3>
              <p className="font-inter text-[12.5px] leading-relaxed text-slate-300">
                {highlights[0].desc || highlights[0].description}
              </p>
            </motion.div>
          )}

          {/* Bento Cells 2 & 3: Split 2-Column Cards */}
          {highlights.slice(1, 3).map((highlight, index) => (
            <motion.div
              key={index}
              className="col-span-1 bg-white border border-slate-200/90 rounded-2xl p-3.5 shadow-sm flex flex-col justify-between"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (index + 1) * 0.08 }}
            >
              <div>
                <div className="w-7 h-7 rounded-lg bg-emerald-50 text-brand-accent flex items-center justify-center mb-2">
                  {renderHighlightIcon(highlight.icon, "w-3.5 h-3.5 text-brand-accent")}
                </div>
                <h3 className="font-outfit font-bold text-[14px] leading-tight text-brand-primary mb-1">
                  {highlight.title}
                </h3>
                <p className="font-inter text-[11.5px] leading-snug text-slate-600 line-clamp-3">
                  {highlight.desc || highlight.description}
                </p>
              </div>
            </motion.div>
          ))}

          {/* Remaining Highlights: Span 2 Horizontal Cards */}
          {highlights.slice(3).map((highlight, index) => (
            <motion.div
              key={index}
              className="col-span-2 bg-white border border-slate-200/90 rounded-2xl p-3.5 shadow-sm flex items-start gap-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (index + 3) * 0.08 }}
            >
              <div className="w-8 h-8 rounded-lg bg-brand-primary text-white flex items-center justify-center shrink-0 mt-0.5">
                {renderHighlightIcon(highlight.icon, "w-4 h-4 text-white")}
              </div>
              <div>
                <h3 className="font-outfit font-bold text-[14.5px] text-brand-primary mb-0.5">
                  {highlight.title}
                </h3>
                <p className="font-inter text-[12px] leading-snug text-slate-600">
                  {highlight.desc || highlight.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── DESKTOP STAGGERED GRID (md: and above) ── */}
        <div className="hidden md:block max-w-[1000px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-[20px] justify-center">
            <div className="flex flex-col gap-[20px] w-full lg:w-[48%] max-w-[464px] mx-auto lg:mx-0">
              {highlights.slice(0, Math.ceil(highlights.length / 2)).map((highlight, index) => (
                <div key={index} className="bg-white border border-brand-secondary rounded-[30px] p-6 text-center shadow-sm">
                  <div className="size-[80px] mx-auto rounded-[22px] bg-gradient-primary flex items-center justify-center mb-4">
                    {renderHighlightIcon(highlight.icon, "w-[40px] h-[40px] text-white")}
                  </div>
                  <h3 className="font-outfit font-semibold text-[22px] text-brand-primary">{highlight.title}</h3>
                  <p className="mt-2 font-inter text-[14px] text-slate-600">{highlight.desc || highlight.description}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-[20px] w-full lg:w-[48%] max-w-[464px] mx-auto lg:mx-0 lg:mt-[80px]">
              {highlights.slice(Math.ceil(highlights.length / 2)).map((highlight, index) => (
                <div key={index} className="bg-white border border-brand-secondary rounded-[30px] p-6 text-center shadow-sm">
                  <div className="size-[80px] mx-auto rounded-[22px] bg-gradient-primary flex items-center justify-center mb-4">
                    {renderHighlightIcon(highlight.icon, "w-[40px] h-[40px] text-white")}
                  </div>
                  <h3 className="font-outfit font-semibold text-[22px] text-brand-primary">{highlight.title}</h3>
                  <p className="mt-2 font-inter text-[14px] text-slate-600">{highlight.desc || highlight.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ── Process Section (Mobile Bento Step Grid) ── */
const ProcessSection = ({ process }: { process: { title: string; desc?: string; description?: string }[] }) => {
  return (
    <section className="w-full py-8 sm:py-[60px] md:py-[80px] px-3.5 sm:px-[5%]">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          className="text-center mb-6 sm:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-inter font-semibold text-[12px] sm:text-[14px] tracking-[2px] sm:tracking-[3px] uppercase text-brand-accent mb-2 sm:mb-4">
            How It Works
          </p>
          <h2 className="font-outfit font-bold text-[22px] sm:text-[clamp(28px,3vw,40px)] leading-[1.2]">
            <span className="text-brand-primary">Simple</span>
            <span className="text-brand-accent"> Process</span>
          </h2>
        </motion.div>

        {/* ── MOBILE BENTO PROCESS GRID (< 768px) ── */}
        <div className="grid md:hidden grid-cols-2 gap-2.5">
          {/* Step 1: Span 2 Hero Card */}
          {process[0] && (
            <motion.div
              className="col-span-2 bg-gradient-to-br from-slate-900 via-brand-primary to-slate-800 rounded-2xl p-4 text-white shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-outfit font-bold tracking-wider uppercase px-2 py-0.5 rounded-full bg-brand-accent/20 text-brand-accent">
                  STEP 01
                </span>
                <span className="font-outfit font-extrabold text-[22px] text-white/20">01</span>
              </div>
              <h3 className="font-outfit font-extrabold text-[17px] text-white mb-1">
                {process[0].title}
              </h3>
              <p className="font-inter text-[12.5px] leading-relaxed text-slate-300">
                {process[0].desc || process[0].description}
              </p>
            </motion.div>
          )}

          {/* Steps 2 & 3: Split 2-Column Bento */}
          {process.slice(1, 3).map((step, i) => (
            <motion.div
              key={i}
              className="col-span-1 bg-white border border-slate-200/90 rounded-2xl p-3.5 shadow-sm flex flex-col justify-between"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i + 1) * 0.08 }}
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="w-6 h-6 rounded-lg bg-brand-accent/15 text-brand-accent font-outfit font-bold text-[12px] flex items-center justify-center">
                    {i + 2}
                  </span>
                </div>
                <h3 className="font-outfit font-bold text-[14px] leading-tight text-brand-primary mb-1">
                  {step.title}
                </h3>
                <p className="font-inter text-[11.5px] leading-snug text-slate-600 line-clamp-3">
                  {step.desc || step.description}
                </p>
              </div>
            </motion.div>
          ))}

          {/* Step 4: Span 2 Horizontal Bento Card */}
          {process[3] && (
            <motion.div
              className="col-span-2 bg-white border border-slate-200/90 rounded-2xl p-3.5 shadow-sm flex items-start gap-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.25 }}
            >
              <div className="w-7 h-7 rounded-lg bg-brand-primary text-white font-outfit font-bold text-[12px] flex items-center justify-center shrink-0 mt-0.5">
                4
              </div>
              <div>
                <h3 className="font-outfit font-bold text-[14.5px] text-brand-primary mb-0.5">
                  {process[3].title}
                </h3>
                <p className="font-inter text-[12px] leading-snug text-slate-600">
                  {process[3].desc || process[3].description}
                </p>
              </div>
            </motion.div>
          )}
        </div>

        {/* ── DESKTOP PROCESS (md: and above) ── */}
        <div className="hidden md:block relative">
          <div className="absolute top-[34px] left-[10%] right-[10%] h-[3px] bg-gradient-to-r from-brand-accent via-brand-primary to-brand-accent hidden lg:block origin-left z-0" />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {process.map((step, i) => (
              <div key={i} className="text-center">
                <div className="w-[70px] h-[70px] mx-auto mb-6 rounded-full bg-gradient-primary flex items-center justify-center shadow-lg">
                  <span className="font-outfit font-bold text-[24px] text-white">{i + 1}</span>
                </div>
                <h3 className="font-outfit font-bold text-[18px] text-brand-primary mb-3">
                  {step.title}
                </h3>
                <p className="font-inter text-[14px] text-text-secondary leading-[1.6]">
                  {step.desc || step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

/* ── Benefits Section (Mobile Bento Architecture) ── */
const BenefitsSection = ({ benefits }: { benefits: { title: string; desc?: string; description?: string }[] }) => {
  return (
    <section className="w-full py-8 sm:py-[60px] md:py-[80px] px-3.5 sm:px-[5%] bg-[#f8fafc]">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          className="flex flex-col items-center gap-2 sm:gap-[10px] mb-6 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-outfit font-bold text-[24px] sm:text-[40px] lg:text-[50px] leading-[30px] sm:leading-[44px] lg:leading-[55px] text-center tracking-tight">
            <span className="text-brand-primary">Key</span>{" "}
            <span className="text-brand-accent">Benefits</span>
          </h2>
          <div className="h-[4px] sm:h-[6px] w-[140px] sm:w-[260px] lg:w-[300px] rounded-full bg-gradient-to-r from-brand-primary to-brand-accent" />
        </motion.div>

        {/* ── MOBILE BENTO BENEFITS (< 768px) ── */}
        <div className="grid md:hidden grid-cols-2 gap-2.5">
          {benefits.map((benefit, i) => (
            <motion.div
              key={i}
              className={`rounded-2xl p-3.5 shadow-sm flex flex-col justify-between ${
                i === 0
                  ? "col-span-2 bg-gradient-to-br from-slate-900 via-brand-primary to-slate-800 text-white"
                  : "col-span-1 bg-white border border-slate-200/90 text-brand-primary"
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <div>
                <div className={`w-7 h-7 rounded-lg flex items-center justify-center mb-2 ${
                  i === 0 ? "bg-brand-accent text-white" : "bg-emerald-50 text-brand-accent"
                }`}>
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <h3 className={`font-outfit font-bold leading-tight mb-1 ${
                  i === 0 ? "text-[16px] text-white" : "text-[13.5px] text-brand-primary"
                }`}>
                  {benefit.title}
                </h3>
                <p className={`font-inter leading-snug ${
                  i === 0 ? "text-[12.5px] text-slate-300" : "text-[11.5px] text-slate-600 line-clamp-3"
                }`}>
                  {benefit.desc || benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── DESKTOP BENEFITS (md: and above) ── */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-[20px]">
          {benefits.map((benefit, i) => (
            <div key={i} className="bg-white border border-brand-secondary rounded-[30px] p-6 text-center shadow-sm">
              <div className="size-[70px] mx-auto rounded-[18px] bg-gradient-primary flex items-center justify-center mb-4">
                <CheckCircle2 className="w-[34px] h-[34px] text-white" />
              </div>
              <h3 className="font-outfit font-semibold text-[20px] text-brand-primary mb-2">{benefit.title}</h3>
              <p className="font-inter text-[14px] text-slate-600">{benefit.desc || benefit.description}</p>
            </div>
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
    <section className="w-full py-8 sm:py-[60px] md:py-[80px] px-3.5 sm:px-[5%]">
      <div className="max-w-[800px] mx-auto">
        <motion.div
          className="text-center mb-6 sm:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-inter font-semibold text-[12px] sm:text-[14px] tracking-[2px] sm:tracking-[3px] uppercase text-brand-accent mb-2 sm:mb-4">
            Common Questions
          </p>
          <h2 className="font-outfit font-bold text-[22px] sm:text-[clamp(28px,3vw,40px)] leading-[1.2]">
            <span className="text-brand-primary">Frequently Asked</span>
            <span className="text-brand-accent"> Questions</span>
          </h2>
        </motion.div>

        <div className="space-y-2.5 sm:space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
            >
              <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden">
                <button
                  onClick={() => setActiveIndex(activeIndex === i ? -1 : i)}
                  className="w-full min-h-[48px] flex items-center justify-between p-4 sm:p-5 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-inter font-semibold text-[14px] sm:text-[16px] text-brand-primary pr-3">
                    {faq.q}
                  </span>
                  <svg
                    className={`w-4 h-4 sm:w-5 sm:h-5 text-brand-accent flex-shrink-0 transition-transform duration-300 ${
                      activeIndex === i ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    activeIndex === i ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="px-4 pb-4 sm:px-5 sm:pb-5 font-inter text-[13px] sm:text-[15px] text-slate-600 leading-[1.6]">
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

/* ── Related Services Section (Mobile Bento Architecture) ── */
const RelatedServicesSection = ({
  services,
}: {
  services: { label: string; desc: string; href: string }[];
}) => {
  return (
    <section className="w-full py-8 sm:py-[60px] md:py-[80px] px-3.5 sm:px-[5%] bg-gradient-to-b from-white to-brand-accent/5">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          className="flex flex-col items-center gap-2 sm:gap-[10px] mb-6 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-outfit font-bold text-[24px] sm:text-[40px] lg:text-[50px] leading-[30px] sm:leading-[44px] lg:leading-[55px] text-center tracking-tight">
            <span className="text-brand-primary">Related</span>{" "}
            <span className="text-brand-accent">Services</span>
          </h2>
          <div className="h-[4px] sm:h-[6px] w-[140px] sm:w-[260px] lg:w-[300px] rounded-full bg-gradient-to-r from-brand-primary to-brand-accent" />
        </motion.div>

        {/* ── MOBILE BENTO RELATED SERVICES (< 768px) ── */}
        <div className="grid md:hidden grid-cols-2 gap-2.5">
          {services.map((service, i) => (
            <motion.div
              key={i}
              className="col-span-1"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <Link href={service.href} className="block h-full group">
                <div className="bg-white border border-slate-200/90 rounded-2xl p-3.5 h-full flex flex-col justify-between shadow-sm active:scale-[0.98] transition-all">
                  <div>
                    <div className="w-7 h-7 rounded-lg bg-brand-primary text-white flex items-center justify-center mb-2">
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                    <h3 className="font-outfit font-bold text-[13.5px] leading-tight text-brand-primary mb-1 group-hover:text-brand-accent transition-colors">
                      {service.label}
                    </h3>
                    <p className="font-inter text-[11.5px] leading-snug text-slate-600 line-clamp-2">
                      {service.desc}
                    </p>
                  </div>
                  <span className="mt-2.5 pt-2 border-t border-slate-100 font-outfit font-bold text-[11.5px] text-brand-accent flex items-center gap-1">
                    Explore &rarr;
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* ── DESKTOP RELATED SERVICES (md: and above) ── */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-[20px]">
          {services.map((service, i) => (
            <Link key={i} href={service.href} className="block h-full group">
              <div className="bg-white border border-brand-secondary rounded-[30px] p-6 h-full flex flex-col justify-between shadow-sm hover:shadow-card transition-shadow">
                <div>
                  <div className="size-[60px] rounded-[16px] bg-gradient-primary flex items-center justify-center text-white mb-4">
                    <ArrowRight className="w-6 h-6" />
                  </div>
                  <h3 className="font-outfit font-semibold text-[18px] text-brand-primary group-hover:text-brand-accent transition-colors">
                    {service.label}
                  </h3>
                  <p className="mt-2 font-inter text-[13px] text-slate-600">
                    {service.desc}
                  </p>
                </div>
                <span className="mt-4 pt-3 border-t border-slate-100 font-outfit font-semibold text-[13px] text-brand-accent">
                  Learn More &rarr;
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicePageTemplate;
