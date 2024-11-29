import { useState, useEffect, useRef } from "react";
import { FaPython, FaJava } from "react-icons/fa";
import { SiC, SiCplusplus, SiLinux } from "react-icons/si";

const langInfo = {
  c: {
    name: "C",
    description:
      "C is a high-level and general-purpose programming language that is ideal for system programming.",
  },
  cpp: {
    name: "C++",
    description:
      "C++ is an extension of C that includes object-oriented features and is widely used for software development.",
  },
  python: {
    name: "Python",
    description:
      "Python is a versatile and high-level programming language known for its readability and broad range of applications.",
  },
  java: {
    name: "Java",
    description:
      "Java is a widely-used object-oriented programming language designed for portability across platforms.",
  },
  linux: {
    name: "Linux",
    description:
      "Linux is an open-source operating system modelled on UNIX, widely used in servers and embedded systems.",
  },
};

type LangKey = keyof typeof langInfo;

// Define the type of the selected language state
type SelectedLang = {
  name: string;
  description: string;
} | null;

const ProgrammingLanguagesCard = () => {
  const [selectedLang, setSelectedLang] = useState<SelectedLang>(null);

  // Explicitly type cardRef with the HTMLDivElement type
  const cardRef = useRef<HTMLDivElement | null>(null);

  // Explicitly type the 'lang' parameter as 'LangKey'
  const handleIconClick = (lang: LangKey) => {
    setSelectedLang(langInfo[lang]);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Check if the target is outside the cardRef
      if (cardRef.current && !cardRef.current.contains(event.target as Node)) {
        setSelectedLang(null);
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
      className="bangers-font tracking-wider bg-gray-100 shadow-2xl rounded-lg p-8 w-96 transition-transform duration-300 hover:scale-105 cursor-default"
    >
      <div className="mb-6">
        <h3 className="text-2xl font-bold mb-3">Programming Languages</h3>
        <p className="text-gray-700">
          I have experience with several programming languages that enable me to
          build diverse applications and solve complex problems. My primary
          languages include
        </p>
      </div>

      <div className="grid grid-cols-3 gap-6">
        <div className="group">
          <SiC
            className="text-green-500 text-4xl group-hover:text-green-700 cursor-pointer transition-transform duration-200"
            title="C"
            onClick={() => handleIconClick("c")}
          />
        </div>
        <div className="group">
          <SiCplusplus
            className="text-blue-500 text-4xl group-hover:text-blue-700 cursor-pointer transition-transform duration-200"
            title="C++"
            onClick={() => handleIconClick("cpp")}
          />
        </div>
        <div className="group">
          <FaPython
            className="text-yellow-500 text-4xl group-hover:text-yellow-600 cursor-pointer transition-transform duration-200"
            title="Python"
            onClick={() => handleIconClick("python")}
          />
        </div>
        <div className="group">
          <FaJava
            className="text-red-500 text-4xl group-hover:text-red-700 cursor-pointer transition-transform duration-200"
            title="Java"
            onClick={() => handleIconClick("java")}
          />
        </div>
        <div className="group">
          <SiLinux
            className="text-black text-4xl group-hover:text-gray-700 cursor-pointer transition-transform duration-200"
            title="Linux"
            onClick={() => handleIconClick("linux")}
          />
        </div>
      </div>

      {selectedLang && (
        <div className="mt-6 p-4 bg-gray-200 rounded-lg shadow-inner">
          <h4 className="text-xl font-bold">{selectedLang.name}</h4>
          <p className="text-gray-700">{selectedLang.description}</p>
        </div>
      )}
    </div>
  );
};

export default ProgrammingLanguagesCard;
