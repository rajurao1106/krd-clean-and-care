"use client";

import React, { useState, useEffect } from "react";
import apiClient from "@/utils/api"; // Aapka Axios utility client

// Icons Import
import { IoWaterOutline } from "react-icons/io5"; 
import { FiPackage } from "react-icons/fi"; 
import { LuRefreshCw } from "react-icons/lu"; 
import { HiOutlineUsers } from "react-icons/hi2"; 

const ImpactSection = () => {
  const [statsData, setStatsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStatsData = async () => {
      try {
        // Axios call to stats endpoint
        const response = await apiClient.get("/api/admin/stats");
        
        // Response key checking
        const statsArray = response.data?.stats || response.data || [];
        
        // Active items ko sort_order ke mutabik arrange karna
        const activeStats = statsArray
          .filter((item) => item.is_active === 1)
          .sort((a, b) => a.sort_order - b.sort_order);

        setStatsData(activeStats);
      } catch (error) {
        console.error("Stats data fetch karne mein error aaya:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStatsData();
  }, []);

  // Helper function backend icon name ko React Icon Component mein map karne ke liye
  const renderIcon = (iconName, customColor) => {
    const props = { style: { color: customColor || "#000000" } };
    
    switch (iconName) {
      case "water":
        return <IoWaterOutline {...props} />;
      case "package":
        return <FiPackage {...props} />;
      case "refresh":
        return <LuRefreshCw {...props} />;
      case "users":
        return <HiOutlineUsers {...props} />;
      default:
        return <FiPackage {...props} />; // Default fallback icon
    }
  };

  // Jab data loading state par ho
  if (loading) {
    return (
      <div className="w-full py-16 bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-[#0056B3]"></div>
      </div>
    );
  }

  // Agar database khaali ho ya response na aaye to render rokne ke liye
  if (statsData.length === 0) return null;

  return (
    <section className="bg-gray-50 py-16 md:py-24 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Main Heading */}
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-3xl md:text-5xl font-[Lato] font-bold text-gray-900 leading-tight">
            It&apos;s not just clean,
            <br className="sm:hidden" /> it&apos;s{" "}
            <span className="text-[#0056B3]">
              <br />
              KRD Clean And Care
            </span>
          </h2>
        </div>

        {/* Dynamic Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {statsData.map((item) => (
            <div
              key={item.id}
              style={{ backgroundColor: item.bg_color || "#FFFFFF" }} // Dynamic Server Background Color
              className="rounded-3xl p-6 md:p-8 flex flex-col items-start justify-between min-h-[220px] md:min-h-[280px] transition-all duration-300 hover:-translate-y-2 hover:shadow-xl group"
            >
              {/* Icon Container */}
              <div className="bg-white w-14 h-14 md:w-20 md:h-20 rounded-2xl md:rounded-3xl flex items-center justify-center shadow-sm mb-6 md:mb-10 text-3xl md:text-5xl transition-transform duration-500 group-hover:rotate-[10deg]">
                {renderIcon(item.icon, item.icon_color)}
              </div>

              <div className="w-full">
                {/* Dynamic Value */}
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-1 tracking-tighter">
                  {item.value}
                </h3>
                {/* Dynamic Label */}
                <p className="text-gray-700 text-sm md:text-base lg:text-lg font-medium uppercase tracking-wide opacity-80">
                  {item.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;