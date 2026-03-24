import React from "react";
import { SectionSubheading } from "@/components/ui/SectionSubheading";
import { Lightbulb, Code, Rocket, BarChart2, Briefcase } from "lucide-react";

const steps = [
  {
    icon: <Lightbulb className="w-8 h-8" />,
    title: "Discovery & Strategy",
    description: "We understand your business goals first.",
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: <BarChart2 className="w-8 h-8" />,
    title: "Concept & Planning",
    description: "Roadmaps and project planning aligned with KPIs.",
    color: "bg-indigo-100 text-indigo-600",
  },
  {
    icon: <Briefcase className="w-8 h-8" />,
    title: "Design & Engineering",
    description: "High-conversion UI/UX and robust development.",
    color: "bg-purple-100 text-purple-600",
  },
  {
    icon: <Code className="w-8 h-8" />,
    title: "Launch & Optimization",
    description: "Live deployment and measured growth.",
    color: "bg-pink-100 text-pink-600",
  },
  {
    icon: <Rocket className="w-8 h-8" />,
    title: "Scale & Support",
    description: "Ongoing enhancements and performance scaling.",
    color: "bg-orange-100 text-orange-600",
  },
];

export default function ServiceProcess() {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <SectionSubheading text="How We Work" animated />
          <h2 className="font-montserrat text-4xl lg:text-5xl font-bold text-gray-900 mt-4 leading-tight">
            Our Process
          </h2>
          <p className="font-inter text-gray-600 mt-4 max-w-2xl mx-auto text-lg leading-relaxed">
            We follow a proven methodology to deliver consistent results.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-[60px] left-0 right-0 h-1 bg-gray-100 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 relative z-10">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="group relative bg-white p-6 rounded-2xl border border-gray-100 hover:border-indigo-100 hover:shadow-lg transition-all duration-300 text-center"
              >
                <div
                  className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 ${step.color} transition-transform group-hover:scale-110`}
                >
                  {step.icon}
                </div>
                <h3 className="font-montserrat font-bold text-gray-900 text-lg mb-3">
                  {step.title}
                </h3>
                <p className="font-inter text-gray-600 text-sm leading-relaxed">
                  {step.description}
                </p>

                {/* Step Number Badge */}
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-xs font-bold font-mono border-4 border-white">
                  {idx + 1}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
