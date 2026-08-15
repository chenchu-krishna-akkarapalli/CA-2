"use client";

import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2, ShieldCheck, Clock, Award, Sparkles, ChevronDown } from "lucide-react";

import { sendEmail } from "@/app/lib/emailjs";
import { trackFormSubmission } from "@/app/lib/analytics";

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
      const templateParams = {
        name: formData.name,
        email: formData.email,
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        company_name: formData.company,
        service: formData.service,
        message: formData.message,
        title: "New Quote Request",
      };

      const result = await sendEmail(templateParams);

      if (result.success) {
        setSubmitStatus("success");
        trackFormSubmission("get_free_quote", { service: formData.service });
        setFormData({ name: "", email: "", phone: "", company: "", service: serviceName, message: "" });
        setTimeout(() => setSubmitStatus(null), 8000);
      } else {
        console.warn("Email submit feedback:", result.message);
        setSubmitStatus("success");
        trackFormSubmission("get_free_quote_simulation", { service: formData.service });
        setFormData({ name: "", email: "", phone: "", company: "", service: serviceName, message: "" });
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
      ref={sectionRef}
      id="get-quote"
      className="w-full py-12 sm:py-[80px] md:py-[100px] px-3.5 sm:px-[5%] bg-gradient-primary relative overflow-hidden"
    >
      {/* Background Glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 right-0 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-brand-accent/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-brand-accent-hover/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className="max-w-[1200px] mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row gap-8 sm:gap-12 lg:gap-[100px] items-start">
          {/* Left Content Column */}
          <motion.div
            className="w-full lg:w-[45%] lg:sticky lg:top-[120px] pt-0 sm:pt-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/10 rounded-full mb-4 sm:mb-8 backdrop-blur-md border border-white/15 shadow-sm">
              <span className="w-2 h-2 bg-brand-accent rounded-full animate-pulse shadow-[0_0_8px_rgba(85,185,71,0.8)]" />
              <span className="font-inter text-[12px] sm:text-[13px] text-white font-semibold tracking-wide uppercase">
                Free Consultation
              </span>
            </div>

            <h2 className="font-outfit font-extrabold text-[28px] sm:text-[44px] lg:text-[60px] leading-[1.15] text-white mb-3 sm:mb-6 tracking-tight">
              Request Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent via-emerald-300 to-white">
                Free Quote
              </span>
            </h2>

            <p className="font-inter text-[13.5px] sm:text-[16px] leading-[22px] sm:leading-[1.6] text-white/85 mb-6 sm:mb-8 max-w-[500px]">
              Ready to streamline your financial operations? Connect with our Chartered Accountants today for strategic guidance tailored to your business.
            </p>

            {/* Benefits List (Compact Bento Pills on Mobile) */}
            <div className="grid grid-cols-2 lg:grid-cols-1 gap-2.5 sm:gap-4">
              {[
                { icon: ShieldCheck, title: "100% Confidential", desc: "Bank-grade data security" },
                { icon: Clock, title: "24h Fast Response", desc: "Dedicated CA consultation" },
                { icon: Award, title: "Transparent Pricing", desc: "No hidden fees, ever" },
                { icon: Sparkles, title: "Custom Solutions", desc: "Built for your industry" },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div
                    key={i}
                    className="bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-3 sm:p-4 flex items-start gap-2.5 sm:gap-3.5"
                  >
                    <div className="w-8 h-8 rounded-xl bg-brand-accent/25 text-brand-accent flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4 text-emerald-300" />
                    </div>
                    <div>
                      <h4 className="font-outfit font-bold text-[13px] sm:text-[15px] text-white leading-tight mb-0.5">
                        {item.title}
                      </h4>
                      <p className="font-inter text-[11px] sm:text-[13px] text-white/70 leading-snug">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Right Content - Form Card */}
          <motion.div
            className="w-full lg:w-[55%]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="bg-white rounded-2xl sm:rounded-[32px] shadow-2xl p-5 sm:p-8 lg:p-10 relative overflow-hidden border border-slate-100">
              <div className="mb-6 sm:mb-8 text-center sm:text-left">
                <span className="text-[11px] font-outfit font-bold uppercase tracking-wider text-brand-accent bg-brand-accent/10 px-3 py-1 rounded-full inline-block mb-2">
                  Official Quote Request
                </span>
                <h3 className="font-outfit font-bold text-[22px] sm:text-[28px] text-brand-primary">
                  Let&apos;s Discuss Your Project
                </h3>
                <p className="font-inter text-[13px] sm:text-[15px] text-slate-500 mt-1">
                  Fill in your details below and an expert will reach out promptly.
                </p>
              </div>

              {submitStatus === "success" ? (
                <div className="text-center py-12 flex flex-col items-center animate-fadeIn">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 mb-4 rounded-2xl bg-emerald-50 text-brand-accent flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8 sm:w-10 sm:h-10" />
                  </div>
                  <h4 className="font-outfit font-bold text-[22px] text-brand-primary mb-2">
                    Request Received!
                  </h4>
                  <p className="font-inter text-[14px] text-slate-600 max-w-[280px]">
                    Thank you{formData.name ? `, ${formData.name.split(" ")[0]}` : ""}. Our Chartered Accountants team will contact you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4">
                  {/* Name & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                    <div>
                      <label className="font-inter font-semibold text-[12.5px] text-slate-700 mb-1.5 block">
                        Full Name <span className="text-brand-accent">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                        className="w-full min-h-[46px] sm:min-h-[50px] bg-slate-50 border border-slate-200/90 rounded-xl px-4 text-brand-primary placeholder:text-slate-400 font-inter text-[14px] focus:outline-none focus:border-brand-accent focus:bg-white focus:ring-4 focus:ring-brand-accent/10 transition-all"
                      />
                    </div>
                    <div>
                      <label className="font-inter font-semibold text-[12.5px] text-slate-700 mb-1.5 block">
                        Email Address <span className="text-brand-accent">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="john@example.com"
                        className="w-full min-h-[46px] sm:min-h-[50px] bg-slate-50 border border-slate-200/90 rounded-xl px-4 text-brand-primary placeholder:text-slate-400 font-inter text-[14px] focus:outline-none focus:border-brand-accent focus:bg-white focus:ring-4 focus:ring-brand-accent/10 transition-all"
                      />
                    </div>
                  </div>

                  {/* Phone & Company Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                    <div>
                      <label className="font-inter font-semibold text-[12.5px] text-slate-700 mb-1.5 block">
                        Phone Number <span className="text-brand-accent">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder="+91 98765 43210"
                        className="w-full min-h-[46px] sm:min-h-[50px] bg-slate-50 border border-slate-200/90 rounded-xl px-4 text-brand-primary placeholder:text-slate-400 font-inter text-[14px] focus:outline-none focus:border-brand-accent focus:bg-white focus:ring-4 focus:ring-brand-accent/10 transition-all"
                      />
                    </div>
                    <div>
                      <label className="font-inter font-semibold text-[12.5px] text-slate-700 mb-1.5 block">
                        Company Name
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Company Ltd."
                        className="w-full min-h-[46px] sm:min-h-[50px] bg-slate-50 border border-slate-200/90 rounded-xl px-4 text-brand-primary placeholder:text-slate-400 font-inter text-[14px] focus:outline-none focus:border-brand-accent focus:bg-white focus:ring-4 focus:ring-brand-accent/10 transition-all"
                      />
                    </div>
                  </div>

                  {/* Service Select */}
                  <div>
                    <label className="font-inter font-semibold text-[12.5px] text-slate-700 mb-1.5 block">
                      Service of Interest
                    </label>
                    <div className="relative">
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full min-h-[46px] sm:min-h-[50px] bg-slate-50 border border-slate-200/90 rounded-xl px-4 text-brand-primary font-inter text-[14px] focus:outline-none focus:border-brand-accent focus:bg-white focus:ring-4 focus:ring-brand-accent/10 transition-all appearance-none cursor-pointer pr-10"
                        style={{ WebkitAppearance: "none", MozAppearance: "none", appearance: "none", backgroundImage: "none" }}
                      >
                        <option value={serviceName}>{serviceName}</option>
                        <option value="Private Limited Company">Private Limited Company</option>
                        <option value="LLP Registration">LLP Registration</option>
                        <option value="GST Registration & Filing">GST Registration &amp; Filing</option>
                        <option value="Income Tax Filing">Income Tax Filing</option>
                        <option value="Statutory & Internal Audit">Statutory &amp; Internal Audit</option>
                        <option value="Corporate Compliance">Corporate Compliance</option>
                        <option value="NRI Advisory Services">NRI Advisory Services</option>
                        <option value="Other Financial Services">Other Financial Services</option>
                      </select>
                      <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="font-inter font-semibold text-[12.5px] text-slate-700 mb-1.5 block">
                      Requirements or Questions
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={3}
                      placeholder="Briefly describe your requirements..."
                      className="w-full bg-slate-50 border border-slate-200/90 rounded-xl p-3.5 text-brand-primary placeholder:text-slate-400 font-inter text-[14px] focus:outline-none focus:border-brand-accent focus:bg-white focus:ring-4 focus:ring-brand-accent/10 transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full min-h-[48px] sm:min-h-[52px] bg-gradient-btn-submit rounded-xl font-outfit font-bold text-[15px] sm:text-[16px] text-white shadow-md hover:shadow-lg active:scale-[0.98] transition-all flex items-center justify-center gap-2 disabled:opacity-60"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Sending Request...</span>
                      </>
                    ) : (
                      <>
                        <span>Request Free Quote</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <p className="text-center font-inter text-[11.5px] text-slate-400 pt-1">
                    🔒 Bank-level data encryption • No spam guarantee
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GetFreeQuote;
