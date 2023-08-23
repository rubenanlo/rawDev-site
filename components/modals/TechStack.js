import { classNames } from "helpers/setClassNames";

const TechStack = ({ description, className }) => {
  return (
    <div
      className={classNames(
        className,
        "hidden sm:block absolute bg-orange-quaternary text-gray-900 px-5 py-2 rounded-md z-30"
      )}
    >
      {description}
    </div>
  );
};

export default TechStack;
