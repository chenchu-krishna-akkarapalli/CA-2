import React from 'react';
import ServicePageTemplate from '../../components/ServicePageTemplate';

const Copyright = () => {
  const pageData = {
    serviceName: "Copyright Registration",
    heroImage: "/hero-img/hero-1.png",
    heroTitle: "Copyright Registration Services",
    heroSubtitle: "Protect your creative works. Legal protection for literary, artistic, musical, and other original creations.",
    
    description: `Copyright registration provides legal protection to original creative works including literary works, music, films, software, artistic works, photographs, and more. Under the Copyright Act, 1957, the creator gets exclusive rights to reproduce, distribute, perform, and create derivative works.

While copyright exists automatically upon creation, registration provides legal evidence of ownership and is essential for enforcing your rights in court. It establishes a public record of ownership and allows you to claim statutory damages and attorney fees in infringement cases.

Copyright protection lasts for the author's lifetime plus 60 years in India. For works by companies or anonymous works, it's 60 years from publication. Registration is relatively quick and affordable compared to other IP protections.`,
    
    keyHighlights: [
      { title: "Automatic Rights", desc: "Copyright exists from creation, registration proves it", icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" },
      { title: "Lifetime + 60 Years", desc: "Protection for creator's life plus 60 years", icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" },
      { title: "Legal Evidence", desc: "Prima facie proof of ownership in court", icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" },
      { title: "Multiple Works", desc: "Covers books, music, software, art, films", icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" },
      { title: "Infringement Action", desc: "Sue copiers and claim damages", icon: "M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" },
      { title: "Licensing Income", desc: "Earn royalties by licensing your work", icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" }
    ],
    
    process: [
      { title: "Work Classification", desc: "Identify the category and nature of your work" },
      { title: "Application Form", desc: "Complete Form XIV with work details and copies" },
      { title: "Examination Period", desc: "30-day waiting period for objections" },
      { title: "Certificate Issued", desc: "Registration certificate after examination" }
    ],
    
    benefits: [
      { title: "Ownership Proof", desc: "Conclusive evidence of your creation" },
      { title: "Deterrent Effect", desc: "Discourages potential infringers" },
      { title: "Business Asset", desc: "Copyright can be sold or licensed" },
      { title: "International Protection", desc: "Recognized in 180+ Berne Convention countries" },
      { title: "Professional Filing", desc: "Proper documentation and submission" },
      { title: "Quick Processing", desc: "Registration in 2-3 months" }
    ],
    
    faqs: [
      { q: "What works can be copyrighted?", a: "Literary works (books, articles, software), dramatic works, musical works, artistic works (paintings, photographs, sculptures), films, and sound recordings." },
      { q: "Is copyright registration mandatory?", a: "No, copyright exists automatically from creation. But registration provides legal evidence, is needed for infringement suits, and allows claiming statutory damages." },
      { q: "What is the duration of copyright?", a: "For author's works: lifetime + 60 years. For company/anonymous works: 60 years from publication. For photographs: 60 years from publication." },
      { q: "Can software be copyrighted?", a: "Yes, software source code is protected as literary work under copyright. However, the underlying algorithm or concept may need patent protection." },
      { q: "What rights does copyright provide?", a: "Right to reproduce, distribute, perform publicly, display, create derivative works, and license others. Moral rights include attribution and integrity." }
    ],
    
    relatedServices: [
      { label: "Trademark Registration", desc: "Brand protection", href: "/services/trademark" },
      { label: "Patent Registration", desc: "Invention protection", href: "/services/patent" },
      { label: "Private Limited Company", desc: "Company formation", href: "/services/private-limited-company" },
      { label: "GST Registration", desc: "Tax compliance", href: "/services/gst-registration" }
    ]
  };

  return <ServicePageTemplate {...pageData} />;
};

export default Copyright;
