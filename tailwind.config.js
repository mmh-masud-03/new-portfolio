/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        test: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(2)" },
        },
        circlepulse: {
          "0%": { boxShadow: "0 0 10px #222adf" },
          "20%": { boxShadow: "0 0 15px #222adf" },
          "50%": { boxShadow: "0 0 40px #222adf" },
          "80%": { boxShadow: "0 0 10px #222adf" },
          "100%": { boxShadow: "0 0 0px #222adf" },
        },
        leftright: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        rightleft: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        updown: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
        downup: {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(-100%)" },
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
        leftright: "leftright 2s ease-in-out infinite",
        rightleft: "rightleft 2s ease-in-out infinite",
        updown: "updown 2s ease-in-out infinite",
        downup: "downup 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
