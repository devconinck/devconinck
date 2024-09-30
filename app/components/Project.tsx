import React from "react";
import { Github } from "lucide-react";

interface ProjectProps {
  project: {
    id: number;

    title: string;

    description: string;

    skills: string[];
  };
}

export default function Project({ project }: ProjectProps) {
  return (
    <div className="border border-slate-300 rounded-lg p-4 m-4 shadow-md">
      <h3 className="text-xl font-semibold">{project.title}</h3>
      <p className="">{project.description}</p>
      <ul className="list-disc list-inside mt-2">
        {project.skills.map((skill) => (
          <li key={skill} className="">
            {skill}
          </li>
        ))}
      </ul>
      <div className="mt-4 flex items-center">
        <a href={`/projects/${project.title}`} className=" hover:underline">
          View Project
        </a>
        <a
          href={`https://github.com/yourusername/${project.title}`}
          target="_blank"
          rel="noopener noreferrer"
          className="ml-2"
        >
          <Github className="w-6 h-6 " />
        </a>
      </div>
    </div>
  );
}
