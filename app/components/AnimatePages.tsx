"use client";

import { AnimatePresence } from "framer-motion";
import React from "react";
import { usePathname } from "next/navigation";

const AnimatePages = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  return (
    <AnimatePresence initial={false} mode="wait" key={pathname}>
      <div key={pathname}>{children}</div>
    </AnimatePresence>
  );
};

export default AnimatePages;
