import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import styles from "./Education_Section.module.css";

const Education_Section = () => {
  // Update the ref to be an array of HTMLDivElement elements
  const timelineItemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    timelineItemsRef.current.forEach((card, index) => {
      if (card) {
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
      }
    });
  }, []);

  return (
    <div className="flex flex-col md:flex-row h-full w-full bg-white text-gray-800">
      <div className="flex items-center justify-center w-full md:w-1/4 bg-white p-4">
        <h1 className="text-2xl sm:text-3xl md:text-3xl font-bold uppercase tracking-wider text-gray-800">
          Education
        </h1>
      </div>
      <div className="w-[1px] bg-gray-300 h-full lg:block hidden"></div>

      <div
        role="region"
        aria-label="Education Timeline"
        tabIndex={0}
        className="flex-1 p-4 md:p-8 relative"
      >
        <div className={`${styles.timeline} relative`}>
          {[
            {
              year: "2018 - 2020",
              title: "Class X",
              school: "Maharishi Vidya Mandir",
              description:
                "Completed my 10th grade with a focus on science, excelling in mathematics and physics.",
            },
            {
              year: "2020 - 2022",
              title: "Class XII - Higher Secondary",
              school: "Maharishi Vidya Mandir",
              description:
                "Completed my 12th grade with a focus on computer science, securing top marks in programming and computer science subjects.",
            },
            {
              year: "2022 - PRESENT",
              title: "BTECH - Computer Science",
              school: "Amrita Vishva Vidyapeetham",
              description:
                "Currently pursuing a Bachelor's degree in Computer Science, specializing in software engineering, artificial intelligence, and data structures.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="timeline-item mb-12 pl-16 relative group"
              ref={(el) => {
                // Ensure timelineItemsRef is populated correctly
                timelineItemsRef.current[index] = el;
              }}
            >
              <div className="absolute top-0 left-10 w-6 h-6 bg-gray-800 rounded-full shadow-lg group-hover:scale-125 transition-transform duration-300"></div>
              <div className="ml-8 bg-white rounded-lg shadow-md p-4 border border-gray-200">
                <div className="flex justify-between items-center w-full">
                  <span className="text-base font-medium italic text-black">
                    {item.title}
                  </span>
                  <span className="text-base font-medium text-black">
                    {item.year}
                  </span>
                </div>
                <hr className="my-2 border-gray-300" />
                <h4 className="text-md font-medium text-gray-600">
                  {item.school}
                </h4>
                <p className="text-black text-sm mt-2">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education_Section;
