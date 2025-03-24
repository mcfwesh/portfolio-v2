"use client";
import { initFlowbite } from "flowbite";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import config from "../lib/config";
import { CloseIcon, HamburgerIcon } from "./Icons";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const path = usePathname();
  const [darkMode, setDarkMode] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);

  useEffect(() => {
    initFlowbite();
  });

  useEffect(() => {
    const darkModeStorage = localStorage.getItem("darkMode");
    if (darkModeStorage === "true") {
      setDarkMode(true);
      document.documentElement.className = "dark";
    } else if (darkModeStorage === "false") {
      setDarkMode(false);
      document.documentElement.className = "light";
    } else {
      localStorage.setItem("darkMode", "true");
      document.documentElement.className = "dark";
      setDarkMode(true);
    }
  }, []);

  return (
    <div>
      {/* Desktop Navbar */}

      <div className="mx-auto hidden max-w-screen-xl items-center justify-between md:flex">
        <Link href="/">
          <Image
            alt="logo"
            width={200}
            height={200}
            style={{ height: "auto", width: "auto" }}
            src="/home/logo.png"
          />
        </Link>
        <nav className="flex flex-row items-center justify-center">
          {config.navbar.items.map((item) => {
            const isActive = path.endsWith(item.url) || path.includes(item.url);
            return (
              <Link
                className={` ${
                  isActive &&
                  "underline decoration-sky-600 decoration-2 underline-offset-4"
                } group my-1 font-bold transition duration-300 hover:text-sky-600  active:text-light  dark:hover:text-sky-600 md:mx-4 md:my-0`}
                href={item.url}
                key={item.url}
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
          <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
        </nav>
      </div>

      {/* Mobile Navbar */}

      <div className=" relative flex justify-between md:hidden">
        <Link href="/">
          <Image
            alt="logo"
            width={150}
            height={150}
            src="/home/logo.png"
            style={{ height: "auto", width: "auto" }}
          />
        </Link>

        <div className=" flex items-center justify-center space-x-6">
          <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
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
              {config.navbar.items.map((item) => {
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
                    key={item.url}
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
