import React from 'react';

const Certificate = () => {
  return (
    <section className="w-full bg-[#0056B3] py-16 px-6 md:py-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Text Content */}
        <div className="text-white space-y-6">
          <div className="flex items-center gap-2">
            <span className="text-lg font-medium">Trusted & Compliant</span>
            <div className="w-2 h-2 rounded-full bg-cyan-300" />
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            GST Registered & Verified Business
          </h2>

          <div className="space-y-6 text-lg md:text-xl opacity-95 font-light leading-relaxed">
            <p>
              JKD Enterprises is a legally registered business under the Goods and 
              Services Tax (GST), demonstrating our commitment to operating with 
              complete transparency and compliance. Our GST certification reflects 
              our credibility as a trusted B2B supplier of cleaning and 
              housekeeping products across India.
            </p>
            <p>
              With years of industry experience, we have built strong relationships 
              with corporate clients, hospitality brands, and institutions by 
              delivering consistent quality, reliable service, and eco-friendly solutions.
            </p>
          </div>
        </div>

        {/* Right Image/Certificate Content */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative group">
            {/* Decorative background glow/shadow */}
            <div className="absolute -inset-1 bg-black/10 rounded-lg blur-xl group-hover:bg-black/20 transition duration-500"></div>
            
            {/* The Certificate "Paper" */}
            <div className="relative bg-white p-2 shadow-2xl rounded-sm transform lg:rotate-2 hover:rotate-0 transition-transform duration-500 ease-out">
              <img 
                src="/gst-certificate.png" 
                alt="GST Registration Certificate" 
                className="w-full max-w-[500px] h-auto block"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Certificate;