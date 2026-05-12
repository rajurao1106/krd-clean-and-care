import React from 'react';
import { Search, Headphones, ShoppingCart } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      id: '01',
      title: 'Explore Our Wide Product Range',
      description: 'Browse through our comprehensive range of cleaning and housekeeping products on our website. From tissue papers to cleaning machinery, we offer everything you need to maintain a clean and hygienic environment.',
      icon: <Search className="w-10 h-10 text-lime-600" />,
    },
    {
      id: '02',
      title: 'Select Products & Talk to Our Experts',
      description: 'Have questions or need assistance in selecting the right products for your needs? Reach out to our team of experts who are ready to assist you. If you’re unsure about product specifications or need recommendations, we’re here to help.',
      icon: <Headphones className="w-10 h-10 text-lime-600" />,
    },
    {
      id: '03',
      title: 'Place Your Order',
      description: 'JKD Enterprise is a trusted B2B wholesaler provider offering top-quality and eco-friendly cleaning solutions. Our goal is simple – to deliver reliable and affordable products for your business needs. The Place Your Order process has been specially designed to give you a seamless and stress-free shopping experience.',
      icon: <ShoppingCart className="w-10 h-10 text-lime-600" />,
    },
  ];

  return (
    <section className="bg-[#0056B3] py-16 px-4 font-sans text-white relative overflow-hidden">
      {/* Header Section */}
      <div className="max-w-6xl mx-auto text-center mb-16 relative z-10">
        <span className="uppercase tracking-widest text-sm font-bold opacity-90">Working Process</span>
        <h2 className="text-4xl md:text-5xl font-extrabold mt-2 mb-6">How It Works</h2>
        <p className="max-w-2xl mx-auto text-lg opacity-90">
          Experience the convenience of shopping for top-quality cleaning solutions with JKD Enterprise.
        </p>
      </div>

      {/* Steps Container */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 relative">
        
        {/* Curved Dashed Line (Visible on Desktop) */}
        <div className="hidden md:block absolute top-16 left-0 w-full h-24 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 1200 120" fill="none">
            <path 
              d="M0 20 C 150 120, 450 120, 600 60 C 750 0, 1050 0, 1200 100" 
              stroke="white" 
              strokeWidth="2" 
              strokeDasharray="8 8" 
              opacity="0.5"
            />
          </svg>
        </div>

        {steps.map((step) => (
          <div key={step.id} className="flex flex-col items-center text-center relative z-10">
            {/* Icon Circle */}
            <div className="relative mb-8">
              <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-lg">
                {step.icon}
              </div>
              {/* Number Badge */}
              <div className="absolute -bottom-2 -left-2 w-10 h-10 bg-[#3A4750] rounded-full flex items-center justify-center text-sm font-bold border-4 border-[#78B342]">
                {step.id}
              </div>
            </div>

            {/* Content */}
            <h3 className="text-2xl font-bold mb-4 px-4 leading-tight">
              {step.title}
            </h3>
            <p className="text-sm leading-relaxed opacity-95 max-w-sm">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;