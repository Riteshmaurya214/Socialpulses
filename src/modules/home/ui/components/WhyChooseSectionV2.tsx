"use client";

import { SectionSubheading } from "@/components/ui/SectionSubheading";
import {
  Building2,
  Settings,
  Star,
  Zap,
  Shield,
  BarChart3,
  Server,
  CheckCircle,
  Monitor,
} from "lucide-react";
import { motion } from "motion/react";

const cards = [
  {
    title: "Business Focus",
    description:
      "We speak business, not just tech. Every solution is designed to drive your business forward.",
    icon: Building2,
  },
  {
    title: "Custom Solutions",
    description:
      "Tailored solutions designed specifically for your unique business requirements and goals.",
    icon: Settings,
  },
  {
    title: "Continuous Learning",
    description:
      "Our team stays current with the latest technologies to provide cutting-edge solutions.",
    icon: Star,
  },
  {
    title: "Lightning Fast",
    description:
      "Lightning-fast performance with 99.9% uptime guarantee and sub-second response times.",
    icon: Zap,
  },
  // {
  //   title: "Enterprise Security",
  //   description:
  //     "Bank-level security with end-to-end encryption and SOC 2 Type II compliance.",
  //   icon: Shield,
  // },
  // {
  //   title: "Real-time Analytics",
  //   description:
  //     "Advanced analytics and insights with real-time dashboards and predictive modeling.",
  //   icon: BarChart3,
  // },
  // {
  //   title: "Cloud Infrastructure",
  //   description:
  //     "Robust cloud infrastructure with auto-scaling, load balancing, and disaster recovery.",
  //   icon: Server,
  // },
  {
    title: "Transparent Pricing",
    description:
      "No hidden fees, no surprise charges. Clear, predictable pricing for all our services.",
    icon: CheckCircle,
  },
  {
    title: "24/7 Monitoring",
    description:
      "Round-the-clock system monitoring with instant alerts and proactive issue resolution.",
    icon: Monitor,
  },
];

const WhyChooseSectionV2 = () => {
  return (
    <section className="w-full py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="w-full flex justify-center gap-2 flex-col items-center">
          <SectionSubheading text="WHY CHOOSE US" />
          <h2 className="font-montserrat mt-4 max-w-3xl mx-auto text-3xl md:text-4xl lg:text-[40px] font-bold text-center mb-12 md:mb-16 text-gray-900 leading-tight">
            Building Brands That{" "}
            <span className="bg-gradient-to-r from-[#3B82F6] via-[#6366F1] to-[#4F46E5] bg-clip-text text-transparent">
              Stand Out
            </span>{" "}
            in a Crowded World.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} viewport={{ once: true }} className="bg-white p-6 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 flex flex-col items-center gap-5 transition-all hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] group" > {/* Icon Container */} <div className="w-12 h-12 bg-gradient-to-r from-[#3B82F6] via-[#6366F1] to-[#4F46E5] rounded-xl flex items-center justify-center text-white shadow-lg"> <card.icon size={24} strokeWidth={1.5} /> </div> {/* Text Content */} <div className="space-y-2 text-center"> <h3 className="text-xl font-bold text-gray-900 tracking-tight"> {card.title} </h3> <p className="text-gray-800 leading-[1.1] text-md"> {card.description} </p> </div> {/* Button */} {/* <button className="mt-2 px-6 py-2 rounded-full bg-gradient-to-r from-[#3B82F6] via-[#6366F1] to-[#4F46E5] text-white font-semibold text-xs transition-transform hover:scale-105 active:scale-95 shadow-md"> Learn more </button> */} </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSectionV2;
