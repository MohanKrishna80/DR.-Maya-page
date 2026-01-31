import { useState } from "react";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "Do you take insurance?",
    a: "I’m currently self-pay, but can provide superbills for out-of-network reimbursement."
  },
  {
    q: "Do you offer telehealth?",
    a: "Yes — secure telehealth is available for clients across California."
  },
  {
    q: "Who do you work with?",
    a: "I work with adults experiencing anxiety, trauma, burnout, and perfectionism."
  }
];

export default function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section className="py-24 px-6">
      <h2 className="text-4xl text-center mb-12">FAQs</h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        <div className="space-y-4">
          {faqs.map((f, i) => (
            <div
              key={i}
              onClick={() => setOpen(open === i ? null : i)}
              className="bg-white p-6 rounded-xl shadow cursor-pointer hover:shadow-md transition"
            >
              <div className="flex justify-between items-center">
                <h3>{f.q}</h3>

                <motion.span
                  animate={{ rotate: open === i ? 45 : 0 }}
                  className="text-xl"
                >
                  +
                </motion.span>
              </div>

              <AnimatePresence>
                {open === i && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-3 text-gray-600 overflow-hidden"
                  >
                    {f.a}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <motion.img
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          src="https://media.istockphoto.com/id/2198836359/photo/i-want-to-ask-a-question.webp?a=1&b=1&s=612x612&w=0&k=20&c=OFp426FNlvb42ZuLSJCSZQ6EchcT_nyeGue7LCmCF7s="
          alt="Calm therapy space"
          className="rounded-xl shadow mx-auto"
        />

      </div>
    </section>
  );
}
