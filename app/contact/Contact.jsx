"use client";

import React, { useState, useEffect } from 'react';
import { MapPin, Phone, Truck, Globe, Send, Mail, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [settings, setSettings] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/admin/settings');
        const data = await response.json();
        setSettings(data.settings);
      } catch (error) {
        console.error("Error fetching site settings:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSettings();
  }, []);

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  const cardFadeInRight = {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="animate-pulse flex flex-col items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-blue-100 border-2 border-t-[#0056B3] animate-spin" />
          <p className="text-gray-400 font-medium">Loading details...</p>
        </div>
      </div>
    );
  }

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
          <p className="text-gray-500 mt-4 text-lg">
            Have questions about our manufacturing process or bulk supplies with {settings?.site_name || "us"}?
          </p>
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
              
              <div className="space-y-8">
                {settings?.site_address && (
                  <div className="flex gap-5">
                    <div className="bg-blue-50 h-14 w-14 flex items-center justify-center rounded-2xl text-[#0056B3] shrink-0">
                      <MapPin size={26} />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-slate-900">Our Location</h4>
                      <p className="text-slate-600 leading-relaxed mt-1 whitespace-pre-line">
                        {settings.site_address}
                      </p>
                    </div>
                  </div>
                )}

                {settings?.site_phone && (
                  <div className="flex gap-5">
                    <div className="bg-blue-50 h-14 w-14 flex items-center justify-center rounded-2xl text-[#0056B3] shrink-0">
                      <Phone size={26} />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-slate-900">Call Us</h4>
                      <p className="text-slate-600 text-xl font-medium mt-1">
                        {settings.site_phone}
                      </p>
                    </div>
                  </div>
                )}

                {settings?.site_email && (
                  <div className="flex gap-5">
                    <div className="bg-blue-50 h-14 w-14 flex items-center justify-center rounded-2xl text-[#0056B3] shrink-0">
                      <Mail size={26} />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-slate-900">Email Us</h4>
                      <a href={`mailto:${settings.site_email}`} className="text-[#0056B3] hover:underline text-lg font-medium mt-1 block">
                        {settings.site_email}
                      </a>
                    </div>
                  </div>
                )}

                {settings?.working_hours && (
                  <div className="flex gap-5">
                    <div className="bg-blue-50 h-14 w-14 flex items-center justify-center rounded-2xl text-[#0056B3] shrink-0">
                      <Clock size={26} />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-slate-900">Working Hours</h4>
                      <p className="text-slate-600 font-medium mt-1">
                        {settings.working_hours}
                      </p>
                    </div>
                  </div>
                )}

                {/* <div className="flex gap-5">
                  <div className="bg-blue-50 h-14 w-14 flex items-center justify-center rounded-2xl text-[#0056B3] shrink-0">
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
                </div> */}
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
              <div className="bg-white/10 p-4 rounded-full shrink-0">
                <Truck size={32} />
              </div>
              <div className="text-center md:text-left">
                <h4 className="font-bold text-xl mb-1">Looking for Bulk Orders?</h4>
                <p className="text-blue-100 opacity-90 text-sm">
                  Get specialized B2B pricing and custom manufacturing solutions from {settings?.site_name || "us"}.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section - Full Width with Hover Transition */}
      {settings?.google_maps_embed && (
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
            src={settings.google_maps_embed}
            loading="lazy"
          ></iframe>
        </motion.section>
      )}
    </div>
  );
};

export default Contact;