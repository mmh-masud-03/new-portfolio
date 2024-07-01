import Image from "next/image";
import React from "react";
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <div className="h-[50vh] min-w-full relative text-white">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="absolute -bottom-32"
      >
        <path
          fill="#1c1a1a"
          fillOpacity="1"
          d="M0,128L60,133.3C120,139,240,149,360,138.7C480,128,600,96,720,69.3C840,43,960,21,1080,21.3C1200,21,1320,43,1380,53.3L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </svg>
      <div className="absolute -bottom-20 left-0 right-0">
        <div className="flex flex-col justify-center items-center space-y-6 text-center">
          <div className="flex space-x-6">
            <a
              href="https://www.linkedin.com/in/masudhossen"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={30} />
            </a>
            <a
              href="https://github.com/masudhossen"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub size={30} />
            </a>
            <a
              href="https://twitter.com/masudhossen"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <FaTwitter size={30} />
            </a>
            <a href="mailto:masudhossen@example.com" aria-label="Email">
              <FaEnvelope size={30} />
            </a>
          </div>
          <div>
            <p>© 2024 Masud Hossen</p>
          </div>
        </div>
      </div>
      <Image
        src={"/assets/images/sun.svg"}
        alt=""
        width={200}
        height={200}
        className="absolute top-0 left-0  animate-bulbpulse"
      />
    </div>
  );
}

export default Footer;
