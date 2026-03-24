import SectionHeader from "@/components/section/Sectionheader";
import SectionTitle from "@/components/section/Sectiontitle ";
import { Star } from "lucide-react";
import React from "react";
import ProjectMarquee from "../components/ProjectMarquee";

const ProjectView = () => {
  return (
    <div className="w-full py-10 px-4">
      <div className="w-full flex justify-center gap-2 flex-col items-center">
        <SectionHeader icon={Star} title="Our Projects" />

        <SectionTitle
          className="flex items-center justify-center flex-col "
          title="Recent Projects"
          description="Here are some of our featured projects."
        />
      </div>

      <div className="w-full mt-12">
        <ProjectMarquee />
      </div>
    </div>
  );
};

export default ProjectView;
