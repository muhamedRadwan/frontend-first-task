// Message bubble with tail and animations
import React from "react";
import { motion } from "framer-motion";

export default function ChatBubble(props) {
  const { message, avatar, isLeft, delay } = props;

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: delay }}
      className="flex items-center gap-10 mb-6 justify-center w-full"
    >
      {isLeft ? (
        <>
          <p className="text-gray-800 bg-white p-4 rounded-lg shadow-lg text-sm md:text-base">
            {message}
          </p>
          <img
            src={avatar}
            alt="Avatar"
            className="w-15 h-15 rounded-full mr-3 object-cover border-3 border-white"
          />
        </>
      ) : (
        <>
          <img
            src={avatar}
            alt="Avatar"
            className="w-15 h-15 rounded-full mr-3 object-cover border-2 border-white"
          />
          <p className="text-gray-800 bg-white p-4 rounded-lg shadow-lg text-sm md:text-base">
            {message}
          </p>
        </>
      )}
    </motion.div>
  );
}
