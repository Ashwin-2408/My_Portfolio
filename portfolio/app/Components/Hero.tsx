"use client";
import Image from "next/image";
import { motion } from "framer-motion";

import { useEffect, useState } from "react";

const TYPING_TEXTS = ["ASHWIN T"];

const Hero = ({ isHeaderVisible }) => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);
  

  useEffect(() => {
    const currentWord = TYPING_TEXTS[index];

    if (isDeleting) {
      if (charIndex > 0) {
        setTimeout(() => setCharIndex((prev) => prev - 1), 50);
      } else {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % TYPING_TEXTS.length);
      }
    } else {
      if (charIndex < currentWord.length) {
        setTimeout(() => setCharIndex((prev) => prev + 1), 100);
      } else {
        setTimeout(() => setIsDeleting(true), 1500);
      }
    }

    setText(currentWord.slice(0, charIndex));
  }, [charIndex, isDeleting, index]);

  useEffect(() => {
    const cursorBlink = setInterval(() => setShowCursor((prev) => !prev), 500);
    return () => clearInterval(cursorBlink);
  }, []);

  return (
    <div
      className={`flex flex-row justify-between items-center transition-all duration-300 ${
        isHeaderVisible ? "h-[calc(100vh-4rem)]" : "h-[100vh]" // Adjusting height based on header visibility
      } ${isHeaderVisible ? "-mt-5" : "-mt-28"}`} // Negative margin to move it up when header is hidden
    >
      <div className="flex flex-col items-center px-4">
        <div className="flex flex-row items-center mb-4 ml-8">
          <motion.div
            className="w-64 h-64 bg-gray-300 rounded-full overflow-hidden shadow-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src="/Images/photo.jpg"
              alt="Profile"
              width={256}
              height={256}
            />
          </motion.div>
          <div className="flex flex-col px-6 mx-5">
            <div className="px-12">
              <motion.h1
                className="text-8xl font-bold bangers-font tracking-wider mb-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                {text}
                <span
                  className={`inline-block ${
                    showCursor ? "animate-blink" : ""
                  }`}
                ></span>
              </motion.h1>
            </div>
            <div className="px-40 mt-5">
              <div className="w-[160px]">
                <button
                  className="bg-[#3B82F6] text-black  text-xl bangers-font text-bold px-4 py-2 rounded-full hover:bg-grey-600 w-full transition duration-300 shadow-sm"
                  aria-label="View Resume"
                >
                  Download CV
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-7 mx-[-50px] h-[140px] flex flex-col justify-center">
          <h2 className="text-7xl font-bold text-black bangers-font tracking-wider">
            FULL STACK DEVELOPER AND
          </h2>
          <h2 className="text-7xl font-bold text-black bangers-font tracking-wider">
            COMPETITIVE PROGRAMMER
          </h2>
        </div>
      </div>
      <div className="pt-5">
        <Image
          src="/Images/download.jpeg"
          alt="Hero Image"
          width={350}
          height={350}
          priority
        />
      </div>
    </div>
  );
};

export default Hero;
