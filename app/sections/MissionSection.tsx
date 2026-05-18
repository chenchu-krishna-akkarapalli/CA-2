"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import HeadingReveal from "../components/HeadingReveal";

export default function MissionSection() {
  return (
    <section
      id="mission"
      className="flex flex-col items-center gap-3 sm:gap-[14px] w-full max-w-[1132px]"
      aria-label="Our Mission"
    >
      {/* Section Title */}
      <HeadingReveal className="w-full">
        <h2 className="font-outfit font-semibold text-[24px] sm:text-[28px] lg:text-[32px] leading-[32px] sm:leading-[38px] lg:leading-[44px] text-center">
          <span className="text-brand-primary">OUR</span>{" "}
          <span className="text-brand-accent">MISSION</span>
        </h2>
      </HeadingReveal>

      {/* Mission Card */}
      <motion.div
        className="relative w-full min-h-[280px] sm:min-h-[500px] lg:h-[369px] border border-brand-accent rounded-tl-[30px] sm:rounded-tl-[50px] lg:rounded-tl-[66px] rounded-br-[30px] sm:rounded-br-[50px] lg:rounded-br-[66px] overflow-hidden  px-4 sm:px-8 lg:px-12 py-8 sm:py-10 lg:py-14"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
      >
        {/* Icon + Card Title Row */}
        <div className="flex items-center justify-center gap-3 sm:gap-4 mb-6 sm:mb-8">
          <Image
            src="/Assets/react-icons/SiTaxbuzz.svg"
            alt="Strategic Precision Icon"
            width={60}
            height={60}
            className="w-[50px] h-[50px] sm:w-[70px] sm:h-[70px] lg:w-[100px] lg:h-[100px]"
          />
          <h3 className="max-w-[438px] font-outfit font-semibold text-[20px] sm:text-[26px] lg:text-[32px] leading-[24px] sm:leading-[28px] lg:leading-[32px] text-center text-brand-accent">
            Beyond Standard Checklists to Strategic Precision
          </h3>
        </div>

        {/* Description */}
        <p className="max-w-[1003px] mx-auto font-outfit font-medium text-[16px] sm:text-[20px] lg:text-[24px] leading-[24px] sm:leading-[28px] lg:leading-[32px] text-center text-brand-primary">
          To deliver high-quality, reliable, and value-driven financial services
          that empower businesses to grow with confidence and clarity. We are
          committed to providing accurate audit, taxation, and advisory
          solutions through a personalized, client-focused approach that ensures
          compliance, strengthens financial systems, and supports informed
          decision-making.
        </p>

        {/* Sub Description */}
        <p className="max-w-[1003px] mx-auto mt-4 sm:mt-6 font-outfit font-medium text-[14px] sm:text-[17px] lg:text-[20px] leading-[20px] sm:leading-[22px] lg:leading-[25px] text-center text-brand-accent">
          We aim to build long-term relationships based on trust, integrity,
          and professional excellence while continuously striving to add
          measurable value to every client we serve.
        </p>
      </motion.div>
    </section>
  );
}
