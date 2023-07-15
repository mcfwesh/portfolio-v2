"use client";
import config from "../lib/config";
import { motion } from "framer-motion";
import Button from "./Button";
import Link from "next/link";

const Hero = () => {
  return (
    <section id="hero" className="flex w-full items-center">
      <motion.div
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          delay: 0.5,
          duration: 0.8,
          type: "spring",
          stiffness: 100,
          damping: 20,
        }}
      >
        <div className="flex flex-col items-center justify-between  space-y-6 md:flex-row">
          <div className="relative  w-1/2 md:w-1/4">
            <svg
              className="dar z-10 rotate-[103] transform  animate-[spin_12s_linear_infinite] fill-dark font-black uppercase text-transparent dark:fill-light "
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
              className="absolute left-[50%] top-[50%] h-[80%] w-[80%] translate-x-[-50%] translate-y-[-50%] transform  rounded-full bg-sky-500 text-center  hover:bg-sky-600"
              href={config.hero.ctaSpinner.url}
            >
              <span className="absolute left-[50%] top-[50%] w-full translate-x-[-50%] translate-y-[-50%] transform text-center text-2xl">
                {config.hero.ctaSpinner.innerText}
              </span>
            </Link>
          </div>
          <div className="flex flex-col  md:w-1/2">
            <div className="text-3xl font-bold md:text-6xl md:leading-[1.2]">
              <div className="flex space-x-2">
                <div>
                  Hi, my name is{" "}
                  <p className="text-blue-500">
                    {config.name.split(" ").slice(0, -1).join()}
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-8 text-justify text-sm md:text-lg">
              <p> {config.description}</p>
            </div>
            <div className="mt-6 flex justify-center space-x-3 md:justify-start">
              {config.hero.cta.map(
                (cta: { url: string; text: string }, i: number) => (
                  <Button
                    buttonClassName={
                      i === 1
                        ? "bg-transparent underline underline-offset-2 hover:bg-transparent"
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
                )
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;