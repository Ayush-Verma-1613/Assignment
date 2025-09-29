import React from "react";
import { Star } from "lucide-react";

const TestimonialCard = ({ name, score, image, review, country }) => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg">
      <div className="flex items-center gap-4 mb-4">
        <img src={image} alt={name} className="w-16 h-16 rounded-full object-cover" />
        <div>
          <h4 className="font-bold text-gray-800">{name}</h4>
          <p className="text-sm text-gray-600">{country}</p>
          <div className="flex items-center gap-1 mt-1">
            <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-semibold">
              Band {score}
            </span>
          </div>
        </div>
      </div>
      <div className="flex gap-1 mb-3">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
        ))}
      </div>
      <p className="text-gray-600 text-sm leading-relaxed">{review}</p>
    </div>
  );
};

export default TestimonialCard;
