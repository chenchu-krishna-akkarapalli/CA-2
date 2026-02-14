"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

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
      className="w-full sm:w-[calc(50%-16px)] lg:w-[calc(33.333%-22px)] bg-white border-[0.8px] border-surface-card-border rounded-[16px] overflow-hidden shadow-card relative flex flex-col"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.4, 0.25, 1] }}
    >
      {/* Card Image */}
      <div className="w-full h-[180px] sm:h-[192px] overflow-hidden relative">
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
      <div className="relative flex-1 pt-10 pb-6 px-4 sm:px-5 flex flex-col">
        {/* Icon Badge */}
        <div className="absolute -top-8 right-6 w-16 h-16 bg-white rounded-[16px] shadow-badge flex items-center justify-center">
          <div className="w-14 h-14 rounded-[14px] bg-gradient-primary flex items-center justify-center">
            <Image src={iconSrc} alt="" width={28} height={28} aria-hidden="true" />
          </div>
        </div>

        {/* Title */}
        <h3 className="font-outfit font-bold text-[20px] sm:text-[24px] leading-[28px] sm:leading-[32px] text-center text-brand-dark-green">
          {title}
        </h3>

        {/* Description */}
        <p className="mt-3 font-inter font-normal text-[14px] sm:text-[16px] leading-[22px] sm:leading-[24px] text-center text-brand-dark-green flex-1">
          {description}
        </p>

        {/* Explore Link */}
        <div className="mt-4 border-t-[0.8px] border-brand-accent-green pt-5 flex justify-center">
          <a
            href="#"
            className="flex items-center gap-1 group"
            aria-label={`Explore ${title} service`}
          >
            <span className="font-arial font-bold text-[14px] leading-[20px] text-brand-accent-green">
              Explore Service{" "}
            </span>
            <Image
              src="/Assets/Icon-8.svg"
              alt=""
              width={16}
              height={16}
              className="group-hover:translate-x-1 transition-transform"
              aria-hidden="true"
            />
          </a>
        </div>
      </div>
    </motion.article>
  );
}

export default function WhatWeDoSection() {
  const services = [
    {
      image: "/Assets/Images/Image (Audit & Assurance).png",
      title: "Audit & Assurance",
      description:
        "We deliver reliable and transparent auditing services that strengthen financial credibility and ensure regulatory compliance.",
      iconSrc: "/Assets/Icon-7.svg",
    },
    {
      image: "/Assets/Images/Image (Taxation).png",
      title: "Taxation",
      description:
        "We help individuals and businesses stay compliant while optimizing tax efficiency through structured planning and expert representation.",
      iconSrc: "/Assets/Icon-9.svg",
    },
    {
      image: "/Assets/Images/Image (Advisory Services).png",
      title: "Advisory Services",
      description:
        "We provide practical financial and operational guidance to support smarter decision-making and sustainable business growth.",
      iconSrc: "/Assets/Icon-11.svg",
    },
  ];

  return (
    <section
      id="what-we-do"
      className="relative w-full max-w-[1318px] border border-brand-green rounded-[20px] sm:rounded-[30px] overflow-hidden py-8 sm:py-10 lg:py-[42px] px-4 sm:px-6 lg:px-[42px]"
      aria-label="What We Do"
    >
      {/* Header Row */}
      <div className="flex flex-col items-center gap-4">
        {/* Section Title */}
        <h2 className="font-outfit font-semibold text-[24px] sm:text-[28px] lg:text-[32px] leading-[32px] sm:leading-[38px] lg:leading-[44px] text-center text-brand-dark-green">
          WHAT WE <span className="text-brand-accent-green">DO?</span>
        </h2>

        {/* View All Button */}
        <a
          href="#"
          className="w-[163px] h-[44px] rounded-[8px] border border-surface-btn-border bg-gradient-btn-services overflow-hidden flex items-center justify-center gap-1.5 hover:opacity-90 transition-opacity flex-shrink-0"
          aria-label="View all services"
        >
          <span className="font-outfit font-semibold text-[16px] leading-[19px] text-white text-center">
            View All Services
          </span>
          <ArrowRight className="w-[18px] h-[20px] text-white" strokeWidth={2} />
        </a>
      </div>

      {/* Subtitle */}
      <p className="mt-4 sm:mt-5 max-w-[848px] mx-auto font-inter font-normal text-[14px] sm:text-[15px] lg:text-[16px] leading-[20px] sm:leading-[22px] lg:leading-[19px] text-center text-brand-dark-green">
        We provide comprehensive, practical, and forward-thinking financial
        solutions designed to support businesses at every stage of growth. Our
        core services are built around accuracy, compliance, and strategic
        guidance
      </p>

      {/* Service Cards */}
      <div className="mt-6 sm:mt-8 flex flex-wrap justify-center gap-6 sm:gap-8">
        {services.map((service, i) => (
          <ServiceCard key={service.title} {...service} delay={i * 0.15} />
        ))}
      </div>
    </section>
  );
}
