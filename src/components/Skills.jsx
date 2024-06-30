import React from "react";
import Image from "next/image";

function Skills() {
  const skillsData = [
    {
      category: "Programming Languages",
      skills: [
        {
          name: "JavaScript",
          src: "/assets/images/tools/javascript.svg",
          level: 90,
        },
        {
          name: "Typescript",
          src: "/assets/images/tools/typescript.svg",
          level: 85,
        },
        { name: "Python", src: "/assets/images/tools/python.svg", level: 60 },
        { name: "C++", src: "/assets/images/tools/c-plus-plus.svg", level: 70 },
      ],
    },
    {
      category: "Frontend Technologies",
      skills: [
        {
          name: "Next.js",
          src: "/assets/images/tools/nextjs.png",
          level: 96,
        },
        { name: "React", src: "/assets/images/tools/react.svg", level: 90 },
        {
          name: "Bootstrap",
          src: "/assets/images/tools/bootstrap.svg",
          level: 70,
        },
        {
          name: "Tailwind CSS",
          src: "/assets/images/tools/tailwind.svg",
          level: 87,
        },
        { name: "HTML", src: "/assets/images/tools/html.svg", level: 95 },
        { name: "CSS", src: "/assets/images/tools/css.svg", level: 85 },
        { name: "Redux", src: "/assets/images/tools/redux.svg", level: 75 },
      ],
    },
    {
      category: "Backend Technologies",
      skills: [
        { name: "Express", src: "/assets/images/tools/express.svg", level: 70 },
        { name: "Node", src: "/assets/images/tools/node.svg", level: 60 },
        {
          name: "Next.js",
          src: "/assets/images/tools/nextjs-white.svg",
          level: 95,
        },
        { name: "FastAPI", src: "/assets/images/tools/fastapi.svg", level: 65 },
        { name: "MongoDB", src: "/assets/images/tools/mongodb.svg", level: 75 },
      ],
    },
    {
      category: "Tools",
      skills: [
        { name: "GitHub", src: "/assets/images/tools/github.svg", level: 90 },
        { name: "Postman", src: "/assets/images/tools/postman.svg", level: 80 },
        { name: "VS Code", src: "/assets/images/tools/vs.svg", level: 90 },
        { name: "Arduino", src: "/assets/images/tools/arduino.svg", level: 97 },
      ],
    },
    {
      category: "Others",
      skills: [
        { name: "Figma", src: "/assets/images/tools/figma.svg", level: 75 },
        { name: "Canva", src: "/assets/images/tools/canva.svg", level: 70 },
        { name: "ESP", src: "/assets/images/tools/esp.svg", level: 95 },
        {
          name: "TinkerCAD",
          src: "/assets/images/tools/tinkercad.svg",
          level: 95,
        },
        {
          name: "React Native",
          src: "/assets/images/tools/react-native.svg",
          level: 75,
        },
        {
          name: "Vercel",
          src: "/assets/images/tools/vercel.svg",
          level: 85,
        },
      ],
    },
  ];

  return (
    <div className="min-h-[60vh] px-4 py-12 bg-gray-900 text-white">
      <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {skillsData.map((category) => (
          <div
            key={category.category}
            className="bg-gray-800 rounded-lg p-6 w-[30%] min-w-[280px]"
          >
            <h3 className="text-xl font-semibold mb-4 border-b text-center pb-1">
              {category.category}
            </h3>
            <div className="flex flex-wrap justify-center gap-6 mt-1">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="skill-container flex flex-col items-center relative group w-20 h-24 overflow-hidden rounded-lg"
                >
                  <Image
                    src={skill.src}
                    alt={skill.name}
                    width={65}
                    height={65}
                    className="mb-2 z-10 relative"
                  />
                  <p className="text-sm z-10 relative">{skill.name}</p>
                  <div
                    className="skill-fill absolute bottom-0 left-0 right-0 bg-blue-500 opacity-75 transition-all duration-500 ease-out"
                    style={{
                      height: `${skill.level}%`,
                      transform: "translateY(100%)",
                    }}
                  >
                    <div className="bubble-animation" />
                  </div>
                  <span className="skill-level absolute inset-0 flex items-center justify-center text-white font-bold opacity-0 group-hover:opacity-100 transition-opacity z-20"></span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
