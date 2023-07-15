import About from "../components/About";
import Certifications from "../components/Certifications";
import Education from "../components/Education";
import Experience from "../components/Experience";
import Skills from "../components/Skills";

const AboutPage = () => {
  return (
    <div className="flex flex-col gap-24">
      <About />
      <Skills />
      <Certifications />
      <Experience />
      <Education />
    </div>
  );
};

export default AboutPage;
