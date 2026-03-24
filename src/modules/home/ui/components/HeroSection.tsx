import BookCallButton from "@/components/ui/BookCallButton";
import Companies from "./companies";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen pt-12 overflow-hidden">
      {/* Main Content Container */}
      <div className="relative container mx-auto px-4 py-12 md:py-18">
        {/* Hero Heading */}
        <div className="text-center max-w-6xl mx-auto space-y-3 mt-4 lg:mt-24">
          <h1 className="font-montserrat font-bold tracking-tighter">
            <span className="block text-xl md:text-2xl lg:text-3xl mb-1 text-gray-900">
              Digital Growth & Software Solutions for
            </span>
<span className="block text-5xl md:text-7xl lg:text-[110px] 
bg-gradient-to-l from-[#3B82F6] via-[#6366F1] to-[#4F46E5] 
bg-clip-text text-transparent mt-2 leading-none">
  Modern Brands
</span>
          </h1>

          {/* Description */}
          <p className="font-montserrat text-lg md:font-medium text-gray-600 max-w-2xl mx-auto leading-relaxed">
            We deliver powerful websites, custom software, and performance
            marketing that’s built to convert.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col w-full sm:flex-row items-center justify-center mt-8 gap-4 sm:gap-0 max-w-2xl mx-auto">
          <div className="flex sm:flex-1 justify-center sm:justify-end sm:pr-2"> <button className="bg-gradient-to-r from-[#3B82F6] via-[#6366F1] to-[#4F46E5] text-white px-8 py-4 rounded-full font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl active:scale-95 hover:shadow-[0_0_25px_rgba(79,70,229,0.6)] cursor-pointer"> Start Your Growth Journey </button> </div>
          <div className="flex sm:flex-1 justify-center sm:justify-start sm:pl-2">
            <BookCallButton text="Book a Free Strategy Call" variant="outline" />
          </div>
        </div>

        {/* Trust Statement */}
        {/* Availability Badge */}
        <div className="hidden justify-center mt-6">
          <div className="inline-flex items-center gap-3 px-5 py-2 transition-all ">
            <div className="flex -space-x-3">
              {[
                "https://res.cloudinary.com/dtcuucq3i/image/upload/v1773256199/image-removebg-preview_4_qidvbs.svg",
                "https://res.cloudinary.com/dtcuucq3i/image/upload/v1773256200/image-removebg-preview_8_rziqrw.svg",
                "https://res.cloudinary.com/dtcuucq3i/image/upload/v1773256199/image-removebg-preview_7_r4idnq.svg",
                "https://res.cloudinary.com/dtcuucq3i/image/upload/v1773256199/image-removebg-preview_6_aznmzz.svg",
                "https://res.cloudinary.com/dtcuucq3i/image/upload/v1773256199/image-removebg-preview_2_lkhqy1.svg",
                "https://res.cloudinary.com/dtcuucq3i/image/upload/v1773256199/image-removebg-preview_5_ms265e.svg",
                "https://res.cloudinary.com/dtcuucq3i/image/upload/v1773256199/image-removebg-preview_3_dctu9b.svg",
              ].map((logo, i) => (
                <div
                  key={i}
                  className="relative w-8 h-8 rounded-full border-2 border-white bg-gray-50 flex items-center justify-center overflow-hidden"
                >
                  <img
                    src={logo}
                    alt="Brand"
                    className="w-full h-full object-cover p-1.5 grayscale"
                  />
                </div>
              ))}
            </div>
            <span className="font-medium text-sm text-gray-600">
              Trusted by growing brands across India & global markets
            </span>
          </div>
        </div>

        {/* Client Logos */}
        <Companies />
      </div>
    </section>
  );
}
