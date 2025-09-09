// Grid layout for feature cards
import React from "react";
import FeatureCard from "./FeatureCard";
import Light from "../../assets/images/light.jpg";
import Emoji from "../../assets/images/emoji.jpg";
import Family from "../../assets/images/family.png";

const FeatureCardHolder = () => {
  return (
    <div className="bg-secondColor rounded-xl sm:rounded-2xl mt-12 sm:mt-16 md:mt-20 flex flex-col md:flex-row items-stretch justify-around space-y-8 md:space-y-0 md:space-x-4 lg:space-x-6 pb-12 sm:pb-15 px-4 sm:px-6 md:px-8 lg:rotate-2">
      <FeatureCard
        imageSrc={Light}
        title="Create a Positive Culture"
        description="Teachers can encourage students for any skill or value - whether it's working hard, being kind, helping others or something else."
      />
      <FeatureCard
        imageSrc={Emoji}
        title="Give Students a Voice"
        description="Students can showcase and share their learning by adding photos and videos to their own portfolios. It will help them to add a extra curiculum."
      />
      <FeatureCard
        imageSrc={Family}
        title="Share Moments with Parents"
        description="Get parents engaged by sharing photos and videos of wonderful classroom momments with both teachers and their children in social activities"
      />
    </div>
  );
};

export default FeatureCardHolder;
