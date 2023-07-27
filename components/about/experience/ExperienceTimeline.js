import dayjs from "dayjs";
import { motion, useInView } from "framer-motion";
import { classNames } from "helpers/setClassNames";
import { useRef } from "react";

const ExperienceTimeline = ({ timeline }) => {
  const ref = useRef(null);
  const isInview = useInView(ref);

  return (
    <div className="mx-auto max-w-7xl px-6 sm:px-8 py-20">
      <div ref={ref} className="overflow-hidden">
        {timeline.map(
          (
            { name, dateTime, tag, description, description2, techStack },
            index
          ) => (
            <div
              key={name}
              className="pb-12 sm:pb-0 sm:grid sm:grid-cols-[33.5%_15%_35%] sm:gap-x-10 sm:gap-y-20 sm:justify-center sm:items-start"
            >
              <time
                dateTime={dateTime}
                className="h-full font-semibold leading-6 text-gray-50 mb-5 col-start-2 row-span-2 flex flex-row gap-x-2 sm:mb-0 sm:gap-x-0 sm:flex-col sm:justify-center sm:items-center"
              >
                <p>{dayjs(dateTime).format("MMMM")}</p>
                <p>{dayjs(dateTime).format("YYYY")}</p>
                <div
                  className={classNames(
                    index === timeline.length - 1
                      ? "bg-transparent"
                      : "bg-gray-50/10",
                    "h-full lg:static sm:w-[.1rem] lg:flex-auto sm:my-5"
                  )}
                  aria-hidden="true"
                />
              </time>
              <motion.div
                animate={{
                  opacity: isInview && [0, 1],
                  x:
                    tag === "work"
                      ? isInview && [100, 0]
                      : isInview && [-100, 0],
                }}
                transition={{ duration: 1, delay: 1 }}
                className={classNames(
                  tag === "work"
                    ? "col-start-3"
                    : "col-start-1 row-start-1 sm:text-right",
                  "h-full"
                )}
              >
                <p className="text-lg font-semibold text-orange-tertiary">
                  {name}
                </p>
                <p className="mt-2 text-base leading-7 text-gray-400">
                  {description}
                </p>
                <p className="mt-2 text-base leading-7 text-gray-400">
                  {description2}
                </p>
                {techStack && (
                  <p className="mt-2 text-sm leading-7 text-orange-quaternary">
                    <i>Tech Stack: {techStack}</i>
                  </p>
                )}
              </motion.div>
            </div>
          )
        )}
        <div id="project-portfolio" />
      </div>
    </div>
  );
};

ExperienceTimeline.displayName = "ExperienceTimeline";
export default ExperienceTimeline;
