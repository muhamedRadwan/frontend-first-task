// Text content with typography styles
import React from "react";
import { motion } from "framer-motion";

export default function ChatTextContent() {
  return (
    <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left p-4 mt-8 lg:mt-0">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
      >
        Stay connected <br className="hidden md:block" />
        <span className="block md:inline">—instantly</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="text-base sm:text-lg md:text-xl text-white mt-4 max-w-xl mx-auto lg:mx-0"
      >
        Messages make it easy to communicate with teachers, families & staff
        anytime, anywhere— and are automatically translated into more than 35
        languages.
      </motion.p>

      <motion.button
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="bg-yellow-500 hover:bg-yellow-600 text-white rounded-full px-8 py-3 transition duration-300 ease-in-out mt-8 text-lg font-semibold"
      >
        Create Account
      </motion.button>
    </div>
  );
}
