import React from "react";

function GoalCard({ icon, text, className }) {
  return (
    <div
      className={`absolute   w-[65px] h-[95px]  bg-white rounded-xl shadow-lg flex items-center justify-center gap-1 flex-col text-xs  ${className}`}
    >
      <img src={icon} alt={text} className="w-7 h-7" />
      <span className="text-gray-800 w-[90%] text-center">{text}</span>
    </div>
  );
}

export default GoalCard;
