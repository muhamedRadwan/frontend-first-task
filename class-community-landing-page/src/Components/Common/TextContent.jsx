import React from "react";
import { motion } from "framer-motion";

function TextContent({
  titleLine1,
  titleLine2,
  paragraph,
  buttonLabel,
  width,
}) {
  return (
    <div className="w-full  flex flex-col items-center lg:items-start text-center lg:text-left p-4 mt-8 lg:mt-0 bg-">
      <motion.h3
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        style={{ width: width }}
        className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight `}
      >
        {titleLine1}
      </motion.h3>

      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="text-base sm:text-lg md:text-xl text-white mt-4 max-w-xl mx-auto lg:mx-0 "
      >
        {paragraph}
      </motion.p>

      <motion.button
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="bg-yellow-500 hover:bg-yellow-600 text-white rounded-full px-8 py-3 transition duration-300 ease-in-out mt-8 text-lg font-semibold"
      >
        {buttonLabel}
      </motion.button>
    </div>
  );
}

export default TextContent;
