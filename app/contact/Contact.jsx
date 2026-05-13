import React from 'react';
import { MapPin, Phone, Mail, Truck, Globe } from 'lucide-react';

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
            
            <button className="w-full bg-[#0056B3] text-white py-4 rounded-md font-bold uppercase tracking-widest hover:bg-opacity-90 transition-all shadow-md">
              Submit Message
            </button>
          </form>

          {/* Contact Information Card - Updated with IndiaMART Profile Details */}
          <div className="bg-[#FFFFFF] border border-gray-100 shadow-[0px_20px_50px_rgba(0,86,179,0.1)] rounded-2xl p-8 h-fit">
            <h3 className="text-2xl font-bold mb-8 text-[#000000]">Contact <span className="text-[#0056B3]">Information:</span></h3>
            
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="bg-[#E1F5FE] p-3 rounded-full h-fit text-[#0056B3]">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-[#000000]">Our Location:</h4>
                  <p className="text-[#000000] opacity-70">
                    Industrial Area Amaseoni, Khasra No. 232/1 Part, <br />
                    Raipur, Chhattisgarh, 492001, India
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-[#E1F5FE] p-3 rounded-full h-fit text-[#0056B3]">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-[#000000]">Call Us Now:</h4>
                  <p className="text-[#000000] opacity-70">08048966524</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-[#E1F5FE] p-3 rounded-full h-fit text-[#0056B3]">
                  <Globe size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-[#000000]">Official Marketplace:</h4>
                  <a 
                    href="https://krd-clean-and-care.in/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#0056B3] hover:underline"
                  >
                    indiamart.com/krdcleancare
                  </a>
                </div>
              </div>
            </div>

            {/* Mint Green Bulk Order Section */}
            <div className="mt-12 bg-[#0056B3] text-white p-6 rounded-xl flex items-center gap-4">
              <Truck size={32} className="flex-shrink-0" />
              <div>
                <h4 className="font-bold text-lg">Looking for Bulk Orders?</h4>
                <p className="text-sm opacity-90 font-medium">As a leading manufacturer, we offer special B2B pricing on large procurements.</p>
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
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3718.544837549117!2d81.7061793!3d21.2498704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28dd0409f0f9c5%3A0x633b497f6c348555!2sAmaseoni%2C%20Raipur%2C%20Chhattisgarh!5e0!3m2!1sen!2sin!4v1715510000000!5m2!1sen!2sin"
          loading="lazy"
        ></iframe>
      </section>
    </div>
  );
};

export default Contact;