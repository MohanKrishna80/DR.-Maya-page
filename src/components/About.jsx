import { motion } from "framer-motion";
import React from "react";

export default function About() {
  return (
    <section className="py-24 px-10 grid md:grid-cols-2 gap-12 items-center bg-secondary">
      
     
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 60, damping: 15 }}
      >
        <h2 className="text-4xl mb-4 font-semibold text-primary">
          Hi, I’m Dr. Maya Reynolds
        </h2>

        <p className="text-gray-700">
          I’m a licensed clinical psychologist in Santa Monica helping high-achieving adults move through anxiety, trauma, burnout, and perfectionism using CBT, EMDR, mindfulness, and body-based therapy.
        </p>

        <p className="mt-4 text-gray-600">
          My goal is not just symptom relief, but helping you build resilience and a stronger relationship with yourself.
        </p>
      </motion.div>

      
      <motion.img
        initial={{ opacity: 0, x: 40, scale: 0.95 }}
        whileInView={{ opacity: 1, x: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        src="https://images.unsplash.com/photo-1545389336-cf090694435e?auto=format&fit=crop&w=800&q=80"
        className="rounded-2xl shadow-lg"
      />
    </section>
  );
}
