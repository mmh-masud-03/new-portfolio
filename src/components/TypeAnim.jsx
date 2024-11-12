"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";

function TypeAnim() {
  return (
    <div className="bg-black mb-5 flex justify-center items-center font-montserrat font-semibold">
      <TypeAnimation
        sequence={[
          "I am a NextJS Developer",
          1000,
          "I am a NestJS Developer",
          1000,
          "I am a Flutter Developer",
          1000,
          "I am an IOT Developer",
          1000,
        ]}
        speed={260}
        deletionSpeed={180}
        preRenderFirstString={true}
        // className="font-semibold font-montserrat text-white/85 w-full text-md lg:text-3xl transform -translate-y-1/2 -translate-x-1/2 bg-transparent"
        className="relative text-md lg:text-2xl tracking-wider text-white/90 w-full text-center outline-none"
        repeat={Infinity}
        style={{
          textShadow:
            "0 0 10px 0 #8093F1, 0 0 20px 0 #8093F1, 0 0 40px 0 #8093F1, 0 0 60px 0 #8093F1",
          WebkitBoxReflect: "below 0px linear-gradient(transparent, #0005)",
        }}
      />
    </div>
  );
}

export default TypeAnim;
