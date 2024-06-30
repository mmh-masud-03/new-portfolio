import React from "react";
import ToolIcon from "./ToolIcon";
import Image from "next/image";

function Skills() {
  return (
    <div className="min-h-[60vh]">
      <p className="text-white text-center">Skills</p>
      <div className="mb-4">
        <div className="flex flex-col bg-slate-200">
          <p>Programing Languages</p>
          <div className="flex flex-row flex-wrap">
            <Image
              src="/assets/images/tools/javascript.svg"
              alt="JavaScript"
              width={70}
              height={70}
            />
            <Image
              src="/assets/images/tools/typescript.svg"
              alt="Typescript"
              width={70}
              height={70}
            />
            <Image
              src="/assets/images/tools/python.svg"
              alt="Python"
              width={70}
              height={70}
            />
            <Image
              src="/assets/images/tools/c-plus-plus.svg"
              alt="C"
              width={80}
              height={70}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-row w-full items-center bg-gradient-to-bl from-purple-50 to-purple-200 px-6 ">
        <ToolIcon name="React.js" src="/assets/images/tools/react.svg" />
        <ToolIcon name="Next.js" src="/assets/images/tools/nextjs.svg" />
        <ToolIcon name="Tailwind CSS" src="/assets/images/tools/tailwind.svg" />
        <ToolIcon name="Node.js" src="/assets/images/tools/node.svg" />
        <ToolIcon name="Arduino" src="/assets/images/tools/arduino.svg" />
        <ToolIcon name="VS Code" src="/assets/images/tools/vs.svg" />
        <ToolIcon name="Github" src="/assets/images/tools/github.svg" />
        <ToolIcon name="Redux" src="/assets/images/tools/redux.svg" />
        <ToolIcon name="MongoDB" src="/assets/images/tools/mongodb.svg" />
        <ToolIcon name="Express" src="/assets/images/tools/express.svg" />
      </div>
    </div>
  );
}

export default Skills;
