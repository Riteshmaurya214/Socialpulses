"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

const CustomCursor = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  const springConfig = { damping: 25, stiffness: 400, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Check if device is mobile (screen width < 768px or touch device)
    const checkIsMobile = () => {
      const isSmallScreen = window.innerWidth < 768;
      const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      setIsMobile(isSmallScreen || isTouchDevice);
      return isSmallScreen || isTouchDevice;
    };

    // Initial check
    const mobile = checkIsMobile();
    setIsVisible(true);

    // Don't set up cursor tracking on mobile devices
    if (mobile) {
      window.addEventListener("resize", checkIsMobile);
      return () => {
        window.removeEventListener("resize", checkIsMobile);
      };
    }

    // Set up cursor tracking for desktop devices
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 6);
      cursorY.set(e.clientY - 6);
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("resize", checkIsMobile);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("resize", checkIsMobile);
    };
  }, [cursorX, cursorY]);

  // Don't render on mobile devices
  if (!isVisible || isMobile) return null;

  return (
    <motion.div className="pointer-events-none fixed top-0 left-0 z-[9999] h-3 w-3 rounded-full bg-gradient-to-r from-[#3B82F6] via-[#6366F1] to-[#4F46E5] shadow-[0_0_18px_rgba(79,70,229,0.7)]" style={{ x: cursorXSpring, y: cursorYSpring, }} />
  );
};

export default CustomCursor;
