import SectionHeader from "@/components/section/Sectionheader";
import SectionTitle from "@/components/section/Sectiontitle ";
import { Star } from "lucide-react";
import React from "react";
import ServicesMarquee from "../components/ServicesMarquee";
import TestimonialMarquee, { Testimonial } from "../components/TestimonialMarquee";

interface TestimonialViewProps {
  testimonials?: Testimonial[];
}

const TestimonialView = ({ testimonials }: TestimonialViewProps) => {
  return (
    <div
      className="w-full py-10 px-4 bg-contain bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/image/logo-bg.png')" }}
    >
      <div className="w-full flex justify-center gap-2 flex-col items-center">
        <SectionHeader icon={Star} title="Testinomials" />

        <SectionTitle
          className="flex items-center justify-center flex-col "
          title="What Our Clients Are Saying"
          description="Discover how our design solutions have transformed businesses and brought visions to life through our clients' experiences."
        />
      </div>

      <div className="w-full mt-12">
        <TestimonialMarquee testimonials={testimonials} />
      </div>
    </div>
  );
};

export default TestimonialView;
