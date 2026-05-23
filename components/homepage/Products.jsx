"use client";

import React, { useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { products } from "@/data/products";
import Link from "next/link";
import { motion } from "framer-motion";

const Products = () => {
  const [activeCategory, setActiveCategory] = useState("All");

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

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: filteredProducts.length > 3,
    align: "start",
    slidesToScroll: 1,
  });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section className="py-12 px-4 sm:px-6 max-w-7xl mx-auto font-sans">
      {/* Header */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        className="flex font-[Lato] max-lg:flex-col justify-between items-end max-lg:items-start max-lg:gap-4 mb-8"
      >
        <div>
          <motion.div variants={fadeInUpVariants} className="flex justify-start items-center">
            <p className="text-center bg-blue-50 text-[#0056B3] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-2">
              Our Products
            </p>
          </motion.div>
          <motion.h2 variants={fadeInUpVariants} className="text-4xl sm:text-5xl font-bold text-gray-900 mt-1">
            Our <span className="text-[#0056B3]">Best Sellers</span> Products
          </motion.h2>
        </div>
        <motion.div variants={fadeInUpVariants}>
          <Link
            href={"/products"}
            className="bg-[#0056B3] text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-red-500 transition block text-center w-full sm:w-auto"
          >
            View All Products
          </Link>
        </motion.div>
      </motion.div>

      {/* Category Tabs */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="flex gap-3 overflow-x-auto pb-4 px-1 no-scrollbar mb-6"
      >
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2 rounded-full border text-sm whitespace-nowrap transition ${
              activeCategory === cat
                ? "bg-[#0056B3] text-white border-[#0056B3]"
                : "bg-white text-gray-600 border-gray-200 hover:border-[#0056B3]"
            }`}
          >
            {cat}
          </button>
        ))}
      </motion.div>

      {/* Embla Carousel */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="relative"
      >
        {/* Prev Button */}
        <button
          onClick={scrollPrev}
          className="absolute left-0 top-1/2 -translate-y-1/2 translate-x-1 sm:-translate-x-4 z-10 w-10 h-10 rounded-full bg-white border border-gray-200 shadow-md flex items-center justify-center text-gray-600 hover:bg-[#0056B3] hover:text-white hover:border-[#0056B3] transition"
        >
          <ChevronLeft size={20} />
        </button>

        {/* Next Button */}
        <button
          onClick={scrollNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 -translate-x-1 sm:translate-x-4 z-10 w-10 h-10 rounded-full bg-white border border-gray-200 shadow-md flex items-center justify-center text-gray-600 hover:bg-[#0056B3] hover:text-white hover:border-[#0056B3] transition"
        >
          <ChevronRight size={20} />
        </button>

        {/* Embla Viewport */}
        <div ref={emblaRef} className="overflow-hidden px-2">
          <div className="flex">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                // ✅ Responsive slide width via Tailwind:
                // mobile: 1 card, sm: 2 cards, lg: 3 cards
                className="flex-none w-full sm:w-1/2 lg:w-1/3 px-2 sm:px-3"
              >
                <motion.div layout className="group relative">
                  <div
                    className="relative aspect-[4/5] rounded-3xl overflow-hidden"
                    style={{ backgroundColor: product.color }}
                  >
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-4">
                    <div className="text-sm text-gray-400 mb-1">
                      <span>{product.category}</span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">
                      {product.title}
                    </h3>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Products;