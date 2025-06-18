import React from "react";
import book from "../../assets/images/book2.webp";
import ruler from "../../assets/images/ruler.webp";
// import calc from "../../assets/images/calc.webp"; // Optional if unused

function GrowBackground () {
  return (
    <>
      <img
        src={ruler}
        alt="Ruler doodle"
        className="absolute bottom-1/2 left-1/4 w-20 sm:w-28 md:w-36 lg:w-40"
        style={{ transform: "translate(-50%, -50%)" }}
      />
      <img
        src={book}
        alt="Book doodle"
        className="absolute bottom-1/2 right-1/4 w-20 sm:w-28 md:w-36 lg:w-40"
        style={{ transform: "translate(50%, -50%)" }}
      />

      {/* Extra symbols */}
      <span className="absolute top-1/3 left-1/4 text-white text-3xl sm:text-4xl opacity-50">+</span>
      <span className="absolute top-2/3 right-1/3 text-white text-3xl sm:text-4xl opacity-50">%</span>
      <span className="absolute bottom-1/4 left-1/4 text-white text-3xl sm:text-4xl opacity-50">*</span>
      <span className="absolute top-1/2 right-1/2 text-white text-3xl sm:text-4xl opacity-50">~</span>
    </>
  );
};

export default GrowBackground;
