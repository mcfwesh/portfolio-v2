"use client";

import Link from "next/link";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import config from "../lib/config";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import Section from "./Section";
import Badge from "./Badge";
import TransitionEffect from "./TransitionEffect";

const list = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};
const item = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

const Projects = () => {
  return (
    <>
      <TransitionEffect />
      <Section title="Projects" sectionId="projects">
        {config.projects.map((group, index) => (
          <div key={index}>
            <div className="flex items-center space-x-6">
              {<group.logo />}
              <h2 className="text-2xl md:text-4xl">{group.title}</h2>
            </div>
            <motion.div
              variants={list}
              className="mx-auto my-16 grid grid-cols-1 gap-12 lg:grid-cols-3"
            >
              {group.projects.map((project, index) => (
                <motion.div
                  variants={item}
                  key={index}
                  className="flex flex-col rounded-lg border border-gray-200 bg-light px-5  py-5 shadow-md shadow-dark dark:border-gray-700  dark:bg-gray-800 dark:shadow-light"
                >
                  <div className="mb-6 self-end">
                    <Badge>{project.status}</Badge>
                  </div>

                  <Link
                    href={project.demo ? project.demo : project.github.url}
                    target="_blank"
                    className="transform rounded-lg shadow-md  transition duration-500 ease-in-out hover:scale-110 "
                  >
                    <Image className="" src={project.image} alt="" />
                  </Link>
                  <div className=" mt-6 flex flex-col justify-between space-y-6">
                    <div className="flex items-center justify-center space-x-6">
                      {project.technologies.map((technology, index) => (
                        <span key={index}>
                          {<technology.logo size="1.5rem" />}
                        </span>
                      ))}
                    </div>

                    <Link
                      className=""
                      href={project.demo ? project.demo : project.github.url}
                      target="_blank"
                    >
                      <h5 className="h-32 text-center text-2xl font-bold tracking-tight text-gray-900 underline-offset-2 hover:underline dark:text-light">
                        {project.title}
                      </h5>
                    </Link>
                    <div className="mb-auto mt-auto flex items-center justify-between  ">
                      <Link
                        href={project.demo}
                        target="_blank"
                        className={`${
                          !project.demo && "invisible"
                        } text-2xl underline underline-offset-2 hover:text-sky-500`}
                      >
                        Visit
                      </Link>
                      <Link
                        className={`${!project.github.url && "invisible"}`}
                        href={project.github.url}
                        target="_blank"
                      >
                        {<project.github.logo size="2.5rem" />}
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        ))}
      </Section>
    </>
  );
};

export default Projects;
