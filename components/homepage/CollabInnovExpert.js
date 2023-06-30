import { useRef } from "react";
import Link from "next/link";
import { useInView, motion } from "framer-motion";

const sections = [
  {
    name: "Collaboration",
    id: "collaboration",
    description:
      "We will work with you to make sure your website is exactly what you want it to be.",
    image: {
      src: "/assets/innovation.png",
      alt: "Innovation",
    },
  },
  {
    name: "Innovation",
    id: "innovation",
    description:
      "We will rely on the technical stack that is suitable for your needs.",
    image: {
      src: "/assets/innovation.png",
      alt: "Innovation",
    },
  },
  {
    name: "Expertise",
    id: "expertise",
    description:
      "A background in supply chain analysis is the perfect link to understand your needs.",
    image: {
      src: "/assets/innovation.png",
      alt: "Innovation",
    },
  },
];

const CollabInnovExpert = () => {
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
          transition: { duration: 1, delay: 0.5 },
        }}
        className="flow-root  pb-24 sm:pb-32"
      >
        <div className="-mt-80">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 lg:max-w-7xl lg:grid-cols-3">
              {sections.map((section) => (
                <div
                  key={section.id}
                  className="flex flex-col justify-between rounded-3xl bg-gray-100 p-8  ring-1 ring-gray-900/10 sm:p-10"
                >
                  <div>
                    <h3
                      id={section.id}
                      className="text-base font-semibold leading-7 text-orange-primary"
                    >
                      {section.name}
                    </h3>
                    <p className="mt-6 text-base leading-7 text-gray-600">
                      {section.description}
                    </p>
                  </div>
                </div>
              ))}
              <div className="flex flex-col items-start gap-x-8 gap-y-6 rounded-3xl p-8 ring-1 ring-gray-900/10 sm:gap-y-10 sm:p-10 lg:col-span-3 lg:flex-row lg:items-center">
                <div className="lg:min-w-0 lg:flex-1 ">
                  <p className="mt-1 text-base leading-7 text-gray-400 text-center">
                    Want to learn more about{" "}
                    <span className="text-orange-tertiary text-2xl">
                      rawDev
                    </span>{" "}
                    ? click{" "}
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

export default CollabInnovExpert;
