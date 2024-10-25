import { useState, useEffect, useRef } from "react";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
} from "react-icons/fa"; // FaJsSquare for Vanilla JavaScript
import { SiNextdotjs, SiTailwindcss, SiFlask } from "react-icons/si";

const techInfo = {
  react: {
    name: "React",
    description: "React is a JavaScript library for building user interfaces.",
  },
  express: {
    name: "Express (Node.js)",
    description:
      "Express is a web framework for Node.js, designed to build web applications and APIs.",
  },
  nextjs: {
    name: "Next.js",
    description:
      "Next.js is a React framework for server-side rendering and static websites.",
  },
  tailwindcss: {
    name: "Tailwind CSS",
    description:
      "Tailwind CSS is a utility-first CSS framework for building custom designs quickly.",
  },
  html5: {
    name: "HTML5",
    description:
      "HTML5 is the standard language for structuring and presenting content on the web.",
  },
  css3: {
    name: "CSS3",
    description:
      "CSS3 is the latest version of the CSS specification, used to style web content.",
  },
  flask: {
    name: "Flask",
    description:
      "Flask is a lightweight web application framework written in Python.",
  },
  javascript: {
    name: "Vanilla JavaScript",
    description:
      "Vanilla JavaScript is plain JavaScript without any libraries or frameworks.",
  },
  nodejs: {
    name: "Node.js",
    description:
      "Node.js is a JavaScript runtime built on Chrome's V8 engine, enabling server-side scripting.",
  },
};

const FloatingCard = () => {
  const [selectedTech, setSelectedTech] = useState(null);
  const cardRef = useRef(null);

  const handleIconClick = (tech) => {
    setSelectedTech(techInfo[tech]);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cardRef.current && !cardRef.current.contains(event.target)) {
        setSelectedTech(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [cardRef]);

  return (
    <div
      ref={cardRef}
      className="bangers-font tracking-wider bg-gray-100 shadow-2xl rounded-lg p-8 w-full sm:w-96 transition-transform duration-300 hover:scale-105 cursor-default"
    >
      <div className="mb-6">
        <h3 className="text-2xl font-bold mb-3">WEB STACK</h3>
        <p className="text-gray-700">
          These are the technologies that I personally utilize to create
          responsive websites
        </p>
      </div>

      <div className="grid grid-cols-3 sm:grid-cols-4 gap-6">
        <div className="group">
          <FaReact
            className="text-blue-500 text-4xl group-hover:text-blue-700 cursor-pointer transition-transform duration-200"
            title="React"
            onClick={() => handleIconClick("react")}
          />
        </div>
        <div className="group">
          <FaNodeJs
            className="text-green-500 text-4xl group-hover:text-green-700 cursor-pointer transition-transform duration-200"
            title="Node.js"
            onClick={() => handleIconClick("nodejs")}
          />
        </div>
        <div className="group">
          <SiNextdotjs
            className="text-gray-900 text-4xl group-hover:text-gray-700 cursor-pointer transition-transform duration-200"
            title="Next.js"
            onClick={() => handleIconClick("nextjs")}
          />
        </div>
        <div className="group">
          <SiTailwindcss
            className="text-blue-400 text-4xl group-hover:text-blue-500 cursor-pointer transition-transform duration-200"
            title="Tailwind CSS"
            onClick={() => handleIconClick("tailwindcss")}
          />
        </div>
        <div className="group">
          <FaHtml5
            className="text-orange-500 text-4xl group-hover:text-orange-600 cursor-pointer transition-transform duration-200"
            title="HTML5"
            onClick={() => handleIconClick("html5")}
          />
        </div>
        <div className="group">
          <FaCss3Alt
            className="text-blue-600 text-4xl group-hover:text-blue-700 cursor-pointer transition-transform duration-200"
            title="CSS3"
            onClick={() => handleIconClick("css3")}
          />
        </div>
        <div className="group">
          <SiFlask
            className="text-gray-600 text-4xl group-hover:text-gray-800 cursor-pointer transition-transform duration-200"
            title="Flask"
            onClick={() => handleIconClick("flask")}
          />
        </div>
        <div className="group">
          <FaJsSquare
            className="text-yellow-500 text-4xl group-hover:text-yellow-600 cursor-pointer transition-transform duration-200"
            title="Vanilla JavaScript"
            onClick={() => handleIconClick("javascript")}
          />
        </div>
      </div>

      {selectedTech && (
        <div className="mt-6 p-4 bg-gray-200 rounded-lg shadow-inner">
          <h4 className="text-xl font-bold">{selectedTech.name}</h4>
          <p className="text-gray-700">{selectedTech.description}</p>
        </div>
      )}
    </div>
  );
};

export default FloatingCard;
