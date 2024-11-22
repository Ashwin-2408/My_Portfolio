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
  const [isSticky, setIsSticky] = useState(false);

  const handleScroll = () => {
    setIsSticky(window.scrollY > 100);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.header
      className={`fixed top-0 left-0 w-full z-50 px-6 md:px-12 py-4 md:py-6 bg-white shadow-md transition-transform duration-300 `}
    >
      <div className="flex justify-between items-center">
       
        <nav className="flex items-center gap-6 md:gap-12">
          <NavLink href="/" icon={faHome} label="HOME" />
          <NavLink href="/About" icon={faUser} label="ABOUT" />
          <NavLink href="/projects" icon={faFolderOpen} label="PROJECTS" />
        </nav>

        
        <Link
          href="/"
          className="w-12 h-12 flex items-center justify-center bg-[#3B82F6] text-white text-xl font-bold rounded-full shadow-md"
        >
          AT
        </Link>

      
        <div className="flex items-center gap-4 md:gap-6">
          <SocialLink
            href="https://www.linkedin.com/in/ashwin-t-97b383290"
            icon={faLinkedin}
            color="#0A66C2"
          />
          <SocialLink href="https://github.com/Ashwin-2408" icon={faGithub} />
          <SocialLink
            href="https://www.instagram.com/"
            icon={faInstagram}
            color="#E4405F"
          />
        </div>
      </div>
    </motion.header>
  );
};

const NavLink = ({ href, icon, label }) => (
  <Link
    href={href}
    className="flex items-center gap-2 text-black hover:text-[#3B82F6] font-semibold transition-colors"
  >
    <FontAwesomeIcon icon={icon} className="text-lg md:text-xl" />
    <span className="hidden md:inline">{label}</span>
  </Link>
);

const SocialLink = ({ href, icon, color = "#333" }) => (
  <Link
    href={href}
    target="_blank"
    className="transition-transform hover:scale-110"
  >
    <FontAwesomeIcon
      icon={icon}
      style={{ color }}
      className="text-xl md:text-2xl"
    />
  </Link>
);

export default Header;
