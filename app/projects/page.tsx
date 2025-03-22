import type { Metadata } from "next";

import Projects from "../components/Projects";
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
