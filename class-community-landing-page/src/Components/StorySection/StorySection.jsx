// Card grid with testimonial data structure
import React from "react";
import CardLayout from "./CardLayout";
import TextContent from "../Common/TextContent";

function StorySection() {
  return (
    <section className="relative min-h-[80vh] pb-16 md:pb-18">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 xl:gap-8">
          <TextContent
            titleLine1="Offer a window into their world"
            paragraph="With Stories, teachers can securely share photos, videos & updates on a private feed so parents can see the classroom magic for themselves."
            buttonLabel="Learn More"
            width="70%"
          />
          <CardLayout />
        </div>
      </div>
    </section>
  );
}

export default StorySection;
