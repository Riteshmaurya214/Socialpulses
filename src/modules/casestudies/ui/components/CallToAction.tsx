import React from 'react';

interface CallToActionProps {
  title: string;
  description: string;
  buttonText: string;
}

const CallToAction: React.FC<CallToActionProps> = ({ title, description, buttonText }) => {
  return (
    <div className="relative overflow-hidden bg-[#e0fbc5] py-24 px-4 sm:px-6 lg:px-8 font-sans">
      
      {/* Background Decorative Elements */}
      {/* Top Left Circles */}
      <svg 
        className="absolute top-0 left-0 -translate-x-1/3 -translate-y-1/3 pointer-events-none" 
        width="400" 
        height="400" 
        viewBox="0 0 400 400" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="200" cy="200" r="80" stroke="#bdf2a8" strokeWidth="1.5"/>
        <circle cx="200" cy="200" r="140" stroke="#bdf2a8" strokeWidth="1.5"/>
        <circle cx="200" cy="200" r="200" stroke="#bdf2a8" strokeWidth="1.5"/>
      </svg>

      {/* Top Right Curve */}
      <svg 
        className="absolute top-0 right-0 translate-x-1/4 -translate-y-1/4 pointer-events-none" 
        width="300" 
        height="300" 
        viewBox="0 0 300 300" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M-50,0 Q150,250 350,0" stroke="#bdf2a8" strokeWidth="1.5" fill="none"/>
      </svg>

      {/* Bottom Right Arch */}
      <svg 
        className="absolute bottom-0 right-12 translate-y-1/2 pointer-events-none" 
        width="150" 
        height="150" 
        viewBox="0 0 150 150" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="75" cy="75" r="70" stroke="#bdf2a8" strokeWidth="1.5"/>
      </svg>

      {/* Bottom Left Peak */}
      <svg 
        className="absolute bottom-0 left-24 pointer-events-none" 
        width="60" 
        height="60" 
        viewBox="0 0 60 60" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M30,0 L60,60 H0 Z" stroke="#bdf2a8" strokeWidth="1.5" fill="none"/>
      </svg>


      {/* Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-[2.75rem] font-extrabold text-gray-900 mb-6 tracking-tight">
          {title}
        </h2>
        
        <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-10 max-w-3xl mx-auto">
          {description}
        </p>
        
        <button className="bg-black text-white px-8 py-3 text-base font-medium hover:bg-gray-800 transition-colors duration-200">
          {buttonText}
        </button>
      </div>
      
    </div>
  );
};

export default CallToAction;
