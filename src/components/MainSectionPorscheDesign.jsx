import { Link } from "react-router-dom";
import Porscho911LowerWebsite from "../assets/Projects/containerthree/Porscho911LowerWebsite.png";
import Porscho911WebSiteMainPage from "../assets/Projects/containerTwo/Porscho911WebSiteMainPage.png";
import Porscho911WebSiteMainEngine from "../assets/Projects/containerTwo/Porscho911WebSiteMainEngine.png";
import "../styles/MainSectionPorscheDesign.css";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

function MainSectionPorscheDesign() {
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
    <>
      <div className="MainSection">
        <div className="imgContainer">
          <img
            className="img1"
            src={Porscho911WebSiteMainPage}
            alt="Porscho 911 WebSite Main Page"
          />
          <img
            className="img2"
            src={Porscho911WebSiteMainEngine}
            alt="Porscho 911 WebSite Engine page"
          />
          <img
            className="img3"
            src={Porscho911LowerWebsite}
            alt="Screenshot of the Porscho 911 Lower part of the Website"
          />
        </div>
        <div className="linkTheMainSite">
          <p>Check Out the finished Design </p>
          <a href="https://porschedemo.netlify.app/">HERE</a>
        </div>
      </div>
    </>
  );
}

export default MainSectionPorscheDesign;
