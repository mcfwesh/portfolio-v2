import Projects from "../components/Projects";
import type { Metadata } from "next";
import TransitionEffect from "../components/TransitionEffect";

export const metadata: Metadata = {
  title: "Projects | Nathan Ojieabu",
  description: "Projects by Nathan Ojieabu",
};

const ProjectPage = () => {
  return (
    <>
      <TransitionEffect />
      <Projects />
    </>
  );
};

export default ProjectPage;
