import { notFound } from "next/navigation";
import { caseStudies } from "@/constants/case-studies";
import { CheckCircle2, Cpu, Target, Trophy } from "lucide-react";
import Link from "next/link";
import CaseStudyHero from "@/modules/casestudies/ui/components/CaseStudyHero";
import AboutCompanySection from "@/modules/casestudies/ui/components/AboutCompanySection";
import ProcessSection from "@/modules/casestudies/ui/components/ProcessSection";
import TeamExpertiseSection from "@/modules/casestudies/ui/components/TeamExpertiseSection";
import WhyChooseUsSection from "@/modules/casestudies/ui/components/WhyChooseUsSection";
import BusinessModelSection from "@/modules/casestudies/ui/components/BusinessModelSection";
import ServicesSection from "@/modules/casestudies/ui/components/ServicesSection";
import CallToAction from "@/modules/casestudies/ui/components/CallToAction";
import IndustryExperienceSection from "@/modules/casestudies/ui/components/IndustryExperienceSection";
import { FAQSection } from "@/modules/home/ui/components/FAQSection";
import TestimonialView from "@/modules/home/ui/views/testimonial-view";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return caseStudies.map((cs) => ({
    id: cs.id,
  }));
}

const CaseStudyPage = async ({ params }: PageProps) => {
  const { id } = await params;
  const caseStudy = caseStudies.find((cs) => cs.id === id);

  if (!caseStudy) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white selection:bg-orange-100 selection:text-orange-900">
      {/* Hero Section */}
      <CaseStudyHero caseStudy={caseStudy} />

      {/* About Company Section */}
      <AboutCompanySection caseStudy={caseStudy} />

      {/* Process Section */}
      {caseStudy.processSection && (
        <ProcessSection {...caseStudy.processSection} />
      )}

      {/* Team Expertise Section */}
      {caseStudy.teamExpertiseSection && (
        <TeamExpertiseSection {...caseStudy.teamExpertiseSection} />
      )}

      {/* Why Choose Us Section */}
      {caseStudy.whyChooseUsSection && (
        <WhyChooseUsSection {...caseStudy.whyChooseUsSection} />
      )}

      {/* Business Model Section */}
      {caseStudy.businessModelSection && (
        <BusinessModelSection {...caseStudy.businessModelSection} />
      )}

      {/* Services Section */}
      {caseStudy.servicesSection && caseStudy.servicesSection.services && (
        <ServicesSection {...caseStudy.servicesSection} />
      )}

      {/* Call To Action Section */}
      {caseStudy.callToActionSection && (
        <CallToAction {...caseStudy.callToActionSection} />
      )}

      {/* Industry Experience Section */}
      {caseStudy.industryExperienceSection && (
        <IndustryExperienceSection {...caseStudy.industryExperienceSection} />
      )}

      {/* FAQ Section */}
      {caseStudy.faqs && caseStudy.faqs.length > 0 && (
        <div className="py-24"
        style={{
        // Using an off-black with 10% opacity for the dots to keep it subtle
        backgroundImage: `radial-gradient(rgba(0, 0, 0, 0.1) 1.5px, transparent 1px)`,
        backgroundSize: "30px 30px",
      }}
        >
          <div className="container mx-auto px-4 mb-12 text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Frequently Asked <span className="text-orange-600">Questions</span>
            </h2>
          </div>
          <FAQSection faqs={caseStudy.faqs} />
        </div>
      )}

      {/* Testimonials */}
      <TestimonialView testimonials={caseStudy.testimonials} />
    </main>
  );
};

export default CaseStudyPage;
