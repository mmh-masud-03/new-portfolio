import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { useState, useEffect, useCallback, useMemo } from "react";

const LoadingIcon = ({ color = "#3B82F6", size = 40 }) => (
  <motion.svg
    width={size}
    height={size}
    viewBox="0 0 50 50"
    initial="hidden"
    animate="visible"
  >
    {[0, 1, 2].map((index) => (
      <motion.circle
        key={index}
        cx="25"
        cy="25"
        r="20"
        stroke={color}
        strokeWidth="4"
        fill="none"
        strokeDasharray="125.6"
        strokeLinecap="round"
        variants={{
          hidden: { pathLength: 0, opacity: 0 },
          visible: {
            pathLength: 1,
            opacity: 1,
            transition: {
              pathLength: {
                delay: index * 0.2,
                type: "spring",
                duration: 1,
                bounce: 0,
              },
              opacity: { delay: index * 0.2, duration: 0.01 },
            },
          },
        }}
      />
    ))}
  </motion.svg>
);

const ProgressBar = ({ progress }) => (
  <div className="w-64 h-2 bg-gray-700 rounded-full overflow-hidden">
    <motion.div
      className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
      initial={{ width: 0 }}
      animate={{ width: `${progress}%` }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    />
  </div>
);

const LoadingText = ({ text }) => (
  <motion.div
    className="text-white text-xl font-medium"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.3 }}
  >
    {text}
    <motion.span
      animate={{ opacity: [0, 1, 0] }}
      transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
    >
      ...
    </motion.span>
  </motion.div>
);

const Loader = ({ text = "Loading", duration = 3000 }) => {
  const [progress, setProgress] = useState(0);
  const [currentStage, setCurrentStage] = useState(0);
  const controls = useAnimation();

  const stages = useMemo(
    () => ["Initializing", "Fetching data", "Processing", "Finalizing"],
    []
  );

  const animateProgress = useCallback(() => {
    controls.start({
      scale: [1, 1.05, 1],
      transition: { duration: 0.5, repeat: Infinity, ease: "easeInOut" },
    });
  }, [controls]);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prevProgress + 2; // Increment by 2 instead of 1 for faster progress
      });
    }, duration / 200); // Reduce interval for faster updates

    const stageTimer = setInterval(() => {
      setCurrentStage((prevStage) => (prevStage + 1) % stages.length);
    }, duration / (stages.length * 2)); // Change stages more frequently

    animateProgress();

    return () => {
      clearInterval(timer);
      clearInterval(stageTimer);
    };
  }, [duration, stages.length, animateProgress]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div className="mb-6" animate={controls}>
          <LoadingIcon size={50} />
        </motion.div>
        <ProgressBar progress={progress} />
        <div className="mt-3 text-blue-300 font-semibold">{`${Math.round(
          progress
        )}%`}</div>
        <div className="mt-4">
          <LoadingText text={stages[currentStage]} />
        </div>
        <motion.div
          className="mt-2 text-gray-400 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {text}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Loader;
