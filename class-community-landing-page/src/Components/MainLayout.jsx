// Component composition with section ordering and layout structure
import React from "react";
import Header from "./Header";
import HeroSection from "./HeroSection/HeroSection";
import FeaturesSection from "./FeaturesSection/FeaturesSection";
import Testimonial from "./StorySection/Testimonial";
import GrowSection from "./GrowSection/GrowSection";
import ChatSection from "./ChatSection/ChatSection";
import Footer from "./Footer";
import StorySection from "./StorySection/StorySection";
import GrowWithUsSection from "./GrowWithUsSection/GrowWithUsSection";
import CommunitySection from "./CommunitySection/CommunitySection";

function MainLayout() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <ChatSection />
        <StorySection />
        <GrowWithUsSection />
        <CommunitySection />
        <GrowSection />
      </main>
      <Footer />
    </>
  );
}

export default MainLayout;
