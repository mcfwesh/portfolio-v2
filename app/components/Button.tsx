"use client";
import { motion } from "framer-motion";

interface Props {
  externalLink?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
  linkClassName?: string;
  buttonClassName?: string;
}

const Button = (props: Props) => {
  const { children, onClick, buttonClassName, linkClassName } = props;

  return (
    <motion.div whileTap={{ scale: 0.9 }} className="w-fit">
      <button
        className={`mt-4 inline-flex items-center rounded-md bg-blue-500 p-3 px-8 font-bold  text-light transition duration-150 ease-in hover:bg-blue-600  ${buttonClassName}`}
        onClick={onClick || (() => {})}
      >
        {children}
        <div className={`${linkClassName}`}>{children}</div>
      </button>
    </motion.div>
  );
};

export default Button;
