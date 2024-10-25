"use client";
import React from "react";
import { FaGithub, FaStar } from "react-icons/fa";
import { SiLeetcode, SiCodechef } from "react-icons/si";

const CodingProfiles = () => {
  return (
    <section className="coding-profiles bg-white p-12 rounded-lg shadow-lg bangers-font tracking-wider">
      {/* Animated Heading */}
      <h2 className="text-5xl font-bold mb-12 text-center animate-bounce">
        My Coding Profiles
      </h2>

      {/* Decorative Line */}
      <div className="relative mb-8">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-3/4 border-t border-gray-300"></div>
        </div>
        <div className="relative flex justify-center">
          <span className="bg-white px-4 text-gray-500">Find me on</span>
        </div>
      </div>

    
      <div className="flex justify-between items-center space-x-6">
        
        <a
          href="https://leetcode.com/u/Ashwin__2408/" 
          target="_blank"
          rel="noopener noreferrer"
          className="profile-card text-center p-8 bg-gray-100 rounded-lg shadow-md hover:shadow-xl transition-all duration-500 w-96 transform hover:scale-110 hover:rotate-3 hover:bg-yellow-50" // rotate left
        >
          <div className="flex justify-center mb-6">
            <SiLeetcode size={80} className="text-yellow-500" />
          </div>
          <h3 className="text-3xl font-semibold mb-4">LeetCode</h3>
          <p className="text-gray-600 text-lg">170+ problems solved</p>
        </a>

        <a
          href="https://www.codechef.com/users/ashwin2408"
          target="_blank"
          rel="noopener noreferrer"
          className="profile-card text-center p-8 bg-gray-100 rounded-lg shadow-md hover:shadow-xl transition-all duration-500 w-96 transform hover:scale-110  hover:bg-orange-50" // rotate left
        >
          <div className="flex justify-center mb-6">
            <SiCodechef size={80} className="text-orange-500" />
          </div>
          <h3 className="text-3xl font-semibold mb-4">CodeChef</h3>
          <p className="text-gray-600 text-lg">Max Rating - 1595</p>
          <div className="flex justify-center items-center">
            <FaStar size={28} className="text-yellow-500 mr-2" />
            <p className="text-gray-600 text-lg">3 Star Coder</p>
          </div>
        </a>

        <a
          href="https://github.com/Ashwin-2408"
          target="_blank"
          rel="noopener noreferrer"
          className="profile-card text-center p-8 bg-gray-100 rounded-lg shadow-md hover:shadow-xl transition-all duration-500 w-96 transform hover:scale-110 hover:-rotate-3 hover:bg-red-50" // rotate left
        >
          <div className="flex justify-center mb-6">
            <FaGithub size={80} className="text-gray-800" />
          </div>
          <h3 className="text-3xl font-semibold mb-4">GitHub</h3>
          <p className="text-gray-600 text-lg">
            Check out my personal projects
          </p>
        </a>
      </div>

      {/* Decorative Elements Between Gaps */}
      <div className="relative mt-12">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-2/3 border-t border-gray-300"></div>
        </div>
        <div className="relative flex justify-center">
          <span className="bg-white px-4 text-gray-500">Let's code!</span>
        </div>
      </div>
    </section>
  );
};

export default CodingProfiles;
