"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

// Helper component for animating numbers
const Counter = ({
  value,
  suffix = "",
}: {
  value: number;
  suffix?: string;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  // Simple spring animation logic could go here,
  // but for a text counter, we'll rely on a simple pure CSS/keyframe or just render the number for speed.
  // Below is a clean Framer Motion approach to slide the number up.

  return (
    <span ref={ref} className="relative inline-block">
      <motion.span
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {value}
        {suffix}
      </motion.span>
    </span>
  );
};

const stats = [
  { label: "Project Done", value: 56, suffix: "K+" },
  { label: "Happy Client", value: 32, suffix: "K+" },
  { label: "Clients Rating", value: 4.7, suffix: "" }, // handled as string logic below
  { label: "Award Winning", value: 35, suffix: "+" },
];

export function CTAStatsSecond() {
  return (
    <section className="relative w-full">
      {/* --- TOP PART: IMAGE & CTA CARD --- */}
      <div className="relative h-[600px] w-full overflow-hidden">
        {/* Background Image with Dark Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/image/about-team.jpg" // Make sure to add a working office image here
            alt="Office meeting"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gray-900/60" />{" "}
          {/* Dark overlay */}
        </div>

        {/* Floating CTA Card */}
        <div className="container relative z-10 max-w-7xl mx-auto px-4 md:px-1 h-full flex items-center justify-end">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white/10 backdrop-blur-md border border-white/20 p-8 md:py-12 md:px-6 rounded-3xl max-w-xl text-white shadow-2xl"
          >
            <h2 className="mb-2 font-montserrat text-3xl md:text-4xl lg:text-[40px] font-bold text-gray-200 leading-[1.1] tracking-tighter">
              Let's Create Something Extraordinary for{" "}
              <span className="bg-linear-to-r from-orange-300 via-pink-300 to-blue-400 bg-clip-text text-transparent">
                Your Brand.
              </span>{" "}
            </h2>
            <p className="text-gray-200 text-sm font-inter leading-tight">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <button className="mt-4 bg-gradient-image text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:shadow-purple-500/30  transition-all duration-300">
              Get Started
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
