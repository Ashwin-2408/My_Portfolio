import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

function Footer() {
  return (
    <footer className="bg-black text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Copyright */}
        <div className="text-center md:text-left mb-4 md:mb-0">
          <span>
            &copy; {new Date().getFullYear()} Ashwin. All rights reserved.
          </span>
        </div>

        {/* Social Media Links */}
        <div className="flex gap-6">
          <Link
            href="https://www.linkedin.com/in/your-linkedin-profile"
            target="_blank"
            className="text-white hover:text-blue-600"
          >
            <FontAwesomeIcon icon={faLinkedin} size="lg" />
          </Link>
          <Link
            href="https://github.com/your-github-profile"
            target="_blank"
            className="text-white hover:text-gray-600"
          >
            <FontAwesomeIcon icon={faGithub} size="lg" />
          </Link>
          <Link
            href="https://www.instagram.com/your-instagram-profile"
            target="_blank"
            className="text-white hover:text-pink-500"
          >
            <FontAwesomeIcon icon={faInstagram} size="lg" />
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
