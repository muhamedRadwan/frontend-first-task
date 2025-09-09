// Message thread with bubble animations
import React from "react";
import ChatBubble from "./ChatBubble";
import FamilyImage from "./FamilyImage";

import person1 from "../../assets/images/people1.avif";
import person2 from "../../assets/images/people2.jpg";
import familyImage from "../../assets/images/family3webp.webp";
import TextContent from "../Common/TextContent";

export default function ChatSection() {
  return (
    <section className="relative min-h-[80vh]  md:pb-18">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
          {/* Chat Bubbles Column */}
          <div className="relative z-0 w-full lg:w-1/2 flex flex-col items-center justify-center overflow-visible">
            <div className="absolute top-10 left-0 w-full flex justify-center z-[-1]">
              <div className="bg-[#20a0dd] p-6 rounded-bl-4xl rounded-tl-4xl rounded-tr-4xl max-w-[450px] w-full h-[500px]" />
            </div>

            <ChatBubble
              message="Thank you for help Abdullah to do his homework."
              avatar={person1}
              isLeft
              delay={0.2}
            />
            <ChatBubble
              message="we had no idea, he was struggling with math"
              avatar={person2}
              delay={0.4}
            />
            <ChatBubble
              message="Yeah, He looks happy now. And very confident
               "
              avatar={person1}
              isLeft
              delay={0.6}
            />
            <FamilyImage image={familyImage} />
          </div>

          {/* Text Content Column */}
          <div className="w-full lg:w-1/2">
            <TextContent
              titleLine1="Stay connected—instantly"
              paragraph="Messages make it easy to communicate with teachers, families & staff anytime, anywhere— and are automatically translated into more than 35 languages."
              buttonLabel="Create Account"
              width="100%"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
