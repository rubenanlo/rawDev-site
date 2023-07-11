import { useRef, useState, useContext } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { classNames } from "helpers/setClassNames";
import { RespContext } from "helpers/responsiveComponent";
import CSS from "static/assets/css3-alt.svg";
import REACT from "static/assets/react.svg";
import HTML from "static/assets/html5.svg";
import JS from "static/assets/js.svg";
import NEXT from "static/assets/next.svg";
import NPM from "static/assets/npmjs.svg";
import NODE from "static/assets/node.svg";
import EXCEL from "static/assets/excel.svg";
import GIT from "static/assets/git.svg";

const text = {
  intro: {
    title: "My journey",
    description:
      "Coming from an economics background, I understand that it may not be the most attention-grabbing profile at first. However, as an economist, I seized the opportunity to expand my role and create automation tools to automate processes for my team, ensuring more time for critical thinking and less on repetitive tasks.",
    description2:
      "I'm a self-taught developer who values learning from colleagues and user feedback. Transitioning from lengthy code to a modular, component-oriented approach has improved code quality and facilitated better peer reviews.",
  },
  highlights: [
    {
      title: "10+ years",
      caption: "as an economist in business consulting",
    },
    {
      title: "1+ years",
      caption: "as a web developer",
      description:
        "but with over 10 years of experience building data visualizations based on excel following DRY and component oriented approach.",
    },
    {
      title: "My stack",
      softStack: [
        "managing teams & projects",
        "conflict resolution",
        "client focus",
      ],
      techStack: [
        {
          icon: NEXT,
          alt: "NextJS",
        },
        {
          icon: REACT,
          alt: "ReactJS",
        },
        {
          icon: JS,
          alt: "JavaScript",
        },
        {
          icon: HTML,
          alt: "HTML",
        },
        {
          icon: CSS,
          alt: "CSS",
        },
        {
          icon: NPM,
          alt: "npm",
        },
        {
          icon: NODE,
          alt: "node.js",
        },
        {
          icon: EXCEL,
          alt: "Microsoft Excel",
        },
        {
          icon: GIT,
          alt: "Git",
        },
      ],
    },
  ],
};

const ExperienceSnapshot = () => {
  const [description, setDescription] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const highlightsSamePattern = [text.highlights[0], text.highlights[1]];
  const highlightsDiffPattern = text.highlights[2];
  const useMediaQuery = useContext(RespContext);
  const isBreakpoint = useMediaQuery(640);
  const animatedRef = useRef(null);
  const isInView = useInView(animatedRef);

  const cardStackContainer = {
    visible: isInView && {
      opacity: 1,
      transition: {
        when: isBreakpoint ? "afterChildren" : "beforeChildren",
        duration: 0.2,
        delay: 0.2,
        delayChildren: 0.2,
        staggerChildren: 0.2,
      },
    },
    hidden: {
      opacity: 0,
    },
    visibleMobile: {
      opacity: 1,
    },
  };

  const cardStack = {
    visible: isInView && {
      opacity: 1,
      x: 0,
      transition: { bounce: 0 },
    },
    hidden: {
      opacity: 0,
      x: "-100%",
    },
  };

  return (
    <>
      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8 lg:pb-40">
        <div className="mx-auto max-w-3xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-orange-quaternary sm:text-4xl">
            {text.intro.title}
          </h2>
          <p className="mt-6 text-base leading-7 text-gray-400">
            {text.intro.description}
          </p>
          <p className="mt-6 text-base leading-7 text-gray-400">
            {text.intro.description2}
          </p>
        </div>
        <motion.div
          ref={animatedRef}
          initial={!isBreakpoint ? "hidden" : "visibleMobile"}
          animate="visible"
          variants={cardStackContainer}
          className="mx-auto mt-16 flex max-w-2xl flex-col gap-8 lg:mx-0 lg:mt-20 lg:max-w-none lg:flex-row lg:items-end"
        >
          {highlightsSamePattern.map(
            ({ title, caption, description }, index) => (
              <motion.div
                variants={cardStack}
                key={title}
                className={classNames(
                  index === 0
                    ? "sm:w-2/3 lg:w-3/4 lg:max-w-none"
                    : "lg:w-full ",
                  "flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl bg-gradient-to-t from-gray-900 p-8 sm:flex-row-reverse sm:items-end lg:max-w-sm lg:flex-auto lg:flex-col lg:items-start lg:gap-y-24"
                )}
              >
                <p className="flex-none text-3xl font-bold tracking-tight text-orange-secondary">
                  {title}
                </p>
                <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
                  <p className="text-lg font-semibold tracking-tight text-gray-50">
                    {caption}
                  </p>
                  <p className="mt-2 text-base leading-7 text-gray-400">
                    {description || null}
                  </p>
                </div>
              </motion.div>
            )
          )}
          {/* third highlight */}
          <div className="flex flex-col-reverse justify-between gap-x-16 gap-y-12 rounded-2xl bg-gradient-to-t from-gray-900 p-8 sm:w-11/12 sm:max-w-xl sm:flex-row-reverse sm:items-end lg:w-full lg:max-w-none lg:flex-auto lg:flex-col lg:items-start">
            <p className="flex-none text-3xl font-bold tracking-tight text-orange-secondary">
              {highlightsDiffPattern.title}
            </p>
            <div>
              <div className="sm:shrink lg:w-full lg:flex-none sm:grid sm:grid-cols-2 sm:items-center sm:justify-center sm:gap-x-5 my-10 sm:my-12">
                <p className="text-lg text-left font-semibold tracking-tight text-gray-100 mb-5 sm:mb-0">
                  SoftStack
                </p>
                <p className="mt-2 text-sm leading-7 items-start text-gray-400 text-left">
                  {highlightsDiffPattern.softStack.join(", ")}
                </p>
              </div>
              <div className="sm:shrink lg:w-full lg:flex-none sm:grid sm:grid-cols-2 sm:items-center sm:justify-center sm:gap-x-5">
                <p className="text-lg text-left font-semibold tracking-tight text-gray-100 mb-5 sm:mb-0">
                  TechStack
                </p>
                <div className="mt-2 text-base leading-7 grid grid-cols-3 items-center gap-y-3">
                  {highlightsDiffPattern.techStack.map(({ icon, alt }) => (
                    <>
                      <Image
                        key={icon}
                        src={icon}
                        alt={alt}
                        className="w-7 cursor-pointer sm:mx-0"
                        onMouseEnter={() => {
                          setDescription(alt);
                          setOpenModal(true);
                        }}
                        onMouseLeave={() => {
                          setOpenModal(false);
                        }}
                      />
                      {openModal && (
                        <div className="hidden sm:block absolute -mt-44 bg-orange-quaternary/10 text-gray-900 px-5 py-2 rounded-md">
                          {description}
                        </div>
                      )}
                    </>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        <div />
      </div>
    </>
  );
};

ExperienceSnapshot.displayName = "ExperienceSnapshot";
export default ExperienceSnapshot;