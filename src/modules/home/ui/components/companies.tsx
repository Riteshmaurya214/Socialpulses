import ScrollVelocity from "@/components/ScrollVelocity";
import React from "react";

// Replace these with your actual logo imports or URLs
const dummyLogos = {
  utsav: "https://res.cloudinary.com/dtcuucq3i/image/upload/v1773256200/image-removebg-preview_8_rziqrw.svg",
  udhyam: "https://res.cloudinary.com/dtcuucq3i/image/upload/v1773256199/image-removebg-preview_4_qidvbs.svg",
  learnmate:
    "https://res.cloudinary.com/dtcuucq3i/image/upload/v1773256199/image-removebg-preview_7_r4idnq.svg",
  microsoft:
    "https://res.cloudinary.com/dtcuucq3i/image/upload/v1773256199/image-removebg-preview_6_aznmzz.svg",
  jnanagni:
    "https://res.cloudinary.com/dtcuucq3i/image/upload/v1773257369/image-removebg-preview_1_s00eds.svg",
  acmegrade:
    "https://res.cloudinary.com/dtcuucq3i/image/upload/v1773256199/image-removebg-preview_5_ms265e.svg",
    physicswallah: "https://res.cloudinary.com/dtcuucq3i/image/upload/v1773257145/images-removebg-preview_bgroax.svg",
    margdarshan: "https://res.cloudinary.com/dtcuucq3i/image/upload/v1773271499/about-shape-1_visnmc.svg",
    gateplus: "https://res.cloudinary.com/dtcuucq3i/image/upload/v1773272086/6qIIG01_kvnbgs.svg"
};

const companyList1 = [
  { name: "Utsav", logo: dummyLogos.utsav },
  { name: "Udhyam", logo: dummyLogos.udhyam },
  { name: "Learnmate", logo: dummyLogos.learnmate },
  { name: "Jnanagni", logo: dummyLogos.jnanagni },
];

const companyList2 = [
  { name: "Acmegrade", logo: dummyLogos.acmegrade },
  { name: "Physics Wallah", logo: dummyLogos.physicswallah },
  { name: "Margdarshan", logo: dummyLogos.margdarshan },
  { name: "Gate Plus", logo: dummyLogos.gateplus },
];

const CompanyItem = ({ name, logo }: { name: string; logo: string }) => {
  return (
    <div className="flex items-center gap-4 mr-16 md:mr-24 group cursor-pointer">
      <div className="relative w-12 h-12 md:w-16 md:h-16 flex items-center justify-center grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300">
        <img src={logo} alt={name} className="w-full h-full object-contain" />
      </div>
      <span className="text-xl md:text-3xl font-bold text-neutral-500 group-hover:text-black transition-colors duration-300">
        {name}
      </span>
    </div>
  );
};

const Companies = () => {
  return (
    <div className="mt-24 md:mt-32 w-full overflow-hidden">
      <ScrollVelocity
        velocity={30}
        numCopies={4} // Adjust based on how many items you have to ensure no gaps
        className="custom-scroll-text"
        // Pass the JSX Rows
        rows={[
          // ROW 1
          <div className="flex items-center my-4">
            {companyList1.map((company, idx) => (
              <CompanyItem key={idx} {...company} />
            ))}
          </div>,

          // ROW 2
          <div className="flex items-center my-4 md:mt-8">
            {companyList2.map((company, idx) => (
              <CompanyItem key={idx} {...company} />
            ))}
          </div>,
        ]}
      />
    </div>
  );
};

export default Companies;
