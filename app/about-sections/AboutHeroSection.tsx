"use client";
import Link from "next/link";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutHeroSection() {
  return (
    <section
      className="relative w-full min-h-[420px] sm:min-h-[520px] lg:h-[667px] overflow-hidden bg-[#e6e6e6]"
      aria-label="About Us Hero"
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

      {/* Bottom Decorator Wave (Figma: Decorator-Hero-section) */}
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
      <div className="relative z-10 flex flex-col items-center justify-start h-full px-4 sm:px-8 py-16 sm:py-20 lg:py-0 lg:pt-[80px]">
        <div className="w-full max-w-[848px] flex flex-col items-center text-center">
          {/* Breadcrumb */}
          <motion.div
            className="font-outfit font-bold text-[12px] leading-[18px] text-brand-dark-green flex items-center gap-1"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
          >
            <Link href="/" className="hover:text-brand-green transition-colors">Home</Link>
            <span>/</span>
            <span>About Us</span>
          </motion.div>

          {/* About Us */}
          <motion.h1
            className="mt-6 sm:mt-7 font-outfit font-bold text-[54px] sm:text-[72px] lg:text-[96px] leading-[44px] sm:leading-[55px] text-brand-dark-green"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.1, ease: [0.25, 0.4, 0.25, 1] }}
          >
            About <span className="text-brand-green">Us</span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            className="mt-6 sm:mt-7 max-w-[734px] font-outfit font-bold text-[24px] sm:text-[34px] lg:text-[50px] leading-[30px] sm:leading-[44px] lg:leading-[55px]"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.18, ease: [0.25, 0.4, 0.25, 1] }}
          >
            <span className="text-brand-dark-green">Building Trust Through </span>
            <span className="text-black">- </span>
            <span className="text-brand-green">Financial Excellence</span>
          </motion.p>

          {/* Subtitle */}
          <motion.p
            className="mt-6 sm:mt-7 font-inter font-light text-[14px] sm:text-[15px] lg:text-[16px] leading-[20px] sm:leading-[22px] lg:leading-[19px] text-brand-dark-green"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
          >
            A Chartered Accountants firm built on over 10 years of industry experience, committed to delivering
            quality services and strategic financial insights.
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="mt-9 flex flex-col sm:flex-row items-center gap-3.5 sm:gap-[41px]"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45, ease: [0.25, 0.4, 0.25, 1] }}
          >
            <a
              href="/#what-we-do"
              className="w-[134px] h-[36px] rounded-[6px] bg-gradient-btn-services flex items-center justify-center"
              aria-label="View our services"
            >
              <span className="font-outfit font-medium text-[14px] leading-[20px] text-white">
                Our Services
              </span>
            </a>
            <a
              href="/#get-in-touch"
              className="w-[134px] h-[36px] rounded-[6px] border border-brand-green bg-white/50 backdrop-blur-[2px] flex items-center justify-center"
              aria-label="Connect with us"
            >
              <span className="font-outfit font-medium text-[14px] leading-[20px] text-brand-dark-green">
                Connect Us
              </span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
