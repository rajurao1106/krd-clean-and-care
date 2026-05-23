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

// Static mapping structure to match backend database slugs with your local images
const categoryImageMap = {
  "glass-&-surface": product1,
  "floor-cleaners": product2,
  "toilet-care": product3,
  "milky-perfumed-cleaner": product4,
  "dish-wash-gel": product5,
};

export default function CategorySection() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  // Embla Carousel hook setup
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    align: "start", 
    containScroll: "trim" 
  });

  // Buttons state tracking
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  // Click handler functions
  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  // Handle active states of buttons
  const onSelect = useCallback((api) => {
    if (!api) return;
    setPrevBtnDisabled(!api.canScrollPrev());
    setNextBtnDisabled(!api.canScrollNext());
  }, []);

  // Fetch and group products by category from your API
  useEffect(() => {
    async function fetchCategories() {
      try {
        const response = await fetch("https://krd-admin-backend-five.vercel.app/api/admin/products?limit=100&page=1");
        if (!response.ok) throw new Error("Network response was not ok");
        
        const data = await response.json();
        const productsList = data.products || [];

        // Track, group, and count occurrences of categories
        const categoryMap = {};

        productsList.forEach((product) => {
          // Fallback values if a product happens to not have a category assigned
          const slug = product.category_slug || "uncategorized";
          const name = product.category_name || "Uncategorized";

          if (!categoryMap[slug]) {
            categoryMap[slug] = { name, slug, count: 0 };
          }
          categoryMap[slug].count += 1;
        });

        // Convert the object maps back into an array tailored for rendering
        const parsedCategories = Object.values(categoryMap).map((item) => {
          // If a new category is made in the backend without a local image asset, default safely to product1
          const matchedImage = categoryImageMap[item.slug] || product1; 
          
          return {
            name: item.name,
            slug: item.slug,
            image: matchedImage,
            link: `/products?category=${item.slug}`,
            count: item.count,
          };
        });

        // Filter out any uncategorized items if you don't want them showing up as a collection block
        const finalCategories = parsedCategories.filter(cat => cat.slug !== "uncategorized");

        setCategories(finalCategories);
      } catch (error) {
        console.error("Error loading category data payload:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchCategories();
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect(emblaApi);
    emblaApi.on("reInit", onSelect);
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect, categories]); // Updates Embla sizing calculations when state items load

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  if (loading) {
    return (
      <div className="w-full py-24 flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (categories.length === 0) return null;

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
        <div className="block md:hidden relative w-full px-2">
          
          {/* MOBILE ONLY: Navigation Arrows */}
          <div className="absolute left-0 right-0 flex md:hidden w-full z-50 top-[35%] -translate-y-1/2 justify-between px-1 pointer-events-none">
            <button
              onClick={scrollPrev}
              disabled={prevBtnDisabled}
              className={`p-2 rounded-full border transition-all pointer-events-auto ${
                prevBtnDisabled 
                  ? "border-gray-150 text-gray-300 bg-gray-50 opacity-50" 
                  : "border-gray-200 text-gray-700 bg-white shadow-sm active:scale-95"
              }`}
              aria-label="Previous slide"
            >
              <HiOutlineArrowLeft size={16} strokeWidth={2.5} />
            </button>
            <button
              onClick={scrollNext}
              disabled={nextBtnDisabled}
              className={`p-2 rounded-full border transition-all pointer-events-auto ${
                nextBtnDisabled 
                  ? "border-gray-150 text-gray-300 bg-gray-50 opacity-50" 
                  : "border-gray-200 text-gray-700 bg-white shadow-sm active:scale-95"
              }`}
              aria-label="Next slide"
            >
              <HiOutlineArrowRight size={16} strokeWidth={2.5} />
            </button>
          </div>

          {/* Viewport element required by Embla */}
          <div className="overflow-hidden w-full" ref={emblaRef}>
            <div className="flex gap-4 pl-1">
              {categories.map((cat) => (
                <div 
                  key={cat.slug} 
                  className="flex-[0_0_65%] min-w-0 bg-white rounded-2xl p-4 flex flex-col items-center gap-3 border border-gray-300 shadow-sm mb-2"
                >
                  {/* Image Wrapper */}
                  <div className="relative border border-gray-100 w-full aspect-square rounded-full max-lg:shadow-none shadow-md overflow-hidden bg-white">
                    <Image
                      src={cat.image}
                      alt={cat.name}
                      fill
                      className="object-contain p-2"
                    />
                  </div>

                  {/* Category Name & Item Count Descriptor */}
                  <div className="text-center min-h-[40px] flex flex-col items-center justify-center">
                    <p className="text-xs font-medium text-gray-900 leading-snug tracking-wide">
                      {cat.name}
                    </p>
                    {/* <span className="text-[10px] text-gray-400 font-normal mt-0.5">
                      ({cat.count} {cat.count === 1 ? "product" : "products"})
                    </span> */}
                  </div>

                  {/* Mobile View Button */}
                  <Link 
                    href={cat.link}
                    className="flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-full border border-gray-200 text-gray-500 text-[10px] font-bold uppercase tracking-wider w-full mt-1 bg-gray-50"
                  >
                    <span>View More</span>
                    <HiOutlineArrowRight size={12} strokeWidth={3} />
                  </Link>
                </div>
              ))}
            </div>
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
          {categories.map((cat) => (
            <motion.div 
              key={cat.slug} 
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

                <div className="text-center">
                  <p className="text-sm font-medium text-gray-900 leading-snug tracking-wide">
                    {cat.name}
                  </p>
                  {/* <p className="text-xs text-gray-400 group-hover:text-[#0056B3] transition-colors mt-0.5">
                    {cat.count} {cat.count === 1 ? "Item" : "Items"}
                  </p> */}
                </div>

                <Link 
                  href={cat.link}
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