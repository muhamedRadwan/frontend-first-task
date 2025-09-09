// Reusable slider component with customizable navigation and content
import React from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

const Slider = ({
  items,
  currentIndex,
  onPrev,
  onNext,
  renderItem,
  prevButtonClass = "bg-white text-blue-500 hover:bg-blue-100",
  nextButtonClass = "bg-orange-400 text-white hover:bg-orange-500",
}) => {
  return (
    <div className="relative max-w-2xl mx-auto">
      <button
        className={`custom-swiper-prev absolute left-[-10px] md:left-[-40px] lg:left-[-100px] top-1/2 -translate-y-1/2 z-10 rounded-full p-2 shadow-lg focus:outline-none ${prevButtonClass}`}
        aria-label="Previous"
        type="button"
        onClick={onPrev}
      >
        <HiChevronLeft size={32} />
      </button>
      <button
        className={`custom-swiper-next absolute right-[-10px] md:right-[-40px] lg:right-[-100px] top-1/2 -translate-y-1/2 z-10 rounded-full p-2 shadow-lg focus:outline-none ${nextButtonClass}`}
        aria-label="Next"
        type="button"
        onClick={onNext}
      >
        <HiChevronRight size={32} />
      </button>
      {renderItem(items[currentIndex])}
    </div>
  );
};

export default Slider;
