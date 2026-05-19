"use client"

import React, { useState, useEffect } from "react";
import Image from "next/image";
import hero from "@/public/homepage/hero3.png";
import apiClient from "@/utils/api"; // Aapka api utility link

const HeroSection = () => {
  const [heroData, setHeroData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHeroData = async () => {
      try {
        // Backend API call (Aap apne endpoint ke mutabik ise change kar sakte hain)
        const response = await apiClient.get("/api/admin/content");
        
        // Response mein se home page ka hero section filter karna
        const sections = response.data.sections || response.data;
        const heroSection = sections.find(
          (sec) => sec.page === "home" && sec.section === "hero"
        );

        if (heroSection) {
          setHeroData(heroSection);
        }
      } catch (error) {
        console.error("Hero data fetch karne mein error aaya:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchHeroData();
  }, []);

  // Jab tak data load ho raha ho, tab tak ke liye loader ya default UI
  if (loading) {
    return (
      <div className="w-full min-h-screen flex items-center justify-center bg-white">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#0056B3]"></div>
      </div>
    );
  }

  // Agar database se data na mile toh yeh fallback static content dikhayega
  const miniTitle = heroData?.mini_title ;
  const title = heroData?.title ;
  const paragraph = heroData?.paragraph ;

  return (
    // Dynamic Background Color (Database se custom background handle karne ke liye)
    <section 
      style={{ backgroundColor: heroData?.bg_color || "#FFFFFF" }} 
      className="relative w-full min-h-screen overflow-hidden flex items-center py-20 lg:py-0"
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
          
          {/* Left Content Side */}
          <div className="z-10 w-full lg:max-w-2xl text-center lg:text-left order-2 lg:order-1">
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-4">
              <div className="w-1 h-6 bg-red-500 hidden md:block"></div>
              <p className="text-xs md:text-sm font-[poppins] font-semibold uppercase tracking-wider text-red-500">
                {miniTitle}
              </p>
            </div>

            {/* Dynamic Font and Style styling from json config */}
            <h1 
              style={{ 
                fontFamily: heroData?.title_font || 'Lato',
                color: heroData?.title_color || '#0056B3'
              }}
              className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.1] mb-6"
            >
              {title.includes("India's") ? (
                <h1 className="">
                  India&apos;s{" "}
                  <span className="block lg:inline">
                    {title.replace("India's", "").trim()}
                  </span>
                </h1>
              ) : (
                title
              )}
            </h1>

            <p 
              style={{ color: heroData?.paragraph_color || '#4B5563' }}
              className="font-[poppins] text-base md:text-lg leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0"
            >
              {paragraph}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a href={heroData?.button_url || "/contact"} className="w-full sm:w-auto text-center bg-[#0056B3] hover:bg-red-500 text-white font-bold py-4 px-10 rounded-lg transition-all duration-300 shadow-md">
                {heroData?.button_text || "Shop Now"}
              </a>
              <a href="/about" className="w-full sm:w-auto text-center border-2 border-[#0056B3] hover:border-red-500 text-[#0056B3] hover:bg-red-500 hover:text-white font-bold py-4 px-10 rounded-lg transition-all duration-300">
                About Us
              </a>
            </div>
          </div>

          {/* Right Image Side */}
          {/* image_position: "right" ke mutabik flex order handle kiya gaya hai */}
          <div className={`relative w-full lg:w-1/2 flex justify-center items-center mt-8 lg:mt-0 ${heroData?.image_position === 'left' ? 'order-1 lg:order-1' : 'order-1 lg:order-2'}`}>
            {/* Main Character Image Container */}
            <div className="relative z-10 w-full max-w-[350px] sm:max-w-[450px] md:max-w-[550px] lg:max-w-full">
              <Image
                src={heroData?.image_url || hero} // Database mein URL ho toh wo use hoga, nahi toh local backup image
                alt="Cleaning Specialist"
                width={1000}
                height={1000}
                className="w-full h-auto object-contain"
                priority
              />

              {/* Floating Tags */}
              <div className="absolute top-[10%] -left-2 md:-left-8 bg-red-500 px-3 py-1.5 md:px-5 md:py-2.5 rounded-full shadow-xl border border-gray-100 hidden xs:block">
                <span className="text-[10px] md:text-sm font-bold text-black whitespace-nowrap">
                  Corporate cleaning
                </span>
              </div>

              <div className="absolute bottom-[15%] -right-2 md:-right-8 bg-white px-3 py-1.5 md:px-5 md:py-2.5 rounded-full shadow-xl border border-gray-100 hidden xs:block">
                <span className="text-[10px] md:text-sm font-bold text-black whitespace-nowrap">
                  Industrial Cleaning
                </span>
              </div>
            </div>

            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] md:w-[500px] md:h-[500px] bg-blue-200/40 rounded-full blur-3xl -z-0"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;