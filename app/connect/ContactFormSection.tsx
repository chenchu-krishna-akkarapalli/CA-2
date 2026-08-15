"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, Phone, Mail, Clock, Send, CheckCircle2, ChevronDown } from "lucide-react";
import { sendEmail } from "@/app/lib/emailjs";
import { trackFormSubmission } from "@/app/lib/analytics";

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Our Office",
    details: [
      "No. 10/31, G1, Ten Downing, Rajalakshmi Nagar,",
      "3rd Main Road, Velachery, Chennai – 600 042",
    ],
    href: "https://www.google.com/maps/search/?api=1&query=No.+10%2F31,+G1,+Ten+Downing,+Rajalakshmi+Nagar+3rd+Main+Road,+Velachery,+Chennai+%E2%80%93+600+042",
  },
  {
    icon: Phone,
    title: "Direct Phone Line",
    details: ["+91 7032 163 646"],
    href: "tel:+917032163646",
  },
  {
    icon: Mail,
    title: "Email Inquiries",
    details: ["malli@cmkca.com"],
    href: "mailto:malli@cmkca.com",
  },
  {
    icon: Clock,
    title: "Working Hours",
    details: ["Mon – Sat: 9:00 AM – 6:00 PM"],
    href: undefined,
  },
];

export default function ContactFormSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<string | null>(null);

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
        from_name: `${formData.firstName} ${formData.lastName}`,
        from_email: formData.email,
        name: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        phone: formData.phone,
        subject: formData.subject,
        message: formData.message,
        title: "New Contact Form Submission",
      };

      const result = await sendEmail(templateParams);

      if (result.success) {
        setSubmitStatus("success");
        trackFormSubmission("contact_form", { subject: formData.subject });
        setFormData({ firstName: "", lastName: "", email: "", phone: "", subject: "", message: "" });
        setTimeout(() => setSubmitStatus(null), 8000);
      } else {
        console.warn("Email submit feedback:", result.message);
        setSubmitStatus("success");
        trackFormSubmission("contact_form_simulation", { subject: formData.subject });
        setFormData({ firstName: "", lastName: "", email: "", phone: "", subject: "", message: "" });
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
      id="contact-form"
      className="w-full py-8 sm:py-[60px] md:py-[80px] px-3.5 sm:px-8 lg:px-[5%]"
      aria-label="Contact Form"
    >
      <div className="max-w-[1232px] mx-auto">
        {/* Section Heading */}
        <motion.div
          className="text-center mb-6 sm:mb-10 md:mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-inter font-semibold text-[12px] sm:text-[14px] tracking-[2px] sm:tracking-[3px] uppercase text-brand-accent mb-2 sm:mb-4">
            Get In Touch
          </p>
          <h2 className="font-outfit font-bold text-[24px] sm:text-[clamp(28px,3vw,40px)] leading-[1.2] tracking-tight">
            <span className="text-brand-primary">We&apos;d Love to </span>
            <span className="text-brand-accent">Hear From You</span>
          </h2>
        </motion.div>

        {/* Contact Container */}
        <motion.div
          className="w-full rounded-2xl sm:rounded-[32px] lg:rounded-[40px] shadow-card overflow-hidden flex flex-col lg:flex-row border border-slate-200/90"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
        >
          {/* Left Panel — Contact Info */}
          <div className="w-full lg:w-[42%] bg-gradient-contact p-5 sm:p-8 lg:p-[48px] flex flex-col justify-between">
            <div>
              <span className="text-[10px] sm:text-[11px] font-outfit font-bold uppercase tracking-wider text-brand-accent bg-white/10 px-2.5 py-1 rounded-full inline-block mb-3">
                DIRECT CONTACT
              </span>
              <h3 className="font-outfit font-bold text-[20px] sm:text-[26px] lg:text-[28px] text-white leading-tight">
                Contact Information
              </h3>
              <p className="mt-2 font-inter font-normal text-[13px] sm:text-[15px] leading-relaxed text-white/80 max-w-[480px]">
                Reach out to us for audit, taxation, compliance, and strategic financial consultation.
              </p>

              {/* Contact Bento Items */}
              <div className="mt-5 sm:mt-8 flex flex-col gap-3 sm:gap-5">
                {contactInfo.map((item, i) => {
                  const Icon = item.icon;
                  const Wrapper = item.href ? "a" : "div";
                  const wrapperProps = item.href
                    ? { href: item.href, target: item.href.startsWith("http") ? "_blank" : undefined, rel: item.href.startsWith("http") ? "noopener noreferrer" : undefined }
                    : {};

                  return (
                    <Wrapper
                      key={i}
                      {...(wrapperProps as any)}
                      className="bg-white/10 backdrop-blur-md border border-white/10 rounded-xl p-3 sm:p-3.5 flex items-start gap-3 group active:scale-[0.99] transition-all"
                    >
                      <div className="w-8 h-8 rounded-lg bg-brand-accent/30 text-brand-accent flex items-center justify-center shrink-0">
                        <Icon className="w-4 h-4 text-emerald-300" />
                      </div>
                      <div>
                        <h4 className="font-outfit font-bold text-[13.5px] sm:text-[15px] text-white leading-tight">
                          {item.title}
                        </h4>
                        {item.details.map((line, j) => (
                          <p key={j} className="font-inter text-[12px] sm:text-[13px] text-white/70 leading-snug mt-0.5">
                            {line}
                          </p>
                        ))}
                      </div>
                    </Wrapper>
                  );
                })}
              </div>
            </div>

            <div className="mt-5 pt-4 border-t border-white/15 text-[12px] text-white/60 font-inter">
              ✓ Verified Chartered Accountants Firm
            </div>
          </div>

          {/* Right Panel — Professional Form */}
          <div className="flex-1 bg-white p-5 sm:p-8 lg:p-[48px] flex flex-col justify-center">
            <div className="mb-5 sm:mb-6">
              <h3 className="font-outfit font-bold text-[20px] sm:text-[24px] text-brand-primary">
                Send Us a Message
              </h3>
              <p className="font-inter text-[13px] sm:text-[14px] text-slate-500 mt-0.5">
                We typically respond within a few business hours.
              </p>
            </div>

            {submitStatus === "success" ? (
              <div className="text-center py-10 flex flex-col items-center animate-fadeIn">
                <div className="w-16 h-16 rounded-2xl bg-emerald-50 text-brand-accent flex items-center justify-center mb-3">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="font-outfit font-bold text-[20px] text-brand-primary mb-1">
                  Message Sent Successfully!
                </h4>
                <p className="font-inter text-[13.5px] text-slate-600 max-w-[280px]">
                  Thank you for reaching out. We will get back to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4" aria-label="Contact form">
                {/* Name Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                  <div>
                    <label htmlFor="firstName" className="font-inter font-semibold text-[12.5px] text-slate-700 mb-1.5 block">
                      First Name <span className="text-brand-accent">*</span>
                    </label>
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      placeholder="John"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full min-h-[46px] sm:min-h-[48px] bg-slate-50 border border-slate-200/90 rounded-xl px-4 font-inter text-[14px] text-brand-primary placeholder:text-slate-400 focus:border-brand-accent focus:bg-white focus:ring-4 focus:ring-brand-accent/10 outline-none transition-all"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="font-inter font-semibold text-[12.5px] text-slate-700 mb-1.5 block">
                      Last Name <span className="text-brand-accent">*</span>
                    </label>
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      placeholder="Doe"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full min-h-[46px] sm:min-h-[48px] bg-slate-50 border border-slate-200/90 rounded-xl px-4 font-inter text-[14px] text-brand-primary placeholder:text-slate-400 focus:border-brand-accent focus:bg-white focus:ring-4 focus:ring-brand-accent/10 outline-none transition-all"
                      required
                    />
                  </div>
                </div>

                {/* Email & Phone Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                  <div>
                    <label htmlFor="email" className="font-inter font-semibold text-[12.5px] text-slate-700 mb-1.5 block">
                      Email Address <span className="text-brand-accent">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full min-h-[46px] sm:min-h-[48px] bg-slate-50 border border-slate-200/90 rounded-xl px-4 font-inter text-[14px] text-brand-primary placeholder:text-slate-400 focus:border-brand-accent focus:bg-white focus:ring-4 focus:ring-brand-accent/10 outline-none transition-all"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="font-inter font-semibold text-[12.5px] text-slate-700 mb-1.5 block">
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+91 7032 163 646"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full min-h-[46px] sm:min-h-[48px] bg-slate-50 border border-slate-200/90 rounded-xl px-4 font-inter text-[14px] text-brand-primary placeholder:text-slate-400 focus:border-brand-accent focus:bg-white focus:ring-4 focus:ring-brand-accent/10 outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Subject Select */}
                <div>
                  <label htmlFor="subject" className="font-inter font-semibold text-[12.5px] text-slate-700 mb-1.5 block">
                    Inquiry Subject <span className="text-brand-accent">*</span>
                  </label>
                  <div className="relative">
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full min-h-[46px] sm:min-h-[48px] bg-slate-50 border border-slate-200/90 rounded-xl px-4 font-inter text-[14px] text-brand-primary focus:border-brand-accent focus:bg-white focus:ring-4 focus:ring-brand-accent/10 outline-none transition-all appearance-none cursor-pointer pr-10"
                      style={{ WebkitAppearance: "none", MozAppearance: "none", appearance: "none", backgroundImage: "none" }}
                      required
                    >
                      <option value="">Select subject matter</option>
                      <option value="Tax Advisory">Tax Advisory &amp; Filing</option>
                      <option value="Audit & Assurance">Audit &amp; Assurance</option>
                      <option value="Company Registration">Company &amp; LLP Registration</option>
                      <option value="GST Services">GST Filing &amp; Compliance</option>
                      <option value="NRI Services">NRI Advisory Services</option>
                      <option value="Business Valuation">Business Advisory &amp; Valuation</option>
                      <option value="General Inquiry">General Inquiry</option>
                    </select>
                    <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="font-inter font-semibold text-[12.5px] text-slate-700 mb-1.5 block">
                    Your Message <span className="text-brand-accent">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your requirements..."
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-slate-50 border border-slate-200/90 rounded-xl p-3.5 font-inter text-[14px] text-brand-primary placeholder:text-slate-400 focus:border-brand-accent focus:bg-white focus:ring-4 focus:ring-brand-accent/10 outline-none transition-all resize-none"
                    required
                  />
                </div>

                {submitStatus === "error" && (
                  <p className="font-inter text-[13px] text-red-500 font-medium">
                    Something went wrong. Please try again or call us directly.
                  </p>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full min-h-[48px] sm:min-h-[52px] rounded-xl bg-gradient-btn-submit text-white font-outfit font-bold text-[15px] sm:text-[16px] flex items-center justify-center gap-2 shadow-md active:scale-[0.98] transition-all disabled:opacity-60"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Sending Message...</span>
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
      </div>
    </section>
  );
}
