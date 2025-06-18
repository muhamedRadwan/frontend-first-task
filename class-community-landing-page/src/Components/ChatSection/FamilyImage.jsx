// Image container with responsive sizing
import React from "react";
import { motion } from "framer-motion";

export default function FamilyImage(props) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.8 }}
      className="bg-white p-5 rounded-lg shadow-lg max-w-sm w-full"
    >
      <img
        src={props.image}
        alt="Family"
        className="w-full h-auto rounded-md object-cover"
      />
    </motion.div>
  );
}
