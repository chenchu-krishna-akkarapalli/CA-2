"use client";

import { motion } from "framer-motion";
import aboutData from "../data/about";
import { TeamMember } from "../data/about";
import HeadingReveal from "../components/HeadingReveal";

const data = aboutData.meetTheExperts;

/* ── Initials avatar ── */
function Avatar({ name, index }: { name: string; index: number }) {
  const initials = name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join("");

  const palette = [
    "bg-brand-primary text-white",
    "bg-brand-accent  text-white",
  ];

  return (
    <div
      className={`flex-shrink-0 w-[64px] h-[64px] rounded-full flex items-center justify-center font-outfit font-bold text-[22px] select-none ${palette[index % 2]}`}
      aria-hidden="true"
    >
      {initials}
    </div>
  );
}

/* ── Single team card ── */
function TeamCard({ member, index }: { member: TeamMember; index: number }) {
  const accentColors = ["from-brand-primary to-brand-accent", "from-brand-accent to-brand-primary"];

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: [0.25, 0.4, 0.25, 1] }}
      className="relative bg-white border border-[#e5e7eb] rounded-[20px] overflow-hidden flex flex-col"
    >
      {/* Top accent line */}
      <div className={`h-[4px] w-full bg-gradient-to-r ${accentColors[index % 2]}`} aria-hidden="true" />

      <div className="flex flex-col gap-6 p-7 sm:p-8 flex-1">

        {/* Identity row */}
        <div className="flex items-center gap-4">
          <Avatar name={member.name} index={index} />
          <div className="min-w-0">
            <h3 className="font-outfit font-bold text-[18px] sm:text-[20px] leading-[26px] text-brand-primary truncate">
              {member.name}
            </h3>
            <p className="mt-0.5 font-inter text-[13px] text-brand-accent font-medium">
              {member.role}
            </p>
          </div>
        </div>

        {/* Label pill */}
        <div className="inline-flex items-center gap-2 self-start px-3 py-1 rounded-full bg-brand-primary/6 border border-brand-primary/10">
          <span className="w-[6px] h-[6px] rounded-full bg-brand-accent flex-shrink-0" />
          <span className="font-outfit font-medium text-[12px] tracking-wide text-brand-primary">
            {member.label}
          </span>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-[#e5e7eb]" />

        {/* Bio */}
        <p className="font-inter font-normal text-[14px] sm:text-[14.5px] leading-[1.75] text-text-secondary flex-1">
          {member.bio}
        </p>

        {/* Divider */}
        <div className="h-px w-full bg-[#e5e7eb]" />

        {/* Practice areas */}
        <div>
          <p className="font-outfit font-semibold text-[11px] tracking-[1.5px] uppercase text-brand-primary/50 mb-3">
            Areas of Practice
          </p>
          <div className="flex flex-wrap gap-2">
            {member.areasOfPractice.map((area) => (
              <span
                key={area}
                className="inline-flex items-center h-[26px] px-3 rounded-full bg-brand-accent/8 border border-brand-accent/20 font-inter font-medium text-[11.5px] text-brand-primary"
              >
                {area}
              </span>
            ))}
          </div>
        </div>

      </div>
    </motion.article>
  );
}

/* ── Section ── */
export default function MeetTheExpertsSection() {
  return (
    <section className="w-full max-w-[1087px]" aria-label="Meet The Experts">

      {/* Header */}
      <div className="flex flex-col items-center gap-4 mb-10 sm:mb-14">
        <HeadingReveal>
          <h2 className="font-outfit font-bold text-[30px] sm:text-[40px] lg:text-[50px] leading-[36px] sm:leading-[44px] lg:leading-[55px] text-center">
            <span className="text-brand-primary">Meet </span>
            <span className="text-brand-accent">The Experts</span>
          </h2>
        </HeadingReveal>

        <p className="max-w-[560px] font-inter font-normal text-[14px] sm:text-[15px] leading-[1.7] text-center text-text-secondary">
          {data.subtitle}
        </p>

        <div className="h-[4px] w-[120px] rounded-full bg-gradient-to-r from-brand-primary to-brand-accent" />
      </div>

      {/* Two-column grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {data.team.map((member, i) => (
          <TeamCard key={member.name} member={member} index={i} />
        ))}
      </div>

    </section>
  );
}
