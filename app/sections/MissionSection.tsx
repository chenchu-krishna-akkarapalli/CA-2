"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import HeadingReveal from "../components/HeadingReveal";

export default function MissionSection() {
  return (
    <section
      id="mission"
      className="flex flex-col items-center gap-3 sm:gap-[14px] w-full max-w-[1132px] px-1 sm:px-0"
      aria-label="Our Mission"
    >
      {/* Section Title */}
      <HeadingReveal className="w-full">
        <h2 className="font-outfit font-semibold text-[22px] sm:text-[28px] lg:text-[32px] leading-[28px] sm:leading-[38px] lg:leading-[44px] text-center tracking-tight uppercase">
          <span className="text-brand-primary">OUR</span>{" "}
          <span className="text-brand-accent-hover">MISSION</span>
        </h2>
      </HeadingReveal>

      {/* Mission Card — Mobile fluid padding and gentle border radius */}
      <motion.div
        className="relative w-full bg-white/95 border border-brand-accent/40 sm:border-brand-accent rounded-2xl sm:rounded-tl-[50px] sm:rounded-br-[50px] lg:rounded-tl-[66px] lg:rounded-br-[66px] overflow-hidden shadow-sm sm:shadow-mission px-4 sm:px-8 lg:px-12 py-6 sm:py-10 lg:py-14"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
      >
        {/* Icon + Card Title Row */}
        <div className="flex flex-col xs:flex-row items-center justify-center gap-2.5 sm:gap-4 mb-4 sm:mb-8 text-center xs:text-left">
          <div className="w-11 h-11 sm:w-16 sm:h-16 rounded-xl bg-brand-accent/10 flex items-center justify-center shrink-0">
            <Image
              src="/Assets/react-icons/SiTaxbuzz.svg"
              alt="Strategic Precision Icon"
              width={60}
              height={60}
              className="w-7 h-7 sm:w-10 sm:h-10 lg:w-[70px] lg:h-[70px] object-contain"
            />
          </div>
          <h3 className="max-w-[438px] font-outfit font-semibold text-[17px] sm:text-[24px] lg:text-[32px] leading-[22px] sm:leading-[28px] lg:leading-[32px] text-brand-primary text-center xs:text-left">
            Beyond Standard Checklists to Strategic Precision
          </h3>
        </div>

        {/* Description */}
        <p className="max-w-[1003px] mx-auto font-outfit font-normal sm:font-medium text-[13.5px] sm:text-[18px] lg:text-[24px] leading-[22px] sm:leading-[28px] lg:leading-[32px] text-center text-brand-primary">
          To deliver high-quality, reliable, and value-driven financial services
          that empower businesses to grow with confidence and clarity. We are
          committed to providing accurate audit, taxation, and advisory
          solutions through a personalized, client-focused approach that ensures
          compliance, strengthens financial systems, and supports informed
          decision-making.
        </p>

        {/* Sub Description */}
        <p className="max-w-[1003px] mx-auto mt-3 sm:mt-6 font-outfit font-medium text-[12.5px] sm:text-[15px] lg:text-[20px] leading-[19px] sm:leading-[22px] lg:leading-[25px] text-center text-brand-accent-hover">
          We aim to build long-term relationships based on trust, integrity,
          and professional excellence while continuously striving to add
          measurable value to every client we serve.
        </p>
      </motion.div>
    </section>
  );
}
