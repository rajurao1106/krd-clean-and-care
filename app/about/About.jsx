import React from "react";
import { CheckCircle2 } from "lucide-react";
import about1 from "@/public/about/about1.jpg";
import Image from "next/image";

const About = () => {
  return (
    <section className="relative w-full min-h-[600px] bg-white overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col lg:flex-row items-center gap-12">
        
        {/* Left Content Side */}
        <div className="w-full lg:w-1/2 z-10">
          <h2 className="text-4xl lg:text-6xl font-[Lato] font-bold text-slate-900 leading-tight mb-6">
            Reliable, Affordable <br className="hidden md:block" />& Eco-Friendly
          </h2>

          <p className="text-gray-600 text-lg mb-10 max-w-xl leading-relaxed">
            Founded in 2009, JKD Enterprise is committed to providing reliable
            and eco-friendly cleaning solutions. With a strong focus on quality
            and affordability, we serve various industries with excellence.
          </p>

          {/* Features List */}
          <div className="space-y-6">
            {[
              {
                title: "Experience",
                desc: "With over 25 years of experience, we understand the industry inside out.",
              },
              {
                title: "Quality Assurance",
                desc: "Our products undergo stringent quality checks to ensure superior performance.",
              },
              {
                title: "Affordability",
                desc: "We believe in providing cost-effective solutions without compromising on quality.",
              },
              {
                title: "Eco-Friendly Practices",
                desc: "JKD Enterprise is committed to sustainability, offering eco-friendly options wherever possible.",
              },
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-[#0056B3] flex-shrink-0 mt-1" />
                <p className="text-gray-700">
                  <span className="font-bold text-slate-900">{item.title}:</span> {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Image Side */}
        <div className="w-full lg:w-1/2 relative mt-16 lg:mt-0 flex justify-center">
          

          {/* Main Image Container */}
          <div className="relative z-10 w-full h-[400px] md:h-[500px] lg:h-[600px]">
            <Image
              src={about1}
              alt="Cleaning Professional"
              fill
              priority
              className="object-contain object-center"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;