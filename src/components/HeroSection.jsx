"use client";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin, FaMedium, FaTwitter } from "react-icons/fa";
import Link from "next/link";
import CountUp from "./CountUpComponent";
import MouseAnimation from "./MouseAnimation";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import TypeAnim from "./TypeAnim";

function HeroSection() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <section
      id="about"
      className="container mx-auto hero-dots-container min-h-[80vh] lg:min-h-[95vh] xl:min-h-[55vh] w-full mb-5 overflow-hidden"
    >
      <span
        className="bg-pulse absolute top-[15%] left-[5%] animate-pulsebg pulse-delay-1"
        style={{ background: "transparent", border: "5px solid #fff" }}
      ></span>
      <span
        className="bg-pulse absolute top-[20%] lg:top-[40%] right-[12%]  animate-pulsebg pulse-delay-3"
        style={{ background: "transparent", border: "5px solid #fff" }}
      ></span>
      <span className="bg-pulse absolute bottom-[1%] right-[10%] lg:right-[20%] animate-pulsebg pulse-delay-2"></span>
      <span className="bg-pulse absolute bottom-[24%] lg:bottom-[2%] left-[2%]  animate-pulsebg pulse-delay-4"></span>
      <span
        className="bg-pulse absolute -bottom-[1%] right-[40%] animate-pulsebg pulse-delay-1"
        style={{ background: "transparent", border: "5px solid #fff" }}
      ></span>
      <span className="bg-pulse absolute top-[14%] right-[30%]  animate-pulsebg pulse-delay-5"></span>
      <svg
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        className=" w-[40%]  h-[40%] absolute -left-[15%] -top-[15%]"
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
        className="w-[50%] h-[50%] absolute -right-[20%] top-[4%] lg:top-[29%]"
      >
        <path
          fill="#8093F1"
          d="M63.1,-49.3C76.4,-33.6,78.2,-7.7,71.6,14.4C65,36.6,50.1,54.9,32.6,60.5C15.1,66.2,-5,59.3,-20.7,49.3C-36.3,39.3,-47.5,26.4,-49.1,13.1C-50.6,-0.2,-42.6,-13.9,-32.8,-28.8C-23,-43.7,-11.5,-59.9,6.7,-65.3C24.9,-70.6,49.7,-65.1,63.1,-49.3Z"
          transform="translate(100 100)"
        />
      </svg>
      <motion.div className="px-4 lg:px-8 flex flex-col-reverse gap-6 lg:gap-x-12 lg:pt-[5.3rem] pt-10 lg:flex-row z-50">
        <div className="flex flex-col gap-y-5 justify-between items-center w-full lg:w-1/2">
          <p className="text-white/75 text-xl lg:text-4xl font-bold font-montserrat mb-2">
            Hello, I am{" "}
            <span className="font-montserrat text-yellow-500 hover:animate-pulse z-10">
              MASUD
            </span>
          </p>
          <TypeAnim />
          <p className="text-white/90 text-base lg:text-lg tracking-wide font-opensans mx-auto text-justify">
            A self-taught full-stack developer specializing in{" "}
            <span className="font-firacode text-yellow-300/90 font-semibold">
              {" "}
              Flutter, Next.js, Nest.js, Tailwind CSS
            </span>
            , and modern web technologies. I excel in building high-performance,
            server-rendered React apps and dynamic UIs, with a focus on
            performance and{" "}
            <span className="text-yellow-300/90 font-semibold">SEO</span>. With
            experience in{" "}
            <span className="font-firacode text-yellow-300/90 font-semibold">
              Next.js, Nest.js, Express, and MongoDB
            </span>
            , I deliver complete full-stack solutions. I'm passionate about
            staying updated with industry trends.
          </p>
          <span className="w-2/3 h-[1.5px] bg-white/80"></span>
          <div className="flex flex-row items-center text-white gap-x-3 z-30">
            <Link
              href="https://github.com/mmh-masud-03"
              className="border lg:border-[1.7px] rounded-full p-2 border-[#9999f4] hover:bg-[#9999f4] transition duration-300"
              target="_blank"
            >
              <FaGithub size={28} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/md-masud-hossen-9733611a1"
              className="border lg:border-[1.7px] rounded-full p-2 border-[#9999f4] hover:bg-[#4949d3] transition duration-300"
              target="_blank"
            >
              <FaLinkedin size={28} />
            </Link>
            <Link
              href="https://medium.com/@masud20.bup"
              className="border lg:border-[1.7px] rounded-full p-2 border-[#9999f4] hover:bg-[#9999f4] transition duration-300"
              target="_blank"
            >
              <FaMedium size={28} />
            </Link>
            <Link
              href="https://x.com/MasudHosse47600"
              className="border lg:border-[1.7px] rounded-full p-2 border-[#9999f4] hover:bg-[#3c3ce8] transition duration-300"
              target="_blank"
            >
              <FaTwitter size={28} />
            </Link>
          </div>
          <div className="flex flex-row justify-center gap-x-6 pb-5">
            <a
              href="/assets/Masud-Hossen-Resume.pdf"
              download={true}
              className="text-center font-raleway text-base lg:text-lg relative inline-block bg-yellow-300/90 text-black font-bold py-2 px-4 rounded hover:bg-yellow-400 transition duration-300 overflow-hidden"
            >
              Download Resume
              <span className="absolute block top-0 left-0 w-full h-[2px] bg-gradient-leftright animate-leftright"></span>
              <span className="absolute block -top-[100%] right-0 w-[2px] h-full bg-gradient-updown animate-updown animation-delay-1"></span>
              <span className="absolute block -right-[100%] bottom-0 h-[2px] w-full bg-gradient-rightleft animate-rightleft animation-delay-2"></span>
              <span className="absolute block left-0 -bottom[100%] w-[2px] h-full bg-gradient-downup animate-downup animation-delay-3"></span>
            </a>
            <Link
              href={"#contact"}
              className="text-center text-base lg:text-lg font-raleway relative inline-block bg-yellow-300/90 text-black font-bold py-2 px-4 rounded hover:bg-yellow-400 transition duration-300 overflow-hidden"
            >
              Contact Me
              <span className="absolute block top-0 left-0 w-full h-[2px] bg-gradient-leftright animate-leftright"></span>
              <span className="absolute block -top-[100%] right-0 w-[2px] h-full bg-gradient-updown animate-updown animation-delay-1"></span>
              <span className="absolute block -right-[100%] bottom-0 h-[2px] w-full bg-gradient-rightleft animate-rightleft animation-delay-2"></span>
              <span className="absolute block left-0 -bottom[100%] w-[2px] h-full bg-gradient-downup animate-downup animation-delay-3"></span>
            </Link>
          </div>
        </div>

        <div className="pt-10 pl-12 z-10">
          <div className="animate-circlepulse w-[60%] h-[60%] md:bg-contain md:h-auto lg:w-[300px] lg:h-[300px] border rounded-full border-fuchsia-800/50 ">
            <Image
              src={"/assets/images/hero pic.jpg"}
              alt=""
              height={300}
              width={300}
              className="rounded-full object-cover"
            />
          </div>
        </div>
      </motion.div>
      <MouseAnimation isVisible={isVisible} />{" "}
    </section>
  );
}

export default HeroSection;
