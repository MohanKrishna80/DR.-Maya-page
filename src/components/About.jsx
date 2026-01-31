import React from "react";

export default function About() {
  return (
    <section className="py-24 px-10 grid md:grid-cols-2 gap-12 items-center bg-secondary">
      
     
      <div className="transition-all duration-700 ease-out">
        <h2 className="text-4xl mb-4 font-semibold text-primary">
          Hi, I’m Dr. Maya Reynolds
        </h2>

        <p className="text-gray-700">
          I’m a licensed clinical psychologist in Santa Monica helping high-achieving adults move through anxiety, trauma, burnout, and perfectionism using CBT, EMDR, mindfulness, and body-based therapy.
        </p>

        <p className="mt-4 text-gray-600">
          My goal is not just symptom relief, but helping you build resilience and a stronger relationship with yourself.
        </p>
      </div>

     
      <img
        src="https://images.unsplash.com/photo-1545389336-cf090694435e?auto=format&fit=crop&w=800&q=80"
        alt="Doctor"
        className="rounded-2xl shadow-lg transition-transform duration-700 hover:scale-105"
      />
    </section>
  );
}
