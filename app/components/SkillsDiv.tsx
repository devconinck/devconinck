"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

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

//@ts-ignore
const SkillIcon = ({ skill, x, y, isGrid }) => (
  <motion.div
    className={`${
      isGrid ? "w-full h-full" : "absolute"
    } flex items-center justify-center`}
    style={
      isGrid
        ? {}
        : {
            left: `calc(50% + ${x}px)`,
            top: `calc(50% + ${y}px)`,
            transform: "translate(-50%, -50%)",
          }
    }
    whileHover={{ scale: 1.2, zIndex: 10 }}
  >
    <div className="relative group">
      <Image
        src={skill.svg}
        alt={skill.name}
        width={40}
        height={40}
        className="w-10 h-10"
      />
      <motion.div
        className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-background/80 text-foreground px-2 py-1 rounded whitespace-nowrap"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
      >
        {skill.name}
      </motion.div>
    </div>
  </motion.div>
);

export default function SkillsShowcase() {
  const [rotation, setRotation] = useState(0);
  const isSmallScreen = useMediaQuery({ query: "(max-width: 768px)" });

  useEffect(() => {
    if (isSmallScreen) return;

    let animationFrame: number;
    const animate = () => {
      setRotation((prev) => (prev + 0.2) % 360);
      animationFrame = requestAnimationFrame(animate);
    };
    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [isSmallScreen]);

  const circles = [
    { radius: 120, skills: skillsSvgs.slice(0, 7) },
    { radius: 200, skills: skillsSvgs.slice(7) },
  ];

  return (
    <div className="relative w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-background to-background/80 overflow-hidden p-4">
      <div className="text-center z-10 mb-8">
        <h2 className="text-3xl font-bold mb-2">My Skills</h2>
      </div>

      {isSmallScreen ? (
        <div className="grid grid-cols-4 gap-8 mt-8">
          {skillsSvgs.map((skill) => (
            <SkillIcon
              key={skill.name}
              skill={skill}
              isGrid={true}
              x={undefined}
              y={undefined}
            />
          ))}
        </div>
      ) : (
        <div className="relative w-[400px] h-[400px] mt-8">
          {circles.map((circle, circleIndex) => (
            <React.Fragment key={circleIndex}>
              <div
                className="absolute border border-gray-300/20 rounded-full"
                style={{
                  width: circle.radius * 2,
                  height: circle.radius * 2,
                  left: "50%",
                  top: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              />
              {circle.skills.map((skill, index) => {
                const angle = (index / circle.skills.length) * 360 + rotation;
                const x = Math.cos(angle * (Math.PI / 180)) * circle.radius;
                const y = Math.sin(angle * (Math.PI / 180)) * circle.radius;

                return (
                  <SkillIcon
                    key={skill.name}
                    skill={skill}
                    x={x}
                    y={y}
                    isGrid={false}
                  />
                );
              })}
            </React.Fragment>
          ))}
        </div>
      )}
    </div>
  );
}
