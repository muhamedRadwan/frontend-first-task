// Full viewport section with layered components and background
import React from "react";
import HeroBackground from "./HeroBackground";
import HeroImages from "./HeroIamges";
import HeroTitle from "./HeroTitle";
import HeroActions from "./HeroActions";
import style from "../../styles/HeroSection.module.css";
import backgroundImage from "../../assets/images/bg-image.png";

function HeroSection() {
  return (
    <section
      className={`${style.background} relative h-[95vh] flex items-center justify-center px-4 overflow-hidden`}
    >
      <HeroBackground />
      <img
        src={backgroundImage}
        alt="playful background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      <HeroImages />
      <div className="relative z-10 text-white text-center">
        <HeroTitle />
        <HeroActions />
      </div>
    </section>
  );
}

export default HeroSection;
