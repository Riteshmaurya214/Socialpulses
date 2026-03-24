"use client";
import React, { useRef, useState } from "react";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useTransform,
  AnimatePresence,
} from "motion/react";
import {
  Play,
  Code,
  Layout,
  Layers,
  Shapes,
  X,
  Smartphone,
  Database,
  Cloud,
  Cpu,
  Rocket,
  Network,
  Palette,
  Globe,
  TrendingUp,
  Search,
  Share2,
  Megaphone,
  Target,
  FileText,
  Mail,
  MousePointerClick,
  BarChart,
  Users,
} from "lucide-react";
import { useElementHeight } from "@/hooks/useElementSize";

// --- Component: Marquee Column ---
interface MarqueeColumnProps {
  children: React.ReactNode;
  baseVelocity: number;
  className?: string;
  isPaused?: boolean;
}

const MarqueeColumn = ({
  children,
  baseVelocity,
  className = "",
  isPaused = false,
}: MarqueeColumnProps) => {
  const baseY = useMotionValue(0);
  const contentRef = useRef<HTMLDivElement>(null);
  const contentHeight = useElementHeight(contentRef);

  const speedFactor = useRef(1);

  const y = useTransform(baseY, (v) => {
    if (contentHeight === 0) return "0px";
    const wrapped = ((v % contentHeight) + contentHeight) % contentHeight;
    return `${wrapped - contentHeight}px`;
  });

  useAnimationFrame((t, delta) => {
    if (isPaused) return;
    let moveBy = baseVelocity * (delta / 1000) * speedFactor.current;
    baseY.set(baseY.get() + moveBy);
  });

  const handleMouseEnter = () => {
    speedFactor.current = 0.15;
  };

  const handleMouseLeave = () => {
    speedFactor.current = 1;
  };

  return (
    <div
      className="h-full overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div className={`flex flex-col ${className}`} style={{ y }}>
        <div ref={contentRef} className="flex flex-col shrink-0 gap-6 py-3">
          {children}
        </div>
        <div className="flex flex-col shrink-0 gap-6 py-3">{children}</div>
        <div className="flex flex-col shrink-0 gap-6 py-3">{children}</div>
      </motion.div>
    </div>
  );
};

// --- Component: Enhanced Service Card (Exact Design Match) ---
interface ServiceCardProps {
  title: string;
  description: string;
  icon: any;
  // onClick: () => void;
}

const ServiceCard = React.memo(
  ({ title, description, icon: Icon }: ServiceCardProps) => {
    return (
      <motion.div
        // onClick={onClick}
        whileTap={{ scale: 0.98 }}
        className="group relative w-full overflow-hidden rounded-lg border border-gray-200/50 backdrop-blur-sm cursor-pointer"
      >
        {/* Card Content */}
        <div className="relative flex h-[150px]">
          {/* Left Icon Section - Exactly 1/3 width */}
          <div className="flex shrink-0 items-center justify-center ">
            <div className="relative p-4">
              {/* Icon container */}
              <div className="relative flex items-center justify-center w-16 h-16 rounded-xl bg-white/50 group-hover:bg-white transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                <Icon
                  size={92}
                  strokeWidth={1.5}
                  className="text-gray-700 transition-all duration-500 group-hover:text-gray-900"
                />
              </div>
            </div>
          </div>

          {/* Right Content Section - 2/3 width */}
          <div className="relative flex flex-1 flex-col justify-center px-7 py-6">
            <h3 className="md:mb-3 font-montserrat text-lg md:text-xl font-bold text-gray-900 transition-all duration-300 group-hover:text-gray-950 leading-tight">
              {title}
            </h3>
            <p className="font-montserrat text-sm leading-tight text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
              {description}
            </p>
          </div>
        </div>
      </motion.div>
    );
  },
);

ServiceCard.displayName = "ServiceCard";

// --- Main Component ---
interface ServicesMarqueeProps {
  selectedCategory: string;
}

