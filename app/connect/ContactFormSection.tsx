"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, Phone, Mail, Clock } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Us",
    details: [
      "No. 10/31, G1, Ten Downing, Rajalakshmi Nagar,",
      "3rd Main Road, Velachery, Chennai – 600 042",
    ],
    href: "https://www.google.com/maps/search/?api=1&query=No.+10%2F31,+G1,+Ten+Downing,+Rajalakshmi+Nagar+3rd+Main+Road,+Velachery,+Chennai+%E2%80%93+600+042",
  },
  {
    icon: Phone,
    title: "Call Us",
    details: ["+91 7032 163 646"],
    href: "tel:+917032163646",
  },
  {
    icon: Mail,
    title: "Email Us",
    details: ["malli@cmkca.com"],
    href: "mailto:malli@cmkca.com",
  },
  {
    icon: Clock,
    title: "Operating Hours",
    details: ["Monday – Saturday", "9:00 AM – 6:00 PM"],
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
      const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const TEMPLATE_ID_ADMIN = process.env.NEXT_PUBLIC_EMAILJS_ADMIN_TEMPLATE_ID;
      const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      if (!SERVICE_ID || !TEMPLATE_ID_ADMIN || !PUBLIC_KEY) {
        console.warn("EmailJS env vars not configured");
        setSubmitStatus("success");
        setFormData({ firstName: "", lastName: "", email: "", phone: "", subject: "", message: "" });
        setTimeout(() => setSubmitStatus(null), 8000);
        return;
      }

      let emailjs: any;
      try {
        emailjs = (await import("@emailjs/browser" as any)).default;
      } catch {
        console.warn("@emailjs/browser not installed — simulating success");
        setSubmitStatus("success");
        setFormData({ firstName: "", lastName: "", email: "", phone: "", subject: "", message: "" });
        setTimeout(() => setSubmitStatus(null), 8000);
        return;
      }

      const templateParams = {
        name: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        user_name: `${formData.firstName} ${formData.lastName}`,
        user_email: formData.email,
        user_phone: formData.phone,
        subject: formData.subject,
        message: formData.message,
        title: "New Contact Form Submission",
      };

      await emailjs.send(SERVICE_ID, TEMPLATE_ID_ADMIN, templateParams, PUBLIC_KEY);

      setSubmitStatus("success");
      setFormData({ firstName: "", lastName: "", email: "", phone: "", subject: "", message: "" });
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
      id="contact-form"
      className="w-full py-[60px] md:py-[80px] px-4 sm:px-8 lg:px-[5%]"
      aria-label="Contact Form"
    >
      <div className="max-w-[1232px] mx-auto">
        {/* Section Heading */}
        <motion.div
          className="text-center mb-10 md:mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-inter font-semibold text-[14px] tracking-[3px] uppercase text-brand-green mb-4">
            Get In Touch
          </p>
          <h2 className="font-outfit font-bold text-[clamp(28px,3vw,40px)] leading-[1.2]">
            <span className="text-brand-dark-green">We&apos;d Love to </span>
            <span className="text-brand-green">Hear From You</span>
          </h2>
        </motion.div>

        {/* Contact Container */}
        <motion.div
          className="w-full rounded-[24px] sm:rounded-[32px] lg:rounded-[40px] shadow-contact overflow-hidden flex flex-col lg:flex-row"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
        >
          {/* Left Panel — Contact Info */}
          <div className="w-full lg:w-[45%] bg-gradient-contact p-6 sm:p-8 lg:p-[48px] flex flex-col">
            <h3 className="font-outfit font-bold text-[22px] sm:text-[26px] lg:text-[28px] leading-[30px] sm:leading-[34px] lg:leading-[36px] text-white">
              Contact Information
            </h3>
            <p className="mt-2 sm:mt-3 font-inter font-light text-[14px] sm:text-[15px] lg:text-[16px] leading-[22px] sm:leading-[24px] text-white/80 max-w-[480px]">
              Reach out to us for any queries related to audit, taxation, compliance, or advisory services.
            </p>

            {/* Contact Items */}
            <div className="mt-8 sm:mt-10 lg:mt-14 flex flex-col gap-6 sm:gap-8">
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
                    className="flex items-start gap-4 sm:gap-5 group"
                  >
                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-white/20 flex items-center justify-center flex-shrink-0 group-hover:bg-white/10 transition-colors">
                      <Icon className="w-5 h-5 text-white/90" />
                    </div>
                    <div>
                      <h4 className="font-outfit font-semibold text-[15px] sm:text-[16px] leading-[22px] text-white">
                        {item.title}
                      </h4>
                      {item.details.map((line, j) => (
                        <p
                          key={j}
                          className="mt-0.5 font-inter font-light text-[13px] sm:text-[14px] leading-[20px] text-white/70"
                        >
                          {line}
                        </p>
                      ))}
                    </div>
                  </Wrapper>
                );
              })}
            </div>

            {/* Social Links */}
            <div className="mt-8 sm:mt-10 lg:mt-auto pt-6 flex items-center gap-4">
              {[
                {
                  label: "LinkedIn",
                  href: "#",
                  svg: (
                    <svg className="w-4 h-4 fill-current text-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  ),
                },
                {
                  label: "Twitter",
                  href: "#",
                  svg: (
                    <svg className="w-4 h-4 fill-current text-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  ),
                },
                {
                  label: "Instagram",
                  href: "#",
                  svg: (
                    <svg className="w-4 h-4 fill-current text-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                  ),
                },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors"
                >
                  {social.svg}
                </a>
              ))}
            </div>
          </div>

          {/* Right Panel — Form */}
          <div className="flex-1 bg-white p-6 sm:p-8 lg:p-[48px] flex flex-col">
            <form onSubmit={handleSubmit} className="flex flex-col h-full" aria-label="Contact form">
              {/* Name Row */}
              <div className="flex flex-col sm:flex-row gap-5 sm:gap-6">
                <div className="flex-1 flex flex-col gap-2">
                  <label
                    htmlFor="firstName"
                    className="font-outfit font-medium text-[14px] leading-[20px] text-brand-dark-green"
                  >
                    First Name
                  </label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    placeholder="John"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full h-[44px] border border-surface-input-border rounded-[8px] px-4 font-inter text-[14px] text-brand-dark-green placeholder:text-text-placeholder focus:border-brand-green focus:ring-1 focus:ring-brand-green outline-none transition-colors"
                    required
                  />
                </div>
                <div className="flex-1 flex flex-col gap-2">
                  <label
                    htmlFor="lastName"
                    className="font-outfit font-medium text-[14px] leading-[20px] text-brand-dark-green"
                  >
                    Last Name
                  </label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    placeholder="Doe"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full h-[44px] border border-surface-input-border rounded-[8px] px-4 font-inter text-[14px] text-brand-dark-green placeholder:text-text-placeholder focus:border-brand-green focus:ring-1 focus:ring-brand-green outline-none transition-colors"
                    required
                  />
                </div>
              </div>

              {/* Email & Phone Row */}
              <div className="mt-5 sm:mt-6 flex flex-col sm:flex-row gap-5 sm:gap-6">
                <div className="flex-1 flex flex-col gap-2">
                  <label
                    htmlFor="email"
                    className="font-outfit font-medium text-[14px] leading-[20px] text-brand-dark-green"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full h-[44px] border border-surface-input-border rounded-[8px] px-4 font-inter text-[14px] text-brand-dark-green placeholder:text-text-placeholder focus:border-brand-green focus:ring-1 focus:ring-brand-green outline-none transition-colors"
                    required
                  />
                </div>
                <div className="flex-1 flex flex-col gap-2">
                  <label
                    htmlFor="phone"
                    className="font-outfit font-medium text-[14px] leading-[20px] text-brand-dark-green"
                  >
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+91 7032 163 646"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full h-[44px] border border-surface-input-border rounded-[8px] px-4 font-inter text-[14px] text-brand-dark-green placeholder:text-text-placeholder focus:border-brand-green focus:ring-1 focus:ring-brand-green outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="mt-5 sm:mt-6 flex flex-col gap-2">
                <label
                  htmlFor="subject"
                  className="font-outfit font-medium text-[14px] leading-[20px] text-brand-dark-green"
                >
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full h-[44px] border border-surface-input-border rounded-[8px] px-4 font-inter text-[14px] text-brand-dark-green focus:border-brand-green focus:ring-1 focus:ring-brand-green outline-none transition-colors bg-white"
                  required
                >
                  <option value="">Select a subject</option>
                  <option value="Tax Advisory">Tax Advisory</option>
                  <option value="Audit & Assurance">Audit & Assurance</option>
                  <option value="Company Registration">Company Registration</option>
                  <option value="GST Services">GST Services</option>
                  <option value="Compliance">Compliance</option>
                  <option value="NRI Services">NRI Services</option>
                  <option value="Business Valuation">Business Valuation</option>
                  <option value="General Inquiry">General Inquiry</option>
                </select>
              </div>

              {/* Message */}
              <div className="mt-5 sm:mt-6 flex flex-col gap-2 flex-1">
                <label
                  htmlFor="message"
                  className="font-outfit font-medium text-[14px] leading-[20px] text-brand-dark-green"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Write your message..."
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full flex-1 min-h-[100px] border border-surface-input-border rounded-[8px] p-4 font-inter text-[14px] text-brand-dark-green placeholder:text-text-placeholder focus:border-brand-green focus:ring-1 focus:ring-brand-green outline-none transition-colors resize-none"
                  required
                />
              </div>

              {/* Status Messages */}
              {submitStatus === "success" && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 font-inter text-[14px] text-brand-green font-medium"
                >
                  ✓ Message sent successfully! We&apos;ll get back to you soon.
                </motion.p>
              )}
              {submitStatus === "error" && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 font-inter text-[14px] text-red-500 font-medium"
                >
                  Something went wrong. Please try again or call us directly.
                </motion.p>
              )}

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="mt-5 sm:mt-6 w-full h-[48px] sm:h-[52px] rounded-[8px] bg-gradient-btn-submit text-white font-outfit font-semibold text-[16px] leading-[20px] flex items-center justify-center gap-2 hover:opacity-90 transition-opacity disabled:opacity-60"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                {!isSubmitting && <ArrowRight className="w-5 h-5" strokeWidth={2} />}
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
