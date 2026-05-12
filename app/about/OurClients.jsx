"use client";

import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const OurClients = () => {
  // 1. Add state to track if component is mounted
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 6000,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 }
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 2 }
      }
    ]
  };

  const logos = [
    { src: "/logos/edelweiss.png", alt: "Edelweiss" },
    { src: "/logos/team-computers.png", alt: "Team Computers" },
    { src: "/logos/terraform.png", alt: "TerraForm" },
    { src: "/logos/global-vectra.png", alt: "Global Vectra" },
      { src: "/logos/edelweiss.png", alt: "Edelweiss" },
    { src: "/logos/team-computers.png", alt: "Team Computers" },
    { src: "/logos/terraform.png", alt: "TerraForm" },
    { src: "/logos/global-vectra.png", alt: "Global Vectra" },
    // Add your other logo paths here
  ];

  // 2. Return a placeholder or null during SSR to prevent the "Super expression" error
  if (!isMounted) {
    return (
      <div className="bg-white py-12">
        <h2 className="text-center text-3xl font-bold text-[#8DBE3F] mb-12 opacity-0">
          Our Clients
        </h2>
      </div>
    );
  }

  return (
    <div className="bg-white py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-center text-3xl font-bold text-[#8DBE3F] mb-12">
          Our Clients
        </h2>

        <Slider {...settings} className="flex items-center">
          {logos.map((logo, index) => (
            <div key={index} className="px-8 outline-none focus:ring-0 border-none">
              <div className="relative h-16 w-full flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="max-h-full max-w-full object-contain pointer-events-none"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default OurClients;