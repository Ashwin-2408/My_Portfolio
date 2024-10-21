"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";

const Header = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleMouseMove = (event) => {
    const headerHeight = 80;
    if (event.clientY < headerHeight) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <motion.div
      className={`p-7 px-12 bg-white flex flex-row justify-between ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      } transition-opacity duration-300`}
      initial={{ y: -100 }}
      animate={{ y: isVisible ? 0 : -100 }}
    >
      <div className="flex flex-row gap-24 pt-2">
        <Link href="/" className="font-bold bangers-font text-xl">
          HOME
        </Link>
        <Link href="/about" className="font-bold bangers-font text-xl">
          ABOUT
        </Link>
        <Link href="/projects" className="font-bold bangers-font text-xl">
          PROJECTS
        </Link>
      </div>
      <div>
        <Link
          href="/"
          className="w-12 h-12 bg-black text-white flex items-center justify-center rounded-full text-2xl font-bold"
        >
          AT
        </Link>
      </div>
      <div className="flex flex-row gap-12 justify-end pr-7 pt-2">
        <Link
          href="https://www.linkedin.com/in/ashwin-t-97b383290"
          target="_blank"
        >
          <FontAwesomeIcon
            icon={faLinkedin}
            color="#1e3050"
            className="h-[30px]"
          />
        </Link>
        <FontAwesomeIcon icon={faGithub} className="h-[30px]" />
        <FontAwesomeIcon icon={faInstagram} className="h-[30px]" />
      </div>
    </motion.div>
  );
};

export default Header;
