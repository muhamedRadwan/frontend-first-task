import React from "react";

function GrowContent() {
  return (
    <div className="text-center text-white mt-8 sm:mt-12 md:mt-16 px-4 sm:px-6 md:px-8 z-10">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-3 sm:mb-4">
        Let's get growing
      </h1>
      <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 max-w-xs sm:max-w-sm md:max-w-lg mx-auto">
        Find out how we protect our community of teachers, families and
        students.
      </p>
      <button className="bg-yellow-500 text-white font-bold py-2 sm:py-3 px-6 sm:px-8 rounded-full text-base sm:text-lg shadow-lg hover:bg-yellow-300 transition duration-300 ease-in-out transform hover:scale-105">
        Try Now
      </button>
    </div>
  );
};

export default GrowContent;
