"use client";
import { useLayoutEffect, useState } from "react";

/**
 * Custom hook to measure the width of an element dynamically.
 * Updates on window resize events.
 *
 * @param ref - React ref object pointing to the element to measure
 * @returns The current width of the element in pixels
 */
export function useElementWidth<T extends HTMLElement>(
  ref: React.RefObject<T | null>,
): number {
  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    function updateWidth() {
      if (ref.current) {
        setWidth(ref.current.offsetWidth);
      }
    }

    updateWidth();
    window.addEventListener("resize", updateWidth);

    return () => window.removeEventListener("resize", updateWidth);
  }, [ref]);

  return width;
}

/**
 * Custom hook to measure the height of an element dynamically.
 * Updates on window resize events.
 *
 * @param ref - React ref object pointing to the element to measure
 * @returns The current height of the element in pixels
 */
export function useElementHeight<T extends HTMLElement>(
  ref: React.RefObject<T | null>,
): number {
  const [height, setHeight] = useState(0);

  useLayoutEffect(() => {
    function updateHeight() {
      if (ref.current) {
        setHeight(ref.current.offsetHeight);
      }
    }

    updateHeight();
    window.addEventListener("resize", updateHeight);

    return () => window.removeEventListener("resize", updateHeight);
  }, [ref]);

  return height;
}
