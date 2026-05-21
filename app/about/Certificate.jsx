"use client";

import React from "react";
import { motion } from "framer-motion";

const Certificate = () => {
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section className="w-full bg-[#0056B3] py-16 px-6 md:py-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Text Content */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            visible: { transition: { staggerChildren: 0.15 } }
          }}
          className="text-white space-y-6"
        >
          <motion.div variants={fadeInUpVariants} className="flex items-center gap-2">
            <span className="text-lg font-medium">Trusted & Compliant</span>
            <div className="w-2 h-2 rounded-full bg-cyan-300" />
          </motion.div>

          <motion.h2 variants={fadeInUpVariants} className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            GST Registered & Verified Business
          </motion.h2>

          <div className="space-y-6 text-lg md:text-xl opacity-95 font-light leading-relaxed">
            <motion.p variants={fadeInUpVariants}>
              KRD Clean and Care Private Limited is a legally registered entity
              under the Goods and Services Tax (GST) and the Ministry of
              Corporate Affairs. Our certification reflects our commitment to
              transparency as a trusted manufacturer and supplier of cleaning
              materials in India.
            </motion.p>
            <motion.p variants={fadeInUpVariants}>
              With specialized units in the Amaseoni and Mandhar Industrial
              Areas, we have built strong relationships with corporate clients
              and hospitality brands by delivering consistent,
              professional-grade cleaning products.
            </motion.p>
          </div>
        </motion.div>

        {/* Right Image/Certificate Content */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative group">
            {/* Decorative background glow/shadow */}
            <div className="absolute -inset-1 bg-black/10 rounded-lg blur-xl group-hover:bg-black/20 transition duration-500"></div>

            {/* The Certificate "Paper" with structural entrance and hover transition setup */}
            <motion.div 
              initial={{ opacity: 0, y: 30, rotate: 0 }}
              whileInView={{ opacity: 1, y: 0, rotate: 2 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              whileHover={{ rotate: 0 }}
              className="relative bg-white p-2 shadow-2xl rounded-sm transform origin-center transition-transform duration-500 ease-out cursor-pointer"
            >
              <img
                src="/gst-certificate.png"
                alt="GST Registration Certificate"
                className="w-full max-w-[500px] h-auto block"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificate;