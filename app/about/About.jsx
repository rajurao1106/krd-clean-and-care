"use client";

import React, { useState, useEffect } from "react";
import { CheckCircle2 } from "lucide-react";
import about1 from "@/public/about/about3.jpg";
import Image from "next/image";
import apiClient from "@/utils/api"; // Central Axios utility client
import { motion } from "framer-motion";

const About = () => {
  const [aboutHero, setAboutHero] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAboutPageData = async () => {
      try {
        // Axios call to central content endpoint
        const response = await apiClient.get("/api/admin/content");
        
        const sections = response.data?.sections || response.data || [];
        
        // Target filtering using id: 4 condition (page: "about" & section: "hero")
        const targetedSection = sections.find(
          (sec) => sec.page === "about" && sec.section === "hero"
        );

        if (targetedSection) {
          setAboutHero(targetedSection);
        }
      } catch (error) {
        console.error("About page data fetch karne mein error aaya:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAboutPageData();
  }, []);

  // Loading Indicator 
  if (loading) {
    return (
      <div className="w-full min-h-[400px] flex items-center justify-center bg-white">
        <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-[#0056B3]"></div>
      </div>
    );
  }

  // Dynamic values mapping with secure static bounds fallbacks
  const title = aboutHero?.title || "Reliable, Affordable & Eco-Friendly Hygiene Solutions";
  const paragraph = aboutHero?.paragraph || "Founded in 2021, KRD Clean and Care Pvt Ltd is committed to providing premium cleaning solutions with a focus on quality and sustainability. We serve various industries with excellence from our base in Raipur.";
  const bgColor = aboutHero?.bg_color || "#FFFFFF";

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section 
      style={{ backgroundColor: bgColor }}
      className="relative w-full min-h-[600px] max-lg:pt-16 overflow-hidden font-sans"
    >
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16 lg:pt-20 flex flex-col lg:flex-row items-center gap-10 lg:gap-12">
        
        {/* Left Content Side */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            visible: { transition: { staggerChildren: 0.12 } }
          }}
          className="w-full lg:w-1/2 z-10 order-2 lg:order-1"
        >
          <motion.h2 
            variants={fadeInUpVariants}
            style={{ 
              fontFamily: aboutHero?.title_font || 'Lato',
            }}
            className="text-3xl md:text-4xl text-[#0056B3] lg:text-6xl font-bold leading-tight mb-6"
          >
            {title}
          </motion.h2>

          <motion.p 
            variants={fadeInUpVariants}
            style={{ color: aboutHero?.paragraph_color || '#4B5563' }}
            className="text-base md:text-lg mb-8 md:mb-10 max-w-xl leading-relaxed"
          >
            {paragraph}
          </motion.p>

          {/* Features List (Static data with dynamic icon styling integration) */}
          <div className="space-y-5 md:space-y-6">
            {[
              {
                title: "Experience",
                desc: "Building a strong reputation in the Chhattisgarh industrial sector for high-performance cleaning manufacturing.",
              },
              {
                title: "Quality Assurance",
                desc: "Every Vis Clean product undergoes stringent checks to ensure superior sanitation and safety.",
              },
              {
                title: "Affordability",
                desc: "We provide cost-effective B2B and domestic solutions without compromising on chemical integrity.",
              },
              {
                title: "Eco-Friendly Practices",
                desc: "Our brand, Vis Clean, focuses on eco-friendly formulations, including herbal and non-toxic options.",
              },
            ].map((item, index) => (
              <motion.div 
                key={index} 
                variants={fadeInUpVariants}
                className="flex items-start gap-3 md:gap-4"
              >
                <CheckCircle2 
                  style={{ color: aboutHero?.title_color || '#0056B3' }} // Syncs icon color with theme title color
                  className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0 mt-1" 
                />
                <p className="text-gray-700 text-sm md:text-base">
                  <span className="font-bold text-slate-900">
                    {item.title}:
                  </span>{" "}
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right Image Side */}
        <div className="w-full lg:w-1/2 relative order-1 lg:order-2 flex justify-center">
          {/* Main Image Container */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            className="relative z-10 w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]"
          >
            <Image
              src={aboutHero?.image_url || about1} // Remote URL if parsed, else base storage backup
              alt="Cleaning Professional"
              fill
              priority
              className="object-contain object-center"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;