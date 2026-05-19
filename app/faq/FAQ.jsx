"use client";

import React, { useState, useEffect } from "react";
import { ChevronDown, Send, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import faq from "@/public/faq/faq.png";
import apiClient from "@/utils/api"; // Central Axios instance client

const FAQPage = () => {
  const [faqs, setFaqs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openIndex, setOpenIndex] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const fetchFAQPageData = async () => {
      try {
        // Central endpoint data fetch setup
        const response = await apiClient.get("/api/admin/faqs");
        const rawFaqs = response.data?.faqs || response.data || [];

        // Active items filter + validation checks for FAQ Page specifically
        const targetFaqs = rawFaqs
          .filter((item) => item.is_active === 1 && (item.page === "faq" || item.page === "both"))
          .sort((a, b) => a.sort_order - b.sort_order);

        setFaqs(targetFaqs);
      } catch (error) {
        console.error("FAQ page data pipeline error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFAQPageData();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Form action handler setup hooks yahan add kar sakte hain
  };

  if (loading) {
    return (
      <div className="w-full min-h-screen bg-white flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#0056B3]"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-blue-100">
      {/* Header Section */}
      <header className="relative bg-[#e9f3f8] pt-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="md:w-1/2 z-10"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 leading-tight">
              Frequently Asked <br />
              <span className="text-[#0056B3]">Questions!</span>
            </h1>
            <p className="mt-6 text-gray-600 text-lg max-w-md leading-relaxed">
              Find quick solutions to common queries about our herbal products, industrial supply, and corporate services.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="md:w-1/2 relative mt-10 md:mt-0 flex justify-end"
          >
            <div className="relative w-full max-w-[800px] aspect-square md:aspect-video">
              <Image 
                src={faq}
                alt="Customer Support" 
                fill 
                priority
                className="object-contain drop-shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-6 -mt-16 pb-20 flex flex-col lg:flex-row gap-12">
        
        {/* Accordion Section */}
        <div className="lg:w-2/3 pt-20">
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-slate-900 mb-2">Quick Answers</h2>
            <div className="h-1 w-20 bg-[#0056B3] rounded-full"></div>
          </div>
          
          <div className="space-y-4">
            {faqs.map((item, index) => (
              <div 
                key={item.id || index} 
                className={`transition-all duration-300 rounded-xl border ${
                  openIndex === index ? 'border-blue-200 bg-blue-50/30' : 'border-gray-100 bg-white shadow-sm'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                  aria-expanded={openIndex === index}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className={`text-lg font-semibold ${openIndex === index ? 'text-[#0056B3]' : 'text-slate-800'}`}>
                    {item.question}
                  </span>
                  <div className={`p-1 rounded-full transition-transform duration-300 ${openIndex === index ? 'rotate-180 bg-blue-100' : 'bg-gray-50'}`}>
                    <ChevronDown className={`w-5 h-5 ${openIndex === index ? 'text-[#0056B3]' : 'text-gray-400'}`} />
                  </div>
                </button>
                
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
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

        {/* Contact Form Section */}
        <aside className="lg:w-1/3">
          <div className="bg-white p-8 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-100 sticky top-8">
            {!isSubmitted ? (
              <>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Still Curious?</h3>
                <p className="text-gray-500 mb-8 text-sm">Send us your query and our team will get back to you within 24 hours.</p>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <input required type="text" placeholder="First Name*" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:border-[#0056B3] focus:ring-1 focus:ring-[#0056B3] outline-none text-sm transition-all" />
                    <input required type="text" placeholder="Last Name*" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:border-[#0056B3] focus:ring-1 focus:ring-[#0056B3] outline-none text-sm transition-all" />
                  </div>
                  <input required type="email" placeholder="Email Address*" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:border-[#0056B3] focus:ring-1 focus:ring-[#0056B3] outline-none text-sm transition-all" />
                  <input required type="tel" placeholder="Mobile Number*" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:border-[#0056B3] focus:ring-1 focus:ring-[#0056B3] outline-none text-sm transition-all" />
                  <textarea required placeholder="How can we help you?" rows={4} className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:border-[#0056B3] focus:ring-1 focus:ring-[#0056B3] outline-none text-sm resize-none transition-all"></textarea>
                  
                  <button type="submit" className="group w-full bg-[#0056B3] hover:bg-red-500 text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-200">
                    <span>Send Message</span>
                  </button>
                </form>
              </>
            ) : (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-10"
              >
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Thank You!</h3>
                <p className="text-gray-500 text-sm">Your message has been received. We'll be in touch soon.</p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="mt-6 text-[#0056B3] text-sm font-semibold hover:underline"
                >
                  Send another message
                </button>
              </motion.div>
            )}
          </div>
        </aside>
      </main>
    </div>
  );
};

export default FAQPage;