"use client";
import Image from "next/image";
import Button from "./Button";
import config from "../lib/config";
import { motion } from "framer-motion";
import Section from "./Section";

const About = () => {
  return (
    <Section title="About" sectionId="about">
      <div className="flex flex-col justify-between  md:flex-row">
        <div className="flex flex-col  justify-center md:w-1/2 ">
          <h4 className=" font-bold text-gray-500  md:text-xl">Biography</h4>
          {config.about.description.map((paragraph, index) => (
            <span key={index} className="mt-4 w-full text-justify ">
              {paragraph.text}
            </span>
          ))}
        </div>
        <div className="flex flex-col items-center justify-between space-y-12">
          {config.about.careerSummary.map((summary, index) => (
            <div className="flex flex-col items-center " key={index}>
              <span className=" text-3xl font-bold md:text-7xl">
                {summary.description}
              </span>
              <span>{summary.title}</span>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default About;
