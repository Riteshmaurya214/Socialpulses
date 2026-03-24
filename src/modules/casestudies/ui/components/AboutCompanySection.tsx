import React from "react";
import Image from "next/image";
import { CaseStudy } from "@/constants/case-studies";

interface AboutCompanyProps {
  caseStudy?: CaseStudy;
  titlePrefix?: string;
  titleHighlight?: string;
  leadText?: string;
  paragraphs?: string[];
  imageSrc?: string;
  imageAlt?: string;
}

export default function AboutCompanySection({
  caseStudy,
  titlePrefix = "Best",
  titleHighlight = "AI Development Company",
  leadText = "Join the ranks of our satisfied clients – as the top AI development company in USA, Europe, UK and GCC, we deliver innovative AI solutions.",
  paragraphs = [
    "We pride ourselves on being at the forefront of AI development. Our team of experts has years of experience designing, building, and implementing cutting-edge AI solutions for clients across various industries.",
    "Whether you’re looking to automate processes, optimize operations, or gain insights from data, you can achieve your AI goals with our expertise and technology.",
  ],
  // Note: Replace with your dark continuous-line SVG/PNG asset for the light theme
  imageSrc = "/image/people3.png", 
  imageAlt = "Team working on laptop continuous line art",
}: AboutCompanyProps) {
  const displayTitlePrefix = caseStudy?.aboutSection?.titlePrefix || titlePrefix;
  const displayTitleHighlight = caseStudy?.aboutSection?.titleHighlight || titleHighlight;
  const displayLeadText = caseStudy?.aboutSection?.leadText || leadText;
  const displayParagraphs = caseStudy?.aboutSection?.paragraphs || paragraphs;

  return (
    <section className="w-full py-20 bg-white bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/image/logo-bg.png')" }}
      >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Centered Headline */}
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-4xl md:text-5xl font-extrabold font-montserrat text-gray-900 tracking-tight">
            {displayTitlePrefix}{" "}
            <span className="text-blue-600 underline decoration-blue-200 decoration-[4px] underline-offset-12">
              {displayTitleHighlight}
            </span>
          </h2>
        </div>

        {/* Content & Illustration Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Text Content */}
          <div className="flex flex-col space-y-6">
            <p className="text-xl md:text-2xl font-bold text-gray-900 leading-snug font-inter">
              {displayLeadText}
            </p>
            
            <div className="space-y-6">
              {displayParagraphs.map((text, index) => (
                <p 
                  key={index} 
                  className="text-lg text-gray-600 leading-relaxed font-inter"
                >
                  {text}
                </p>
              ))}
            </div>
          </div>

          {/* Right Column: Line Art Illustration */}
          <div className="relative w-full aspect-square md:aspect-4/3 lg:aspect-auto lg:h-[400px] flex items-center justify-center">
            {/* In the screenshot, this is a white line on a dark background. 
              For your light theme, make sure your image asset uses a dark gray/black line. 
            */}
            <div className="relative w-full h-full max-w-[500px]">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
