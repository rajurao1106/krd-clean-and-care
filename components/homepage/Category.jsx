"use client";

import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import product1 from "@/public/homepage/product1.jpg";
import product2 from "@/public/homepage/product2.jpg";
import product3 from "@/public/homepage/product3.jpg";
import product4 from "@/public/homepage/product4.jpg";
import product5 from "@/public/homepage/product5.jpg";
import { HiOutlineArrowRight, HiOutlineArrowLeft } from "react-icons/hi2";
import Link from "next/link";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";

const categories = [
  { name: "Glass & Surface", image: product1, isNew: true, link: "/products" },
  { name: "Floor Cleaners", image: product2, isNew: true, link: "/products" },
  { name: "Toilet Care", image: product3, link: "/products" },
  { name: "Milky Perfumed Cleaner", image: product4, link: "/products" },
  { name: "Dish Wash Gel", image: product5, link: "/products" },
];

export default function CategorySection() {
  // Embla Carousel hook setup
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    align: "start", 
    containScroll: "trim" 
  });

  // Buttons ke disabled state ke liye React states
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  // Click hone par scroll karne ke functions
  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  // Check karne ke liye ki buttons ko kab enable/disable karna hai
  const onSelect = useCallback((api) => {
    if (!api) return;
    setPrevBtnDisabled(!api.canScrollPrev());
    setNextBtnDisabled(!api.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect(emblaApi);
    emblaApi.on("reInit", onSelect);
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <section className="relative bg-white px-6 overflow-hidden py-12">
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="mb-10 relative">
          <div className="flex justify-center items-center">
            <p className="text-center bg-blue-50 text-[#0056B3] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-2">
              Our Categories
            </p>
          </div>
          <h2 className="text-3xl text-center md:text-5xl font-semibold leading-tight text-gray-900">
            Explore our{" "}
            <span className="text-[#0056B3]">cleaning categories</span>
          </h2>

         
        </div>

        {/* 1. MOBILE CAROUSEL VIEW */}
        <div className="block md:hidden overflow-hidden" ref={emblaRef}>
           {/* MOBILE ONLY: Navigation Arrows */}
          <div className="absolute -left-4 flex md:hidden w-[110%] z-50 top-[50%] justify-between gap-3 mt-4">
            <button
              onClick={scrollPrev}
              disabled={prevBtnDisabled}
              className={`p-2 rounded-full border transition-all ${
                prevBtnDisabled 
                  ? "border-gray-150 text-gray-300 bg-gray-50" 
                  : "border-gray-200 text-gray-700 bg-white shadow-sm active:scale-95"
              }`}
              aria-label="Previous slide"
            >
              <HiOutlineArrowLeft size={16} strokeWidth={2.5} />
            </button>
            <button
              onClick={scrollNext}
              disabled={nextBtnDisabled}
              className={`p-2 rounded-full border transition-all ${
                nextBtnDisabled 
                  ? "border-gray-150 text-gray-300 bg-gray-50" 
                  : "border-gray-200 text-gray-700 bg-white shadow-sm active:scale-95"
              }`}
              aria-label="Next slide"
            >
              <HiOutlineArrowRight size={16} strokeWidth={2.5} />
            </button>
          </div>
          <div className="flex gap-4 pl-1">
            {categories.map((cat, i) => (
              <div 
                key={i} 
                className="flex-[0_0_65%] min-w-0 bg-white rounded-2xl p-4 flex flex-col items-center gap-3 border border-gray-150 shadow-sm"
              >
                {/* Image Wrapper */}
                <div className="relative border border-gray-100 w-full aspect-square rounded-full shadow-md overflow-hidden bg-white">
                  <Image
                    src={cat.image}
                    alt={cat.name}
                    fill
                    className="object-contain p-2"
                  />
                </div>

                {/* Category Name */}
                <p className="text-xs font-medium text-gray-900 text-center leading-snug tracking-wide min-h-[32px] flex items-center justify-center">
                  {cat.name}
                </p>

                {/* Mobile Static Button */}
                <Link 
                  href={cat.link || "/products"}
                  className="flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-full border border-gray-200 text-gray-500 text-[10px] font-bold uppercase tracking-wider w-full mt-1 bg-gray-50"
                >
                  <span>View More</span>
                  <HiOutlineArrowRight size={12} strokeWidth={3} />
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* 2. DESKTOP GRID VIEW */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            visible: { transition: { staggerChildren: 0.1 } }
          }}
          className="hidden md:grid grid-cols-3 lg:grid-cols-5 gap-4"
        >
          {categories.map((cat, i) => (
            <motion.div 
              key={i} 
              variants={itemVariants}
              className="group cursor-pointer"
            >
              <div className="bg-white rounded-2xl p-4 flex flex-col items-center gap-3 transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)]">
                
                <div className="relative border border-gray-100 w-full shadow-md group-hover:-translate-y-1.5 group-hover:border-[#0056B3] group-hover:shadow-[0_12px_32px_-8px_rgba(0,86,179,0.2)] aspect-square rounded-full border transition-colors duration-200 overflow-hidden">
                  <Image
                    src={cat.image}
                    alt={cat.name}
                    fill
                    className="object-contain p-2"
                  />
                </div>

                <p className="text-sm font-medium text-gray-900 text-center leading-snug tracking-wide">
                  {cat.name}
                </p>

                <Link 
                  href={cat.link || "/products"}
                  className="flex items-center justify-center gap-2 px-3 py-1.5 rounded-full border border-gray-200 text-gray-400 opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:text-[#0056B3] group-hover:border-[#0056B3] transition-all duration-300 ease-out"
                >
                  <span className="text-[10px] font-bold uppercase tracking-wider">
                    View More
                  </span>
                  <HiOutlineArrowRight size={14} strokeWidth={3} />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}