import React from 'react';
import { Factory, Home, Building2, Leaf } from 'lucide-react';
import about2 from "@/public/about/about2.jpg"
import Image from 'next/image';

const Services = () => {
  const services = [
    {
      id: "01",
      title: "Industrial Sanitation",
      desc: "High-performance cleaners designed for factories, manufacturing units, and large industrial facilities.",
      icon: <Factory className="w-8 h-8 text-white" />,
      column: "left"
    },
    {
      id: "02",
      title: "Domestic Hygiene",
      desc: "Premium floor cleaners, toilet cleaners, and hand washes for everyday household use under the Vis Clean brand.",
      icon: <Home className="w-8 h-8 text-white" />,
      column: "left"
    },
    {
      id: "03",
      title: "Bulk Institutional Supply",
      desc: "Tailored supply chains for hospitals, schools, and corporate offices requiring high-volume hygiene solutions.",
      icon: <Building2 className="w-8 h-8 text-white" />,
      column: "right"
    },
    {
      id: "04",
      title: "Eco-Conscious Formulations",
      desc: "Developing herbal and environmentally safe cleaning agents for a greener future.",
      icon: <Leaf className="w-8 h-8 text-white" />,
      column: "right"
    }
  ];

  const ServiceCard = ({ service }) => (
    <div className="bg-[#f0f7ff] p-8 rounded-xl relative group hover:shadow-lg transition-all duration-300">
      <span className="absolute top-4 right-6 text-4xl font-bold text-gray-200 group-hover:text-blue-100 transition-colors">
        {service.id}
      </span>
      <div className="bg-blue-500 w-14 h-14 rounded-full flex items-center justify-center mb-6 shadow-md shadow-blue-200">
        {service.icon}
      </div>
      <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed mb-6">
        {service.desc}
      </p>
      <button className="text-blue-500 font-bold text-xs tracking-widest border-b-2 border-blue-500 pb-1 hover:text-blue-700 hover:border-blue-700 transition-colors">
        READ MORE
      </button>
    </div>
  );

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto font-sans">
      {/* Header */}
      <div className="mb-16">
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-2">
          Excellence At The Core Of Our Services
        </h2>
        <div className="flex items-center gap-4">
          <span className="text-blue-400 text-xs font-bold uppercase tracking-widest">
            Specialized Cleaning Product Supply
          </span>
          <div className="h-[1px] flex-grow bg-gray-100"></div>
        </div>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
        
        {/* Left Column */}
        <div className="flex flex-col gap-8">
          {services.filter(s => s.column === "left").map(service => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        {/* Center Image Column - FIXED */}
        <div className="relative rounded-xl overflow-hidden bg-[#f0f7ff] min-h-[400px] lg:min-h-full">
          <Image
            src={about2}
            alt="Professional Cleaner"
            fill
            className="object-cover object-center"
            placeholder="blur" // Optional: gives a nice loading effect
          />
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-8">
          {services.filter(s => s.column === "right").map(service => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;