"use client";
import Link from "next/link";
import { initFlowbite } from "flowbite";
import ThemeToggle from "./ThemeToggle";
import config from "../lib/config";
import { CloseIcon, HamburgerIcon } from "./Icons";
import { motion, useCycle } from "framer-motion";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

type Props = {
  darkMode: boolean;
  updateTheme: Function;
};

const Navbar = () => {
  const path = usePathname();
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
    <div>
      {/* Desktop Navbar */}

      <div className="hidden w-full items-center justify-between md:flex">
        <Link href="/">
          <Image alt="logo" width={200} height={200} src="/home/logo.png" />
        </Link>
        <nav className="flex flex-row items-center justify-center">
          {config.navbar.items.map((item: any, i: number) => {
            const isActive = path.endsWith(item.url) || path.includes(item.url);
            return (
              <Link
                className={` ${
                  isActive &&
                  "underline decoration-sky-600 decoration-2 underline-offset-4"
                } group my-1 font-bold transition duration-300 hover:text-sky-600  active:text-light  dark:hover:text-sky-600 md:mx-4 md:my-0`}
                href={item.url}
              >
                {item.text}
              </Link>
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
        <Link href="/">
          <Image alt="logo" width={150} height={150} src="/home/logo.png" />
        </Link>

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
          <nav className=" absolute left-[50%] top-[-50%] z-30 w-full translate-x-[-50%] translate-y-[15%] transform overflow-x-clip rounded-md bg-dark py-36 text-lg font-bold text-light opacity-[75%] backdrop-blur-xl dark:bg-light dark:text-dark   md:hidden">
            <div className="flex flex-col items-center justify-center">
              {config.navbar.items.map((item: any, i: number) => {
                const isActive =
                  path.endsWith(item.url) || path.includes(item.url);
                return (
                  <Link
                    className={` ${
                      isActive &&
                      "underline decoration-sky-600 decoration-2 underline-offset-4"
                    } group my-1 text-2xl font-bold transition duration-300 hover:text-sky-600  dark:hover:text-sky-600 md:mx-4 md:my-0`}
                    href={item.url}
                    onClick={() => setShowMobileMenu(false)}
                  >
                    {item.text}
                  </Link>
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
          </nav>
        )}
      </div>
    </div>
  );
};

export default Navbar;
