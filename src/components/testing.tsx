import React from "react";

//components
import { ModeToggle } from "@/components/themeToggole";
import LocaleSwitcher from "@/components/langToggle";

const Testing = () => {
  return (
    <div className="fixed top-20  left-10 flex flex-col gap-2 bg-white dark:bg-black z-50 p-10 rounded-lg ">
      <ModeToggle />
      <LocaleSwitcher />
    </div>
  );
};

export default Testing;
