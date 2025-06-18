import React from "react";
import calc from "../../assets/images/calc.webp";
import ruler from "../../assets/images/ruler.webp";
import book from "../../assets/images/book2.webp";

function HeroImages() {
  return (
    <>
      <img
        src={calc}
        alt="calc"
        className="absolute top-25 left-10 w-20 h-20 animate-bounce hidden lg:block"
      />
      <img
        src={ruler}
        alt="ruler"
        className="absolute top-1/4 right-10 w-32 h-32 animate-[spin_5s_linear_infinite] hidden lg:block"
      />
      <img
        src={book}
        alt="notebook"
        className="absolute top-80 left-1/4 w-28 h-28 animate-pulse hidden lg:block"
      />
      
      <span className="absolute top-1/3 left-1/4 text-white text-3xl sm:text-4xl opacity-50">
        +
      </span>
      <span className="absolute top-2/3 right-1/3 text-white text-3xl sm:text-4xl opacity-50">
        %
      </span>
      <span className="absolute bottom-1/4 left-1/4 text-white text-3xl sm:text-4xl opacity-50">
        *
      </span>
      <span className="absolute top-1/2 right-1/2 text-white text-3xl sm:text-4xl opacity-50">
        ~
      </span>
    </>
  );
}

export default HeroImages;
