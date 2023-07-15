"use client";
import Link from "next/link";
import { initFlowbite } from "flowbite";
import ThemeToggle from "./ThemeToggle";
import config from "../lib/config";
import { CloseIcon, HamburgerIcon } from "./Icons";
import { motion, useCycle } from "framer-motion";
import { useState, useEffect } from "react";

type Props = {
  darkMode: boolean;
  updateTheme: Function;
};

const Navbar = () => {
  const [darkMode, setDarkMode] = useState<boolean>(true);
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<number>(0);

  useEffect(() => {
    initFlowbite();
  });

  useEffect(() => {
    const isDarkMode = localStorage.getItem("theme");
    if (isDarkMode) {
      setDarkMode(isDarkMode === "true");
      document.documentElement.className = isDarkMode === "true" ? "dark" : "";
    }
  }, []);

  const updateTheme = (isDarkMode: boolean) => {
    document.documentElement.className = isDarkMode ? "dark" : "";
    setDarkMode(isDarkMode);
  };

  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        delay: 0.5,
        duration: 0.8,
        type: "spring",
        stiffness: 100,
        damping: 20,
      }}
    >
      {/* Desktop Navbar */}

      <div className="hidden w-full items-center justify-between md:flex">
        <nav className="flex flex-row items-center justify-center">
          {config.navbar.items.map((item: any, i: number) => {
            return (
              <motion.div
                className="flex items-center"
                whileTap={{ scale: 0.9 }}
                key={i}
                onClick={() => setSelectedItem(i)}
              >
                <Link
                  className={` ${
                    selectedItem === i &&
                    "underline decoration-sky-600 decoration-2 underline-offset-4"
                  } group my-1 font-bold transition duration-300 hover:text-sky-600  active:text-light  dark:hover:text-sky-600 md:mx-4 md:my-0`}
                  href={item.url}
                >
                  {item.text}
                </Link>
              </motion.div>
            );
          })}
        </nav>
        <nav className="flex items-center justify-center space-x-6 ">
          {[config.github, config.linkedin].map((social) => (
            <Link
              key={social.url}
              target="_blank"
              rel="noopener"
              className="my-1 transform cursor-pointer text-sm font-bold transition-colors duration-200"
              href={social.url}
            >
              <social.logo />
              <span className="sr-only">Github link</span>
            </Link>
          ))}
          <ThemeToggle darkMode={darkMode} updateTheme={updateTheme} />
        </nav>
      </div>

      {/* Mobile Navbar */}

      <div className=" relative flex justify-between md:hidden">
        <motion.div whileTap={{ scale: 0.9 }}>
          <Link
            className="flex transform space-x-2 text-2xl font-semibold transition-colors duration-200"
            href="/"
          >
            <div className="text-base">{config.name}</div>
          </Link>
        </motion.div>
        <div className=" flex items-center justify-center space-x-6">
          <ThemeToggle darkMode={darkMode} updateTheme={updateTheme} />
          {!showMobileMenu ? (
            <HamburgerIcon
              setShowMobileMenu={setShowMobileMenu}
              showMobileMenu={showMobileMenu}
            />
          ) : (
            <CloseIcon
              showMobileMenu={showMobileMenu}
              setShowMobileMenu={setShowMobileMenu}
            />
          )}
        </div>
        {showMobileMenu && (
          <motion.nav className=" absolute left-[50%] top-[-50%] z-10 w-full translate-x-[-50%] translate-y-[15%] transform overflow-x-clip rounded-md bg-dark py-36 text-lg font-bold text-light opacity-[95%] dark:bg-light dark:text-dark   md:hidden">
            <div className="flex flex-col items-center justify-center">
              {config.navbar.items.map((item: any, i: number) => {
                return (
                  <motion.div
                    className="flex items-center"
                    whileTap={{ scale: 0.9 }}
                    key={i}
                    onClick={() => setSelectedItem(i)}
                  >
                    <Link
                      className={` ${
                        selectedItem === i &&
                        "underline decoration-sky-600 decoration-2 underline-offset-4"
                      } group my-1 font-bold transition duration-300 hover:text-sky-600  dark:hover:text-sky-600 md:mx-4 md:my-0`}
                      href={item.url}
                    >
                      {item.text}
                    </Link>
                  </motion.div>
                );
              })}
            </div>
            <div className="mt-6 flex flex-wrap items-center justify-center space-x-6 ">
              {[config.github, config.linkedin].map((social) => (
                <Link
                  key={social.url}
                  target="_blank"
                  rel="noopener"
                  className="my-1 transform cursor-pointer text-sm font-bold transition-colors duration-200"
                  href={social.url}
                >
                  <motion.div whileTap={{ scale: 0.85 }}>
                    <social.logo />
                  </motion.div>
                  <span className="sr-only">{social.url}</span>
                </Link>
              ))}
            </div>
          </motion.nav>
        )}
      </div>
    </motion.div>
  );
};

export default Navbar;
