"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import BookCallButton from "@/components/ui/BookCallButton";

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
  { label: "Projects Delivered", value: 500, suffix: "+" },
  { label: "Happy Clients", value: 120, suffix: "+" },
  { label: "Client Retention", value: 95, suffix: "%" },
  { label: "Industries Transformed", value: 10, suffix: "+" },
  // { label: "Global Presence", value: "India & Global", text: true },
];

export function CTAStats() {
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
        <div className="container relative z-10 max-w-7xl mx-auto px-4 md:px-1 h-full flex items-center ">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white/10 backdrop-blur-md border border-white/20 p-8 md:py-12 md:px-4 rounded-3xl max-w-xl text-white shadow-2xl"
          >
            <h2 className="mb-4 font-montserrat text-3xl md:text-3xl lg:text-[40px] font-bold text-gray-100 leading-[1.1] tracking-tight">
              Let's Create Something Extraordinary for{" "}
              <span className="bg-gradient-to-r from-[#3B82F6] via-[#6366F1] to-[#4F46E5] bg-clip-text text-transparent">
                Your Brand.
              </span>
            </h2>
            <p className="text-gray-200 text-base  font-inter leading-none mb-6">
              Ready to accelerate your growth? Social Pulse Studios delivers
              software engineering, product development, and performance
              marketing in one strategic ecosystem. Partner with us to build
              scalable technology and drive measurable business results today.
            </p>
            <BookCallButton text="Book Strategy Call" className="mt-4" />
          </motion.div>
        </div>
      </div>

      {/* --- BOTTOM PART: STATS BAR --- */}
      <div className="w-full py-12 relative z-20 overflow-hidden">
        {/* Background Image */}
      
{/* Background Gradient */}
<div className="absolute inset-0 z-0 bg-[linear-gradient(120deg,#3B82F6,#6366F1,#4F46E5,#1E3A8A)]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-white/20">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="space-y-2"
              >
                <div className="text-3xl md:text-5xl font-bold text-white">
                  {/* Check for text property or special cases */}
                  {(stat as any).text ? (
                    <span className="text-2xl md:text-3xl">{stat.value}</span>
                  ) : (
                    <Counter
                      value={stat.value as number}
                      suffix={stat.suffix}
                    />
                  )}
                </div>
                <div className="text-white/90 font-medium text-sm md:text-lg tracking-wide uppercase">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
