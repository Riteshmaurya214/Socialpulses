import React from "react";
import Image from "next/image";
import { SectionSubheading } from "@/components/ui/SectionSubheading";

export default function AboutStory() {
  return (
    <section className="py-20  bg-white overflow-hidden"
     style={{
        // Using an off-black with 10% opacity for the dots to keep it subtle
        backgroundImage: `radial-gradient(rgba(0, 0, 0, 0.1) 1.5px, transparent 1px)`,
        backgroundSize: "30px 30px",
      }}
    >
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content Side */}
          <div className="space-y-6 order-2 lg:order-1">
            <SectionSubheading text="Our Story" animated />

            <h2 className="font-montserrat text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Transforming Brands Through{" "}
              <span className="bg-linear-to-r from-[#3B82F6] via-[#6366F1] to-[#4F46E5] bg-clip-text text-transparent">
                Innovation
              </span>
            </h2>

            <p className="font-inter text-lg text-gray-600 leading-relaxed">
              Social Pulse Studios is a full-service digital transformation
              company delivering software engineering, product development, and
              performance marketing under one strategic ecosystem.
            </p>

            <p className="font-inter text-lg text-gray-600 leading-relaxed">
              We partner with startups, enterprises, and growing brands to build
              scalable technology and drive measurable business growth.
            </p>


          </div>

          {/* Image Side */}
          <div className="relative order-1 lg:order-2">
            <div className="aspect-[4/5] relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/image/about-team.jpg" // Using existing image
                alt="Our Team at Work"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60"></div>
            </div>

            {/* Floating Experience Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl max-w-[200px] hidden md:block border border-gray-100">
              <div className="bg-linear-to-r from-[#3B82F6] via-[#6366F1] to-[#4F46E5] bg-clip-text text-transparent font-bold text-4xl font-montserrat mb-1">
                10+
              </div>
              <div className="text-gray-900 font-bold text-sm leading-tight font-inter">
                Years of combined experience
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
