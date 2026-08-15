"use client";

import { motion } from "framer-motion";
import aboutData from "../data/about";
import { Target, Users, BarChart3, Workflow, Sparkles } from "lucide-react";
import HeadingReveal from "../components/HeadingReveal";

const data = aboutData.whatDrivesUs;

const ValueIcons = [Users, BarChart3, Workflow, Sparkles];

export default function CoreValuesSection() {
  return (
    <section
      className="w-full max-w-[1086px] px-3.5 sm:px-6"
      aria-label="Core Values"
    >
      {/* Header */}
      <div className="flex flex-col items-center gap-2 sm:gap-[10px] mb-8 sm:mb-12">
        <HeadingReveal>
          <h2 className="font-outfit font-bold text-[24px] sm:text-[40px] lg:text-[50px] leading-[30px] sm:leading-[44px] lg:leading-[55px] text-center tracking-tight">
            <span className="text-brand-primary">What</span>{" "}
            <span className="text-brand-accent">Drives Us</span>
          </h2>
        </HeadingReveal>
        <div className="h-[4px] sm:h-[6px] w-[140px] sm:w-[300px] lg:w-[352px] rounded-full bg-gradient-to-r from-brand-primary to-brand-accent" />

        <div className="mt-3 sm:mt-6 flex items-center justify-center gap-2 sm:gap-3">
          <Target className="w-5 h-5 sm:w-[40px] sm:h-[40px] text-brand-accent" strokeWidth={1.75} />
          <p className="font-outfit font-semibold text-[17px] sm:text-[28px] lg:text-[32px] leading-tight text-center">
            <span className="text-brand-primary">Our Core</span>
            <span className="text-brand-accent"> Values</span>
          </p>
        </div>
      </div>

      {/* ── MOBILE BENTO GRID (< 768px) ── */}
      <div className="grid md:hidden grid-cols-2 gap-3">
        {/* Bento Cell 1: Integrity (Span 2 - Featured) */}
        <motion.div
          className="col-span-2 bg-white border border-brand-accent/30 rounded-2xl p-4 shadow-sm relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center justify-between mb-2.5">
            <div className="w-10 h-10 rounded-xl bg-brand-accent/10 flex items-center justify-center text-brand-accent">
              <Users className="w-5 h-5" strokeWidth={2} />
            </div>
            <span className="font-outfit font-bold text-[11px] px-2.5 py-0.5 rounded-full bg-brand-primary text-white tracking-wider">
              CORE 01
            </span>
          </div>
          <h3 className="font-outfit font-bold text-[17px] text-brand-primary mb-1">
            {data.values[0].title}
          </h3>
          <p className="font-inter text-[12.5px] leading-relaxed text-slate-600">
            {data.values[0].desc}
          </p>
        </motion.div>

        {/* Bento Cell 2: Excellence (Span 1) */}
        <motion.div
          className="col-span-1 bg-white border border-slate-200/90 rounded-2xl p-3.5 shadow-sm flex flex-col justify-between"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div>
            <div className="flex items-center justify-between mb-2">
              <div className="w-8 h-8 rounded-lg bg-brand-accent/10 flex items-center justify-center text-brand-accent">
                <BarChart3 className="w-4 h-4" strokeWidth={2} />
              </div>
              <span className="font-outfit font-bold text-[11px] text-slate-400">02</span>
            </div>
            <h3 className="font-outfit font-bold text-[14px] leading-tight text-brand-primary mb-1">
              {data.values[1].title}
            </h3>
          </div>
          <p className="font-inter text-[11.5px] leading-snug text-slate-600 line-clamp-3">
            {data.values[1].desc}
          </p>
        </motion.div>

        {/* Bento Cell 3: Client-Centric (Span 1) */}
        <motion.div
          className="col-span-1 bg-white border border-slate-200/90 rounded-2xl p-3.5 shadow-sm flex flex-col justify-between"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <div>
            <div className="flex items-center justify-between mb-2">
              <div className="w-8 h-8 rounded-lg bg-brand-accent/10 flex items-center justify-center text-brand-accent">
                <Workflow className="w-4 h-4" strokeWidth={2} />
              </div>
              <span className="font-outfit font-bold text-[11px] text-slate-400">03</span>
            </div>
            <h3 className="font-outfit font-bold text-[14px] leading-tight text-brand-primary mb-1">
              {data.values[2].title}
            </h3>
          </div>
          <p className="font-inter text-[11.5px] leading-snug text-slate-600 line-clamp-3">
            {data.values[2].desc}
          </p>
        </motion.div>

        {/* Bento Cell 4: Knowledge & Expertise (Span 2) */}
        <motion.div
          className="col-span-2 bg-white border border-slate-200/90 rounded-2xl p-3.5 shadow-sm flex items-start gap-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="w-10 h-10 rounded-xl bg-brand-primary text-white flex items-center justify-center shrink-0">
            <Sparkles className="w-5 h-5" strokeWidth={1.75} />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between mb-0.5">
              <h3 className="font-outfit font-bold text-[15px] text-brand-primary">
                {data.values[3].title}
              </h3>
              <span className="font-outfit font-bold text-[11px] text-slate-400">04</span>
            </div>
            <p className="font-inter text-[12px] leading-snug text-slate-600">
              {data.values[3].desc}
            </p>
          </div>
        </motion.div>
      </div>

      {/* ── DESKTOP STAGGERED GRID (md: and above) ── */}
      <div className="hidden md:flex flex-col gap-[20px] lg:items-center">
        {/* Row 1 */}
        <div className="flex flex-col md:flex-row gap-[20px] w-full justify-center lg:pr-[120px]">
          {data.values.slice(0, 2).map((value, i) => (
            <motion.div
              key={value.title}
              className="bg-white border border-brand-secondary rounded-[30px] overflow-hidden w-full md:w-[423px]"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: 0.1 * i, ease: [0.25, 0.4, 0.25, 1] }}
            >
              <div className="h-[406px] flex flex-col items-center justify-start pt-[47px] px-6 text-center">
                <div className="size-[142px] rounded-[30px] border border-brand-secondary bg-gradient-primary flex items-center justify-center overflow-hidden">
                  {(() => {
                    const Icon = ValueIcons[i] || Target;
                    return <Icon className="w-[80px] h-[80px] text-white" strokeWidth={1.5} />;
                  })()}
                </div>
                <h3 className="mt-[15px] font-outfit font-semibold text-[32px] leading-[32px] text-brand-primary">
                  {value.title}
                </h3>
                <p className="mt-[15px] w-[274px] font-inter font-normal text-[16px] leading-[19px] text-brand-primary">
                  {value.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Row 2 */}
        <div className="flex flex-col md:flex-row gap-[20px] w-full justify-center lg:pl-[120px]">
          {data.values.slice(2, 4).map((value, index) => {
            const i = index + 2;
            return (
              <motion.div
                key={value.title}
                className="bg-white border border-brand-secondary rounded-[30px] overflow-hidden w-full md:w-[423px]"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: 0.1 * i, ease: [0.25, 0.4, 0.25, 1] }}
              >
                <div className="h-[406px] flex flex-col items-center justify-start pt-[47px] px-6 text-center">
                  <div className="size-[142px] rounded-[30px] border border-brand-secondary bg-gradient-primary flex items-center justify-center overflow-hidden">
                    {(() => {
                      const Icon = ValueIcons[i] || Target;
                      return <Icon className="w-[80px] h-[80px] text-white" strokeWidth={1.5} />;
                    })()}
                  </div>
                  <h3 className="mt-[15px] font-outfit font-semibold text-[32px] leading-[32px] text-brand-primary">
                    {value.title}
                  </h3>
                  <p className="mt-[15px] w-[274px] font-inter font-normal text-[16px] leading-[19px] text-brand-primary">
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
