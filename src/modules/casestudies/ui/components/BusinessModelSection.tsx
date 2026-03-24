import React from 'react';

export interface BusinessModel {
  id: string;
  title: string;
  titleColorClass: string;
  listItems: string[];
}

export interface BusinessModelSectionProps {
  titleHighlight?: string;
  titleSuffix?: string;
  description?: string;
  models?: BusinessModel[];
}

const defaultModels: BusinessModel[] = [
  {
    id: "dedicated",
    title: "Hire dedicated teams",
    titleColorClass: "text-amber-600",
    listItems: [
      "In this model, you can hire professionals for your project from our pool of developers. This team dedicatedly works on your deliverables.",
      "This team will adjust as per your timelines and communicate regularly through preferred channels.",
      "The cost of the project will be discussed in advance so that small and medium-sized businesses can plan effectively."
    ]
  },
  {
    id: "fixed",
    title: "Fixed time and cost model",
    titleColorClass: "text-blue-600",
    listItems: [
      "In this model, the deliverables and the teams are decided beforehand. They will work respectively to the predefined requirements and milestones only.",
      "This is a preferred model for small-sized businesses with lean budgets.",
      "It is a cost-effective approach for projects with limited deliverables."
    ]
  },
  {
    id: "hybrid",
    title: "Hybrid hiring model",
    titleColorClass: "text-emerald-600",
    listItems: [
      "In this model, the organizations outsource limited deliverables with us.",
      "The engagement model facilitates organizations to approach us with limited and defined project development requirements.",
      "It is a preferred solution for any-sized business."
    ]
  }
];

// ─── Index 0: Single solid clock — bold black ─────────────────────────────────
const ClockSolid = () => (
  <svg viewBox="0 0 134 134" width="120" height="120" fill="none">
    <defs>
      <style>{`
        @keyframes rotateH0 {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        .hand-0 {
          transform-origin: 67px 67px;
          animation: rotateH0 4s linear infinite;
        }
      `}</style>
    </defs>
    {/* Outer solid circle */}
    <circle cx="67" cy="67" r="55"
      fill="none" stroke="#111827" strokeWidth="3" />
    {/* Rotating hand */}
    <g className="hand-0">
      <line x1="67" y1="67" x2="67" y2="20"
        stroke="#111827" strokeWidth="3" strokeLinecap="round" />
    </g>
    {/* Centre dot */}
    <circle cx="67" cy="67" r="4" fill="#111827" />
  </svg>
);

// ─── Index 1: Circles Animation ───────────────────────────────────────────────
const CirclesAnimation = () => (
  <svg width="200" height="160" viewBox="0 0 120 80" fill="none">
    <defs>
      <style>{`
        @keyframes circlePulse1 {
          0%,100% { r: 18; opacity: 0.6; }
          50%     { r: 22; opacity: 1; }
        }
        @keyframes circlePulse2 {
          0%,100% { r: 18; opacity: 0.6; }
          50%     { r: 22; opacity: 1; }
        }
        @keyframes circlePulse3 {
          0%,100% { r: 18; opacity: 0.6; }
          50%     { r: 22; opacity: 1; }
        }
        .cp1 { animation: circlePulse1 4s ease-in-out infinite; }
        .cp2 { animation: circlePulse2 4s ease-in-out 0.8s infinite; }
        .cp3 { animation: circlePulse3 4s ease-in-out 1.6s infinite; }
      `}</style>
    </defs>
    <circle className="cp1" cx="30" cy="40" r="18"
      stroke="#111827" strokeWidth="2.5" strokeDasharray="4 4" />
    <circle className="cp2" cx="60" cy="50" r="18"
      stroke="#111827" strokeWidth="2.5" strokeDasharray="4 4" />
    <circle className="cp3" cx="90" cy="35" r="18"
      stroke="#111827" strokeWidth="2.5" strokeDasharray="4 4" />
  </svg>
);

