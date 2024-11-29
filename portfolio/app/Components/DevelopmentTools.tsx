import { useState, useEffect, useRef } from "react";
import { FaGit, FaGithub } from "react-icons/fa";
import {
  SiVisualstudio,
  SiIntellijidea,
  SiPycharm,
  SiJupyter,
} from "react-icons/si";

// Define the type of each tool's info
const toolInfo = {
  git: {
    name: "Git",
    description:
      "Git is a distributed version control system used to track changes in source code during software development.",
  },
  github: {
    name: "GitHub",
    description:
      "GitHub is a web-based platform that uses Git for version control and is widely used for hosting and collaborating on code.",
  },
  vscode: {
    name: "Visual Studio Code",
    description:
      "VSCode is a popular source code editor that provides comprehensive support for development with numerous extensions.",
  },
  intellij: {
    name: "IntelliJ IDEA",
    description:
      "IntelliJ IDEA is an IDE for Java and other languages, providing a powerful environment for software development.",
  },
  pycharm: {
    name: "PyCharm",
    description:
      "PyCharm is an IDE specifically designed for Python programming, offering powerful features for developers.",
  },
  jupyter: {
    name: "Jupyter Notebook",
    description:
      "Jupyter Notebook is an open-source web application that allows you to create and share documents with live code, equations, and visualizations.",
  },
};

type ToolInfo = (typeof toolInfo)[keyof typeof toolInfo]; // Get the type for the toolInfo values

const DevelopmentToolsCard = () => {
  const [selectedTool, setSelectedTool] = useState<ToolInfo | null>(null); // Use ToolInfo type
  const cardRef = useRef<HTMLDivElement>(null); // Explicitly type the ref to HTMLDivElement

  // Type tool as keyof typeof toolInfo (which restricts it to the keys of toolInfo)
  const handleIconClick = (tool: keyof typeof toolInfo) => {
    setSelectedTool(toolInfo[tool]);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (cardRef.current && !cardRef.current.contains(event.target as Node)) {
        // Cast event.target to Node
        setSelectedTool(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className="bangers-font tracking-wider
        bg-gray-100 shadow-2xl rounded-lg p-8 w-96 transition-transform duration-300 hover:scale-105 cursor-default"
    >
      <div className="mb-6">
        <h3 className="text-2xl font-bold mb-3">Development Tools</h3>
        <p className="text-gray-700">List of development tools that I use</p>
      </div>

      <div className="grid grid-cols-3 gap-5">
        <div className="flex justify-center items-center h-full">
          <FaGit
            className="text-orange-500 text-4xl hover:text-orange-700 transition-transform duration-200 cursor-pointer"
            title="Git"
            onClick={() => handleIconClick("git")}
          />
        </div>
        <div className="flex justify-center items-center h-full">
          <FaGithub
            className="text-black text-4xl hover:text-gray-800 transition-transform duration-200 cursor-pointer"
            title="GitHub"
            onClick={() => handleIconClick("github")}
          />
        </div>
        <div className="flex justify-center items-center h-full">
          <SiVisualstudio
            className="text-blue-600 text-4xl hover:text-blue-700 transition-transform duration-200 cursor-pointer"
            title="Visual Studio Code"
            onClick={() => handleIconClick("vscode")}
          />
        </div>
        <div className="flex justify-center items-center h-full">
          <SiIntellijidea
            className="text-blue-800 text-4xl hover:text-blue-900 transition-transform duration-200 cursor-pointer"
            title="IntelliJ IDEA"
            onClick={() => handleIconClick("intellij")}
          />
        </div>
        <div className="flex justify-center items-center h-full">
          <SiPycharm
            className="text-red-500 text-4xl hover:text-red-600 transition-transform duration-200 cursor-pointer"
            title="PyCharm"
            onClick={() => handleIconClick("pycharm")}
          />
        </div>
        <div className="flex justify-center items-center h-full">
          <SiJupyter
            className="text-yellow-600 text-4xl hover:text-yellow-700 transition-transform duration-200 cursor-pointer"
            title="Jupyter Notebook"
            onClick={() => handleIconClick("jupyter")}
          />
        </div>
      </div>

      {selectedTool && (
        <div className="mt-6 p-4 bg-gray-200 rounded-lg shadow-inner">
          <h4 className="text-xl font-bold">{selectedTool.name}</h4>
          <p className="text-gray-700">{selectedTool.description}</p>
        </div>
      )}
    </div>
  );
};

export default DevelopmentToolsCard;
