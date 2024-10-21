"use client";
import { useState } from "react";
import { useEffect } from "react";
import Header from "./Components/Header";
import Hero from "./Components/Hero";

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
    <div onMouseMove={handleMouseMove} >
      <Header />
      <Hero isHeaderVisible={isHeaderVisible} />
    </div>
  );
};

export default App;
