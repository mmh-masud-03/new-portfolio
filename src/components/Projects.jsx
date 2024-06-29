import React from "react";

function Projects() {
  return (
    <div className="min-h-[80vh] text-white project-dots-container z-50 ">
      <p className="text-white font-bold text-3xl text-center w-full bg-slate-600/50 py-3">
        Projects
      </p>
      <div className="flex flex-row justify-between text-white mt-3">
        <div className="w-1/6">Software projects</div>
        <div className="w-full bg-slate-100/50 h-[80vh]">Project cards</div>
      </div>
    </div>
  );
}

export default Projects;
