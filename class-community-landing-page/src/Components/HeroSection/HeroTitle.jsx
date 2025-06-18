// Animated text component with motion effects
import React from "react";
import { motion } from "framer-motion";

function HeroTitle() {
  return (
    <>
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center leading-tight"
      >
        Turn your calssroom <br />
        <span>into a community</span>
      </motion.h1>
      <p className="text-base sm:text-lg md:text-xl text-center mt-4 max-w-xl mx-auto">
        Loved by more than 50 million students and parents. Free for teachers,
        forever.
      </p>
    </>
  );
}

export default HeroTitle;
