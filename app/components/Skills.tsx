import { useState } from "react";
import Project from "./Project";
import { Button } from "@/components/ui/button";
import { on } from "events";

interface Skill {
  name: string;
  category: "programming" | "soft";
}

export interface Project {
  id: number;
  title: string;
  description: string;
  skills: string[];
}

const skills: Skill[] = [
  { name: "Python", category: "programming" },
  { name: "React", category: "programming" },
  { name: "TypeScript", category: "programming" },
  { name: "JavaScript", category: "programming" },
  { name: "Java", category: "programming" },
  { name: ".NET", category: "programming" },
  { name: "C#", category: "programming" },
  { name: "HTML", category: "programming" },
  { name: "CSS", category: "programming" },
  { name: "MySQL", category: "programming" },
  { name: "Git", category: "programming" },
  { name: "API", category: "programming" },
  { name: "Next.js", category: "programming" },
  { name: "TailwindCSS", category: "programming" },
  { name: "JavaFX", category: "programming" },
  { name: "Nestjs", category: "programming" },
  { name: "Shadcn UI", category: "programming" },
  { name: "Prisma", category: "programming" },
  { name: "Problem Solving", category: "soft" },
  { name: "Teamwork", category: "soft" },
  { name: "Adaptability", category: "soft" },
];

const projects: Project[] = [
  {
    id: 1,
    title: "Portfolio v1",
    description:
      "First iteration of my portfolio website. Built using HTML, CSS and Javascript. I created this website while learning these technologies in class as a way of getting hands-on experience.",
    skills: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 2,
    title: "Splendor",
    description:
      "School project using Java and JavaFX. In a team of 4, we created a digital version of the board game Splendor. This was the first team project I worked on and I learned a lot about teamwork and version control.",
    skills: ["Java", "JavaFX", "Teamwork"],
  },
  {
    id: 3,
    title: "Frituur d'Aa",
    description:
      "A full stack web application for a local fast food restaurant. School project during our third semester, I decided to use technologies I was unfamiliar with to challenge myself. The website is built using Next.js, TailwindCSS and Typescript and the backend is built using Nestjs with Typescript.",
    skills: [
      "React",
      "Next.js",
      "TailwindCSS",
      "TypeScript",
      "API",
      "Nestjs",
      "MySQL",
      "shadcn UI",
      "Prisma",
    ],
  },
  {
    id: 4,
    title: "Delaware B2B Platform (Desktop)",
    description:
      "School project during our 4th semester. Worked with an actual customer in a team of five. A B2B platform created for delaware, uses Java and JavaFX.",
    skills: ["Java", "JavaFX", "Teamwork"],
  },
  {
    id: 5,
    title: "Delaware B2B Platform (Web)",
    description:
      "The webshop part of the B2B platform built using Next.js, TailwindCSS, TypeScript, and Node.js. ",
    skills: [
      "React",
      "Next.js",
      "TailwindCSS",
      "TypeScript",
      "API",
      "Node.js",
      "MySQL",
      "shadcn UI",
      "Prisma",
      "Teamwork",
    ],
  },
  {
    id: 6,
    title: "Olympic Games Ticketing System",
    description:
      "A small school project during our fourth semester. A ticketing system for the Olympic Games built using Spring Boot",
    skills: ["Java", "Spring Boot"],
  },
  {
    id: 7,
    title: "Algoritmix",
    description:
      "A web application built with a friend, using Next.js to help users learn about and visualize sorting and path searching algorithms. This project includes interactive visualizations and challenges to enhance learning.",
    skills: [
      "React",
      "Next.js",
      "TailwindCSS",
      "TypeScript",
      "API",
      "Teamwork",
    ],
  },
  {
    id: 8,
    title: "Portfolio v2",
    description:
      "The second iteration of my portfolio website, built using modern web technologies. This project showcases my skills and projects in a more polished and professional manner.",
    skills: ["React", "Next.js", "TailwindCSS", "TypeScript", "API"],
  },
  {
    id: 9,
    title: "TradeWave",
    description:
      "An application built during my semester in Denmark using C# and .NET. It's a sandbox trading application which has a desktop application and a web application working together, built for UCN (school) in a group of 4.",
    skills: ["C#", ".NET", "Teamwork"],
  },
];

export default function Skills() {
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);

  const toggleSkill = (skill: string) => {
    setSelectedSkills((selectedSkills) =>
      selectedSkills.includes(skill)
        ? selectedSkills.filter((s) => s !== skill)
        : [...selectedSkills, skill]
    );
    console.log(selectedSkills);
  };

  const filteredProjects =
    selectedSkills.length == 0
      ? projects
      : projects.filter((project) =>
          selectedSkills.some((skill) => project.skills.includes(skill))
        );

  return (
    <div className=" p-6 w-full ">
      <h1 className="text-2xl font-bold  mb-6">Skills and Projects</h1>
      <div className="gap-4">
        <div>
          <div className="space-y-2">
            {skills.map((skill) => (
              <Button
                key={skill.name}
                variant={
                  selectedSkills.includes(skill.name) ? "outline" : "ghost"
                }
                className={`px-4 py-2 rounded-lg `}
                onClick={() => toggleSkill(skill.name)}
              >
                {skill.name}
              </Button>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-lg font-bold  mb-4">Projects</h2>
          {filteredProjects.map((project) => (
            <Project key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}
