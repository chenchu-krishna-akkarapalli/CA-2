"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface HeadingRevealProps {
  children: ReactNode;
  /** Extra classes on the motion wrapper (e.g. for layout) */
  className?: string;
  /** Delay before animation starts in seconds — default 0 */
  delay?: number;
  /** Viewport margin before trigger — default "-60px" */
  margin?: string;
}

/**
 * HeadingReveal — section heading animation (whileInView)
 * Animates: blurred + from below → clear + in place.
 * Applied globally to every section h2 outside hero sections.
 */
export default function HeadingReveal({
  children,
  className = "",
  delay = 0,
  margin = "-60px",
}: HeadingRevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 22, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin }}
      transition={{ duration: 0.65, delay, ease: [0.25, 0.4, 0.25, 1] }}
    >
      {children}
    </motion.div>
  );
}
