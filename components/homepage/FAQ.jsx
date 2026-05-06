"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqData = [
  {
    question: "What makes KRD products eco-friendly?",
    answer:
      "KRD products are powered by plant-based ingredients, making them biodegradable and free from harsh chemicals like phosphates and parabens.",
  },
  {
    question: "Are KRD products safe for children and pets?",
    answer:
      "Yes, our formulations are non-toxic and designed to be safe for use around your entire family, including little ones and furry friends.",
  },
  {
    question: "How does using KRD products make a difference?",
    answer:
      "By choosing KRD, you reduce plastic waste through our refill systems and prevent toxic runoff from entering our water systems.",
  },
  {
    question: "How effective are KRD products compared to conventional brands?",
    answer:
      "Our products undergo rigorous testing to ensure they match or exceed the cleaning power of traditional brands without the chemical smell.",
  },
  {
    question: "Can I use KRD products on delicate surfaces?",
    answer:
      "Most of our products are pH-balanced and safe for various surfaces. We always recommend a small spot test first for specialized materials.",
  },
];

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-4 overflow-hidden border border-transparent transition-all duration-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        className={`w-full flex items-center justify-between p-5 md:p-6 transition-all duration-300 text-left group rounded-xl ${
          isOpen 
            ? "bg-[#c6d7f3] shadow-sm rounded-b-none" 
            : "bg-[#e9ecf7a4] hover:bg-[#dbe6f8]"
        }`}
      >
        <span className="text-lg md:text-xl font-semibold text-gray-900 pr-4">
          {question}
        </span>
        <div className={`flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
          {isOpen ? (
            <Minus className="w-6 h-6 text-blue-700" />
          ) : (
            <Plus className="w-6 h-6 text-gray-500 group-hover:text-gray-900" />
          )}
        </div>
      </button>

      {/* Modern Smooth Height Transition using CSS Grid */}
      <div
        className={`grid transition-all duration-300 ease-in-out bg-[#fcfaf6] rounded-b-xl border-x border-b border-gray-100 ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="p-6 text-gray-700 leading-relaxed md:text-lg border-t border-blue-100/50">
            {answer}
          </div>
        </div>
      </div>
    </div>
  );
};

export default function FAQSection() {
  return (
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4 tracking-tight">
            Ask Us Anything
          </h2>
          <p className="text-gray-500 font-[poppins] text-lg">
            Have questions? We're here to help you make the eco-friendly switch.
          </p>
        </header>

        <div className="space-y-1">
          {faqData.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>
    
      </div>
    </section>
  );
}