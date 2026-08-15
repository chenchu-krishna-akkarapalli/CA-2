"use client";

import Link from "next/link";
import Image from "next/image";
import OptimizedImage from "../components/OptimizedImage";
import { motion } from "framer-motion";
import BlurText from "../components/BlurText";

export default function AboutHeroSection() {
  return (
    <section
      className="relative w-full min-h-[420px] sm:min-h-[520px] lg:h-[667px] overflow-hidden bg-[#e6e6e6]"
      aria-label="About Us Hero"
    >
      {/* Background */}
      <div className="absolute inset-0" aria-hidden="true">
        <OptimizedImage
          src="/Assets/figma/about/about-hero-bg.avif"
          alt=""
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </div>

      {/* Bottom Decorator Wave */}
      <div
        className="absolute bottom-0 h-[120px] sm:h-[170px] lg:h-[186px] w-full left-0"
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
            <span>About Us</span>
          </motion.div>

          {/* Title — Balanced Mobile Scaling */}
          <h1 className="mt-4 sm:mt-7 font-outfit font-bold text-[34px] sm:text-[72px] lg:text-[96px] leading-[38px] sm:leading-[55px] text-center tracking-tight">
            <BlurText
              segments={[
                { text: "About", className: "text-brand-primary" },
                { text: "Us", className: "text-brand-accent" },
              ]}
              className="justify-center"
            />
          </h1>

          {/* Tagline */}
          <motion.p
            className="mt-3.5 sm:mt-7 max-w-[734px] font-outfit font-bold text-[20px] sm:text-[34px] lg:text-[50px] leading-[26px] sm:leading-[44px] lg:leading-[55px] text-balance tracking-tight"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55, ease: [0.25, 0.4, 0.25, 1] }}
          >
            <span className="text-brand-primary">Building Trust Through </span>
            <span className="text-black">- </span>
            <span className="text-brand-accent">Financial Excellence</span>
          </motion.p>

          {/* Subtitle */}
          <motion.p
            className="mt-3.5 sm:mt-7 max-w-xs sm:max-w-xl lg:max-w-[848px] font-inter font-normal sm:font-light text-[13.5px] sm:text-[15px] lg:text-[16px] leading-[22px] sm:leading-[22px] lg:leading-[19px] text-brand-primary/90"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
          >
            A Chartered Accountants firm built on over 10 years of industry experience, committed to delivering
            quality services and strategic financial insights.
          </motion.p>

          {/* Buttons — Mobile Ergonomic Touch Targets */}
          <motion.div
            className="mt-6 sm:mt-9 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-[41px] w-full max-w-xs sm:max-w-none"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.85, ease: [0.25, 0.4, 0.25, 1] }}
          >
            <a
              href="/#what-we-do"
              className="w-full sm:w-auto min-h-[44px] rounded-xl sm:rounded-[6px] bg-gradient-btn-services inline-flex items-center justify-center px-6 py-2.5 sm:py-[8px] active:scale-95 transition-all shadow-sm"
              aria-label="View our services"
            >
              <span className="font-outfit font-semibold text-[14px] leading-[20px] text-white">
                Our Services
              </span>
            </a>
            <a
              href="/#get-in-touch"
              className="w-full sm:w-auto min-h-[44px] rounded-xl sm:rounded-[6px] border border-brand-accent bg-white/70 backdrop-blur-[2px] inline-flex items-center justify-center px-6 py-2.5 sm:py-[8px] active:scale-95 transition-all"
              aria-label="Connect with us"
            >
              <span className="font-outfit font-semibold text-[14px] leading-[20px] text-brand-primary">
                Connect Us
              </span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
