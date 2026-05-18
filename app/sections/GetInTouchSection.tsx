"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function GetInTouchSection() {
  return (
    <section
      id="get-in-touch"
      className="relative w-full max-w-[1232px]"
      aria-label="Get In Touch With Us"
    >
      {/* Section Title */}
      <motion.h2
        className="font-outfit font-semibold text-[24px] sm:text-[28px] lg:text-[32px] leading-[32px] sm:leading-[38px] lg:leading-[44px] text-center text-brand-primary mb-6 sm:mb-8"
        initial={{ opacity: 0, y: 22, filter: "blur(6px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.65, ease: [0.25, 0.4, 0.25, 1] }}
      >
        GET IN TOUCH{" "}
        <span className="text-brand-accent-hover">WITH US</span>
      </motion.h2>

      {/* Contact Container */}
      <motion.div
        className="w-full rounded-[24px] sm:rounded-[32px] lg:rounded-[40px] shadow-contact overflow-hidden flex flex-col lg:flex-row"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
      >
        {/* Left Panel - Contact Info */}
        <div className="w-full lg:w-[50%] bg-gradient-contact p-6 sm:p-8 lg:p-[48px] flex flex-col">
          {/* Heading */}
          <h3 className="font-outfit font-bold text-[22px] sm:text-[26px] lg:text-[28px] leading-[30px] sm:leading-[34px] lg:leading-[36px] text-white">
            Contact Information
          </h3>
          <p className="mt-2 sm:mt-3 font-inter font-light text-[14px] sm:text-[15px] lg:text-[16px] leading-[22px] sm:leading-[24px] text-white/80 max-w-[480px]">
            Say something to start a live chat!
          </p>

          {/* Contact Items */}
          <div className="mt-8 sm:mt-10 lg:mt-16 flex flex-col gap-6 sm:gap-8 lg:gap-10">
            {/* Visit Us */}
            <div className="flex items-start gap-4 sm:gap-5">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-white/20 flex items-center justify-center flex-shrink-0">
                <Image src="/Assets/Icon-6.svg" alt="" width={24} height={24} aria-hidden="true" />
              </div>
              <div>
                <h4 className="font-outfit font-semibold text-[15px] sm:text-[16px] leading-[22px] text-white">
                  Visit Us
                </h4>
                <p className="mt-1 font-inter font-light text-[13px] sm:text-[14px] leading-[20px] text-white/70 max-w-[340px]">
                  No. 10/31, G1, Ten Downing, Rajalakshmi Nagar, 3rd Main Road, Velachery, Chennai – 600 042
                </p>
              </div>
            </div>

            {/* Call Us */}
            <div className="flex items-start gap-4 sm:gap-5">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-white/20 flex items-center justify-center flex-shrink-0">
                <Image src="/Assets/Icon-4.svg" alt="" width={24} height={24} aria-hidden="true" />
              </div>
              <div>
                <h4 className="font-outfit font-semibold text-[15px] sm:text-[16px] leading-[22px] text-white">
                  Call Us
                </h4>
                <p className="mt-1 font-inter font-light text-[13px] sm:text-[14px] leading-[20px] text-white/70">
                  +91 7032 163 646
                </p>
              </div>
            </div>

            {/* Email Us */}
            <div className="flex items-start gap-4 sm:gap-5">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-white/20 flex items-center justify-center flex-shrink-0">
                <Image src="/Assets/Icon-3.svg" alt="" width={24} height={24} aria-hidden="true" />
              </div>
              <div>
                <h4 className="font-outfit font-semibold text-[15px] sm:text-[16px] leading-[22px] text-white">
                  Email Us
                </h4>
                <p className="mt-1 font-inter font-light text-[13px] sm:text-[14px] leading-[20px] text-white/70">
                  malli@cmkca.com
                </p>
              </div>
            </div>
          </div>

          {/* Operating Hours */}
          <div className="mt-8 sm:mt-10 lg:mt-auto pt-4 flex items-center gap-2">
            <Image src="/Assets/Icon-10.svg" alt="" width={20} height={20} aria-hidden="true" />
            <span className="font-inter font-light text-[13px] sm:text-[14px] leading-[20px] text-white/60">
              Operating Hours: Mon – Sat, 9:00 AM – 6:00 PM
            </span>
          </div>
        </div>

        {/* Right Panel - Contact Form */}
        <div className="flex-1 bg-white p-6 sm:p-8 lg:p-[48px] flex flex-col">
          <form
            className="flex flex-col h-full"
            onSubmit={(e) => e.preventDefault()}
            aria-label="Contact form"
          >
            {/* Name Row */}
            <div className="flex flex-col sm:flex-row gap-5 sm:gap-6">
              <div className="flex-1 flex flex-col gap-2">
                <label
                  htmlFor="firstName"
                  className="font-outfit font-medium text-[14px] leading-[20px] text-brand-primary"
                >
                  First Name
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  placeholder="John"
                  className="w-full h-[44px] border border-surface-input-border rounded-[8px] px-4 font-inter text-[14px] text-brand-primary placeholder:text-text-placeholder focus:border-brand-accent focus:ring-1 focus:ring-brand-accent outline-none transition-colors"
                  aria-required="true"
                  suppressHydrationWarning
                />
              </div>
              <div className="flex-1 flex flex-col gap-2">
                <label
                  htmlFor="lastName"
                  className="font-outfit font-medium text-[14px] leading-[20px] text-brand-primary"
                >
                  Last Name
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  placeholder="Doe"
                  className="w-full h-[44px] border border-surface-input-border rounded-[8px] px-4 font-inter text-[14px] text-brand-primary placeholder:text-text-placeholder focus:border-brand-accent focus:ring-1 focus:ring-brand-accent outline-none transition-colors"
                  aria-required="true"
                  suppressHydrationWarning
                />
              </div>
            </div>

            {/* Email */}
            <div className="mt-5 sm:mt-6 flex flex-col gap-2">
              <label
                htmlFor="email"
                className="font-outfit font-medium text-[14px] leading-[20px] text-brand-primary"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="john@example.com"
                className="w-full h-[44px] border border-surface-input-border rounded-[8px] px-4 font-inter text-[14px] text-brand-primary placeholder:text-text-placeholder focus:border-brand-accent focus:ring-1 focus:ring-brand-accent outline-none transition-colors"
                aria-required="true"
                suppressHydrationWarning
              />
            </div>

            {/* Phone */}
            <div className="mt-5 sm:mt-6 flex flex-col gap-2">
              <label
                htmlFor="phone"
                className="font-outfit font-medium text-[14px] leading-[20px] text-brand-primary"
              >
                Phone Number
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="+91 7032 163 646"
                className="w-full h-[44px] border border-surface-input-border rounded-[8px] px-4 font-inter text-[14px] text-brand-primary placeholder:text-text-placeholder focus:border-brand-accent focus:ring-1 focus:ring-brand-accent outline-none transition-colors"
                suppressHydrationWarning
              />
            </div>

            {/* Message */}
            <div className="mt-5 sm:mt-6 flex flex-col gap-2 flex-1">
              <label
                htmlFor="message"
                className="font-outfit font-medium text-[14px] leading-[20px] text-brand-primary"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Write your message..."
                rows={4}
                className="w-full flex-1 min-h-[100px] border border-surface-input-border rounded-[8px] p-4 font-inter text-[14px] text-brand-primary placeholder:text-text-placeholder focus:border-brand-accent focus:ring-1 focus:ring-brand-accent outline-none transition-colors resize-none"
                aria-required="true"
                suppressHydrationWarning
              />
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              className="mt-5 sm:mt-6 w-full h-[48px] sm:h-[52px] rounded-[8px] bg-gradient-btn-submit text-white font-outfit font-semibold text-[16px] leading-[20px] flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              suppressHydrationWarning
            >
              Send Message
              <ArrowRight className="w-5 h-5" strokeWidth={2} />
            </motion.button>
          </form>
        </div>
      </motion.div>
    </section>
  );
}
