"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import HeadingReveal from "../components/HeadingReveal";

interface ServiceCardProps {
  image: string;
  title: string;
  description: string;
  iconSrc: string;
  delay?: number;
}

function ServiceCard({ image, title, description, iconSrc, delay = 0 }: ServiceCardProps) {
  return (
    <motion.article
      className="w-full sm:w-[calc(50%-16px)] lg:w-[calc(33.333%-22px)] bg-white border border-slate-200/90 rounded-2xl overflow-hidden shadow-card relative flex flex-col"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.4, 0.25, 1] }}
    >
      {/* Card Image */}
      <div className="w-full h-[160px] sm:h-[192px] overflow-hidden relative">
        <Image
          src={image}
          alt={title}
          width={388}
          height={192}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/10" aria-hidden="true" />
      </div>

      {/* Card Body */}
      <div className="relative flex-1 pt-8 sm:pt-10 pb-5 sm:pb-6 px-4 sm:px-6 flex flex-col">
        {/* Icon Badge */}
        <div className="absolute -top-7 right-4 sm:right-6 w-14 h-14 sm:w-16 sm:h-16 bg-white rounded-xl sm:rounded-[16px] shadow-badge flex items-center justify-center border border-slate-100">
          <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-lg sm:rounded-[14px] bg-gradient-primary flex items-center justify-center">
            <Image src={iconSrc} alt="" width={24} height={24} className="brightness-0 invert sm:w-7 sm:h-7" aria-hidden="true" />
          </div>
        </div>

        {/* Title */}
        <h3 className="font-outfit font-bold text-[18px] sm:text-[24px] leading-[24px] sm:leading-[32px] text-center sm:text-left text-brand-primary pr-0 sm:pr-10">
          {title}
        </h3>

        {/* Description */}
        <p className="mt-2.5 sm:mt-3 font-inter font-normal text-[13.5px] sm:text-[16px] leading-[22px] sm:leading-[24px] text-center sm:text-left text-slate-600 flex-1">
          {description}
        </p>

        {/* Explore Link */}
        <div className="mt-4 border-t border-slate-100 pt-4 flex justify-center">
          <Link
            href="/services"
            className="min-h-[44px] w-full py-2.5 rounded-lg flex items-center justify-center gap-1.5 text-sky-700 font-outfit font-semibold text-[14px] leading-[20px] hover:bg-slate-50 active:scale-[0.98] transition-all group"
            aria-label={`Explore ${title} service`}
          >
            <span>Explore Service</span>
            <Image
              src="/Assets/Icon-8.svg"
              alt=""
              width={16}
              height={16}
              className="group-hover:translate-x-1 transition-transform"
              aria-hidden="true"
            />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}

