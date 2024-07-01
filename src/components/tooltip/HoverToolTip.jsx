import { motion } from "framer-motion";
function HoverToolTip({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="absolute top-10 left-10 bg-black bg-opacity-70 text-white p-2 rounded z-50 text-4xl"
    >
      {children}
    </motion.div>
  );
}

export default HoverToolTip;
