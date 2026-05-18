"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How quickly can I expect a response?",
    answer:
      "We aim to respond to all inquiries within 24 business hours. For urgent matters, please call us directly at +91 9000817471.",
  },
  {
    question: "Is the initial consultation free?",
    answer:
      "Yes, we offer a complimentary initial consultation to understand your requirements and suggest the best way forward. This helps us tailor our services to your specific needs.",
  },
  {
    question: "What documents should I bring for my first meeting?",
    answer:
      "For individual taxation, bring your PAN card, Aadhaar card, Form 16, bank statements, and investment proofs. For business inquiries, carry your incorporation documents, recent financial statements, and any pending compliance notices.",
  },
  {
    question: "Do you offer services for clients outside Hyderabad?",
    answer:
      "Absolutely! While our office is in Hyderabad, we serve clients across India and abroad through virtual consultations. NRI clients can avail all our services remotely.",
  },
  {
    question: "What are your office hours?",
    answer:
      "Our office is open Monday through Saturday, 9:00 AM to 6:00 PM IST. You can schedule appointments outside regular hours for urgent matters.",
  },
  {
    question: "Which industries do you serve?",
    answer:
      "We serve clients across industries including IT, healthcare, real estate, manufacturing, retail, education, and professional services. Our team has expertise in handling industry-specific compliance and advisory needs.",
  },
];

export default function ContactFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="contact-faq"
      className="w-full py-[60px] md:py-[80px] px-4 sm:px-8 lg:px-[5%]"
      aria-label="Frequently Asked Questions"
    >
      <div className="max-w-[800px] mx-auto">
        {/* Section Heading */}
        <motion.div
          className="text-center mb-10 md:mb-14"
          initial={{ opacity: 0, y: 22, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.65, ease: [0.25, 0.4, 0.25, 1] }}
        >
          <p className="font-inter font-semibold text-[14px] tracking-[3px] uppercase text-brand-accent mb-4">
            FAQs
          </p>
          <h2 className="font-outfit font-bold text-[clamp(28px,3vw,40px)] leading-[1.2]">
            <span className="text-brand-primary">Common </span>
            <span className="text-brand-accent">Questions</span>
          </h2>
          <p className="mt-3 font-inter text-[15px] sm:text-[16px] leading-[24px] text-brand-primary/60 max-w-[500px] mx-auto">
            Quick answers to help you get started with our services.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          className="flex flex-col gap-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className={`rounded-[14px] border transition-colors duration-300 ${
                  isOpen
                    ? "border-brand-accent/20 bg-brand-accent/[0.03] shadow-sm"
                    : "border-surface-input-border bg-white hover:border-brand-accent/15"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-5 sm:px-6 py-4 sm:py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span
                    className={`font-outfit font-semibold text-[15px] sm:text-[16px] leading-[22px] sm:leading-[24px] transition-colors ${
                      isOpen ? "text-brand-accent" : "text-brand-primary"
                    }`}
                  >
                    {faq.question}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown
                      className={`w-5 h-5 transition-colors ${
                        isOpen ? "text-brand-accent" : "text-brand-primary/40"
                      }`}
                    />
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 sm:px-6 pb-5 sm:pb-6">
                        <div className="h-px bg-brand-accent/10 mb-4" />
                        <p className="font-inter text-[14px] sm:text-[15px] leading-[22px] sm:leading-[24px] text-brand-primary/70">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
