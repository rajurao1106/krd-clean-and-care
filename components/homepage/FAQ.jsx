"use client";

import React, { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import apiClient from "@/utils/api"; 
import { motion, AnimatePresence } from "framer-motion";

// Unused imports (Plus, Minus, Send, CheckCircle2, Image) removed to keep it clean.

export default function FAQSection({ isHomePage = false }) {
  const [faqs, setFaqs] = useState([]);
  const [loading, setLoading] = useState(true);
  
  // FIX: Added the missing state for accordion management
  const [openIndex, setOpenIndex] = useState(-1);

  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        const response = await apiClient.get("/api/admin/faqs");
        const rawFaqs = response.data?.faqs || response.data || [];

        // 1. Pehle sirf active elements filter karein
        let filteredFaqs = rawFaqs.filter((item) => item.is_active === 1);

        // 2. Agar home page par render kar rahe hain to page 'both' ya 'home' dikhayein
        if (isHomePage) {
          filteredFaqs = filteredFaqs.filter(
            (item) => item.page === "both" || item.page === "home"
          );
        }

        // 3. Sort order ke mutabik sequence order arrange karein
        const sortedFaqs = filteredFaqs.sort(
          (a, b) => a.sort_order - b.sort_order
        );

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
          <h2 className="text-4xl md:text-5xl font-semibold text-[#0056B3] mb-4 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-500 font-[poppins] text-lg">
            Find quick answers about our cleaning formulations, bulk ordering,
            eco-friendly standards, and industrial supply capabilities.
          </p>
        </header>

        {/* Dynamic FAQ List Grid wrapper */}
        <div className="space-y-4">
          {faqs.map((item, index) => (
            <div
              key={item.id || index}
              className={`transition-all duration-300 rounded-xl border ${
                openIndex === index
                  ? "border-blue-200 bg-blue-50/30"
                  : "border-gray-100 bg-white shadow-sm"
                }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                aria-expanded={openIndex === index}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
              >
                <span
                  className={`text-lg font-semibold transition-colors duration-200 ${
                    openIndex === index ? "text-[#0056B3]" : "text-slate-800"
                  }`}
                >
                  {item.question}
                </span>
                <div
                  className={`p-1 rounded-full transition-transform duration-300 ${
                    openIndex === index ? "rotate-180 bg-blue-100" : "bg-gray-50"
                  }`}
                >
                  <ChevronDown
                    className={`w-5 h-5 ${
                      openIndex === index ? "text-[#0056B3]" : "text-gray-400"
                    }`}
                  />
                </div>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-gray-600 leading-relaxed text-base">
                      {item.answer}
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