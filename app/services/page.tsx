import type { Metadata } from "next";
import ServicesPage from "../components/ServicesPage";

export const metadata: Metadata = {
  title: "Our Services | GMNR & Associates – Chartered Accountants",
  description:
    "Explore our wide range of CA services including tax advisory, audit & assurance, GST, company registration, compliance, NRI services, and more. GMNR & Associates, Hyderabad.",
  openGraph: {
    title: "Our Services | GMNR & Associates",
    description:
      "Comprehensive chartered accountancy services — from company registration and tax filing to audit, GST, and business advisory.",
    url: "https://gmnrassociates.com/services/",
    siteName: "GMNR & Associates",
    type: "website",
  },
};

export default function Services() {
  return <ServicesPage />;
}
