import React from "react";
import Image from "next/image";
import hero from "@/public/homepage/hero.png";

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-[auto] lg:min-h-[740px] bg-gradient-to-br from-white via-white to-[#e8f5e9] overflow-hidden flex items-center py-12 lg:py-0">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Left Content Side */}
          <div className="z-10 w-full lg:max-w-2xl text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-4">
              <div className="w-1 h-6 bg-red-500 hidden md:block"></div>
              <p className="text-xs md:text-sm font-semibold uppercase tracking-wider text-red-500">
                KRD Housekeeping products Clean Meets Convenience
              </p>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-7xl text-[#0056B3] font-semibold leading-[1.1] mb-6">
              India&apos;s <span className="block lg:inline">B2B Cleaning Products Supplier</span>
            </h1>

            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
              Clean and Care is into the manufacturing of home care, car care, and
              personal care products. Since 2017, these branded products have been
              delivering high-quality cleaning solutions for home, office, and industrial spaces.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button className="w-full sm:w-auto bg-[#0056B3] hover:bg-red-500 text-white font-bold py-4 px-10 rounded-lg transition-all duration-300 shadow-md">
                READ MORE
              </button>
              <button className="w-full sm:w-auto border-2 border-[#0056B3] hover:border-red-500 text-[#0056B3] hover:bg-red-500 hover:text-white font-bold py-4 px-10 rounded-lg transition-all duration-300">
                Get a Quote
              </button>
            </div>
          </div>

          {/* Right Image Side */}
          <div className="relative w-full lg:w-1/2 flex justify-center items-center lg:items-end min-h-[400px] md:min-h-[500px]">
            {/* Main Character Image Container */}
            <div className="relative z-10 w-full max-w-[350px] md:max-w-[450px] lg:max-w-[550px]">
              <Image
                src={hero}
                alt="Cleaning Specialist"
                width={600}
                height={700}
                className="w-full h-auto object-contain"
                priority
              />

              {/* Floating Tags - Hidden on very small screens, resized for medium */}
              <div className="absolute top-[15%] -left-4 md:-left-8 bg-white px-3 py-1.5 md:px-5 md:py-2.5 rounded-full shadow-xl border border-gray-100 animate-bounce hidden sm:block">
                <span className="text-xs md:text-sm font-bold text-black">
                  Corporate cleaning
                </span>
              </div>

              <div className="absolute bottom-[20%] -right-4 md:-right-8 bg-white px-3 py-1.5 md:px-5 md:py-2.5 rounded-full shadow-xl border border-gray-100 hidden sm:block">
                <span className="text-xs md:text-sm font-bold text-black">
                  Industrial Cleaning
                </span>
              </div>
            </div>

            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-green-200/40 rounded-full blur-3xl -z-0"></div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default HeroSection;