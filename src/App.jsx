import React from "react";

import Hero from "./components/Hero";
import About from "./components/About";
import Specialties from "./components/Specialties";
import Location from "./components/Location";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";

export default function App() {
  return (
    <>
      <Hero />
      <About />
      <Specialties />
      <Location />
      <FAQ />
      <Testimonials />
      <Contact />
      <CTA />
      <Footer />
    </>
  );
}
