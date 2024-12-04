import "../styles/Hero.css";
import Navbar from "./Navbar";
import streetLights from "../assets/Hero/streetlights.svg";
import { motion } from "framer-motion";
import { useAnimate } from "framer-motion/mini";
import AnimatedText from "./AnimatedText";

const slideIn = {
  initial: {
    opacity: 0,
    x: "-100vw",
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const slideInWithDelay = {
  initial: {
    opacity: 0,
    x: "-100vw",
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      mass: 0.011,
      stiffness: 100,
      delay: 0.5,
    },
  },
};

const FadeInWithDelay = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      type: "spring",
      delay: 0.8,
      ease: "easeIn",
    },
  },
};
function Hero() {
  return (
    <>
      <div className="center">
        <div className="heroContent">
          <h1>
            <AnimatedText text="Hey, Welcome to my Portfolio." />
          </h1>
          <div className="container">
            <div className="streetlights">
              <img src={streetLights} alt="Svg Street lights" />
            </div>
            <div className="content">
              <div className="quickPeakBox">
                <motion.h5
                  variants={slideInWithDelay}
                  initial="initial"
                  animate="animate"
                >
                  Quick peak
                </motion.h5>
              </div>
              <div className="skillList">
                <motion.ul
                  variants={FadeInWithDelay}
                  initial="initial"
                  animate="animate"
                >
                  <li>Front-end Developer</li>
                  <li>Junior UX/UI designer</li>
                  <li>
                    C++ <span className="makeRed">More below</span>
                  </li>
                </motion.ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
