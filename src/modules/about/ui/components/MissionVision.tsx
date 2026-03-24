"use client";

import React from "react";
import { motion } from "framer-motion";
import { Zap } from "lucide-react";

export default function MissionVision() {
  const missionText = "To help businesses in the USA, UK, India, Australia, Canada, and Dubai grow faster and smarter with affordable, results-driven digital marketing and web development. We focus on delivering measurable ROI through strategies powered by AI, automation, and real-world experience.";
  const visionText = "To be recognized globally as a trusted partner for agencies and brands, known for turning challenges into growth opportunities. We aim to help our clients achieve long-term success in an ever-changing digital world — without the high costs and complexity that hold many businesses back.";

  return (
    <section className="py-20 bg-[#F8FAFF] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/image/logo-bg.png')" }}>
      <div className="container mx-auto px-4 max-w-7xl text-center">
        <h2 className="font-montserrat text-4xl md:text-5xl font-bold text-[#0F172A] mb-16">
          Our Mission & Vision
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white p-10 md:p-12 rounded-[32px] shadow-[0_10px_40px_-15px_rgba(0,0,0,0.08)] flex flex-col items-center"
          >
            <h3 className="font-montserrat text-3xl font-bold text-[#0F172A] mb-6">
              Mission
            </h3>
            <p className="font-inter text-gray-600 leading-relaxed text-lg max-w-md">
              {missionText}
            </p>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white p-10 md:p-12 rounded-[32px] shadow-[0_10px_40px_-15px_rgba(0,0,0,0.08)] flex flex-col items-center"
          >
            <h3 className="font-montserrat text-3xl font-bold text-[#0F172A] mb-6">
              Vision
            </h3>
            <p className="font-inter text-gray-600 leading-relaxed text-lg max-w-md">
              {visionText}
            </p>
          </motion.div>
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-linear-to-r from-[#3B82F6] via-[#6366F1] to-[#4F46E5] text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-lg transition-all hover:scale-105 active:scale-95 group"
          >
            <Zap className="w-5 h-5 fill-current" />
            Get Your Free Growth Strategy
          </a>
        </motion.div>
      </div>
    </section>
  );
}
