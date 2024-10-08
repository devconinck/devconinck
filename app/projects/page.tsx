"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface Skill {
  name: string;
  color: string;
}

interface Project {
  name: string;
  year: number;
  description: string;
  skills: Skill[];
  githubLink: string;
  githubLinkBackend?: string;
  images: string[];
}

const projects: Project[] = [
  {
    name: "Portfolio v2",
    year: 2024,
    description:
      "The current version of my portfolio website, built using TypeScript, Next.js, Tailwind CSS, and shadcn/ui.",
    skills: [
      { name: "TypeScript", color: "bg-blue-600" },
      { name: "Next.js", color: "bg-blue-500" },
      { name: "Tailwind CSS", color: "bg-teal-500" },
      { name: "shadcn/ui", color: "bg-gray-800" },
    ],
    githubLink: "https://github.com/devconinck/portfoliov2",
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
  },
  {
    name: "Delaware B2B portal (Webshop)",
    year: 2024,
    description:
      "School project in a team of 5 students where we developed a webshop for a B2B portal using Next.js and Node.js.",
    skills: [
      { name: "Next.js", color: "bg-blue-500" },
      { name: "Node.js", color: "bg-green-600" },
      { name: "MySQL", color: "bg-blue-700" },
      { name: "Prisma", color: "bg-gray-800" },
      { name: "Tailwind CSS", color: "bg-teal-500" },
    ],
    githubLink: "https://github.com/devconinck/B2B_frontend",
    githubLinkBackend: "https://github.com/devconinck/B2B_backend",
    images: [
      "/projects/B2B_Web_login.png",
      "/projects/B2B_Web_chatbox.png",
      "/projects/B2B_Web_orders.png",
      "/projects/B2B_Web_orderdetails.png",
      "/projects/B2B_Web_payment.png",
      "/projects/B2B_Web_invoice.png",
      "/projects/B2B_Web_notis.png",
      "/projects/B2B_Web_profile.png",
    ],
  },
  {
    name: "Delaware B2B portal (Desktop)",
    year: 2024,
    description:
      "School project in a team of 5 students where we developed a desktop application for a B2B portal using Java and JavaFX.",
    skills: [
      { name: "teamwork", color: "bg-yellow-500" },
      { name: "Java", color: "bg-red-600" },
      { name: "JavaFX", color: "bg-purple-500" },
    ],
    githubLink: "https://github.com/devconinck/B2B_Java",
    images: [
      "/projects/B2B_Java_landing.png",
      "/projects/B2B_Java_orders.png",
      "/projects/B2B_Java_customers.png",
      "/projects/B2B_Java_customersDetails.png",
      "/projects/B2B_Java_adminLanding.png",
      "/projects/B2B_Java_admin_companies.png",
      "/projects/B2B_Java_admin_ur.png",
    ],
  },
  {
    name: "EWD Java Springboot",
    year: 2024,
    description:
      "Solo school project where I developed a Java SpringBoot application to check events for the Olympic Games in Paris, with the ability to purchase tickets for these events.",
    skills: [
      { name: "Java", color: "bg-red-600" },
      { name: "SpringBoot", color: "bg-green-600" },
    ],
    githubLink: "https://github.com/devconinck/EWD_SpringBoot",
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
  },
  {
    name: "Frituur Webshop",
    year: 2023,
    description:
      "School project where I developed a webshop for a local business. Full stack application with Nest.js REST API and Next.js frontend.",
    skills: [
      { name: "Next.js", color: "bg-blue-500" },
      { name: "TypeScript", color: "bg-blue-600" },
      { name: "Prisma", color: "bg-gray-800" },
      { name: "MySQL", color: "bg-blue-700" },
      { name: "Tailwind CSS", color: "bg-teal-500" },
    ],
    githubLink: "https://github.com/devconinck/Frituur_frontend",
    githubLinkBackend: "https://github.com/devconinck/Frituur_backend",
    images: [
      "/projects/home.png",
      "/projects/order.png",
      "/projects/checkout_id.png",
      "/projects/account_orders.png",
      "/projects/admin_orders.png",
      "/projects/admin_products.png",
    ],
  },
  {
    name: "Splendor",
    year: 2023,
    description:
      "First school project done in a team of 4 students where we developed a desktop application for the board game Splendor using Java and JavaFX.",
    skills: [
      { name: "Java", color: "bg-red-600" },
      { name: "JavaFX", color: "bg-purple-500" },
      { name: "teamwork", color: "bg-yellow-500" },
    ],
    githubLink: "https://github.com/devconinck/Splendor_JavaGame",
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
  },
  {
    name: "Portfolio v1",
    year: 2023,
    description:
      "My first project where I created the first iteration of my portfolio website using HTML, CSS, and JavaScript.",
    skills: [
      { name: "HTML", color: "bg-orange-500" },
      { name: "CSS", color: "bg-blue-500" },
      { name: "JavaScript", color: "bg-yellow-500" },
    ],
    githubLink: "https://github.com/devconinck/Portfolio",
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
  },
];
export default function ProjectsPage() {
  const [lightboxIndex, setLightboxIndex] = useState(-1);
  const [currentProject, setCurrentProject] = useState<Project | null>(null);

  const openLightbox = (project: Project, imageIndex: number) => {
    setCurrentProject(project);
    setLightboxIndex(imageIndex);
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-gray-100 text-center mb-12">
          My Projects
        </h1>
        <div className="space-y-12">
          {projects.map((project, projectIndex) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: projectIndex * 0.1 }}
              className="bg-white dark:bg-gray-800 shadow-xl rounded-lg overflow-hidden"
            >
              <div className="md:flex">
                <div className="md:w-1/2">
                  <Carousel
                    className="w-full max-w-md mx-auto "
                    opts={{
                      align: "start",
                      loop: true,
                    }}
                  >
                    <CarouselContent>
                      {project.images.map((image, imageIndex) => (
                        <CarouselItem key={imageIndex}>
                          <Card>
                            <CardContent className="flex  items-center justify-center p-0">
                              <Image
                                src={image}
                                alt={`${project.name} preview ${
                                  imageIndex + 1
                                }`}
                                width={700}
                                height={400}
                                loading="lazy"
                                className="object-cover w-full h-full cursor-pointer"
                                onClick={() =>
                                  openLightbox(project, imageIndex)
                                }
                              />
                            </CardContent>
                          </Card>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                  </Carousel>
                </div>
                <div className="p-8 md:w-1/2">
                  <div className="uppercase tracking-wide text-sm text-indigo-500 dark:text-indigo-400 font-semibold">
                    {project.year}
                  </div>
                  <h2 className="mt-1 text-2xl font-bold text-gray-900 dark:text-gray-100">
                    {project.name}
                  </h2>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">
                    {project.description}
                  </p>
                  <div className="mt-4">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                      Skills Used:
                    </h3>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {project.skills.map((skill) => (
                        <span
                          key={skill.name}
                          className={`px-2 py-1 rounded-full text-white text-sm ${skill.color}`}
                        >
                          {skill.name}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="mt-6 flex items-center gap-4">
                    <Link
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:bg-indigo-500 dark:hover:bg-indigo-600"
                    >
                      Frontend Repo
                    </Link>
                    {project.githubLinkBackend && (
                      <Link
                        href={project.githubLinkBackend}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 dark:bg-green-500 dark:hover:bg-green-600"
                      >
                        Backend Repo
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      {lightboxIndex >= 0 && currentProject && (
        <Lightbox
          mainSrc={currentProject.images[lightboxIndex]}
          nextSrc={
            currentProject.images[
              (lightboxIndex + 1) % currentProject.images.length
            ]
          }
          prevSrc={
            currentProject.images[
              (lightboxIndex + currentProject.images.length - 1) %
                currentProject.images.length
            ]
          }
          onCloseRequest={() => setLightboxIndex(-1)}
          onMovePrevRequest={() =>
            setLightboxIndex(
              (lightboxIndex + currentProject.images.length - 1) %
                currentProject.images.length
            )
          }
          onMoveNextRequest={() =>
            setLightboxIndex((lightboxIndex + 1) % currentProject.images.length)
          }
        />
      )}
    </div>
  );
}
