"use client"; // <-- Needed because FloatingPetals uses random values

import React from "react";
import FloatingPetals from "@/components/FloatingPetals";
import HeroSection from "@/components/HeroSection";
import WhySpecialSection from "@/components/WhySpecialSection";
import FlowerGarden from "@/components/FlowerGarden";
import CodeStory from "@/components/CodeStory";
import DistanceSection from "@/components/DistanceSection";
import HiddenSurprise from "@/components/HiddenSurprise";
import FinalSection from "@/components/FinalSection";

const Page: React.FC = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-pink-50">
      {/* Floating petals in the background */}
      <FloatingPetals />

      {/* Future sections will go here */}
      <main className="relative z-10">
        <HeroSection/>
        <WhySpecialSection/>
        <FlowerGarden/>
        <CodeStory/>
        <DistanceSection/>
        <HiddenSurprise/>
        <FinalSection/>

      </main>
    </div>
  );
};

export default Page;
