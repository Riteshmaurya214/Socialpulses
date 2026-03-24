import BookCallButton from "@/components/ui/BookCallButton";

export default function AboutHero() {
  return (
    <section className="relative pt-20  md: pt-30 pb-10 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-5xl mx-auto space-y-6">
          <h1 className="font-montserrat font-bold text-4xl md:text-5xl lg:text-6xl text-gray-900 leading-tight tracking-tight">
            India's Fastest Growing Digital Transformation & Marketing Company
          </h1>

          <p className="font-inter text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We help brands scale with end-to-end digitalization, powerful
            software solutions, AI-driven platforms, and performance marketing
            that converts.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <BookCallButton
              text="Book a Free Strategy Call"
              variant="primary"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
