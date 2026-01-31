import React from "react";

export default function Location() {
  return (
    <section className="py-24 px-6 bg-secondary">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

      
        <img
          src="https://image2url.com/r2/default/images/1769857337266-dd15a95c-6cca-4a1f-9f49-122d5694b559.jpeg"
          alt="Therapy office"
          className="rounded-xl shadow mx-auto transition-transform duration-700 hover:scale-105"
        />

       
        <div className="text-center md:text-left transition-all duration-700">
          <h2 className="text-4xl mb-4">
            In-Person in Santa Monica + California Telehealth
          </h2>

          <p className="max-w-2xl text-gray-700">
            Sessions are available in my quiet Santa Monica office or online for clients across California.
            The space is designed to feel calm, grounded, and welcoming.
          </p>
        </div>

      </div>
    </section>
  );
}
