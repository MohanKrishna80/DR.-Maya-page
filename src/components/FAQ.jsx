import React, { useState } from "react";

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

              
                <span
                  className={`text-xl transform transition-transform duration-300 ${
                    open === i ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </div>

         
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  open === i ? "max-h-40 opacity-100 mt-3" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-gray-600">{f.a}</p>
              </div>
            </div>
          ))}
        </div>

        <img
          src="https://media.istockphoto.com/id/2198836359/photo/i-want-to-ask-a-question.webp?a=1&b=1&s=612x612&w=0&k=20&c=OFp426FNlvb42ZuLSJCSZQ6EchcT_nyeGue7LCmCF7s="
          alt="Calm therapy space"
          className="rounded-xl shadow mx-auto transition-transform duration-700 hover:scale-105"
        />

      </div>
    </section>
  );
}
