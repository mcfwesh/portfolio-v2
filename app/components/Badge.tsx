import React from "react";

const Badge = (props: { children: React.ReactNode }) => {
  return (
    <span
      {...props}
      className="mr-2 rounded bg-sky-500 px-2.5 py-0.5 text-xs font-bold text-light"
    >
      {props.children}
    </span>
  );
};

export default Badge;
