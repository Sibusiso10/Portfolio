import Navbar from "./components/Navbar";
import "./styles/MyWork.css";
import MainSectionPorscheDesign from "./components/MainSectionPorscheDesign";
import AnimatedText from "./components/AnimatedText";
import WeatherApp from "./components/WeatherApp";
import GoodFood from "./components/GoodFood";
function MyWork() {
  return (
    <div className="center">
      <div className="backGround">
        <div className="myWork">
          <div className="theTittle">
            <h1>
              <AnimatedText text="My Work" />
            </h1>
          </div>
          <MainSectionPorscheDesign />
          <WeatherApp />
          <GoodFood />
        </div>
      </div>
    </div>
  );
}

export default MyWork;
