import React from "react";
import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      score: "8.5",
      country: "New Delhi, India",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
      review: "IELTSPro transformed my preparation journey. The AI feedback was incredibly accurate.",
    },
    {
      name: "Raj Patel",
      score: "8.0",
      country: "Mumbai, India",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
      review: "The mock tests were exactly like the actual exam. The trainers are exceptional!",
    },
    {
      name: "Aisha Khan",
      score: "9.0",
      country: "Bangalore, India",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
      review: "I scored 9.0 in IELTS thanks to IELTSPro! Best investment in my career.",
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Success <span className="text-blue-600">Stories</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join thousands of students who achieved their dream band scores with IELTSPro.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
