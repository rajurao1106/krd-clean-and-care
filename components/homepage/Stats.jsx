import React from "react";
import { IoWaterOutline } from "react-icons/io5"; // For Litres
import { FiPackage } from "react-icons/fi";      // For Products
import { LuRefreshCw } from "react-icons/lu";     // For Refills (Stable replacement)
import { HiOutlineUsers } from "react-icons/hi2"; // For Families

const stats = [
  {
    id: 1,
    icon: <IoWaterOutline className="text-blue-600" />,
    value: "342,751+",
    label: "Clean litres sold",
    bgColor: "bg-[#e1f3d0]",
  },
  {
    id: 2,
    icon: <FiPackage className="text-orange-600" />,
    value: "10,731+",
    label: "Products sold",
    bgColor: "bg-[#f5e6d3]",
  },
  {
    id: 3,
    icon: <LuRefreshCw className="text-purple-600" />,
    value: "275,487+",
    label: "Refills sold",
    bgColor: "bg-[#f3e1ff]",
  },
  {
    id: 4,
    icon: <HiOutlineUsers className="text-pink-600" />,
    value: "865,447+",
    label: "KRD families :)",
    bgColor: "bg-[#ffe1e9]",
  },
];

const ImpactSection = () => {
  return (
    <section className="bg-gray-50 py-16 md:py-24 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Main Heading */}
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            It&apos;s not just clean,<br className="sm:hidden" /> it&apos;s <span className="text-[#0056B3]"> <br />KRD Clean And Care</span>
          </h2>
          <div className="w-24 h-1.5 bg-[#0056B3] mx-auto mt-6 rounded-full" />
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {stats.map((item) => (
            <div
              key={item.id}
              className={`${item.bgColor} rounded-3xl p-6 md:p-8 flex flex-col items-start justify-between min-h-[220px] md:min-h-[280px] transition-all duration-300 hover:-translate-y-2 hover:shadow-xl group`}
            >
              {/* Icon Container */}
              <div className="bg-white w-14 h-14 md:w-20 md:h-20 rounded-2xl md:rounded-3xl flex items-center justify-center shadow-sm mb-6 md:mb-10 text-3xl md:text-5xl transition-transform duration-500 group-hover:rotate-[10deg]">
                {item.icon}
              </div>

              <div className="w-full">
                {/* Number */}
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-1 tracking-tighter">
                  {item.value}
                </h3>
                {/* Label */}
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