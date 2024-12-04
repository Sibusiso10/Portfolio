import "../styles/Project.css";
import projectTittle from "../assets/Projects/projectTittle.svg";
import weatherAppDestop from "../assets/Projects/containerOne/weatherAppDestop.png";
import weatherAppMobile from "../assets/Projects/containerOne/weatherAppMobile.png";
import theMoon from "../assets/Projects/theMoon.svg";
import Porscho911WebSiteMainPage from "../assets/Projects/containerTwo/Porscho911WebSiteMainPage.png";
import Porscho911WebSiteMainEngine from "../assets/Projects/containerTwo/Porscho911WebSiteMainEngine.png";
import Rocket from "../assets/Projects/containerthree/Rocket.svg";
import UFOSecondImg from "../assets/Projects/containerthree/UFOSecondImg.svg";
import UFOFirstImg from "../assets/Projects/containerthree/UFOFirstImg.png";
import Porscho911LowerWebsite from "../assets/Projects/containerthree/Porscho911LowerWebsite.png";
import { Link } from "react-router-dom";
import MyWork from "../MyWork";

function Projects() {
  return (
    <>
      <div className="center">
        <div className="project">
          <div className="projectTittle">
            <img src={projectTittle} alt=" Svg written project tittle" />
          </div>
          <div className="projectFirstContainer">
            <h3>Designs and development of the designs</h3>

            <div className="containerOne">
              <img
                className="img1"
                src={weatherAppDestop}
                alt="Screenshot of a demo portfolio store desktop"
              />
              <img
                className="img2"
                src={weatherAppMobile}
                alt="Screenshot demo portfolio mobile design of the store"
              />
            </div>
          </div>
          <div className="projectsSecondContainer">
            <div className="containerTwo">
              <img
                className="img3"
                src={Porscho911WebSiteMainPage}
                alt="Porscho 911 WebSite Main Page"
              />
              <img
                className="img4"
                src={Porscho911WebSiteMainEngine}
                alt="Porscho 911 WebSite Engine page"
              />
            </div>
          </div>
          <div className="projectsThirdContainer">
            <div className="containerThird">
              <div className="desktopDesign">
                <div className="part1">
                  <img src={Rocket} alt="Svg of a rocket " />
                  <img
                    src={UFOSecondImg}
                    alt="Part of the UFO redesign of the e-website."
                  />
                </div>
                <div className="part2">
                  <img
                    className="img7"
                    src={UFOFirstImg}
                    alt="Part of the UFO redesign of the e-website."
                  />
                  <img
                    className="img8"
                    src={Porscho911LowerWebsite}
                    alt="Screenshot of the Porscho 911 Lower part of the Website"
                  />
                </div>
              </div>
              <div className="responsiveDesign">
                <div className="part1">
                  <img className="img5" src={Rocket} alt="Svg of a rocket " />
                  <img
                    className="img6"
                    src={Porscho911LowerWebsite}
                    alt="Screenshot of the Porscho 911 Lower part of the Website"
                  />
                </div>
                <div className="part2">
                  <img
                    className="img7"
                    src={UFOFirstImg}
                    alt="Part of the UFO redesign of the e-website."
                  />
                  <img
                    className="img8"
                    src={UFOSecondImg}
                    alt="Part of the UFO redesign of the e-website."
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="linkDirector">
            <p>Check Out the finished Designs </p>
            <Link to="/mywork">Here</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
