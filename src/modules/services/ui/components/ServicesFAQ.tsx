"use client";
import React, { useState } from "react";
import { SectionSubheading } from "@/components/ui/SectionSubheading";
import { ChevronDown, Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "How soon can you start?",
    answer:
      "We typically start new projects within 1-2 weeks after the initial discovery phase and contract signing. This allows us to assemble the perfect team for your specific needs.",
  },
  {
    question: "Do you build custom software?",
    answer:
      "Yes, we specialize in building fully custom software solutions tailored to your unique business requirements, from web applications to enterprise systems.",
  },
  {
    question: "What is your pricing approach?",
    answer:
      "We offer both project-based and retainer models tailored to your scope and goals. We believe in transparent pricing with no hidden fees, focused on delivering measurable ROI.",
  },
  {
    question: "How do you measure performance?",
    answer:
      "We use data-driven metrics aligned with your KPIs. Whether it's lead generation, conversion rates, or user engagement, we provide regular reports to track success.",
  },
  {
    question: "Do you work with startups?",
    answer:
      "Absolutely! We have extensive experience partnering with startups to build MVPs, scalable products, and growth strategies that help them secure funding and market traction.",
  },
];

export default function ServicesFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white"
    style={{
        backgroundImage: `radial-gradient(rgba(0, 0, 0, 0.1) 1.5px, transparent 1px)`,
        backgroundSize: "30px 30px",
      }}
    >
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <SectionSubheading text="FAQ" animated />
          <h2 className="font-montserrat text-3xl md:text-4xl font-bold text-gray-900 mt-4 leading-tight">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="border border-gray-100 rounded-2xl overflow-hidden hover:border-gray-200 transition-colors bg-gray-50/50"
            >
              <button
                onClick={() => toggleFAQ(idx)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
              >
                <span className="font-montserrat font-semibold text-lg text-gray-900 pr-8">
                  {faq.question}
                </span>
                <span
                  className={`p-2 rounded-full ${openIndex === idx ? "bg-linear-to-r from-[#3B82F6] via-[#6366F1] to-[#4F46E5] text-white" : "bg-gray-100 text-gray-500"} transition-colors`}
                >
                  {openIndex === idx ? <Minus size={20} /> : <Plus size={20} />}
                </span>
              </button>

              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-6 pt-0">
                      <p className="font-inter text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