// ─── Index 2: Graph Animation ─────────────────────────────────────────────────
const GraphAnimation = () => (
  <svg width="140" height="140" viewBox="0 0 100 100" fill="none">
    <defs>
      <style>{`
        @keyframes drawLine {
          0%   { stroke-dashoffset: 200; opacity: 0; }
          10%  { opacity: 1; }
          60%  { stroke-dashoffset: 0; opacity: 1; }
          80%  { stroke-dashoffset: 0; opacity: 1; }
          100% { stroke-dashoffset: -200; opacity: 0; }
        }
        @keyframes drawDash {
          0%   { stroke-dashoffset: 150; opacity: 0; }
          15%  { opacity: 1; }
          60%  { stroke-dashoffset: 0; opacity: 1; }
          80%  { stroke-dashoffset: 0; opacity: 1; }
          100% { stroke-dashoffset: -150; opacity: 0; }
        }
        @keyframes dotPop {
          0%,100% { transform: scale(1); opacity: 1; }
          50%     { transform: scale(1.5); opacity: 0.7; }
        }
        .graph-line {
          stroke-dasharray: 200;
          animation: drawLine 6s ease-in-out infinite;
        }
        .graph-dash { animation: drawDash 6s ease-in-out 0.4s infinite; }
        .dot-start {
          transform-origin: 10px 80px;
          animation: dotPop 6s ease-in-out infinite;
        }
        .dot-end {
          transform-origin: 90px 15px;
          animation: dotPop 6s ease-in-out 1.5s infinite;
        }
      `}</style>
    </defs>
    <path className="graph-dash"
      d="M10 80L90 80"
      stroke="#374151" strokeWidth="1.5" strokeDasharray="4 4" />
    <path className="graph-dash"
      d="M90 80V50H65V35H40V20"
      stroke="#374151" strokeWidth="1.5" strokeDasharray="4 4"
      style={{ animationDelay: "0.2s" }} />
    <path className="graph-line"
      d="M10 80C25 50 50 15 90 15"
      stroke="#374151" strokeWidth="2.5" strokeLinecap="round" />
    <circle className="dot-start" cx="10" cy="80" r="3.5" fill="#374151" />
    <circle className="dot-end"   cx="90" cy="15" r="3.5" fill="#374151" />
  </svg>
);
// ─────────────────────────────────────────────────────────────────────────────

export default function BusinessModelSection({
  titleHighlight = "Business Model",
  titleSuffix = "",
  description = "To develop a high-quality solution, any organization needs to engage professionals with the required acumen. It is only the hired professional team who will work diligently to deliver a delightful experience. Our business engagement models are:",
  models = defaultModels
}: BusinessModelSectionProps) {

  const renderIcon = (index: number) => {
    if (index === 0) return <ClockSolid />;
    if (index === 1) return <CirclesAnimation />;
    return <GraphAnimation />;
  };

  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8 font-sans relative" style={{
        backgroundImage: `radial-gradient(rgba(0, 0, 0, 0.1) 1.5px, transparent 1px)`,
        backgroundSize: "30px 30px",
      }}>
      <div className="max-w-7xl mx-auto">

        {/* Header Section */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
            <span className="relative inline-block">
              <span className="relative z-10">{titleHighlight}</span>
              <span className="absolute bottom-1 left-0 w-full h-4 bg-rose-200 -z-10 rounded-sm"></span>
            </span>
            {titleSuffix ? ` ${titleSuffix}` : ''}
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            {description}
          </p>
        </div>

        {/* 3-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 px-8">
          {models.map((model, index) => (
            <div key={model.id}>
              <div className="h-42 flex items-center lg:ml-10">
                {renderIcon(index % 3)}
              </div>
              <h3 className={`text-xl font-bold mb-6 ${model.titleColorClass || 'text-gray-900'}`}>
                {model.title}
              </h3>
              <ul className="space-y-4">
                {model.listItems.map((item, i) => (
                  <ListItem key={i}>{item}</ListItem>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Reusable List Item Component with Check Icon
const ListItem = ({ children }: { children: React.ReactNode }) => (
  <li className="flex items-start group">
    <div className="shrink-0 mt-1 mr-3">
      <svg className="w-5 h-5 text-gray-400 group-hover:text-emerald-500 transition-colors"
        viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
        <path d="M8 12L11 15L16 9" stroke="currentColor" strokeWidth="2"
          strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
    <span className="text-gray-600 text-sm md:text-base leading-relaxed">
      {children}
    </span>
  </li>
);