"use client";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";

const Normal_Header = () => {
  return (
    <motion.header className="w-full px-12 py-6 bg-white transition-all duration-300">
      <div className="flex justify-between items-center">
        
        <Link href="/" className="flex items-center gap-4 -mx-6">
          <Image
            src="/Images/personal21.jpg" 
            alt="Logo"
            width={80} 
            height={120}
          />
          <span className="text-2xl uppercase font-bold text-black -mx-5">
            ASHWIN
          </span>
        </Link>

       
        <nav className="flex items-center gap-8">
          <NavLink href="/" label="Home" />
          <NavLink href="/About" label="About" />
          <NavLink href="/portfolio" label="Projects" />
          <NavLink href="/contact" label="Contact" />
        </nav>
      </div>
    </motion.header>
  );
};

const NavLink = ({ href, label }) => (
  <Link
    href={href}
    className="text-lg text-gray-800 hover:text-[#3B82F6] font-semibold transition-colors"
  >
    {label}
  </Link>
);

export default Normal_Header;
