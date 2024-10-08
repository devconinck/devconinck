import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

interface Project {
  name: string;
  year: number;
  description: string;
  technologies: string[];
  image?: string;
}

const projects: Project[] = [
  {
    name: "Delaware B2B portal (Webshop)",
    year: 2024,
    description:
      "School project in a team of 5 students where we developed a webshop for a B2B portal using Next.js and Node.js.",
    technologies: ["Next.js", "Node.js", "MySQL", "Prisma", "Tailwind CSS"],
    image: "/projects/B2B_Web_chatbox.png",
  },
  {
    name: "Delaware B2B portal (Desktop)",
    year: 2024,
    description:
      "SChool project in a team of 5 students where we developed a desktop application for a B2B portal using Java and JavaFX.",
    technologies: ["Java", "JavaFX", "Teamwork"],
    image: "/projects/B2B_Java_customersDetails.png",
  },
  {
    name: "Frituur Webshop",
    year: 2023,
    description:
      "School project where I developed a webshop for a local business. Full stack application with Nest.js REST API and Next.js frontend.",
    technologies: ["Next.js", "TypeScript", "Prisma", "MySQL", "Tailwind CSS"],
    image: "/projects/home.png",
  },
];

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <Card className="h-full flex flex-col">
      <CardHeader>
        <CardTitle className="flex justify-between items-center">
          {project.name}
          <span className="text-sm font-normal text-muted-foreground">
            {project.year}
          </span>
        </CardTitle>
        <CardDescription>{project.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        {project.image && (
          <Image
            src={project.image}
            height={200}
            width={300}
            loading="eager"
            alt={`${project.name} preview`}
            className="w-full h-40 object-cover rounded-md mb-4"
          />
        )}
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <Badge key={tech} variant="secondary">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  </motion.div>
);

export default function ProjectShowcase() {
  return (
    <div className="container mx-auto py-12 min-h-full">
      <h2 className="text-3xl font-bold mb-8 text-center">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
      <div className="flex items-center justify-center pt-8">
        <Link
          href={"/projects"}
          className={buttonVariants({ variant: "outline" })}
        >
          <p className="font-bold text-xl">Learn more</p>
        </Link>
      </div>
    </div>
  );
}
