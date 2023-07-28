import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { classNames } from "helpers/setClassNames";

const AboutNavbar = ({ isInView }) => {
  const steps = [
    {
      id: "Brief bio",
      href: "#brief-bio",
      isInView:
        !isInView.contact &&
        !isInView.portfolio &&
        !isInView.experience &&
        isInView.bio,
    },
    {
      id: "Experience",
      href: "#experience",
      isInView: !isInView.contact && !isInView.portfolio && isInView.experience,
    },
    {
      id: "Project portfolio",
      href: "#project-portfolio",
      isInView: !isInView.contact && isInView.portfolio,
    },
    {
      id: "Contact me",
      href: "#contact",
      isInView: isInView.contact,
    },
  ];

  const navbarAnimation = {
    // Define the initial state of the entire navbar animation
    // For example, you can set the initial opacity to 0 and then animate it to 1
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 3, delay: 6 }, // Adjust the delay as needed
  };

  return (
    <motion.nav
      aria-label="Progress"
      className="hidden fixed sm:flex items-center sm:items-start sm:pt-20 pl-5 w-screen bg-gradient-to-r from-gray-900 to-blue-primary z-30"
      initial={navbarAnimation.initial}
      animate={navbarAnimation.animate}
      transition={navbarAnimation.transition}
    >
      <ol
        role="list"
        className="flex items-center justify-center space-x-10 max-h-fit rounded-lg p-4 w-screen"
      >
        {steps.map(({ id, href, isInView }) => (
          <li key={id} className="">
            <AnchorLink
              href={href}
              to={href}
              smooth="true"
              offset={170}
              duration={500}
              delay={1000}
              className={classNames(
                isInView
                  ? "border-orange-tertiary"
                  : "border-gray-200, hover:border-gray-300",
                "flex flex-col border-b-4  py-2 px-4"
              )}
              aria-current="step"
            >
              <span
                className={classNames(
                  isInView
                    ? "text-orange-tertiary"
                    : "text-gray-400 hover:text-gray-500",
                  "text-sm font-medium "
                )}
              >
                {id}
              </span>
            </AnchorLink>
          </li>
        ))}
      </ol>
    </motion.nav>
  );
};

export default AboutNavbar;
