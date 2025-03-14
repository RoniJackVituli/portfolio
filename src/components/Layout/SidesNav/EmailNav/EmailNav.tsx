import React from "react";
import { Animated } from "react-animated-css";
import { motion } from "framer-motion";
type EmailNavProps = {
  className?: string;
};

const EmailNav = ({ className }: EmailNavProps) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <a href="mailto:rjvtechnology@gmail.com">rjvtechnology@gmail.com</a>
      <div></div>
    </motion.div>
  );
};

export default EmailNav;
