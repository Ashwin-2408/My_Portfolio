"use client";
import React, { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Education_Section from "./Education_Section";
import Experience_Section from "./Experience_Section";

function Education_Timeline() {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const checkScreenSize = () => {
      const desktop = window.innerWidth >= 1024;
      setIsDesktop(desktop);
    };

    
    checkScreenSize();

    
    window.addEventListener("resize", checkScreenSize);

    
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  useEffect(() => {
  
    if (isDesktop && sectionRef.current && triggerRef.current) {
      const sections = gsap.utils.toArray(".panel");

      const scrollTween = gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: triggerRef.current,
          pin: true,
          scrub: 1,
          snap: 1 / (sections.length - 1),
          end: () => "+=" + triggerRef.current.offsetWidth,
          invalidateOnRefresh: true,
          markers: false,
        },
      });

      
      return () => {
        scrollTween.scrollTrigger?.kill();
      };
    }
  }, [isDesktop]);

  return (
    <div ref={triggerRef} className="w-full overflow-hidden relative">
      {isDesktop ? (
        
        <div ref={sectionRef} className="flex w-[200vw] h-screen">
          <div className="panel w-[100vw] h-full">
            <Education_Section />
          </div>
          <div className="panel w-[100vw] h-full">
            <Experience_Section />
          </div>
        </div>
      ) : (
       
        <div className="flex flex-col w-full">
          <div className="w-full">
            <Education_Section />
          </div>
          <div className="w-full">
            <Experience_Section />
          </div>
        </div>
      )}
    </div>
  );
}

export default Education_Timeline;
