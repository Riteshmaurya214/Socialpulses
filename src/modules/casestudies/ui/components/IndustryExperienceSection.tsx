import React from 'react';

const ALL_INDUSTRIES = [
  {
    name: 'Banking & Finance',
    bgColor: 'bg-yellow-100',
    icon: (
      <svg className="w-6 h-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11m16-11v11M8 14v3m4-3v3m4-3v3" />
      </svg>
    )
  },
  {
    name: 'Logistics',
    bgColor: 'bg-sky-100',
    icon: (
      <svg className="w-6 h-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <rect x="8" y="6" width="8" height="14" rx="2" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 6V4a1 1 0 011-1h2a1 1 0 011 1v2m-4 6v4m4-4v4" />
      </svg>
    )
  },
  {
    name: 'Healthcare',
    bgColor: 'bg-green-100',
    icon: (
      <svg className="w-6 h-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <rect x="4" y="6" width="16" height="14" rx="2" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2m-6 6h4m-2-2v4" />
      </svg>
    )
  },
  {
    name: 'Transportation',
    bgColor: 'bg-orange-100',
    icon: (
      <svg className="w-6 h-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="6" width="14" height="12" rx="2" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 10h3.5a1.5 1.5 0 011.5 1.5v4.5H17M6 20a2 2 0 100-4 2 2 0 000 4zm10 0a2 2 0 100-4 2 2 0 000 4z" />
      </svg>
    )
  },
  {
    name: 'Travel',
    bgColor: 'bg-pink-100',
    icon: (
      <svg className="w-6 h-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        {/* Using a globe/plane motif, simplifying to a plane shape for precision */}
        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="white" stroke="none"/>
        <path d="M20.5 10L10 10L6 5L4 5L6.5 10L3 10L1.5 8L0.5 8L1.5 11.5L0.5 15L1.5 15L3 13L6.5 13L4 18L6 18L10 13L20.5 13C21.3284 13 22 12.3284 22 11.5C22 10.6716 21.3284 10 20.5 10Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      </svg>
    )
  },
  {
    name: 'Game',
    bgColor: 'bg-purple-100',
    icon: (
      <svg className="w-6 h-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    name: 'Education',
    bgColor: 'bg-yellow-100',
    icon: (
      <svg className="w-6 h-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    )
  },
  {
    name: 'Construction',
    bgColor: 'bg-rose-100',
    icon: (
      <svg className="w-6 h-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    )
  },
  {
    name: 'Manufacturing',
    bgColor: 'bg-orange-100',
    icon: (
      <svg className="w-6 h-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 21h18M4 21V8l6-4 6 4v13M10 21v-5a2 2 0 012-2h0a2 2 0 012 2v5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 10h4v11h-4zM6 10h2v2H6z" />
      </svg>
    )
  },
  {
    name: 'Restaurants',
    bgColor: 'bg-green-100',
    icon: (
      <svg className="w-6 h-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        <path d="M8 5V12M8 12L8 19M8 5C7.44772 5 7 5.44772 7 6V10C7 11.1046 7.89543 12 9 12M8 5C8.55228 5 9 5.44772 9 6V10C9 11.1046 8.10457 12 7 12M16 5C16 5 14 6.5 14 9C14 11.5 15.5 12 15.5 12L15.5 19" fill="white" stroke="none"/>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 3v6c0 1.1.9 2 2 2h0c1.1 0 2-.9 2-2V3M9 11v10M16 3c-1.5 0-2.5 1.5-2.5 3.5S14.5 10 16 10v11" />
      </svg>
    )
  },
  {
    name: 'e-Commerce',
    bgColor: 'bg-sky-100',
    icon: (
      <svg className="w-6 h-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    )
  },
  {
    name: 'Social Network',
    bgColor: 'bg-yellow-100',
    icon: (
      <svg className="w-6 h-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    name: 'Real Estate',
    bgColor: 'bg-pink-100',
    icon: (
      <svg className="w-6 h-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <rect x="5" y="4" width="14" height="16" rx="2" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 8h2m-2 4h2m-2 4h2m4-8h2m-2 4h2m-2 4h2" />
      </svg>
    )
  },
  {
    name: 'Entertainments',
    bgColor: 'bg-yellow-100',
    icon: (
      <svg className="w-6 h-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 4v16M17 4v16M3 8h4m-4 8h4M17 8h4m-4 8h4M7 4h10M7 20h10" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    )
  },
  {
    name: 'Automotive',
    bgColor: 'bg-purple-100',
    icon: (
      <svg className="w-6 h-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
        <path d="M5 13H19L17 7H7L5 13Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        <circle cx="7" cy="16" r="2" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="17" cy="16" r="2" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    )
  },
  {
    name: 'SaaS',
    bgColor: 'bg-pink-100',
    icon: (
      <svg className="w-6 h-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 12v6m0 0l-2-2m2 2l2-2" />
      </svg>
    )
  }
];

export interface IndustryExperienceSectionProps {
  titlePrefix?: string;
  titleHighlight?: string;
  description?: string;
}

const IndustryExperienceSection: React.FC<IndustryExperienceSectionProps> = ({
  titlePrefix,
  titleHighlight,
  description,
}) => {
  return (
    <div className="bg-white py-20 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
            {titlePrefix && `${titlePrefix} `}
            {titleHighlight && (
              <span className="text-purple-700 underline decoration-purple-300 decoration-4 underline-offset-8">
                {titleHighlight}
              </span>
            )}
          </h2>
          {description && (
            <p className="text-gray-600 text-lg leading-relaxed whitespace-pre-line">
              {description}
            </p>
          )}
        </div>

        {/* Industry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-6">
          {ALL_INDUSTRIES.map((industry, index) => (
            <div key={index} className="flex items-center gap-4 group cursor-pointer">
              <div className={`w-14 h-14 shrink-0 flex items-center justify-center rounded ${industry.bgColor} transition-transform group-hover:scale-105`}>
                {industry.icon}
              </div>
              <span className="text-base font-medium text-gray-800 group-hover:text-purple-700 transition-colors">
                {industry.name}
              </span>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default IndustryExperienceSection;
