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
    blurPx: 1.75,
    mask:
      "linear-gradient(to bottom, rgba(0,0,0,0) 50%, rgba(0,0,0,1) 62.5%, rgba(0,0,0,1) 75%, rgba(0,0,0,0) 87.5%)",
  },
  {
    zIndex: 6,
    blurPx: 3.5,
    mask:
      "linear-gradient(to bottom, rgba(0,0,0,0) 62.5%, rgba(0,0,0,1) 75%, rgba(0,0,0,1) 87.5%, rgba(0,0,0,1) 100%)",
  },
  {
    zIndex: 7,
    blurPx: 7,
    mask:
      "linear-gradient(to bottom, rgba(0,0,0,0) 75%, rgba(0,0,0,1) 87.5%, rgba(0,0,0,1) 100%)",
  },
  {
    zIndex: 8,
    blurPx: 14,
    mask: "linear-gradient(to bottom, rgba(0,0,0,0) 87.5%, rgba(0,0,0,1) 100%)",
  },
];

export default function BottomFadeBlurOverlay() {
  const [opacity, setOpacity] = useState(1);
  const footerRef = useRef<Element | null>(null);

  useEffect(() => {
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
      className="pointer-events-none fixed inset-x-0 bottom-0 z-40 h-[330px] transition-opacity duration-300 ease-out"
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
