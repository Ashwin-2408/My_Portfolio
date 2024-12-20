"use client";
import { useState, useEffect, useRef } from "react";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import FloatingCard from "./Components/Skillcard";
import ProgrammingLanguagesCard from "./Components/Programming_Languages";
import DevelopmentToolsCard from "./Components/DevelopmentTools";
import CodingProfiles from "./Components/CodingProfiles";
import Footer from "./Components/Footer";

const App = () => {
  const [isSkillsVisible, setIsSkillsVisible] = useState(false);
  const skillSectionRef = useRef(null);

  // Intersection Observer for the skill card animation
  useEffect(() => {
    const currentRef = skillSectionRef.current; // Store the current value of ref

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

    if (currentRef) {
      observer.observe(currentRef);
    }

    // Cleanup function that uses the stored `currentRef`
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div className="">
      <Header />
      <div className="mt-20">
        <Hero />
      </div>

      <div
        ref={skillSectionRef}
        className={`flex flex-col items-center mt-4 m-4 p-4 transition-all duration-1000 ${
          isSkillsVisible
            ? "opacity-100 transform translate-y-0"
            : "opacity-0 transform translate-y-12"
        }`}
      >
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <FloatingCard />
          <ProgrammingLanguagesCard />
          <DevelopmentToolsCard />
        </div>
      </div>
      <div className="mt-[50px]">
        <CodingProfiles></CodingProfiles>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default App;
