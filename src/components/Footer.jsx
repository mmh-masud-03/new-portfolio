import React from "react";

function Footer() {
  return (
    <div className="h-[40vh] min-w-full relative">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#0099ff"
          fill-opacity="1"
          d="M0,128L60,133.3C120,139,240,149,360,138.7C480,128,600,96,720,69.3C840,43,960,21,1080,21.3C1200,21,1320,43,1380,53.3L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </svg>
      <div className="absolute -bottom-10 left-0 right-0 ">
        <div className="flex justify-center items-center  bg-[#0099ff] text-white">
          <p>© 2021 Masud Hossen</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
