import { motion } from "framer-motion";
import { AiOutlineClose } from "react-icons/ai";
import {
  FaAws,
  FaCloud,
  FaCode,
  FaDocker,
  FaGithub,
  FaHeart,
  FaHourglassHalf,
  FaLinkedin,
  FaLinux,
  FaMoon,
  FaNetworkWired,
  FaNodeJs,
  FaPython,
  FaReact,
  FaSun,
  FaTwitter,
} from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import {
  SiHandlebarsdotjs,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiTerraform,
  SiTypescript,
} from "react-icons/si";

interface Props {
  width?: string;
  height?: string;
  color?: string;
  strokeWidth?: number;
  url?: string;
  size?: string;
}

const CheckIcon = (props: Props) => {
  const { color, strokeWidth } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke={color || "currentColor"}
      strokeWidth={strokeWidth || 2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
      />
    </svg>
  );
};

const GithubIcon = (props: Props) => {
  const { url, size = "1.5rem" } = props;

  return (
    <div>
      <FaGithub
        href={url}
        size={size}
        data-tooltip-target="tooltip-github"
        className={`transition-all ease-in-out  hover:scale-110 focus:outline-none active:outline-none`}
      />
      <div
        id="tooltip-github"
        role="tooltip"
        className="tooltip invisible absolute z-10 inline-block rounded-lg border border-gray-200 px-1.5 py-1 text-sm font-medium opacity-0 shadow-sm"
      >
        Github
        <div className="tooltip-arrow" data-popper-arrow></div>
      </div>
    </div>
  );
};

const globeIcon = (props: Props) => {
  const { width, height, color } = props;

  return (
    <svg width={width || "32"} height={height || "32"} viewBox="0 0 15 15">
      <g fill={color || "currentColor"} fillRule="evenodd" clipRule="evenodd">
        <path d="M7.5 1.8a5.7 5.7 0 1 0 0 11.4a5.7 5.7 0 0 0 0-11.4ZM.9 7.5a6.6 6.6 0 1 1 13.2 0a6.6 6.6 0 0 1-13.2 0Z" />
        <path d="M13.5 7.9h-12v-.8h12v.8Z" />
        <path d="M7.1 13.5v-12h.8v12h-.8zm3.275-6c0-2.173-.781-4.322-2.313-5.743l.476-.514c1.702 1.58 2.537 3.93 2.537 6.257c0 2.327-.835 4.678-2.537 6.257l-.476-.514c1.532-1.42 2.313-3.57 2.313-5.743zM4 7.5c0-2.324.808-4.673 2.458-6.253l.484.506C5.458 3.173 4.7 5.323 4.7 7.5c0 2.176.758 4.327 2.242 5.747l-.484.506C4.808 12.173 4 9.823 4 7.5z" />
        <path d="M7.5 3.958c2.17 0 4.375.401 5.87 1.236a.35.35 0 1 1-.34.612c-1.35-.754-3.422-1.148-5.53-1.148s-4.18.394-5.53 1.148a.35.35 0 1 1-.34-.612c1.495-.835 3.7-1.236 5.87-1.236zm0 6.892c2.17 0 4.375-.401 5.87-1.236a.35.35 0 1 0-.34-.612c-1.35.754-3.422 1.148-5.53 1.148s-4.18-.394-5.53-1.148a.35.35 0 1 0-.34.611c1.495.836 3.7 1.237 5.87 1.237z" />
      </g>
    </svg>
  );
};

const cloudFormationIcon = () => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 256 312"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid"
    >
      <path
        d="M16.491 215.53l2.176 2.47 109.915 31.157.498-19.313-76.98-19.318-3.767-1.359-31.842 6.363"
        fill="#B7CA9D"
      />
      <path
        d="M239.505 215.53L127.25 253l-.334-23.156 76.979-19.318 3.355-3.776 32.255 8.78"
        fill="#B7CA9D"
      />
      <path
        d="M126.916 83.165l76.979 17.941L237.75 99.5l1.755-3.393L132.25 57.5l-5.334 25.665"
        fill="#3C4929"
      />
      <path
        d="M52.1 210.526l-35.609 5.004-.991-3.697V100l.991-3.893L48.667 98.5l3.433 2.61v109.416"
        fill="#759C3E"
      />
      <path
        d="M129.08 83.165L52.1 101.106l-35.609-4.999L17.833 94l110.749-31.52.498 20.685"
        fill="#3C4929"
      />
      <path
        d="M127.846 0L0 64.531l.061 182.613 127.785 64.497 1.904-2.891v-305L127.846 0zM90.462 237.73l-73.971-22.2V96.107l73.971-22.192V237.73zM203.895 210.526l35.61 5.004L241.5 212V99.5l-1.995-3.393-35.61 5.003v109.416"
        fill="#4B612C"
      />
      <path
        d="M127.846 311.641l128.093-64.493L256 64.536 127.846 0v311.641zm37.687-237.726l73.972 22.192V215.53l-73.972 22.2V73.915z"
        fill="#759C3E"
      />
    </svg>
  );
};

const HeartIcon = () => {
  return <FaHeart className="text-red-600" />;
};

