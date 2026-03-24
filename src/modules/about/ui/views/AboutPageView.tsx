import React from "react";
import AboutHero from "../components/AboutHero";
import AboutStats from "../components/AboutStats";
import AboutStory from "../components/AboutStory";
import MissionVision from "../components/MissionVision";
import ServicesOverview from "../components/ServicesOverview";
import OurProcess from "../components/OurProcess";
import AboutTestimonials from "../components/AboutTestimonials";
import AboutCTA from "../components/AboutCTA";
import Aurora from "@/components/Aurora";

const AboutPageView = () => {
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
        {/* Added bg-white/... to ensure readability over aurora but keep it subtle. 
             Actually HomeView doesn't use bg-white on content layer, but sections have their own backgrounds. 
             Let's check. HomeView sections are likely transparent or have their own bgs.
             The HeroSection in HomeView is transparent?
             HeroSection has 'relative min-h-screen '.
             If I put Aurora behind everything, sections with white bg will cover it.
             Sections relying on transparency (like Hero) will show it.
         */}
        <AboutHero />
        <AboutStats />
        <AboutStory />
        <MissionVision />
        <ServicesOverview />
        <OurProcess />
        <AboutTestimonials />
        <AboutCTA />
      </div>
    </div>
  );
};

export default AboutPageView;
