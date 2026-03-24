import { CTAStats } from "@/modules/home/ui/components/cta-stats";
import { CTAStatsSecond } from "@/modules/home/ui/components/cta-stats-second";
import { AboutView } from "@/modules/home/ui/views/about-view";
import { DiscoverView } from "@/modules/home/ui/views/discover-view";
import FAQView from "@/modules/home/ui/views/faq-view";
import HomeView from "@/modules/home/ui/views/home-view";
import IgniteBrandView from "@/modules/home/ui/views/IgniteBrandView";
import LogosView from "@/modules/home/ui/views/logos-view";
import OurValueView from "@/modules/home/ui/views/OurValueView";
import ProjectView from "@/modules/home/ui/views/project-view";
import ServiceView from "@/modules/home/ui/views/service-view";
import TestimonialView from "@/modules/home/ui/views/testimonial-view";
import WhyChooseView from "@/modules/home/ui/views/why-choose-view";
import WhyChooseV2View from "@/modules/home/ui/views/why-choose-v2-view";
import OurProcess from "@/modules/about/ui/components/OurProcess";

export default function Home() {
  return (
    <div className="w-full min-h-screen">
      <HomeView />
      <AboutView />
      <LogosView />
      <OurProcess/>
      <DiscoverView />
      <ServiceView />
      <ProjectView />
      {/* <WhyChooseView /> */}
      <WhyChooseV2View />
      <CTAStats />  
      <IgniteBrandView />
      <OurValueView />  
      <TestimonialView />
      <FAQView />
    </div>
  );
}
