import Link from "next/link";
import { useRouter } from "next/router";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Logo from "components/Logo";
import { mainNavigation, contactMe, clientPortal } from "static/navbar/NAVBAR";
import ContactMeMenu from "components/navbar/ContactMeMenu";
import { classNames } from "helpers/setClassNames";

const Navbar = () => {
  const { pathname } = useRouter();

  return (
    <Disclosure as="nav">
      {({ open }) => (
        <div className="fixed bg-blue-primary z-10 pb-5">
          <div className="w-screen px-2 sm:px-6 lg:px-10">
            <div className="relative flex h-16 justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
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
                        "inline-flex items-center border-b-2  px-1 pt-1 text-sm font-medium text-orange-quaternary"
                      )}
                    >
                      {name}{" "}
                    </Link>
                  ))}
                  <Link
                    href={clientPortal.href}
                    className="inline-flex items-center  px-1 pt-1 text-sm font-medium text-orange-quaternary"
                  >
                    {clientPortal.name}
                  </Link>
                  <ContactMeMenu contactMe={contactMe} />
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 pb-4 pt-2">
              {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
              {mainNavigation.map(({ name, href }) => (
                <Disclosure.Button
                  as="a"
                  key={name}
                  href={href}
                  className="block border-l-4 border-indigo-500 bg-indigo-50 py-2 pl-3 pr-4 text-base font-medium text-indigo-700"
                >
                  {name}{" "}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </div>
      )}
    </Disclosure>
  );
};

export default Navbar;