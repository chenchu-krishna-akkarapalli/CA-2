"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import HeadingReveal from "../components/HeadingReveal";

interface ApproachItem {
  iconSrc: string;
  title: string;
  description: string;
}

const approaches: ApproachItem[] = [
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

/* ── Desktop Card ── */
function DesktopApproachCard({
  iconSrc,
  title,
  description,
  delay = 0,
}: ApproachItem & { delay?: number }) {
  return (
    <motion.article
      className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] bg-white border border-brand-secondary rounded-[20px] sm:rounded-[30px] shadow-strategic flex flex-col items-center px-5 py-6 sm:py-8"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.4, 0.25, 1] }}
    >
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

      <h3 className="mt-4 sm:mt-5 font-outfit font-bold text-[20px] sm:text-[22px] lg:text-[24px] leading-[28px] sm:leading-[30px] lg:leading-[32px] text-center text-brand-primary">
        {title}
      </h3>

      <p className="mt-2 sm:mt-3 max-w-[355px] font-inter font-normal text-[13px] sm:text-[14px] leading-[20px] sm:leading-[22px] text-center text-text-secondary">
        {description}
      </p>
    </motion.article>
  );
}

export default function StrategicApproachSection() {
  return (
    <section
      id="strategic-approach"
      className="relative w-screen bg-[rgb(215,240,238)] py-10 sm:py-16 lg:py-[90px] px-3.5 sm:px-8 lg:px-12 overflow-hidden"
      aria-label="Our Strategic Approach"
    >
      {/* Rectangle 1 — white diagonal at top */}
      <svg
        className="absolute top-0 left-0 w-full pointer-events-none"
        viewBox="0 0 1440 165"
        preserveAspectRatio="none"
        fill="none"
        aria-hidden="true"
        style={{ height: "clamp(40px, 11.5vw, 165px)" }}
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
        style={{ height: "clamp(40px, 11.5vw, 165px)" }}
      >
        <path d="M1440 165H0L1440 0V165Z" fill="white" />
      </svg>

      <div className="relative max-w-[1340px] mx-auto z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center">
          <HeadingReveal>
            <h2 className="font-outfit font-bold text-[22px] sm:text-[28px] lg:text-[32px] leading-[28px] sm:leading-[38px] lg:leading-[44px] text-center tracking-tight text-brand-primary">
              OUR STRATEGIC{" "}
              <span className="text-brand-accent-hover">APPROACH</span>
            </h2>
          </HeadingReveal>

          <p className="mt-2.5 sm:mt-4 max-w-xs sm:max-w-[848px] font-inter font-normal text-[13.5px] sm:text-[15px] lg:text-[16px] leading-[20px] sm:leading-[22px] lg:leading-[19px] text-center text-brand-primary/90">
            We follow a proven, structured methodology designed to deliver real
            results—built around expert insight, thorough analysis, and
            personalized execution.
          </p>
        </div>

        {/* ── MOBILE BENTO GRID (Visible on screens < 768px) ── */}
        <div className="grid md:hidden grid-cols-2 gap-3 mt-6">
          {/* Bento Cell 1: Featured Hero Card (Span 2) */}
          <motion.div
            className="col-span-2 bg-white/95 border border-brand-accent/30 rounded-2xl p-4 shadow-sm relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center justify-between mb-3">
              <div className="w-10 h-10 rounded-xl bg-brand-primary flex items-center justify-center">
                <Image src={approaches[0].iconSrc} alt="" width={22} height={22} className="brightness-0 invert" aria-hidden="true" />
              </div>
              <span className="font-outfit font-extrabold text-[12px] px-2.5 py-0.5 rounded-full bg-sky-100 text-sky-800 tracking-wider">
                STEP 01
              </span>
            </div>
            <h3 className="font-outfit font-bold text-[16px] text-brand-primary mb-1">
              {approaches[0].title}
            </h3>
            <p className="font-inter text-[12.5px] leading-relaxed text-slate-600">
              {approaches[0].description}
            </p>
          </motion.div>

          {/* Bento Cell 2: Step 02 (Span 1) */}
          <motion.div
            className="col-span-1 bg-white/95 border border-slate-200/90 rounded-2xl p-3.5 shadow-sm flex flex-col justify-between"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center">
                  <Image src={approaches[1].iconSrc} alt="" width={18} height={18} aria-hidden="true" />
                </div>
                <span className="font-outfit font-bold text-[11px] text-slate-400">02</span>
              </div>
              <h3 className="font-outfit font-bold text-[14px] leading-tight text-brand-primary mb-1">
                {approaches[1].title}
              </h3>
            </div>
            <p className="font-inter text-[11.5px] leading-snug text-slate-600 line-clamp-3">
              {approaches[1].description}
            </p>
          </motion.div>

          {/* Bento Cell 3: Step 03 (Span 1) */}
          <motion.div
            className="col-span-1 bg-white/95 border border-slate-200/90 rounded-2xl p-3.5 shadow-sm flex flex-col justify-between"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center">
                  <Image src={approaches[2].iconSrc} alt="" width={18} height={18} aria-hidden="true" />
                </div>
                <span className="font-outfit font-bold text-[11px] text-slate-400">03</span>
              </div>
              <h3 className="font-outfit font-bold text-[14px] leading-tight text-brand-primary mb-1">
                {approaches[2].title}
              </h3>
            </div>
            <p className="font-inter text-[11.5px] leading-snug text-slate-600 line-clamp-3">
              {approaches[2].description}
            </p>
          </motion.div>

          {/* Bento Cell 4: Step 04 (Span 2 Horizontal) */}
          <motion.div
            className="col-span-2 bg-white/95 border border-slate-200/90 rounded-2xl p-3.5 shadow-sm flex items-start gap-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center shrink-0">
              <Image src={approaches[3].iconSrc} alt="" width={22} height={22} aria-hidden="true" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-0.5">
                <h3 className="font-outfit font-bold text-[14px] text-brand-primary truncate">
                  {approaches[3].title}
                </h3>
                <span className="font-outfit font-bold text-[11px] text-slate-400">04</span>
              </div>
              <p className="font-inter text-[12px] leading-snug text-slate-600">
                {approaches[3].description}
              </p>
            </div>
          </motion.div>

          {/* Bento Cell 5: Step 05 (Span 2 Horizontal) */}
          <motion.div
            className="col-span-2 bg-white/95 border border-slate-200/90 rounded-2xl p-3.5 shadow-sm flex items-start gap-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center shrink-0">
              <Image src={approaches[4].iconSrc} alt="" width={22} height={22} aria-hidden="true" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-0.5">
                <h3 className="font-outfit font-bold text-[14px] text-brand-primary truncate">
                  {approaches[4].title}
                </h3>
                <span className="font-outfit font-bold text-[11px] text-slate-400">05</span>
              </div>
              <p className="font-inter text-[12px] leading-snug text-slate-600">
                {approaches[4].description}
              </p>
            </div>
          </motion.div>
        </div>

        {/* ── DESKTOP GRID (Hidden on mobile, visible on md+) ── */}
        <div className="hidden md:flex flex-wrap justify-center gap-5 sm:gap-6 mt-8 sm:mt-10 lg:mt-12">
          {approaches.map((approach, i) => (
            <DesktopApproachCard key={approach.title} {...approach} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}
