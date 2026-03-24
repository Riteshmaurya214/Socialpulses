import IgniteBrandSection from "../components/IgniteBrandSection";

const IgniteBrandView = () => {
  return (
    <div
      className="relative w-full min-h-screen bg-[#F8F8F8]" // Clean Off-White
      style={{
        // Using an off-black with 10% opacity for the dots to keep it subtle
        backgroundImage: `radial-gradient(rgba(0, 0, 0, 0.1) 1.5px, transparent 1px)`,
        backgroundSize: "30px 30px",
      }}
    >
      <div className="relative z-10">
        <IgniteBrandSection />
      </div>
    </div>
  );
};

export default IgniteBrandView;
