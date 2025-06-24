"use client";
import React from "react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { fadeUp , animation , hoverScale } from "@/animation";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <motion.button 
    {...animation}
    {...fadeUp}
    {...hoverScale}

      className="p-3 rounded-xl bg-purple-500 mt-6 text-white   cursor-pointer"
      onClick={toggleTheme}
    >
      {theme === "dark" ? "Light" : "Dark"} Mode
    </motion.button>
  );
}
