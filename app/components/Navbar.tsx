"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronDown,
  Menu,
  X,
  Phone,
  Building2,
  Users,
  User,
  Heart,
  PiggyBank,
  Wheat,
  Handshake,
  UserCheck,
  Globe,
  Receipt,
  FileText,
  Wallet,
  Factory,
  Utensils,
  Ship,
  ShieldCheck,
  Copyright,
  Lightbulb,
  CreditCard,
  Landmark,
  Home,
  FileCheck,
  Calculator,
  Percent,
  Search,
  Scale,
  Briefcase,
  CalendarCheck,
  LineChart,
  TrendingUp,
  Banknote,
  type LucideIcon,
} from "lucide-react";

/* ─────────────────────── Types ─────────────────────── */

interface DropdownItem {
  label: string;
  desc: string;
  icon: LucideIcon;
  href: string;
}

interface Column {
  heading: string;
  items: DropdownItem[];
}

interface LinkMenuItem {
  title: string;
  href: string;
  type?: never;
  columns?: never;
  items?: never;
}

interface MegaMenuItem {
  title: string;
  href?: never;
  type: "mega";
  columns: Column[];
  items?: never;
}

interface SimpleMenuItem {
  title: string;
  href?: never;
  type: "simple";
  items: DropdownItem[];
  columns?: never;
}

type MenuItem = LinkMenuItem | MegaMenuItem | SimpleMenuItem;

/* ─────────────────────── Menu Config ─────────────────────── */

