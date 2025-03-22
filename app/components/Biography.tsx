"use client";
import config from "../lib/config";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Section from "./Section";
import {  useEffect, useRef } from "react";



const AnimatedNumbers = ({ value }: { value: string | number }) => {
  const ref = useRef<HTMLElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(Number(value));
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref} />;
};

const Biography = () => {
  return (
    <Section title="About" sectionId="about">
      <div className="flex flex-col  justify-center gap-x-16 space-y-6  md:flex-row">
        <div className="flex flex-col justify-center  md:w-1/2 ">
          <h4 className=" font-bold text-gray-500  md:text-xl">Biography</h4>
          {config.about.description.map((paragraph, index) => (
            <span
              key={index}
              className="mt-4 w-full text-justify font-medium md:text-lg "
            >
              {paragraph.text}
            </span>
          ))}
        </div>
        <div className=" flex items-center justify-center space-x-3 md:flex-col md:space-y-6">
          {config.about.careerSummary.map((summary, index) => (
            <div
              className="flex flex-col items-center justify-center"
              key={index}
            >
              <span className=" text-2xl font-bold md:text-7xl">
                <AnimatedNumbers value={summary.description} />+
              </span>
              <span className="h-10 text-center text-sm ">{summary.title}</span>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Biography;
