import React from "react";

export interface Reason {
  id: string;
  title: string;
  description: string;
  titleColorClass: string;
}

export interface WhyChooseUsProps {
  titlePrefix?: string;
  titleHighlight?: string;
  titleSuffix?: string;
  reasons?: Reason[];
}

const colorMap: Record<string, {
  bg: string;
  dot: string;
  watermark: string;
  hoverDot: string;
}> = {
  // amber / yellow
  "text-amber-600":  { bg: "#fffbeb", dot: "rgba(217,119,6,0.12)",  watermark: "rgba(217,119,6,0.15)",  hoverDot: "rgba(217,119,6,0.35)"  },
  "text-yellow-600": { bg: "#fefce8", dot: "rgba(202,138,4,0.12)",   watermark: "rgba(202,138,4,0.15)",   hoverDot: "rgba(202,138,4,0.35)"   },
  // cyan / teal / sky / blue
  "text-cyan-600":   { bg: "#ecfeff", dot: "rgba(8,145,178,0.12)",   watermark: "rgba(8,145,178,0.15)",   hoverDot: "rgba(8,145,178,0.35)"   },
  "text-teal-600":   { bg: "#f0fdfa", dot: "rgba(13,148,136,0.12)",  watermark: "rgba(13,148,136,0.15)",  hoverDot: "rgba(13,148,136,0.35)"  },
  "text-sky-600":    { bg: "#f0f9ff", dot: "rgba(2,132,199,0.12)",   watermark: "rgba(2,132,199,0.15)",   hoverDot: "rgba(2,132,199,0.35)"   },
  "text-blue-600":   { bg: "#eff6ff", dot: "rgba(37,99,235,0.12)",   watermark: "rgba(37,99,235,0.15)",   hoverDot: "rgba(37,99,235,0.35)"   },
  // green / emerald / lime
  "text-green-600":  { bg: "#f0fdf4", dot: "rgba(22,163,74,0.12)",   watermark: "rgba(22,163,74,0.15)",   hoverDot: "rgba(22,163,74,0.35)"   },
  "text-emerald-600":{ bg: "#ecfdf5", dot: "rgba(5,150,105,0.12)",   watermark: "rgba(5,150,105,0.15)",   hoverDot: "rgba(5,150,105,0.35)"   },
  // orange / red
  "text-orange-500": { bg: "#fff7ed", dot: "rgba(249,115,22,0.12)",  watermark: "rgba(249,115,22,0.15)",  hoverDot: "rgba(249,115,22,0.35)"  },
  "text-orange-600": { bg: "#fff7ed", dot: "rgba(234,88,12,0.12)",   watermark: "rgba(234,88,12,0.15)",   hoverDot: "rgba(234,88,12,0.35)"   },
  "text-red-600":    { bg: "#fef2f2", dot: "rgba(220,38,38,0.12)",   watermark: "rgba(220,38,38,0.15)",   hoverDot: "rgba(220,38,38,0.35)"   },
  // pink / rose
  "text-pink-600":   { bg: "#dbaec7", dot: "rgba(219,39,119,0.12)",  watermark: "rgba(219,39,119,0.15)",  hoverDot: "rgba(219,39,119,0.35)"  },
  "text-rose-600":   { bg: "#fff1f2", dot: "rgba(225,29,72,0.12)",   watermark: "rgba(225,29,72,0.15)",   hoverDot: "rgba(225,29,72,0.35)"   },
  // purple / violet / indigo
  "text-purple-600": { bg: "#faf5ff", dot: "rgba(147,51,234,0.12)",  watermark: "rgba(147,51,234,0.15)",  hoverDot: "rgba(147,51,234,0.35)"  },
  "text-violet-600": { bg: "#f5f3ff", dot: "rgba(124,58,237,0.12)",  watermark: "rgba(124,58,237,0.15)",  hoverDot: "rgba(124,58,237,0.35)"  },
  "text-indigo-600": { bg: "#eef2ff", dot: "rgba(79,70,229,0.12)",   watermark: "rgba(79,70,229,0.15)",   hoverDot: "rgba(79,70,229,0.35)"   },
};

