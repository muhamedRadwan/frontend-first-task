// Testimonial carousel section with animated heading and slider
import React, { useState } from "react";
import { motion } from "framer-motion";
import styles from "../../styles/CommunitySection.module.css";
import TestimonialCard from "./TestimonialCard";
import Slider from "./Slider";

// Testimonial data structure with user information and feedback
const testimonials = [
  {
    img: "https://randomuser.me/api/portraits/men/32.jpg",
    name: "Ibne Abbas",
    username: "@i.abbas",
    text: "Thank you Calss Community for providing opportunities for scholars to not only complete lessons, but give us teachers some love!",
  },
  {
    img: "https://randomuser.me/api/portraits/women/44.jpg",
    name: "Sarah Johnson",
    username: "@sarah.j",
    text: "The interactive lessons and community support have made learning so much more engaging. I've never felt more connected to my studies!",
  },
  {
    img: "https://randomuser.me/api/portraits/men/67.jpg",
    name: "Michael Chen",
    username: "@m.chen",
    text: "Being part of this community has transformed my learning experience. The collaborative environment and support from teachers is incredible!",
  },
];

function CommunitySection() {
  // State management for testimonial carousel
  const [current, setCurrent] = useState(0);

  // Navigation handlers for testimonial slider
  const prevTestimonial = () =>
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));

  const nextTestimonial = () =>
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));

  return (
    <section className={`py-8 md:pb-16 md:pb-24 ${styles.section}`}>
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        {/* Animated heading with fade-in and slide-up effect */}
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center text-white mb-4 md:mb-12 lg:mb-16"
        >
          Our community is <br className="hidden md:block" /> our superpower
        </motion.h2>
        {/* Reusable slider component with testimonial cards */}
        <Slider
          items={testimonials}
          currentIndex={current}
          onPrev={prevTestimonial}
          onNext={nextTestimonial}
          renderItem={(testimonial) => (
            <TestimonialCard testimonial={testimonial} />
          )}
        />
      </div>
    </section>
  );
}

export default CommunitySection;
