"use client";

import { motion } from "framer-motion";

export interface TextSegment {
  text: string;
  /** Tailwind color class(es), e.g. "text-brand-primary" */
  className?: string;
}

interface BlurTextProps {
  /** One or more colored text segments that together form the heading */
  segments: TextSegment[];
  /** Extra classes on the outer <span> wrapper (e.g. "justify-center") */
  className?: string;
  /** Delay between each word in seconds — default 0.25 (250 ms) */
  wordDelay?: number;
  /** Overall start delay offset in seconds — default 0 */
  initialDelay?: number;
}

/**
 * BlurText — hero heading animation
 * Animates each word: blurred + from bottom → clear + in place.
 * Direction: Bottom  |  Word delay: 250 ms (configurable)
 */
export default function BlurText({
  segments,
  className = "",
  wordDelay = 0.25,
  initialDelay = 0,
}: BlurTextProps) {
  /* Flatten all segments into a single word list preserving per-segment class */
  const words: { word: string; cls: string }[] = [];
  segments.forEach((seg) => {
    seg.text
      .trim()
      .split(/\s+/)
      .filter(Boolean)
      .forEach((w) => words.push({ word: w, cls: seg.className ?? "" }));
  });

  return (
    <span
      className={`inline-flex flex-wrap items-baseline gap-x-[0.28em] ${className}`}
    >
      {words.map((item, i) => (
        <motion.span
          key={i}
          className={item.cls}
          initial={{ opacity: 0, y: 24, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{
            duration: 0.55,
            delay: initialDelay + i * wordDelay,
            ease: [0.25, 0.4, 0.25, 1],
          }}
        >
          {item.word}
        </motion.span>
      ))}
    </span>
  );
}
