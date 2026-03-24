"use client";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useTransform,
} from "motion/react";
import React, { useRef } from "react";
import { useElementWidth } from "@/hooks/useElementSize";

interface MarqueeRowProps {
  children: React.ReactNode;
  baseVelocity: number;
}

export const MarqueeRow = ({ children, baseVelocity }: MarqueeRowProps) => {
  const baseX = useMotionValue(0);
  const contentRef = useRef<HTMLDivElement>(null);
  const contentWidth = useElementWidth(contentRef);
  const speedFactor = useRef(1);

  useAnimationFrame((t, delta) => {
    let moveBy = baseVelocity * (delta / 1000) * speedFactor.current;
    baseX.set(baseX.get() + moveBy);
  });

  // Seamless wrap logic based on real content width
  const x = useTransform(baseX, (v) => {
    if (contentWidth === 0) return "0px";
    const wrapped = ((v % contentWidth) + contentWidth) % contentWidth;
    return `${wrapped - contentWidth}px`;
  });

  return (
    <div
      className="flex w-full overflow-hidden whitespace-nowrap"
      onMouseEnter={() => (speedFactor.current = 0.2)} // Slow down on hover
      onMouseLeave={() => (speedFactor.current = 1)}
    >
      <motion.div className="flex" style={{ x }}>
        {/* We render children multiple times to ensure the loop is filled */}
        <div ref={contentRef} className="flex gap-6 px-3">
          {children}
        </div>
        <div className="flex gap-6 px-3">{children}</div>
        <div className="flex gap-6 px-3">{children}</div>
        <div className="flex gap-6 px-3">{children}</div>
      </motion.div>
    </div>
  );
};
