"use client";

import React from 'react';
import { Search, Headphones, ShoppingCart } from 'lucide-react';
import { motion } from 'framer-motion';

const HowItWorks = () => {
  const steps = [
    {
      id: '01',
      title: 'Explore Our Range',
      description: 'Browse our extensive catalog of "Vis Clean" industrial and domestic hygiene products.',
      icon: <Search className="w-10 h-10 text-lime-600" />,
    },
    {
      id: '02',
      title: 'Expert Consultation',
      description: 'Speak with our Raipur-based team for customized bulk manufacturing needs.',
      icon: <Headphones className="w-10 h-10 text-lime-600" />,
    },
    {
      id: '03',
      title: 'Fast Delivery',
      description: 'Timely shipping from our Amaseoni and Mandhar industrial units.',
      icon: <ShoppingCart className="w-10 h-10 text-lime-600" />,
    },
  ];

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const stepCardVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 25 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <section className="bg-[#0056B3] py-16 px-4 font-sans text-white relative overflow-hidden">
      {/* Header Section */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
        className="max-w-6xl mx-auto text-center mb-16 relative z-10"
      >
        <motion.span variants={fadeInUpVariants} className="uppercase tracking-widest text-sm font-bold opacity-90 block">
          Working Process
        </motion.span>
        <motion.h2 variants={fadeInUpVariants} className="text-4xl md:text-5xl font-extrabold mt-2 mb-6">
          How It Works
        </motion.h2>
        <motion.p variants={fadeInUpVariants} className="max-w-2xl mx-auto text-lg opacity-90">
          Experience the convenience of shopping for top-quality cleaning solutions with JKD Enterprise.
        </motion.p>
      </motion.div>

      {/* Steps Container */}
      <div className="max-w-7xl mx-auto relative">
        
        {/* Curved Dashed Line (Animated on Desktop) */}
        <div className="hidden md:block absolute top-16 left-0 w-full h-24 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 1200 120" fill="none">
            <motion.path 
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, ease: "easeInOut", delay: 0.2 }}
              d="M0 20 C 150 120, 450 120, 600 60 C 750 0, 1050 0, 1200 100" 
              stroke="white" 
              strokeWidth="2" 
              strokeDasharray="8 8" 
              opacity="0.5"
            />
          </svg>
        </div>

        {/* Dynamic Cards Grid mapping */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            visible: { transition: { staggerChildren: 0.2 } }
          }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 relative"
        >
          {steps.map((step) => (
            <motion.div 
              key={step.id} 
              variants={stepCardVariants}
              className="flex flex-col items-center text-center relative z-10"
            >
              {/* Icon Circle Container */}
              <div className="relative mb-8">
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-lg"
                >
                  {step.icon}
                </motion.div>
                
                {/* Number Badge */}
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, type: "spring", stiffness: 260, damping: 20 }}
                  className="absolute -bottom-2 -left-2 w-10 h-10 bg-[#3A4750] rounded-full flex items-center justify-center text-sm font-bold border-4 border-[#78B342]"
                >
                  {step.id}
                </motion.div>
              </div>

              {/* Content Markup */}
              <h3 className="text-2xl font-bold mb-4 px-4 leading-tight">
                {step.title}
              </h3>
              {/* <p className="text-sm leading-relaxed opacity-95 max-w-sm">
                {step.description}
              </p> */}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;