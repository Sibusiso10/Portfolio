import { motion } from "framer-motion";
import { div } from "framer-motion/client";
import React from "react";
import { useInView } from "react-intersection-observer";
import "../styles/Hero.css";

interface AnimatedTextProps {
  text: string;
}
const AnimatedText: React.FC<AnimatedTextProps> = ({ text }) => {
  const letters = Array.from(text);

  const container = {
    initial: {
      opacity: 0,
    },
    animate: (i = 1) => ({
      opacity: 1,
      transition: {
        staggerChildren: 0.05 * i,
      },
    }),
  };

  const child = {
    initial: {
      opacity: 0,
      y: 20,
    },
    animate: {
      opacity: 1,
      color: "white",
      y: 0,
    },
  };

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  return (
    <motion.div
      ref={ref}
      variants={container}
      initial="initial"
      animate={inView ? "animate" : "initial"}
      custom={1}
    >
      {letters.map((letter, index) => (
        <motion.span key={index} variants={child}>
          {letter}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default AnimatedText;
