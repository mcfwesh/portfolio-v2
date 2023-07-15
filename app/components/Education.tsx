"use client";

import config from "../lib/config";
import Section from "./Section";
const Education = () => {
  return (
    <Section title="Education" sectionId="education">
      <ol className="relative border-l-4 border-dark dark:border-light">
        {config.education.map((education, index) => (
          <li key={index} className="mb-10 ml-6">
            <span className="absolute -left-3.5 flex h-6 w-6  animate-[spin_3s_linear_infinite] items-center justify-center rounded-full bg-sky-500 ring-4 ring-dark dark:ring-light">
              <svg
                className="h-2.5 w-2.5 animate-pulse text-light"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
              </svg>
            </span>
            <div className="flex space-x-2">
              <h3 className="mb-1 flex items-center text-2xl font-semibold  dark:text-light">
                {education.degree}
              </h3>
            </div>

            <time className="mb-2 block  font-normal leading-none text-gray-500 dark:text-gray-400">
              {education.date} | {education.school} | {education.country}
            </time>
            <p className="mb-4 font-normal ">{education.description}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
};

export default Education;
