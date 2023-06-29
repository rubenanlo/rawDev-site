import { useEffect } from "react";
import { useAnimate, useInView } from "framer-motion";
import { motion } from "framer-motion";
import CardImage from "components/cards/CardImage";
import { classNames } from "helpers/setClassNames";

const CardFlip = ({ image }) => {
  const [scope, animate] = useAnimate();
  const isInview = useInView(scope, { once: true });

  const flipDirection = (image.animation.flipLeft && -180) || 180;

  useEffect(() => {
    isInview &&
      image.animation?.type === "drop" &&
      animate(scope.current, { y: [-10, 0], opacity: [0, 1] }, { duration: 2 });
  }, [isInview, animate, scope]);

  return (
    <div ref={scope} className="group [perspective:1000px] rounded-xl">
      <div className="relative h-full flex flex-col rounded-xl [transform-style:preserve-3d] transition-all duration-500 group-hover:[transform:rotateY(180deg)]">
        <motion.div
          className="bg-no-repeat bg-cover bg-center relative"
          animate={
            image.animation.type === "flip" && {
              rotateY: [0, flipDirection],
            }
          }
          transition={{
            duration: 0.5,
            delay: image.animation.start || 2,
            bounce: 0,
          }}
        >
          {/* front of the card */}
          <CardImage image={image} bounce="integrity" />
          {/* back of the card */}
        </motion.div>
        <motion.div
          className="absolute flex flex-col justify-start pt-10 pl-2 rounded-xl h-full w-full bg-black [transform:rotateY(180deg)] [backface-visibility:hidden]"
          animate={
            image.animation.type === "flip" && {
              rotateY: [0, flipDirection],
            }
          }
          transition={{
            duration: 0.5,
            delay: image.animation.start || 2,
            bounce: 0,
          }}
        >
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
            <p></p>
          </h2>
        </motion.div>
      </div>
    </div>
  );
};
export default CardFlip;
