import { motion, animate } from "framer-motion";
import React from "react";
import { useInView } from "react-intersection-observer";
import weatherAppDestop from "../assets/Projects/containerOne/weatherAppDestop.png";
import weatherAppMobile from "../assets/Projects/containerOne/weatherAppMobile.png";

const slideRight = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
};

const WeatherApp = () => {
  const { ref: img1ref, inView: img1InView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: img2ref, inView: img2InView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: pTagref, inView: pTagInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: linkTagref, inView: linkTagInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div className="MainSection">
      <div className="imgContainer">
        <img
          className="img1"
          src={weatherAppDestop}
          alt="Image of a weather app design for desktop"
        />
        <img
          className="img2"
          src={weatherAppMobile}
          alt="Image of a welcome page of a weather app design for mobile"
        />
      </div>
      <div className="linkTheMainSite">
        <p>Check Out the finished Design </p>
        <a href="https://weatherapplicationdem.netlify.app/">HERE</a>
      </div>
    </motion.div>
  );
};

export default WeatherApp;
