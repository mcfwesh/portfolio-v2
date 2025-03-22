"use client";

import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import React, { Fragment } from "react";

const AnimatePages = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  return (
    <AnimatePresence mode="wait" key={pathname}>
      <Fragment key={pathname}>{children}</Fragment>
    </AnimatePresence>
  );
};

export default AnimatePages;
