import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Skillset from "./components/Skillset";
import Projects from "./components/Projects";

function Home() {
  return (
    <>
      <div className="heroBackGround ">
        <Hero />
      </div>
      <AboutMe />
      <Skillset />
      <Projects />
    </>
  );
}

export default Home;
