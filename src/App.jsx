import { useRef } from "react";
import AboutMe from "./components/AboutMe";
import Experiance from "./components/Experiance";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import { Element, scroller } from "react-scroll";

function App() {
  const handleScrollToExperiance = () => {
    window.scroll({
      top: 600,
      left: 100,
      behavior: "smooth",
    });
  };

  const handleScrollToProjects = () => {
    window.scroll({
      top: 1900,
      left: 100,
      behavior: "smooth",
    });
  };
  const handleScrollToSkills = () => {
    window.scroll({
      top: 1300,
      left: 100,
      behavior: "smooth",
    });
  };
  const handleScrollToContact = () => {
    const height = document.documentElement.scrollHeight - window.innerHeight;
    window.scrollTo({
      top: height,
      behavior: "smooth",
    });
  };
  return (
    <div className=" h-full w-screen font-primary text-white">
      <Navbar
        scrollToExperiance={handleScrollToExperiance}
        scrollToProjects={handleScrollToProjects}
        scrollToSkills={handleScrollToSkills}
        scrollToContact={handleScrollToContact}
      />
      <AboutMe scrollToContact={handleScrollToContact} />

      <Experiance />

      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
