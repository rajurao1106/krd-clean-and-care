"use client"

import React, { useState } from "react";
import { Star, ChevronLeft, ChevronRight, CheckCircle2 } from "lucide-react";

const testimonials = [
  {
    name: "Nikita Pawar",
    initial: "N",
    bgColor: "bg-slate-400",
    date: "6 months ago",
    stars: 5,
    text: "Services all time it's good",
  },
  {
    name: "Shailesh kamble",
    initial: "S",
    bgColor: "bg-purple-700",
    date: "6 months ago",
    stars: 5,
    text: "Excellent service across pan India. Very professional, Reliable, and always delivers quality work....",
    hasReadMore: true,
  },
  {
    name: "savaliya jaydeep",
    initial: "S",
    bgColor: "bg-orange-600",
    date: "6 months ago",
    stars: 5,
    text: "Good category",
  },
  {
    name: "Babu Butani",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop", 
    date: "6 months ago",
    stars: 5,
    text: "Very Good",
  },
];

const TestimonialCard = ({ item }) => (
  <div className="bg-[#f3f4f6] rounded-xl p-6 shadow-sm flex flex-col h-full transition-transform duration-300 hover:scale-[1.02]">
    <div className="flex justify-between items-start mb-4">
      <div className="flex items-center gap-3">
        {item.image ? (
          <img
            src={item.image}
            alt={item.name}
            className="w-12 h-12 rounded-full object-cover border border-gray-200"
          />
        ) : (
          <div
            className={`${item.bgColor} w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl`}
          >
            {item.initial}
          </div>
        )}
        <div className="overflow-hidden">
          <h4 className="font-bold text-gray-900 leading-tight truncate">{item.name}</h4>
          <p className="text-gray-500 text-xs md:text-sm">{item.date}</p>
        </div>
      </div>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_Color_Logo.svg"
        alt="Google"
        className="w-5 h-5 flex-shrink-0"
      />
    </div>

    <div className="flex items-center gap-1 mb-3">
      {[...Array(item.stars)].map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
      ))}
      <div className="ml-1 bg-blue-500 rounded-full p-0.5">
        <CheckCircle2 className="w-3 h-3 text-white fill-current" />
      </div>
    </div>

    <p className="text-gray-700 text-sm leading-relaxed flex-grow italic">
      "{item.text}"
    </p>

    {item.hasReadMore && (
      <button className="text-blue-600 font-medium text-xs mt-3 text-left hover:underline">
        Read more
      </button>
    )}
  </div>
);

export default function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Responsive logic for navigation (simple version)
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-12 px-4 md:py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl font-[Lato] md:text-5xl font-semibold text-gray-900 mb-4 md:mb-6">
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
          {/* Navigation Buttons - Hidden on Mobile, visible on Hover for Desktop */}
          <button 
            onClick={prevSlide}
            className="absolute -left-2 md:-left-5 top-1/2 -translate-y-1/2 z-20 bg-white shadow-xl rounded-full p-3 border border-gray-100 transition-all hover:bg-gray-50 active:scale-95 hidden md:block"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>

          {/* Grid Layout: 1 col on mobile, 2 on tablet, 4 on desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* If you want a real slider, you'd map a subset or use a library like Swiper.js. 
                For a responsive grid, this setup is most stable: */}
            {testimonials.map((t, index) => (
              <div key={index} className={index > 1 ? "hidden lg:block" : index > 0 ? "hidden sm:block" : "block"}>
                <TestimonialCard item={t} />
              </div>
            ))}
            
            {/* Mobile-only view of all cards (scrolling) */}
            <div className="flex flex-col gap-4 sm:hidden">
               {/* This handles the "stacked" look on mobile for better readability */}
               {testimonials.slice(0, 3).map((t, index) => (
                 <div key={`mobile-${index}`} className={index === 0 ? "block" : "hidden"}>
                    <TestimonialCard item={t} />
                 </div>
               ))}
            </div>
          </div>

          <button 
            onClick={nextSlide}
            className="absolute -right-2 md:-right-5 top-1/2 -translate-y-1/2 z-20 bg-white shadow-xl rounded-full p-3 border border-gray-100 transition-all hover:bg-gray-50 active:scale-95 hidden md:block"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        {/* Mobile Pagination Dots */}
        <div className="flex justify-center gap-2 mt-8 md:hidden">
          {testimonials.map((_, i) => (
            <div 
              key={i} 
              className={`h-2 w-2 rounded-full ${i === 0 ? 'bg-blue-600 w-4' : 'bg-gray-300'}`} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}