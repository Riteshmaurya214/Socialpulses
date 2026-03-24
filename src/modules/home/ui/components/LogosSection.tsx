"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Box,
  Code2,
  Globe,
  Heart,
  Hexagon,
  Leaf,
  Lightbulb,
  Music,
  Zap,
} from "lucide-react";

const LogosSection = () => {
  const logos = [
    { name: "velocity 9", icon: Zap },
    { name: "solaytic", icon: Heart },
    { name: "muzica", icon: Music },
    { name: "LightAI", icon: Zap }, // Using Zap as a placeholder for the lightning bolt
    { name: "ideaa", icon: Lightbulb },
    { name: "HEXLAB", icon: Hexagon },
    { name: "FOXHUB", icon: Box },
    { name: "EARTH2.0", icon: Globe },
    { name: "CodeLab", icon: Code2 },
    { name: "aven.", icon: Leaf },
  ];

  return (
    <section
      className="relative py-10 px-5 overflow-hidden bg-cover bg-bottom bg-no-repeat mt-4 md:mt-8"
      style={{ backgroundImage: "url('/image/logo-bg.png')" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="font-montserrat max-w-4xl mx-auto text-3xl md:text-4xl lg:text-[40px] font-bold text-center mb-12 md:mb-16 text-gray-900 leading-tight tracking-tighter">
          Join over{" "}
          <span className="bg-gradient-to-r from-[#3B82F6] via-[#6366F1] to-[#4F46E5] bg-clip-text text-transparent"> 300,000+ </span>{" "}
          businesses to create unique brand designs.
        </h2>

        {/* --- LOGO GRID --- */}
        <div className="hidden grid-cols-2 md:grid-cols-5 gap-y-12 gap-x-8 items-center justify-items-center opacity-80">
          {logos.map((logo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 group cursor-pointer"
            >
              {/* Logo Icon */}
              <logo.icon
                className="w-8 h-8 text-gray-400 group-hover:text-indigo-600 transition-colors duration-300"
                strokeWidth={1.5}
              />

              {/* Logo Text */}
              <span className="text-xl font-bold text-gray-500 group-hover:text-gray-900 transition-colors duration-300">
                {logo.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogosSection;
