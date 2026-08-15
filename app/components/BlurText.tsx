"use client";

import React from "react";
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
  /** Delay between each word in seconds */
  wordDelay?: number;
  /** Overall start delay offset in seconds */
  initialDelay?: number;
}

export default function BlurText({
  segments,
  className = "",
  wordDelay = 0.05,
  initialDelay = 0.02,
}: BlurTextProps) {
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
          className={`${item.cls} will-change-transform`}
          initial={{ opacity: 0.85, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.35,
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
