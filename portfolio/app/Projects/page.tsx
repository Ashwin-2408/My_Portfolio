"use client";

import { motion } from "framer-motion";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Image from "next/image"; // Import Image component from next/image

const portfolioProjects = [
  {
    title: "Extracto Mate",
    client: "United Techno",
    year: "2024",
    description: [
      "A tool to extract features from documents",
      "Reduced processing time by 50%",
      "Built with Python, Flask, and Hugging Face Transformers",
    ],
    imageUrl: "/Images/extracto.png",
    liveSiteUrl: "https://github.com/Ashwin-2408/ExtractoMate",
  },
  {
    title: "Money Mate",
    client: "Personal Project",
    year: "2024",
    description: [
      "Personal finance management system",
      "Get realtime spending insights",
      "Categorized over 100 expense streams",
    ],
    imageUrl: "/Images/Moneymate.png",
    liveSiteUrl: "https://github.com/Ashwin-2408/moneymate-client",
  },
  {
    title: "LearnHub",
    client: "Personal Project",
    year: "2024",
    description: [
      "A real-time community for doubt-solving",
      "Instant help from peers",
      "Built with Websockets, React, and MongoDB",
    ],
    imageUrl: "/Images/under_word.png",
    liveSiteUrl: "https://github.com/Abishek-45/LearnHub",
  },
];

const Project = () => {
  return (
    <div className="bg-white min-h-screen text-black">
      <Header fixed={false} />

      <div className="border-b-2 border-gray-200" />
      <div className="container mx-auto px-4 py-12">
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center text-gray-600 font-semibold uppercase tracking-wide"
        >
          Check Out My Work
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl font-bold text-center text-black mb-4"
        >
          My Featured Projects
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="text-center text-gray-600 mb-8"
        >
          Here are some of the projects I’ve worked on, using the latest tech to
          create useful solutions and solve real problems.
        </motion.p>

        <motion.div
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: {
              opacity: 1,
              scale: 1,
              transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2,
              },
            },
          }}
        >
          {portfolioProjects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white border border-black p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              whileHover={{ scale: 1.05 }}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <div className="mb-4">
                {/* Replace img with Image component */}
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  width={400} // Provide the width and height for image
                  height={160} // Provide the height to maintain aspect ratio
                  className="object-cover rounded-lg border border-black"
                />
              </div>

              <div>
                <p className="text-gray-600 text-sm">{`${project.client} • ${project.year}`}</p>
                <h3 className="text-2xl font-bold text-black mb-4">
                  {project.title}
                </h3>
                <ul className="mb-4 text-gray-800">
                  {project.description.map((point, i) => (
                    <li key={i} className="flex items-center mb-2">
                      <span className="h-2 w-2 bg-black rounded-full mr-2"></span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href={project.liveSiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 px-6 py-2 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition"
              >
                GitHub Link &rarr;
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default Project;
