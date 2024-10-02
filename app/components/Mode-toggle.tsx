"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [isOn, setIsOn] = React.useState(false);

  const toggleSwitch = () => {
    setIsOn(!isOn);
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30,
  };

  return (
    <Button
      onClick={toggleSwitch}
      className={`flex items-center h-[30px] w-[60px] rounded-full bg-zinc-100 p-[2px] shadow-inner hover:cursor-pointer dark:bg-zinc-700 ${
        isOn ? "justify-end" : "justify-start"
      }`}
    >
      <motion.div
        className="flex items-center justify-center h-[24px] w-[24px] rounded-full bg-black/90"
        layout
        transition={spring}
      >
        <motion.div whileTap={{ rotate: 360 }}>
          {isOn ? (
            <Sun className="h-4 w-4 text-yellow-300" />
          ) : (
            <Moon className="h-4 w-4 text-slate-200" />
          )}
        </motion.div>
      </motion.div>
    </Button>
  );
}