const MENU_ITEMS: MenuItem[] = [
  { title: "Home", href: "/" },
  { title: "About Us", href: "/about" },
  {
    title: "Start Business",
    type: "mega",
    columns: [
      {
        heading: "Main Structures",
        items: [
          { label: "Private Limited", desc: "Most popular for startups", icon: Building2, href: "/services/private-limited-company" },
          { label: "LLP Registration", desc: "Flexible legal entity", icon: Users, href: "/services/llp-registration" },
          { label: "OPC Registration", desc: "Single owner structure", icon: User, href: "/services/one-person-company" },
        ],
      },
      {
        heading: "Special Entities",
        items: [
          { label: "Section 8", desc: "For non-profit organizations", icon: Heart, href: "/services/section-8-company" },
          { label: "Nidhi Company", desc: "For mutual benefit societies", icon: PiggyBank, href: "/services/nidhi-company" },
          { label: "Producer Company", desc: "For agriculture producers", icon: Wheat, href: "/services/producer-company" },
        ],
      },
      {
        heading: "Other Forms",
        items: [
          { label: "Partnership Firm", desc: "Traditional partnership", icon: Handshake, href: "/services/partnership-firm" },
          { label: "Sole Proprietorship", desc: "Simplest business form", icon: UserCheck, href: "/services/sole-proprietorship" },
          { label: "Indian Subsidiary", desc: "For foreign companies", icon: Globe, href: "/services/indian-subsidiary" },
        ],
      },
    ],
  },
  {
    title: "Registrations",
    type: "mega",
    columns: [
      {
        heading: "Tax Registrations",
        items: [
          { label: "GST Registration", desc: "Goods & Services Tax", icon: Receipt, href: "/services/gst-registration" },
          { label: "TAN Registration", desc: "Tax Deduction Account Number", icon: FileText, href: "/services/tan-registration" },
          { label: "Professional Tax", desc: "State-level tax registration", icon: Wallet, href: "/services/professional-tax" },
        ],
      },
      {
        heading: "Government Licenses",
        items: [
          { label: "MSME Udyam", desc: "Small business benefits", icon: Factory, href: "/services/msme-udyam" },
          { label: "FSSAI License", desc: "Food safety license", icon: Utensils, href: "/services/fssai-license" },
          { label: "IEC Code", desc: "For global trade", icon: Ship, href: "/services/import-export-code" },
        ],
      },
      {
        heading: "Intellectual Property",
        items: [
          { label: "Trademark Reg", desc: "Protect your brand", icon: ShieldCheck, href: "/services/trademark" },
          { label: "Copyright Reg", desc: "Protect creative works", icon: Copyright, href: "/services/copyright" },
          { label: "Patent Reg", desc: "Protect inventions", icon: Lightbulb, href: "/services/patent" },
        ],
      },
    ],
  },
  {
    title: "NRI Services",
    type: "simple",
    items: [
      { label: "NRI PAN", desc: "Tax ID for non-residents", icon: CreditCard, href: "/services/pan-for-nri" },
      { label: "Company Setup", desc: "Start business in India", icon: Building2, href: "/services/nri-company-incorporation" },
      { label: "FEMA Compliance", desc: "Foreign exchange laws", icon: Landmark, href: "/services/fema-compliance" },
      { label: "Property Mgmt", desc: "Legal assistance for property", icon: Home, href: "/services/property-management" },
    ],
  },
  {
    title: "Compliance",
    type: "mega",
    columns: [
      {
        heading: "Audits",
        items: [
          { label: "Tax Audits", desc: "Section 44AB compliance", icon: FileCheck, href: "/services/tax-audits" },
          { label: "Statutory Audits", desc: "Company compliance audit", icon: Building2, href: "/services/statutory-audits" },
          { label: "Internal Audits", desc: "Process & risk audit", icon: ShieldCheck, href: "/services/internal-audits" },
          { label: "Cost Audit", desc: "CRA compliance & records", icon: Calculator, href: "/services/cost-audit" },
        ],
      },
      {
        heading: "Income Tax",
        items: [
          { label: "ITR Filing", desc: "Annual ITR filing", icon: FileText, href: "/services/income-tax-return" },
          { label: "Transfer Pricing", desc: "Cross-border transactions", icon: Globe, href: "/services/transfer-pricing" },
          { label: "TDS Returns", desc: "Quarterly TDS filing", icon: Percent, href: "/services/tds-returns" },
          { label: "Scrutiny Cases", desc: "Tax dept inquiries", icon: Search, href: "/services/scrutiny-assessments" },
          { label: "Tax Appeals", desc: "Legal tax disputes", icon: Scale, href: "/services/income-tax-appeals" },
        ],
      },
      {
        heading: "GST",
        items: [
          { label: "Virtual CFO", desc: "Strategic financial leadership", icon: Briefcase, href: "/services/virtual-cfo" },
          { label: "GST Returns", desc: "Regular GST filing", icon: Receipt, href: "/services/gst-returns" },
          { label: "GST Audits", desc: "Annual GST audit", icon: FileCheck, href: "/services/gst-audits" },
          { label: "GST Refunds", desc: "Claim excess tax", icon: Wallet, href: "/services/gst-refunds" },
          { label: "GST Advisory", desc: "Expert tax advice", icon: UserCheck, href: "/services/gst-consultation" },
        ],
      },
      {
        heading: "FDI",
        items: [
          { label: "FDI Filings", desc: "RBI reporting & compliance", icon: Globe, href: "/services/fdi-filings" },
          { label: "FDI Advisory", desc: "Foreign investment rules", icon: Lightbulb, href: "/services/fdi-advisory" },
          { label: "Share Transfer", desc: "Stock transfer compliance", icon: Handshake, href: "/services/share-transfer-fdi" },
        ],
      },
      {
        heading: "Company Law",
        items: [
          { label: "Secretarial Work", desc: "Corporate governance", icon: FileText, href: "/services/secretarial-services" },
          { label: "Auditing & Assurance", desc: "Comprehensive compliance", icon: CalendarCheck, href: "/services/auditing-assurance" },
          { label: "Mergers (M&A)", desc: "Corporate restructuring", icon: Handshake, href: "/services/mergers-acquisitions" },
          { label: "ESOP Plans", desc: "Employee ownership plans", icon: Users, href: "/services/esop" },
        ],
      },
    ],
  },
  {
    title: "Reports",
    type: "mega",
    columns: [
      {
        heading: "Reports",
        items: [
          { label: "Analytics & BI", desc: "Business intelligence", icon: LineChart, href: "/services/analytics-bi" },
          { label: "Project Reports", desc: "Detailed feasibility report", icon: FileText, href: "/services/project-report" },
          { label: "Business Plan", desc: "Strategic roadmap", icon: Lightbulb, href: "/services/business-plan" },
          { label: "Biz Valuation", desc: "Fair market value", icon: TrendingUp, href: "/services/business-valuation" },
          { label: "Due Diligence", desc: "Comprehensive audit", icon: Search, href: "/services/due-diligence" },
        ],
      },
      {
        heading: "Agreements",
        items: [
          { label: "Gift Deed", desc: "Legal property transfer", icon: FileCheck, href: "/services/gift-deed" },
          { label: "Shareholder Agmt", desc: "Rights & obligations", icon: Handshake, href: "/services/shareholder-agreement" },
          { label: "JV Agreement", desc: "Partnership contracts", icon: Users, href: "/services/joint-venture-agreement" },
        ],
      },
      {
        heading: "Funding",
        items: [
          { label: "Inst. Loans", desc: "Corporate financing", icon: Building2, href: "/services/financial-institution-loans" },
          { label: "Bank Loans", desc: "Credit facilities", icon: Banknote, href: "/services/bank-loans" },
          { label: "Loan Syndication", desc: "Large credit arrangements", icon: Users, href: "/services/loan-syndication" },
        ],
      },
    ],
  },
  { title: "Contact Us", href: "/connect" },
];

