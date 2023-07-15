"use client";

import Link from "next/link";
import config from "../lib/config";
import { HeartIcon } from "./Icons";

const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-between border-t-2 py-8 text-base md:flex-row md:space-x-10 md:text-lg">
      <div>
        <span>Built with ❤️ by </span>
        <Link
          className="underline underline-offset-2"
          target="_blank"
          href={config.github.url}
        >
          {config.name}
        </Link>
      </div>

      <div className="flex ">
        <p className=" text-[#666666] dark:text-gray-300">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
