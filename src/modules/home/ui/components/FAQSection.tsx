"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

const faqData = [
  {
    question: "Why wouldn't I hire a full-time designer?",
    answer: "Hiring a full-time designer can be costly and may not always align with your evolving design needs. Our subscription model offers flexible, on-demand access to a team without the long-term commitment.",
  },
  {
    question: "What is included in each subscription plan?",
    answer: "Each plan includes a set number of active requests, unlimited revisions, and access to our full suite of design services including UI/UX, branding, and motion graphics.",
  },
  {
    question: "Can I switch plans later?",
    answer: "Yes! You can upgrade or downgrade your subscription at any time. Changes will be reflected in your next billing cycle.",
  },
  {
    question: "How does the revision process work?",
    answer: "We offer unlimited revisions. You can provide feedback directly on the design files or through our project management portal until you are 100% satisfied.",
  },
];

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-100 last:border-none">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between py-6 text-left transition-colors hover:text-gray-600"
      >
        <span className="text-lg font-medium text-gray-900">{question}</span>
        
        {/* Animated Icon Container */}
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-50 text-gray-900"
        >
          <Plus size={20} />
        </motion.div>
      </button>

      {/* Smooth Expanding Content */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="overflow-hidden"
          >
            <div className="pb-6 pr-12 text-gray-600 leading-relaxed">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const FAQSection = ({ faqs }: { faqs?: { question: string; answer: string }[] }) => {
  const displayData = faqs && faqs.length > 0 ? faqs : faqData;
  return (
    <section className="mx-auto max-w-3xl px-6">

      <div className="rounded-3xl border border-gray-100 bg-white px-8 shadow-sm">
        {displayData.map((item, index) => (
          <FAQItem key={index} question={item.question} answer={item.answer} />
        ))}
      </div>
    </section>
  );
};