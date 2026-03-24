import React from "react";
import { SectionSubheading } from "@/components/ui/SectionSubheading";
import { CheckCircle2 } from "lucide-react";

const softwareServices = [
  "Custom Software Development",
  "Enterprise Platform Development",
  "Web Application Development",
  "Mobile App Development",
  "CRM & ERP Solutions",
  "Cloud Solutions & DevOps",
  "AI & Automation Systems",
  "SaaS Product Development",
  "System Integration",
  "UI/UX Product Design",
  "Website Development & Engineering",
];

const marketingServices = [
  "Performance Marketing",
  "Search Engine Optimization (SEO)",
  "Social Media Management",
  "Paid Advertising (Meta, Google, LinkedIn)",
  "Brand Strategy & Positioning",
  "Content Marketing",
  "Email Marketing & Funnel Automation",
  "Conversion Rate Optimization",
  "Lead Generation Campaigns",
  "Analytics & Data-Driven Growth Strategy",
];

export default function ServicesOverview() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <SectionSubheading text="What We Do" animated />
          <h2 className="font-montserrat text-4xl lg:text-5xl font-bold text-gray-900 mt-4 leading-tight">
            Our End-to-End Services
          </h2>
          <p className="font-inter text-gray-600 mt-4 max-w-2xl mx-auto text-lg leading-relaxed">
            Combining technology and marketing excellence to drive growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
          {/* Software Section */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative bg-white p-8 lg:p-10 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 h-full">
              <h3 className="font-montserrat text-2xl lg:text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <span className="w-2 h-8 bg-blue-500 rounded-full"></span>
                Software & Technology
              </h3>
              <ul className="space-y-4">
                {softwareServices.map((service, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                    <span className="font-inter text-gray-700 font-medium">
                      {service}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Marketing Section */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative bg-white p-8 lg:p-10 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 h-full">
              <h3 className="font-montserrat text-2xl lg:text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <span className="w-2 h-8 bg-purple-500 rounded-full"></span>
                Marketing & Growth
              </h3>
              <ul className="space-y-4">
                {marketingServices.map((service, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-purple-500 mt-1 flex-shrink-0" />
                    <span className="font-inter text-gray-700 font-medium">
                      {service}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
