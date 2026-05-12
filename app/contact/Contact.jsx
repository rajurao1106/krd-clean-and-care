import React from 'react';
import { MapPin, Phone, Mail, Truck } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-[#FFFFFF]">
      {/* --- FORM & INFO SECTION --- */}
      <section className="max-w-7xl mx-auto py-20 px-6">
        <h2 className="text-3xl font-bold text-[#000000] mb-12">Drop Us A Message</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" placeholder="Your First Name... *" className="w-full bg-[#FFFFFF] border-2 border-gray-100 p-4 rounded-md outline-none focus:border-[#0056B3] text-[#000000]" />
              <input type="text" placeholder="Your Last Name... *" className="w-full bg-[#FFFFFF] border-2 border-gray-100 p-4 rounded-md outline-none focus:border-[#0056B3] text-[#000000]" />
            </div>
            <input type="email" placeholder="Your Email..." className="w-full bg-[#FFFFFF] border-2 border-gray-100 p-4 rounded-md outline-none focus:border-[#0056B3] text-[#000000]" />
            <textarea rows="4" placeholder="Your Message..." className="w-full bg-[#FFFFFF] border-2 border-gray-100 p-4 rounded-md outline-none focus:border-[#0056B3] text-[#000000]"></textarea>
            
            <button className="w-full bg-[#00b189] text-white py-4 rounded-md font-bold uppercase tracking-widest hover:bg-opacity-90 transition-all shadow-md">
              Submit Message
            </button>
          </form>

          {/* Contact Information Card */}
          <div className="bg-[#FFFFFF] border border-gray-100 shadow-[0px_20px_50px_rgba(0,86,179,0.1)] rounded-2xl p-8 h-fit">
            <h3 className="text-2xl font-bold mb-8 text-[#000000]">Contact <span className="text-[#0056B3]">Information:</span></h3>
            
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="bg-[#E1F5FE] p-3 rounded-full h-fit text-[#0056B3]">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-[#000000]">Our Location:</h4>
                  <p className="text-[#000000] opacity-70">Unit No. A4, Nandkishore Industrial Estate, Mumbai 400093.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-[#E1F5FE] p-3 rounded-full h-fit text-[#0056B3]">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-[#000000]">Call Us Now:</h4>
                  <p className="text-[#000000] opacity-70">+91 7710090505</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-[#E1F5FE] p-3 rounded-full h-fit text-[#0056B3]">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-[#000000]">Email Us:</h4>
                  <p className="text-[#000000] opacity-70">info@example.com</p>
                </div>
              </div>
            </div>

            {/* Mint Green Bulk Order Section */}
            <div className="mt-12 bg-[#00b189] text-white p-6 rounded-xl flex items-center gap-4">
              <Truck size={32} className="flex-shrink-0" />
              <div>
                <h4 className="font-bold text-lg">Looking Bulk Orders?</h4>
                <p className="text-sm opacity-90 font-medium">Contact us for special pricing on large procurements!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="w-full h-[400px] bg-gray-200">
        <iframe 
          title="Location Map"
          className="w-full h-full grayscale"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1!2d0!3d0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM!5e0!3m2!1sen!2sin!4v1"
          loading="lazy"
        ></iframe>
      </section>
    </div>
  );
};

export default Contact;