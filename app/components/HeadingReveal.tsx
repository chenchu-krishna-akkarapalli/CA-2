"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface HeadingRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  margin?: string;
}

export default function HeadingReveal({
  children,
  className = "",
  delay = 0,
  margin = "-40px",
}: HeadingRevealProps) {
  return (
    <motion.div
      className={`${className} will-change-transform`}
      initial={{ opacity: 0.85, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin }}
      transition={{ duration: 0.45, delay, ease: [0.25, 0.4, 0.25, 1] }}
    >
      {children}
    </motion.div>
  );
}
