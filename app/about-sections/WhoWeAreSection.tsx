"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Handshake,
  Target,
  Award,
  Users,
  Briefcase,
  ShieldCheck,
  ChevronRight
} from "lucide-react";
import aboutData from "../data/about";
import HeadingReveal from "../components/HeadingReveal";
import type { ComponentType } from "react";

const data = aboutData.whoWeAre;

const iconMap: Record<
  string,
  ComponentType<{ className?: string; strokeWidth?: number }>
> = {
  Award,
  Users,
  Briefcase,
  ShieldCheck,
  Target,
};

function GlassCard({
  title,
  icon,
  delay = 0,
  className = "",
}: {
  title: string;
  icon: string;
  delay?: number;
  className?: string;
}) {
  const Icon = iconMap[icon] || Target;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.4, 0.25, 1] }}
      className={`relative overflow-hidden rounded-2xl border border-white/20 bg-white/10 p-5 backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.05)] hover:bg-white/20 hover:border-white/30 transition-all duration-300 group ${className}`}
    >
      <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-brand-accent/20 blur-2xl group-hover:bg-brand-accent/30 transition-colors duration-500" />
      
      <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-white to-white/60 shadow-sm mb-4 group-hover:scale-110 transition-transform duration-300">
        <Icon className="h-6 w-6 text-brand-primary" strokeWidth={2} />
      </div>

      <h4 className="relative z-10 font-outfit text-[17px] font-semibold leading-tight text-brand-primary group-hover:text-brand-accent transition-colors">
        {title}
      </h4>
    </motion.div>
  );
}

function ExperienceBadge({ mobile = false }: { mobile?: boolean }) {
  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, type: "spring", bounce: 0.4 }}
      className={`absolute z-20 flex flex-col items-center justify-center rounded-full bg-gradient-to-br from-brand-primary to-brand-accent text-white shadow-[0_16px_40px_rgba(2,79,49,0.4)] ${
        mobile 
          ? "bottom-4 right-4 h-28 w-28 border-4 border-white" 
          : "-bottom-12 -right-12 h-40 w-40 border-8 border-white lg:bottom-10 lg:-right-16 lg:h-48 lg:w-48"
      }`}
    >
      <span className={`font-outfit font-bold tracking-tight ${mobile ? "text-3xl" : "text-5xl lg:text-6xl"}`}>
        8+
      </span>
      <span className={`font-outfit font-medium opacity-90 ${mobile ? "text-sm mt-0.5" : "text-lg lg:text-xl mt-1"}`}>
        Years
      </span>
      <span className={`font-inter font-light opacity-70 ${mobile ? "text-[10px]" : "text-sm"}`}>
        Experience
      </span>
    </motion.div>
  );
}

function ContentSide() {
  return (
    <div className="flex flex-col justify-center w-full lg:w-1/2 lg:pr-12">
      <HeadingReveal>
        <h2 className="font-outfit font-bold text-[32px] sm:text-[40px] lg:text-[48px] xl:text-[56px] leading-[1.1] text-brand-primary mb-6 text-center lg:text-left">
          {data.title.split(' ').map((word, i) => (
            <span key={i} className={i >= data.title.split(' ').length - 2 ? "text-brand-accent" : ""}>
              {word}{" "}
            </span>
          ))}
        </h2>
      </HeadingReveal>

      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mb-8"
      >
        <div className="h-1.5 w-20 rounded-full bg-brand-accent mb-6 mx-auto lg:mx-0" />
        <p className="font-inter text-[16px] lg:text-[18px] leading-relaxed text-slate-600 mb-4 text-center lg:text-left">
          {data.description1}
        </p>
        <p className="font-inter text-[16px] lg:text-[18px] leading-relaxed text-slate-600 text-center lg:text-left">
          {data.description2}
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
        {data.features.map((feature, index) => (
          <GlassCard 
            key={feature.title} 
            title={feature.title} 
            icon={feature.icon} 
            delay={0.3 + (index * 0.1)} 
          />
        ))}
      </div>
    </div>
  );
}

function ImageSide() {
  return (
    <div className="relative w-full lg:w-1/2 mt-16 lg:mt-0 flex items-center justify-center">
      <motion.div 
        className="relative w-full max-w-[500px] aspect-[4/5] rounded-[2.5rem] bg-gradient-to-br from-brand-primary/5 to-brand-accent/20 p-2 sm:p-4"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Decorative elements behind image */}
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-brand-accent/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-brand-primary/10 rounded-full blur-3xl" />

        <div className="relative w-full h-full rounded-[2rem] overflow-hidden border border-white/50 shadow-2xl">
          <Image
            src="/Assets/figma/about/who-rectangle-3.png"
            alt="Professional CA Team"
            fill
            className="object-cover hover:scale-105 transition-transform duration-700"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/60 via-transparent to-transparent" />
        </div>

        <ExperienceBadge />

        {/* Floating elements */}
        <motion.div
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-12 -left-6 lg:-left-12 bg-white rounded-2xl p-4 shadow-xl border border-brand-accent/10 hidden sm:flex items-center gap-3"
        >
          <div className="h-10 w-10 rounded-full bg-brand-accent/10 flex items-center justify-center">
            <Handshake className="w-5 h-5 text-brand-accent" />
          </div>
          <div>
            <p className="font-outfit font-bold text-sm text-brand-primary">Trusted Partners</p>
            <p className="font-inter text-xs text-slate-500">For Your Business</p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default function WhoWeAreSection() {
  return (
    <section className="relative w-full max-w-[1440px] mx-auto py-12 lg:py-20 overflow-hidden" aria-label="Who We Are">
      {/* Background abstract shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[20%] right-[10%] w-[600px] h-[600px] rounded-full bg-gradient-to-br from-brand-accent/5 to-transparent blur-3xl" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-brand-primary/5 to-transparent blur-3xl" />
      </div>

      <div className="flex flex-col items-center mb-8 lg:mb-16">
        <HeadingReveal>
          <h2 className="font-outfit font-bold text-[30px] sm:text-[40px] lg:text-[50px] leading-[36px] sm:leading-[44px] lg:leading-[55px] text-center tracking-tight">
            <span className="text-brand-primary">WHO</span>{" "}
            <span className="text-brand-accent">WE ARE</span>
          </h2>
        </HeadingReveal>
        <div className="h-[6px] w-[180px] sm:w-[240px] rounded-full bg-gradient-to-r from-brand-primary to-brand-accent mt-4" />
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-between px-4 sm:px-8 lg:px-16 gap-12 lg:gap-0">
        <ContentSide />
        <ImageSide />
      </div>
    </section>
  );
}
