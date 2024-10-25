"use client";
import { useState, useEffect, useRef } from "react";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import FloatingCard from "./Components/Skillcard";
import ProgrammingLanguagesCard from "./Components/Programming_Languages";
import DevelopmentToolsCard from "./Components/DevelopmentTools";
import CodingProfiles from "./Components/CodingProfiles";

const App = () => {
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  const [isSkillsVisible, setIsSkillsVisible] = useState(false);
  const skillSectionRef = useRef(null);

  const handleMouseMove = (event) => {
    const headerHeight = 80; // Adjust this to your header height
    setIsHeaderVisible(event.clientY < headerHeight);
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Intersection Observer for the skill card animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsSkillsVisible(true);
          } else {
            setIsSkillsVisible(false); // Reset the animation when out of view
          }
        });
      },
      { threshold: 0.2 } // Adjust threshold to trigger the animation earlier or later
    );

    if (skillSectionRef.current) {
      observer.observe(skillSectionRef.current);
    }

    return () => {
      if (skillSectionRef.current) {
        observer.unobserve(skillSectionRef.current);
      }
    };
  }, []);

  return (
    <div>
      <Header isVisible={isHeaderVisible} />
      <Hero isHeaderVisible={isHeaderVisible} />

      <div
        ref={skillSectionRef}
        className={`flex justify-between items-stretch mt-[0px] m-4 p-4 space-x-4 transition-all duration-1000 ${
          isSkillsVisible
            ? "opacity-100 transform translate-y-0"
            : "opacity-0 transform translate-y-12"
        }`}
      >
        <FloatingCard />
        <ProgrammingLanguagesCard />
        <DevelopmentToolsCard />
      </div>
      <div className="mt-[50px]">
      <CodingProfiles ></CodingProfiles>
      </div>
    </div>
  );
};

export default App;
