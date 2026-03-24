"use client";

import { motion } from "framer-motion";

interface SectionSubheadingProps {
  text: string;
  animated?: boolean;
  className?: string;
}

export function SectionSubheading({
  text,
  animated = false,
  className = "",
}: SectionSubheadingProps) {
  const baseClasses =
    "font-inter bg-linear-to-r from-[#3B82F6] via-[#6366F1] to-[#4F46E5] bg-clip-text text-transparent font-bold tracking-widest text-xs uppercase";

  if (animated) {
    return (
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className={`${baseClasses} ${className}`}
      >
        {text}
      </motion.p>
    );
  }

  return <span className={`${baseClasses} ${className}`}>{text}</span>;
}
