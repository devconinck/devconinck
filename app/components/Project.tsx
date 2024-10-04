import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface Skill {
  name: string;
  color: "default" | "secondary" | "destructive" | "outline";
}

interface Project {
  title: string;
  description: string;
  images: string[];
  videoUrl: string;
  skills: Skill[];
  startDate: string;
  endDate: string;
}

interface ProjectsGridProps {
  projects: Project[];
}

function ProjectCard({ project }: { project: Project }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex + 1) % project.images.length
    );
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) =>
        (prevIndex - 1 + project.images.length) % project.images.length
    );
  };

  return (
    <Card className="h-full flex flex-col">
      <CardHeader>
        <CardTitle className="text-xl font-bold">{project.title}</CardTitle>
        <CardDescription className="line-clamp-2">
          {project.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow space-y-4">
        <div className="relative aspect-video">
          <div className="absolute inset-0">
            <Image
              src={project.images[currentImageIndex]}
              alt={`Project image ${currentImageIndex + 1}`}
              layout="fill"
              objectFit="cover"
              className="rounded-md"
            />
          </div>
          <Button
            variant="outline"
            size="icon"
            className="absolute left-2 top-1/2 transform -translate-y-1/2"
            onClick={prevImage}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-2 top-1/2 transform -translate-y-1/2"
            onClick={nextImage}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
        <div className="flex flex-wrap gap-2">
          {project.skills.map((skill, index) => (
            <Badge key={index} variant={skill.color}>
              {skill.name}
            </Badge>
          ))}
        </div>
        <div className="flex justify-between items-center text-sm text-gray-500">
          <span>Started: {project.startDate}</span>
          <span>Completed: {project.endDate}</span>
        </div>
      </CardContent>
    </Card>
  );
}

export default function ProjectsGrid({ projects }: ProjectsGridProps) {
  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold text-center mb-8">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
}
