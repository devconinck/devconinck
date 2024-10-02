"use client";
import Image from "next/image";
import Header from "./components/NavBar";
import About from "./components/About";
import Skills from "./components/Skills";
import SkillsShowcase from "./components/SkillsDiv";

export default function Home() {
  return (
    <div className="border border-slate-300 rounded-2xl p-4 m-4 ">
      <section id="about" className="">
        <About />
      </section>
      <section id="skills" className=" ">
        <SkillsShowcase />
      </section>
    </div>
  );
}
