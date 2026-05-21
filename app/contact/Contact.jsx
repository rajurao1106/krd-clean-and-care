"use client";

import React from 'react';
import { MapPin, Phone, Truck, Globe, Send } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  const cardFadeInRight = {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div className="min-h-screen max-lg:pt-14 bg-white font-sans">
      {/* --- FORM & INFO SECTION --- */}
      <section className="max-w-7xl mx-auto py-16 md:py-24 px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
            Let&apos;s Start a <span className="text-[#0056B3]">Conversation</span>
          </h2>
          <p className="text-gray-500 mt-4 text-lg">Have questions about our manufacturing process or bulk supplies?</p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Form - Taking 7 columns */}
          <motion.form 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
            className="lg:col-span-7 space-y-6 bg-gray-50 p-8 rounded-2xl border border-gray-100"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div variants={fadeInUpVariants} className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">First Name *</label>
                <input type="text" placeholder="John" className="w-full bg-white border border-gray-200 p-4 rounded-xl outline-none focus:ring-2 focus:ring-[#0056B3]/20 focus:border-[#0056B3] transition-all" />
              </motion.div>
              <motion.div variants={fadeInUpVariants} className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Last Name *</label>
                <input type="text" placeholder="Doe" className="w-full bg-white border border-gray-200 p-4 rounded-xl outline-none focus:ring-2 focus:ring-[#0056B3]/20 focus:border-[#0056B3] transition-all" />
              </motion.div>
            </div>

            <motion.div variants={fadeInUpVariants} className="space-y-2">
              <label className="text-sm font-semibold text-slate-700">Email Address</label>
              <input type="email" placeholder="john@company.com" className="w-full bg-white border border-gray-200 p-4 rounded-xl outline-none focus:ring-2 focus:ring-[#0056B3]/20 focus:border-[#0056B3] transition-all" />
            </motion.div>

            <motion.div variants={fadeInUpVariants} className="space-y-2">
              <label className="text-sm font-semibold text-slate-700">Message</label>
              <textarea rows="5" placeholder="Tell us about your requirements..." className="w-full bg-white border border-gray-200 p-4 rounded-xl outline-none focus:ring-2 focus:ring-[#0056B3]/20 focus:border-[#0056B3] transition-all resize-none"></textarea>
            </motion.div>
            
            <motion.button 
              whileTap={{ scale: 0.98 }}
              variants={fadeInUpVariants}
              className="flex items-center justify-center gap-3 w-full bg-[#0056B3] text-white py-4 rounded-xl font-bold uppercase tracking-widest hover:bg-red-500 transition-all shadow-lg shadow-blue-100 group"
            >
              Submit Message
              <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </motion.button>
          </motion.form>

          {/* Contact Information Card - Taking 5 columns */}
          <div className="lg:col-span-5 space-y-6">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={cardFadeInRight}
              className="bg-white border border-gray-100 shadow-[0px_20px_60px_rgba(0,86,179,0.08)] rounded-3xl p-8 md:p-10"
            >
              <h3 className="text-2xl font-bold mb-10 text-slate-900 border-b pb-4">
                Reach Us <span className="text-[#0056B3]">Directly</span>
              </h3>
              
              <div className="space-y-10">
                <div className="flex gap-5">
                  <div className="bg-blue-50 h-15 p-4 rounded-2xl text-[#0056B3]">
                    <MapPin size={26} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-slate-900">Our Location</h4>
                    <p className="text-slate-600 leading-relaxed mt-1">
                      Industrial Area Amaseoni, Khasra No. 232/1 Part, <br />
                      Raipur, Chhattisgarh, 492001, India
                    </p>
                  </div>
                </div>

                <div className="flex gap-5">
                  <div className="bg-blue-50 p-4 rounded-2xl text-[#0056B3]">
                    <Phone size={26} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-slate-900">Call Us</h4>
                    <p className="text-slate-600 text-xl font-medium mt-1">+91 80489 66524</p>
                  </div>
                </div>

                <div className="flex gap-5">
                  <div className="bg-blue-50 p-4 rounded-2xl text-[#0056B3]">
                    <Globe size={26} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-slate-900">Marketplace</h4>
                    <a 
                      href="https://www.indiamart.com/krdcleancare" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-[#0056B3] hover:underline font-medium text-lg block mt-1"
                    >
                      indiamart.com/krdcleancare
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Bulk Order Section - Prominent */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
              className="bg-[#0056B3] text-white p-8 rounded-3xl flex flex-col md:flex-row items-center gap-6 relative overflow-hidden group"
            >
              <Truck size={60} className="absolute -right-4 -bottom-4 opacity-10 group-hover:scale-110 transition-transform" />
              <div className="bg-white/10 p-4 rounded-full">
                <Truck size={32} />
              </div>
              <div className="text-center md:text-left">
                <h4 className="font-bold text-xl mb-1">Looking for Bulk Orders?</h4>
                <p className="text-blue-100 opacity-90 text-sm">
                  Get specialized B2B pricing and custom manufacturing solutions.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section - Full Width with Hover Transition */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="w-full h-[450px] relative group overflow-hidden border-t"
      >
        <div className="absolute inset-0 bg-slate-900/10 pointer-events-none group-hover:bg-transparent transition-colors duration-500 z-10" />
        <iframe 
          title="Location Map"
          className="w-full h-full grayscale-[50%] group-hover:grayscale-0 transition-all duration-700 ease-in-out"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3718.544837549117!2d81.7061793!3d21.2498704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28dd0409f0f9c5%3A0x633b497f6c348555!2sAmaseoni%2C%20Raipur%2C%20Chhattisgarh!5e0!3m2!1sen!2sin!4v1715510000000!5m2!1sen!2sin"
          loading="lazy"
        ></iframe>
      </motion.section>
    </div>
  );
};

export default Contact;