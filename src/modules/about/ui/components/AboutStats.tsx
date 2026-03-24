import React from "react";
import { SectionSubheading } from "@/components/ui/SectionSubheading";

const stats = [
  { value: "500+", label: "Projects Delivered Across Industries" },
  { value: "120+", label: "Enterprise & Growth-Stage Clients" },
  { value: "95%", label: "Client Retention Rate" },
  { value: "10+", label: "Industries Digitally Transformed" },
  { value: "Global", label: "Pan-India & Global Client Presence" },
];

export default function AboutStats() {
  return (
    <section
     
      className="py-20"
      style={{
        backgroundImage: `radial-gradient(rgba(0, 0, 0, 0.1) 1.5px, transparent 1px)`,
        backgroundSize: "30px 30px",
      }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <SectionSubheading text="Our Impact" />
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat mt-4">
            Driving Real Business Growth
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow text-center border border-gray-100"
            >
              <div className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#3B82F6] via-[#6366F1] to-[#4F46E5] mb-2 font-montserrat">
                {stat.value}
              </div>
              <p className="text-gray-600 font-medium font-inter">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
