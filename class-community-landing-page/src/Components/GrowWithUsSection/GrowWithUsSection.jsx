// Interactive section with goal tracking components
import React from "react";
import style from "../../styles/GrowWithUsSection.module.css";
import GoalCard from "./GoalCard";
import TextContent from "../Common/TextContent";

import boy from "../../assets/images/boyy.png";
import addIcon from "../../assets/images/goal-add.png";
import helpIcon from "../../assets/images/helping.png";
import washIcon from "../../assets/images/washing.png";
import positiveIcon from "../../assets/images/positive.png";

function GrowWithUsSection() {
  return (
    <section className={`min-h-[80vh] md:py-16 pt-16 ${style.section}`}>
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          {/* Left side: blue box with cards and image */}
          <div className="relative w-full md:w-1/2 flex justify-center">
            <div className="relative bg-[#20a0dd] rounded-bl-4xl rounded-tl-4xl rounded-tr-4xl w-full max-w-[450px] h-[500px]">
              {/* Cards positioned absolutely inside this relative box */}
              <GoalCard
                icon={addIcon}
                text="Add New Goal"
                className="absolute -top-10 -left-5"
              />
              <GoalCard
                icon={helpIcon}
                text="Helping others"
                className="absolute top-24 -left-12"
              />
              <GoalCard
                icon={washIcon}
                text="Washing Dishes"
                className="absolute top-10 right-2"
              />
              <GoalCard
                icon={positiveIcon}
                text="Staying Positives"
                className="absolute bottom-4 left-8"
              />

              {/* Kid image centered at bottom */}
              <div className="absolute bottom-0 left-1/3 transform -translate-x-1/2 z-10">
                <img src={boy} alt="kid" className="max-w-[800px]" />
              </div>
            </div>
          </div>

          {/* Right side: text and button */}
          <div className="w-full md:w-1/2">
            <TextContent
              titleLine1="Help them grow their own way"
              paragraph="with stories, teachers can securely share photos, videos & updates on a private feed so parents can see the classroom magic for themselves"
              buttonLabel="Learn more"
              width="100%"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default GrowWithUsSection;
