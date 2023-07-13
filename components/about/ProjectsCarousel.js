import { useState, useContext, forwardRef } from "react";
import { AnimatePresence, motion, wrap } from "framer-motion";
import {
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
} from "@heroicons/react/20/solid";
import ProjectCard from "components/about/ProjectCard";
import { RespContext } from "helpers/responsiveComponent";
import RAWDEV from "static/assets/rawdev.gif";
import SDGTC from "static/assets/sdgtc.gif";
import STATIC from "static/assets/static-website.png";
import DATAVIZ from "static/assets/data-visualization.gif";
// import CSS from "static/assets/css3-alt.svg";
// import REACT from "static/assets/react.svg";
// import HTML from "static/assets/html5.svg";
// import JS from "static/assets/js.svg";
import NEXT from "static/assets/next.svg";
// import NPM from "static/assets/npmjs.svg";
import NODE from "static/assets/node.svg";
// import EXCEL from "static/assets/excel.svg";
// import GIT from "static/assets/git.svg";
import MONGO from "static/assets/mongo.svg";
import TAILWIND from "static/assets/tailwind.svg";
import GITHUB from "static/assets/github.svg";
import LINK from "static/assets/link.svg";
import SHELL from "static/assets/shell.svg";

const projects = [
  {
    id: 1,
    title: "rawDev",
    highlightFeatures:
      "Website application for web development services, including a dashboard for clients, form submission, authentication, REST API, CRUD functionality, and authentication.",
    imageUrl: RAWDEV,
    date: "July 11, 2023",
    datetime: "2023-07-11",
    techStack: [
      { icon: NEXT, alt: "NextJS" },
      { icon: NODE, alt: "Node.js" },
      { icon: MONGO, alt: "Mongo DB" },
      { icon: TAILWIND, alt: "Tailwind" },
    ],
    links: [
      {
        icon: LINK,
        alt: "link",
        target: "_blank",
        href: "http://www.rawdev.io",
      },
      {
        icon: GITHUB,
        alt: "Github",
        target: "_blank",
        href: "https://github.com/rubenanlo/rawDev-site",
      },
    ],
  },
  {
    id: 2,
    title: "SDG Transformation Center",
    highlightFeatures:
      "Website application to showcase the SDG Transformation Center's services which includes an online library, news & media section, system to optimize images, and a centralized system to manage text for the website.",
    imageUrl: SDGTC,
    date: "June 23, 2023",
    datetime: "2023-06-23",
    techStack: [
      { icon: NEXT, alt: "NextJS" },
      { icon: NODE, alt: "Node.js" },
      { icon: TAILWIND, alt: "Tailwind" },
      { icon: SHELL, alt: "Shell scripting" },
    ],
    links: [
      {
        icon: LINK,
        alt: "link",
        target: "_blank",
        href: "https://sdgtransformationcenter.org/",
      },
    ],
  },
  {
    id: 3,
    title: "Static Website",
    highlightFeatures:
      "Web application that showcase a company's website following my own design choices. It includes a centralized way to handle text for the site, a list of products, among other features.",
    imageUrl: STATIC,
    date: "April 01, 2023",
    datetime: "2023-04-01",
    techStack: [
      { icon: NEXT, alt: "NextJS" },
      { icon: NODE, alt: "Node.js" },
      { icon: TAILWIND, alt: "Tailwind" },
      { icon: SHELL, alt: "Shell scripting" },
    ],
    links: [
      {
        icon: LINK,
        alt: "link",
        target: "_blank",
        href: "https://static-website-weld-xi.vercel.app/",
      },
    ],
  },
  {
    id: 4,
    title: "Data Visualization",
    highlightFeatures:
      "This is a sample of the data visualizations I contribute with. Main features include the ability to create json files from an excel file, flexibility at rendering different data types, and downloading data.",
    imageUrl: DATAVIZ,
    date: "June 23, 2023",
    datetime: "2023-06-23",
    techStack: [
      { icon: NEXT, alt: "NextJS" },
      { icon: NODE, alt: "Node.js" },
    ],
    links: [
      {
        icon: LINK,
        alt: "link",
        target: "_blank",
        href: "https://dashboards.sdgindex.org/",
      },
    ],
  },
];

const variants = {
  enter: (direction) => {
    return {
      x: direction > 0 ? 1000 : -1000,

      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

// Distilling swipe offset and velocity into a single variable, so the
// less distance a user has swiped, the more velocity they need to register as a swipe.
// Should accomodate longer swipes and short flicks without having binary checks on
// just distance thresholds and velocity > 0.

const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

const ProjectCarousel = forwardRef((props, ref) => {
  const [[page, direction], setPage] = useState([0, 0]);

  // We have infinite cards that we paginate and
  // then wrap that within array length to find our card ID in the array. By passing an
  // absolute page index as the `motion` component's `key` prop,
  // `AnimatePresence`
  // detects it as an entirely newcard. So you can infinitely paginate as few as 1 cards.

  const imageIndex = wrap(0, projects.length, page);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  // To render components conditional to screen size:
  const useMediaQuery = useContext(RespContext);
  const isBreakpoint = useMediaQuery(1023);

  return (
    <div
      id="project-portfolio"
      className="bg-white h-[40rem] xs:h-[34rem] sm:h-[34rem] lg:h-[35rem] overflow-hidden"
    >
      <div className="relative h-full">
        {/* <div className="absolute inset-0 py-10 lg:py-36  h-full" /> */}
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={page}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);

              if (swipe < -swipeConfidenceThreshold) {
                paginate(1);
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1);
              }
            }}
          >
            <ProjectCard project={projects[imageIndex]} />
          </motion.div>
        </AnimatePresence>
        <div className="relative max-w-3xl h-full mx-auto">
          {isBreakpoint && (
            <div className="absolute bottom-7 right-1/2 left-auto flex items-center z-10">
              <ArrowLongRightIcon className=" w-7 text-orange-secondary" />
            </div>
          )}

          {!isBreakpoint && (
            <div
              ref={ref}
              className="absolute w-full flex flex-row justify-between lg:inset-y-[52%] xl:inset-y-[46%] px-5 mx-auto"
            >
              <div
                id={"prev"}
                className="inset-y-1/2 w-[2.5rem] h-[2.5rem] flex justify-center items-center cursor-pointer select-none z-10"
                onClick={() => paginate(-1)}
              >
                <ArrowLongLeftIcon className="h-7 text-orange-secondary" />
              </div>
              <div
                id={"next"}
                className="w-[2.5rem] h-[2.5rem] flex justify-center items-center cursor-pointer select-none z-10"
                onClick={() => paginate(1)}
              >
                <ArrowLongRightIcon className="h-7 text-orange-secondary" />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
});

ProjectCarousel.displayName = "ProjectCarousel";

export default ProjectCarousel;
