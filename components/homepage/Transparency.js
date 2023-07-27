import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Transparency = ({ data: { features, image } }) => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <div id="transparency" className="overflow-hidden py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:ml-auto lg:pl-4 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-orange-quaternary sm:text-4xl">
                Your are in control
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-400">
                <span className="text-orange-tertiary text-2xl">
                  Transparency
                </span>{" "}
                is key for us. We want you to be in control of your website. We
                will provide you with the tools to do so. You will be able to
                track progress, review any preview of your website and grant
                additional access to the GitHub repo.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-400 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-50">
                      <feature.icon
                        className="absolute left-1 top-1 h-5 w-5 text-orange-primary"
                        aria-hidden="true"
                      />
                      {feature.name}
                    </dt>{" "}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
              <div className="mt-10">
                <Link
                  href="/live-demo"
                  className="text-sm text-gray-100 font-semibold leading-6 "
                >
                  Live demo <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
          <motion.div
            ref={ref}
            animate={{
              x: isInView && [-100, 0],
              opacity: isInView && [0, 1],
              transition: isInView && { duration: 1, delay: 0.3 },
            }}
            className="flex items-start justify-end lg:order-first"
          >
            <Image
              src={image}
              alt="Product screenshot"
              className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Transparency;
