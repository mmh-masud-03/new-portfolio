const { transform } = require("next/dist/build/swc");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      fontFamily: {
        montserrat: ["var(--font-montserrat)"],
        opensans: ["var(--font-opensans)"],
        firacode: ["var(--font-firacode)"],
        raleway: ["var(--font-raleway)"],
        roboto: ["var(--font-roboto)"],
      },
      backgroundImage: {
        "gradient-leftright": "linear-gradient(90deg, transparent, #006400)",
        "gradient-updown": "linear-gradient(180deg, transparent, #006400)",
        "gradient-rightleft": "linear-gradient(270deg, transparent, #006400)",
        "gradient-downup": "linear-gradient(360deg, transparent, #006400)",
      },
      keyframes: {
        test: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(2)" },
        },
        mousebounce: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        circlepulse: {
          "0%": { boxShadow: "0 0 10px #222adf" },
          "20%": { boxShadow: "0 0 15px #222adf" },
          "50%": { boxShadow: "0 0 40px #222adf" },
          "80%": { boxShadow: "0 0 10px #222adf" },
          "100%": { boxShadow: "0 0 0px #222adf" },
        },
        leftright: {
          "0%": { left: "-100%" },
          "50%": { left: "100%" },
          "100%": { left: "100%" },
        },
        rightleft: {
          "0%": { right: "-100%" },
          "50%": { right: "100%" },
          "100%": { right: "100%" },
        },
        updown: {
          "0%": { top: "-100%" },
          "50%": { top: "100%" },
          "100%": { top: "100%" },
        },
        downup: {
          "0%": { bottom: "-100%" },
          "50%": { bottom: "100%" },
          "100%": { bottom: "100%" },
        },
        pulsebg: {
          "0%": {
            transform: "scale(0) translateY(0) rotate(0deg)",
            opacity: "1",
          },
          "100%": {
            transform: "scale(1.5) translateY(-100px) rotate(360deg)",
            opacity: "0",
          },
        },
        bulbpulse: {
          "0%": {
            opacity: "0.05",
          },
          "20%": {
            opacity: "0.1",
          },
          "50%": {
            opacity: "0.03",
          },
          "80%": {
            opacity: "0.1",
          },
          "100%": {
            opacity: "0",
          },
        },
        blob: {
          "0%": {
            transform: "scale(1) translateY(0)",
          },
          "50%": {
            clipPath: "scale(1.2) translateY(-10px)",
          },
          "100%": {
            clipPath: "scale(1) translateY(0)",
          },
        },
        wave: {
          "0%": {
            d: "path('M 100, 100 m -80, 0 a 80,80 0 1,1 160,0 a 80,80 0 1,1 -160,0')",
          },
          "25%": {
            d: "path('M 100, 100 m -80, 0 a 80,80 0 1,1 160,10 a 80,80 0 1,1 -160,-10')",
          },
          "50%": {
            d: "path('M 100, 100 m -80, 0 a 80,80 0 1,1 160,20 a 80,80 0 1,1 -160,-20')",
          },
          "75%": {
            d: "path('M 100, 100 m -80, 0 a 80,80 0 1,1 160,10 a 80,80 0 1,1 -160,-10')",
          },
          "100%": {
            d: "path('M 100, 100 m -80, 0 a 80,80 0 1,1 160,0 a 80,80 0 1,1 -160,0')",
          },
        },
      },
      animation: {
        test: "test 2s linear infinite",
        circlepulse: "circlepulse 5s linear infinite",
        wave: "wave 5s ease-in-out infinite",
        leftright: "leftright 1s linear infinite",
        rightleft: "rightleft 1s linear infinite",
        updown: "updown 1s linear infinite",
        downup: "downup 1s linear infinite",
        pulsebg: "pulsebg 10s linear infinite",
        bulbpulse: "bulbpulse 10s linear infinite",
        blob: "blob 5s ease-in-out infinite",
        mousebounce: "mousebounce 1s infinite",
      },
      animationDelay: {
        0: "0s",
        1: "0.25s",
        2: "0.5s",
        3: "0.75s",
        4: "1s",
        5: "1.25s",
        6: "1.5s",
        7: "1.75s",
        8: "2s",
      },
    },
  },
  plugins: [],
};
