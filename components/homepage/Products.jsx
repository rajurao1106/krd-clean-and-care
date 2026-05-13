"use client";

import React from "react";
import Slider from "react-slick";
import { Heart, Maximize2, ShoppingBag } from "lucide-react"; 
// import product1 from "@/public/product/"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const products = [
  {
    id: 1,
    name: "SilkSculpt Serum",
    category: "Glass & Multisurface Cleaner",
    price: 35.0,
    oldPrice: 70.0,
    rating: 4.9,
    discount: "50% off",
    image: "/serum1.jpg", // Replace with your paths
    timer: true,
  },
  {
    id: 2,
    name: "SilkSkin Serum",
    category: "Toilet Cleaner",
    price: 48.0,
    oldPrice: 60.0,
    rating: 4.8,
    discount: "20% off",
    image: "/serum2.jpg",
  },
  {
    id: 3,
    name: "Argan Glow",
    category: "Toilet Cleaner",
    price: 63.0,
    oldPrice: 90.0,
    rating: 5.0,
    discount: "30% off",
    image: "/argan.jpg",
  },
];

const Products = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  const categories = [
    "All",
    "Glass & Surface",
    "Floor Cleaners",
    "Toilet Care",
    "Milky Perfumed Cleaner",
    "Dish Wash Gel",
  ];

  return (
    <section className="py-12 px-6 max-w-7xl mx-auto font-sans">
      {/* Header */}
      <div className="flex font-[Lato] justify-between items-end mb-8">
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

      {/* Category Tabs */}
      <div className="flex gap-3 overflow-x-auto pb-8 no-scrollbar">
        {categories.map((cat, i) => (
          <button
            key={cat}
            className={`px-5 py-2 rounded-full border text-sm whitespace-nowrap transition ${
              i === 0
                ? "bg-[#0056B3] text-white border-[#0056B3]"
                : "bg-white text-gray-600 border-gray-200 hover:border-[#0056B3]"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Carousel */}
      <Slider {...settings} className="product-slider">
        {products.map((product) => (
          <div key={product.id} className="px-3">
            <div className="group relative">
              {/* Image Container */}
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-gray-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Product Info */}
              <div className="mt-4">
                <div className="flex justify-between items-center text-sm text-gray-400 mb-1">
                  <span>{product.category}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900">
                  {product.name}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Products;
