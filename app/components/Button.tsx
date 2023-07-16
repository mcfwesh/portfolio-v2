"use client";
import Link from "next/link";
import { motion } from "framer-motion";

interface Props {
  link: string;
  externalLink?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
  linkClassName?: string;
  buttonClassName?: string;
}

const Button = (props: Props) => {
  const {
    link,
    children,
    externalLink,
    onClick,
    buttonClassName,
    linkClassName,
  } = props;

  return (
    <motion.div whileTap={{ scale: 0.9 }} className="w-fit">
      <button
        className={`mt-4 inline-flex items-center rounded-md bg-blue-500 p-3 px-8 font-bold  text-light transition duration-150 ease-in hover:bg-blue-600  ${buttonClassName}`}
        onClick={onClick || (() => {})}
      >
        <Link
          target={externalLink ? "_blank" : undefined}
          className={`${linkClassName}`}
          href={link}
        >
          {children}
        </Link>
      </button>
    </motion.div>
  );
};

export default Button;
