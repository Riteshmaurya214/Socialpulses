"use client";
import SectionHeader from "@/components/section/Sectionheader";
import SectionTitle from "@/components/section/Sectiontitle ";
import { Star, LayoutGrid, Cpu, Megaphone } from "lucide-react";
import React, { useState } from "react";
import ServicesMarquee from "../components/ServicesMarquee";

const ServiceView = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    { name: "All", icon: LayoutGrid, label: "All" },
    { name: "IT", icon: Cpu, label: "IT" },
    { name: "Marketing", icon: Megaphone, label: "Marketing" },
  ];

  return (
    <div className="w-full py-20 pb-30 px-4">
      <div className="w-full flex justify-center gap-2 flex-col items-center">
        <SectionHeader icon={Star} title="Services" />

        <SectionTitle
          className="flex items-center justify-center flex-col "
          title="One Stop Design Solution"
          description="From web design to branding, our expert team delivers creative solutions that elevate your brand and captivate your audience."
        />
      </div>

      {/* Category filter buttons */}
      <div className="w-full flex flex-wrap justify-center items-center gap-3 md:gap-4 mt-12">
        {categories.map((category) => {
          const Icon = category.icon;
          const isActive = selectedCategory === category.name;
          return (
            <button
              key={category.name}
              onClick={() => setSelectedCategory(category.name)}
              className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl border transition-all duration-300 transform active:scale-95 ${
               isActive
  ? "text-white bg-gradient-to-r from-[#3B82F6] via-[#6366F1] to-[#4F46E5]"
                  : "bg-white/50 backdrop-blur-sm border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-gray-300"
              }`}
            >
              <Icon
                className={`w-4 h-4 ${isActive ? "text-white" : "text-gray-700"}`}
                strokeWidth={2}
              />
              <span
                className={`font-inter font-medium text-sm ${isActive ? "text-white" : "text-gray-700"}`}
              >
                {category.label}
              </span>
            </button>
          );
        })}
      </div>

      <div className="w-full mt-12">
        <ServicesMarquee selectedCategory={selectedCategory} />
      </div>
    </div>
  );
};

export default ServiceView;
