"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";
import { SectionSubheading } from "@/components/ui/SectionSubheading";

const services = [
  "Product Engineering", // Shortened from Software & Product Engineering
  "Web & Mobile Apps",
  "AI & Automation", // Also trimmed "Platforms" for consistency
  "SEO & Organic Growth",
  "Paid Marketing", // Trimmed "＆ Campaigns"
  "Brand & Creative", // Trimmed "Strategy"
];

export function AboutView() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  return (
    <section ref={containerRef} className="md:py-20 bg-white overflow-hidden">
      <div className="container max-w-7xl mx-auto px-4">
        {/* CHANGED: Grid cols adjusted to give image more space (1.3fr vs 1fr) */}
        <div className="grid lg:grid-cols-[1.3fr_1fr] gap-12 lg:gap-20 items-center">
          {/* --- LEFT SIDE: IMAGE (Now Bigger) --- */}
          <div className="relative pt-8">
            {/* Main Image */}
            <div className="relative rounded-sm overflow-hidden z-0">
              <Image
                src="/image/about-team.jpg"
                alt="Our Team"
                width={800}
                height={800}
                className="object-cover w-full inverted-radius"
              />

              {/* --- CUSTOM CLIP-PATH BUTTON --- */}
              <a href="/about" className="absolute top-0 right-0 z-10 group">
                <div className="relative bg-[#1a1a1a] w-20 h-20 flex items-center justify-center transition-colors duration-300 group-hover:bg-linear-to-r group-hover:from-[#3B82F6] group-hover:via-[#6366F1] group-hover:to-[#4F46E5] rounded-xl">
                  <ArrowUpRight className="w-8 h-8 text-white transition-transform duration-300 group-hover:rotate-45" />
                </div>
              </a>
            </div>

            {/* Rotating Badge */}
            <motion.div
              style={{ rotate }}
              className="absolute -bottom-12 -right-12 z-10 w-40 h-40 hidden"
            >
              <Image
                src="/image/badge.png"
                alt="Inspiring Creativity Badge"
                width={160}
                height={160}
              />
            </motion.div>
          </div>

          {/* --- RIGHT SIDE: CONTENT (Compacted) --- */}
          <div className="space-y-6">
            {" "}
            {/* Reduced vertical spacing */}
            <div className="space-y-4">
              <SectionSubheading text="Who We Are" />

              {/* CHANGED: Tightened tracking and leading */}
              {/* <h2 className="mt-4 font-montserrat text-3xl md:text-4xl font-bold leading-[1.1] tracking-tight text-gray-900">
                <span className="bg-nouvo-gradient bg-clip-text text-transparent">
                  Building Brands
                </span>{" "}
                That Stand Out in a Crowded World.
              </h2> */}
              <h2 className="font-montserrat text-3xl md:text-4xl lg:text-[40px] font-bold mt-4 text-gray-900 leading-tight tracking-tighter">
                <span className="bg-linear-to-r from-[#3B82F6] via-[#6366F1] to-[#4F46E5] bg-clip-text text-transparent">
                  {" "}
                  We Build{" "}
                </span>{" "}
                Digital Experiences & Business Growth.
              </h2>

              {/* CHANGED: Slightly smaller body text, tighter leading */}
              <p className="font-inter text-gray-600 text-base leading-snug tracking-tight">
                A full-service digital transformation company delivering
                software engineering, product development, and performance
                marketing under one strategic ecosystem.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3">
              {services.map((item, i) => (
                <div key={i} className="flex items-center gap-2 group">
                  <CheckCircle2 className="w-4 h-4 text-[#6366F1] flex-shrink-0 group-hover:scale-110 transition-transform" />

                  {/* CHANGED: Smaller text size for list */}
                  <span className="font-inter text-gray-700 text-base font-bold tracking-tight leading-snug group-hover:bg-linear-to-r group-hover:from-[#3B82F6] group-hover:via-[#6366F1] group-hover:to-[#4F46E5] group-hover:bg-clip-text group-hover:text-transparent transition-all">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