export default function WhatWeDoSection() {
  const services = [
    {
      image: "/Assets/Images/Image (Audit & Assurance).webp",
      title: "Audit & Assurance",
      description:
        "We deliver reliable and transparent auditing services that strengthen financial credibility and ensure regulatory compliance.",
      iconSrc: "/Assets/Icon-7.svg",
    },
    {
      image: "/Assets/Images/Image (Taxation).webp",
      title: "Taxation",
      description:
        "We help individuals and businesses stay compliant while optimizing tax efficiency through structured planning and expert representation.",
      iconSrc: "/Assets/Icon-9.svg",
    },
    {
      image: "/Assets/Images/Image (Advisory Services).webp",
      title: "Advisory Services",
      description:
        "We provide practical financial and operational guidance to support smarter decision-making and sustainable business growth.",
      iconSrc: "/Assets/Icon-11.svg",
    },
  ];

  return (
    <section
      id="what-we-do"
      className="relative w-full max-w-[1318px] border border-brand-accent/60 sm:border-brand-accent rounded-2xl sm:rounded-[30px] overflow-hidden py-6 sm:py-10 lg:py-[42px] px-3 sm:px-6 lg:px-[42px] bg-white"
      aria-label="What We Do"
    >
      {/* Header Row */}
      <div className="flex flex-col items-center gap-3 sm:gap-4">
        {/* Section Title */}
        <HeadingReveal>
          <h2 className="font-outfit font-bold text-[22px] sm:text-[28px] lg:text-[32px] leading-[28px] sm:leading-[38px] lg:leading-[44px] text-center text-brand-primary tracking-tight">
            WHAT WE <span className="text-brand-accent-hover">DO?</span>
          </h2>
        </HeadingReveal>

        {/* View All Button */}
        <Link
          href="/services"
          className="min-h-[44px] rounded-xl sm:rounded-[8px] border border-surface-btn-border bg-gradient-btn-services overflow-hidden inline-flex items-center justify-center gap-1.5 px-5 py-2.5 sm:py-[11px] active:scale-[0.98] hover:opacity-90 transition-all shadow-sm"
          aria-label="View All Services"
        >
          <span className="font-outfit font-semibold text-[14px] sm:text-[16px] leading-[19px] text-white text-center">
            View All Services
          </span>
          <ArrowRight className="w-4 h-4 sm:w-[18px] sm:h-[20px] text-white" strokeWidth={2} />
        </Link>
      </div>

      {/* Subtitle */}
      <p className="mt-3 sm:mt-5 max-w-xs sm:max-w-[848px] mx-auto font-inter font-normal text-[13px] sm:text-[15px] lg:text-[16px] leading-[20px] sm:leading-[22px] lg:leading-[26px] text-center text-slate-600">
        We provide comprehensive, practical, and forward-thinking financial
        solutions designed to support businesses at every stage of growth.
      </p>

      {/* ── MOBILE BENTO GRID (< 768px) ── */}
      <div className="mt-5 grid md:hidden grid-cols-2 gap-2.5">
        {/* Bento Cell 1: Span 2 Hero Card (Audit & Assurance) */}
        <motion.div
          className="col-span-2 bg-gradient-to-br from-slate-900 via-brand-primary to-slate-800 rounded-2xl p-4 text-white relative overflow-hidden shadow-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-start justify-between gap-3 mb-2.5">
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-brand-accent/20 border border-brand-accent/30 text-[10.5px] font-outfit font-bold uppercase tracking-wider text-sky-300">
              PRIMARY PILLAR
            </span>
            <div className="w-9 h-9 rounded-xl bg-brand-accent text-white flex items-center justify-center shadow-md shrink-0">
              <Image src="/Assets/Icon-7.svg" alt="" width={20} height={20} className="brightness-0 invert" aria-hidden="true" />
            </div>
          </div>

          <h3 className="font-outfit font-extrabold text-[18px] leading-tight text-white mb-1.5">
            {services[0].title}
          </h3>
          <p className="font-inter text-[12.5px] leading-relaxed text-slate-300 mb-3.5">
            {services[0].description}
          </p>

          <Link
            href="/services"
            className="w-full min-h-[40px] bg-white/10 hover:bg-white/20 active:scale-95 border border-white/15 rounded-xl flex items-center justify-center gap-1.5 font-outfit font-semibold text-[13px] text-white transition-all"
            aria-label="Explore Audit Services"
          >
            <span>Explore Audit Services</span>
            <ArrowRight className="w-3.5 h-3.5 text-sky-400" />
          </Link>
        </motion.div>

        {/* Bento Cell 2: Split Card (Taxation) */}
        <motion.div
          className="col-span-1 bg-white border border-slate-200/90 rounded-2xl p-3.5 flex flex-col justify-between shadow-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.08 }}
        >
          <div>
            <div className="w-8 h-8 rounded-lg bg-emerald-50 text-brand-accent flex items-center justify-center mb-2.5">
              <Image src="/Assets/Icon-9.svg" alt="" width={18} height={18} className="brightness-0" aria-hidden="true" />
            </div>
            <h3 className="font-outfit font-bold text-[14.5px] leading-snug text-brand-primary mb-1">
              {services[1].title}
            </h3>
            <p className="font-inter text-[11.5px] leading-snug text-slate-600 line-clamp-3">
              Tax planning, return filings, and representation.
            </p>
          </div>
          <Link
            href="/services"
            className="mt-3 pt-2.5 border-t border-slate-100 inline-flex items-center gap-1 font-outfit font-bold text-[12px] text-sky-700"
            aria-label="Explore Taxation Services"
          >
            <span>Explore</span>
            <ArrowRight className="w-3 h-3" />
          </Link>
        </motion.div>

        {/* Bento Cell 3: Split Card (Advisory Services) */}
        <motion.div
          className="col-span-1 bg-white border border-slate-200/90 rounded-2xl p-3.5 flex flex-col justify-between shadow-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.16 }}
        >
          <div>
            <div className="w-8 h-8 rounded-lg bg-emerald-50 text-brand-accent flex items-center justify-center mb-2.5">
              <Image src="/Assets/Icon-11.svg" alt="" width={18} height={18} className="brightness-0" aria-hidden="true" />
            </div>
            <h3 className="font-outfit font-bold text-[14.5px] leading-snug text-brand-primary mb-1">
              {services[2].title}
            </h3>
            <p className="font-inter text-[11.5px] leading-snug text-slate-600 line-clamp-3">
              Strategic financial roadmap and growth consulting.
            </p>
          </div>
          <Link
            href="/services"
            className="mt-3 pt-2.5 border-t border-slate-100 inline-flex items-center gap-1 font-outfit font-bold text-[12px] text-sky-700"
            aria-label="Explore Advisory Services"
          >
            <span>Explore</span>
            <ArrowRight className="w-3 h-3" />
          </Link>
        </motion.div>
      </div>

      {/* ── DESKTOP GRID (md: and above) ── */}
      <div className="hidden md:flex mt-8 flex-wrap justify-center gap-8">
        {services.map((service, i) => (
          <ServiceCard key={service.title} {...service} delay={i * 0.15} />
        ))}
      </div>
    </section>
  );
}
