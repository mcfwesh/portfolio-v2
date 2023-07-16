import Projects from "../components/Projects";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Nathan Ojieabu",
  description: "Projects by Nathan Ojieabu",
};

const ProjectPage = () => {
  return (
    <div>
      <Projects />
    </div>
  );
};

export default ProjectPage;
