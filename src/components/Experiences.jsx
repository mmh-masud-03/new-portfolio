"use client";
import { useState, useEffect, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useInView,
  useAnimation,
} from "framer-motion";

export const experiences = [
  {
    id: 1,
    title: "Frontend Developer Intern",
    company: "Kutir IT",
    duration: "January 2024 - April 2024",
    description: [
      "Gained hands-on experience with Next.js as a full-stack framework and Tailwind CSS, enhancing web development skills.",
      "Contributed to a multi-vendor POS system by designing reusable components, integrating API endpoints, and implementing features and functionalities. Optimized website load time by 25%, improving user experience.",
    ],
  },
  {
    id: 2,
    title: "Full Stack Developer Intern",
    company: "A.I.T GreeNEX",
    duration: "November 2022 - January 2023",
    description: [
      "Designed and developed a blog application frontend using React.js and cloned a resort website frontend using HTML, CSS, and JavaScript.",
      "Developed API endpoints for the blog application using FastAPI framework, ensuring proper documentation with Swagger UI. Contributed to a codebase with over 1000 lines of code, demonstrating proficiency in working with large-scale projects",
    ],
  },
];
function Experiences() {
  const [selectedExperience, setSelectedExperience] = useState(experiences[0]);
  const [activeSkills, setActiveSkills] = useState([]);
  const [isTimelineOpen, setIsTimelineOpen] = useState(false);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  useEffect(() => {
    const skillsUsed =
      selectedExperience.description
        .join(" ")
        .match(
          /\b(React|Next\.js|Tailwind CSS|JavaScript|HTML|CSS|FastAPI)\b/g
        ) || [];
    setActiveSkills([...new Set(skillsUsed)]);
  }, [selectedExperience]);

  const allSkills = [
    "React",
    "Next.js",
    "Tailwind CSS",
    "JavaScript",
    "HTML",
    "CSS",
    "FastAPI",
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  const timelineVariants = {
    closed: { height: 0, opacity: 0 },
    open: { height: "auto", opacity: 1 },
  };

  return (
    <section
      ref={sectionRef}
      id="experiences"
      className=" py-24 relative overflow-hidden"
    >
      <motion.div
        initial="hidden"
        animate={controls}
        variants={containerVariants}
        className="container mx-auto px-4 relative z-10"
      >
        <motion.h2
          variants={itemVariants}
          className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-16 text-center"
        >
          Working Experiences
        </motion.h2>
        <div className="flex flex-col lg:flex-row gap-12">
          <motion.div variants={itemVariants} className="lg:w-1/3 space-y-6">
            {experiences.map((experience) => (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedExperience(experience)}
                key={experience.id}
                className={`w-full text-left p-6 rounded-xl transition-all duration-300 ${
                  selectedExperience.id === experience.id
                    ? "bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
              >
                <h3 className="font-bold text-xl mb-1">{experience.company}</h3>
                <p className="text-sm opacity-80">{experience.duration}</p>
              </motion.button>
            ))}
          </motion.div>
          <motion.div variants={itemVariants} className="lg:w-2/3">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedExperience.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-white p-8 rounded-2xl shadow-2xl"
              >
                <h3 className="text-3xl font-bold mb-3 text-gray-800">
                  {selectedExperience.title}
                </h3>
                <h4 className="text-xl font-semibold mb-2 text-indigo-600">
                  {selectedExperience.company}
                </h4>
                <span className="text-gray-600 text-sm bg-gray-200 px-3 py-1 rounded-full">
                  {selectedExperience.duration}
                </span>
                <ul className="mt-8 space-y-6">
                  {selectedExperience.description.map((desc, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.2 }}
                      className="flex items-start"
                    >
                      <svg
                        className="w-6 h-6 text-indigo-600 mr-3 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                      </svg>
                      <span className="text-gray-700 leading-relaxed">
                        {desc}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
        <motion.div variants={itemVariants} className="mt-16">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            Skills Utilized
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {allSkills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                className="relative"
              >
                <div
                  className={`px-4 py-2 rounded-full font-semibold cursor-pointer transition-colors duration-300 ${
                    activeSkills.includes(skill)
                      ? "bg-indigo-600 text-white"
                      : "bg-gray-200 text-gray-600"
                  }`}
                >
                  {skill}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        <motion.div variants={itemVariants} className="mt-16">
          <button
            onClick={() => setIsTimelineOpen(!isTimelineOpen)}
            className="bg-white text-indigo-600 px-6 py-3 rounded-full font-bold hover:bg-indigo-100 transition-colors duration-300"
          >
            {isTimelineOpen ? "Hide" : "Show"} Career Timeline
          </button>
          <AnimatePresence>
            {isTimelineOpen && (
              <motion.div
                initial="closed"
                animate="open"
                exit="closed"
                variants={timelineVariants}
                className="mt-8 bg-white p-8 rounded-2xl shadow-xl"
              >
                <div className="relative">
                  {experiences.map((exp, index) => (
                    <div key={exp.id} className="mb-8 flex">
                      <div className="flex flex-col items-center mr-4">
                        <div className="w-4 h-4 bg-indigo-600 rounded-full"></div>
                        {index !== experiences.length - 1 && (
                          <div className="w-1 h-full bg-indigo-200"></div>
                        )}
                      </div>
                      <div>
                        <h4 className="text-xl font-bold">{exp.company}</h4>
                        <p className="text-gray-600">{exp.duration}</p>
                        <p className="text-gray-800 mt-2">{exp.title}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        className="absolute animate-blob left-10 bottom-[30%] w-28 h-28 z-0 opacity-15"
      >
        <path
          d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
          stroke="black"
          stroke-width="3"
          fill="white"
        />
      </svg>
    </section>
  );
}

export default Experiences;
