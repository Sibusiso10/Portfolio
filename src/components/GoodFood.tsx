import { motion, animate } from "framer-motion";
import React from "react";
import { useInView } from "react-intersection-observer";
import "../styles/GoodFood.css";
import GoodFoodProductCart from "../assets/Projects/containerfour/GoodFoodProductCart.png";
import GoodFoodProductView from "../assets/Projects/containerfour/GoodFoodProductView.png";

const slideRight = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
};

const GoodFood = () => {
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
      <div className="goodContainer">
        <img
          className="good1"
          src={GoodFoodProductCart}
          alt="Image of a e-commerce design showing food in a cart for demo food business"
        />
        <img
          className="good2"
          src={GoodFoodProductView}
          alt="Image of a e-commerce design showing food details for demo food business"
        />
      </div>
      <div className="linkTheMainSite">
        <p>Check Out the finished Design </p>
        <a href="https://GoodFoodlicationdem.netlify.app/">HERE</a>
      </div>
    </motion.div>
  );
};

export default GoodFood;
