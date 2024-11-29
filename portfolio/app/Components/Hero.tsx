import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import AboutMe from "./Hero3DAnimation"; // New 3D animation component

const TYPING_TEXTS = ["{ASHWIN} "];


const Hero = () => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const currentWord = TYPING_TEXTS[index];
    const typingSpeed = isDeleting ? 80 : 150;
    const randomDelay = Math.random() * 100;

    if (!isDeleting && charIndex === currentWord.length) {
      setTimeout(() => setIsDeleting(true), 1500);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % TYPING_TEXTS.length);
    } else {
      setTimeout(() => {
        setCharIndex((prev) => prev + (isDeleting ? -1 : 1));
        setText(currentWord.slice(0, charIndex));
      }, typingSpeed + randomDelay);
    }
  }, [charIndex, isDeleting, index]); // Removed `isMobile` dependency

 

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div
      className={`flex flex-col lg:flex-row justify-between items-center transition-all duration-300 ${
        isMobile ? "mt-10" : "-mt-4"
      }`}
    >
      {/* Left Section: Image and Name */}
      <div className="flex flex-col items-center px-4 w-full lg:w-10/12">
        <div className="flex flex-col items-center lg:flex-row mb-4">
          {/* Profile Image */}
          <motion.div
            className={`${
              isMobile ? "w-48 h-48" : "w-64 h-64"
            } bg-gray-300 rounded-full overflow-hidden shadow-md mt-8`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src="/Images/photo.jpg"
              alt="Profile"
              width={256}
              height={256}
              className="object-cover"
            />
          </motion.div>

          {/* Name (Typing Animation) */}
          <div
            className={`flex flex-col items-center lg:items-start px-6 mx-5 ${
              isMobile ? "mt-6 text-center" : ""
            }`}
          >
            <motion.h1
              className={`${
                isMobile ? "text-4xl pl-0" : "text-5xl lg:text-7xl"
              } font-bold lato mb-2`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              {text}
              <span className="blink-cursor">|</span>
            </motion.h1>

            {/* Download CV Button */}
            <div className={`${isMobile ? "mt-4" : "px-40 mt-5"}`}>
              <div className="w-[160px]">
                <button
                  className="bg-[#3B82F6] text-black text-xl bangers-font font-bold px-4 py-2 rounded-full hover:bg-grey-600 w-full transition duration-300 shadow-sm"
                  aria-label="View Resume"
                  onClick={handleDownload}
                >
                  Download CV
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Role Description */}
        <div
          className={`mt-7 h-[140px] flex flex-col justify-center ${
            isMobile ? "text-center px-4" : "mx-[-50px]"
          }`}
        >
          <h2 className="text-3xl lg:text-6xl font-bold text-black lato">
            FULL STACK DEVELOPER AND
          </h2>
          <h2 className="text-3xl lg:text-6xl font-bold text-black lato">
            COMPETITIVE PROGRAMMER
          </h2>
        </div>
      </div>

      {/* Right Section: 3D Animation */}
      <div className="relative lg:w-1/3 w-full mt-8 lg:mt-0">
        <AboutMe />
      </div>
    </div>
  );
};

export default Hero;
