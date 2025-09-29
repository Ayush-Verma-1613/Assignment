import React from "react";
import { Mic, BookOpen, Brain, Award } from "lucide-react";
import FeatureCard from "./FeatureCard";

const Features = () => {
  const features = [
    {
      icon: Mic,
      title: "Live Speaking Practice",
      description: "Practice with certified IELTS trainers in real-time video sessions.",
      color: "bg-gradient-to-br from-blue-500 to-blue-600",
    },
    {
      icon: BookOpen,
      title: "Unlimited Mock Tests",
      description: "Access 100+ full-length mock tests with detailed analytics.",
      color: "bg-gradient-to-br from-purple-500 to-purple-600",
    },
    {
      icon: Brain,
      title: "AI Band Score Predictor",
      description: "Get accurate band score predictions powered by AI.",
      color: "bg-gradient-to-br from-pink-500 to-pink-600",
    },
    {
      icon: Award,
      title: "Expert Mentorship",
      description: "Learn from trainers with 10+ years of experience.",
      color: "bg-gradient-to-br from-green-500 to-green-600",
    },
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose <span className="text-blue-600">IELTSPro?</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We combine cutting-edge technology with proven teaching methods to help you achieve your target band score.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
