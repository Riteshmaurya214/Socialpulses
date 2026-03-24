import React from "react";
import Image from "next/image";

// Abstract process visuals for each step
const ProcessVisual = ({ className = "", index = 0 }: { className?: string; index?: number }) => {
  const visuals = [
    // 0: Search/Discovery abstract
    <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="45" cy="45" r="30" />
      <path d="M 65 65 L 95 95" strokeWidth="8" />
      <circle cx="45" cy="45" r="15" strokeDasharray="5 5" opacity="0.6" />
    </svg>,
    // 1: Data/Collection abstract
    <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <ellipse cx="50" cy="25" rx="35" ry="12" />
      <path d="M 15 25 L 15 75 A 35 12 0 0 0 85 75 L 85 25" />
      <path d="M 15 50 A 35 12 0 0 0 85 50" />
      <circle cx="50" cy="90" r="2" fill="currentColor" opacity="0.6" />
      <circle cx="30" cy="90" r="2" fill="currentColor" opacity="0.4" />
      <circle cx="70" cy="90" r="2" fill="currentColor" opacity="0.4" />
    </svg>,
    // 2: Model/Development abstract
    <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="20" cy="50" r="10" />
      <circle cx="50" cy="20" r="10" />
      <circle cx="50" cy="80" r="10" />
      <circle cx="80" cy="50" r="10" />
      <path d="M 28 44 L 42 26 M 28 56 L 42 74 M 58 26 L 72 44 M 58 74 L 72 56 M 50 30 L 50 70 M 30 50 L 70 50" opacity="0.6" />
    </svg>,
    // 3: Testing/Validation abstract
    <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M 25 50 L 45 70 L 75 30" />
      <circle cx="50" cy="50" r="45" strokeWidth="4" strokeDasharray="10 15" opacity="0.6" />
    </svg>
  ];
  return visuals[index % visuals.length];
};

// ─── NEW: Circuit Animation ───────────────────────────────────────────────────
const CircuitAnimation = () => {
  const dotCols = [2.25, 51.75, 101.25, 150.75, 200.25, 249.75, 299.25, 348.75];
  const dotRows = [2.25, 51.75, 101.25, 150.75, 200.25, 249.75, 299.25, 348.25];

  const paths: { d: string; len: number }[] = [
    { len: 148.5, d: "M 2.00,2.25   L 2.00,51.75  L 51.50,51.75  L 51.50,101.25" },
    { len: 148.8, d: "M 51.44,2.19  L 101.31,2.19 L 101.31,51.62 L 150.77,51.62" },
    { len: 198.6, d: "M 150.50,2.00 L 200.12,2.00 L 200.12,51.62 L 200.12,101.44 L 150.56,101.44" },
    { len: 197.6, d: "M 101.25,100.88 L 101.25,150.25 L 51.62,150.25 L 2.12,150.25 L 2.12,101.12" },
    { len:  49.8, d: "M 150.44,150.75 L 200.19,150.75" },
    { len: 198.5, d: "M 348.62,2.00 L 348.62,51.88 L 299.12,51.88 L 299.12,2.00 L 249.88,2.00" },
    { len:  99.6, d: "M 249.50,51.25 L 249.50,101.00 L 299.38,101.00" },
    { len: 148.5, d: "M 348.50,101.00 L 348.50,150.62 L 299.12,150.62 L 299.12,200.12" },
    { len:  49.9, d: "M 249.62,150.50 L 249.62,200.38" },
    { len: 198.5, d: "M 150.25,200.50 L 199.75,200.50 L 199.75,249.75 L 249.50,249.75 L 299.50,249.75" },
    { len:  49.8, d: "M 348.75,200.25 L 348.75,250.00" },
    { len: 198.0, d: "M 348.88,299.00 L 349.00,348.50 L 298.75,348.50 L 298.75,299.25 L 249.75,299.25" },
    { len:  98.5, d: "M 249.75,348.50 L 200.75,348.50 L 200.75,299.00" },
    { len: 147.8, d: "M 150.25,348.50 L 150.25,299.25 L 101.25,299.25 L 51.75,299.25" },
    { len: 149.0, d: "M 1.75,298.75  L 1.75,348.25  L 51.75,348.25  L 101.25,348.25" },
    { len:  99.2, d: "M 150.75,249.75 L 101.25,249.75 L 101.25,200.00" },
    { len: 148.5, d: "M 2.00,200.25  L 2.00,249.75  L 51.50,249.75  L 51.50,200.25" },
  ];

  return (
    <svg
      viewBox="0 0 351 351"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      aria-hidden="true"
    >
      <defs>
        <style>{`
          @keyframes circuit-sync {
            0%   { stroke-dashoffset: var(--L);    opacity: 0; }
            2%   {                                  opacity: 1; }
            30%  { stroke-dashoffset: 0;            opacity: 1; }
            50%  { stroke-dashoffset: 0;            opacity: 1; }
            78%  {                                  opacity: 1; }
            80%  { stroke-dashoffset: var(--negL); opacity: 0; }
            100% { stroke-dashoffset: var(--negL); opacity: 0; }
          }
        `}</style>
      </defs>

      {/* 8×8 dot grid — BLACK */}
      {dotRows.map((ry, ri) =>
        dotCols.map((rx, ci) => (
          <circle
            key={`d-${ri}-${ci}`}
            cx={rx}
            cy={ry}
            r="2.25"
            fill="#000000"
            opacity="0.55"
          />
        ))
      )}

      {/* 17 synchronized circuit paths — BLACK lines */}
      {paths.map(({ d, len }, i) => (
        <path
          key={`p-${i}`}
          d={d}
          fill="none"
          stroke="#000000"
          strokeWidth="1.8"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeDasharray={`${len} ${len * 2}`}
          style={
            {
              "--L":    `${len}px`,
              "--negL": `-${len}px`,
              animationName:           "circuit-sync",
              animationDuration:       "8s",
              animationDelay:          "0s",
              animationTimingFunction: "linear",
              animationIterationCount: "infinite",
              animationFillMode:       "both",
            } as React.CSSProperties
          }
        />
      ))}
    </svg>
  );
};
// ─────────────────────────────────────────────────────────────────────────────

