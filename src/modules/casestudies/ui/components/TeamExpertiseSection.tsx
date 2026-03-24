import React from "react";

interface TeamExpertiseProps {
  headline?: string;
  paragraphs?: string[];
}

export default function TeamExpertiseSection({
  headline = "Create high-quality AI Models with a Highly-experienced Development Team",
  paragraphs = [
    "Our agency has the expertise and experience to deliver high-quality AI solutions that meet your unique needs. Our models are accurate and efficient, designed to provide quick and reliable insights.",
    "We use rigorous testing and validation processes to ensure the effectiveness of our models and are committed to continuously improving our solutions."
  ]
}: TeamExpertiseProps) {
  return (
    <section className="w-full py-24 bg-white border-y border-gray-100 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/image/logo-bg.png')" }}
      >
      <div className="max-w-7xl mx-auto px-8 md:px-2 lg:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Hollow Headline */}
          <div>
            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-black font-montserrat leading-[1.2] tracking-tight"
              style={{
                // Using a dark gray stroke for the light theme
                WebkitTextStroke: "2px #374151", 
                color: "transparent",
              }}
            >
              {headline}
            </h2>
          </div>

          {/* Right Column: Text Content */}
          <div className="flex flex-col space-y-6 border-l-4 border-orange-100 pl-6 lg:border-none lg:pl-0">
            {paragraphs.map((text, index) => (
              <p
                key={index}
                className="text-lg md:text-xl text-gray-600 font-inter leading-relaxed"
              >
                {text}
              </p>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
}
