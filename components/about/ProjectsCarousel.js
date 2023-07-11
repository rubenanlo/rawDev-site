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

const projects = [
  {
    id: 1,
    title: "rawDev Website",
    href: "http://www.rawdev.io",
    highlightFeatures:
      "Form submission, CRUD functionality in the backend, authentication",
    imageUrl: RAWDEV,
    date: "July 11, 2023",
    datetime: "2023-07-11",
    techStack: {
      name: "Ruben Andino",
    },
  },
  {
    id: 2,
    title: "SDG Transformation Center",
    href: "https://sdgtransformationcenter.org/",
    highlightFeatures:
      "Centralized system to save text, automatization for updates",
    imageUrl: SDGTC,
    date: "July 11, 2023",
    datetime: "2023-06-23",
    techStack: {
      name: "Ruben Andino",
    },
  },
  {
    id: 3,
    title: "Static Website",
    // href: "https://static-website-weld-xi.vercel.app/",
    highlightFeatures: "Due to confidentiality issues, please request access",
    imageUrl: STATIC,
    date: "April 01, 2023",
    datetime: "2023-04-01",
    techStack: {
      name: "Ruben Andino",
    },
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
      className="bg-orange-quaternary h-[50rem] xs:h-[42rem] sm:h-[48rem] lg:h-[41.7rem] xl:h-[48rem] overflow-hidden "
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
        <div className="relative max-w-7xl h-full mx-auto">
          {isBreakpoint && (
            <div className="absolute -bottom-20 right-0 left-auto flex items-center">
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
                className="inset-y-1/2   w-[2.5rem] h-[2.5rem] flex justify-center items-center cursor-pointer select-none"
                onClick={() => paginate(-1)}
              >
                <ArrowLongLeftIcon className="h-7 text-orange-secondary" />
              </div>
              <div
                id={"next"}
                className="w-[2.5rem] h-[2.5rem] flex justify-center items-center cursor-pointer select-none"
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
