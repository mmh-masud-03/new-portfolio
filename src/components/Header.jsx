"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Experiences", id: "experiences" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <motion.header
      className={`w-full p-4 fixed top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black bg-opacity-90 shadow-lg" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-row justify-between items-center max-w-7xl mx-auto">
        <Link href="/" className="text-white text-3xl font-bold">
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Image
              src="/assets/images/tools/coder.png"
              alt="Logo"
              width={40}
              height={40}
              className="rounded-full animate-pulse"
            />
          </motion.div>
        </Link>
        <nav className="flex flex-row gap-x-6 items-center">
          {navItems.map((item) => (
            <motion.a
              key={item.id}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="text-lg text-yellow-300 hover:text-gray-300 transition-colors duration-200 cursor-pointer relative group"
              onClick={() =>
                document
                  .getElementById(item.id)
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              {item.name}
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </motion.a>
          ))}
        </nav>
      </div>
    </motion.header>
  );
}

export default Header;
