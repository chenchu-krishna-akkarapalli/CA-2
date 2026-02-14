"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import aboutData from "../data/about.json";
import { Target, Users, BarChart3, Workflow, Headphones } from "lucide-react";

const data = aboutData.whatDrivesUs;

const ValueIcons = [
  Users,
  BarChart3,
  Workflow,
  Headphones,
];

export default function CoreValuesSection() {
  return (
    <section
      className="w-full max-w-[1086px]"
      aria-label="Core Values"
    >
      {/* Figma Header */}
      <div className="flex flex-col items-center gap-[10px] mb-10 sm:mb-12">
        <h2 className="font-outfit font-bold text-[30px] sm:text-[40px] lg:text-[50px] leading-[36px] sm:leading-[44px] lg:leading-[55px] text-center">
          <span className="text-brand-dark-green">What</span>{" "}
          <span className="text-brand-green">Drives Us</span>
        </h2>
        <div className="h-[6px] w-[220px] sm:w-[300px] lg:w-[352px] rounded-full bg-gradient-to-b from-brand-dark-green to-brand-green" />

        <div className="mt-6 flex items-center justify-center gap-3">
           <Target className="w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] text-brand-green" strokeWidth={1.5} />
          <p className="font-outfit font-semibold text-[22px] sm:text-[28px] lg:text-[32px] leading-[32px] text-center">
            <span className="text-brand-dark-green">Our Core</span>
            <span className="text-brand-green"> Values</span>
          </p>
        </div>
      </div>

      {/* Values: match Figma row alignment on desktop */}
      <div className="flex flex-col gap-[20px] lg:items-center">
        {/* Row 1: Staggered Left */}
        <div className="flex flex-col md:flex-row gap-[20px] w-full justify-center lg:pr-[120px]">
          {data.values.slice(0, 2).map((value, i) => (
            <motion.div
              key={value.title}
              className="bg-white border border-brand-border-green rounded-[30px] overflow-hidden w-full md:w-[423px]"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: 0.1 * i, ease: [0.25, 0.4, 0.25, 1] }}
            >
              <div className="h-[406px] flex flex-col items-center justify-start pt-[47px] px-6 text-center">
                <div className="size-[142px] rounded-[30px] border border-brand-border-green bg-gradient-primary flex items-center justify-center overflow-hidden">
                   {(() => {
                        const Icon = ValueIcons[i] || Target;
                        return <Icon className="w-[80px] h-[80px] text-white" strokeWidth={1.5} />;
                   })()}
                </div>
                <h3 className="mt-[15px] font-outfit font-semibold text-[32px] leading-[32px] text-brand-dark-green">
                  {value.title}
                </h3>
                <p className="mt-[15px] w-[274px] font-inter font-normal text-[16px] leading-[19px] text-brand-dark-green">
                  {value.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Row 2: Staggered Right */}
        <div className="flex flex-col md:flex-row gap-[20px] w-full justify-center lg:pl-[120px]">
          {data.values.slice(2, 4).map((value, index) => {
            const i = index + 2;
            return (
              <motion.div
                key={value.title}
                className="bg-white border border-brand-border-green rounded-[30px] overflow-hidden w-full md:w-[423px]"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: 0.1 * i, ease: [0.25, 0.4, 0.25, 1] }}
              >
                <div className="h-[406px] flex flex-col items-center justify-start pt-[47px] px-6 text-center">
                  <div className="size-[142px] rounded-[30px] border border-brand-border-green bg-gradient-primary flex items-center justify-center overflow-hidden">
                   {(() => {
                        const Icon = ValueIcons[i] || Target;
                        return <Icon className="w-[80px] h-[80px] text-white" strokeWidth={1.5} />;
                   })()}
                  </div>
                  <h3 className="mt-[15px] font-outfit font-semibold text-[32px] leading-[32px] text-brand-dark-green">
                    {value.title}
                  </h3>
                  <p className="mt-[15px] w-[274px] font-inter font-normal text-[16px] leading-[19px] text-brand-dark-green">
                    {value.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
