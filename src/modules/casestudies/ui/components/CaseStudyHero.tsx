"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CaseStudy } from "@/constants/case-studies";
import BookCallButton from "@/components/ui/BookCallButton";

interface CaseStudyHeroProps {
  caseStudy: CaseStudy;
}

export default function CaseStudyHero({ caseStudy }: CaseStudyHeroProps) {
  // Split the title into words — last word gets the hollow effect
  const words = caseStudy.title.split(" ");
  const mainWords = words.slice(0, -1).join(" ");
  const accentWord = words[words.length - 1];

  return (
    <section
     style={{
        // Using an off-black with 10% opacity for the dots to keep it subtle
        backgroundImage: `radial-gradient(rgba(0, 0, 0, 0.1) 1.5px, transparent 1px)`,
        backgroundSize: "30px 30px",
      }}
    className="relative w-full min-h-[80vh] bg-white overflow-hidden flex items-center">
      {/* Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center pt-20 pb-16">
        
        {/* Left Column: Content */}
        <div className="relative z-10 flex flex-col items-start">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold font-montserrat text-gray-900 leading-[1.1] tracking-tight">
            {mainWords} <br />
            {/* Hollow Text Effect for Light Theme */}
            <span 
              className="block mt-2"
              style={{
                WebkitTextStroke: "2px #111827", // Dark gray stroke for light theme
                color: "transparent",
              }}
            >
              {accentWord}
            </span>
          </h1>
          
          <p className="mt-6 text-lg text-gray-600 max-w-lg font-inter leading-relaxed">
            {caseStudy.fullDescription || caseStudy.description}
          </p>

          {/* Action Area */}
          <div className="mt-10 flex items-center gap-8">
            <BookCallButton text="Request a Quote" href="/contact" />

            {/* Decorative Arrow & Text */}
            <div className="hidden sm:flex flex-col items-center relative mt-8">
              <svg
                width="80"
                height="60"
                viewBox="0 0 100 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute -top-12 -left-6 text-gray-400"
              >
                <path
                  d="M5 10 C 30 10, 60 -10, 60 30 C 60 60, 30 70, 30 40 C 30 10, 80 10, 95 60"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeDasharray="4 4"
                  fill="none"
                />
                <circle cx="5" cy="10" r="2" fill="currentColor" />
                <path d="M90 55 L95 60 L100 55" stroke="currentColor" strokeWidth="1.5" fill="none" />
              </svg>
              <span className="text-sm font-medium text-gray-500 font-inter translate-y-4 translate-x-12">
                Are you ready?
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Visuals */}
        <div className="relative w-full flex justify-center lg:justify-end items-center mt-12 lg:mt-0 min-h-[500px]">
          {/* Large Gradient AI Background Letters */}
          {/* <div className="absolute inset-0 flex items-center justify-center lg:justify-end select-none z-0">
            <span className="text-[12rem] md:text-[18rem] lg:text-[22rem] font-bold leading-none tracking-tighter bg-linear-to-br from-pink-200 via-orange-100 to-orange-50 bg-clip-text text-transparent uppercase">
              {caseStudy.category.substring(0, 2)}
            </span>
          </div> */}

          {/* Image */}
          <div className="relative z-10 w-full max-w-[400px] lg:max-w-[500px] aspect-4/5">
            <Image
              src={caseStudy.image} 
              alt={caseStudy.title}
              fill
              className="object-contain drop-shadow-2xl"
              priority
            />
          </div>
        </div>

      </div>
    </section>
  );
}
