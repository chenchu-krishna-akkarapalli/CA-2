"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Flag, TrendingUp, Globe, Award } from "lucide-react";
import aboutData from "../data/about";
import HeadingReveal from "../components/HeadingReveal";

const data = aboutData.ourJourney;

// Map appropriate icons for the journey stages
const icons = [Flag, TrendingUp, Globe, Award];

function TimelineItem({ item, index, isLast }: { item: any; index: number; isLast: boolean }) {
  const isEven = index % 2 === 0;
  const Icon = icons[index % icons.length];

  return (
    <div className={`relative flex flex-col md:flex-row items-center justify-between w-full mb-12 lg:mb-24 ${isEven ? 'md:flex-row-reverse' : ''}`}>
      {/* Mobile only timeline line fragment */}
      {!isLast && (
        <div className="absolute left-[39px] top-8 bottom-[-3rem] w-[2px] bg-brand-accent/20 md:hidden" />
      )}
      
      {/* Timeline Node/Icon */}
      <motion.div 
        className="absolute left-[24px] md:left-1/2 top-0 md:top-1/2 md:-translate-y-1/2 -translate-x-1/2 z-10 flex items-center justify-center w-8 h-8 md:w-16 md:h-16 rounded-full bg-white border-4 border-brand-accent/20 shadow-xl transition-transform duration-300 hover:scale-110 hover:border-brand-accent/40 group"
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.1 }}
      >
        <div className="w-3 h-3 md:hidden rounded-full bg-brand-accent group-hover:bg-brand-primary transition-colors" />
        <Icon className="hidden md:block w-6 h-6 text-brand-accent group-hover:text-brand-primary transition-colors" strokeWidth={2} />
      </motion.div>

      {/* Spacer for alternating layout (Desktop) */}
      <div className="hidden md:block w-1/2" />

      {/* Content Card */}
      <div className={`w-full md:w-1/2 flex pl-[80px] md:pl-0 ${isEven ? 'md:justify-start md:pl-16' : 'md:justify-end md:pr-16'}`}>
        <motion.div
          initial={{ opacity: 0, y: 30, x: isEven ? 30 : -30 }}
          whileInView={{ opacity: 1, y: 0, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.4, 0.25, 1] }}
          className="relative w-full max-w-[480px] p-6 lg:p-8 rounded-3xl border border-white/60 bg-white/60 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.04)] hover:bg-white hover:shadow-[0_16px_48px_rgba(2,79,49,0.08)] transition-all duration-500 group"
        >
          {/* Year Badge */}
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-gradient-to-r from-brand-primary to-brand-accent text-white font-outfit font-bold text-sm mb-5 shadow-sm transform group-hover:-translate-y-1 transition-transform duration-300">
            {item.year}
          </div>
          
          <h3 className="font-outfit font-bold text-2xl lg:text-3xl text-brand-primary mb-3 group-hover:text-brand-accent transition-colors duration-300">
            {item.title}
          </h3>
          
          <p className="font-inter text-slate-600 leading-relaxed text-sm lg:text-[15px]">
            {item.desc}
          </p>

          {/* Decorative subtle background icon */}
          <Icon className="absolute -bottom-4 -right-4 w-32 h-32 text-brand-accent/5 -rotate-12 group-hover:rotate-0 group-hover:scale-110 transition-all duration-700 pointer-events-none" />
        </motion.div>
      </div>
    </div>
  );
}

export default function OurJourneySection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Create a scroll-linked animation for the center line
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);

  return (
    <section 
      className="relative left-1/2 w-screen max-w-none -translate-x-1/2 overflow-hidden bg-brand-accent/5 py-16 lg:py-24"
      aria-label="Our Journey"
    >
      {/* Background Decorators */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-20 -left-20 w-[400px] h-[400px] bg-brand-accent/10 rounded-full blur-[80px]" />
        <div className="absolute bottom-20 -right-20 w-[500px] h-[500px] bg-brand-primary/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center gap-4 mb-16 lg:mb-24">
          <HeadingReveal>
            <h2 className="text-center font-outfit text-[32px] font-bold leading-[1.2] sm:text-[40px] lg:text-[50px] tracking-tight">
              <span className="text-brand-primary">OUR</span>{" "}
              <span className="text-brand-accent">JOURNEY</span>
            </h2>
          </HeadingReveal>
          <div className="h-1.5 w-20 sm:w-24 rounded-full bg-gradient-to-r from-brand-primary to-brand-accent" />
        </div>

        {/* Timeline Container */}
        <div ref={containerRef} className="relative w-full max-w-[1100px] mx-auto">
          {/* Desktop Animated Center Line */}
          <div className="hidden md:block absolute left-1/2 top-4 bottom-4 w-[2px] bg-brand-accent/10 -translate-x-1/2">
            <motion.div 
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-brand-accent via-brand-primary to-brand-accent origin-top"
              style={{ scaleY, height: "100%", opacity }}
            />
          </div>

          <div className="flex flex-col relative">
            {data.timeline.map((item, index) => (
              <TimelineItem 
                key={index} 
                item={item} 
                index={index} 
                isLast={index === data.timeline.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
