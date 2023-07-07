import Link from "next/link";
import { motion } from "framer-motion";
import { classNames } from "helpers/setClassNames";

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
      href: "#projects",
      isInView: isInView.portfolio,
    },
  ];

  // const isInView = false;

  return (
    <>
      <motion.nav
        aria-label="Progress"
        className="hidden fixed sm:flex items-center sm:items-start top-20 sm:top-28 pl-5 h-full z-20 sm:z-0"
        animate={{ opacity: [0, 1] }}
        transition={{ duration: 2, delay: 4 }}
      >
        <ol role="list" className="space-y-4 max-h-fit rounded-lg p-4">
          {steps.map((step) => (
            <li key={step.name} className="">
              <Link
                href={step.href}
                className={classNames(
                  step.isInView
                    ? "border-orange-tertiary"
                    : "border-gray-200, hover:border-gray-300",
                  "flex flex-col border-l-4  py-2 pl-4"
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
                <span className="text-sm font-medium">{step.name}</span>
              </Link>
            </li>
          ))}
        </ol>
      </motion.nav>
    </>
  );
};

export default AboutNavbar;
