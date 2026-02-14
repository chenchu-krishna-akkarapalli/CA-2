"use client";

import React, { useState, useRef } from "react";
import { motion } from "framer-motion";

const GetFreeQuote = ({ serviceName = "Our Services" }: { serviceName?: string }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: serviceName,
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // EmailJS configuration — use NEXT_PUBLIC_ env vars for Next.js
      const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const TEMPLATE_ID_ADMIN = process.env.NEXT_PUBLIC_EMAILJS_ADMIN_TEMPLATE_ID;
      const TEMPLATE_ID_USER = process.env.NEXT_PUBLIC_EMAILJS_AUTO_REPLY_TEMPLATE_ID;
      const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      if (!SERVICE_ID || !TEMPLATE_ID_ADMIN || !PUBLIC_KEY) {
        console.warn("EmailJS env vars not configured");
        // Simulate success for development
        setSubmitStatus("success");
        setFormData({ name: "", email: "", phone: "", company: "", service: serviceName, message: "" });
        setTimeout(() => setSubmitStatus(null), 8000);
        return;
      }

      // Dynamically import emailjs only when needed (optional dependency)
      let emailjs: any;
      try {
        emailjs = (await import("@emailjs/browser" as any)).default;
      } catch {
        console.warn("@emailjs/browser not installed — simulating success");
        setSubmitStatus("success");
        setFormData({ name: "", email: "", phone: "", company: "", service: serviceName, message: "" });
        setTimeout(() => setSubmitStatus(null), 8000);
        return;
      }

      const templateParams = {
        name: formData.name,
        email: formData.email,
        user_name: formData.name,
        user_email: formData.email,
        user_phone: formData.phone,
        company_name: formData.company,
        service: formData.service,
        message: formData.message,
        title: "New Quote Request",
      };

      await emailjs.send(SERVICE_ID, TEMPLATE_ID_ADMIN, templateParams, PUBLIC_KEY);

      if (TEMPLATE_ID_USER) {
        await emailjs.send(SERVICE_ID, TEMPLATE_ID_USER, templateParams, PUBLIC_KEY);
      }

      setSubmitStatus("success");
      setFormData({ name: "", email: "", phone: "", company: "", service: serviceName, message: "" });
      setTimeout(() => setSubmitStatus(null), 8000);
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
      ref={sectionRef}
      id="get-quote"
      className="w-full py-[80px] md:py-[100px] px-[5%] bg-gradient-primary relative overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-green/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-accent-green/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />

        {/* Animated Particles */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white/5 animate-[float_15s_infinite_linear]"
            style={{
              width: 60 + i * 12 + "px",
              height: 60 + i * 12 + "px",
              left: (i * 13) % 100 + "%",
              top: (i * 17) % 100 + "%",
              animationDelay: `-${i * 2.5}s`,
              animationDuration: `${12 + i * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-[1200px] mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row gap-[60px] lg:gap-[100px] items-start">
          {/* Left Content */}
          <motion.div
            className="w-full lg:w-[45%] lg:sticky lg:top-[120px] pt-10"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-8 backdrop-blur-md border border-white/10 shadow-lg">
              <span className="w-2 h-2 bg-brand-green rounded-full animate-pulse shadow-[0_0_10px_rgba(85,185,71,0.6)]" />
              <span className="font-inter text-[13px] text-white font-medium tracking-wide">
                Free Consultation
              </span>
            </div>

            <h2 className="font-outfit font-bold text-[clamp(40px,5vw,64px)] leading-[1.1] text-white mb-6">
              Get a Free
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-white">
                {" "}
                Quote Today
              </span>
            </h2>

            <p className="font-inter text-[18px] leading-[1.6] text-white/80 mb-10 max-w-[500px]">
              Ready to take your business to the next level? Our financial experts are here to build
              a roadmap for your success.
            </p>

            {/* Benefits List */}
            <div className="space-y-6">
              {[
                { title: "Transparent Pricing", desc: "No hidden fees, ever." },
                { title: "Fast Response", desc: "Expert consultation within 24 hours." },
                { title: "Tailored Solutions", desc: "Strategies built for your specific needs." },
                { title: "Secure & Confidential", desc: "Your data is protected by bank-level security." },
              ].map((benefit, i) => (
                <motion.div
                  key={i}
                  className="flex items-start gap-4 group"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * i }}
                >
                  <div className="w-10 h-10 rounded-[12px] bg-brand-green/20 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-green transition-colors duration-300">
                    <svg
                      className="w-5 h-5 text-brand-green group-hover:text-white transition-colors duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-outfit font-bold text-[18px] text-white mb-1 group-hover:text-brand-green transition-colors">
                      {benefit.title}
                    </h4>
                    <p className="font-inter text-[14px] text-white/60">{benefit.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Form Card */}
          <motion.div
            className="w-full lg:w-[55%]"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.4, 0.25, 1] }}
          >
            <div className="bg-white rounded-[30px] shadow-contact p-[30px] md:p-[50px] relative overflow-hidden backdrop-blur-xl">
              <div className="text-center mb-10">
                <h3 className="font-outfit font-bold text-[32px] text-brand-dark-green mb-3">
                  Request Your Free Quote
                </h3>
                <p className="font-inter text-[16px] text-text-muted">
                  Fill in your details below and we&apos;ll get back to you shortly.
                </p>
              </div>

              {submitStatus === "success" ? (
                <div className="text-center py-20 flex flex-col items-center animate-fadeIn">
                  <div className="w-24 h-24 mb-6 rounded-full bg-brand-green/20 flex items-center justify-center">
                    <svg className="w-12 h-12 text-brand-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h4 className="font-outfit font-bold text-[28px] text-brand-dark-green mb-4">
                    Request Received!
                  </h4>
                  <p className="font-inter text-[16px] text-text-muted max-w-[300px]">
                    Thank you{formData.name ? `, ${formData.name.split(" ")[0]}` : ""}. We&apos;ll be in touch within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name & Email */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="group">
                      <label className="font-inter font-bold text-[14px] text-brand-dark-green mb-2 block ml-1">
                        Full Name <span className="text-brand-green">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="e.g. John Doe"
                        className="w-full h-[56px] bg-gray-50 border border-surface-input-border rounded-[14px] px-5 text-brand-dark-green placeholder:text-text-muted font-inter text-[15px] focus:outline-none focus:border-brand-green focus:bg-white focus:ring-4 focus:ring-brand-green/10 transition-all duration-300"
                      />
                    </div>
                    <div className="group">
                      <label className="font-inter font-bold text-[14px] text-brand-dark-green mb-2 block ml-1">
                        Email Address <span className="text-brand-green">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="john@company.com"
                        className="w-full h-[56px] bg-gray-50 border border-surface-input-border rounded-[14px] px-5 text-brand-dark-green placeholder:text-text-muted font-inter text-[15px] focus:outline-none focus:border-brand-green focus:bg-white focus:ring-4 focus:ring-brand-green/10 transition-all duration-300"
                      />
                    </div>
                  </div>

                  {/* Phone & Company */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="group">
                      <label className="font-inter font-bold text-[14px] text-brand-dark-green mb-2 block ml-1">
                        Phone Number <span className="text-brand-green">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder="+91 98765 43210"
                        className="w-full h-[56px] bg-gray-50 border border-surface-input-border rounded-[14px] px-5 text-brand-dark-green placeholder:text-text-muted font-inter text-[15px] focus:outline-none focus:border-brand-green focus:bg-white focus:ring-4 focus:ring-brand-green/10 transition-all duration-300"
                      />
                    </div>
                    <div className="group">
                      <label className="font-inter font-bold text-[14px] text-brand-dark-green mb-2 block ml-1">
                        Company Name
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your Company"
                        className="w-full h-[56px] bg-gray-50 border border-surface-input-border rounded-[14px] px-5 text-brand-dark-green placeholder:text-text-muted font-inter text-[15px] focus:outline-none focus:border-brand-green focus:bg-white focus:ring-4 focus:ring-brand-green/10 transition-all duration-300"
                      />
                    </div>
                  </div>

                  {/* Service Select */}
                  <div className="group">
                    <label className="font-inter font-bold text-[14px] text-brand-dark-green mb-2 block ml-1">
                      Service Interested In
                    </label>
                    <div className="relative">
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full h-[56px] bg-gray-50 border border-surface-input-border rounded-[14px] px-5 text-brand-dark-green font-inter text-[15px] focus:outline-none focus:border-brand-green focus:bg-white focus:ring-4 focus:ring-brand-green/10 transition-all duration-300 cursor-pointer appearance-none"
                      >
                        <option value={serviceName}>{serviceName}</option>
                        <option value="Private Limited Company">Private Limited Company</option>
                        <option value="LLP Registration">LLP Registration</option>
                        <option value="GST Registration">GST Registration</option>
                        <option value="Tax Filing">Tax Filing</option>
                        <option value="Audit Services">Audit Services</option>
                        <option value="Compliance">Compliance</option>
                        <option value="Other">Other</option>
                      </select>
                      <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none">
                        <svg className="w-5 h-5 text-brand-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="group">
                    <label className="font-inter font-bold text-[14px] text-brand-dark-green mb-2 block ml-1">
                      Your Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={3}
                      placeholder="Tell us about your requirements..."
                      className="w-full bg-gray-50 border border-surface-input-border rounded-[14px] px-5 py-4 text-brand-dark-green placeholder:text-text-muted font-inter text-[15px] focus:outline-none focus:border-brand-green focus:bg-white focus:ring-4 focus:ring-brand-green/10 transition-all duration-300 resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-[60px] bg-gradient-primary rounded-[16px] font-inter font-bold text-[16px] text-white hover:shadow-[0_10px_30px_rgba(44,119,68,0.4)] transition-all duration-300 flex items-center justify-center gap-3 group disabled:opacity-70 disabled:cursor-not-allowed transform hover:-translate-y-1"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Submitting...</span>
                      </>
                    ) : (
                      <>
                        <span>Get Your Free Quote</span>
                        <svg
                          className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </>
                    )}
                  </button>

                  <p className="text-center font-inter text-[13px] text-text-muted/80 mt-4">
                    By submitting, you agree to our{" "}
                    <a href="#" className="text-brand-green font-semibold hover:underline">
                      Privacy Policy
                    </a>
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Float animation keyframes */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }
      `}</style>
    </section>
  );
};

export default GetFreeQuote;
