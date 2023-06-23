import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

const ContactMeMenu = ({ contactMe }) => {
  return (
    <Popover className="relative">
      <Popover.Button className="inline-flex items-center gap-x-1 text-sm font-semibold leading-6 text-orange-quaternary">
        <span>Contact me</span>
        <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
      </Popover.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-x-1"
        enterTo="opacity-100 translate-x-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-x-0"
        leaveTo="opacity-0 translate-x-1"
      >
        <Popover.Panel className="absolute left-1/2 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4">
          <div className="w-1/2 max-w-md flex-auto overflow-hidden rounded-tl-3xl rounded-bl-3xl bg-orange-quaternary text-sm leading-6 shadow-lg ring-1 ring-gray-900/5 lg:max-w-3xl">
            <div className="flex flex-col">
              {contactMe.map((item) => (
                <div
                  key={item.name}
                  className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50 items-center"
                >
                  <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg group-hover:bg-white">
                    <item.icon
                      className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                      aria-hidden="true"
                    />
                  </div>
                  <div>
                    <a
                      href={item.href}
                      className="font-semibold text-gray-900 mr-10"
                    >
                      {item.name}
                      <span className="absolute inset-0" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};

export default ContactMeMenu;
