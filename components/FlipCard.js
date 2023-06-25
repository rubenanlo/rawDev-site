import { classNames } from "helpers/setClassNames";
import ImageSmall from "components/ImageSmall";
import { useAnimate, useInView } from "framer-motion";
import { useEffect } from "react";

const FlipCard = ({ image }) => {
  const [scope, animate] = useAnimate();
  const isInview = useInView(scope, { once: true });

  useEffect(() => {
    isInview &&
      animate(
        scope.current,
        { y: [-100, 0], opacity: [0, 1] },
        { duration: 2 }
      );
  }, [isInview, animate, scope]);

  return (
    <div ref={scope} className="group [perspective:1000px] rounded-xl">
      <div className="relative h-full flex flex-col rounded-xl [transform-style:preserve-3d] transition-all duration-500 group-hover:[transform:rotateY(180deg)] cursor-pointer">
        {/* front of the card */}
        <div className="bg-no-repeat bg-cover bg-center relative">
          <ImageSmall image={image} />
        </div>
        {/* back of the card */}
        <div className="absolute flex flex-col justify-start pt-10 pl-2 rounded-xl h-full w-full bg-black [transform:rotateY(180deg)] [backface-visibility:hidden] cursor-pointer">
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
};
export default FlipCard;
