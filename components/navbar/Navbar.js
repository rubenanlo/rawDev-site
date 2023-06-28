import Link from "next/link";
import { useRouter } from "next/router";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Logo from "components/Logo";
import { mainNavigation, contactMe, clientPortal } from "static/navbar/NAVBAR";
import { classNames } from "helpers/setClassNames";
import { useState } from "react";
import { motion } from "framer-motion";
import ContactMeMenu from "./ContactMeMenu";

const Navbar = () => {
  const { pathname } = useRouter();
  const [isShowingInMobile, setIsShowingInMobile] = useState(false);
  const fullNavigation = [...mainNavigation, clientPortal, ...contactMe];
  const MobileBurger = isShowingInMobile ? XMarkIcon : Bars3Icon;

  return (
    <div as="nav">
      <div className="fixed bg-gradient-to-r from-gray-900 to-blue-primary z-10 pb-5">
        <div className="w-screen px-2 sm:px-6 lg:px-10">
          <div className="relative flex h-16 justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* Mobile menu button */}
              <button
                onClick={() => setIsShowingInMobile(!isShowingInMobile)}
                className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 "
              >
                <span className="sr-only">Open main menu</span>
                <MobileBurger className="block h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="flex flex-1 items-center justify-end pr-10 sm:items-stretch sm:justify-between sm:mr-0">
              <div className="flex flex-shrink-0 items-center">
                <Logo />
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8 sm:items-center">
                {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
                {mainNavigation.map(({ name, href }) => (
                  <Link
                    key={name}
                    href={href}
                    className={classNames(
                      pathname == href
                        ? "border-orange-primary"
                        : "border-transparent",
                      "h-full inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium text-orange-quaternary hover:border-orange-primary"
                    )}
                  >
                    {name}{" "}
                  </Link>
                ))}
                <Link
                  href={clientPortal.href}
                  className="h-full inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-orange-quaternary hover:border-orange-primary"
                >
                  {clientPortal.name}
                </Link>
                <ContactMeMenu menu={contactMe} />
              </div>
            </div>
          </div>
        </div>
        {/* Mobile version of the navbar */}
        <motion.div
          className={classNames(
            // isShowing ? "block" : "hidden",
            "sm:hidden bg-white"
          )}
          animate={{
            opacity: isShowingInMobile ? [0, 1] : [1, 0],
            display: isShowingInMobile ? "block" : "none",
          }}
        >
          <div className="space-y-1 pb-4 pt-2">
            {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
            {fullNavigation.map(({ name, href }) => (
              <Link
                key={name}
                href={href}
                className="block py-2 pl-3 pr-4 text-base font-medium text-gray-900 hover:bg-gray-100"
              >
                {name}
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Navbar;
