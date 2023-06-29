import Link from "next/link";
// import { useRouter } from "next/router";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Logo from "components/Logo";
import { about, clientPortal } from "static/navbar/NAVBAR";
import { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import AboutMenu from "components/navbar/AboutMenu";
import { RespContext } from "helpers/responsiveComponent";

const Navbar = () => {
  // const { pathname } = useRouter();
  const [isShowingInMobile, setIsShowingInMobile] = useState(false);
  const fullNavigation = [clientPortal, ...about.sites];
  const { callsToAction } = about;
  const MobileBurger = isShowingInMobile ? XMarkIcon : Bars3Icon;
  const useMediaQuery = useContext(RespContext);
  const isBreakpoint = useMediaQuery(640);
  const colorLogo = (isBreakpoint && isShowingInMobile && "blue") || "orange";

  useEffect(() => {
    !isBreakpoint && setIsShowingInMobile(false),
      [isShowingInMobile, isBreakpoint];
  });

  return (
    <div as="nav">
      <div className="fixed bg-gradient-to-r from-gray-900 to-blue-primary z-10 pb-5">
        <div className="w-screen px-2 sm:px-6 lg:px-10">
          <div className="relative flex h-16 justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* Mobile menu button */}
              <button
                onClick={() => setIsShowingInMobile(!isShowingInMobile)}
                className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 "
              >
                <span className="sr-only">Open main menu</span>
                <MobileBurger className="block h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="flex flex-1 items-center justify-end pr-10 sm:items-stretch sm:justify-between sm:mr-0">
              <div className="flex flex-shrink-0 items-center">
                <Logo color={colorLogo} />
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8 sm:items-center">
                {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
                <Link
                  href={clientPortal.href}
                  className="h-full inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-orange-quaternary hover:border-orange-primary"
                >
                  {clientPortal.name}
                </Link>
                <AboutMenu about={about} />
              </div>
            </div>
          </div>
        </div>
        {/* Mobile version of the navbar */}
        <motion.div
          animate={{
            opacity: isShowingInMobile ? [0, 1] : [1, 0],
            display: isShowingInMobile ? "block" : "none",
          }}
        >
          <div className=" absolute inset-x-0 top-0 -z-10 bg-white pt-16 shadow-lg ring-1 ring-gray-900/5 w-screen">
            <div className="mx-auto px-6 py-6 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-0 sm:py-10 lg:grid-cols-4 lg:gap-4 lg:px-8 xl:gap-8">
              {fullNavigation.map((item) => (
                <div
                  key={item.name}
                  className="group relative -mx-3 flex gap-6 rounded-lg p-3 text-sm leading-6 hover:bg-gray-50 sm:flex-col sm:p-6"
                >
                  <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                    <item.icon
                      className="h-6 w-6 text-blue-primary group-hover:text-orange-secondary"
                      aria-hidden="true"
                    />
                  </div>
                  <div>
                    <Link
                      href={item.href}
                      className="font-semibold text-blue-primary"
                    >
                      {item.name}
                      <span className="absolute inset-0" />
                    </Link>
                    <p className="mt-1 text-blue-primary">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-gray-50">
              <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="divide-y divide-gray-900/5 sm:grid-cols-3 sm:divide-x sm:divide-y-0 sm:border-x sm:border-gray-900/5">
                  {callsToAction.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="flex items-center gap-x-2.5 p-3 px-10 text-sm font-semibold leading-6 text-blue-primary hover:bg-gray-100 sm:justify-center sm:px-0"
                    >
                      <item.icon
                        className="h-5 w-5 flex-none text-blue-primary"
                        aria-hidden="true"
                      />
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Navbar;
