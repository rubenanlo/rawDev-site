import { useContext, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { EllipsisVerticalIcon } from "@heroicons/react/20/solid";
import { RespContext } from "helpers/responsiveComponent";
import { classNames } from "helpers/setClassNames";

const steps = [
  { id: "Brief bio", href: "#brief-bio" },
  { id: "Experience", href: "#experience" },
  { id: "Project portfolio", href: "#projects" },
];

const AboutNavbar = () => {
  const [openSideBar, setOpenSideBar] = useState(false);
  const useMediaQuery = useContext(RespContext);
  const isBreakpoint = useMediaQuery(640);
  const router = useRouter();
  const isInView = false;

  const aboutNavbarToggle = {
    animation: {
      x: openSideBar ? [0, 20] : [20, 0],
      opacity: openSideBar ? [1, 0] : [0, 1],
    },
  };
  const aboutNavbarPanel = {
    animation: {
      x: openSideBar ? [-100, 0] : [0, -100],
      opacity: openSideBar ? [0, 1] : [1, 0],
    },
  };
  return (
    <>
      <motion.nav
        animate={aboutNavbarPanel.animation}
        aria-label="Progress"
        className="fixed flex items-center sm:items-start top-20 sm:top-28 pl-5 h-full z-10 sm:z-0"
      >
        <ol role="list" className="space-y-4">
          {steps.map((step) => (
            <li key={step.name} className="">
              <Link
                href={step.href}
                onClick={() => setOpenSideBar(false)}
                className={classNames(
                  isInView
                    ? "border-orange-tertiary"
                    : "border-gray-200, hover:border-gray-300",
                  "flex flex-col border-l-4  py-2 pl-4"
                )}
                aria-current="step"
              >
                <span
                  className={classNames(
                    isInView
                      ? "text-orange-tertiary"
                      : "text-gray-400 hover:text-gray-500",
                    "text-sm font-medium "
                  )}
                >
                  {step.id}
                </span>
                <span className="text-sm font-medium">{step.name}</span>
              </Link>
            </li>
          ))}
        </ol>
      </motion.nav>
      {router.pathname === "/about" && isBreakpoint && (
        <motion.div
          animate={aboutNavbarToggle.animation}
          transition={aboutNavbarToggle.transition}
          onClick={() => setOpenSideBar(!openSideBar)}
          className="fixed h-screen flex items-center cursor-pointer z-20"
        >
          <button className="bg-orange-tertiary py-5 rounded-r-lg">
            <EllipsisVerticalIcon className="w-6" />
          </button>
        </motion.div>
      )}
    </>
  );
};

export default AboutNavbar;
