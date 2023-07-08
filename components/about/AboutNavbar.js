import { motion } from "framer-motion";
import { classNames } from "helpers/setClassNames";
import AnchorLink from "react-anchor-link-smooth-scroll";

const AboutNavbar = ({ isInView }) => {
  const steps = [
    {
      id: "Brief bio",
      href: "#brief-bio",
      isInView: !isInView.portfolio && !isInView.experience && isInView.bio,
    },
    {
      id: "Experience",
      href: "#experience",
      isInView: !isInView.portfolio && isInView.experience,
    },
    {
      id: "Project portfolio",
      href: "#project-portfolio",
      isInView: isInView.portfolio,
    },
  ];

  // const isInView = false;

  return (
    <>
      <motion.nav
        aria-label="Progress"
        className="hidden fixed sm:flex items-center sm:items-start sm:pt-20 pl-5 sm:z-0 w-screen bg-gradient-to-r from-gray-900 to-blue-primary"
        animate={{ opacity: [0, 1] }}
        transition={{ duration: 3, delay: 6 }}
      >
        <ol
          role="list"
          className="flex items-center justify-center space-x-10 max-h-fit rounded-lg p-4 w-screen"
        >
          {steps.map((step) => (
            <li key={step.name} className="">
              <AnchorLink
                href={step.href}
                activeClass="active"
                to={step.href}
                spy={true}
                smooth={true}
                hashSpy={true}
                offset={50}
                duration={500}
                delay={1000}
                isDynamic={true}
                ignoreCancelEvents={false}
                spyThrottle={500}
                className={classNames(
                  step.isInView
                    ? "border-orange-tertiary"
                    : "border-gray-200, hover:border-gray-300",
                  "flex flex-col border-b-4  py-2 px-4"
                )}
                aria-current="step"
              >
                <span
                  className={classNames(
                    step.isInView
                      ? "text-orange-tertiary"
                      : "text-gray-400 hover:text-gray-500",
                    "text-sm font-medium "
                  )}
                >
                  {step.id}
                </span>
              </AnchorLink>
            </li>
          ))}
        </ol>
      </motion.nav>
    </>
  );
};

export default AboutNavbar;
