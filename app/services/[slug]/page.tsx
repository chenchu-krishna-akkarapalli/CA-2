import { Metadata } from "next";
import { notFound } from "next/navigation";
import { serviceRegistry, allSlugs } from "@/app/data/services-registry";
import ServiceRenderer from "./ServiceRenderer";

/* ───────────── Types ───────────── */

interface PageProps {
  params: Promise<{ slug: string }>;
}

/* ───────────── SSG ───────────── */

export function generateStaticParams() {
  return allSlugs.map((slug) => ({ slug }));
}

/* ───────────── SEO Metadata ───────────── */

const SITE_URL = "https://gmnrassociates.com";
const SITE_NAME = "CHINNI MALLIKARJUNA AND COMPANY";

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = serviceRegistry[slug];
  if (!service) return {};

  const title = `${service.name} | ${SITE_NAME} – Chartered Accountants in Chennai`;
  const description = service.description;
  const url = `${SITE_URL}/services/${slug}`;

  return {
    title,
    description,
    keywords: service.keywords,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      locale: "en_IN",
      type: "website",
      images: [
        {
          url: `${SITE_URL}/hero-img/hero-1.png`,
          width: 1200,
          height: 630,
          alt: service.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${SITE_URL}/hero-img/hero-1.png`],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

/* ───────────── JSON-LD Structured Data ───────────── */

function getJsonLd(slug: string) {
  const service = serviceRegistry[slug];
  if (!service) return null;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: service.name,
        description: service.description,
        url: `${SITE_URL}/services/${slug}`,
        provider: {
          "@type": "Organization",
          name: SITE_NAME,
          url: SITE_URL,
          logo: `${SITE_URL}/Assets/Images/source/logo.png`,
          address: {
            "@type": "PostalAddress",
            streetAddress: "No. 10/31, G1, Ten Downing, Rajalakshmi Nagar 3rd Main Road, Velachery",
            addressLocality: "Chennai",
            addressRegion: "Tamil Nadu",
            postalCode: "600042",
            addressCountry: "IN",
          },
          contactPoint: {
            "@type": "ContactPoint",
            contactType: "customer service",
            availableLanguage: ["English", "Telugu", "Tamil"],
          },
        },
        areaServed: {
          "@type": "Country",
          name: "India",
        },
        serviceType: service.name,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          {
            "@type": "ListItem",
            position: 2,
            name: "Services",
            item: `${SITE_URL}/#what-we-do`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: service.name,
            item: `${SITE_URL}/services/${slug}`,
          },
        ],
      },
      {
        "@type": "LocalBusiness",
        name: SITE_NAME,
        image: `${SITE_URL}/Assets/Images/source/logo.png`,
        "@id": SITE_URL,
        url: SITE_URL,
        address: {
          "@type": "PostalAddress",
          streetAddress: "No. 10/31, G1, Ten Downing, Rajalakshmi Nagar 3rd Main Road, Velachery",
          addressLocality: "Chennai",
          addressRegion: "Tamil Nadu",
          postalCode: "600042",
          addressCountry: "IN",
        },
        priceRange: "$$",
      },
    ],
  };
}

/* ───────────── Page Component ───────────── */

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = serviceRegistry[slug];

  if (!service) {
    notFound();
  }

  const jsonLd = getJsonLd(slug);

  return (
    <>
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
      <ServiceRenderer slug={slug} />
    </>
  );
}
