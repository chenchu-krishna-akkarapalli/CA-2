"use client";

import Link from "next/link";
import OptimizedImage from "../components/OptimizedImage";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import BlurText from "../components/BlurText";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative w-full min-h-[400px] sm:min-h-[500px] lg:h-[670px] bg-[#e6e6e6] overflow-hidden"
      aria-label="Hero Section"
    >
      {/* Background Wave */}
      <div className="absolute inset-0">
        <OptimizedImage
          src="/Assets/Images/Vector 1.png"
          alt=""
          fill
          className="object-cover"
          priority
          aria-hidden="true"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-start h-full px-4 sm:px-8 py-16 sm:py-20 lg:py-0 lg:pt-[50px]">
        {/* Invisible breadcrumb placeholder to maintain layout height */}
        <motion.div
          className="font-outfit font-bold text-[12px] leading-[18px] text-brand-primary flex items-center gap-1 mb-6 sm:mb-7"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
        >
          <span className="opacity-0">Home</span>
        </motion.div>

        {/* Title — BlurText word-by-word, Direction Bottom, 250 ms delay */}
        <h1 className="max-w-[734px] font-outfit font-bold text-[28px] sm:text-[36px] lg:text-[50px] leading-[34px] sm:leading-[42px] lg:leading-[55px] text-center">
          <BlurText
            segments={[
              { text: "Trusted Chartered Accountants Delivering Value", className: "text-brand-primary" },
              { text: "-", className: "text-black" },
              { text: "Driven Financial Solutions", className: "text-brand-accent" },
            ]}
            className="justify-center"
          />
        </h1>

        {/* Subtitle */}
        <motion.p
          className="mt-6 sm:mt-8 lg:mt-10 max-w-[848px] font-inter font-light text-[14px] sm:text-[15px] lg:text-[16px] leading-[20px] sm:leading-[22px] lg:leading-[19px] text-center text-brand-primary px-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.4, 0.25, 1] }}
        >
          A young and dynamic Chartered Accountants firm focused on delivering
          quality services, strategic financial insights, and personalized
          solutions that help businesses grow and stay compliant.
        </motion.p>

        {/* Connect Button — adaptive padding replaces fixed w/h */}
        <motion.a
          href="#get-in-touch"
          className="mt-6 sm:mt-8 rounded-[8px] border border-brand-primary bg-gradient-btn-hero overflow-hidden inline-flex items-center justify-center gap-2 px-5 py-[7px] cursor-pointer hover:opacity-90 transition-opacity"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          aria-label="Connect with us"
        >
          <span className="font-outfit font-semibold text-[16px] leading-[19px] text-white text-center">
            Connect Us
          </span>
          <ArrowRight className="w-[18px] h-[20px] text-white" strokeWidth={2} />
        </motion.a>
      </div>
    </section>
  );
}
