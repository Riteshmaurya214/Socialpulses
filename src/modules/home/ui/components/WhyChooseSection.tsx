"use client";

import Image from "next/image";
import { SectionSubheading } from "@/components/ui/SectionSubheading";

interface FeatureCard {
  id: number;
  title: string;
  description: string;
  icon: string;
  bgColor: string;
}

const features: FeatureCard[] = [ { id: 1, title: "500+ Projects Delivered", description: "", icon: "/image/icon1.png", bgColor: "bg-gradient-to-br from-white to-blue-50/50", }, { id: 2, title: "120+ Satisfied Clients", description: "", icon: "/image/icon2.png", bgColor: "bg-gradient-to-br from-[#3B82F6] to-[#6366F1]", }, { id: 3, title: "95% Client Retention", description: "", icon: "/image/img5.png", bgColor: "bg-gradient-to-br from-white to-indigo-50/50", }, { id: 4, title: "Industry-agnostic Experience", description: "", icon: "/image/icon3.png", bgColor: "bg-gradient-to-br from-[#6366F1]/80 to-[#4F46E5]/80", }, { id: 5, title: "Data-Driven Growth Strategy", description: "", icon: "/image/icon4.png", bgColor: "bg-gradient-to-br from-white to-gray-50", }, ];

const WhyChooseSection = () => {
  return (
    <section className="w-full py-10 px-4">
      <div className="w-full flex justify-center gap-2 flex-col items-center mb-12">
        <SectionSubheading text="WHY CHOOSE US" />
        <h2 className="font-montserrat mt-4 max-w-3xl mx-auto text-3xl md:text-4xl lg:text-[40px] font-bold text-center mb-12 md:mb-16 text-gray-900 leading-tight">
          Building Brands That{" "}
          <span className="bg-linear-to-r from-orange-300 via-pink-300 to-blue-400 bg-clip-text text-transparent">
            Stand Out
          </span>{" "}
          in a Crowded World.
        </h2>
      </div>

      {/* Bento Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1 - Limitless Creativity */}
        <div
          className={`p-10 rounded-xl border border-white/40 shadow-sm ${features[0].bgColor} flex flex-col items-center justify-center text-center transition-transform hover:scale-[1.02] duration-300`}
        >
          <div className="relative w-32 h-32">
            <Image
              src={features[0].icon}
              alt={features[0].title}
              fill
              className="object-contain"
            />
          </div>
          <h3 className="text-2xl font-semibold tracking-tight leading-[0.9] font-montserrat text-gray-900">
            {features[0].title}
          </h3>
        </div>

        {/* Card 2 - Strategy-based Approach */}
        <div
          className={`p-10 rounded-xl border border-white/20 shadow-lg ${features[1].bgColor} flex flex-col items-center justify-center text-center text-white transition-transform hover:scale-[1.02] duration-300`}
        >
          <div className="relative w-32 h-32">
            <Image
              src={features[1].icon}
              alt={features[1].title}
              fill
              className="object-contain"
            />
          </div>
          <h3 className="text-2xl font-semibold tracking-tight leading-[0.9] font-montserrat text-gray-200">
            {features[1].title}
          </h3>
        </div>

        {/* Card 3 - Impressive Outcomes (The Tall Card) */}
        <div
          className={`md:row-span-2 p-10 rounded-xl border border-white/40 shadow-sm ${features[2].bgColor} flex flex-col items-center text-center transition-transform hover:scale-[1.02] duration-300`}
        >
          <div className="relative w-full aspect-4/5 mt-4">
            <Image
              src={features[2].icon}
              alt={features[2].title}
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="mt-auto">
            <h3 className="text-2xl font-semibold tracking-tight leading-[0.9] font-montserrat text-gray-900">
              {features[2].title}
            </h3>
          </div>
        </div>

        {/* Card 4 - Flexibility and Adaptability */}
        <div
          className={`p-10 rounded-xl border border-white/20 shadow-lg ${features[3].bgColor} flex flex-col items-center justify-center text-center text-white transition-transform hover:scale-[1.02] duration-300`}
        >
          <div className="relative w-32 h-32">
            <Image
              src={features[3].icon}
              alt={features[3].title}
              fill
              className="object-contain"
            />
          </div>
          <h3 className="text-2xl font-semibold tracking-tight leading-[0.9] font-montserrat text-gray-100">
            {features[3].title}
          </h3>
        </div>

        {/* Card 5 - Commitment to Quality */}
        <div
          className={`p-10 rounded-xl border border-white/40 shadow-sm ${features[4].bgColor} flex flex-col items-center justify-center text-center transition-transform hover:scale-[1.02] duration-300`}
        >
          <div className="relative w-32 h-32">
            <Image
              src={features[4].icon}
              alt={features[4].title}
              fill
              className="object-contain"
            />
          </div>
          <h3 className="text-2xl font-semibold tracking-tight leading-[0.9] font-montserrat text-gray-900">
            {features[4].title}
          </h3>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
