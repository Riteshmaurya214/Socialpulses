import SectionHeader from "@/components/section/Sectionheader";
import SectionTitle from "@/components/section/Sectiontitle ";
import { Star } from "lucide-react";
import React from "react";
import { FAQSection } from "../components/FAQSection";

const FAQView = () => {
  return (
    <div className="w-full py-10 px-4">
      <div className="w-full flex justify-center gap-2 flex-col items-center">
        <SectionHeader icon={Star} title="FAQ" />

        <SectionTitle
          className="flex items-center justify-center flex-col "
          title="Frequently Asked Questions"
          description="Find the information you need about our services, plans, and processes. If you have more questions, feel free to reach out to us!"
        />
      </div>

      <div className="w-full mt-12">
        <FAQSection />
      </div>
    </div>
  );
};

export default FAQView;