const linkedinIcon = () => {
  return (
    <div>
      <FaLinkedin
        size="1.5rem"
        data-tooltip-target="tooltip-linkedin"
        className="bg-light text-[#0077b5] transition-all ease-in-out hover:scale-110 focus:outline-none"
      />
      <div
        id="tooltip-linkedin"
        role="tooltip"
        className="tooltip invisible absolute z-10 inline-block rounded-lg border border-gray-200 px-1.5 py-1 text-sm font-medium opacity-0 shadow-sm"
      >
        Linkedin
        <div className="tooltip-arrow" data-popper-arrow></div>
      </div>
    </div>
  );
};

const MoonIcon = () => {
  return (
    <FaMoon
      size="1.5rem"
      className=" transition-all ease-in-out hover:scale-150"
    />
  );
};

const PinIcon = (props: Props) => {
  const { width, height, color } = props;

  return (
    <svg width={width || "32"} height={height || "32"} viewBox="0 0 256 256">
      <path
        fill={color || "currentColor"}
        d="M128.1 16a88.1 88.1 0 0 0-88 88c0 75.3 80 132.2 83.4 134.6a8.3 8.3 0 0 0 9.2 0c3.4-2.4 83.4-59.3 83.4-134.6a88.1 88.1 0 0 0-88-88Zm0 56a32 32 0 1 1-32 32a32 32 0 0 1 32-32Z"
      />
    </svg>
  );
};

const SunIcon = () => {
  return (
    <FaSun
      size="1.5rem"
      className=" transition-all ease-in-out hover:scale-150"
    />
  );
};

const TwitchIcon = (props: Props) => {
  const { width, height, color } = props;

  return (
    <svg width={width || "32"} height={height || "32"} viewBox="0 0 24 24">
      <path
        fill={color || "currentColor"}
        d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714Z"
      />
    </svg>
  );
};

const TwitterIcon = () => {
  return <FaTwitter />;
};

const HamburgerIcon = ({
  setShowMobileMenu,
  showMobileMenu,
}: {
  setShowMobileMenu: (showMobileMenu: boolean) => void;
  showMobileMenu: boolean;
}) => {
  return (
    <motion.div
      onClick={() => setShowMobileMenu(!showMobileMenu)}
      whileTap={{ rotate: 180 }}
    >
      <GiHamburgerMenu size="1.5rem" />
    </motion.div>
  );
};

const CloseIcon = ({
  setShowMobileMenu,
  showMobileMenu,
}: {
  setShowMobileMenu: (showMobileMenu: boolean) => void;
  showMobileMenu: boolean;
}) => {
  return (
    <motion.div
      layout
      onClick={() => setShowMobileMenu(!showMobileMenu)}
      whileTap={{ rotate: 180 }}
    >
      <AiOutlineClose size="1.5rem" />
    </motion.div>
  );
};

const CloudIcon = ({ size = "3.5rem" }: Props) => <FaCloud size={size} />;

const CodeIcon = ({ size = "3.5rem" }: Props) => <FaCode size={size} />;

const AWSIcon = ({ size = "3.5rem" }: Props) => <FaAws size={size} />;

const TypescriptIcon = ({ size = "3.5rem" }: Props) => (
  <SiTypescript size={size} />
);

const JavascriptIcon = ({ size = "3.5rem" }: Props) => (
  <SiJavascript size={size} />
);

const DockerIcon = ({ size = "3.5rem" }: Props) => <FaDocker size={size} />;

const ReactIcon = ({ size = "3.5rem" }: Props) => <FaReact size={size} />;

const TerraformIcon = ({ size = "3.5rem" }: Props) => (
  <SiTerraform size={size} />
);

const PythonIcon = ({ size = "3.5rem" }: Props) => <FaPython size={size} />;

const LinuxIcon = ({ size = "3.5rem" }: Props) => <FaLinux size={size} />;

const NetworkIcon = ({ size = "3.5rem" }: Props) => (
  <FaNetworkWired size={size} />
);

const NodeJsIcon = ({ size = "3.5rem" }: Props) => <FaNodeJs size={size} />;

const PostgresIcon = ({ size = "3.5rem" }: Props) => (
  <SiPostgresql size={size} />
);

const MongoIcon = ({ size = "3.5rem" }: Props) => <SiMongodb size={size} />;

const HandlebarsIcon = ({ size = "3.5rem" }: Props) => (
  <SiHandlebarsdotjs size={size} />
);

const HourglassIcon = ({ size = "1.5rem" }: Props) => (
  <FaHourglassHalf size={size} className={`animate-spin `} />
);

export {
  AWSIcon,
  CheckIcon,
  CloseIcon,
  cloudFormationIcon,
  CloudIcon,
  CodeIcon,
  DockerIcon,
  GithubIcon,
  globeIcon,
  HamburgerIcon,
  HandlebarsIcon,
  HeartIcon,
  HourglassIcon,
  JavascriptIcon,
  linkedinIcon,
  LinuxIcon,
  MongoIcon,
  MoonIcon,
  NetworkIcon,
  NodeJsIcon,
  PinIcon,
  PostgresIcon,
  PythonIcon,
  ReactIcon,
  SunIcon,
  TerraformIcon,
  TwitchIcon,
  TwitterIcon,
  TypescriptIcon,
};
