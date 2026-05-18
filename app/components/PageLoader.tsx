"use client";

import { motion } from "framer-motion";

export default function PageLoader() {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-white"
      aria-label="Loading page"
      role="status"
    >
      <motion.div
        className="flex flex-col items-center gap-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.25 }}
      >
        {/* Dual-ring spinner */}
        <div className="relative w-14 h-14">
          <motion.span
            className="absolute inset-0 rounded-full border-2 border-brand-accent/30"
            style={{ borderTopColor: "var(--color-brand-accent, #2d7a4f)" }}
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
          <motion.span
            className="absolute inset-2 rounded-full border-2 border-brand-primary/20"
            style={{ borderTopColor: "var(--color-brand-primary, #1a4d32)" }}
            animate={{ rotate: -360 }}
            transition={{ duration: 0.75, repeat: Infinity, ease: "linear" }}
          />
        </div>

        <p className="font-outfit font-medium text-[13px] tracking-widest uppercase text-brand-primary/50">
          Loading…
        </p>
      </motion.div>
    </div>
  );
}
