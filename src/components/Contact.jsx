import React from "react";

export default function Contact() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6 bg-secondary text-center">
      
      <h2 className="text-2xl md:text-4xl mb-6 transition-opacity duration-700">
        Get in Touch
      </h2>

      <form className="max-w-xs sm:max-w-sm md:max-w-xl mx-auto grid gap-4 transition-opacity duration-700">
        <input
          placeholder="Name"
          className="p-2 md:p-3 text-sm md:text-base rounded transition focus:outline-none focus:ring-2 focus:ring-primary"
        />

        <input
          placeholder="Email"
          className="p-2 md:p-3 text-sm md:text-base rounded transition focus:outline-none focus:ring-2 focus:ring-primary"
        />

        <textarea
          placeholder="Message"
          rows="4"
          className="p-2 md:p-3 text-sm md:text-base rounded transition focus:outline-none focus:ring-2 focus:ring-primary"
        />

        <button
          className="px-6 py-2 md:py-3 text-sm md:text-base rounded-full bg-primary text-white transition transform hover:scale-105 active:scale-95"
        >
          Send Message
        </button>
      </form>

    </section>
  );
}
