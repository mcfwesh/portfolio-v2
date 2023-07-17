"use client";
import config from "../lib/config";
import { AnimatePresence, motion } from "framer-motion";
import Button from "./Button";
import Link from "next/link";
import TransitionEffect from "./TransitionEffect";

const quote = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.08,
    },
  },
};

const singleWord = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

const Hero = () => {
  return (
    <>
      <section id="hero" className="mx-auto flex  items-center justify-center">
        <div className="flex w-full flex-col items-center justify-between  space-y-6 md:flex-row">
          <div className="relative  w-1/2 md:w-1/4">
            <svg
              className="dar z-10 rotate-[103] transform  animate-[spin_12s_linear_infinite] fill-dark font-bold uppercase text-transparent dark:fill-light "
              viewBox="0 0 200 200"
            >
              <path
                id="textPath"
                d="M 85,0 A 85,85 0 0 1 -85,0 A 85,85 0 0 1 85,0"
                transform="translate(100,100)"
                fill="currentColor"
                strokeWidth="0"
              ></path>
              <text
                className="text-sm "
                wordSpacing={8}
                letterSpacing={5}
                textAnchor="middle"
              >
                <textPath
                  className=" animate-[spin_12s_linear_infinite] "
                  xlinkHref="#textPath"
                  startOffset="50%"
                >
                  {config.hero.ctaSpinner.outerText}
                </textPath>
              </text>
            </svg>
            <Link
              className="absolute left-[50%] top-[50%] h-[80%] w-[80%] translate-x-[-50%] translate-y-[-50%] transform rounded-full bg-sky-500  text-center font-bold text-light  hover:bg-sky-600"
              href={config.hero.ctaSpinner.url}
            >
              <span className="absolute left-[50%] top-[50%] w-full translate-x-[-50%] translate-y-[-50%] transform text-center text-2xl md:text-4xl">
                {config.hero.ctaSpinner.innerText}
              </span>
            </Link>
          </div>
          <div className="flex flex-col  md:w-3/5">
            <motion.h1
              className="text-3xl font-bold md:text-6xl md:leading-[1.2]"
              variants={quote}
              initial="initial"
              animate="animate"
            >
              {"Hi, my name is Nathan".split(" ").map((word, index) => (
                <motion.span
                  className={`${
                    word === "Nathan" && "text-sky-500"
                  } inline-block`}
                  initial="initial"
                  animate="animate"
                  key={word + "-" + index}
                  variants={singleWord}
                >
                  {word}&nbsp;
                </motion.span>
              ))}
            </motion.h1>
            <div className="mt-8 text-justify text-sm md:text-lg">
              <p> {config.description}</p>
            </div>
            <div className="mt-6 flex justify-center space-x-3 md:justify-start">
              {config.hero.cta.map(
                (cta: { url: string; text: string }, i: number) => (
                  <Link href={cta.url} target="_blank">
                    <Button
                      buttonClassName={
                        i === 1
                          ? "bg-transparent underline font-normal underline-offset-2 hover:bg-transparent"
                          : ""
                      }
                      linkClassName={
                        i === 1
                          ? "text-dark dark:text-light text-lg md:text-xl"
                          : "text-light text-lg md:text-xl"
                      }
                      key={i}
                      link={cta.url}
                    >
                      {cta.text}
                    </Button>
                  </Link>
                )
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
