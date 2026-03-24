import React from "react";
import { SectionSubheading } from "@/components/ui/SectionSubheading";
import { Quote } from "lucide-react";

const testimonials = [
  {
    text: "Social Pulse Studios transformed our entire digital ecosystem and helped us scale faster than expected.",
    author: "Enterprise Client",
    role: "Director of Technology",
  },
  {
    text: "From software to marketing, they handled everything end-to-end with outstanding results.",
    author: "Startup Founder",
    role: "CEO",
  },
  {
    text: "Our leads increased by 4x within months. Their strategy and execution are unmatched.",
    author: "Marketing Head",
    role: "CMO",
  },
];

export default function AboutTestimonials() {
  return (
    <section 
      className="py-20 "
      style={{
        backgroundImage: `radial-gradient(rgba(0, 0, 0, 0.1) 1.5px, transparent 1px)`,
        backgroundSize: "30px 30px",
      }}
    >
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <SectionSubheading text="Testimonials" animated />
          <h2 className="font-montserrat text-4xl lg:text-5xl font-bold text-gray-900 mt-4 leading-tight">
            What Our Clients Say
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 relative"
            >
              <Quote className="w-10 h-10 text-indigo-100 absolute top-8 left-8" />
              <div className="pt-8">
                <p className="font-inter text-gray-700 text-lg leading-relaxed mb-6 italic">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 font-bold text-lg font-montserrat">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 font-montserrat">
                      {testimonial.author}
                    </h4>
                    <span className="text-gray-500 text-sm font-inter">
                      {testimonial.role}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
