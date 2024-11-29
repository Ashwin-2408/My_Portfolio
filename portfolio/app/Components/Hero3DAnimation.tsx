import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const AboutMe = () => {
  const nameRef = useRef(null);
  const taglineRef = useRef(null);
  const descriptionRef = useRef(null);

  useEffect(() => {
    
    gsap.fromTo(
      nameRef.current,
      { opacity: 0, y: -30 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
    );
    gsap.fromTo(
      taglineRef.current,
      { opacity: 0, x: -30 },
      { opacity: 1, x: 0, duration: 1, delay: 0.5, ease: "power2.out" }
    );
    gsap.fromTo(
      descriptionRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, delay: 1.5, ease: "power2.out" }
    );
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white text-black rounded-lg shadow-lg mt-8">
      <div className="text-center space-y-8">
       
        <h2
          ref={nameRef}
          className="text-4xl font-extrabold text-gray-900 uppercase tracking-wide"
        >
          Upcoming CSE Graduate
        </h2>

        
        <p ref={taglineRef} className="text-xl font-medium text-gray-600">
          A student at Amrita Vishwa Vidyapeetham
        </p>

        
        <p
          ref={descriptionRef}
          className="mt-8 text-lg text-gray-700 max-w-xl mx-auto leading-relaxed"
        >
          A dedicated Computer Science Engineering undergraduate with a passion
          for crafting modern, scalable applications and competitive programming.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
