import { useEffect, useState } from "react";
import { XMarkIcon } from "@heroicons/react/20/solid";
import { motion } from "framer-motion";
import dayjs from "dayjs";
import { classNames } from "helpers/setClassNames";

// Make sure you add some bottom padding to pages that include a sticky banner like this to prevent
// your content from being obscured when the user scrolls to the bottom of the page.

const information = {
  id: "banner",
  text: {
    header: "Update",
    sentence: "I am not currently accepting new clients until January 2024",
  },
};

const config = {
  isShowing: true,
  // durationDays: 30,
  issueDate: "2023/7/07",
  deadline: "2024/01/01",
};

const BannerTop = () => {
  // To give the user the abaility to close the banner
  const [target, setTarget] = useState(true);

  // The following is to remove the banner from the DOM once a deadline has passed
  const [passDue, setPassDue] = useState(true);
  const date = dayjs(config.issueDate);

  const deadline = config.deadline
    ? dayjs(config.deadline)
    : date.add(config.durationDays, "day");

  useEffect(() => {
    const today = dayjs();
    return deadline >= today ? setPassDue(false) : setPassDue(true);
  }, [deadline]);

  return (
    <>
      {config.isShowing & !passDue && (
        <div
          id={information.id}
          className={classNames(
            target ? "block" : "hidden",
            "absolute w-full top-[5.2rem] z-0"
          )}
        >
          <motion.div
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 1, delay: 1, bounce: 0 }}
          >
            <div className="isolate flex items-start md:items-center gap-x-6 overflow-hidden bg-gray-50 py-2.5 px-6 sm:px-3.5 md:before:flex-1">
              <div className="flex flex-col items-start md:flex-row flex-wrap md:items-center gap-x-2">
                <strong className="font-semibold text-sm">
                  {information.text.header}
                </strong>
                <svg
                  className="hidden md:block"
                  viewBox="0 0 2 20"
                  xmlns="http://www.w3.org/2000/svg"
                  width={5}
                  height={25}
                >
                  <line x1="1.5" y1="0" x2="1.5" y2="20" stroke="black" />
                </svg>
                <p className="text-sm">{information.text.sentence}</p>
              </div>
              <div className="flex flex-1 justify-end">
                <button
                  type="button"
                  onClick={() => setTarget(!target)}
                  className="-m-3 p-3 focus-visible:outline-offset-[-4px]"
                >
                  <span className="sr-only">Dismiss</span>
                  <XMarkIcon
                    className="h-5 w-5 text-neutral-darkest"
                    aria-hidden="true"
                  />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default BannerTop;
