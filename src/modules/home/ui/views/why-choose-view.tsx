import WhyChooseSection from "../components/WhyChooseSection";

const WhyChooseView = () => {
  return (
    <div
      className="relative w-full min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/image/logo-bg.png')" }}
    >
      {/* Content Layer */}
      <div className="relative z-10 w-full">
        <WhyChooseSection />
      </div>
    </div>
  );
};

export default WhyChooseView;
