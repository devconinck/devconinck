import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const skillsSvgs = [
  { name: "React", svg: "/skills/react.svg" },
  { name: "Next.js", svg: "/skills/nextjs.svg" },
  { name: "TypeScript", svg: "/skills/typescript.svg" },
  { name: "JavaScript", svg: "/skills/javascript.svg" },
  { name: "HTML", svg: "/skills/html.svg" },
  { name: "CSS", svg: "/skills/css.svg" },
  { name: "Node.js", svg: "/skills/node.svg" },
  { name: "Git", svg: "/skills/git.svg" },
  { name: "Nest.js", svg: "/skills/express.svg" },
  { name: "Python", svg: "/skills/python.svg" },
  { name: "Shadcn", svg: "/skills/shadcn.svg" },
  { name: "SQL", svg: "/skills/sql.svg" },
  { name: "Tailwind", svg: "/skills/tailwind.svg" },
];

const SkillIcon = ({ skill, x, y }) => (
  <motion.div
    className="absolute w-16 h-16" // Made the size slightly smaller for performance
    style={{
      x,
      y,
      transformOrigin: "center center",
    }}
    whileHover={{ scale: 1.2, zIndex: 10 }}
  >
    <div className="w-full h-full flex items-center justify-center">
      <Image
        src={skill.svg}
        alt={skill.name}
        width={40}
        height={40}
        className="w-10 h-10"
      />
    </div>
    <motion.div
      className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-background/80 text-foreground px-2 py-1 rounded whitespace-nowrap"
      initial={{ opacity: 0 }}
      whileHover={{ opacity: 1 }}
    >
      {skill.name}
    </motion.div>
  </motion.div>
);

export default function SkillsShowcase() {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    let animationFrame;

    const animate = () => {
      setRotation((prev) => (prev + 0.2) % 360); // Slowed down the rotation
      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, []);

  const circles = [
    { radius: 100, skills: skillsSvgs.slice(0, 7) }, // Reduced the radius for a smaller layout
    { radius: 160, skills: skillsSvgs.slice(7) }, // Reduced outer circle radius
  ];

  return (
    <div className="relative w-full h-[500px] flex items-center justify-center bg-gradient-to-b from-background to-background/80 overflow-hidden">
      <div className="absolute text-center z-10">
        <h2 className="text-3xl font-bold mb-2">My Skills</h2>
        <p className="text-muted-foreground">
          Hover over the icons to learn more
        </p>
      </div>

      {circles.map((circle, circleIndex) => (
        <div key={circleIndex}>
          <div
            className="absolute border border-gray-300/20 rounded-full"
            style={{
              width: circle.radius * 2,
              height: circle.radius * 2,
            }}
          />
          {circle.skills.map((skill, index) => {
            const angle = (index / circle.skills.length) * 360 + rotation;
            const x = Math.cos(angle * (Math.PI / 180)) * circle.radius;
            const y = Math.sin(angle * (Math.PI / 180)) * circle.radius;

            return <SkillIcon key={skill.name} skill={skill} x={x} y={y} />;
          })}
        </div>
      ))}
    </div>
  );
}
