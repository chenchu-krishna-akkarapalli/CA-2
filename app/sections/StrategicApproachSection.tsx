"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface ApproachCardProps {
  iconSrc: string;
  title: string;
  description: string;
  delay?: number;
}

function ApproachCard({ iconSrc, title, description, delay = 0 }: ApproachCardProps) {
  return (
    <motion.article
      className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] bg-white border border-brand-border-green rounded-[20px] sm:rounded-[30px] shadow-strategic flex flex-col items-center px-5 py-6 sm:py-8"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.4, 0.25, 1] }}
    >
      {/* Icon Container */}
      <div className="w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] lg:w-[142px] lg:h-[142px] rounded-[16px] sm:rounded-[20px] bg-gradient-primary flex items-center justify-center flex-shrink-0">
        <Image
          src={iconSrc}
          alt=""
          width={80}
          height={80}
          className="w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] lg:w-[80px] lg:h-[80px]"
          aria-hidden="true"
        />
      </div>

      {/* Title */}
      <h3 className="mt-4 sm:mt-5 font-outfit font-bold text-[20px] sm:text-[22px] lg:text-[24px] leading-[28px] sm:leading-[30px] lg:leading-[32px] text-center text-brand-dark-green">
        {title}
      </h3>

      {/* Description */}
      <p className="mt-2 sm:mt-3 max-w-[355px] font-inter font-normal text-[13px] sm:text-[14px] leading-[20px] sm:leading-[22px] text-center text-text-secondary">
        {description}
      </p>
    </motion.article>
  );
}

export default function StrategicApproachSection() {
  const approaches = [
    {
      iconSrc: "/Assets/react-icons/FaChalkboardUser.svg",
      title: "Expert Consultation",
      description:
        "Engage with our seasoned professionals who bring years of industry experience to understand your unique financial landscape and challenges.",
    },
    {
      iconSrc: "/Assets/react-icons/SiGoogleanalytics.svg",
      title: "Deep-Dive Analysis",
      description:
        "We perform thorough assessments of your financial data, compliance status, and operational processes to identify risks and opportunities.",
    },
    {
      iconSrc: "/Assets/react-icons/PiStrategyBold.svg",
      title: "Customized Strategy",
      description:
        "Based on our findings, we develop tailored strategies—whether it's a tax-saving plan, audit framework, or growth advisory roadmap.",
    },
    {
      iconSrc: "/Assets/react-icons/FcProcess.svg",
      title: "Seamless Execution",
      description:
        "Our team manages the implementation with precision—filing returns, conducting audits, registering entities—so you can focus on your business.",
    },
    {
      iconSrc: "/Assets/react-icons/BiSupport.svg",
      title: "Ongoing Support",
      description:
        "We believe in lasting relationships. Our team provides continuous monitoring, regular updates, and proactive advisories to keep you ahead.",
    },
  ];

  return (
    <section
      id="strategic-approach"
      className="relative w-screen bg-[rgb(223,242,219)] py-12 sm:py-16 lg:py-[90px] px-4 sm:px-8 lg:px-12 overflow-hidden"
      aria-label="Our Strategic Approach"
    >
      {/* Rectangle 1 — white diagonal at top */}
      <svg
        className="absolute top-0 left-0 w-full pointer-events-none"
        viewBox="0 0 1440 165"
        preserveAspectRatio="none"
        fill="none"
        aria-hidden="true"
        style={{ height: "clamp(60px, 11.5vw, 165px)" }}
      >
        <path d="M0 0H1440L0 165V0Z" fill="white" />
      </svg>

      {/* Rectangle 2 — white diagonal at bottom */}
      <svg
        className="absolute bottom-0 left-0 w-full pointer-events-none"
        viewBox="0 0 1440 165"
        preserveAspectRatio="none"
        fill="none"
        aria-hidden="true"
        style={{ height: "clamp(60px, 11.5vw, 165px)" }}
      >
        <path d="M1440 165H0L1440 0V165Z" fill="white" />
      </svg>

      <div className="relative max-w-[1340px] mx-auto z-10">
        {/* Section Title */}
        <motion.div
          className="flex flex-col items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-outfit font-semibold text-[24px] sm:text-[28px] lg:text-[32px] leading-[32px] sm:leading-[38px] lg:leading-[44px] text-center text-brand-dark-green">
            OUR STRATEGIC{" "}
            <span className="text-brand-accent-green">APPROACH</span>
          </h2>

          {/* Subtitle */}
          <p className="mt-3 sm:mt-4 max-w-[848px] font-inter font-normal text-[14px] sm:text-[15px] lg:text-[16px] leading-[20px] sm:leading-[22px] lg:leading-[19px] text-center text-brand-dark-green">
            We follow a proven, structured methodology designed to deliver real
            results—built around expert insight, thorough analysis, and
            personalized execution.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="flex flex-wrap justify-center gap-5 sm:gap-6 mt-8 sm:mt-10 lg:mt-12">
          {approaches.map((approach, i) => (
            <ApproachCard key={approach.title} {...approach} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}
