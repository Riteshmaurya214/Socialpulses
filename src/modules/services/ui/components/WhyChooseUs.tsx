import React from "react";
import { SectionSubheading } from "@/components/ui/SectionSubheading";
import { CheckCircle2, Award, Users, TrendingUp, Layers } from "lucide-react";

const reasons = [
  {
    icon: <Layers className="w-6 h-6 text-[#6366F1]" />,
    title: "500+ Projects Delivered",
    description: "Proven track record across diverse industries.",
  },
  {
    icon: <Users className="w-6 h-6 text-[#6366F1]" />,
    title: "120+ Satisfied Clients",
    description: "Building long-term partnerships that last.",
  },
  {
    icon: <Award className="w-6 h-6 text-[#6366F1]" />,
    title: "95% Client Retention",
    description: "Our clients stay because we deliver results.",
  },
  {
    icon: <TrendingUp className="w-6 h-6 text-[#6366F1]" />,
    title: "Data-Driven Strategy",
    description: "Decisions backed by analytics, not guesswork.",
  },
];

export default function WhyChooseUs() {
  return (
    <section 
      className="py-20 text-gray-900 relative overflow-hidden"
      style={{
        backgroundImage: `radial-gradient(rgba(0, 0, 0, 0.1) 1.5px, transparent 1px)`,
        backgroundSize: "30px 30px",
      }}
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#6366F1]/10 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-full bg-purple-100/50 blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="space-y-8">
            <SectionSubheading
              text="Why Choose Us"
              className="text-indigo-600"
              animated
            />
            <h2 className="font-montserrat text-4xl lg:text-5xl font-bold leading-tight">
              Partner with a Team That{" "}
              <span className="bg-linear-to-r from-[#3B82F6] via-[#6366F1] to-[#4F46E5] bg-clip-text text-transparent">
                Delivers Results
              </span>
            </h2>
            <p className="font-inter text-gray-600 text-lg leading-relaxed">
              We don't just build websites or run ads. We build digital
              ecosystems designed for scalable growth.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mt-8">
              {reasons.map((reason, idx) => (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all"
                >
                  <div className="mb-4 bg-linear-to-br from-[#3B82F6]/10 via-[#6366F1]/10 to-[#4F46E5]/10 w-12 h-12 rounded-lg flex items-center justify-center">
                    {reason.icon}
                  </div>
                  <h3 className="font-bold text-xl mb-2 font-montserrat text-gray-900">
                    {reason.title}
                  </h3>
                  <p className="text-gray-600 text-sm font-inter">
                    {reason.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative hidden lg:block h-full min-h-[500px]">
            {/* Abstract visual representation instead of generic image */}
            <div className="grid grid-cols-2 gap-4 h-full">
              <div className="space-y-4 pt-12">
                <div className="border border-gray-100 bg-white shadow-sm h-40 rounded-2xl w-full"></div>
                <div className="bg-linear-to-br from-[#3B82F6] via-[#6366F1] to-[#4F46E5] h-64 rounded-2xl w-full opacity-80 shadow-md"></div>
              </div>
              <div className="space-y-4">
                <div className="bg-purple-600 h-56 rounded-2xl w-full opacity-80 shadow-md"></div>
                <div className="border border-gray-100 bg-white shadow-sm h-48 rounded-2xl w-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
