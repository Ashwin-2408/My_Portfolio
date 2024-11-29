import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

interface NavLinkProps {
  href: string;
  label: string;
}

const Header = ({ fixed = true }: { fixed?: boolean }) => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleScroll = () => {
    setIsSticky(window.scrollY > 100);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.header
      className={`${
        fixed ? "fixed top-0 left-0 w-full z-50" : "relative"
      } px-6 py-6 bg-white transition-all duration-300 ${
        isSticky ? "shadow-md" : ""
      }`}
    >
      <div className="flex justify-between items-center">
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-4">
          <Image
            src="/Images/personal21.jpg" // Replace this with your logo's path
            alt="Logo"
            width={80} // Adjusted logo size
            height={80}
          />
          <span className="text-2xl uppercase font-bold text-black">
            ASHWIN
          </span>
        </Link>

        {/* Mobile Menu Toggle Button */}
        <button
          className="block sm:hidden text-2xl text-gray-800"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? "X" : "☰"}
        </button>

        {/* Navigation Links */}
        <nav
          className={`${
            isMobileMenuOpen ? "block flex-col items-center gap-4" : "hidden"
          } sm:flex sm:flex-row sm:gap-8 sm:items-center`}
        >
          <NavLink href="/" label="Home" />
          <NavLink href="/About" label="About" />
          <NavLink href="/Projects" label="Projects" />
        </nav>
      </div>
    </motion.header>
  );
};

// Define the NavLinkProps interface
const NavLink: React.FC<NavLinkProps> = ({ href, label }) => (
  <Link
    href={href}
    className="text-lg text-gray-800 hover:text-[#3B82F6] font-semibold transition-colors"
  >
    {label}
  </Link>
);

export default Header;
