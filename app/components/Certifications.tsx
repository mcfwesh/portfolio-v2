"use client";

import Image from "next/image";
import Link from "next/link";

import config from "../lib/config";
import Section from "./Section";

const Certifications = () => {
  return (
    <Section sectionId="certifications" title="Certifications">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
        {config.certifications.map((certification, index) => (
          <div
            key={index}
            className="flex flex-col rounded-lg border border-gray-200 bg-light px-5  py-5 shadow-md shadow-dark dark:border-gray-700  dark:bg-gray-800 dark:shadow-light"
          >
            <Link
              href={certification.certificateUrl}
              target="_blank"
              className="mx-auto  transform rounded-lg transition duration-500 ease-in-out hover:scale-110 "
            >
              <Image
                className=""
                src={certification.logo}
                width={300}
                height={300}
                alt={certification.certificateUrl}
              />
            </Link>
            <div className=" mt-6 flex flex-col justify-between space-y-6">
              <h5 className="h-32 text-center text-2xl  font-bold tracking-tight text-gray-900 underline-offset-2 hover:underline dark:text-light">
                {certification.title}
              </h5>
              <div className="mb-auto mt-auto flex items-center justify-between  ">
                <Link
                  href={certification.certificateUrl}
                  target="_blank"
                  className={` text-2xl underline underline-offset-2 hover:text-sky-500`}
                >
                  Certificate
                </Link>

                <Link
                  className={` text-2xl  underline underline-offset-2 hover:text-sky-500`}
                  href={certification.verifyUrl}
                  target="_blank"
                >
                  Verify
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Certifications;
