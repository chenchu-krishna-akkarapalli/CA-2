import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail, ArrowUpRight, Shield, Award } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact Us", href: "/connect" },
  { label: "Insights / Blog", href: "/blog" },
  { label: "Tax Calendar", href: "/services" },
];

const contactItems = [
  {
    icon: MapPin,
    title: "Head Office (HO)",
    text: "No. 10/31, G1, Ten Downing, Rajalakshmi Nagar 3rd Main Rd, Velachery, Chennai – 600 042",
    href: "https://www.google.com/maps/search/?api=1&query=No.+10%2F31,+G1,+Ten+Downing,+Rajalakshmi+Nagar+3rd+Main+Road,+Velachery,+Chennai+%E2%80%93+600+042",
  },
  {
    icon: MapPin,
    title: "Branch Office (BO)",
    text: "No. 47, Ground Floor, Anna Nagar 1st Street, Velachery, Chennai – 600 042",
    href: "https://www.google.com/maps/search/?api=1&query=No.+47,+Ground+floor,+Anna+Nagar+1st+street,+Velachery,+Chennai+%E2%80%93+600+042",
  },
  {
    icon: Phone,
    title: "Direct Phone",
    text: "+91 7032 163 646",
    href: "tel:+917032163646",
  },
  {
    icon: Mail,
    title: "Official Email",
    text: "malli@cmkca.com",
    href: "mailto:malli@cmkca.com",
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#111827] text-white border-t border-slate-800/80" role="contentinfo">
      {/* ── MAIN FOOTER CONTENT ── */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-[104px] pt-8 sm:pt-14 pb-8">
        {/* ── MOBILE VIEW (< 768px) ── */}
        <div className="flex flex-col gap-6 md:hidden">
          {/* Brand Card Bento */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
            <Link href="/" className="inline-block mb-3" aria-label="CMK CA Firm Homepage">
              <Image
                src="/Assets/logo-malli.svg"
                alt="Chinni Mallikarjuna & Co. - Chartered Accountants"
                width={200}
                height={44}
                className="h-9 w-auto object-contain brightness-0 invert"
              />
            </Link>
            <p className="font-inter text-[12.5px] leading-relaxed text-slate-300">
              Experienced Chartered Accountants firm delivering high-precision auditing, corporate taxation, and strategic financial advisory across India.
            </p>
            <div className="mt-3 pt-3 border-t border-white/10 flex items-center gap-3 text-[11px] font-outfit text-sky-400 font-semibold">
              <span className="flex items-center gap-1">
                <Shield className="w-3.5 h-3.5 text-emerald-400" /> Peer Reviewed
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Award className="w-3.5 h-3.5 text-emerald-400" /> 8+ Yrs Excellence
              </span>
            </div>
          </div>

          {/* Quick Navigation Bento Grid */}
          <div>
            <h3 className="font-outfit font-bold text-[14px] uppercase tracking-wider text-slate-300 mb-2.5 px-1">
              Quick Navigation
            </h3>
            <div className="grid grid-cols-2 gap-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="min-h-[42px] px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between text-[13px] font-inter font-medium text-slate-200 active:scale-[0.98] active:bg-white/10 transition-all group"
                  aria-label={link.label}
                >
                  <span className="truncate">{link.label}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-sky-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0" />
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Information Bento Cards */}
          <div>
            <h3 className="font-outfit font-bold text-[14px] uppercase tracking-wider text-slate-300 mb-2.5 px-1">
              Office &amp; Inquiries
            </h3>
            <div className="flex flex-col gap-2">
              {contactItems.map((item, i) => {
                const Icon = item.icon;
                const Wrapper = item.href ? "a" : "div";
                const wrapperProps = item.href
                  ? {
                      href: item.href,
                      target: item.href.startsWith("http") ? "_blank" : undefined,
                      rel: item.href.startsWith("http") ? "noopener noreferrer" : undefined,
                      "aria-label": `${item.title}: ${item.text}`,
                    }
                  : {};

                return (
                  <Wrapper
                    key={i}
                    {...(wrapperProps as any)}
                    className="bg-white/5 border border-white/10 rounded-xl p-3 flex items-start gap-3 active:scale-[0.99] transition-all"
                  >
                    <div className="w-7 h-7 rounded-lg bg-sky-500/20 text-sky-400 flex items-center justify-center shrink-0 mt-0.5">
                      <Icon className="w-3.5 h-3.5 text-emerald-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-outfit font-bold text-[12px] text-sky-400 leading-tight mb-0.5">
                        {item.title}
                      </div>
                      <p className="font-inter text-[12px] text-slate-300 leading-snug break-words">
                        {item.text}
                      </p>
                    </div>
                  </Wrapper>
                );
              })}
            </div>
          </div>
        </div>

        {/* ── DESKTOP VIEW (md: and above) ── */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_1fr] gap-8 lg:gap-[80px]">
          {/* Column 1: Logo & Description */}
          <div>
            <Link href="/" className="inline-block" aria-label="CMK CA Firm Homepage">
              <Image
                src="/Assets/logo-malli.svg"
                alt="Chinni Mallikarjuna & Co. - Chartered Accountants"
                width={200}
                height={44}
                className="h-10 w-auto object-contain brightness-0 invert"
              />
            </Link>

            <p className="mt-4 font-inter font-light text-[14px] leading-[22px] text-slate-300 max-w-[340px]">
              We are a team of experienced Chartered Accountants providing
              expert financial services including auditing, taxation, and
              advisory solutions for businesses and individuals.
            </p>

            <div className="mt-4 flex items-center gap-4 text-[13px] font-outfit text-sky-400 font-semibold">
              <span className="flex items-center gap-1.5">
                <Shield className="w-4 h-4 text-emerald-400" /> Peer Reviewed Firm
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Award className="w-4 h-4 text-emerald-400" /> 8+ Yrs Experience
              </span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-outfit font-semibold text-[18px] leading-[24px] text-white mb-5">
              Quick Links
            </h3>
            <nav aria-label="Footer navigation">
              <ul className="flex flex-col gap-3">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="font-inter font-light text-[14px] leading-[20px] text-slate-300 hover:text-sky-400 transition-colors inline-flex items-center gap-1 group"
                    >
                      <span>{link.label}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-sky-400" />
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Column 3: Contact Us */}
          <div>
            <h3 className="font-outfit font-semibold text-[18px] leading-[24px] text-white mb-5">
              Contact Us
            </h3>
            <ul className="flex flex-col gap-3.5">
              {contactItems.map((item, i) => {
                const Icon = item.icon;
                return (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-md bg-sky-500/20 text-sky-400 flex items-center justify-center shrink-0 mt-0.5">
                      <Icon className="w-3.5 h-3.5 text-emerald-400" />
                    </div>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="font-inter font-light text-[13.5px] leading-[20px] text-slate-300 hover:text-white transition-colors"
                      >
                        {item.text}
                      </a>
                    ) : (
                      <span className="font-inter font-light text-[13.5px] leading-[20px] text-slate-300">
                        {item.text}
                      </span>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>

      {/* ── BOTTOM COPYRIGHT BAR ── */}
      <div className="border-t border-white/10 bg-black/20">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-[104px] py-4 flex flex-col sm:flex-row items-center justify-between gap-2.5 pb-[calc(1rem+env(safe-area-inset-bottom))]">
          <p suppressHydrationWarning className="font-inter font-light text-[11.5px] sm:text-[13px] text-slate-400 text-center sm:text-left">
            &copy; {currentYear} CHINNI MALLIKARJUNA AND COMPANY. All rights reserved.
          </p>
          <div className="flex items-center gap-4 sm:gap-6 text-[11.5px] sm:text-[13px] text-slate-400">
            <Link href="/connect" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link href="/connect" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
