"use client";
import config from "../lib/config";
import Section from "./Section";

const Skills = () => {
  return (
    <Section title="Skills" sectionId="skills">
      <div className="flex w-full flex-col justify-between gap-24 md:flex-row">
        {config.skills.map((group, index) => (
          <div key={index} className="flex  flex-col">
            <div className="flex  items-center space-x-6">
              {<group.logo />}
              <h2 className="text-2xl md:text-4xl">{group.title}</h2>
            </div>
            <ol className="ml-12">
              {group.skills.map((skill, index) => (
                <li className=" mt-6 flex items-center space-x-6" key={index}>
                  {<skill.logo />}
                  <span className="text-xl md:text-2xl"> {skill.name}</span>
                </li>
              ))}
            </ol>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;
