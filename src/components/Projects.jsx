"use client";
import React from "react";
import { motion, useScroll } from "framer-motion";
import ProjectCards from "./ProjectCards";
import RoboticsProjects from "./RoboticsProjects";

function ScrollIndicator() {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-blue-500 origin-[0%] z-50"
      style={{ scaleX: scrollYProgress }}
    />
  );
}

function Projects() {
  return (
    <section
      id="projects"
      className="relative flex flex-col min-h-[80vh] text-white project-section-bg z-40 pb-10"
    >
      <ScrollIndicator />
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-10"></div>
        <div className="absolute inset-0 bg-[url('random bg.png')] opacity-5"></div>
      </div>

      <p className="font-montserrat text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-6 pt-24 text-center">
        Projects
      </p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col md:flex-row justify-between text-white z-10"
      >
        <div className=" font-montserrat w-full md:w-1/5 h-full my-auto text-2xl font-semibold pl-6 py-2 rounded-lg md:rounded-r-lg shadow-lg transform md:-translate-x-4 text-yellow-300">
          Software projects
        </div>
        <div className="w-full md:w-[80%] bg-slate-100/10 mt-4 md:mt-0 mb-12">
          <ProjectCards />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex flex-col md:flex-row justify-between text-white mt-3 z-10"
      >
        <div className="font-montserrat w-full md:w-1/5 h-full my-auto text-2xl font-semibold pl-8 py-2  rounded-lg md:rounded-r-lg shadow-lg transform md:-translate-x-4 text-yellow-300">
          IoT and Embedded projects
        </div>
        <div className="w-full md:w-[80%] bg-slate-100/10 mt-4 md:mt-0">
          <RoboticsProjects />
        </div>
      </motion.div>
    </section>
  );
}

export default Projects;
