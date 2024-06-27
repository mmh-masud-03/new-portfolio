"use client";
import { TypeAnimation } from "react-type-animation";
function HeroSection() {
  return (
    <div>
      <svg
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        className="w-[300px] h-[350px] absolute -left-20 -top-40 "
      >
        <path
          fill="#8093F1"
          d="M36.6,-39.4C47.6,-25.6,56.9,-12.8,54.4,-2.5C51.9,7.8,37.6,15.6,26.6,23.1C15.6,30.7,7.8,38.1,-6.6,44.8C-21,51.4,-42.1,57.3,-53,49.7C-64,42.1,-64.8,21,-64.7,0.1C-64.6,-20.9,-63.7,-41.8,-52.8,-55.6C-41.8,-69.4,-20.9,-76.1,-4.1,-72C12.8,-67.9,25.6,-53.1,36.6,-39.4Z"
          transform="translate(100 100)"
        />
      </svg>
      <svg
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        className="w-[300px] h-[350px] absolute -right-20 top-10"
      >
        <path
          fill="#8093F1"
          d="M63.1,-49.3C76.4,-33.6,78.2,-7.7,71.6,14.4C65,36.6,50.1,54.9,32.6,60.5C15.1,66.2,-5,59.3,-20.7,49.3C-36.3,39.3,-47.5,26.4,-49.1,13.1C-50.6,-0.2,-42.6,-13.9,-32.8,-28.8C-23,-43.7,-11.5,-59.9,6.7,-65.3C24.9,-70.6,49.7,-65.1,63.1,-49.3Z"
          transform="translate(100 100)"
        />
      </svg>
      <TypeAnimation
        sequence={[
          "I am a ReactJS Developer",
          1000,
          "I am a NextJS Developer",
          1000,
          "I am a TailwindCSS Developer",
          1000,
          "I am a NodeJS Developer",
          1000,
          "I am a MongoDB Developer",
          1000,
        ]}
        speed={260}
        deletionSpeed={180}
        preRenderFirstString={true}
        className="text-white text-3xl absolute top-1/2 left-60 transform -translate-y-1/2 -translate-x-1/2 "
        repeat={Infinity}
      />
    </div>
  );
}

export default HeroSection;
