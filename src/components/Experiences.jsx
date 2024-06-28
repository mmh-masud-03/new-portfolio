"use client";
import { useState } from "react";
export const experiences = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    company: "Tech Company A",
    duration: "Jan 2020 - Present",
    description:
      "Developed and maintained the company’s web applications using React and Next.js. Led a team of junior developers and collaborated with the design team to improve UI/UX.",
  },
  {
    id: 2,
    title: "Full Stack Developer",
    company: "Tech Company B",
    duration: "Jun 2018 - Dec 2019",
    description:
      "Worked on both frontend and backend development using Node.js, Express, and React. Implemented RESTful APIs and optimized application performance.",
  },
];

function Experiences() {
  const [selectedExperience, setSelectedExperience] = useState(experiences[0]);

  return (
    <div className="container mx-auto py-12 flex bg-gray-800">
      <div className="w-1/4 border-r border-gray-200 pr-4">
        <h2 className="text-4xl font-bold mb-8">Working Experience</h2>
        <ul className="space-y-4">
          {experiences.map((experience) => (
            <li
              key={experience.id}
              className={`cursor-pointer p-4 rounded-lg ${
                selectedExperience.id === experience.id
                  ? "bg-blue-500"
                  : "bg-blue-200 hover:bg-gray-100"
              }`}
              onClick={() => setSelectedExperience(experience)}
            >
              {experience.company}
            </li>
          ))}
        </ul>
      </div>
      <div className="w-[73%] pl-4">
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold mb-2">
            {selectedExperience.title}
          </h3>
          <h4 className="text-xl font-semibold mb-1">
            {selectedExperience.company}
          </h4>
          <span className="text-gray-500 text-sm">
            {selectedExperience.duration}
          </span>
          <p className="text-gray-700 mt-4">{selectedExperience.description}</p>
        </div>
      </div>
    </div>
  );
}

export default Experiences;
