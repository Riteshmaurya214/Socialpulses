import React from 'react';
import * as LucideIcons from 'lucide-react';

interface Service {
  id: string;
  title: string;
  colorClass: string;
  iconName: string;
}

interface ServicesSectionProps {
  titlePrefix?: string;
  titleHighlight?: string;
  titleSuffix?: string;
  description?: string;
  services?: Service[];
}

const ServicesSection: React.FC<ServicesSectionProps> = ({
  titlePrefix,
  titleHighlight,
  titleSuffix,
  description,
  services = [],
}) => {
  return (
    <div className="bg-white py-20 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center max-w-5xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
            <span className="relative inline-block">
              {titlePrefix && <span className="relative z-10 mr-2">{titlePrefix}</span>}
              {titleHighlight && (
                <span className="relative z-10">
                  {titleHighlight}
                  <span className="absolute bottom-1 left-0 w-full h-4 bg-rose-200 -z-10 rounded-sm"></span>
                </span>
              )}
              {titleSuffix && <span className="relative z-10 ml-2">{titleSuffix}</span>}
            </span>
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed whitespace-pre-line">
            {description}
          </p>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            // Dynamically get the icon component from lucide-react
            const IconComponent = (LucideIcons as any)[service.iconName] || LucideIcons.Circle;

            return (
              <div 
                key={service.id}
                className="border border-gray-200 bg-white rounded-lg p-8 flex items-center justify-center gap-4 hover:shadow-md hover:border-gray-300 transition-all duration-200 cursor-pointer"
              >
                <div className={`${service.colorClass}`}>
                  <IconComponent className="w-6 h-6" strokeWidth={1.5} />
                </div>
                <span className={`text-lg font-medium ${service.colorClass}`}>
                  {service.title}
                </span>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};

export default ServicesSection;
