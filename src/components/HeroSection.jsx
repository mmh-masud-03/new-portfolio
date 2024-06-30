"use client";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import {
  FaGithub,
  FaLinkedin,
  FaMedium,
  FaTelegram,
  FaWhatsapp,
} from "react-icons/fa";
import Link from "next/link";
import CountUp from "./CountUpComponent";
import MouseAnimation from "./MouseAnimation";

function HeroSection() {
  return (
    <section
      id="about"
      className="hero-dots-container min-h-[95vh] w-full mb-5"
    >
      <span
        className="bg-pulse absolute top-[120px] left-20 animate-pulsebg pulse-delay-1"
        style={{ background: "transparent", border: "5px solid #fff" }}
      ></span>
      <span
        className="bg-pulse absolute top-[200px] left-[65em] animate-pulsebg pulse-delay-3"
        style={{ background: "transparent", border: "5px solid #fff" }}
      ></span>
      <span className="bg-pulse absolute top-[500px] left-[58em] animate-pulsebg pulse-delay-2"></span>
      <span className="bg-pulse absolute top-[500px] left-[20px] animate-pulsebg pulse-delay-4"></span>
      <span
        className="bg-pulse absolute top-[500px] left-[40em] animate-pulsebg pulse-delay-1"
        style={{ background: "transparent", border: "5px solid #fff" }}
      ></span>
      <span className="bg-pulse absolute top-[100px] left-[50em] animate-pulsebg pulse-delay-5"></span>

      <svg
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        className="w-[300px] h-[350px] absolute -left-20 -top-40"
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
      <div className="flex flex-row">
        <div className="flex flex-col absolute top-20 gap-y-5 justify-between items-center w-1/2">
          <p className="text-white text-3xl">Hello, I am Masud,</p>
          <div>
            <TypeAnimation
              sequence={[
                "I am a ReactJS Developer",
                1000,
                "I am a NextJS Developer",
                1000,
                "I am a MERN Stack Developer",
                1000,
                "I am an IOT Developer",
                1000,
              ]}
              speed={260}
              deletionSpeed={180}
              preRenderFirstString={true}
              className="text-white text-3xl transform -translate-y-1/2 -translate-x-1/2 bg-transparent"
              repeat={Infinity}
              style={{
                textShadow:
                  "0 0 10px 0 #8093F1, 0 0 20px 0 #8093F1, 0 0 40px 0 #8093F1, 0 0 60px 0 #8093F1",
                WebkitBoxReflect:
                  "below 0px linear-gradient(transparent, #0005)",
                backgroundClip: "text",
              }}
            />
          </div>
          <p className="text-white text-lg pl-3">
            A full-stack developer specializing in Next.js, React.js, and modern
            web technologies. I excel in building high-performance,
            server-rendered React apps and dynamic UIs, with a focus on
            performance and SEO. With experience in Node.js, Express, and
            databases, I deliver complete full-stack solutions. I'm passionate
            about staying updated with industry trends.
          </p>
          <span className="w-2/3 h-[1.5px] bg-white"></span>
          <div className="flex flex-row items-center text-white gap-x-3">
            <Link
              href={"https://github.com/mmh-masud-03"}
              className="border rounded-full p-2 border-[#9999f4] hover:bg-[#9999f4] transition duration-300"
            >
              <FaGithub size={24} />
            </Link>
            <Link
              href={"https://www.linkedin.com/in/md-masud-hossen-9733611a1"}
              className="border rounded-full p-2 border-[#9999f4] hover:bg-[#9999f4] transition duration-300"
            >
              <FaLinkedin size={24} />
            </Link>
            <Link
              href={""}
              className="border rounded-full p-2 border-[#9999f4] hover:bg-[#9999f4] transition duration-300"
            >
              <FaMedium size={24} />
            </Link>
            <Link
              href={""}
              className="border rounded-full p-2 border-[#9999f4] hover:bg-[#9999f4] transition duration-300"
            >
              <FaTelegram size={24} />
            </Link>
            <Link
              href={""}
              className="border rounded-full p-2 border-[#9999f4] hover:bg-[#9999f4] transition duration-300"
            >
              <FaWhatsapp size={24} />
            </Link>
          </div>
          <div className="flex flex-row justify-center gap-x-6">
            <a
              href="/assets/Masud-Hossen-Resume.pdf"
              download={true}
              className="relative inline-block bg-yellow-300 text-black font-bold py-2 px-4 rounded hover:bg-yellow-400 transition duration-300 overflow-hidden"
            >
              Download Resume
              <span className="absolute block top-0 left-0 w-full h-[2px] bg-gradient-leftright animate-leftright"></span>
              <span className="absolute block -top-[100%] right-0 w-[2px] h-full bg-gradient-updown animate-updown animation-delay-1"></span>
              <span className="absolute block -right-[100%] bottom-0 h-[2px] w-full bg-gradient-rightleft animate-rightleft animation-delay-2"></span>
              <span className="absolute block left-0 -bottom[100%] w-[2px] h-full bg-gradient-downup animate-downup animation-delay-3"></span>
            </a>
            <Link
              href={"#contact"}
              className="relative inline-block bg-yellow-300 text-black font-bold py-2 px-4 rounded hover:bg-yellow-400 transition duration-300 overflow-hidden"
            >
              Contact Me
              <span className="absolute block top-0 left-0 w-full h-[2px] bg-gradient-leftright animate-leftright"></span>
              <span className="absolute block -top-[100%] right-0 w-[2px] h-full bg-gradient-updown animate-updown animation-delay-1"></span>
              <span className="absolute block -right-[100%] bottom-0 h-[2px] w-full bg-gradient-rightleft animate-rightleft animation-delay-2"></span>
              <span className="absolute block left-0 -bottom[100%] w-[2px] h-full bg-gradient-downup animate-downup animation-delay-3"></span>
            </Link>
          </div>
        </div>

        <div>
          <div className="animate-circlepulse w-[300px] h-[300px] border rounded-full border-fuchsia-800/50 absolute right-52 top-28">
            <Image
              src={"/assets/images/hero pic.jpg"}
              alt=""
              height={280}
              width={300}
              className="rounded-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
