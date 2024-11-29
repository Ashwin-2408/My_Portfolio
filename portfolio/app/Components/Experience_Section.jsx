"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import styles from "./Experience_Section.module.css";

const Experience_Section = () => {
  const timelineItemsRef = useRef([]);

  useEffect(() => {
    timelineItemsRef.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: index * 0.2,
          ease: "power3.out",
        }
      );
    });
  }, []);

  return (
    <div className="flex flex-col lg:flex-row h-full w-full bg-white text-gray-800">
      {/* Left Section: "Experience" Text */}
      <div className="flex items-center justify-center lg:w-1/4 w-full p-6 bg-white">
        <h1 className="text-2xl lg:text-3xl font-bold uppercase tracking-wider text-gray-800">
          Experience
        </h1>
      </div>

      {/* Vertical Line Separator */}
      <div className="w-[1px] bg-gray-300 h-full lg:block hidden"></div>

      {/* Right Section: Timeline */}
      <div
        role="region"
        aria-label="Experience Timeline"
        tabIndex={0}
        className="flex-1 p-6 lg:p-8 relative"
      >
        <div className={`${styles.timeline} relative`}>
          {[
            {
              year: "June 2024 - July 2024",
              title: "Student Intern",
              company: "United Techno",
              description:
                "Engineered a feature extraction application from EHR's (Electronic Health Records), which reduced processing time from 3-4 hours to 5-10 minutes.",
            },
            {
              year: "September 2024 - Present",
              title: "Backend Developer",
              company: "Amrita School of Business (ASB)",
              description:
                "Currently working with a team of 5 to develop an application for students at Amrita School of Business. I am partaking in the development of the backend of the application.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="timeline-item mb-12 pl-16 relative group"
              ref={(el) => (timelineItemsRef.current[index] = el)}
            >
              <div className="absolute top-0 left-10 w-6 h-6 bg-gray-800 rounded-full shadow-lg group-hover:scale-125 transition-transform duration-300"></div>

              <div className="ml-8 bg-white rounded-lg shadow-md p-4 border border-gray-200 relative">
                <div className="flex justify-between items-start w-full">
                  <span className="text-base sm:text-lg italic font-medium text-black">
                    {item.title}
                  </span>

                  <span className="text-base sm:text-lg font-medium text-black">
                    {item.year}
                  </span>
                </div>

                <h4 className="text-md font-medium text-black mt-3 mb-3">
                  {item.company}
                </h4>
                <p className="text-black text-sm sm:text-base">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience_Section;
