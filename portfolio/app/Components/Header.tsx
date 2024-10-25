"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import {
  faHome,
  faUser,
  faFolderOpen,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";

const Header = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  const handleMouseMove = (event) => {
    const headerHeight = 80;
    if (event.clientY < headerHeight) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const handleScroll = () => {
    setScrollY(window.scrollY);
    setIsSticky(window.scrollY > 100);
  };

  useEffect(() => {
    const handleScrollDebounced = () => {
      requestAnimationFrame(handleScroll);
    };

    window.addEventListener("scroll", handleScrollDebounced);
    return () => {
      window.removeEventListener("scroll", handleScrollDebounced);
    };
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <motion.div
      className={`p-4 md:p-7 px-6 md:px-12 bg-white flex flex-row justify-between items-center transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      } ${isSticky ? "fixed top-0 left-0 w-full z-50 shadow-md" : ""}`}
      initial={{ y: -100 }}
      animate={{ y: isVisible ? 0 : -100 }}
    >
      <div className="flex flex-row gap-4 md:gap-24 pt-2">
        <Link
          href="/"
          className="font-bold bangers-font text-lg md:text-xl flex items-center"
        >
          <FontAwesomeIcon icon={faHome} className="mr-1 md:mr-2" />
          <span className="hidden md:inline">HOME</span>
        </Link>
        <Link
          href="/about"
          className="font-bold bangers-font text-lg md:text-xl flex items-center"
        >
          <FontAwesomeIcon icon={faUser} className="mr-1 md:mr-2" />
          <span className="hidden md:inline">ABOUT</span>
        </Link>
        <Link
          href="/projects"
          className="font-bold bangers-font text-lg md:text-xl flex items-center"
        >
          <FontAwesomeIcon icon={faFolderOpen} className="mr-1 md:mr-2" />
          <span className="hidden md:inline">PROJECTS</span>
        </Link>
      </div>
      <div>
        <Link
          href="/"
          className="w-10 h-10 md:w-12 md:h-12 bg-black text-white flex items-center justify-center rounded-full text-lg md:text-2xl font-bold"
        >
          AT
        </Link>
      </div>
      <div className="flex flex-row gap-6 md:gap-12 justify-end pr-6 md:pr-7 pt-2">
        <Link
          href="https://www.linkedin.com/in/ashwin-t-97b383290"
          target="_blank"
        >
          <FontAwesomeIcon
            icon={faLinkedin}
            color="#1e3050"
            className="h-[24px] md:h-[30px]"
          />
        </Link>
        <Link href="https://github.com/Ashwin-2408" target="_blank">
          <FontAwesomeIcon icon={faGithub} className="h-[24px] md:h-[30px]" />
        </Link>
        <Link href="https://github.com/Ashwin-2408" target="_blank">
          <FontAwesomeIcon
            icon={faInstagram}
            color="#ff0862"
            className="h-[24px] md:h-[30px]"
          />
        </Link>
      </div>
    </motion.div>
  );
};

export default Header;
