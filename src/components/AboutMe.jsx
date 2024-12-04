import "../styles/AboutMe.css";
import myImage from "../assets/AboutMe/myImage.png";
import AnimatedText from "./AnimatedText";
import { animate, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const fadeIn = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      type: "spring",
      duration: 8,
    },
  },
};

const slideUp = {
  initial: {
    opacity: 0,
    scrollbars: "hidden",
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    scrollbars: "hidden",
    transition: {
      type: "tween",
      duration: 1,
    },
  },
};
function AboutMe() {
  const { ref: imageRef, inView: imageInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: textRef, inView: textInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  return (
    <>
      <div className="center no-overflow">
        <div className="aboutMeContainer no-overflow">
          <div className="imageAndTittle no-overflow">
            <div className="myImage">
              <motion.img
                ref={imageRef}
                variants={fadeIn}
                initial="initial"
                animate={imageInView ? "animate" : "initial"}
                src={myImage}
                className="no-scrollbar"
                alt="An image of Sibusiso Nkosi"
              />
            </div>
            <div className="aboutTitte">
              <h2>
                <AnimatedText text="About Me" />
              </h2>
            </div>
          </div>
          <div className="aboutMeContent">
            <motion.p
              variants={slideUp}
              ref={textRef}
              initial="initial"
              className="no-scrollbar"
              animate={textInView ? "animate" : "initial"}
            >
              I am a passionate and dedicated problem solver who uses coding to
              bring ideas to life. Specializing in frontend development, I view
              programming languages as versatile tools for solving specific
              problems and adding value. Continuously developing my skills, I
              thrive on challenges and constantly seek new learning
              opportunities to stay at the forefront of the industry.
            </motion.p>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutMe;
