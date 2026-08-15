"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import BlurText from "../components/BlurText";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative w-full min-h-[420px] sm:min-h-[500px] lg:h-[670px] bg-[#e6e6e6] overflow-hidden"
      aria-label="Hero Section"
    >
      {/* Background Wave */}
      <div className="absolute inset-0">
        <Image
          src="/Assets/Images/Vector 1-960w.avif"
          alt="Financial Growth Curve Background"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-start h-full px-4 sm:px-6 lg:px-8 py-10 sm:py-16 lg:py-0 lg:pt-[50px]">
        {/* Invisible breadcrumb placeholder to maintain layout height */}
        <div
          className="font-outfit font-bold text-[12px] leading-[18px] text-brand-primary flex items-center gap-1 mb-4 sm:mb-7"
          aria-hidden="true"
        >
          <span className="opacity-0 select-none">Home</span>
        </div>

        {/* Title — Balanced mobile font scale with text-balance */}
        <h1 className="max-w-[734px] font-outfit font-bold text-[24px] sm:text-[34px] lg:text-[50px] leading-[30px] sm:leading-[42px] lg:leading-[55px] text-center text-balance tracking-tight">
          <BlurText
            segments={[
              { text: "Trusted Chartered Accountants Delivering Value", className: "text-brand-primary" },
              { text: "-", className: "text-black" },
              { text: "Driven Financial Solutions", className: "text-brand-accent-hover" },
            ]}
            className="justify-center"
          />
        </h1>

        {/* Subtitle — Mobile optimized line-height and max-width */}
        <p
          className="mt-4 sm:mt-6 lg:mt-10 max-w-xs sm:max-w-xl lg:max-w-[848px] font-inter font-normal text-[13.5px] sm:text-[15px] lg:text-[16px] leading-[22px] sm:leading-[24px] lg:leading-[26px] text-center text-brand-primary/90 px-1 sm:px-2"
        >
          A young and dynamic Chartered Accountants firm focused on delivering
          quality services, strategic financial insights, and personalized
          solutions that help businesses grow and stay compliant.
        </p>

        {/* Connect Button — Mobile 44px+ touch target with active state */}
        <div
          className="w-full sm:w-auto mt-6 sm:mt-8 flex justify-center"
        >
          <a
            href="#get-in-touch"
            className="w-full sm:w-auto min-h-[46px] rounded-[10px] sm:rounded-[8px] border border-brand-primary bg-gradient-btn-hero overflow-hidden inline-flex items-center justify-center gap-2 px-6 py-3 sm:py-[9px] cursor-pointer hover:opacity-90 active:scale-[0.98] transition-all shadow-sm"
            aria-label="Connect Us"
          >
            <span className="font-outfit font-semibold text-[15px] sm:text-[16px] leading-[19px] text-white text-center">
              Connect Us
            </span>
            <ArrowRight className="w-[18px] h-[18px] text-white shrink-0" strokeWidth={2} />
          </a>
        </div>
      </div>
    </section>
  );
}