/* ─────────────────────── Dropdown Item Component ─────────────────────── */

function DropdownLink({ item, onClick }: { item: DropdownItem; onClick?: () => void }) {
  const Icon = item.icon;
  return (
    <Link
      href={item.href}
      onClick={onClick}
      className="group flex items-center gap-2.5 p-2 rounded-lg hover:bg-slate-50 transition-all duration-300"
    >
      <div className="shrink-0 w-8 h-8 rounded-md bg-white border border-slate-100 shadow-sm flex items-center justify-center group-hover:border-brand-accent/30 group-hover:shadow-sm transition-all duration-300">
        <Icon className="w-3.5 h-3.5 text-brand-accent group-hover:scale-110 transition-transform duration-300" />
      </div>
      <p className="font-inter font-medium text-[13px] text-slate-700 group-hover:text-brand-primary leading-tight transition-colors duration-300">
        {item.label}
      </p>
    </Link>
  );
}

/* ─────────────────────── Desktop Mega Dropdown ─────────────────────── */

function DesktopDropdown({
  menuItem,
  isOpen,
  onClose,
}: {
  menuItem: MegaMenuItem | SimpleMenuItem;
  isOpen: boolean;
  onClose: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const parentRef = useRef<HTMLDivElement | null>(null);

  // Position dropdowns: clamp mega menus within viewport, simple ones centered on parent
  useEffect(() => {
    if (!isOpen || !ref.current) return;
    const el = ref.current;
    parentRef.current = el.parentElement as HTMLDivElement;
    const vw = window.innerWidth;

    if (menuItem.type === "mega") {
      // Reset any prior inline styles
      el.style.left = "";
      el.style.right = "";
      el.style.transform = "";

      const parentRect = parentRef.current?.getBoundingClientRect();
      const elWidth = el.offsetWidth;
      // Try to center under the parent button
      const parentCenter = (parentRect?.left ?? 0) + (parentRect?.width ?? 0) / 2;
      let idealLeft = parentCenter - elWidth / 2;

      // Clamp: don't overflow left
      if (idealLeft < 16) idealLeft = 16;
      // Clamp: don't overflow right
      if (idealLeft + elWidth > vw - 16) idealLeft = vw - 16 - elWidth;

      const parentLeft = parentRect?.left ?? 0;
      el.style.left = `${idealLeft - parentLeft}px`;
      el.style.transform = "none";
    } else {
      // Simple dropdown — clamp within viewport
      const rect = el.getBoundingClientRect();
      if (rect.left < 16) {
        el.style.left = "16px";
        el.style.transform = "none";
      } else if (rect.right > vw - 16) {
        el.style.left = "auto";
        el.style.right = `${-(vw - 16 - (parentRef.current?.getBoundingClientRect().right ?? vw))}px`;
        el.style.transform = "none";
      }
    }
  }, [isOpen, menuItem.type]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) onClose();
    };
    if (isOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, onClose]);

  // Determine width class for mega menus based on column count
  const getWidthClass = (colCount: number) => {
    if (colCount >= 5) return "w-[950px]";
    if (colCount === 4) return "w-[750px]";
    return "w-[600px]";
  };

  if (menuItem.type === "simple") {
    return (
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-[280px] z-50"
          >
            <div className="bg-white rounded-xl shadow-[0_10px_30px_-5px_rgba(0,0,0,0.1)] border border-slate-100 overflow-hidden">
              {/* Decorative top border */}
              <div className="h-1 bg-gradient-to-r from-brand-accent via-brand-primary to-brand-accent" />
              <div className="p-2 grid gap-0.5">
                {menuItem.items.map((item) => (
                  <DropdownLink key={item.href} item={item} onClick={onClose} />
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    );
  }

  // Mega menu
  const columns = menuItem.columns;
  const gridCols =
    columns.length >= 5
      ? "grid-cols-5"
      : columns.length === 4
        ? "grid-cols-4"
        : "grid-cols-3";

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 8 }}
          transition={{ duration: 0.2 }}
          className={`absolute top-full left-1/2 -translate-x-1/2 pt-2 ${getWidthClass(columns.length)} max-w-[90vw] z-50`}
        >
          <div className="bg-white rounded-xl shadow-[0_15px_50px_-10px_rgba(0,0,0,0.1)] border border-slate-100 overflow-hidden">
            {/* Decorative top border */}
            <div className="h-1 bg-gradient-to-r from-brand-accent via-brand-primary to-brand-accent" />

            <div className="p-5">
              <div className={`grid ${gridCols} gap-4`}>
                {columns.map((col, colIdx) => (
                  <div key={col.heading} className="space-y-2.5">
                    <h4 className="font-outfit font-bold text-[11px] text-brand-accent uppercase tracking-[0.05em] px-2 pb-2 border-b border-slate-100 truncate">
                      {col.heading}
                    </h4>
                    <div className="space-y-0.5">
                      {col.items.map((item) => (
                        <DropdownLink key={item.href} item={item} onClick={onClose} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Compact CTA */}
              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between px-1">
                <p className="font-inter text-[12px] text-slate-500">
                  Need help?
                  <Link href="/connect" onClick={onClose} className="text-brand-accent font-semibold ml-1 hover:text-brand-primary transition-colors inline-flex items-center gap-0.5 group">
                    Expert Talk
                    <span className="group-hover:translate-x-0.5 transition-transform">→</span>
                  </Link>
                </p>
                <div className="flex items-center gap-2 text-slate-600 bg-slate-50 px-3 py-1.5 rounded-full">
                  <Phone className="w-3.5 h-3.5 text-brand-accent" />
                  <span className="font-inter font-semibold text-[12px]">+91 7032 163 646</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ─────────────────────── Mobile Accordion Item ─────────────────────── */

function MobileAccordion({
  menuItem,
  onLinkClick,
}: {
  menuItem: MegaMenuItem | SimpleMenuItem;
  onLinkClick: () => void;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const allItems =
    menuItem.type === "simple"
      ? [{ heading: "", items: menuItem.items }]
      : menuItem.columns;

  return (
    <div className="border-b border-gray-100 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-4 px-4 text-left hover:bg-brand-accent/5 transition-colors duration-300"
        aria-expanded={isOpen}
      >
        <span className="font-inter font-medium text-[16px] text-brand-primary">
          {menuItem.title}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-brand-accent transition-transform duration-300 ${isOpen ? "rotate-180" : ""
            }`}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <div className="bg-gray-50/50 px-4 py-3">
              {allItems.map((group) => (
                <div key={group.heading || "main"} className="mb-4 last:mb-0">
                  {group.heading && (
                    <h4 className="font-outfit font-bold text-[12px] text-brand-primary uppercase tracking-wider mb-2 px-2">
                      {group.heading}
                    </h4>
                  )}
                  {group.items.map((item) => {
                    const Icon = item.icon;
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={onLinkClick}
                        className="flex items-center gap-3 py-2.5 px-2 rounded-lg hover:bg-white transition-colors duration-300"
                      >
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-accent/20 to-brand-primary/20 flex items-center justify-center">
                          <Icon className="w-4 h-4 text-brand-accent" />
                        </div>
                        <div>
                          <p className="font-inter font-medium text-[14px] text-brand-primary">
                            {item.label}
                          </p>
                          <p className="font-inter text-[11px] text-text-muted">
                            {item.desc}
                          </p>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ─────────────────────── Main Navbar ─────────────────────── */

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeDropdown = useCallback(() => setOpenDropdown(null), []);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY > lastScrollY && currentY > 200) {
        setIsVisible(false);
        setOpenDropdown(null);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentY);
      setIsScrolled(currentY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: 0 }}
        animate={{ y: isVisible ? 0 : -120 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={`fixed top-0 left-0 w-full z-50 transition-shadow duration-300 ${isScrolled
          ? "shadow-navbar bg-white/95 backdrop-blur-sm"
          : "shadow-navbar bg-white"
          }`}
        role="navigation"
        aria-label="Main navigation"
      >
        {/* ── Location Bar (all screen sizes) ── */}
        <div className="w-full bg-brand-primary border-b border-white/10 flex items-center h-[28px] md:h-[31px]">
          <div className="w-full max-w-[1440px] mx-auto flex items-center justify-between md:justify-end px-4 lg:px-10 xl:px-20 gap-4">
            <a
              href="https://www.google.com/maps/search/?api=1&query=No.+10%2F31,+G1,+Ten+Downing,+Rajalakshmi+Nagar+3rd+Main+Road,+Velachery,+Chennai+%E2%80%93+600+042"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:opacity-100 opacity-80 transition-opacity"
            >
              <Image
                src="/Assets/react-icons/BiMap.svg"
                alt="Location"
                width={14}
                height={14}
                className="md:w-4 md:h-4 brightness-0 invert"
              />
              <span className="font-arial text-[11px] md:text-[13px] text-white">
                Chennai
              </span>
            </a>
            <a
              href="mailto:malli@cmkca.com"
              className="flex items-center gap-1 hover:opacity-100 opacity-80 transition-opacity"
            >
              <Image
                src="/Assets/gmail-icon.svg"
                alt="Email"
                width={10}
                height={8}
                className="md:w-[11px] md:h-[9px] brightness-0 invert"
              />
              <span className="font-arial text-[11px] md:text-[13px] text-white">
                malli@cmkca.com
              </span>
            </a>
          </div>
        </div>

        {/* ── Main Navbar Row ── */}
        <div className="w-full max-w-[1440px] mx-auto h-[56px] flex items-center justify-between px-4 lg:px-6 xl:px-8">
          {/* Left: Logo + ICAI */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/Assets/logo-malli.svg"
                alt="Chinni Mallikarjuna & Co. - Chartered Accountants"
                width={220}
                height={48}
                className="h-7 sm:h-10 md:h-11 w-auto object-contain"
                priority
              />
            </Link>
          </div>

          {/* Center: Desktop Nav Items */}
          <div className="hidden xl:flex items-center gap-0.5">
            {MENU_ITEMS.map((item) => {
              if (item.type === "mega" || item.type === "simple") {
                const isOpen = openDropdown === item.title;
                return (
                  <div key={item.title} className="relative">
                    <button
                      onClick={() =>
                        setOpenDropdown(isOpen ? null : item.title)
                      }
                      className={`font-outfit font-normal text-[13.5px] leading-[20px] text-brand-primary px-3 py-2 flex items-center gap-1 rounded-md hover:bg-gray-50 transition-colors ${isOpen ? "bg-gray-50" : ""
                        }`}
                      aria-haspopup="true"
                      aria-expanded={isOpen}
                      suppressHydrationWarning
                    >
                      {item.title}
                      <ChevronDown
                        className={`w-3 h-3 text-brand-primary transition-transform duration-200 ${isOpen ? "rotate-180" : ""
                          }`}
                      />
                    </button>
                    <DesktopDropdown
                      menuItem={item}
                      isOpen={isOpen}
                      onClose={closeDropdown}
                    />
                  </div>
                );
              }

              // Plain link
              return (
                <Link
                  key={item.title}
                  href={item.href!}
                  className="font-outfit font-normal text-[13.5px] leading-[20px] text-brand-primary px-3 py-2 rounded-md hover:bg-gray-50 transition-colors"
                >
                  {item.title}
                </Link>
              );
            })}
          </div>

          {/* Right: Blog button (desktop) + Mobile hamburger */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <Link
              href="/blog"
              className="hidden xl:flex w-16 h-9 rounded-md bg-gradient-btn-blog items-center justify-center hover:opacity-90 transition-opacity"
            >
              <span className="font-outfit font-medium text-sm text-white">
                Blog
              </span>
            </Link>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="xl:hidden w-10 h-10 flex items-center justify-center rounded-md hover:bg-gray-50 transition-colors"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? (
                <X className="w-6 h-6 text-brand-primary" />
              ) : (
                <Menu className="w-6 h-6 text-brand-primary" />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* ── Mobile Drawer ── */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/30 z-40 xl:hidden"
              onClick={() => setMobileOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 w-full max-w-[380px] h-full bg-white z-50 xl:hidden flex flex-col shadow-2xl"
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100">
                <Link
                  href="/"
                  className="flex items-center"
                  onClick={() => setMobileOpen(false)}
                >
                  <Image
                    src="/Assets/logo-malli.svg"
                    alt="Chinni Mallikarjuna & Co. - Chartered Accountants"
                    width={200}
                    height={40}
                    className="h-7 w-auto object-contain"
                    priority
                  />
                </Link>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="w-9 h-9 flex items-center justify-center rounded-md hover:bg-gray-50"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5 text-brand-primary" />
                </button>
              </div>

              {/* Drawer Body */}
              <div className="flex-1 overflow-y-auto">
                {/* Menu Items */}
                {MENU_ITEMS.map((item) => {
                  if (item.type === "mega" || item.type === "simple") {
                    return (
                      <MobileAccordion
                        key={item.title}
                        menuItem={item}
                        onLinkClick={() => setMobileOpen(false)}
                      />
                    );
                  }
                  return (
                    <Link
                      key={item.title}
                      href={item.href!}
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center px-4 py-3 font-outfit font-medium text-base text-brand-primary border-b border-gray-100 hover:bg-gray-50 transition-colors"
                    >
                      {item.title}
                    </Link>
                  );
                })}
              </div>

              {/* Drawer Footer */}
              <div className="px-4 py-4 border-t border-gray-100">
                <Link
                  href="/blog"
                  onClick={() => setMobileOpen(false)}
                  className="w-full h-11 rounded-lg bg-gradient-btn-blog flex items-center justify-center hover:opacity-90 transition-opacity"
                >
                  <span className="font-outfit font-medium text-sm text-white">
                    Blog
                  </span>
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
