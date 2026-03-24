"use client";

import { ArrowUpRight, Sparkles, Cpu, Megaphone, Search } from "lucide-react";
import Link from "next/link";

import { caseStudies } from "@/constants/case-studies";

interface ServiceCard {
  id: string | number;
  title: string;
  description: string;
  href: string;
  image: string;
  icon: string;
}

const iconMap: { [key: string]: any } = {
  Sparkles: Sparkles,
  Cpu: Cpu,
  Megaphone: Megaphone,
  Search: Search,
};

const services: ServiceCard[] = caseStudies.slice(0, 4).map((cs) => ({
  id: cs.id,
  title: cs.title,
  description: cs.description,
  href: `/casestudies/${cs.id}`,
  image: cs.image,
  icon: cs.icon,
}));

const IgniteBrandSection = () => {
  return (
    <section className="w-full py-24 px-4">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-4xl lg:text-[40px] font-bold font-montserrat text-gray-900 mb-2">
            Ignite Your Brand.
          </h2>
          <p className="text-4xl md:text-4xl lg:text-[40px] font-bold font-montserrat">
            <span className="bg-gradient-to-r from-[#3B82F6] via-[#6366F1] to-[#4F46E5] bg-clip-text text-transparent">
              Inspire Your Audience
            </span>
            <span className="text-gray-900">.</span>
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {services.map((service) => (
            <Link
              key={service.id}
              href={service.href}
              className="group relative p-8 rounded-xl border border-gray-100 bg-white text-gray-900 transition-all duration-500 ease-out shadow-sm hover:-translate-y-3 flex flex-col min-h-[320px] overflow-hidden hover:text-white"
            >
              <div className="w-full h-full absolute inset-0 z-0 opacity-100 group-hover:opacity-0 transition-opacity duration-500 flex items-center justify-center">
                {service.icon && iconMap[service.icon] ? (
                  (() => {
                    const DynamicIcon = iconMap[service.icon];
                    return <DynamicIcon className="w-45 h-45 text-black/10" />;
                  })()
                ) : (
                  <ArrowUpRight className="w-45 h-45 text-black/10" />
                )}
              </div>

              {/* Image Background Overlay */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
                style={{
                  backgroundImage: `url(${service.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              {/* Dark Overlay on bottom only */}
              <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />

              {/* Arrow Button */}
              <div className="flex justify-end mb-auto relative z-10">
                <div className="p-3 rounded-lg bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-700 transition-all duration-300">
                  <ArrowUpRight className="w-5 h-5 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="mt-8 relative z-10">
                <h3 className="text-xl font-bold font-montserrat mb-3 leading-tight transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="font-inter text-sm leading-relaxed text-gray-600 transition-colors duration-300 group-hover:text-white/90">
                  {service.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IgniteBrandSection;
