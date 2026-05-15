import React from "react";
import Image from "next/image";
import hero from "@/public/homepage/hero3.png";

const HeroSection = () => {
  return (
    // Changed h-screen to min-h-screen to prevent content clipping on mobile
    <section className="relative w-full min-h-screen overflow-hidden flex items-center py-20 lg:py-0 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
          
          {/* Left Content Side */}
          <div className="z-10 w-full lg:max-w-2xl text-center lg:text-left order-2 lg:order-1">
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-4">
              <div className="w-1 h-6 bg-red-500 hidden md:block"></div>
              <p className="text-xs md:text-sm font-[poppins] font-semibold uppercase tracking-wider text-red-500">
                KRD is Leading business cleaning supplier
              </p>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl text-[#0056B3] font-bold font-[Lato] leading-[1.1] mb-6">
              India&apos;s{" "}
              <span className="block lg:inline">
                B2B Cleaning Products Supplier
              </span>
            </h1>

            <p className="text-gray-600 font-[poppins] text-base md:text-lg leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
              Premium manufacturing of eco-friendly hygiene solutions for
              industrial, commercial, and domestic use. Delivering excellence
              through our signature Vis Clean brand.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a href="/contact" className="w-full sm:w-auto text-center bg-[#0056B3] hover:bg-red-500 text-white font-bold py-4 px-10 rounded-lg transition-all duration-300 shadow-md">
                Shop Now
              </a>
              <a href="/about" className="w-full sm:w-auto text-center border-2 border-[#0056B3] hover:border-red-500 text-[#0056B3] hover:bg-red-500 hover:text-white font-bold py-4 px-10 rounded-lg transition-all duration-300">
                About Us{" "}
              </a>
            </div>
          </div>

          {/* Right Image Side */}
          <div className="relative w-full lg:w-1/2 flex justify-center items-center order-1 lg:order-2 mt-8 lg:mt-0">
            {/* Main Character Image Container */}
            <div className="relative z-10 w-full max-w-[350px] sm:max-w-[450px] md:max-w-[550px] lg:max-w-full">
              <Image
                src={hero}
                alt="Cleaning Specialist"
                width={1000}
                height={1000}
                className="w-full h-auto object-contain"
                priority
              />

              {/* Floating Tags - Optimized positions for mobile */}
              <div className="absolute top-[10%] -left-2 md:-left-8 bg-white px-3 py-1.5 md:px-5 md:py-2.5 rounded-full shadow-xl border border-gray-100 hidden xs:block">
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