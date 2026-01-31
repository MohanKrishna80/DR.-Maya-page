import React, { useState } from "react";

export default function Hero() {
  const [open, setOpen] = useState(false);

  return (
    <>
      
      <nav className="fixed top-0 left-0 w-full bg-base/80 backdrop-blur z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex justify-between items-center">
          <h1 className="md:text-xl font-semibold">Maya Reynolds</h1>

          
          <div className="hidden md:flex space-x-6 text-sm">
            <a href="#" className="hover:text-primary transition">
              Home
            </a>
            <a href="#" className="hover:text-primary transition">
              Blog
            </a>
            <a href="#" className="hover:text-primary transition">
              Contact
            </a>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden flex flex-col gap-1"
          >
            <span className="w-6 h-[2px] bg-black"></span>
            <span className="w-6 h-[2px] bg-black"></span>
            <span className="w-6 h-[2px] bg-black"></span>
          </button>
        </div>

        
        <div
          className={`md:hidden bg-base px-4 overflow-hidden transition-all duration-300 ${
            open ? "max-h-40 opacity-100 pb-4" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col gap-3 text-sm">
            <a onClick={() => setOpen(false)} href="#" className="hover:text-primary">
              Home
            </a>
            <a onClick={() => setOpen(false)} href="#" className="hover:text-primary">
              Blog
            </a>
            <a onClick={() => setOpen(false)} href="#" className="hover:text-primary">
              Contact
            </a>
          </div>
        </div>
      </nav>

      
      <section className="min-h-screen grid grid-cols-1 md:grid-cols-2 items-center gap-10 px-4 md:px-6 pt-28">
        
        
        <img
          src="https://image2url.com/r2/default/images/1769857423790-c55c4eaf-2b45-4ae1-b035-7154194dbab0.png"
          alt="Man climbing mountain"
          className="rounded-full object-cover aspect-square shadow-lg mx-auto w-full max-w-[180px] sm:max-w-[220px] md:max-w-[260px] lg:max-w-md transition-transform duration-700 hover:scale-105"
        />

       
        <div className="text-center md:text-left transition-all duration-700">
          <h1 className="text-2xl md:text-5xl mb-4 md:mb-6">
            Anxiety & Trauma Therapy for Adults in Santa Monica
          </h1>

          <p className="max-w-xl mx-auto md:mx-0 text-gray-600 text-sm mb-5 md:mb-6">
            Warm, collaborative therapy for anxiety, burnout, perfectionism, and
            past experiences. In-person in Santa Monica and telehealth across
            California.
          </p>

          <button className="px-6 md:px-8 py-2 md:py-3 text-sm md:text-base rounded-full bg-primary text-white transition transform hover:scale-105 active:scale-95">
            Schedule a Consultation
          </button>
        </div>
      </section>
    </>
  );
}
