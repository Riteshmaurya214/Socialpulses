import React from "react";
import Aurora from "@/components/Aurora";
import ServicesHero from "../components/ServicesHero";
import ServicesDetailed from "../components/ServicesDetailed";
import WhyChooseUs from "../components/WhyChooseUs";
import ServiceProcess from "../components/ServiceProcess";
import ServicesFAQ from "../components/ServicesFAQ";
import ServicesCTA from "../components/ServicesCTA";

import FeaturesAndBenefits from "../components/FeaturesAndBenefits";

const ServicesPageView = () => {
  return (
    <div className="relative w-full min-h-screen">
      {/* Background Gradient Layer */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
        <Aurora
          colorStops={["#3B82F6", "#6366F1", "#4F46E5"]}
          speed={0.5}
        />
      </div>

      {/* Content Layer */}
      <div className="relative z-10 w-full bg-white/90">
        <ServicesHero />
        <WhyChooseUs />
        <FeaturesAndBenefits />
        <ServicesDetailed />
        {/* <ServiceProcess /> */}
        <ServicesFAQ />
        <ServicesCTA />
      </div>
    </div>
  );
};

export default ServicesPageView;
