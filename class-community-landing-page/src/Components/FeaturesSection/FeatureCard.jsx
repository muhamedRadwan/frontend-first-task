// Card with icon and hover state
import React from "react";

const FeatureCard = ({ imageSrc, title, description }) => {
  return (
    <div className="relative lg:-rotate-2 pt-16 sm:pt-20 pb-6 sm:pb-8 px-4 sm:px-8 text-center flex flex-col items-center justify-start h-full max-w-sm mx-auto">
      {/* Floating circular image */}
      <div className="w-20 h-20 sm:w-24 sm:h-24 bg-white rounded-full flex items-center justify-center absolute -top-10 sm:-top-12 left-1/2 transform -translate-x-1/2 shadow-lg overflow-hidden border-15 border-blue-200">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-contain p-2 sm:p-3"
        />
      </div>

      <div className="text-white">
        <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 px-4 sm:px-10">
          {title}
        </h2>
        <p className="text-sm sm:text-base leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
