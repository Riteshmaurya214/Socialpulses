"use client"
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionSubheading } from "@/components/ui/SectionSubheading";
import { CheckCircle2, Zap, Monitor, Rocket } from "lucide-react";

const servicesDetails = {
  it: {
    title: "Software & IT Engineering",
    icon: <Monitor className="w-5 h-5" />,
    features: [
      "Custom Software Development",
      "Scalable Cloud Infrastructure",
      "Enterprise System Integration",
      "DevOps & Automation",
      "Security & Data Compliance",
      "API & Microservices Architecture"
    ],
    benefits: [
      "Optimized Business Performance",
      "Reduced Technical Debt",
      "Faster Time-to-Market",
      "Seamless Scalability",
      "Enhanced Data Security"
    ],
    technologies: ["React", "Node.js", "AWS", "Docker", "Kubernetes", "TypeScript", "Python"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop"
  },
  marketing: {
    title: "Digital Marketing & Growth",
    icon: <Rocket className="w-5 h-5" />,
    features: [
      "Targeted Ad Campaigns",
      "Performance Marketing Strategy",
      "Advanced SEO Optimization",
      "Social Media Management",
      "Analytics & BI Dashboards",
      "Marketing Automation"
    ],
    benefits: [
      "Significant ROI Increase",
      "Enhanced Brand Visibility",
      "High-Quality Lead Generation",
      "Improved Conversion Rates",
      "Deeper Customer Engagement"
    ],
    technologies: ["Google Ads", "Meta Ads", "HubSpot", "GA4", "Semrush", "Canva", "Mailchimp"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop" // Reusing or using a similar stylized image
  }
};

export default function FeaturesAndBenefits() {
  const [activeTab, setActiveTab] = useState<"it" | "marketing">("it");

  const current = servicesDetails[activeTab];

  return (
    <section className="py-24 bg-white relative overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/image/logo-bg.png')" }}>
      {/* Background patterns */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0" style={{ backgroundImage: `radial-gradient(#4F46E5 1px, transparent 1px)`, backgroundSize: '40px 40px' }}></div>
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <SectionSubheading text="Capabilities" animated className="justify-center" />
          <h2 className="font-montserrat text-4xl lg:text-5xl font-bold mt-4">
            Powerful Features for{" "}
            <span className="bg-linear-to-r from-[#3B82F6] via-[#6366F1] to-[#4F46E5] bg-clip-text text-transparent">
              Extraordinary Results
            </span>
          </h2>
          <p className="font-inter text-gray-600 mt-6 max-w-2xl mx-auto text-lg">
            Explore how our specialized IT and Marketing solutions can transform your business operations and drive growth.
          </p>

          {/* Switcher */}
          <div className="flex justify-center mt-10">
            <div className="bg-gray-100 p-1.5 rounded-full inline-flex items-center shadow-inner border border-gray-200">
              <button
                onClick={() => setActiveTab("it")}
                className={`flex items-center gap-2 px-8 py-3 rounded-full font-montserrat font-semibold transition-all duration-300 ${
                  activeTab === "it"
                    ? "bg-white text-[#4F46E5] shadow-md"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                {servicesDetails.it.icon}
                IT Solutions
              </button>
              <button
                onClick={() => setActiveTab("marketing")}
                className={`flex items-center gap-2 px-8 py-3 rounded-full font-montserrat font-semibold transition-all duration-300 ${
                  activeTab === "marketing"
                    ? "bg-white text-[#4F46E5] shadow-md"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                {servicesDetails.marketing.icon}
                Digital Marketing
              </button>
            </div>
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid lg:grid-cols-2 gap-16 items-center"
          >
            {/* Content Side */}
            <div className="order-2 lg:order-1">
              <div className="grid md:grid-cols-2 gap-10">
                {/* Key Features */}
                <div>
                  <h3 className="font-montserrat font-bold text-2xl text-gray-900 mb-6 flex items-center gap-3">
                    <CheckCircle2 className="text-[#3B82F6] w-6 h-6" />
                    Key Features
                  </h3>
                  <ul className="space-y-4">
                    {current.features.map((feature, i) => (
                      <motion.li 
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-start gap-3 group"
                      >
                        <div className="mt-1 w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center shrink-0 group-hover:bg-blue-100 transition-colors">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#3B82F6]" />
                        </div>
                        <span className="font-inter text-gray-700 group-hover:text-gray-900 transition-colors">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Benefits */}
                <div>
                  <h3 className="font-montserrat font-bold text-2xl text-gray-900 mb-6 flex items-center gap-3">
                    <Zap className="text-[#FBBF24] w-6 h-6" />
                    Benefits
                  </h3>
                  <ul className="space-y-4">
                    {current.benefits.map((benefit, i) => (
                      <motion.li 
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + (i * 0.1) }}
                        className="flex items-start gap-3 group"
                      >
                        <div className="mt-1 w-5 h-5 rounded-full bg-amber-50 flex items-center justify-center shrink-0 group-hover:bg-amber-100 transition-colors">
                          <Zap className="w-3.5 h-3.5 text-[#FBBF24]" />
                        </div>
                        <span className="font-inter text-gray-700 group-hover:text-gray-900 transition-colors">{benefit}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Tech stack */}
              <div className="mt-12 pt-8 border-t border-gray-100">
                <h4 className="font-montserrat font-bold text-lg text-gray-900 mb-4">
                  Technologies We Use
                </h4>
                <div className="flex flex-wrap gap-3">
                  {current.technologies.map((tech, i) => (
                    <span 
                      key={i}
                      className="px-4 py-2 bg-gray-50 border border-gray-100 rounded-lg text-sm font-inter text-gray-600 hover:border-[#6366F1]/30 hover:bg-white hover:shadow-sm transition-all cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Image/Visual Side */}
            <div className="order-1 lg:order-2 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
                <img 
                  src={current.image} 
                  alt={current.title}
                  className="w-full h-auto object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-linear-to-t from-gray-900/60 to-transparent flex flex-col justify-end p-8 text-white">
                  <h4 className="font-montserrat font-bold text-2xl mb-2">{current.title}</h4>
                  <p className="font-inter text-gray-200 opacity-90">Building the future of digital excellence.</p>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-[#3B82F6] rounded-full blur-3xl opacity-20 -z-10 animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#4F46E5] rounded-full blur-3xl opacity-20 -z-10 animate-pulse delay-700"></div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
