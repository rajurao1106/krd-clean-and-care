"use client";

import React, { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight, CheckCircle2 } from "lucide-react";
import apiClient from "@/utils/api"; // Aapka central Axios instance layer

const TestimonialCard = ({ item }) => {
  // 90 characters se bade content par "Read more" auto trigger hoga
  const isLongText = item.content && item.content.length > 90;

  return (
    <div className="bg-[#f3f4f6] rounded-xl p-6 shadow-sm flex flex-col h-full transition-transform duration-300 hover:scale-[1.02]">
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center gap-3">
          {item.avatar_url ? (
            <img
              src={item.avatar_url}
              alt={item.name}
              className="w-12 h-12 rounded-full object-cover border border-gray-200"
            />
          ) : (
            <div
              style={{ backgroundColor: item.avatar_bg_color || "#64748b" }} // Server Dynamic Avatar Bg Color
              className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl uppercase"
            >
              {item.avatar_initial || item.name?.charAt(0)}
            </div>
          )}
          <div className="overflow-hidden">
            <h4 className="font-bold text-gray-900 leading-tight truncate">{item.name}</h4>
            <p className="text-gray-500 text-xs md:text-sm">Verified User</p>
          </div>
        </div>

        {/* Source verification validation */}
        {item.source === "Google" && (
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_Color_Logo.svg"
            alt="Google"
            className="w-5 h-5 flex-shrink-0"
          />
        )}
      </div>

      {/* Dynamic Star Ratings mapping from Backend Integer values */}
      <div className="flex items-center gap-1 mb-3">
        {[...Array(item.rating || 5)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
        ))}
        <div className="ml-1 bg-blue-500 rounded-full p-0.5">
          <CheckCircle2 className="w-3 h-3 text-white fill-current" />
        </div>
      </div>

      <p className="text-gray-700 text-sm leading-relaxed flex-grow italic">
        &ldquo;{item.content}&rdquo;
      </p>

      {isLongText && (
        <button className="text-blue-600 font-medium text-xs mt-3 text-left hover:underline">
          Read more
        </button>
      )}
    </div>
  );
};

export default function TestimonialSection() {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await apiClient.get("/api/admin/testimonials");
        const rawList = response.data?.testimonials || response.data || [];
        
        // Active testimonials filter out aur sorting index processing
        const activeItems = rawList
          .filter((t) => t.is_active === 1)
          .sort((a, b) => a.sort_order - b.sort_order);

        setTestimonials(activeItems);
      } catch (error) {
        console.error("Testimonials data pipeline crash error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  const nextSlide = () => {
    if (testimonials.length === 0) return;
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    if (testimonials.length === 0) return;
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  if (loading) {
    return (
      <div className="w-full py-20 bg-white flex items-center justify-center">
        <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-[#0056B3]"></div>
      </div>
    );
  }

  if (testimonials.length === 0) return null;

  return (
    <section className="py-12 px-4 md:py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl text-[#0056B3] font-[Lato] md:text-5xl font-semibold mb-4 md:mb-6">
            What Our Clients Say
          </h2>
          <p className="max-w-3xl font-[poppins] mx-auto text-gray-600 leading-relaxed text-base md:text-lg">
            At KRD Clean and Care, we believe that the satisfaction of our
            clients is our success. Listen directly to how we make a difference 
            in their everyday lives.
          </p>
        </div>

        {/* Carousel/Grid Area */}
        <div className="relative group">
          {/* Navigation Buttons */}
          <button 
            onClick={prevSlide}
            className="absolute -left-2 md:-left-5 top-1/2 -translate-y-1/2 z-20 bg-white shadow-xl rounded-full p-3 border border-gray-100 transition-all hover:bg-gray-50 active:scale-95 hidden md:block"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>

          {/* Desktop/Tablet Stable Multi-Grid Filter view */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((t, index) => {
              // Carousel current shift behavior logic implementation
              const relativeIndex = (index - currentIndex + testimonials.length) % testimonials.length;
              
              let visibilityClass = "hidden";
              if (relativeIndex === 0) visibilityClass = "block"; // Mobile standard display
              if (relativeIndex === 1) visibilityClass = "hidden sm:block"; // Tablet side expansion
              if (relativeIndex === 2 || relativeIndex === 3) visibilityClass = "hidden lg:block"; // Desktop grid sync
              
              return (
                <div key={t.id || index} className={visibilityClass}>
                  <TestimonialCard item={t} />
                </div>
              );
            })}
          </div>

          <button 
            onClick={nextSlide}
            className="absolute -right-2 md:-right-5 top-1/2 -translate-y-1/2 z-20 bg-white shadow-xl rounded-full p-3 border border-gray-100 transition-all hover:bg-gray-50 active:scale-95 hidden md:block"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        {/* Dynamic Pagination Dots mapping */}
        <div className="flex justify-center gap-2 mt-8 md:hidden">
          {testimonials.map((_, i) => (
            <button 
              key={i} 
              onClick={() => setCurrentIndex(i)}
              className={`h-2 rounded-full transition-all duration-300 ${i === currentIndex ? 'bg-blue-600 w-4' : 'bg-gray-300 w-2'}`} 
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
        
      </div>
    </section>
  );
}