export default function WhyChooseUsSection({
  titlePrefix = "Why Choose Us for",
  titleHighlight = "AI Development and Consulting",
  titleSuffix = "?",
  reasons = [
    {
      id: "1",
      title: "Expertise and Experience",
      description: "Our team of experienced professionals has a deep understanding of the latest technologies and trends in AI development.",
      titleColorClass: "text-amber-600",
    },
    {
      id: "2",
      title: "Customization and Personalization",
      description: "We have the technical expertise, experience, and tools to help you create customized Artificial Intelligence Models for your specific business needs.",
      titleColorClass: "text-cyan-600",
    },
    {
      id: "3",
      title: "Quality of Work",
      description: "AI models built by our team not only meet the expectation of our clients but also matches the highest standards of performance and security.",
      titleColorClass: "text-green-600",
    },
    {
      id: "4",
      title: "Cost-effectiveness",
      description: "We help businesses customize their own Artificial Intelligence Models at reasonable rates so that you can reserve the capital for the expansion.",
      titleColorClass: "text-orange-500",
    },
    {
      id: "5",
      title: "Customer Support",
      description: "We provide excellent customer support with top-notch AI models to help you ensure that models keep performing well without any errors.",
      titleColorClass: "text-pink-600",
    },
    {
      id: "6",
      title: "30+ Successful Model Develop",
      description: "Our track record of developing 30+ successful AI models demonstrates our commitment to delivering innovative solutions that drive business growth.",
      titleColorClass: "text-purple-600",
    },
  ],
}: WhyChooseUsProps) {
  return (
    <section
      className="w-full py-24 bg-white"
      style={{
        backgroundImage: `radial-gradient(rgba(0,0,0,0.1) 1.5px, transparent 1px)`,
        backgroundSize: "30px 30px",
      }}
    >
      {/* Keyframes for hover dot animation */}
      <style>{`
        @keyframes dotPulse {
          0%, 100% { background-size: 28px 28px; opacity: 1; }
          50%       { background-size: 22px 22px; opacity: 0.6; }
        }
        @keyframes dotMove {
          0%   { background-position: 0px 0px;   }
          50%  { background-position: 14px 14px; }
          100% { background-position: 0px 0px;   }
        }
        .why-card .dot-layer {
          transition: background-image 0.3s ease;
        }
        .why-card:hover .dot-layer {
          animation: dotMove 4s ease-in-out infinite;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-4xl md:text-5xl font-extrabold font-montserrat text-gray-900 tracking-tight">
            {titlePrefix}{" "}
            <span className="text-blue-600 underline decoration-blue-200 decoration-[4px] underline-offset-12">
              {titleHighlight}
            </span>
            {titleSuffix}
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {reasons.map((reason) => {
            const colors = colorMap[reason.titleColorClass] ?? {
              bg: "#f9fafb",
              dot: "rgba(0,0,0,0.08)",
              watermark: "rgba(0,0,0,0.08)",
              hoverDot: "rgba(0,0,0,0.2)",
            };

            return (
              <div
                key={reason.id}
                className="why-card relative overflow-hidden rounded-2xl border border-gray-100 hover:shadow-xl hover:border-gray-200 transition-all duration-300 group"
                style={{ backgroundColor: colors.bg }}
              >
                {/* Layer 1: Colored dot grid — animates on hover */}
                <div
                  className="dot-layer absolute inset-0 z-0"
                  style={{
                    backgroundImage: `radial-gradient(${colors.dot} 1.5px, transparent 1px)`,
                    backgroundSize: "28px 28px",
                  }}
                />

                {/* Layer 2: group-hover me brighter dots overlay */}
                <div
                  className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    backgroundImage: `radial-gradient(${colors.hoverDot} 1.5px, transparent 1px)`,
                    backgroundSize: "28px 28px",
                    animation: "dotMove 4s ease-in-out infinite",
                  }}
                />

                {/* Layer 3: Black gradient overlay — left heavy, right light */}
                <div
                  className="absolute inset-0 z-[1] pointer-events-none"
                  style={{
                    background: "linear-gradient(to right, rgba(0,0,0,0.10) 0%, rgba(0,0,0,0.04) 50%, rgba(0,0,0,0.00) 100%)",
                  }}
                />

                {/* Giant Watermark Number */}
                <div className="absolute right-4 top-1/2 -translate-y-1/2 select-none pointer-events-none z-[2]">
                  <span
                    className="text-[8rem] md:text-[10rem] font-black font-montserrat"
                    style={{ color: colors.watermark }}
                  >
                    {reason.id}
                  </span>
                </div>

                {/* Card Content */}
                <div className="relative z-[3] max-w-[85%] p-8 md:p-10">
                  <h3 className={`text-xl md:text-2xl font-bold font-montserrat mb-4 ${reason.titleColorClass}`}>
                    {reason.title}
                  </h3>
                  <p className="text-gray-700 font-inter leading-relaxed text-base md:text-lg">
                    {reason.description}
                  </p>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}