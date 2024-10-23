"use client";
import { useState } from "react";
import { useEffect } from "react";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Skillcard from "./Components/Skillcard";

const App = () => {
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);

  const handleMouseMove = (event) => {
    const headerHeight = 80; // Adjust this to your header height
    if (event.clientY < headerHeight) {
      setIsHeaderVisible(true);
    } else {
      setIsHeaderVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div onMouseMove={handleMouseMove}>
      <Header />
      <Hero isHeaderVisible={isHeaderVisible} />
      <Skillcard title={"ashwin"} description={"hello"}></Skillcard>
      

      
    </div>
  );
};

export default App;
