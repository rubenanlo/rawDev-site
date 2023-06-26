import { useAnimate, useInView } from "framer-motion";
import { useEffect } from "react";
import CardFlip from "components/cards/CardFlip";
import CardText from "components/cards/CardText";

const AnimatedCardFlip = ({ image }) => {
  const [scope, animate] = useAnimate();
  const isInview = useInView(scope, { once: true });

  useEffect(() => {
    isInview &&
      image.animation?.type === "dropDown" &&
      animate(scope.current, { y: [-10, 0], opacity: [0, 1] }, { duration: 2 });
  }, [isInview, animate, scope]);

  return (
    <>
      {image?.href ? (
        <CardFlip ref={scope} image={image} />
      ) : (
        <CardText ref={scope} image={image} />
      )}
    </>
  );
};
export default AnimatedCardFlip;
