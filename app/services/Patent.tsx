import React from 'react';
import ServicePageTemplate from '../../components/ServicePageTemplate';

const Patent = () => {
  const pageData = {
    serviceName: "Patent Registration",
    heroImage: "/hero-img/hero-2.png",
    heroTitle: "Patent Registration Services",
    heroSubtitle: "Protect your inventions and innovations. Exclusive rights for 20 years to manufacture, use, and sell your patented invention.",
    
    description: `Patent registration grants exclusive rights to inventors for their new and useful inventions. Under the Patents Act, 1970, a patent provides the inventor with a monopoly to make, use, sell, and import the invention for 20 years from the filing date.

To be patentable, an invention must be novel (new), involve an inventive step (non-obvious), and be capable of industrial application. Patents can be granted for products, processes, or methods that meet these criteria.

Patent protection prevents others from commercially exploiting your invention without permission. You can license your patent to others for royalties or sell it outright. In case of infringement, you can take legal action and claim damages.`,
    
    keyHighlights: [
      { title: "20-Year Monopoly", desc: "Exclusive rights for two decades", icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" },
      { title: "Commercial Rights", desc: "Make, use, sell, and import exclusively", icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" },
      { title: "Licensing Revenue", desc: "Earn royalties from patent licenses", icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
      { title: "Legal Protection", desc: "Sue infringers and claim damages", icon: "M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" },
      { title: "Priority Date", desc: "Filing date protects against later inventions", icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" },
      { title: "Business Value", desc: "Patents significantly increase company valuation", icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" }
    ],
    
    process: [
      { title: "Patent Search", desc: "Conduct prior art search to check novelty" },
      { title: "Draft Specification", desc: "Prepare detailed patent application and claims" },
      { title: "File Application", desc: "Submit provisional or complete specification" },
      { title: "Examination & Grant", desc: "Respond to objections and obtain grant" }
    ],
    
    benefits: [
      { title: "Market Monopoly", desc: "Exclusive market rights for 20 years" },
      { title: "Competitive Edge", desc: "Block competitors from copying your invention" },
      { title: "Investment Attraction", desc: "Patented products attract investor interest" },
      { title: "Revenue Generation", desc: "License patents for ongoing royalty income" },
      { title: "Expert Drafting", desc: "Professional patent specification writing" },
      { title: "Prosecution Support", desc: "Handle examination and objections" }
    ],
    
    faqs: [
      { q: "What can be patented?", a: "New products, processes, methods, compositions, or improvements that are novel, involve inventive step, and have industrial application. Software with technical effect may also be patentable." },
      { q: "What cannot be patented?", a: "Discoveries, scientific theories, mathematical methods, business methods, computer programs per se, artistic works, and inventions contrary to public order or morality." },
      { q: "What is provisional vs complete specification?", a: "Provisional application secures priority date with basic disclosure. Complete specification with detailed claims must be filed within 12 months. Alternatively, file complete directly." },
      { q: "How long does patent registration take?", a: "Typically 3-5 years from filing to grant. Expedited examination available for startups, women applicants, and certain categories, reducing time to 12-18 months." },
      { q: "What is patent renewal?", a: "Annual renewal fees must be paid to keep patent alive. Failure to pay leads to patent lapse. Fees increase progressively over the 20-year term." }
    ],
    
    relatedServices: [
      { label: "Trademark Registration", desc: "Brand protection", href: "/services/trademark" },
      { label: "Copyright Registration", desc: "Creative protection", href: "/services/copyright" },
      { label: "Private Limited Company", desc: "Company formation", href: "/services/private-limited-company" },
      { label: "Due Diligence", desc: "IP valuation", href: "/services/due-diligence" }
    ]
  };

  return <ServicePageTemplate {...pageData} />;
};

export default Patent;
