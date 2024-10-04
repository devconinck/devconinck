"use client";
import About from "./components/About";
import SkillsShowcase from "./components/SkillsDiv";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="">
      <div id="about" className="flex items-center justify-center w-screen">
        <About />
      </div>
      <div id="skills" className="flex items-center justify-center w-screen ">
        <SkillsShowcase />
      </div>
      <div id="projects" className="flex items-center justify-center w-screen ">
        <Projects />
      </div>
      <div className="flex items-center justify-center w-screen ">
        <Footer />
      </div>
    </div>
  );
}
