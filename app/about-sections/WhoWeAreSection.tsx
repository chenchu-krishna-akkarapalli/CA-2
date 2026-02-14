"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import aboutData from "../data/about.json";
import { Handshake, Target, Award, Users, Briefcase, ShieldCheck } from "lucide-react";

const data = aboutData.whoWeAre;

const iconMap: any = {
  Award,
  Users,
  Briefcase,
  ShieldCheck,
  Target
};

export default function WhoWeAreSection() {
  return (
    <section
      className="w-full max-w-[1198px] mx-auto"
      aria-label="Who We Are"
    >
      {/* Figma Heading */}
      <div className="flex flex-col items-center gap-[10px] mb-10 sm:mb-12">
        <h2 className="font-outfit font-bold text-[30px] sm:text-[40px] lg:text-[50px] leading-[36px] sm:leading-[44px] lg:leading-[55px] text-center">
          <span className="text-brand-dark-green">WHO</span>{" "}
          <span className="text-brand-green">WE ARE</span>
        </h2>
        <div className="h-[6px] w-[220px] sm:w-[300px] lg:w-[352px] rounded-full bg-gradient-to-b from-brand-dark-green to-brand-green" />
      </div>

      {/* Layout: match Figma positioning on desktop; stack on small screens */}
      <div className="relative w-full lg:h-[930px]">
        {/* Mobile/tablet stacked */}
        <div className="lg:hidden grid grid-cols-1 gap-8">
          <motion.div
            className="relative w-full max-w-[620px] mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
          >
            <div className="relative h-[650px]">
              <div className="absolute left-0 top-0 w-[320px] h-[460px] rounded-[30px] overflow-hidden">
                <Image
                  src="/Assets/figma/about/who-rectangle-3.png"
                  alt=""
                  fill
                  className="object-cover"
                  sizes="320px"
                />
              </div>
              <div className="absolute left-[200px] top-[220px] w-[320px] h-[460px] rounded-[30px] overflow-hidden border-[14px] border-white">
                <Image
                  src="/Assets/figma/about/who-rectangle-4.png"
                  alt=""
                  fill
                  className="object-cover"
                  sizes="320px"
                />
              </div>
              <div className="absolute left-[28px] top-[520px] w-[190px] h-[190px]">
                <Image
                  src="/Assets/figma/about/who-ellipse-5.svg"
                  alt=""
                  fill
                  className="object-contain"
                  sizes="190px"
                  aria-hidden="true"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center whitespace-pre-wrap">
                  <div className="font-outfit font-bold text-[70px] leading-none tracking-[-2px]">
                    8 +
                  </div>
                  <div className="mt-1 font-outfit font-normal text-[20px] leading-[28px] tracking-[0.6px]">
                    Years
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="w-full border border-brand-green rounded-[30px] overflow-hidden bg-white px-6 sm:px-10 py-6 sm:py-7"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
          >
            <div className="flex items-center justify-center gap-3 mb-3">
               <Handshake className="w-[50px] h-[50px] text-brand-green" strokeWidth={1.5} />
              <h3 className="font-outfit font-semibold text-[26px] leading-[32px] text-center">
                <span className="text-brand-dark-green">Your Trusted</span>
                <span className="text-brand-green"> Financial Partners</span>
              </h3>
            </div>

            <p className="font-outfit font-medium text-[13px] leading-[17px] text-center text-brand-dark-green">
              {data.description1}
            </p>
            <p className="mt-3 font-outfit font-medium text-[13px] leading-[17px] text-center text-brand-dark-green">
              {data.description2}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-[15px]">
            {data.features.map((feature, i) => (
              <motion.div
                key={feature.title}
                className="border border-brand-green rounded-[30px] h-[228px] bg-white overflow-hidden flex items-center justify-center"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.08 * i, ease: [0.25, 0.4, 0.25, 1] }}
              >
                <div className="w-[201px] flex flex-col items-center gap-[15px] text-center">
                  {(() => {
                    const Icon = iconMap[feature.icon] || Target;
                    return <Icon className="w-[70px] h-[70px] text-brand-green" strokeWidth={1.5} />;
                  })()}
                  <div  className="font-outfit font-semibold text-[20px] leading-[20px]">
                    <p className="text-brand-dark-green">{feature.title.split(" ").slice(0, 2).join(" ")}</p>
                    <p className="text-brand-green">{feature.title.split(" ").slice(2).join(" ") || ""}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Desktop flex layout (centered, responsive) */}
        <div className="hidden lg:flex items-start justify-center gap-[40px] w-full max-w-[1280px] mx-auto">
          {/* Left: Images + badge */}
          <div className="relative flex-shrink-0 w-[650px] h-[790px]">
            {/* Rectangle 3 */}
            <div className="absolute left-0 top-0 w-[396px] h-[523px] rounded-[30px] overflow-hidden">
              <Image
                src="/Assets/figma/about/who-rectangle-3.png"
                alt=""
                fill
                className="object-cover"
                sizes="396px"
              />
            </div>

            {/* Rectangle 4 */}
            <div className="absolute left-[252px] top-[264px] w-[396px] h-[523px] rounded-[30px] overflow-hidden border-[18px] border-white">
              <Image
                src="/Assets/figma/about/who-rectangle-4.png"
                alt=""
                fill
                className="object-cover"
                sizes="396px"
              />
            </div>

            {/* Ellipse badge */}
            <div className="absolute left-[28px] top-[399px] w-[213px] h-[213px]">
              <Image
                src="/Assets/figma/about/who-ellipse-5.svg"
                alt=""
                fill
                className="object-contain"
                sizes="213px"
                aria-hidden="true"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center whitespace-pre-wrap">
                <div className="font-outfit font-bold text-[96px] leading-[83px] tracking-[-7.68px]">
                  8 +
                </div>
                <div className="-mt-1 font-outfit font-normal text-[24px] leading-[28px] tracking-[0.72px]">
                  Years
                </div>
              </div>
            </div>
          </div>

          {/* Right: Copy card + feature tiles */}
          <div className="flex-1 min-w-0">
            {/*Copy card */}
            <motion.div
              className="w-[778px] h-56 border ml-[-270px] border-brand-green rounded-[30px] overflow-hidden bg-white mb-[20px]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
            >
              <div className="px-8 py-4 flex flex-col gap-[12px] h-full justify-center">
                <div className="flex items-center justify-start gap-4">
                  <Handshake className="w-[50px] h-[50px] text-brand-green" strokeWidth={1.5} />
                  <h3 className="font-outfit font-semibold text-[24px] leading-[32px]">
                    <span className="text-brand-dark-green">Your Trusted</span>
                    <span className="text-brand-green"> Financial Partners</span>
                  </h3>
                </div>
                <p className="font-outfit font-medium text-[12px] leading-[17px] text-brand-dark-green">
                  {data.description1}
                </p>
                <p className="font-outfit font-medium text-[12px] leading-[17px] text-brand-dark-green">
                  {data.description2}
                </p>
              </div>
            </motion.div>

            {/* Feature tiles */}
            <div className="grid grid-cols-2 gap-[20px]">
              {data.features.map((feature, i) => (
                <motion.div
                  key={feature.title}
                  className="border border-brand-green rounded-[30px] h-[260px] bg-white overflow-hidden flex items-center justify-center"
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: 0.06 * i, ease: [0.25, 0.4, 0.25, 1] }}
                >
                  <div className="flex flex-col items-center gap-[24px] text-center px-4">
                     {(() => {
                        const Icon = iconMap[feature.icon] || Target;
                        return <Icon className="w-[80px] h-[80px] text-brand-green" strokeWidth={1.5} />;
                      })()}
                    <div className="font-outfit font-semibold text-[18px] leading-[22px] whitespace-pre-wrap">
                      <span className="text-brand-dark-green block">{feature.title.split(" ").slice(0, -1).join(" ")}</span>
                      <span className="text-brand-green block">{feature.title.split(" ").slice(-1).join(" ")}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
