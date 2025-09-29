import React from "react";

const FeatureCard = ({ icon: Icon, title, description, color }) => {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-2">
      <div className={`${color} w-16 h-16 rounded-xl flex items-center justify-center mb-6`}>
        <Icon className="h-8 w-8 text-white" />
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
};

export default FeatureCard;
