"use client";

import React, { useState, useEffect } from "react";
import { Plus, Minus } from "lucide-react";
import apiClient from "@/utils/api"; // Aapka central Axios client layer

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

// isHomePage prop lagaya hai taaki page configuration handle ho sake
export default function FAQSection({ isHomePage = false }) {
  const [faqs, setFaqs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        const response = await apiClient.get("/api/admin/faqs");
        const rawFaqs = response.data?.faqs || response.data || [];

        // 1. Pehle sirf active elements filter karein
        let filteredFaqs = rawFaqs.filter((item) => item.is_active === 1);

        // 2. Agar home page par render kar rahe hain to sirf page 'both' dikhayein
        if (isHomePage) {
          filteredFaqs = filteredFaqs.filter(
            (item) => item.page === "both" || item.page === "home"
          );
        }

        // 3. Sort order ke mutabik sequence order arrange karein
        const sortedFaqs = filteredFaqs.sort((a, b) => a.sort_order - b.sort_order);

        setFaqs(sortedFaqs);
      } catch (error) {
        console.error("FAQs data network layer crash error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFaqs();
  }, [isHomePage]);

  // Loading indicator skeleton state
  if (loading) {
    return (
      <div className="w-full py-20 bg-white flex items-center justify-center">
        <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-[#0056B3]"></div>
      </div>
    );
  }

  // Agar backend empty ho to section skip karne ke liye
  if (faqs.length === 0) return null;

  return (
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        
        {/* Header Section */}
        <header className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-4 tracking-tight">
            Ask Us Anything
          </h2>
          <p className="text-gray-500 font-[poppins] text-lg">
            Have questions? We're here to help you make the eco-friendly switch.
          </p>
        </header>

        {/* Dynamic FAQ List Grid wrapper */}
        <div className="space-y-1">
          {faqs.map((item) => (
            <FAQItem
              key={item.id}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>
    
      </div>
    </section>
  );
}