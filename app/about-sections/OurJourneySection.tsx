"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import aboutData from "../data/about.json";
import { LocateFixed } from "lucide-react";

const data = aboutData.ourJourney;

export default function OurJourneySection() {
  const desktopTopPositions = [302, 475, 662, 857, 1062, 1229, 1405, 1566];

  return (
    <section
      className="relative w-full overflow-hidden bg-brand-green/10"
      aria-label="Our Journey"
    >
      {/* Mobile / tablet layout */}
      <div className="relative lg:hidden py-12 sm:py-16">
        <div className="absolute inset-0" aria-hidden="true">
          <Image
            src="/Assets/figma/about/our-journey-bg.svg"
            alt=""
            fill
            className="object-cover opacity-60"
            sizes="100vw"
          />
        </div>

        <div className="relative max-w-[720px] mx-auto px-4 sm:px-8">
          <div className="flex flex-col items-center gap-[10px]">
            <h2 className="font-outfit font-bold text-[30px] sm:text-[40px] leading-[44px] text-center">
              <span className="text-brand-dark-green">OUR</span>{" "}
              <span className="text-brand-green">JOURNEY</span>
            </h2>
            <div className="h-[6px] w-[300px] rounded-full bg-gradient-to-b from-brand-dark-green to-brand-green" />
          </div>

          <div className="mt-10 flex items-center justify-center gap-3">
             <LocateFixed className="w-[50px] h-[50px] text-brand-green" strokeWidth={1.5} />
            <p className="font-outfit font-semibold text-[22px] sm:text-[28px] leading-[32px] text-center">
              <span className="text-brand-dark-green">Our</span>
              <span className="text-brand-green"> Story</span>
            </p>
          </div>

          <div className="relative mt-12">
            <div className="absolute left-[18px] top-0 bottom-0 w-[2px] bg-brand-green/25" />
            <div className="flex flex-col gap-6">
              {data.timeline.map((item, i) => (
                <motion.div
                  key={item.year}
                  className="relative"
                  initial={{ opacity: 0, y: 26 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.6, delay: 0.06 * i, ease: [0.25, 0.4, 0.25, 1] }}
                >
                  <div className="absolute left-[0px] top-[18px] w-[36px] h-[36px] rounded-full bg-gradient-primary ring-4 ring-white flex items-center justify-center">
                    <span className="font-outfit font-bold text-[11px] text-white leading-none">
                      {item.year}
                    </span>
                  </div>

                  <div className="ml-[56px]">
                    <div className="bg-white border border-white/60 shadow-strategic rounded-[16px] px-6 py-6">
                      <div className="inline-flex items-center justify-center h-[28px] px-4 rounded-full bg-brand-green/10 mb-3">
                        <span className="font-outfit font-bold text-[14px] leading-[20px] text-brand-dark-green">
                          {item.year}
                        </span>
                      </div>
                      <h3 className="font-outfit font-bold text-[18px] leading-[24px] tracking-[-0.5px] text-brand-dark-green">
                        {item.title}
                      </h3>
                      <p className="mt-3 font-inter font-light text-[14px] leading-[22px] text-text-secondary">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Desktop layout (centered timeline) */}
      <div className="hidden lg:flex justify-center relative overflow-hidden bg-brand-green/10">
        <div className="relative w-[1440px] h-[1928px] flex-shrink-0 z-10">
          {/* Background decoration - Explicitly positioned behind content */}
          <div className="absolute inset-0 z-0 pointer-events-none mix-blend-multiply" aria-hidden="true">
            <Image
              src="/Assets/figma/about/our-journey-bg.svg"
              alt=""
              fill
              className="object-cover opacity-100"
              sizes="1440px"
              priority
            />
          </div>

          {/* Intro Heading Group - Left: 517px -> relative to 1440px container */}
          <div className="absolute left-[517px] top-[68px] flex flex-col gap-[10px] items-center text-center w-[380px] z-20">
            <h2 className="font-outfit font-bold text-[50px] leading-[55px]">
              <span className="text-brand-dark-green">OUR</span>{" "}
              <span className="text-brand-green">JOURNEY</span>
            </h2>
            <div className="h-[6px] w-[352px] rounded-full bg-gradient-to-b from-brand-dark-green to-brand-green" />
          </div>

          {/* Sub header group - Left: 597px */}
          <div className="absolute left-[597px] top-[211px] flex items-center justify-center gap-3 w-[246px]">
             <LocateFixed className="w-[50px] h-[50px] text-brand-green" strokeWidth={1.5} />
            <p className="font-outfit font-semibold text-[32px] leading-[32px]">
              <span className="text-brand-dark-green">Our</span>
              <span className="text-brand-green"> Story</span>
            </p>
          </div>

          {/* Center decorative icon - Left: 620px */}
          <div className="absolute left-[620px] top-[270px] w-[202px] h-[1600px] pointer-events-none" aria-hidden="true">
            <Image
              src="/Assets/figma/about/our-journey-center-icon.svg"
              alt=""
              width={202}
              height={1600}
              className="object-contain"
            />
          </div>

          {/* Milestones grid - Absolute positioning */}
          {data.timeline.map((item, i) => {
            const top = desktopTopPositions[i] || 300 + i * 150;
            const isLeft = i % 2 === 0;

            return (
              <motion.div
                key={item.year}
                className="absolute w-[448px] h-[167px]"
                style={{
                  top: top,
                  left: isLeft ? "150px" : "842px",
                }}
                // Staggered scroll animation: Left items slide from left (-50), Right items slide from right (50)
                initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
              >
                <div
                  className={`w-full h-full bg-white border border-brand-green/25 rounded-[16px] shadow-strategic flex flex-col justify-between overflow-hidden group hover:shadow-lg transition-shadow duration-300`}
                >
                  <div className={`pt-6 px-6 relative h-full`}>
                    
                    {/* Badge */}
                    <div className={`absolute top-6 bg-brand-green/10 h-[28px] px-3 rounded-full flex items-center justify-center ${isLeft ? "right-6" : "left-6"}`}>
                       <span className={`font-outfit font-bold text-[14px] leading-[20px] text-brand-dark-green`}>
                        {item.year}
                      </span>
                    </div>

                    {/* Content */}
                    <div className={`${isLeft ? "mr-[60px] text-right ml-auto" : "ml-[60px] text-left mr-auto"} mt-[36px]`}>
                      <h3 className="absolute top-[60px] font-outfit font-bold text-[20px] leading-[28px] tracking-[-0.5px] text-brand-dark-green w-[398px]" style={{ left: isLeft ? "auto" : "24px", right: isLeft ? "24px" : "auto" }}>
                        {item.title}
                      </h3>
                      <p className="absolute top-[96px] font-outfit font-normal text-[14px] leading-[22.75px] text-text-secondary w-[398px]" style={{ left: isLeft ? "auto" : "24px", right: isLeft ? "24px" : "auto" }}>
                        {item.desc}
                      </p>
                    </div>

                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
