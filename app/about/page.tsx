import About from "../components/About";
import type { Metadata } from "next";
import TransitionEffect from "../components/TransitionEffect";

export const metadata: Metadata = {
  title: "About | Nathan Ojieabu",
  description: "About Nathan Ojieabu",
};

const AboutPage = () => {
  return (
    <>
      <TransitionEffect />
      <About />
    </>
  );
};

export default AboutPage;
