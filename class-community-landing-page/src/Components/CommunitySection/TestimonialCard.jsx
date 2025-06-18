// Individual testimonial card with user profile and feedback
import React from "react";
import styles from "../../styles/CommunitySection.module.css";

const TestimonialCard = ({ testimonial }) => {
  const { img, name, username, text } = testimonial;

  return (
    <div className="overflow-visible md:rotate-2">
      <div className="bg-secondColor rounded-4xl shadow-lg p-18 flex flex-col items-center text-center relative overflow-visible">
        <div className="flex items-center gap-4 mb-2 md:mb-4 bg-[#1a698f] rounded-full px-4 py-2 md:-rotate-2">
          <img
            src={img}
            alt={name}
            className="w-14 h-14 rounded-full border-4 border-white"
          />
          <div className="text-left">
            <div className="font-semibold text-white text-md">{name}</div>
            <div className="text-blue-100 text-sm">{username}</div>
          </div>
        </div>
        <p className="text-white text-lg md:-rotate-2">{text}</p>
        <div className="border-1 border-white rounded-4xl w-full h-full absolute md:left-4 left-2 right-0 md:-top-4 -top-2"></div>
      </div>
    </div>
  );
};

export default TestimonialCard;
