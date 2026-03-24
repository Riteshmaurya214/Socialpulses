import HeroSection from "../components/HeroSection";
import Aurora from "@/components/Aurora";

const HomeView = () => {
  return (
    <div className="relative w-full min-h-screen">
      {/* Background Gradient Layer */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Aurora
         colorStops={["#00AEEF", "#3B82F6", "#4F46E5"]}
          speed={0.5}
        />
      </div>
      <div className="relative z-10 w-full bg-white/70 backdrop-blur-sm">
{/* <div className="absolute inset-0 bg-gradient-to-br from-[#3B82F6] via-[#6366F1] to-[#4F46E5] opacity-10" /> */}
      {/* Content Layer - Hero Section */}
      <div className="relative z-10 w-full">
        <HeroSection />
      </div>
    </div>
</div>
  );
};

export default HomeView;
