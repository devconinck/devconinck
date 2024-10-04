import ProjectsGrid from "./Project";

const projectsData = [
  {
    title: "Project 1",
    description:
      "This is a description for Project 1. It showcases various technologies and solving complex problems.",
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    videoUrl: "/path-to-video-1.mp4",
    skills: [
      { name: "React", color: "default" },
      { name: "TypeScript", color: "secondary" },
    ],
    startDate: "Jan 2023",
    endDate: "Mar 2023",
  },
  {
    title: "Project 2",
    description:
      "Project 2 is an innovative solution that leverages cutting-edge web technologies for optimal performance.",
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    videoUrl: "/path-to-video-2.mp4",
    skills: [
      { name: "Next.js", color: "default" },
      { name: "TailwindCSS", color: "secondary" },
    ],
    startDate: "Apr 2023",
    endDate: "Jun 2023",
  },
  // Add more projects as needed
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-background">
      <main className="py-12">
        <h1 className="text-4xl font-bold text-center mb-8">My Projects</h1>
        <ProjectsGrid projects={projectsData} />
      </main>
    </div>
  );
}
