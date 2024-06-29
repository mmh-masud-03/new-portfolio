import React from "react";
import ProjectCards from "./ProjectCards";
import RoboticsProjects from "./RoboticsProjects";

function Projects() {
  return (
    <div className="relative flex flex-col min-h-[80vh] text-white project-dots-container z-50 mb-20">
      <p className="text-white font-bold text-3xl text-center w-full bg-slate-600/20 py-3">
        Projects
      </p>
      <div className="flex flex-row justify-between text-white mt-3">
        <div className="w-1/5 h-full my-auto text-2xl font-semibold px-3">
          Software projects
        </div>
        <div className="w-[80%] bg-slate-100/10 ">
          {" "}
          <ProjectCards />
        </div>
      </div>
      <div className="flex flex-row justify-between text-white mt-3">
        <div className="w-1/5 h-full my-auto text-2xl font-semibold px-3">
          IoT and Embeded projects
        </div>
        <div className="w-[80%] bg-slate-100/50 ">
          {" "}
          <RoboticsProjects />{" "}
        </div>
      </div>
    </div>
  );
}

export default Projects;
