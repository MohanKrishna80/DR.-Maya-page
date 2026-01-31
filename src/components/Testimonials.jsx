import React from "react";

const testimonials = [
  {
    name: "Ananya Sharma",
    role: "Product Designer · Bangalore",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
    text: "The therapy sessions helped me regain confidence and peace. Truly life changing.",
  },
  {
    name: "Rahul Verma",
    role: "Software Engineer · Hyderabad",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
    text: "Very professional and supportive environment. Highly recommended.",
  },
  {
    name: "Priya Reddy",
    role: "Marketing Manager · Chennai",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    rating: 5,
    text: "I finally feel heard and understood. Thank you for the wonderful guidance.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-secondary py-16 md:py-20 px-4 md:px-6">
      <div className="max-w-6xl mx-auto text-center">

        <h2 className="text-2xl md:text-4xl font-semibold mb-3 md:mb-4 text-primary">
          What Our Clients Say
        </h2>

        <p className="text-gray-600 text-sm mb-8 md:mb-12">
          Real experiences from people we’ve helped feel stronger, calmer, and more confident.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 md:p-8 rounded-2xl shadow-sm hover:shadow-xl transition transform hover:-translate-y-2 hover:scale-105"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-12 h-12 md:w-16 md:h-16 rounded-full mx-auto mb-3 md:mb-4"
              />

              {/* Stars */}
              <div className="flex justify-center mb-2 md:mb-3">
                {[...Array(item.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 md:text-lg">
                    ★
                  </span>
                ))}
              </div>

              <p className="text-gray-700 mb-4 md:mb-5 text-xs md:text-sm leading-relaxed">
                “{item.text}”
              </p>

              <h4 className="font-medium text-primary text-sm">
                {item.name}
              </h4>
              <p className="text-[10px] md:text-xs text-gray-500">
                {item.role}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
