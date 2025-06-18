// Grid system with feature card components
import React from "react";
import FeatureCardHolder from "./FeatureCardHolder";

const FeaturesSection = () => {
  return (
    <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16  md:py-24">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center leading-tight text-white tracking-tight">
        We connects teachers with students
        <br className="hidden md:block" /> and parents to build amazing
        <br className="hidden md:block" /> classroom communities
      </h1>
      <div className="mt-6 sm:mt-8 md:mt-10 lg:mt-12">
        <FeatureCardHolder />
      </div>
    </div>
  );
};

export default FeaturesSection;
