"use client";

import React, { useState, useEffect } from "react";
import { SectionSubheading } from "@/components/ui/SectionSubheading";
import { Lightbulb, Code, Rocket, BarChart2, Briefcase } from "lucide-react";

const steps = [
  {
    icon: <Lightbulb className="w-8 h-8" />,
    title: "Discovery & Research",
    description: "Understanding business goals, users, and opportunities.",
    color:
      "bg-gradient-to-r from-[#3B82F6] via-[#6366F1] to-[#4F46E5] text-white",
  },
  {
    icon: <BarChart2 className="w-8 h-8" />,
    title: "Strategy & Planning",
    description: "Creating structured digital roadmaps and KPI alignment.",
    color:
      "bg-gradient-to-r from-[#3B82F6] via-[#6366F1] to-[#4F46E5] text-white",
  },
  {
    icon: <Briefcase className="w-8 h-8" />,
    title: "Design & Experience",
    description: "High-conversion UI/UX and brand-focused visuals.",
    color:
      "bg-gradient-to-r from-[#3B82F6] via-[#6366F1] to-[#4F46E5] text-white",
  },
  {
    icon: <Code className="w-8 h-8" />,
    title: "Development & Engineering",
    description: "Secure, scalable, enterprise-grade engineering.",
    color:
      "bg-gradient-to-r from-[#3B82F6] via-[#6366F1] to-[#4F46E5] text-white",
  },
  {
    icon: <Rocket className="w-8 h-8" />,
    title: "Launch & Growth",
    description:
      "Performance marketing, analytics, and continuous optimization.",
    color:
      "bg-gradient-to-r from-[#3B82F6] via-[#6366F1] to-[#4F46E5] text-white",
  },
];

export default function OurProcess() {
  const [activePhase, setActivePhase] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActivePhase((prev) => (prev + 1) % 10);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="py-10"
      style={{
        backgroundImage: `radial-gradient(rgba(0, 0, 0, 0.1) 1.5px, transparent 1px)`,
        backgroundSize: "30px 30px",
      }}
    >
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <SectionSubheading text="How We Work" animated />
          <h2 className="font-montserrat text-4xl lg:text-5xl font-bold text-gray-900 mt-4 leading-tight">
            Our Proven Process
          </h2>
          <p className="font-inter text-gray-600 mt-4 max-w-2xl mx-auto text-lg leading-relaxed">
            A structured approach to ensure success at every stage.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:flex absolute top-[60px] left-[10%] right-[10%] h-1 z-0">
            {[0, 1, 2, 3].map((lineIdx) => {
              const isFilled = activePhase >= lineIdx * 2 + 1;
              return (
                <div key={lineIdx} className="relative flex-1 h-full bg-gray-100">
                  <div
                    className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#3B82F6] via-[#6366F1] to-[#4F46E5] shadow-[0_0_10px_rgba(79,70,229,0.5)]"
                    style={{
                      width: isFilled ? "100%" : "0%",
                      transition:
                        activePhase === 0 ? "none" : "width 1000ms linear",
                    }}
                  />
                </div>
              );
            })}
          </div>

          <style dangerouslySetInnerHTML={{ __html: `
            @keyframes cardShine {
              0% { left: -100%; top: 0; }
              50%, 100% { left: 200%; top: 0; }
            }

            .step-card:hover, .step-card.active-glow {
              animation: borderGlowPulse 2s infinite;
            }

            @keyframes borderGlowPulse {
              0%, 100% {
                box-shadow: 0 0 15px rgba(59,130,246,0.6);
                border-color: rgba(59,130,246,0.8);
              }
              50% {
                box-shadow: 0 0 30px rgba(79,70,229,0.8);
                border-color: rgba(79,70,229,1);
              }
            }

            .shine-layer {
              position: absolute;
              top: 0;
              left: -100%;
              width: 50%;
              height: 100%;
              background: linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent);
              transform: skewX(-20deg);
              pointer-events: none;
              z-index: 5;
            }

            .step-card:hover .shine-layer,
            .step-card.active-glow .shine-layer {
              animation: cardShine 2s infinite;
            }
          `}} />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 relative z-10">
            {steps.map((step, idx) => {
              const isActive = activePhase === idx * 2;

              return (
                <div key={idx} className="group relative h-full">
                  <div
                    className={`step-card relative bg-white p-6 rounded-2xl border transition-all duration-300 text-center h-full overflow-hidden flex flex-col justify-start ${
                      isActive
                        ? "active-glow border-[#3B82F6] scale-[1.02] z-10"
                        : "border-gray-100 hover:scale-[1.02] hover:z-10"
                    }`}
                  >
                    <div className="shine-layer" />

                    <div
                      className={`relative z-10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 ${step.color} transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(79,70,229,0.7)] ${
                        isActive
                          ? "scale-110 shadow-[0_0_20px_rgba(79,70,229,0.7)]"
                          : ""
                      }`}
                    >
                      {step.icon}
                    </div>

                    <h3 className="relative z-10 font-montserrat font-bold text-gray-900 text-lg mb-3">
                      {step.title}
                    </h3>

                    <p className="relative z-10 font-inter text-gray-600 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Step Number Badge */}
                  <div
                    className={`absolute -top-3 -right-3 w-8 h-8 text-white rounded-full flex items-center justify-center text-xs font-bold font-mono border-4 border-white z-20 transition-all duration-300 group-hover:bg-gradient-to-r from-[#3B82F6] via-[#6366F1] to-[#4F46E5] group-hover:shadow-[0_0_10px_rgba(79,70,229,0.8)] ${
                      isActive
                        ? "bg-gradient-to-r from-[#3B82F6] via-[#6366F1] to-[#4F46E5] shadow-[0_0_10px_rgba(79,70,229,0.8)]"
                        : "bg-gray-900"
                    }`}
                  >
                    {idx + 1}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

