"use client";

import React, { useState, useRef } from "react";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { products } from "@/data/products";
import Link from "next/link";
import { motion } from "framer-motion";

const Products = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const sliderRef = useRef(null);

  const categories = [
    "All",
    "Floor Cleaner",
    "Toiletry Cleaner",
    "Neem All",
    "Glass & House Cleaner",
    "Bathroom Cleaner",
    "Phenolic",
  ];

  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter((p) => p.category === activeCategory);

  const settings = {
    dots: true, // Enables dots on mobile for better spatial navigation UX
    arrows: false,
    infinite: filteredProducts.length > 3,
    speed: 500,
    slidesToShow: Math.min(3, filteredProducts.length),
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: Math.min(2, filteredProducts.length),
          infinite: filteredProducts.length > 2,
          dots: true,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          infinite: filteredProducts.length > 1,
          dots: true,
        },
      },
    ],
  };

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <section className="py-12 px-4 sm:px-6 max-w-7xl mx-auto font-sans overflow-hidden">
      {/* Header */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        className="flex font-[Lato] flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-8"
      >
        <div>
          <motion.div variants={fadeInUpVariants} className="flex justify-start items-center">
            <p className="bg-blue-50 text-[#0056B3] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-2">
              Our Products
            </p>
          </motion.div>
          <motion.h2 variants={fadeInUpVariants} className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mt-1 leading-tight">
            Our <span className="text-[#0056B3]">Best Sellers</span> Products
          </motion.h2>
        </div>
        <motion.div variants={fadeInUpVariants} className="w-full md:w-auto">
          <Link
            href={"/products"}
            className="bg-[#0056B3] text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-red-500 transition block text-center w-full md:w-auto"
          >
            View All Products
          </Link>
        </motion.div>
      </motion.div>

      {/* ✅ Category Tabs (Touch scroll friendly) */}
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="flex gap-2 overflow-x-auto pb-4 mb-4 no-scrollbar -mx-4 px-4 scrollbar-none"
        style={{ WebkitOverflowScrolling: "touch" }}
      >
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-full border text-xs sm:text-sm whitespace-nowrap transition-all duration-200 ${
              activeCategory === cat
                ? "bg-[#0056B3] text-white border-[#0056B3] shadow-sm"
                : "bg-white text-gray-600 border-gray-200 hover:border-[#0056B3]"
            }`}
          >
            {cat}
          </button>
        ))}
      </motion.div>

      {/* Carousel Wrapper */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="relative px-1 sm:px-0"
      >
        {/* Prev Button - Hidden on mobile devices, functional on desktop */}
        <button
          onClick={() => sliderRef.current?.slickPrev()}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 rounded-full bg-white border border-gray-200 shadow-md hidden md:flex items-center justify-center text-gray-600 hover:bg-[#0056B3] hover:text-white hover:border-[#0056B3] transition"
          aria-label="Previous slide"
        >
          <ChevronLeft size={20} />
        </button>

        {/* Next Button - Hidden on mobile devices, functional on desktop */}
        <button
          onClick={() => sliderRef.current?.slickNext()}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-10 h-10 rounded-full bg-white border border-gray-200 shadow-md hidden md:flex items-center justify-center text-gray-600 hover:bg-[#0056B3] hover:text-white hover:border-[#0056B3] transition"
          aria-label="Next slide"
        >
          <ChevronRight size={20} />
        </button>

        <Slider ref={sliderRef} {...settings} className="product-slider pb-8">
          {filteredProducts.map((product) => (
            <div key={product.id} className="px-2 sm:px-3">
              <motion.div layout className="group relative">
                <div
                  className="relative aspect-[4/5] rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm"
                  style={{ backgroundColor: product.color }}
                >
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="mt-3 sm:mt-4 px-1">
                  <div className="text-xs sm:text-sm text-gray-400 mb-0.5">
                    <span>{product.category}</span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 line-clamp-1">
                    {product.title}
                  </h3>
                </div>
              </motion.div>
            </div>
          ))}
        </Slider>
      </motion.div>
    </section>
  );
};

export default Products;