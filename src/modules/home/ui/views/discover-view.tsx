"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Play, X } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";
import { SectionSubheading } from "@/components/ui/SectionSubheading";

export function DiscoverView() {
  const containerRef = useRef(null);
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  return (
    <section ref={containerRef} className="md:py-20 bg-white overflow-hidden"
    
    style={{
        // Using an off-black with 10% opacity for the dots to keep it subtle
        backgroundImage: `radial-gradient(rgba(0, 0, 0, 0.1) 1.5px, transparent 1px)`,
        backgroundSize: "30px 30px",
      }}>
      <div className="container max-w-7xl mx-auto px-4">
        {/* CHANGED: Grid cols adjusted to give image more space (1.3fr vs 1fr) */}
        <div className="grid lg:grid-cols-[1fr_1.3fr] gap-12 lg:gap-20 items-center">
          {/* --- LEFT SIDE: IMAGE (Now Bigger) --- */}

          <div className="space-y-6">
            {" "}
            {/* Reduced vertical spacing */}
            <div className="space-y-4">
              <SectionSubheading text="Discover service" />

              <h2 className="font-montserrat text-3xl md:text-4xl lg:text-[40px] font-bold mt-4 text-gray-900 leading-tight tracking-tighter">
                Your Journey to Brand Excellence{" "}
                <span className="bg-gradient-to-r from-[#3B82F6] via-[#6366F1] to-[#4F46E5] bg-clip-text text-transparent">
                  Starts Here.
                </span>{" "}
              </h2>

              {/* CHANGED: Slightly smaller body text, tighter leading */}
              <p className="font-inter text-gray-600 text-base leading-snug tracking-tight">
                We partner with startups, enterprises, and growing brands to
                build scalable technology and drive measurable business growth.
              </p>
            </div>
            {/* Action Buttons */}
            <div className="flex items-center gap-4">
              <a
                href="/services"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#3B82F6] via-[#6366F1] to-[#4F46E5] text-white font-montserrat font-semibold rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                Discover more
              </a>
              <div className="relative">
                {/* Pulse rings */}
                <span className="absolute inset-0 rounded-full bg-indigo-600 animate-ping opacity-55"></span>
                <span className="absolute inset-0 rounded-full bg-indigo-600 animate-pulse opacity-30"></span>

                <button
                  onClick={() => setIsVideoOpen(true)}
                  className="relative w-14 h-14 rounded-full bg-indigo-600 flex items-center justify-center hover:bg-indigo-700 transition-all duration-300 hover:scale-110 group"
                >
                  <Play className="w-6 h-6 text-white fill-white group-hover:scale-110 transition-transform" />
                </button>
              </div>
            </div>
          </div>
          {/* --- RIGHT SIDE: CONTENT (Compacted) --- */}

          <div className="relative pt-8">
            {/* Main Image */}
            <div className="relative rounded-sm overflow-hidden z-0">
              <Image
                src="/image/about-team.jpg"
                alt="Our Team"
                width={800}
                height={800}
                className="object-cover w-full inverted-radius"
              />

              {/* --- CUSTOM CLIP-PATH BUTTON --- */}
              <a href="/serviecs" className="absolute top-0 right-0 z-10 group">
                <div className="relative bg-[#1a1a1a] w-20 h-20 flex items-center justify-center transition-colors duration-300 group-hover:bg-indigo-600 rounded-xl">
                  <ArrowUpRight className="w-8 h-8 text-white transition-transform duration-300 group-hover:rotate-45" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {isVideoOpen && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setIsVideoOpen(false)}
        >
          <div
            className="relative w-full max-w-4xl aspect-video bg-black rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-all duration-300 group"
            >
              <X className="w-6 h-6 text-white group-hover:rotate-90 transition-transform duration-300" />
            </button>

            {/* YouTube Video Embed */}
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
              title="Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  );
}
