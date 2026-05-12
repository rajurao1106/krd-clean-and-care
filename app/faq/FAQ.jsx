"use client"

import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "Who should buy cleaning supplies in bulk from JKD Enterprises?",
      answer: "Hotels, hospitals, corporate offices, manufacturing units, educational institutions, and cleaning contractors should buy cleaning supplies in bulk from JKD Enterprises to maintain consistent cleaning quality and manage budgets efficiently.",
    },
    {
      question: "What industrial cleaning supplies does JKD Enterprises provide?",
      answer: "We provide a wide range of industrial cleaners including degreasers, floor care products, and specialized chemical solutions.",
    },
    {
      question: "How can I place an order with JKD Enterprises?",
      answer: "You can place an order directly through our website, via email, or by contacting our sales team via phone.",
    },
    {
      question: "Do you provide delivery services at JKD Enterprises?",
      answer: "Yes, we offer reliable delivery services across all regions we serve, ensuring your supplies arrive on schedule.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Header Section */}
      <header className="relative bg-[#f1f8e9] pt-16 pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 z-10">
            <h1 className="text-5xl font-bold text-slate-900 leading-tight">
              Frequently Asked <br />
              <span className="text-[#8ec63f]">Questions !</span>
            </h1>
            <p className="mt-6 text-gray-600 max-w-md leading-relaxed">
              Got questions? We've got answers! Browse through our FAQs to find quick solutions to common queries about our products, services, and ordering process.
            </p>
          </div>
          <div className="md:w-1/2 relative mt-10 md:mt-0 flex justify-end">
            {/* Replace with your actual image path */}
            <div className="relative w-[400px] h-[300px]">
               <Image 
                src="/faq-team.png" 
                alt="Support Team" 
                fill 
                className="object-contain"
              />
            </div>
          </div>
        </div>
        {/* Wave effect at bottom (optional SVG) */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[60px] fill-white">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.43,147.3,126,219.54,108.06A322.83,322.83,0,0,0,321.39,56.44Z"></path>
          </svg>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 -mt-16 pb-20 flex flex-col lg:flex-row gap-12">
        
        {/* Left: Accordion Section */}
        <div className="lg:w-2/3">
          <h2 className="text-3xl font-bold text-slate-900 mb-2">Quick Answers</h2>
          <p className="text-gray-500 mb-8">Find helpful answers to the most frequently asked questions about our products, ordering process, and services.</p>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white border border-gray-100 rounded-lg shadow-sm">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                  className="w-full flex items-center justify-between p-5 text-left transition-colors hover:bg-gray-50"
                >
                  <span className={`font-semibold ${openIndex === index ? 'text-slate-900' : 'text-gray-700'}`}>
                    {faq.question}
                  </span>
                  {openIndex === index ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
                </button>
                {openIndex === index && (
                  <div className="px-5 pb-5 text-gray-600 leading-relaxed border-t border-gray-50 pt-4 animate-in fade-in duration-300">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right: Contact Form */}
        <div className="lg:w-1/3">
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 sticky top-8">
            <h3 className="text-xl font-bold text-slate-900 mb-6">Still Have A Questions?</h3>
            <form className="space-y-4">
              <input type="text" placeholder="Your First Name... *" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#8ec63f] outline-none text-sm" />
              <input type="text" placeholder="Your Last Name... *" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#8ec63f] outline-none text-sm" />
              <input type="email" placeholder="Your Email..." className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#8ec63f] outline-none text-sm" />
              <input type="tel" placeholder="Your Mobile Number... *" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#8ec63f] outline-none text-sm" />
              <textarea placeholder="Your Message..." rows={4} className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#8ec63f] outline-none text-sm resize-none"></textarea>
              
              {/* Dummy Captcha Placeholder */}
              <div className="bg-gray-50 border border-gray-200 p-3 rounded flex items-center justify-between text-xs text-gray-500">
                <div className="flex items-center gap-2">
                  <input type="checkbox" id="captcha" className="w-4 h-4" />
                  <label htmlFor="captcha">I'm not a robot</label>
                </div>
                <img src="https://www.gstatic.com/recaptcha/api2/logo_48.png" alt="reCAPTCHA" className="w-6 h-6 opacity-60" />
              </div>

              <button className="w-full bg-[#8ec63f] text-white font-bold py-3 rounded-lg hover:bg-[#7ab035] transition-colors uppercase text-sm tracking-wide">
                Submit Message
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default FAQPage;