import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

const TYPING_TEXTS = ["ASHWIN T"];

const Hero = ({ isHeaderVisible }) => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    handleResize(); // Set initial state

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Text animation logic
  useEffect(() => {
    if (isMobile) return; // Stop animation on mobile

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
  }, [charIndex, isDeleting, index, isMobile]);

  useEffect(() => {
    const cursorBlink = setInterval(() => setShowCursor((prev) => !prev), 500);
    return () => clearInterval(cursorBlink);
  }, []);

  // Function to handle the download
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
        isHeaderVisible ? "h-[calc(100vh-4rem)] -mt-5" : "h-[100vh] -mt-28"
      } ${isMobile ? "mt-10" : ""}`}
    >
      <div className="flex flex-col items-center px-4 w-full lg:w-10/12">
        <div className="flex flex-col lg:flex-row items-center mb-4 ml-8">
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
              className="object-cover"
            />
          </motion.div>
          <div className={`flex flex-col px-6 mx-5 ${isMobile ? "pl-10" : ""}`}>
            <div className="px-12">
              <motion.h1
                className={`text-6xl lg:text-8xl font-bold bangers-font tracking-wider mb-2 ${
                  isMobile ? "pl-20" : ""
                }`} // Push text to right on mobile
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                {text || TYPING_TEXTS[0]} {/* Fallback text for mobile */}
                <span
                  className={`inline-block ${
                    showCursor && !isMobile ? "animate-blink" : ""
                  }`}
                ></span>
              </motion.h1>
            </div>
            <div className="px-40 mt-5">
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
        <div className="mt-7 mx-[-50px] h-[140px] flex flex-col justify-center">
          <h2 className="text-5xl lg:text-7xl font-bold text-black bangers-font tracking-wider text-center lg:text-left">
            FULL STACK DEVELOPER AND
          </h2>
          <h2 className="text-5xl lg:text-7xl font-bold text-black bangers-font tracking-wider text-center lg:text-left">
            COMPETITIVE PROGRAMMER
          </h2>
        </div>
      </div>

      {/* Animated Card - Show only on larger screens */}
      <motion.div
        className="hidden lg:block w-full lg:w-1/3 h-auto max-h-[400px] bg-white text-black rounded-xl p-8 mr-0 lg:mr-12 border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out mt-6 lg:mt-0"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        whileHover={{ scale: 1.05 }}
      >
        <p className="text-lg mb-4 bangers-font">
          Hi, I'm Ashwin, a Full Stack Developer and Competitive Programmer
          passionate about building scalable, efficient web applications.
        </p>
        <div className="space-y-4">
          {[
            { icon: "code", text: "Expert in modern web technologies" },
            { icon: "speed", text: "Focused on performance and optimization" },
            { icon: "group", text: "Collaborative and team-oriented mindset" },
            {
              icon: "star",
              text: "Committed to continuous learning and improvement",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="flex items-center"
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <span className="material-icons mr-3">{item.icon}</span>
              <p className="text-lg bangers-font">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
