import "../styles/Contact.css";
import Navbar from "./Navbar";
import { animate, motion } from "framer-motion";

const parantFadeIn = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};
const fadeIn = {
  initial: {
    opacity: 0,
    x: "-50vw",
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const leftFadeIn = {
  initial: {
    opacity: 0,
    x: "-50vw",
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const withDelayLeftFadeIn = {
  initial: {
    opacity: 0,
    x: "50vw",
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
    },
  },
};

const rightFadeIn = {
  initial: {
    opacity: 0,
    x: "50vw",
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const withDelayRightFadeIn = {
  initial: {
    opacity: 0,
    x: "50vw",
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
    },
  },
};
function Contact() {
  return (
    <>
      <div className="center">
        <div className="contactBackground">
          <motion.div
            className="contactContent"
            variants={parantFadeIn}
            initial="initial"
            animate="animate"
          >
            <div className="contactTittle">
              <motion.h2 variants={fadeIn}>Contact Details</motion.h2>
            </div>
            <div className="contactDetails">
              <div className="firstContainer spaceAbove">
                <div className="telephone lowBorder">
                  <div className="tele ">
                    <motion.h4 variants={leftFadeIn}>Telephone:</motion.h4>
                  </div>
                  <motion.p variants={withDelayLeftFadeIn}>
                    062 655 2065
                  </motion.p>
                </div>
                <div className="whatsApp">
                  <div className="app">
                    <motion.h4 variants={leftFadeIn}>WhatsApp:</motion.h4>
                  </div>
                  <motion.p variants={withDelayLeftFadeIn}>
                    062 655 2065
                  </motion.p>
                </div>
              </div>
              <div className="secondContainer spaceAbove"></div>
              <div className="thirdContainer spaceAbove">
                <div className="email lowBorder">
                  <div className="mail">
                    <motion.h4 variants={rightFadeIn}>Email:</motion.h4>
                  </div>
                  <motion.p variants={withDelayRightFadeIn}>
                    sibusiso010nkosi@gmail.com
                  </motion.p>
                </div>

                <div className="otherPlatforms">
                  <motion.p variants={rightFadeIn}>
                    Other Social Platforms In progress{" "}
                  </motion.p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default Contact;
