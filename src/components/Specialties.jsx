import React from "react";
import { motion } from "framer-motion";

const items = [
  {
    title: "Anxiety & Panic",
    desc: "Reduce constant worry, tension, and overthinking.",
   img: "https://media.istockphoto.com/id/1485324963/photo/thinking-graphic-mind-and-man-with-psychology-mental-health-and-balance-of-ideas-healing-and.webp?a=1&b=1&s=612x612&w=0&k=20&c=7I1w5sxSSgZPurAOnp_6ajt2Z1mITLx11nhfR8Vgtnw="


  },
  {
    title: "Trauma Recovery",
    desc: "Heal past experiences with safety and care.",
    img: "https://media.istockphoto.com/id/1216628318/photo/old-and-young-helping-hands.webp?a=1&b=1&s=612x612&w=0&k=20&c=jFu5VhNlFs4Jukc5vUHwZWIMAQr7sdi2NQjXBVIhxDg="
  },
  {
    title: "Burnout & Perfectionism",
    desc: "Reconnect and build sustainable balance.",
    img: "https://images.unsplash.com/photo-1570506097811-83004c7e4691?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8UmVjb25uZWN0JTIwYW5kJTIwYnVpbGQlMjBzdXN0YWluYWJsZSUyMGJhbGFuY2UufGVufDB8fDB8fHww"
  }
];

export default function Specialties() {
  return (
    <section className="py-24 px-6">
      <h2 className="text-4xl text-center mb-12">Our Specialties</h2>

      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {items.map((i, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.2 }}
            style={{ backgroundColor: "hsla(120, 20%, 88%, 1) " }}
            className="p-8 rounded-xl shadow hover:shadow-lg transition flex flex-col"
          >
            
            <div className="text-center flex-1">
              <h3 className="text-xl mb-3">{i.title}</h3>
              <p className="text-gray-600">{i.desc}</p>
            </div>

            <div className="mt-6 flex justify-center">
              <img
                src={i.img}
                alt={i.title}
                className="w-80 h-80 object-cover rounded-full shadow"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
