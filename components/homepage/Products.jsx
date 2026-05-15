"use client";

import React, { useState, useRef } from "react";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { products } from "@/data/products";

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
    dots: false,
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
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          infinite: filteredProducts.length > 1,
        },
      },
    ],
  };

  return (
    <section className="py-12 px-6 max-w-7xl mx-auto font-sans">
      {/* Header */}
      <div className="flex font-[Lato] max-lg:flex-col justify-between items-end max-lg:items-start max-lg:gap-4 mb-8">
        <div>
          <span className="text-gray-500 text-sm font-medium">
            Our Products
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mt-1">
            Our <span className="text-[#0056B3]">Best Sellers</span> Products
          </h2>
        </div>
        <button className="bg-[#0056B3] text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-red-500 transition">
          View All Products
        </button>
      </div>

      {/* ✅ Category Tabs — yeh pehle remove ho gaya tha */}
      <div className="flex gap-3 overflow-x-auto pb-8 no-scrollbar">
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
      </div>

      {/* Carousel */}
      <div className="relative">
        {/* Prev Button */}
        <button
          onClick={() => sliderRef.current?.slickPrev()}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 rounded-full bg-white border border-gray-200 shadow-md flex items-center justify-center text-gray-600 hover:bg-[#0056B3] hover:text-white hover:border-[#0056B3] transition"
        >
          <ChevronLeft size={20} />
        </button>

        {/* Next Button */}
        <button
          onClick={() => sliderRef.current?.slickNext()}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-10 h-10 rounded-full bg-white border border-gray-200 shadow-md flex items-center justify-center text-gray-600 hover:bg-[#0056B3] hover:text-white hover:border-[#0056B3] transition"
        >
          <ChevronRight size={20} />
        </button>

        <Slider ref={sliderRef} {...settings} className="product-slider">
          {filteredProducts.map((product) => (
            <div key={product.id} className="px-3">
              <div className="group relative">
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
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Products;