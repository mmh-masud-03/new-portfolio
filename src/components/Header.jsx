"use client";
import Link from "next/link";
import { motion } from "framer-motion";

function Header() {
  return (
    <header className="bg-black w-full p-4 fixed top-0 z-50">
      <div className="flex flex-row justify-between items-center max-w-7xl mx-auto">
        <div className="text-white text-3xl font-bold">
          <Link href="/">
            <span className="hover:text-gray-400">MyPortfolio</span>
          </Link>
        </div>
        <nav className="flex flex-row gap-x-6 items-center text-xl text-white">
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="hover:text-gray-400 transition-colors duration-200 cursor-pointer"
            onClick={() =>
              document
                .getElementById("about")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            About
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="hover:text-gray-400 transition-colors duration-200 cursor-pointer"
            onClick={() =>
              document
                .getElementById("skills")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            Skills
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="hover:text-gray-400 transition-colors duration-200 cursor-pointer"
            onClick={() =>
              document
                .getElementById("experiences")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            Experiences
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="hover:text-gray-400 transition-colors duration-200 cursor-pointer"
            onClick={() =>
              document
                .getElementById("projects")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            Projects
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="hover:text-gray-400 transition-colors duration-200 cursor-pointer"
            onClick={() =>
              document
                .getElementById("contact")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            Contact
          </motion.a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
