import OurValueSection from "../components/OurValueSection";
import Image from "next/image";

const OurValueView = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center py-20 mb-12 md:mb-40">
      {/* 1: Full Width Background Image */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src="/image/about-team.jpg" 
          alt="Team collaboration background"
          fill
          className="object-cover"
          priority
        />
        {/* Subtle overlay to help the white card pop */}
        <div className="absolute inset-0 bg-black/10" />
      </div>

      {/* 2: The Floating Card Component */}
      <div className="relative top-40 z-10 w-full">
        <OurValueSection />
      </div>
    </section>
  );
};

export default OurValueView;