import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { BellIcon } from "@heroicons/react/24/outline";
import { UserIcon } from "@heroicons/react/24/solid";
import { Fragment } from "react";
import { classNames } from "helpers/setClassNames";
import { SignIn } from "helpers/setSignIn";
import { userNavigation } from "static/sidebar/SIDEBAR.JS";

const ProfileDropDown = ({ providers }) => {
  const { data: session } = useSession();
  return (
    <div className="flex items-center gap-x-4 lg:gap-x-6">
      {/* Potential feature to add notifications */}
      <button
        type="button"
        className="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500"
      >
        <span className="sr-only">View notifications</span>
        <BellIcon className="h-6 w-6" aria-hidden="true" />
      </button>
      {/* Separator */}
      <div
        className="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-200"
        aria-hidden="true"
      />
      <Menu as="div" className="relative">
        <Menu.Button className="-m-1.5 flex items-center p-1.5">
          <span className="sr-only">Open user menu</span>
          {session ? (
            <Image
              height={20}
              width={20}
              className="h-8 w-8 rounded-full bg-gray-50"
              src={session?.user.image}
              alt=""
            />
          ) : (
            <UserIcon className="w-5" />
          )}
          <span className="hidden lg:flex lg:items-center">
            <span
              className="ml-4 text-sm font-semibold leading-6 text-gray-900"
              aria-hidden="true"
            >
              {session?.user.name}
            </span>
            <ChevronDownIcon
              className="ml-2 h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </span>
        </Menu.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
            {userNavigation.map(({ name, href }) => (
              <Menu.Item key={name}>
                {({ active }) =>
                  name !== "Sign out" ? (
                    <Link
                      href={href}
                      className={classNames(
                        active ? "bg-gray-50" : "",
                        "block px-3 py-1 text-sm leading-6 text-gray-900 w-32"
                      )}
                    >
                      {name}
                    </Link>
                  ) : session ? (
                    <button
                      className={classNames(
                        active ? "bg-gray-50" : "",
                        "block px-3 py-1 text-sm leading-6 text-gray-900 w-32 text-left"
                      )}
                      onClick={() => signOut({ callbackUrl: "/login" })}
                    >
                      Sing out
                    </button>
                  ) : (
                    <button
                      className={classNames(
                        active ? "bg-gray-50" : "",
                        "block px-3 py-1 text-sm leading-6 text-gray-900 w-32 text-left"
                      )}
                      onClick={() => SignIn(providers)}
                    >
                      Sing in
                    </button>
                  )
                }
              </Menu.Item>
            ))}
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

export default ProfileDropDown;
