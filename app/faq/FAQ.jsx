"use client"

import React, { useState } from "react";
import { ChevronDown, ChevronUp, Send, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import faq from "@/public/faq/faq.png";

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const faqs = [
    {
      question: "Are your cleaning products herbal?",
      answer: "Yes, we offer a range of herbal-based products, including our popular Neem and Lemon Grass cleaners. These are formulated to be tough on dirt but gentle on the environment and users.",
    },
    {
      question: "Where is your manufacturing unit located?",
      answer: "Our state-of-the-art manufacturing units are strategically located in the Mandhar and Amaseoni Industrial Areas in Raipur, Chhattisgarh, allowing us to efficiently distribute across Central India.",
    },
    {
      question: "Do you offer bulk B2B pricing?",
      answer: "Absolutely. As a registered Private Limited manufacturer, we specialize in high-volume supply for retail chains, hospitality sectors, and industrial clients with tiered pricing structures.",
    },
    {
      question: "Are your products GST compliant?",
      answer: "Yes, KRD Clean and Care Private Limited is a fully GST-registered entity. All our invoices are compliant, making it easy for B2B clients to claim input tax credits.",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Add your API logic here
  };

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

        {/* Decorative Wave */}
        <div className="absolute bottom-0 left-0 w-full rotate-180 opacity-50">
           <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="fill-white h-[60px] w-full">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.43,147.3,126,219.54,108.06A322.83,322.83,0,0,0,321.39,56.44Z"></path>
          </svg>
        </div>
      </header>

      {/* Main Content */}
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
                key={index} 
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
                  
                  <button type="submit" className="group w-full bg-[#0056B3] hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-200">
                    <span>Send Message</span>
                    <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
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