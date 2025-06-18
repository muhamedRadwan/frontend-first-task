// Responsive grid with card animations
import React from "react";
import StoryCard from "./StoryCard";
import TeacherCard from "./TeacherCard";
import people1 from "../../assets/images/people1.avif";
import people2 from "../../assets/images/people2.jpg";

function CardLayout() {
  return (
    <div className="relative z-0 w-full lg:w-1/2 flex flex-col items-center justify-center p-4 overflow-visible">
      <div className="absolute top-10 px-3 md:px-0 left-0 w-full flex justify-center z-[-1]">
        <div className="bg-[#20a0dd] p-6 rounded-br-4xl rounded-tr-4xl rounded-tl-4xl max-w-[600px] w-full h-[535px] top-3" />
      </div>

      <div className="relative w-full max-w-lg h-[500px]">
        <div className="flex flex-col gap-27">
          <div className="flex gap-5">
            <StoryCard
              image={people1}
              avatar={people1}
              name="Ibne Abbas"
              grade="4th standard"
              description="solving mechanical terms"
              likes={19}
              messages={2}
              views={202}
              customClass="top-8 left-0 w-[300px] md:w-[400px] transform md:-rotate-18 mt-4"
            />
            <StoryCard
              image={people2}
              avatar={people2}
              name="Abdullah Al Manjur"
              grade="4th standard"
              description="solving mechanical terms"
              likes={40}
              messages={10}
              views={112}
              customClass="top-8 left-0 w-[300px] md:w-[400px] transform md:rotate-15"
            />
          </div>
          <TeacherCard image={people1} />
        </div>
      </div>
    </div>
  );
}

export default CardLayout;
