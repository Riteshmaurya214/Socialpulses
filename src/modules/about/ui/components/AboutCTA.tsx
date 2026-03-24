import BookCallButton from "@/components/ui/BookCallButton";

export default function AboutCTA() {
  return (
    <section 
      className="relative py-20 overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/image/logo-bg.png')" }}
    >
      <div className="container relative z-10 mx-auto px-4 max-w-5xl text-center">
        <h2 className="font-montserrat text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          Ready to Scale Your Brand?
        </h2>
        <p className="font-inter text-gray-600 text-lg lg:text-xl mb-10 max-w-3xl mx-auto leading-relaxed">
          Start your digital transformation journey with a team that builds,
          scales, and grows your brand through technology and marketing
          excellence. Partner with Social Pulse Studios to unlock long-term
          business growth.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <BookCallButton
            text="Book Your Free Strategy Consultation"
            className="h-14 px-10 text-lg md:text-xl"
          />
        </div>
      </div>
    </section>
  );
}
