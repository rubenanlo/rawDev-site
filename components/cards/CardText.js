import { forwardRef, useEffect } from "react";
import { classNames } from "helpers/setClassNames";
import { useAnimate, useInView } from "framer-motion";

const CardText = forwardRef(({ image }, ref) => {
  const [scope, animate] = useAnimate();
  const isInview = useInView(scope, { once: true });

  useEffect(() => {
    isInview &&
      animate(scope.current, { y: [-10, 0], opacity: [0, 1] }, { duration: 2 });
  }, [isInview, animate, scope]);

  return (
    <div ref={ref} className="rounded-xl">
      <div className="aspect-[2/3] flex flex-col rounded-xl cursor-pointer">
        {/* front of the card */}
        <div className="h-full flex flex-col justify-start pt-10 pl-2 rounded-xl w-full bg-black ">
          <h2
            className={classNames(
              image.headerPosition === "middle"
                ? "bottom-1/2"
                : image.headerPosition === "bottom"
                ? "bottom-10"
                : "",
              "absolute text-orange-tertiary text-xl"
            )}
          >
            {image.alt}
          </h2>
          <p></p>
        </div>
      </div>
    </div>
  );
});

CardText.displayName = "CardText";

export default CardText;
