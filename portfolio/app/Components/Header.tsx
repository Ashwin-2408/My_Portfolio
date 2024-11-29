import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

interface NavLinkProps {
  href: string;
  label: string;
  onClick?: () => void;
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

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
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
            src="/Images/personal21.jpg"
            alt="Logo"
            width={80}
            height={80}
            className="rounded-full"
          />
          <span className="text-2xl uppercase font-bold text-black">
            ASHWIN
          </span>
        </Link>

        {/* Mobile Menu Toggle Button */}
        <button
          className="block sm:hidden text-2xl text-gray-800 z-50 relative"
          onClick={toggleMobileMenu}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMobileMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden sm:flex sm:flex-row sm:gap-8 sm:items-center">
          <NavLink href="/" label="Home" />
          <NavLink href="/About" label="About" />
          <NavLink href="/Projects" label="Projects" />
        </nav>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/70 z-40"
              onClick={closeMobileMenu}
            />
          )}
        </AnimatePresence>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.nav
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween" }}
              className="fixed top-0 right-0 w-64 h-full bg-white shadow-lg z-50 p-8"
            >
              <div className="flex flex-col space-y-6 mt-16">
                <NavLink href="/" label="Home" onClick={closeMobileMenu} />
                <NavLink
                  href="/About"
                  label="About"
                  onClick={closeMobileMenu}
                />
                <NavLink
                  href="/Projects"
                  label="Projects"
                  onClick={closeMobileMenu}
                />
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

// Define the NavLinkProps interface
const NavLink: React.FC<NavLinkProps> = ({ href, label, onClick }) => (
  <Link
    href={href}
    className="text-xl text-gray-800 hover:text-[#3B82F6] font-semibold transition-colors block py-2"
    onClick={onClick}
  >
    {label}
  </Link>
);

export default Header;
