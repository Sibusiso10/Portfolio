import "../styles/Skillset.css";
import rect1 from "../assets/Skillset/Rectangle 1.svg";
import rect2 from "../assets/Skillset/Rectangle 2.svg";
import rect3 from "../assets/Skillset/Rectangle 3.svg";
import rect4 from "../assets/Skillset/Rectangle 4.svg";
import rect5 from "../assets/Skillset/Rectangle 5.svg";
import rect6 from "../assets/Skillset/Rectangle 6.svg";
import rect7 from "../assets/Skillset/Rectangle 7.svg";
import rect8 from "../assets/Skillset/Rectangle 8.svg";
import js from "../assets/Skillset/Toolicons/js.svg";
import css from "../assets/Skillset/Toolicons/css-3.svg";
import python from "../assets/Skillset/Toolicons/python.svg";
import figma from "../assets/Skillset/Toolicons/figma.svg";
import html from "../assets/Skillset/Toolicons/html.svg";
import react from "../assets/Skillset/Toolicons/react.svg";
import { animate, delay, motion, stagger } from "framer-motion";
import { useInView } from "react-intersection-observer";

const childSlideIn = {
  initial: {
    opacity: 0,
    x: -100,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.25,
      mass: 0.2,
      stagger: 1,
    },
  },
};
const childSlideIn1 = {
  initial: {
    opacity: 0,
    x: -100,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.1,
      delay: 0.15,
      mass: 0.2,
      stagger: 1,
    },
  },
};
const childSlideIn2 = {
  initial: {
    opacity: 0,
    x: -100,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.25,
      delay: 0.25,
      mass: 0.2,
      stagger: 1,
    },
  },
};
const childSlideIn3 = {
  initial: {
    opacity: 0,
    x: -100,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.25,
      delay: 0.35,
      mass: 0.2,
      stagger: 1,
    },
  },
};
const childSlideIn4 = {
  initial: {
    opacity: 0,
    x: -100,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.25,
      delay: 0.45,
      mass: 0.2,
      stagger: 1,
    },
  },
};
const childSlideIn5 = {
  initial: {
    opacity: 0,
    x: -100,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.25,
      delay: 0.55,
      mass: 0.2,
      stagger: 1,
    },
  },
};
const childSlideIn6 = {
  initial: {
    opacity: 0,
    x: -100,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.25,
      delay: 0.65,
      mass: 0.2,
      stagger: 1,
    },
  },
};
const childSlideIn7 = {
  initial: {
    opacity: 0,
    x: -100,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.25,
      delay: 0.75,
      mass: 0.2,
      stagger: 1,
    },
  },
};
function Skillset() {
  const { ref: firstref, inView: firstInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const { ref: oneref, inView: oneInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const { ref: tworef, inView: twoInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const { ref: threeref, inView: threeInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const { ref: fourref, inView: fourInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const { ref: fiveref, inView: fiveInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const { ref: sixref, inView: sixInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const { ref: sevenref, inView: sevenInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const { ref: eightref, inView: eightInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  return (
    <div className="center">
      <div className="skillSet">
        <div className="containerOfSkillSet">
          <div className="tittleSkillSet">
            <motion.div
              variants={childSlideIn}
              ref={firstref}
              initial="initial"
              animate={firstInView ? "animate" : "initial"}
              className="skillSetTittle"
            >
              <h2>Skill Set</h2>
            </motion.div>
            <div className="skillSetIcons">
              <div className="rectContainer">
                <motion.img
                  variants={childSlideIn}
                  initial="initial"
                  ref={oneref}
                  animate={oneInView ? "animate" : "initial"}
                  src={rect1}
                  alt="Red rectangle"
                />
              </div>
              <div className="rectContainer">
                <motion.img
                  variants={childSlideIn1}
                  initial="initial"
                  ref={tworef}
                  animate={twoInView ? "animate" : "initial"}
                  src={rect2}
                  alt="Dark Red rectangle"
                />
              </div>
              <div className="rectContainer">
                <motion.img
                  variants={childSlideIn2}
                  initial="initial"
                  ref={threeref}
                  animate={threeInView ? "animate" : "initial"}
                  src={rect3}
                  alt="deep Red rectangle"
                />
              </div>
              <div className="rectContainer">
                <motion.img
                  variants={childSlideIn3}
                  initial="initial"
                  ref={fourref}
                  animate={fourInView ? "animate" : "initial"}
                  src={rect4}
                  alt="Darkest Red rectangle"
                />
              </div>
              <div className="rectContainer">
                <motion.img
                  variants={childSlideIn4}
                  initial="initial"
                  ref={fiveref}
                  animate={fiveInView ? "animate" : "initial"}
                  src={rect5}
                  alt="Darkect blue rectangle"
                />
              </div>
              <div className="rectContainer">
                <motion.img
                  variants={childSlideIn5}
                  initial="initial"
                  ref={sixref}
                  animate={sixInView ? "animate" : "initial"}
                  src={rect6}
                  alt="linear gradient between blue and black rectangle"
                />
              </div>
              <div className="rectContainer">
                <motion.img
                  variants={childSlideIn6}
                  initial="initial"
                  ref={sevenref}
                  animate={sevenInView ? "animate" : "initial"}
                  src={rect7}
                  alt="blue rectangle"
                />
              </div>
              <div className="rectContainer">
                <motion.img
                  variants={childSlideIn7}
                  initial="initial"
                  ref={eightref}
                  animate={eightInView ? "animate" : "initial"}
                  src={rect8}
                  alt="linear Gradient of blue and Red rectangle"
                />
              </div>
            </div>
          </div>
          <div className="skillSetList">
            <ul>
              <div className="box">
                <p>HTML</p>
                <p>90%</p>
              </div>
              <div className="box">
                <p>CSS</p>
                <p>80%</p>
              </div>
              <div className="box">
                <p>JAVA SCRIPT</p>
                <p>70%</p>
              </div>
              <div className="box">
                <p>REACT</p>
                <p>75%</p>
              </div>
              <div className="box">
                <p>TypeScript</p>
                <p>70%</p>
              </div>
              <div className="box">
                <p>PYTHON</p>
                <p>50%</p>
              </div>
              <div className="box">
                <p>C++</p>
                <p>80%</p>
              </div>
              <div className="box">
                <p>UI/UX DESIGN</p>
                <p>80%</p>
              </div>
              <div className="box">
                <p>FIGMA</p>
                <p>80%</p>
              </div>
            </ul>
          </div>
        </div>
        <div className="ToolIcons">
          <ul>
            <img src={js} alt="Java script icon" />
            <img src={css} alt="css 3 icon" />
            <motion.img
              initial={{
                rotate: 0,
              }}
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear",
              }}
              src={python}
              alt="python icon"
            />
            <img src={figma} alt="figma icon" />
            <img src={html} alt="html 5 icon" />
            <motion.img
              initial={{
                rotate: 0,
              }}
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear",
              }}
              src={react}
              alt="react icon"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Skillset;
