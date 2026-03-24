import React from "react";
import { SectionSubheading } from "@/components/ui/SectionSubheading";
import {
  Code2,
  Smartphone,
  Terminal,
  LineChart,
  Search,
  Share2,
  Target,
  BarChart,
  FileCode,
  Monitor,
} from "lucide-react";

const softwareServices = [
  {
    icon: <Code2 className="w-8 h-8 text-[#3B82F6]" />,
    title: "Custom Software Development",
    description: "Scalable platforms tailored to your business needs.",
  },
  {
    icon: <Smartphone className="w-8 h-8 text-[#3B82F6]" />,
    title: "Web & Mobile App Development",
    description: "Fast, secure, and user-centric applications.",
  },
  {
    icon: <Terminal className="w-8 h-8 text-[#3B82F6]" />,
    title: "Enterprise Systems",
    description: "Efficient operations and seamless automation.",
  },
  {
    icon: <Monitor className="w-8 h-8 text-[#3B82F6]" />,
    title: "SaaS Product Development",
    description: "Building the next generation of software products.",
  },
  {
    icon: <FileCode className="w-8 h-8 text-[#3B82F6]" />,
    title: "Cloud Solutions & DevOps",
    description: "Scalable infrastructure for modern applications.",
  },
  {
    icon: <Code2 className="w-8 h-8 text-[#3B82F6]" />,
    title: "AI & Automation Systems",
    description: "Intelligent solutions to drive efficiency.",
  },
];

const marketingServices = [
  {
    icon: <LineChart className="w-8 h-8 text-[#6366F1]" />,
    title: "Performance Marketing",
    description: "ROI-centered ads across major networks.",
  },
  {
    icon: <Search className="w-8 h-8 text-[#6366F1]" />,
    title: "SEO & Search Growth",
    description: "Rank higher and capture organic traffic.",
  },
  {
    icon: <Share2 className="w-8 h-8 text-[#6366F1]" />,
    title: "Social Media Strategy",
    description: "Engaging content and community growth.",
  },
  {
    icon: <Target className="w-8 h-8 text-[#6366F1]" />,
    title: "Paid Advertising",
    description: "Targeted campaigns on Meta, Google, LinkedIn.",
  },
  {
    icon: <BarChart className="w-8 h-8 text-[#6366F1]" />,
    title: "Analytics & Growth",
    description: "Data-driven insights to optimize performance.",
  },
  {
    icon: <FileCode className="w-8 h-8 text-[#6366F1]" />,
    title: "Brand Strategy",
    description: "Positioning your brand for market leadership.",
  },
];

export default function ServicesDetailed() {
  return (
    <section 
      className="py-20"
      style={{
        backgroundImage: `radial-gradient(rgba(0, 0, 0, 0.1) 1.5px, transparent 1px)`,
        backgroundSize: "30px 30px",
      }}
    >
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Software & Tech */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <SectionSubheading text="Technology" animated />
            <h2 className="font-montserrat text-3xl md:text-4xl font-bold text-gray-900 mt-4">
              Software & Product Engineering
            </h2>
            <p className="font-inter text-gray-600 mt-4 max-w-2xl mx-auto">
              We build robust, scalable digital solutions that power your
              business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {softwareServices.map((service, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-[#3B82F6]/30 group"
              >
                <div className="mb-6 bg-linear-to-br from-[#3B82F6]/10 via-[#6366F1]/10 to-[#4F46E5]/10 w-16 h-16 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="font-montserrat font-bold text-xl text-gray-900 mb-3 group-hover:bg-linear-to-r group-hover:from-[#3B82F6] group-hover:via-[#6366F1] group-hover:to-[#4F46E5] group-hover:bg-clip-text group-hover:text-transparent transition-all">
                  {service.title}
                </h3>
                <p className="font-inter text-gray-600 leading-relaxed text-sm">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Marketing & Growth */}
        <div>
          <div className="text-center mb-12">
            <SectionSubheading text="Growth" animated />
            <h2 className="font-montserrat text-3xl md:text-4xl font-bold text-gray-900 mt-4">
              Marketing & Brand Strategy
            </h2>
            <p className="font-inter text-gray-600 mt-4 max-w-2xl mx-auto">
              Data-driven strategies to amplify your reach and maximize ROI.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {marketingServices.map((service, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-[#6366F1]/30 group"
              >
                <div className="mb-6 bg-linear-to-br from-[#3B82F6]/10 via-[#6366F1]/10 to-[#4F46E5]/10 w-16 h-16 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="font-montserrat font-bold text-xl text-gray-900 mb-3 group-hover:bg-linear-to-r group-hover:from-[#3B82F6] group-hover:via-[#6366F1] group-hover:to-[#4F46E5] group-hover:bg-clip-text group-hover:text-transparent transition-all">
                  {service.title}
                </h3>
                <p className="font-inter text-gray-600 leading-relaxed text-sm">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
