import { useRef } from "react";
import Link from "next/link";
import { useInView, motion } from "framer-motion";
import { classNames } from "helpers/setClassNames";

const Collaboration = ({ sections }) => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <div className="isolate overflow-hidden ">
      <div className="mx-auto max-w-7xl px-6 pb-96 pt-24 text-center sm:pt-32 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-orange-quaternary sm:text-4xl">
            Our expertise, your vision
          </h2>
        </div>
        <div className="relative mt-6">
          <p ref={ref} className="mt-6 text-lg leading-8 text-gray-400">
            We are dedicated to make sure your vision is represented in the best
            way possible.
          </p>
        </div>
      </div>
      <motion.div
        animate={{
          y: isInView && [20, 0],
          opacity: isInView && [0.5, 1],
          transition: { duration: 1, delay: 0.2 },
        }}
        className="flow-root pb-24 sm:pb-32"
      >
        <div className="-mt-80">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 lg:max-w-7xl lg:grid-cols-3">
              {sections.map((section, index) => (
                <div
                  key={section.id}
                  className={classNames(
                    section.bg === "collab-1"
                      ? "bg-collab-1"
                      : section.bg === "collab-2"
                      ? "bg-collab-2"
                      : "bg-collab-3",
                    "flex flex-col justify-between bg-no-repeat bg-cover rounded-3xl ring-1 ring-gray-900/10"
                  )}
                >
                  <div className="bg-orange-quaternary/20 h-full p-8 sm:p-10 rounded-3xl">
                    <h3
                      id={section.id}
                      className={classNames(
                        index === 2 ? "text-gray-50 " : "text-orange-primary",
                        "text-base font-semibold leading-7"
                      )}
                    >
                      {section.name}
                    </h3>
                    <p
                      className={classNames(
                        index === 2 ? "text-gray-100" : "text-gray-600",
                        "mt-6 text-base leading-7"
                      )}
                    >
                      {section.description}
                    </p>
                  </div>
                </div>
              ))}
              <div className="flex flex-col items-start gap-x-8 gap-y-6 rounded-3xl p-8 ring-1 ring-gray-900/10 sm:gap-y-10 sm:p-10 lg:col-span-3 lg:flex-row lg:items-center">
                <div className="lg:min-w-0 lg:flex-1 ">
                  <p className="mt-1 text-base leading-7 text-gray-400 text-center">
                    Want to learn more about us ? click{" "}
                    <Link
                      href="/about"
                      className="text-orange-tertiary underline underline-offset-4 text-2xl"
                    >
                      here
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Collaboration;
