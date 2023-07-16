import About from "../components/About";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Nathan Ojieabu",
  description: "About Nathan Ojieabu",
};

const AboutPage = () => {
  return (
    <div>
      <About />
    </div>
  );
};

export default AboutPage;
