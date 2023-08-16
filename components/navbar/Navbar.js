import { useContext, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import Logo from "components/Logo";
import AboutMenu from "components/navbar/AboutMenu";
import { RespContext } from "helpers/responsiveComponent";
import { useToggleContainer } from "helpers/useRedux";
import { about, clientPortal } from "static/navbar/NAVBAR";

const Navbar = () => {
  // sets state to open navbar in mobile:
  const [isShowingInMobile, setIsShowingInMobile] =
    useToggleContainer("mobile");
  // this is to control the behavior of the navbar in the about site:
  const [openNavbar, toggleNavbar] = useToggleContainer("aboutSite");
  const [closeAll, setCloseAll] = useToggleContainer();
  const fullNavigation = [clientPortal, ...about];
  const MobileBurger = isShowingInMobile ? XMarkIcon : Bars3Icon;
  const { pathname } = useRouter();

  const useMediaQuery = useContext(RespContext);
  const isBreakpoint = useMediaQuery(640);

  const navbarInAbout = {
    animation: {
      y:
        pathname === "/about" && !isBreakpoint
          ? !openNavbar
            ? [0, -50]
            : [-50, 0]
          : 0,
      opacity:
        pathname === "/about" && !isBreakpoint
          ? !openNavbar
            ? [1, 0]
            : [0, 1]
          : 1,
    },
    transition: { duration: 0.7, delay: 0.2 },
  };

  const buttonNavbarInAbout = {
    animation: {
      y: openNavbar ? [0, 40] : [40, 0],
      opacity: openNavbar ? [1, 0] : [0, 1],
    },
  };

  const containerNavbarMobile = {
    visible: {
      opacity: 1,
      height: "auto",
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
    hidden: {
      opacity: 0,
      height: 0,
    },
  };
  const navbarMobileItems = {
    visible: {
      opacity: 1,
      x: 0,
    },
    hidden: {
      opacity: 0,
      x: "-100%",
    },
  };

  useEffect(() => {
    () => !isBreakpoint && setCloseAll();
  }, [isBreakpoint, closeAll, setCloseAll]);

  return (
    <>
      <motion.div
        as="nav"
        animate={navbarInAbout.animation}
        transition={navbarInAbout.transition}
        onMouseEnter={() => !isBreakpoint && toggleNavbar()}
        onMouseLeave={() => !isBreakpoint && toggleNavbar()}
        className="fixed bg-gradient-to-r from-gray-900 to-blue-primary z-50 pb-5"
      >
        <div className="w-screen px-2 sm:px-6 lg:px-10">
          <div className="relative flex h-16 justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* Mobile menu button */}
              <button
                onClick={() => setIsShowingInMobile()}
                className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 "
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
        {isShowingInMobile && (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerNavbarMobile}
            transition={{ duration: 0.5, delayChildren: 2 }}
            className="relative inset-x-0 top-0 -z-10 bg-white shadow-lg ring-1 ring-gray-900/5 w-screen"
          >
            <div className="mx-auto px-6 py-6 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-0 sm:py-10 lg:grid-cols-4 lg:gap-4 lg:px-8 xl:gap-8">
              {fullNavigation.map((item) => (
                <motion.div
                  key={item.name}
                  variants={navbarMobileItems}
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
                      onClick={() => setCloseAll()}
                    >
                      {item.name}
                      <span className="absolute inset-0" />
                    </Link>
                    <p className="mt-1 text-blue-primary">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </motion.div>
      {/* // this is to control the behavior of the navbar in the about site: */}
      {pathname === "/about" && !isBreakpoint && (
        <motion.div
          animate={buttonNavbarInAbout.animation}
          transition={navbarInAbout.transition}
          onMouseEnter={() => toggleNavbar()}
          onMouseLeave={() => toggleNavbar()}
          className="fixed w-screen flex justify-center cursor-pointer z-40"
        >
          <button className="bg-orange-tertiary/40 px-5 rounded-b-lg">
            <Bars3Icon className="h-6 text-gray-800" />
          </button>
        </motion.div>
      )}
    </>
  );
};

export default Navbar;
