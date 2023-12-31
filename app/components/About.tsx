"use client";

import Biography from "./Biography";
import Certifications from "./Certifications";
import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skills";
import TransitionEffect from "./TransitionEffect";

const About = () => {
  return (
    <>
      <div className=" flex flex-col gap-y-24">
        <Biography />
        <Skills />
        <Certifications />
        <Experience />
        <Education />
      </div>
    </>
  );
};

export default About;
