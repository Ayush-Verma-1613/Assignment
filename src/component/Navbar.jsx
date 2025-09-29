import React, { useState } from "react";
import { Menu, X, BookOpen } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <BookOpen className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-2xl font-bold text-gray-800">
              IELTS<span className="text-blue-600">Pro</span>
            </span>
          </div>

          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-blue-600 transition">Home</a>
            <a href="#features" className="text-gray-700 hover:text-blue-600 transition">Features</a>
            <a href="#testimonials" className="text-gray-700 hover:text-blue-600 transition">Testimonials</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 transition">Contact</a>
          </div>

          <button className="hidden md:block bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition">
            Enroll Now
          </button>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#home" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 rounded">Home</a>
            <a href="#features" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 rounded">Features</a>
            <a href="#testimonials" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 rounded">Testimonials</a>
            <a href="#contact" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 rounded">Contact</a>
            <button className="w-full mt-2 bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition">
              Enroll Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
