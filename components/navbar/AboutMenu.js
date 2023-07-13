import { useState } from "react";
import Link from "next/link";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { motion } from "framer-motion";
import { classNames } from "helpers/setClassNames";

const AboutMenu = ({ about }) => {
  const [isShowing, setIsShowing] = useState(false);
  return (
    <div className="relative h-full">
      <button
        onMouseEnter={() => setIsShowing(true)}
        onMouseLeave={() => setIsShowing(false)}
        className="inline-flex items-center gap-x-1 h-full border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-orange-quaternary leading-6 hover:border-b-orange-primary"
      >
        <div
          className={classNames(
            isShowing ? "absolute w-full block h-32" : "hidden"
          )}
        />

        <span>About</span>
        <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
      </button>

      {isShowing && (
        <motion.div
          onMouseEnter={() => setIsShowing(true)}
          onMouseLeave={() => setIsShowing(false)}
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 1],
            y: [-20, 0],
          }}
        >
          <div className="absolute -right-20 z-20 mt-5 flex w-screen max-w-xs px-4">
            <div className="w-screen max-w-md flex-auto overflow-hidden rounded-md bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
              <div className="p-4">
                {about.map((item) => (
                  <div
                    key={item.name}
                    className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50"
                  >
                    <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                      <item.icon
                        className="h-6 w-6 text-gray-600 group-hover:text-orange-secondary"
                        aria-hidden="true"
                      />
                    </div>
                    <div>
                      <Link
                        href={item.href}
                        className="font-semibold text-gray-900"
                      >
                        {item.name}
                        <span className="absolute inset-0" />
                      </Link>
                      <p className="mt-1 text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-1 divide-x divide-gray-900/5 bg-gray-50"></div>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};
export default AboutMenu;
