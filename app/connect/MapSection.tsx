"use client";

import React from "react";
import { motion } from "framer-motion";

export default function MapSection() {
  return (
    <section
      id="office-location"
      className="w-full py-[60px] md:py-[80px] px-4 sm:px-8 lg:px-[5%] bg-[#f5f8f5]"
      aria-label="Office Location"
    >
      <div className="max-w-[1232px] mx-auto">
        {/* Section Heading */}
        <motion.div
          className="text-center mb-10 md:mb-14"
          initial={{ opacity: 0, y: 22, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.65, ease: [0.25, 0.4, 0.25, 1] }}
        >
          <p className="font-inter font-semibold text-[14px] tracking-[3px] uppercase text-brand-accent mb-4">
            Our Office
          </p>
          <h2 className="font-outfit font-bold text-[clamp(28px,3vw,40px)] leading-[1.2]">
            <span className="text-brand-primary">Find Us </span>
            <span className="text-brand-accent">on the Map</span>
          </h2>
          <p className="mt-3 font-inter text-[15px] sm:text-[16px] leading-[24px] text-brand-primary/60 max-w-[560px] mx-auto">
            Visit our office at Velachery, Chennai for a face-to-face consultation with our team.
          </p>
        </motion.div>

        {/* Map Container */}
        <motion.div
          className="w-full rounded-[20px] sm:rounded-[28px] overflow-hidden shadow-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
        >
          {/* Decorative gradient border */}
          <div className="h-1 bg-gradient-btn-services" />

          <div className="relative w-full aspect-[16/7] min-h-[280px] max-h-[450px] bg-surface-card">
            <iframe
              title="CHINNI MALLIKARJUNA AND COMPANY Office - Velachery, Chennai"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15548.870308075727!2d80.20847975!3d12.99617265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525d80b7b3b9b9%3A0x6b4b4b4b4b4b4b4b!2sVelachery%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1707916543210!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, position: "absolute", inset: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />
          </div>

          {/* Bottom info bar */}
          <div className="bg-white py-4 sm:py-5 px-5 sm:px-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div>
              <p className="font-outfit font-semibold text-[15px] sm:text-[16px] text-brand-primary">
                CHINNI MALLIKARJUNA AND COMPANY, Chartered Accountants
              </p>
              <p className="font-inter text-[13px] sm:text-[14px] text-brand-primary/60 mt-0.5">
                No. 10/31, G1, Ten Downing, Rajalakshmi Nagar, 3rd Main Road, Velachery, Chennai – 600 042
              </p>
            </div>
            <a
              href="https://www.google.com/maps/search/?api=1&query=No.+10%2F31,+G1,+Ten+Downing,+Rajalakshmi+Nagar+3rd+Main+Road,+Velachery,+Chennai+%E2%80%93+600+042"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center h-[40px] px-5 rounded-[8px] bg-gradient-btn-services text-white font-outfit font-semibold text-[14px] hover:opacity-90 transition-opacity whitespace-nowrap flex-shrink-0"
            >
              Get Directions
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
