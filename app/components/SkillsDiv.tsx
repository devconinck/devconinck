"use client";

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
  { name: "Node.js", svg: "/skills/nodejs.svg" },
  { name: "Git", svg: "/skills/git.svg" },
];

export default function SkillsShowcase() {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prev) => (prev + 1) % 360);
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[500px] flex items-center justify-center bg-gradient-to-b from-background to-background/80">
      <div className="absolute text-center">
        <h2 className="text-3xl font-bold mb-2">My Skills</h2>
        <p className="text-muted-foreground">
          Hover over the icons to learn more
        </p>
      </div>
      {skillsSvgs.map((skill, index) => {
        const angle = (index / skillsSvgs.length) * 360;
        const x = Math.cos((angle - rotation) * (Math.PI / 180)) * 150;
        const y = Math.sin((angle - rotation) * (Math.PI / 180)) * 150;

        return (
          <motion.div
            key={skill.name}
            className="absolute w-16 h-16 flex items-center justify-center"
            style={{
              transform: `translate(${x}px, ${y}px)`,
            }}
            whileHover={{ scale: 1.2 }}
          >
            <Image
              src={skill.svg}
              alt={skill.name}
              width={48}
              height={48}
              className="w-12 h-12"
            />
            <div className="absolute opacity-0 bg-background/80 text-foreground px-2 py-1 rounded transition-opacity duration-200 hover:opacity-100">
              {skill.name}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
