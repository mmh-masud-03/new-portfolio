import { useEffect, useState } from "react";

const MouseAnimation = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(true);
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`mouse-container ${isVisible ? "" : "hidden"}`}>
      <svg
        className="mouse"
        width="100"
        height="100"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Mouse Body */}
        <path
          d="M30 20 C40 10, 60 10, 70 20 C80 30, 80 50, 70 60 C60 70, 40 70, 30 60 C20 50, 20 30, 30 20 Z"
          stroke="black"
          strokeWidth="2"
          fill="white"
        />
        {/* Mouse Scroll Wheel */}
        <circle
          cx="50"
          cy="40"
          r="8"
          stroke="black"
          strokeWidth="2"
          fill="black"
          className="scroll-indicator"
        />
        {/* Mouse Buttons */}
        <path
          d="M45 20 L55 20 L55 30 L45 30 Z"
          stroke="black"
          strokeWidth="2"
          fill="white"
        />
      </svg>

      <style jsx>{`
        .mouse-container {
          position: fixed;
          bottom: 20px;
          right: 20px;
          margin: auto;
        }

        .mouse {
          width: 100px;
          height: 100px;
        }

        @keyframes scroll {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
          100% {
            transform: translateY(0);
          }
        }

        .scroll-indicator {
          animation: scroll 1s infinite;
        }

        .hidden {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default MouseAnimation;
