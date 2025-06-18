// Animated background with content overlay
import React from "react";
import GrowBackground from "./GrowBackground";
import GrowContent from "./GrowContent";
import style from "../../styles/GrowSection.module.css";

function GrowSection() {
  return (
    <section
      className={`relative bg-growBlue min-h-[80vh] sm:min-h-[85vh] md:min-h-[90vh] lg:min-h-screen flex flex-col items-center justify-between p-4 sm:p-6 md:p-8 overflow-hidden ${style.background} py-16 md:py-24`}
    >
      <GrowBackground />
      <GrowContent />
    </section>
  );
}

export default GrowSection;