interface ProcessStep {
  number: string;
  title: string;
  description: string;
  imageSrc: string;
}

interface ProcessSectionProps {
  titlePrefix?: string;
  titleHighlight?: string;
  titleSuffix?: string;
  subtitle?: string;
  steps?: ProcessStep[];
}

export default function ProcessSection({
  titlePrefix = "",
  titleHighlight = "AI Model Development",
  titleSuffix = " and Consulting Process",
  subtitle = "Effective AI development requires a solid process. Our proven consulting process ensures that we deliver high-quality, customized AI solutions that meet your unique needs and goals",
  steps = [
    {
      number: "01",
      title: "Discovery and Analysis",
      description:
        "We work with you to identify your specific needs and goals, as well as any challenges or limitations that may impact the AI solution.",
      imageSrc: "/case-study/process1.png",
    },
    {
      number: "02",
      title: "Data Collection and Preparation",
      description:
        "We gather and organize relevant data to ensure that the AI solution is accurate and effective.",
      imageSrc: "/case-study/process2.png",
    },
    {
      number: "03",
      title: "Model Development",
      description:
        "Our team designs and builds a custom AI model that addresses your specific needs and goals.",
      imageSrc: "/case-study/process3.png",
    },
    {
      number: "04",
      title: "Testing and Validation",
      description:
        "We thoroughly test and validate the AI model to ensure that it performs as intended and meets your requirements.",
      imageSrc: "/case-study/process3.png",
    },
  ],
}: ProcessSectionProps) {
  if (!steps || steps.length === 0) return null;

  return (
    // OLD: <section className="w-full py-24 overflow-hidden" style={{ backgroundImage: `radial-gradient(rgba(0, 0, 0, 0.1) 1.5px, transparent 1px)`, backgroundSize: "30px 30px" }}>
    <section className="relative w-full py-24 overflow-hidden">

      {/* NEW: Animated gradient background */}
      <style>{`
        @keyframes gradientMove {
          0%   { background-position: 0% 50%; }
          50%  { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .process-gradient-bg {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            135deg,
            rgba(191,219,254,0.35),
            rgba(165,180,252,0.35),
            rgba(196,181,253,0.35),
            rgba(147,197,253,0.35),
            rgba(129,140,248,0.35),
            rgba(125,211,252,0.35),
            rgba(196,181,253,0.35),
            rgba(165,180,252,0.35)
          );
          background-color: #ffffff;
          background-size: 300% 300%;
          animation: gradientMove 35s ease infinite;
        }
      `}</style>
      <div className="process-gradient-bg" />

      {/* OLD: <div className="max-w-7xl mx-auto px-4 sm:px-6"> */}
      <div className="max-w-6xl mx-auto px-8 md:px-16 lg:px-24 relative z-10">

        {/* Header Section */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold font-montserrat text-gray-900 tracking-tight mb-6">
            {titlePrefix}{" "}
            <span className="text-blue-600 underline decoration-blue-200 decoration-[4px] underline-offset-12">
              {titleHighlight}
            </span>
            {titleSuffix}
          </h2>
          <p className="text-lg text-gray-600 font-inter leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Process Steps */}
        <div className="space-y-24 md:space-y-32">
          {steps.map((step, index) => (
            // OLD: <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-end">
            <div
              key={index}
              className="relative flex items-start gap-8"
            >
              {/* ── LEFT: Image + Text ek saath ── */}
              <div className="flex flex-col md:flex-row items-start gap-1 flex-1">

                {/* Image */}
                <div className="relative  w-full max-w-[350px] shrink-0">
                  {/* Decorative wireframe/shadow backdrop */}
                  <div className="relative aspect-[3/4] w-full overflow-hidden bg-transparent">
                    <Image
                      src={step.imageSrc || "/case-study/process1.png"}
                      alt={step.title}
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, 30vw"
                    />
                  </div>
                </div>

                {/* Text */}
                <div className="flex-1 pt-2 md:pt-70">
                  <span
                    className="block text-6xl md:text-7xl font-black font-montserrat mb-4 leading-none"
                    style={{
                      WebkitTextStroke: "2px #000",
                      color: "transparent",
                    }}
                  >
                    {step.number}
                  </span>

                  <h3 className="text-2xl md:text-3xl font-bold font-montserrat text-gray-900 mb-4">
                    {step.title}
                  </h3>

                  <p className="text-lg text-gray-600 font-inter leading-relaxed">
                    {step.description}
                  </p>
                </div>

              </div>

              {/* ── RIGHT: Circuit Animation — top-right, hidden on mobile ── */}
              {/* OLD: ProcessVisual
              <div className="absolute -top-80 right-0 w-48 h-48 md:w-64 md:h-64 text-gray-400 z-0 pointer-events-none opacity-40">
                <ProcessVisual index={index} className="w-full h-full" />
              </div>
              */}
              <div className=" absolute -top-10 right-0  hidden md:block shrink-0 w-48 h-48 pointer-events-none opacity-90">
                <CircuitAnimation />
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}