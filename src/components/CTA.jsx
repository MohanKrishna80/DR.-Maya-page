import React from "react";
import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section
      style={{ backgroundColor: "hsla(56.79,28.57%,38.43%,1)" }}
      className="py-16 md:py-24 px-4 md:px-6"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 60, damping: 15 }}
          className="text-white text-center md:text-left"
        >
          <h2 className="text-2xl md:text-4xl mb-4 font-semibold">
            Reconnect. Regulate. Move Forward.
          </h2>

          <p className="text-white/80 text-sm md:text-base">
            Book a consultation and take the first step.
          </p>

          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 px-6 md:px-8 py-2 md:py-3 text-sm md:text-base rounded-full bg-black hover:bg-black/80 transition"
          >
            Get Started
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mx-auto w-full max-w-xs sm:max-w-sm md:max-w-md"
        >
          <img
            src="https://media.istockphoto.com/id/1686497935/photo/business-man-running-on-arrow-shaped-bridge-to-the-light.webp?a=1&b=1&s=612x612&w=0&k=20&c=ZptNdZTfzPsm_wNJAZvrlaPRSP5fEqiHEBDXT1x45LY="
            alt="Moving forward"
            className="rounded-2xl shadow-lg w-full object-cover"
          />
        </motion.div>

      </div>
    </section>
  );
}
