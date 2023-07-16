import React from "react";

const Section = ({
  sectionId,
  children,
  title,
}: {
  sectionId: string;
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <section className="mt-16 flex flex-col" id="experience">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-bold  md:text-8xl">{title}</h1>
        <div className="mt-16">{children}</div>
      </div>
    </section>
  );
};

export default Section;
