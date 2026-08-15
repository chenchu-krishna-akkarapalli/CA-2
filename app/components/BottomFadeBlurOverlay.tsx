"use client";

import { useEffect, useRef, useState } from "react";

type BlurLayer = {
  zIndex: number;
  blurPx: number;
  mask: string;
};

const LAYERS: BlurLayer[] = [
  {
    zIndex: 5,
    blurPx: 2,
    mask:
      "linear-gradient(to bottom, rgba(0,0,0,0) 60%, rgba(0,0,0,1) 80%, rgba(0,0,0,1) 100%)",
  },
  {
    zIndex: 6,
    blurPx: 6,
    mask:
      "linear-gradient(to bottom, rgba(0,0,0,0) 75%, rgba(0,0,0,1) 100%)",
  },
];

export default function BottomFadeBlurOverlay() {
  const [opacity, setOpacity] = useState(1);
  const footerRef = useRef<Element | null>(null);

  useEffect(() => {
    // Only run on desktop screens to preserve mobile FPS and paint performance
    if (typeof window !== "undefined" && window.innerWidth < 768) {
      return;
    }

    footerRef.current = document.querySelector("footer");

    const handleScroll = () => {
      const footer = footerRef.current;
      if (!footer) return;

      const footerRect = footer.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (footerRect.top < windowHeight) {
        const distanceOverlap = windowHeight - footerRect.top;
        let newOpacity = 1 - Math.min(distanceOverlap / 200, 1);
        if (newOpacity < 0) newOpacity = 0;
        setOpacity(newOpacity);
      } else {
        setOpacity(1);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-x-0 bottom-0 z-40 h-[220px] transition-opacity duration-300 ease-out hidden md:block"
      style={{ opacity }}
    >
      {LAYERS.map((layer) => (
        <div
          key={layer.zIndex}
          className="absolute inset-0"
          style={{
            zIndex: layer.zIndex,
            backdropFilter: `blur(${layer.blurPx}px)`,
            WebkitBackdropFilter: `blur(${layer.blurPx}px)`,
            maskImage: layer.mask,
            WebkitMaskImage: layer.mask,
          }}
        />
      ))}
    </div>
  );
}
