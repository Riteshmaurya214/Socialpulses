"use client";
import React from 'react';
import { MarqueeRow } from "./MarqueeRow";
import { TestimonialCard } from "./TestimonialCard";

export interface Testimonial {
  name: string;
  role: string;
  content: string;
  avatar: string;
  videoUrl?: string;
}

interface TestimonialMarqueeProps {
  testimonials?: Testimonial[];
}

const defaultTestimonials: Testimonial[] = [
  { name: "Jayesh garg", role: "Founder of Margdarshan", content: "Working with this team has been a game-changer for our brand. Their creative vision and solution driven development is unmatched.", avatar: "https://res.cloudinary.com/dtcuucq3i/image/upload/v1773272510/avatar_rcujsy.png" },
  { name: "Manish", role: "Founder of GatePlus", content: "The attention to detail and ability to capture our requirement and converting it to technlogy and integrating with existing solution was incredible.", avatar: "https://res.cloudinary.com/dtcuucq3i/image/upload/v1773272510/avatar_rcujsy.png", videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-abstract-flowing-teal-and-blue-9118-large.mp4" },
  { name: "Arun Kumar Sharma", role: "Utsav Head", content: "Unique flair and striking brand identity. They transformed our ideas into something cohesive.", avatar: "https://res.cloudinary.com/dtcuucq3i/image/upload/v1773272510/avatar_rcujsy.png", videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-stars-in-space-background-1610-large.mp4" },
  { name: "Hariom Singh", role: "CEO of Ping-Me app", content: "The custom code development added a unique flair to our chat app. Exceptional quality.", avatar: "https://res.cloudinary.com/dtcuucq3i/image/upload/v1773272510/avatar_rcujsy.png" },
];

const enforceMinItems = (items: Testimonial[], min: number) => {
  if (items.length === 0) return items;
  let result = [...items];
  while (result.length < min) {
    result = [...result, ...items];
  }
  return result;
};

const TestimonialMarquee = ({ testimonials }: TestimonialMarqueeProps) => {
  const displayTestimonials = testimonials && testimonials.length > 0 ? testimonials : defaultTestimonials;
  
  const mid = Math.ceil(displayTestimonials.length / 2);
  const row1 = enforceMinItems(displayTestimonials.slice(0, mid), 6);
  const row2 = enforceMinItems(displayTestimonials.slice(mid), 6);

  return (
    <section className="overflow-hidden">

      <div className="flex flex-col gap-8">
        {/* Row 1: Right to Left (Negative velocity) */}
        {row1.length > 0 && (
          <MarqueeRow baseVelocity={-40}>
            {row1.map((t, i) => <TestimonialCard key={`row1-${i}`} {...t} />)}
          </MarqueeRow>
        )}

        {/* Row 2: Left to Right (Positive velocity) */}
        {/* {row2.length > 0 && (
          <MarqueeRow baseVelocity={40}>
            {row2.map((t, i) => <TestimonialCard key={`row2-${i}`} {...t} />)}
          </MarqueeRow>
        )} */}
      </div>
    </section>
  );
};

export default TestimonialMarquee;