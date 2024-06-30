"use client";
import { useState } from "react";

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

  return (
    <div
      id="experiences"
      className=" z-10 flex flex-col container mx-auto py-12 justify-between items-center min-h-[60vh] mb-5"
    >
      <h2 className="text-4xl font-bold text-white mb-8">Working Experience</h2>
      <div className="flex w-full">
        <div className="w-1/4 border-r-2 border-gray-200 px-4">
          {experiences.map((experience) => (
            <div
              onClick={() => setSelectedExperience(experience)}
              key={experience.id}
              className={`cursor-pointer p-4 rounded-lg mb-2 ${
                selectedExperience.id === experience.id
                  ? "bg-blue-500 text-white"
                  : "bg-blue-200 text-gray-800 hover:bg-gray-100"
              }`}
            >
              {experience.company}
            </div>
          ))}
        </div>
        <div className="w-[73%] pl-4 ">
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg h-[50vh]">
            <h3 className="text-2xl font-bold mb-2">
              {selectedExperience.title}
            </h3>
            <h4 className="text-xl font-semibold mb-1">
              {selectedExperience.company}
            </h4>
            <span className="text-gray-500 text-sm">
              {selectedExperience.duration}
            </span>
            <ul className="text-gray-700 mt-4 list-disc pl-5">
              {selectedExperience.description.map((desc, index) => (
                <li key={index} className="mb-2">
                  {desc}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experiences;
