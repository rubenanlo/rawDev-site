import Link from "next/link";
import { useRouter } from "next/router";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Logo from "components/Logo";
import { mainNavigation, contactMe, clientPortal } from "static/navbar/NAVBAR";
import { classNames } from "helpers/setClassNames";
import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { motion } from "framer-motion";

const Navbar = () => {
  const { pathname } = useRouter();
  const [isShowing, setIsShowing] = useState(false);
  const fullNavigation = [...mainNavigation, clientPortal, ...contactMe];

  return (
    <Disclosure as="nav">
      {({ open }) => (
        <div className="fixed bg-blue-primary z-10 pb-5">
          <div className="w-screen px-2 sm:px-6 lg:px-10">
            <div className="relative flex h-16 justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 ">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
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
                  <div>
                    <div className="relative h-full">
                      <button
                        onMouseEnter={() => setIsShowing(true)}
                        onMouseLeave={() => setIsShowing(false)}
                        className="inline-flex h-full items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-orange-quaternary hover:border-b-orange-primary"
                      >
                        <div
                          className={classNames(
                            isShowing ? "absolute w-full block h-32" : "hidden"
                          )}
                        />
                        <span>Contact me</span>
                        <ChevronDownIcon
                          className="h-5 w-5"
                          aria-hidden="true"
                        />
                      </button>
                      <motion.div
                        onMouseEnter={() => setIsShowing(true)}
                        onMouseLeave={() => setIsShowing(false)}
                        initial={{ opacity: 0, display: "none" }}
                        animate={{
                          opacity: isShowing ? 1 : 0,
                          x: isShowing ? 0 : 100,
                          display: isShowing ? "block" : "none",
                        }}
                      >
                        <div className="absolute left-1/2 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4">
                          <div className="w-1/2 max-w-md flex-auto overflow-hidden rounded-l-xl bg-orange-quaternary text-sm leading-6 shadow-lg ring-1 ring-gray-900/5 lg:max-w-3xl">
                            <div className="flex flex-col">
                              {contactMe.map((item) => (
                                <div
                                  key={item.name}
                                  className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50 items-center"
                                >
                                  <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg group-hover:bg-gray-50">
                                    <item.icon
                                      className="h-6 w-6 text-gray-600 group-hover:text-orange-primary"
                                      aria-hidden="true"
                                    />
                                  </div>
                                  <div>
                                    <a
                                      href={item.href}
                                      className="font-semibold text-gray-900 mr-20"
                                    >
                                      {item.name}
                                      <span className="absolute inset-0" />
                                    </a>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Mobile version of the navbar */}
          <Disclosure.Panel>
            <motion.div
              className="sm:hidden bg-orange-quaternary w-3/4 rounded-r-xl"
              animate={{ opacity: [0, 1] }}
            >
              <div className="space-y-1 pb-4 pt-2">
                {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
                {fullNavigation.map(({ name, href }) => (
                  <Disclosure.Button
                    as="a"
                    key={name}
                    href={href}
                    className="block py-2 pl-3 pr-4 text-base font-medium text-orange-primary hover:bg-orange-tertiary"
                  >
                    {name}
                  </Disclosure.Button>
                ))}
              </div>
            </motion.div>
          </Disclosure.Panel>
        </div>
      )}
    </Disclosure>
  );
};

export default Navbar;
