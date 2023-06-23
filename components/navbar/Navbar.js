import Link from "next/link";
import { useRouter } from "next/router";
import { Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Logo from "components/Logo";
import ContactMeMenu from "components/navbar/ContactMeMenu";
import { mainNavigation, contactMe, clientPortal } from "static/navbar/NAVBAR";
import { classNames } from "helpers/setClassNames";
import { Fragment } from "react";

const Navbar = () => {
  const { pathname } = useRouter();
  const fullNavigation = [...mainNavigation, clientPortal, ...contactMe];

  return (
    <Popover as="nav">
      {({ open }) => (
        <div className="fixed bg-blue-primary z-10 pb-5">
          <div className="w-screen px-2 sm:px-6 lg:px-10">
            <div className="relative flex h-16 justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Popover.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Popover.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-between">
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
                  <ContactMeMenu contactMe={contactMe} />
                </div>
              </div>
            </div>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-150"
            enterFrom="opacity-0 -translate-x-full"
            enterTo="opacity-100 translate-x-0"
            leave="transition ease-in duration-50"
            leaveFrom="opacity-100 translate-x-0"
            leaveTo="opacity-0 -translate-x-full"
          >
            <Popover.Panel className="sm:hidden bg-orange-quaternary w-3/4 rounded-r-xl transition ease-in-out duration-1000">
              <div className="space-y-1 pb-4 pt-2">
                {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
                {fullNavigation.map(({ name, href }) => (
                  <Popover.Button
                    as="a"
                    key={name}
                    href={href}
                    className="block py-2 pl-3 pr-4 text-base font-medium text-orange-primary hover:bg-orange-tertiary"
                  >
                    {name}
                  </Popover.Button>
                ))}
              </div>
            </Popover.Panel>
          </Transition>
        </div>
      )}
    </Popover>
  );
};

export default Navbar;
