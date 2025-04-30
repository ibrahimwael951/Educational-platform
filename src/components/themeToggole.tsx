"use client";
import React from "react";
import { useTheme } from "next-themes";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <div className="">
      <button
        className="p-3 rounded-xl bg-gradient-to-tr from-purple-600  via-purple-600 to-blue-700  mt-6 inline-block hover:bg-purple-700 text-white duration-150 cursor-pointer"
        onClick={toggleTheme}
      >
         {theme === "dark" ? "Light" : "Dark"} Mode
      </button>
       
    </div>
  );
}
