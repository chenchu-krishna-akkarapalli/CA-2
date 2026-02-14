import Image from "next/image";
import Link from "next/link";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/connect" },
  { label: "Blog", href: "#" },
  { label: "Reports", href: "#" },
];

const contactItems = [
  {
    icon: "/Assets/Icon-2.svg", 
    text: "HO: No. 10/31, G1, Ten Downing, Rajalakshmi Nagar 3rd Main Road, Velachery, Chennai – 600 042",
  },
  {
    icon: "/Assets/Icon-2.svg",
    text: "BO: No. 47, Ground floor, Anna Nagar 1st street, Velachery, Chennai – 600 042",
  },
  {
    icon: "/Assets/Icon-5.svg",
    text: "+91 7032 163 646",
  },
  {
    icon: "/Assets/Icon.svg",
    text: "malli@cmkca.com",
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="w-full bg-brand-footer-dark"
      role="contentinfo"
    >
      {/* Main Footer Content */}
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-[104px] pt-10 sm:pt-12 pb-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_1fr] gap-8 sm:gap-10 lg:gap-[80px]">
        {/* Column 1: Logo & Description */}
        <div>
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-[10px] bg-gradient-footer-logo flex items-center justify-center flex-shrink-0">
              <span className="font-outfit font-bold text-[20px] sm:text-[22px] text-white leading-none">
                C
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-outfit font-bold text-[15px] sm:text-[16px] leading-[20px] tracking-[-0.45px] text-white">
                CHINNI MALLIKARJUNA & CO.
              </span>
              <span className="font-arial text-[10px] leading-[12px] tracking-[0.6px] text-white/60">
                CHARTERED ACCOUNTANTS
              </span>
            </div>
          </div>

          {/* Description */}
          <p className="mt-4 sm:mt-5 font-inter font-light text-[13px] sm:text-[14px] leading-[22px] text-white/60 max-w-[340px]">
            We are a team of experienced Chartered Accountants providing
            expert financial services including auditing, taxation, and
            advisory solutions for businesses and individuals.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h4 className="font-outfit font-semibold text-[16px] sm:text-[18px] leading-[24px] text-white mb-4 sm:mb-5">
            Quick Links
          </h4>
          <nav aria-label="Footer navigation">
            <ul className="flex flex-col gap-2.5 sm:gap-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="font-inter font-light text-[13px] sm:text-[14px] leading-[20px] text-white/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Column 3: Contact Us */}
        <div>
          <h4 className="font-outfit font-semibold text-[16px] sm:text-[18px] leading-[24px] text-white mb-4 sm:mb-5">
            Contact Us
          </h4>
          <ul className="flex flex-col gap-3.5 sm:gap-4">
            {contactItems.map((item, i) => (
              <li key={i} className="flex items-start gap-2.5 sm:gap-3">
                <Image
                  src={item.icon}
                  alt=""
                  width={20}
                  height={20}
                  className="mt-0.5 flex-shrink-0 opacity-60"
                  aria-hidden="true"
                />
                <span className="font-inter font-light text-[13px] sm:text-[14px] leading-[20px] text-white/60">
                  {item.text}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-[1440px] mx-auto border-t border-white/10 mx-6 sm:mx-8 lg:mx-auto px-6 sm:px-8 lg:px-[104px] py-4 sm:py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="font-inter font-light text-[12px] sm:text-[13px] leading-[18px] text-white/40 text-center sm:text-left">
          &copy; {currentYear} CHINNI MALLIKARJUNA AND COMPANY. All rights reserved.
        </p>
        <div className="flex items-center gap-4 sm:gap-6">
          <Link
            href="#"
            className="font-inter font-light text-[12px] sm:text-[13px] leading-[18px] text-white/40 hover:text-white/70 transition-colors"
          >
            Privacy Policy
          </Link>
          <Link
            href="#"
            className="font-inter font-light text-[12px] sm:text-[13px] leading-[18px] text-white/40 hover:text-white/70 transition-colors"
          >
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}
