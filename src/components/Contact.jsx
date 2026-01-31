import React from "react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="py-16 md:py-24 px-4 md:px-6 bg-secondary text-center"
    >
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-2xl md:text-4xl mb-6"
      >
        Get in Touch
      </motion.h2>

      <motion.form
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="max-w-xs sm:max-w-sm md:max-w-xl mx-auto grid gap-4"
      >
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

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-2 md:py-3 text-sm md:text-base rounded-full bg-primary text-white transition"
        >
          Send Message
        </motion.button>
      </motion.form>
    </motion.section>
  );
}
