"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { motion } from "framer-motion";

const projectData = [
  {
    title: "RFID Attendance System",
    description:
      "Implemented an RFID-based attendance system for efficient tracking of student attendance.",
    image: "/assets/images/robotics/RFID.jpg",
    tech: ["RFID", "16X2 LCD", "ESP-8266", "Google Sheets"],
  },
  {
    title: "Voice Controlled Home Automation",
    description:
      "Developed a home automation system controlled via voice commands using Arduino and speech recognition via Bluetooth.",
    image: "/assets/images/robotics/Home automation.jpg",
    tech: ["4 Channel Relay", "Bluetooth HC-05", "Arduino"],
  },
  {
    title: "Welcome Bot",
    description:
      "Designed and programmed a welcoming robot to greet visitors at campus events.",
    image: "/assets/images/robotics/Hello bot 2.jpg",
    tech: ["Servo", "Sonar Sensor", "Arduino Uno"],
  },
  {
    title: "Smoke-Free Campus",
    description:
      "Initiated and led a project to promote a smoke-free environment on campus and raise awareness about the harmful effects of active and passive smoking.",
    image: "/assets/images/robotics/Hello bot.jpg",
    tech: ["Gas Sensor", "Servo", "Arduino Uno"],
  },
  {
    title: "Touchless Sprayer",
    description:
      "Designed and built a touchless hand sanitizer dispenser to promote hygiene practices.",
    image: "/images/",
    tech: ["IR Sensor", "Servo"],
  },
  {
    title: "Arduino Wireless Distance Meter",
    description:
      "Developed a wireless distance measurement device using Arduino for industrial applications.",
    image: "/assets/images/robotics/Wireless Distance meter.png",
    tech: ["Sonar Sensor", "16X2 LCD", "Arduino Uno"],
  },
  {
    title: "Line Follower Robot",
    description:
      "Developed an IR sensor based line follower robot which can follow a black line on a white surface or vice versa.",
    image: "/assets/images/robotics/LFR.jpg",
    tech: ["IR Sensor", "LiPo Battery", "Arduino Nano"],
  },
  {
    title: "Soccer Robot",
    description:
      "I participated in many soccer robot competitions. I upgraded the robot and made it more efficient by doing R&D on it.",
    image: "/assets/images/robotics/Soccer Robot.jpg",
    tech: [
      "Bluetooth HC-05",
      "LiPo Battery",
      "Arduino Uno",
      "High torque motors",
    ],
  },
];
function RoboticsProjects() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const handleSwiperState = (swiper) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  return (
    <div className="container mx-auto py-6 px-6">
      <div className="relative">
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={30}
          slidesPerView={1}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          pagination={{ clickable: true }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          onSlideChange={(swiper) => handleSwiperState(swiper)}
          onSwiper={(swiper) => handleSwiperState(swiper)}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 50,
            },
          }}
        >
          {projectData.map((project) => (
            <SwiperSlide key={project.title}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="h-[70vh] bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 project-card"
              >
                <div className="relative h-48">
                  <Image
                    src={project.image}
                    alt={project.title}
                    layout="fill"
                    objectFit="cover"
                    className="hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mt-2">{project.description}</p>
                  <div className="flex flex-wrap mt-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="text-sm text-gray-600 bg-gray-200 py-1 px-2 rounded mr-2 mb-2"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="flex justify-around px-6 mt-8">
          <button
            ref={prevRef}
            className={`bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600 transition ${
              isBeginning ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={isBeginning}
          >
            Previous
          </button>
          <button
            ref={nextRef}
            className={`bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600 transition ${
              isEnd ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={isEnd}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default RoboticsProjects;
