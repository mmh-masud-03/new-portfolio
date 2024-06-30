"use client";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import {
  FaGithub,
  FaLinkedin,
  FaMedium,
  FaTelegram,
  FaWhatsapp,
} from "react-icons/fa6";
import Link from "next/link";
import { motion } from "framer-motion";

function HeroSection() {
  const socialLinks = [
    { icon: FaGithub, href: "#" },
    { icon: FaLinkedin, href: "#" },
    { icon: FaMedium, href: "#" },
    { icon: FaTelegram, href: "#" },
    { icon: FaWhatsapp, href: "#" },
  ];

  return (
    <section
      id="about"
      className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-black to-blue-900"
    >
      {/* Background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-3/4 right-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/2 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 py-20 flex flex-col lg:flex-row items-center justify-between relative z-10">
        <motion.div
          className="lg:w-1/2 text-white space-y-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold">Hello, I'm Masud</h1>
          <TypeAnimation
            sequence={[
              "ReactJS Developer",
              1000,
              "NextJS Developer",
              1000,
              "TailwindCSS Developer",
              1000,
              "NodeJS Developer",
              1000,
              "MongoDB Developer",
              1000,
            ]}
            speed={50}
            className="text-3xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500"
            repeat={Infinity}
          />
          <p className="text-lg">
            A full-stack developer specializing in Next.js, React.js, and modern
            web technologies. I excel in building high-performance,
            server-rendered React apps and dynamic UIs, with a focus on
            performance and SEO.
          </p>
          <div className="flex space-x-4">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                className="text-white hover:text-blue-400 transition-colors duration-300"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <link.icon size={24} />
              </motion.a>
            ))}
          </div>
          <div className="flex space-x-4">
            <motion.button
              className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download Resume
            </motion.button>
            <motion.button
              className="px-6 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.button>
          </div>
        </motion.div>

        <motion.div
          className="lg:w-1/2 mt-10 lg:mt-0"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative w-64 h-64 mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full animate-spin-slow"></div>
            <Image
              src="/assets/images/hero pic.jpg"
              alt="Masud"
              width={250}
              height={250}
              className="rounded-full object-cover border-4 border-white absolute inset-2"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default HeroSection;
