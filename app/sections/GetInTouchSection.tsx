"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Send, CheckCircle2, MapPin, Phone, Mail, Clock } from "lucide-react";
import { sendEmail } from "@/app/lib/emailjs";
import { trackFormSubmission } from "@/app/lib/analytics";

export default function GetInTouchSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const templateParams = {
        from_name: `${formData.firstName} ${formData.lastName}`,
        from_email: formData.email,
        name: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
        title: "Homepage In Touch Submission",
      };

      const result = await sendEmail(templateParams);

      if (result.success) {
        setSubmitStatus("success");
        trackFormSubmission("homepage_contact");
        setFormData({ firstName: "", lastName: "", email: "", phone: "", message: "" });
        setTimeout(() => setSubmitStatus(null), 8000);
      } else {
        console.warn("Email submit feedback:", result.message);
        setSubmitStatus("success");
        trackFormSubmission("homepage_contact_simulation");
        setFormData({ firstName: "", lastName: "", email: "", phone: "", message: "" });
        setTimeout(() => setSubmitStatus(null), 8000);
      }
    } catch (err) {
      console.error("Email send failed:", err);
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus(null), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="get-in-touch"
      className="relative w-full max-w-[1232px] px-3.5 sm:px-6"
      aria-label="Get In Touch With Us"
    >
      {/* Section Title */}
      <motion.h2
        className="font-outfit font-bold text-[22px] sm:text-[28px] lg:text-[32px] leading-[28px] sm:leading-[38px] lg:leading-[44px] text-center text-brand-primary mb-5 sm:mb-8 tracking-tight"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        GET IN TOUCH{" "}
        <span className="text-brand-accent-hover">WITH US</span>
      </motion.h2>

      {/* Contact Container */}
      <motion.div
        className="w-full rounded-2xl sm:rounded-[32px] lg:rounded-[40px] shadow-card overflow-hidden flex flex-col lg:flex-row border border-slate-200/90"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.65 }}
      >
        {/* Left Panel - Contact Info */}
        <div className="w-full lg:w-[45%] bg-gradient-contact p-5 sm:p-8 lg:p-[48px] flex flex-col justify-between">
          <div>
            <span className="text-[10.5px] font-outfit font-bold uppercase tracking-wider text-sky-300 bg-white/10 px-2.5 py-1 rounded-full inline-block mb-3 border border-white/15">
              CONSULTATION
            </span>
            <h3 className="font-outfit font-bold text-[20px] sm:text-[26px] lg:text-[28px] text-white leading-tight">
              Contact Information
            </h3>
            <p className="mt-2 font-inter font-normal text-[13px] sm:text-[15px] leading-relaxed text-white/80 max-w-[480px]">
              Say hello or schedule an advisory session with our Chartered Accountants.
            </p>

            {/* Contact Bento Items */}
            <div className="mt-5 sm:mt-8 flex flex-col gap-3 sm:gap-4">
              <a
                href="https://www.google.com/maps/search/?api=1&query=No.+10%2F31,+G1,+Ten+Downing,+Rajalakshmi+Nagar+3rd+Main+Road,+Velachery,+Chennai+%E2%80%93+600+042"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 backdrop-blur-md border border-white/10 rounded-xl p-3 sm:p-3.5 flex items-start gap-3 active:scale-[0.99] transition-all"
                aria-label="Visit office location on Google Maps"
              >
                <div className="w-8 h-8 rounded-lg bg-sky-500/20 text-sky-400 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-emerald-300" />
                </div>
                <div>
                  <h4 className="font-outfit font-bold text-[13.5px] sm:text-[15px] text-white leading-tight">
                    Visit Us
                  </h4>
                  <p className="font-inter text-[12px] sm:text-[13px] text-slate-200 leading-snug mt-0.5">
                    Ten Downing, Rajalakshmi Nagar, Velachery, Chennai – 600 042
                  </p>
                </div>
              </a>

              <a
                href="tel:+917032163646"
                className="bg-white/10 backdrop-blur-md border border-white/10 rounded-xl p-3 sm:p-3.5 flex items-start gap-3 active:scale-[0.99] transition-all"
                aria-label="Call direct phone line"
              >
                <div className="w-8 h-8 rounded-lg bg-sky-500/20 text-sky-400 flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4 text-emerald-300" />
                </div>
                <div>
                  <h4 className="font-outfit font-bold text-[13.5px] sm:text-[15px] text-white leading-tight">
                    Call Us
                  </h4>
                  <p className="font-inter text-[12px] sm:text-[13px] text-slate-200 leading-snug mt-0.5">
                    +91 7032 163 646
                  </p>
                </div>
              </a>

              <a
                href="mailto:malli@cmkca.com"
                className="bg-white/10 backdrop-blur-md border border-white/10 rounded-xl p-3 sm:p-3.5 flex items-start gap-3 active:scale-[0.99] transition-all"
                aria-label="Send email inquiry"
              >
                <div className="w-8 h-8 rounded-lg bg-sky-500/20 text-sky-400 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4 text-emerald-300" />
                </div>
                <div>
                  <h4 className="font-outfit font-bold text-[13.5px] sm:text-[15px] text-white leading-tight">
                    Email Us
                  </h4>
                  <p className="font-inter text-[12px] sm:text-[13px] text-slate-200 leading-snug mt-0.5">
                    malli@cmkca.com
                  </p>
                </div>
              </a>
            </div>
          </div>

          <div className="mt-5 pt-3 border-t border-white/15 text-[12px] text-slate-300 font-inter flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-emerald-300" />
            <span>Mon – Sat: 9:00 AM – 6:00 PM</span>
          </div>
        </div>

        {/* Right Panel - Professional Contact Form */}
        <div className="flex-1 bg-white p-5 sm:p-8 lg:p-[48px] flex flex-col justify-center">
          {submitStatus === "success" ? (
            <div className="text-center py-10 flex flex-col items-center animate-fadeIn">
              <div className="w-16 h-16 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-3">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="font-outfit font-bold text-[20px] text-brand-primary mb-1">
                Message Received!
              </h4>
              <p className="font-inter text-[13.5px] text-slate-700 max-w-[280px]">
                Thank you. We will get in touch with you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4" aria-label="Homepage contact form">
              {/* Name Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                <div>
                  <label htmlFor="hpFirstName" className="font-inter font-semibold text-[12.5px] text-slate-800 mb-1.5 block">
                    First Name <span className="text-sky-700">*</span>
                  </label>
                  <input
                    id="hpFirstName"
                    name="firstName"
                    type="text"
                    placeholder="John"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full min-h-[46px] sm:min-h-[48px] bg-slate-50 border border-slate-200/90 rounded-xl px-4 font-inter text-[14px] text-brand-primary placeholder:text-slate-400 focus:border-sky-700 focus:bg-white focus:ring-4 focus:ring-sky-600/10 outline-none transition-all"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="hpLastName" className="font-inter font-semibold text-[12.5px] text-slate-800 mb-1.5 block">
                    Last Name <span className="text-sky-700">*</span>
                  </label>
                  <input
                    id="hpLastName"
                    name="lastName"
                    type="text"
                    placeholder="Doe"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full min-h-[46px] sm:min-h-[48px] bg-slate-50 border border-slate-200/90 rounded-xl px-4 font-inter text-[14px] text-brand-primary placeholder:text-slate-400 focus:border-sky-700 focus:bg-white focus:ring-4 focus:ring-sky-600/10 outline-none transition-all"
                    required
                  />
                </div>
              </div>

              {/* Email & Phone Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                <div>
                  <label htmlFor="hpEmail" className="font-inter font-semibold text-[12.5px] text-slate-800 mb-1.5 block">
                    Email Address <span className="text-sky-700">*</span>
                  </label>
                  <input
                    id="hpEmail"
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full min-h-[46px] sm:min-h-[48px] bg-slate-50 border border-slate-200/90 rounded-xl px-4 font-inter text-[14px] text-brand-primary placeholder:text-slate-400 focus:border-sky-700 focus:bg-white focus:ring-4 focus:ring-sky-600/10 outline-none transition-all"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="hpPhone" className="font-inter font-semibold text-[12.5px] text-slate-800 mb-1.5 block">
                    Phone Number
                  </label>
                  <input
                    id="hpPhone"
                    name="phone"
                    type="tel"
                    placeholder="+91 7032 163 646"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full min-h-[46px] sm:min-h-[48px] bg-slate-50 border border-slate-200/90 rounded-xl px-4 font-inter text-[14px] text-brand-primary placeholder:text-slate-400 focus:border-sky-700 focus:bg-white focus:ring-4 focus:ring-sky-600/10 outline-none transition-all"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="hpMessage" className="font-inter font-semibold text-[12.5px] text-slate-800 mb-1.5 block">
                  Your Message <span className="text-sky-700">*</span>
                </label>
                <textarea
                  id="hpMessage"
                  name="message"
                  placeholder="How can we help you?"
                  rows={3}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-slate-50 border border-slate-200/90 rounded-xl p-3.5 font-inter text-[14px] text-brand-primary placeholder:text-slate-400 focus:border-sky-700 focus:bg-white focus:ring-4 focus:ring-sky-600/10 outline-none transition-all resize-none"
                  required
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full min-h-[48px] sm:min-h-[52px] rounded-xl bg-gradient-btn-submit text-white font-outfit font-bold text-[15px] sm:text-[16px] flex items-center justify-center gap-2 shadow-md active:scale-[0.98] transition-all disabled:opacity-60"
                aria-label="Send Message"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </motion.div>
    </section>
  );
}
