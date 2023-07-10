import dayjs from "dayjs";
import { motion, useInView } from "framer-motion";
import { classNames } from "helpers/setClassNames";
import { useRef } from "react";

const work = [
  {
    name: "Fullstack Web Developer, SDSN (Paris, France)",
    description:
      "Responsible for maintaining, updating and upgrading and creating data visualizations.",
    techStack: "NextJS, Tailwind, styled components",
    dateTime: "2022-11",
  },
  {
    name: "Economist, Baker McKenzie (Paris, France)",
    description:
      "Beyond my responsibilities: Created a repo automatically updatable.",
    techStack: "Microsoft Excel, Microsoft Word",
    dateTime: "2021-09",
  },
  {
    name: "Economist, PwC (New York, USA)",
    description:
      "Designed and implemented several automation tools. Some examples include  a tool to turn raw data into formatted tables (reduction of 1,000 hours of work); template creation to merge documents; among others.",
    techStack: "Microsoft Excel, HTML, Javascript, CSS",
    dateTime: "2019-05",
  },
  {
    name: "Economist, EY (New York, USA)",
    description:
      "Defined best practices around how to build data visualizations.",
    description2:
      "Designed several data visualization tools including a supply chain analysis (supported big data and updatable within seconds), return on investment analysis, benchmarking analyses, among others.",
    techStack: "Microsoft Excel",
    dateTime: "2011-05",
  },
  {
    name: "Economist, Deloitte (Barcelona, Spain)",
    description:
      "Designed a data visualization for a benchmarking analysis, which allows a 6% reduction of costs",
    techStack: "Microsoft Excel",
    dateTime: "2008-09",
  },
];

const education = [
  {
    name: "Web Development Bootcamp",
    description: "Training to learn the MERN stack",
    dateTime: "2022/04",
  },
  {
    name: "MBA, Instituto de Empresa",
    description:
      "Concentration: Corporate Finance (i.e. Economic Value Added model, CAPM model, P&L forecast, guideline companies method based on price multiples, option pricing models).",
    dateTime: "2008/07",
  },
  {
    name: "Bachelor of Business and Finance",
    description:
      "Concentration: Economics, Legal Studies and Business Management.",
    dateTime: "2002/09",
  },
];

const ExperienceTimeline = () => {
  const ref = useRef(null);
  const isInview = useInView(ref);
  const timeline = [
    ...work.map((item) => ({ ...item, tag: "work" })),
    ...education.map((item) => ({ ...item, tag: "education" })),
  ];

  // Sort the timeline array based on the date
  timeline.sort((a, b) => dayjs(b.dateTime).diff(dayjs(a.dateTime)));

  return (
    <div className="mx-auto max-w-7xl px-6 sm:px-8 py-20">
      <div ref={ref} className="overflow-hidden">
        {timeline.map((item, index) => (
          <div
            key={item.name}
            className="pb-12 sm:pb-0 sm:grid sm:grid-cols-[33.5%_15%_35%] sm:gap-x-10 sm:gap-y-20 sm:justify-center sm:items-start"
          >
            <time
              dateTime={item.dateTime}
              className="h-full font-semibold leading-6 text-gray-50 mb-5 col-start-2 row-span-2 flex flex-row gap-x-2 sm:mb-0 sm:gap-x-0 sm:flex-col sm:justify-center sm:items-center"
            >
              <p>{dayjs(item.dateTime).format("MMMM")}</p>
              <p>{dayjs(item.dateTime).format("YYYY")}</p>
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
                  item.tag === "work"
                    ? isInview && [100, 0]
                    : isInview && [-100, 0],
              }}
              transition={{ duration: 1, delay: 1 }}
              className={classNames(
                item.tag === "work"
                  ? "col-start-3"
                  : "col-start-1 row-start-1 sm:text-right",
                "h-full"
              )}
            >
              <p className="text-lg font-semibold text-orange-quaternary">
                {item.name}
              </p>
              <p className="mt-2 text-base leading-7 text-gray-400">
                {item.description}
              </p>
              <p className="mt-2 text-base leading-7 text-gray-400">
                {item.description2}
              </p>
              {item.techStack && (
                <p className="mt-2 text-sm leading-7 text-gray-400">
                  <i>Tech Stack: {item.techStack}</i>
                </p>
              )}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

ExperienceTimeline.displayName = "ExperienceTimeline";
export default ExperienceTimeline;
