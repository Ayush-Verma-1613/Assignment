import React from "react";
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import Features from "./component/Features/Features";
import Testimonials from "./component/Testimonials/Testimonials";
import Footer from "./component/Footer";

export default function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <Features />
      <Testimonials />
      <Footer />
    </div>
  );
}
