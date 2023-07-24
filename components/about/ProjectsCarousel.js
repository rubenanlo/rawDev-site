import { useState, useContext, forwardRef } from "react";
import { AnimatePresence, motion, wrap } from "framer-motion";
import {
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
} from "@heroicons/react/20/solid";
import ProjectCard from "components/about/ProjectCard";
import { RespContext } from "helpers/responsiveComponent";
import { classNames } from "helpers/setClassNames";

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

const ProjectCarousel = forwardRef(({ projects }, ref) => {
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
  const isBreakpointMd = useMediaQuery(768);
  const isBreakpointSm = useMediaQuery(640);

  projects.forEach(
    (project) =>
      (project.imageUrl =
        (isBreakpointSm && project.imageUrlSM) ||
        (isBreakpointMd && project.imageUrlMD) ||
        project.imageUrlLG ||
        project.imageUrl)
  );

  return (
    <div className="bg-white h-[41rem] xs:h-[34rem] sm:h-[34rem] lg:h-[36rem] overflow-hidden">
      <div className="relative h-full">
        <div className="absolute w-[50%] sm:w-[20%] top-10 left-0 right-0 ml-auto mr-auto flex justify-between">
          {projects.map(({ id }, index) => (
            <button
              key={id}
              onClick={() => {
                setPage([index, index]);
              }}
              className={classNames(
                index === imageIndex
                  ? "bg-orange-secondary"
                  : "bg-orange-quaternary",
                "rounded-full w-3 h-3 flex justify-between z-20"
              )}
            />
          ))}
        </div>

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
