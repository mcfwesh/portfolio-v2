"use client";
import { motion } from "framer-motion";

import { MoonIcon, SunIcon } from "./Icons";

const ThemeToggle = ({
  darkMode,
  setDarkMode,
}: {
  darkMode: boolean;
  setDarkMode: (darkMode: boolean) => void;
}) => {
  const toggleDarkMode = () => {
    if (darkMode) {
      localStorage.setItem("darkMode", "false");
      setDarkMode(false);
      document.documentElement.className = "light";
    } else {
      localStorage.setItem("darkMode", "true");
      setDarkMode(true);
      document.documentElement.className = "dark";
    }
  };

  return (
    <motion.div whileTap={{ scale: 0.8 }} className="flex items-center">
      <button
        type="button"
        aria-pressed="false"
        onClick={() => toggleDarkMode()}
      >
        {darkMode ? <SunIcon /> : <MoonIcon />}
        <span className="sr-only">Theme Toggle</span>
      </button>
    </motion.div>
  );
};

export default ThemeToggle;