const ServicesMarquee = ({ selectedCategory }: ServicesMarqueeProps) => {
  const [selectedService, setSelectedService] = useState<{
    title: string;
    description: string;
    icon: any;
  } | null>(null);

  const allServices = [
    // IT Services
    {
      title: "Custom Software Development",
      description:
        "Tailored software solutions designed to meet your specific business requirements and challenges efficiently.",
      icon: Code,
      category: "IT",
    },
    {
      title: "Enterprise Platform Development",
      description:
        "Scalable and secure enterprise-grade platforms built to streamline complex business operations and workflows.",
      icon: Layers,
      category: "IT",
    },
    {
      title: "Web Application Development",
      description:
        "Robust and responsive web applications built with modern frameworks for optimal performance and user engagement.",
      icon: Layout,
      category: "IT",
    },
    {
      title: "Mobile App Development",
      description:
        "Native and cross-platform mobile apps that deliver exceptional user experiences on both iOS and Android devices.",
      icon: Smartphone,
      category: "IT",
    },
    {
      title: "CRM & ERP Solutions",
      description:
        "Integrated CRM and ERP systems customized to manage customer relationships and business resources effectively.",
      icon: Database,
      category: "IT",
    },
    {
      title: "Cloud Solutions & DevOps",
      description:
        "Cloud infrastructure management and DevOps practices to accelerate deployment, ensuring reliability and scalability.",
      icon: Cloud,
      category: "IT",
    },
    {
      title: "AI & Automation Systems",
      description:
        "Intelligent AI and automation solutions to optimize workflows, reduce manual effort, and drive data decision-making.",
      icon: Cpu,
      category: "IT",
    },
    {
      title: "SaaS Product Development",
      description:
        "End-to-end SaaS product development, from concept to launch, ensuring market fit and high scalability.",
      icon: Rocket,
      category: "IT",
    },
    {
      title: "System Integration",
      description:
        "Seamless integration of disparate systems and applications to improve data flow and overall operational efficiency.",
      icon: Network,
      category: "IT",
    },
    {
      title: "UI/UX Product Design",
      description:
        "User-centric design services that create intuitive, engaging, and aesthetically pleasing interfaces for digital products.",
      icon: Palette,
      category: "IT",
    },
    {
      title: "Website Development & Engineering",
      description:
        "Professional website development focused on speed, security, and SEO-friendly architecture for maximum impact.",
      icon: Globe,
      category: "IT",
    },
    // Marketing Services
    {
      title: "Performance Marketing",
      description:
        "Data-driven marketing strategies focused on delivering measurable results, maximizing ROI, and driving growth.",
      icon: TrendingUp,
      category: "Marketing",
    },
    {
      title: "Search Engine Optimization (SEO)",
      description:
        "Comprehensive SEO services to improve search rankings, drive organic traffic, and enhance online visibility.",
      icon: Search,
      category: "Marketing",
    },
    {
      title: "Social Media Management",
      description:
        "Strategic social media management to build brand awareness, foster community, and engage with your audience.",
      icon: Share2,
      category: "Marketing",
    },
    {
      title: "Paid Advertising (Meta, Google, LinkedIn)",
      description:
        "Targeted paid advertising campaigns across major platforms to reach your ideal customers effectively.",
      icon: Megaphone,
      category: "Marketing",
    },
    {
      title: "Brand Strategy & Positioning",
      description:
        "Strategic branding services to define your unique value proposition and establish a strong market position.",
      icon: Target,
      category: "Marketing",
    },
    {
      title: "Content Marketing",
      description:
        "Compelling content creation and distribution strategies designed to attract, educate, and retain your target audience.",
      icon: FileText,
      category: "Marketing",
    },
    {
      title: "Email Marketing & Funnel Automation",
      description:
        "Automated email marketing campaigns and sales funnels to nurture leads and convert them into loyal customers.",
      icon: Mail,
      category: "Marketing",
    },
    {
      title: "Conversion Rate Optimization",
      description:
        "Optimization techniques and testing to improve website conversion rates and turn visitors into customers.",
      icon: MousePointerClick,
      category: "Marketing",
    },
    {
      title: "Lead Generation Campaigns",
      description:
        "Focused lead generation strategies to identify and attract high-quality prospects for your business sales pipeline.",
      icon: Users,
      category: "Marketing",
    },
    {
      title: "Analytics & Data-Driven Growth Strategy",
      description:
        "Advanced analytics and reporting to track performance, understand behavior, and inform strategic growth decisions.",
      icon: BarChart,
      category: "Marketing",
    },
  ];

  const filteredServices =
    selectedCategory === "All"
      ? allServices
      : allServices.filter((s) => s.category === selectedCategory);

  // Split filtered services into two columns
  const half = Math.ceil(filteredServices.length / 2);
  const leftColumnServices = filteredServices.slice(0, half);
  const rightColumnServices = filteredServices.slice(half);

  return (
    <section className="relative overflow-hidden">
      {/* Marquee Container */}
      <div className="relative mx-auto h-[450px] max-w-6xl overflow-hidden px-2 lg:px-14 py-4">
        {/* Grid Container */}
        <div className="grid h-full grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
          {/* Left Column: Moves Upward (Bottom to Top) */}
          <MarqueeColumn baseVelocity={-35} isPaused={!!selectedService}>
            {leftColumnServices.map((service, idx) => (
              <ServiceCard
                key={`left-${selectedCategory}-${idx}`}
                {...service}
                // onClick={() => setSelectedService(service)}
              />
            ))}
          </MarqueeColumn>

          {/* Right Column: Moves Downward (Top to Bottom) */}
          <div className="hidden lg:block">
            <MarqueeColumn baseVelocity={35} isPaused={!!selectedService}>
              {rightColumnServices.map((service, idx) => (
                <ServiceCard
                  key={`right-${selectedCategory}-${idx}`}
                  {...service}
                  // onClick={() => setSelectedService(service)}
                />
              ))}
            </MarqueeColumn>
          </div>
        </div>
      </div>

      {/* Box Model / Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
            onClick={() => setSelectedService(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", duration: 0.5, bounce: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-linear-to-b from-white to-gray-50 rounded-2xl w-full max-w-lg overflow-hidden shadow-[0_20px_50px_-12px_rgba(0,0,0,0.25)] relative border border-gray-100"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/80 hover:bg-white transition-colors text-gray-500 hover:text-gray-900 shadow-sm border border-gray-100"
              >
                <X size={20} />
              </button>

              {/* Modal Content */}
              <div className="flex flex-col">
                {/* Header / Icon Area */}
                <div className="bg-gray-50/50 p-8 flex justify-center items-center border-b border-gray-100/50">
                  <div className="w-24 h-24 bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex items-center justify-center p-5">
                    <selectedService.icon
                      size={64}
                      strokeWidth={1.5}
                      className="text-gray-900"
                    />
                  </div>
                </div>

                {/* Text Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold font-montserrat text-gray-900 mb-4 text-center">
                    {selectedService.title}
                  </h3>
                  <p className="text-gray-600 font-montserrat leading-relaxed text-center">
                    {selectedService.description}
                  </p>

                  <div className="mt-8 flex justify-center">
                    <button
                      onClick={() => setSelectedService(null)}
                      className="px-8 py-3 bg-gray-900 text-white font-medium rounded-xl hover:bg-gray-800 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-gray-900/20"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ServicesMarquee;
