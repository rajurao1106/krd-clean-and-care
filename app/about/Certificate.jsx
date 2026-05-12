import React from "react";

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
              KRD Clean and Care Private Limited is a legally registered entity
              under the Goods and Services Tax (GST) and the Ministry of
              Corporate Affairs. Our certification reflects our commitment to
              transparency as a trusted manufacturer and supplier of cleaning
              materials in India.
            </p>
            <p>
              With specialized units in the Amaseoni and Mandhar Industrial
              Areas, we have built strong relationships with corporate clients
              and hospitality brands by delivering consistent,
              professional-grade cleaning products.
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
