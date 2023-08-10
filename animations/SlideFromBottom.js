import React from "react";
import { motion } from "framer-motion";

const SlideFromBottom = ({ children, isInView }) => {
  console.log(isInView);
  return (
    <motion.div
      initial={{ y: 20, opacity: 0.1 }}
      animate={{
        y: isInView ? 0 : 20,
        opacity: isInView ? 1 : 0,
        transition: {
          y: { duration: 1, delay: 0.3 },
          opacity: { duration: 0.5, delay: 0 },
        },
      }}
    >
      {children}
    </motion.div>
  );
};

export default SlideFromBottom;
