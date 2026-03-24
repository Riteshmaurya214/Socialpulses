"use client";
import React, { useRef } from "react";
import Image from "next/image";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useTransform,
} from "motion/react";
import { useElementWidth } from "@/hooks/useElementSize";

// --- Component: Single Marquee Row ---
interface MarqueeRowProps {
  children: React.ReactNode;
  baseVelocity: number;
  className?: string;
}

const MarqueeRow = ({
  children,
  baseVelocity,
  className = "",
}: MarqueeRowProps) => {
  const baseX = useMotionValue(0);
  const contentRef = useRef<HTMLDivElement>(null);
  const contentWidth = useElementWidth(contentRef);

  const speedFactor = useRef(1);

  const x = useTransform(baseX, (v) => {
    if (contentWidth === 0) return "0px";
    const wrapped = ((v % contentWidth) + contentWidth) % contentWidth;
    return `${wrapped - contentWidth}px`;
  });

  useAnimationFrame((t, delta) => {
    let moveBy = baseVelocity * (delta / 1000) * speedFactor.current;
    baseX.set(baseX.get() + moveBy);
  });

  const handleMouseEnter = () => {
    speedFactor.current = 0.1;
  };

  const handleMouseLeave = () => {
    speedFactor.current = 1;
  };

  return (
    <div
      className="overflow-hidden whitespace-nowrap"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div className={`flex ${className}`} style={{ x }}>
        <div ref={contentRef} className="flex shrink-0 gap-4 px-2">
          {children}
        </div>
        <div className="flex shrink-0 gap-4 px-2">{children}</div>
        <div className="flex shrink-0 gap-4 px-2">{children}</div>
      </motion.div>
    </div>
  );
};

// --- Component: Project Card ---
const ProjectCard = React.memo(
  ({
    title,
    category,
    image,
  }: {
    title: string;
    category: string;
    image: string;
  }) => {
    return (
      <div className="group relative h-[300px] w-[280px] shrink-0 overflow-hidden md:h-[300px] md:w-[280px]">
        <Image
          src={image}
          alt={`${title} - ${category} project showcase`}
          fill
          sizes="(max-width: 768px) 280px, 360px"
          className="object-contain transition-transform duration-500 group-hover:scale-105"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCgAA//2Q=="
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/95 via-blue-400/5 to-white-100/90" />

        <div className="absolute bottom-0 left-0 p-8 text-left">
          <span className="mb-2 inline-block rounded-full bg-white/20 px-3 py-1 text-xs font-medium text-white backdrop-blur-md">
            {category}
          </span>
          <h3 className="text-3xl font-bold text-white">{title}</h3>
        </div>
      </div>
    );
  },
);

ProjectCard.displayName = "ProjectCard";

// --- Main Section Component ---
const ProjectMarquee = () => {
  const projectsRow1 = [
    {
      title: "Gate Plus",
      category: "Ed-techh",
      image:
        "https://res.cloudinary.com/dtcuucq3i/image/upload/v1773270104/Group_38375_1_xlvltj.png",
    },
    {
      title: "Ping Me",
      category: "Social & Communication",
      image:
        "https://res.cloudinary.com/dtcuucq3i/image/upload/v1773270102/Group_38376_e1pkgb.png",
    },
    {
      title: "Margdarshan",
      category: "Ed-tech",
      image:
        "https://res.cloudinary.com/dtcuucq3i/image/upload/v1773270103/Group_38375_imjfln.png",
    },
  ];

  // const projectsRow2 = [
  //   {
  //     title: "Cyber Drift",
  //     category: "Development",
  //     image:
  //       "https://images.unsplash.com/photo-1614728853970-30910236a0dc?q=80&w=2692&auto=format&fit=crop",
  //   },
  //   {
  //     title: "Quantum Sol",
  //     category: "SaaS",
  //     image:
  //       "https://images.unsplash.com/photo-1639322537228-ad7127ef94f4?q=80&w=2664&auto=format&fit=crop",
  //   },
  //   {
  //     title: "Flow State",
  //     category: "Mobile",
  //     image:
  //       "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2670&auto=format&fit=crop",
  //   },
  // ];

  return (
    // 1. Changed bg-black to bg-white
    <section className="bg-white py-4 relative overflow-hidden">
      <div className="flex flex-col gap-8 relative z-0">
        {/* 2. Changed from-black to from-white (Left Fade) */}
        <div className="pointer-events-none absolute top-0 bottom-0 left-0 w-1 md:w-4 bg-gradient-to-r from-white to-transparent z-10" />

        {/* 3. Changed from-black to from-white (Right Fade) */}
        <div className="pointer-events-none absolute top-0 bottom-0 right-0 w-1 md:w-4 bg-gradient-to-l from-white to-transparent z-10" />

        <MarqueeRow baseVelocity={50}>
          {projectsRow1.map((proj, idx) => (
            <ProjectCard key={idx} {...proj} />
          ))}
        </MarqueeRow>

        {/* <MarqueeRow baseVelocity={-50}>
          {projectsRow2.map((proj, idx) => (
            <ProjectCard key={idx} {...proj} />
          ))}
        </MarqueeRow> */}
      </div>
    </section>
  );
};

export default ProjectMarquee;
