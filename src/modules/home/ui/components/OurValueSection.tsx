"use client";

import { useState } from "react";
import { SectionSubheading } from "@/components/ui/SectionSubheading";
import { motion, AnimatePresence } from "framer-motion";

const initialSkills = [
  { label: "BRANDING DEVELOPMENT", percentage: 92 },
  { label: "DESIGN", percentage: 67 },
  { label: "BUSINESS DEVELOPMENT", percentage: 81 },
];

const additionalSkills = [
  { label: "DIGITAL MARKETING", percentage: 88 },
  { label: "TECHNOLOGY & AI", percentage: 75 },
];

const OurValueSection = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="max-w-7xl mx-auto px-6 flex justify-end">
      <motion.div 
        layout
        className="w-full lg:w-[550px] bg-white rounded-3xl p-8 lg:p-12 shadow-2xl border border-white/20 overflow-hidden"
      >
        <SectionSubheading text="OUR VALUE" />

        <h2 className="mt-4 text-3xl md:4xl lg:text-[40px] font-bold font-montserrat text-[#1A1A1A] leading-[0.9] tracking-tighter mb-6">
          Our dedicated team of creative minds and{" "}
          <span className="bg-gradient-to-r from-[#3B82F6] via-[#6366F1] to-[#4F46E5] bg-clip-text text-transparent">
            strategic thinkers.
          </span>
        </h2>

        <p className="text-gray-500 font-inter text-base leading-tight mb-10">
          Inceptos integer bibendum accumsan taciti quisque conubia leo nunc,
          iaculis dignissim turpis integer mattis elementum quam tempor etiam
          convallis.
        </p>

        {/* Progress Bars Container */}
        <div className="space-y-8 mb-10">
          {/* Initial Skills */}
          {initialSkills.map((skill, index) => (
            <SkillBar key={index} skill={skill} index={index} />
          ))}

          {/* Additional Skills with Animation */}
          <AnimatePresence>
            {showMore && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="space-y-8 overflow-hidden"
              >
                {additionalSkills.map((skill, index) => (
                  <SkillBar 
                    key={index + 10} 
                    skill={skill} 
                    index={index} 
                    isNew // Used only for delay now, not padding
                  />
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* CTA Button */}
        <button 
          onClick={() => setShowMore(!showMore)}
          className="px-10 py-4 rounded-full font-montserrat font-bold text-white text-sm bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-700 transition-all hover:scale-105 hover:shadow-lg active:scale-95"
        >
          {showMore ? "Show less" : "Discover more"}
        </button>
      </motion.div>
    </div>
  );
};

// Updated SkillBar: Removed the conditional padding logic
const SkillBar = ({ skill, index, isNew = false }: { skill: any, index: number, isNew?: boolean }) => (
  <div className="w-full">
    <div className="flex justify-between items-center mb-2">
      <span className="text-[12px] font-bold font-montserrat tracking-wider text-[#1A1A1A]">
        {skill.label}
      </span>
      <span className="text-sm font-bold font-inter text-[#1A1A1A]">
        {skill.percentage}%
      </span>
    </div>
    <div className="w-full h-[10px] bg-gray-100 rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${skill.percentage}%` }}
        viewport={{ once: true }}
        // Keep the delay logic so new bars animate in sequence
        transition={{ duration: 1.5, ease: "easeOut", delay: isNew ? 0.1 : index * 0.2 }}
        className="h-full bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-700"
      />
    </div>
  </div>
);

export default OurValueSection;