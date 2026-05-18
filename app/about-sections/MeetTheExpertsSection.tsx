"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import aboutData from "../data/about";
import { Users } from "lucide-react";
import HeadingReveal from "../components/HeadingReveal";

const data = aboutData.meetTheExperts;

const teamHeaderImages = [
  "/Assets/Images/source/image.jpg",
  "/hero-img/hero-3.png",
  "/hero-img/hero-2.png",
];

export default function MeetTheExpertsSection() {
  return (
    <section
      className="w-full max-w-[1087px]"
      aria-label="Meet The Experts"
    >
      {/* Header */}
      <div className="flex flex-col items-center gap-[19px] mb-10 sm:mb-12">
        <HeadingReveal>
          <h2 className="font-outfit font-bold text-[30px] sm:text-[40px] lg:text-[50px] leading-[36px] sm:leading-[44px] lg:leading-[55px] text-center">
            <span className="text-brand-primary">Meet </span>
            <span className="text-brand-accent">The Experts</span>
          </h2>
        </HeadingReveal>

        <div className="flex items-center justify-center gap-3">
          <Users className="w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] text-brand-accent" strokeWidth={1.5} />
          <p className="font-outfit font-semibold text-[22px] sm:text-[28px] lg:text-[32px] leading-[32px] text-center">
            <span className="text-brand-primary">Our </span>
            <span className="text-brand-accent"> Team</span>
          </p>
        </div>

        <p className="max-w-[741px] font-outfit font-normal text-[15px] sm:text-[16px] lg:text-[18px] leading-[26px] sm:leading-[29px] text-center text-brand-primary">
          {data.subtitle}
        </p>

        <div className="h-[6px] w-[260px] sm:w-[340px] lg:w-[412px] rounded-full bg-gradient-to-b from-brand-primary to-brand-accent" />
      </div>

      {/* Team Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.team.map((member, i) => (
          <motion.div
            key={member.name}
            className="relative bg-white rounded-[24px] sm:rounded-[30px] border border-surface-card-border shadow-card overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: 0.12 * i, ease: [0.25, 0.4, 0.25, 1] }}
          >
            {/* Image header */}
            <div className="relative h-[280px] sm:h-[320px] bg-surface-light-gray overflow-hidden">
              <Image
                src={teamHeaderImages[i]}
                alt={`Portrait of ${member.name}`}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 341px, (min-width: 768px) 50vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-brand-primary/80 via-black/0 to-black/0 opacity-60" aria-hidden="true" />
              <div className="absolute left-6 right-6 bottom-6">
                <h3 className="font-outfit font-bold text-[20px] sm:text-[24px] leading-[32px] text-white drop-shadow-[0px_3px_6px_rgba(0,0,0,0.12)]">
                  {member.name}
                </h3>
                <div className="mt-2 inline-flex items-center h-[28px] px-4 rounded-full bg-brand-primary/80">
                  <span className="font-outfit font-medium text-[14px] leading-[20px] text-brand-accent">
                    {member.role}
                  </span>
                </div>
              </div>
            </div>

            {/* Body */}
            <div className="px-6 pt-6 pb-7">
              <div className="border-l-[1.6px] border-brand-accent pl-4">
                <p className="font-inter font-normal italic text-[14px] leading-[22.75px] text-text-secondary">
                  &quot;{member.bio}&quot;
                </p>
              </div>
              <div className="mt-6">
                <div className="flex items-center gap-2">
                  <Image src="/Assets/Icon-3.svg" alt="" width={16} height={16} aria-hidden="true" />
                  <p className="font-outfit font-semibold text-[14px] leading-[20px] tracking-[0.7px] uppercase text-brand-primary">
                    Areas of Practice
                  </p>
                </div>
                <div className="mt-4 grid grid-cols-1 gap-2">
                  {member.areasOfPractice.map((area) => (
                    <div
                      key={area}
                      className="inline-flex items-center gap-2 h-[30px] px-3 rounded-[10px] bg-brand-accent/10 border border-brand-accent/20"
                    >
                      <Image src="/Assets/Icon-4.svg" alt="" width={10} height={10} aria-hidden="true" />
                      <span className="font-inter font-medium text-[12px] leading-[16px] text-brand-primary">
                        {area}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="h-[6px] w-full bg-gradient-to-b from-brand-primary to-brand-accent" aria-hidden="true" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
