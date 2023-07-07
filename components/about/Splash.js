import { motion } from "framer-motion";

const Splash = () => {
  const logo = "static/assets/logo-orange-light.png";
  // Define what the full string will be and the acronym that you want to form
  // based on that string
  let string = "ruben andino web Developer";
  const acronym = ["r", "a", "w", "Dev"];
  // We then split the string into an array of words and map through it to get
  // rid of the acronym from the string for animation purposes
  const restOfCharacters = string
    .split(" ")
    .map((word, index) => word.replace(acronym[index], ""));

  // Define the final position X for each of the elements of your acronym array.
  const positionXForAcronym = (index) => [194, 95, -13, -70][index];

  // Define the animations for the acronym and the rest of the characters
  const acronymAnimation = {
    animate: {
      y: [0, -100],
    },
    transition: { duration: 1, delay: 1 },
  };

  const imgAnimation = {
    initial: {
      y: -109,
      x: 185,
      opacity: 1,
      filter: "blur(2rem)",
      scale: 1,
    },
    animate: { filter: "blur(0rem)", scale: 1 },
  };

  const dissapearAnimation = {
    animate: {
      opacity: [1, 0],
    },
    transition: { duration: 1, delay: 1 },
  };

  return (
    <div>
      <h1 className="scale-75 sm:scale-100 text-3xl text-orange-tertiary flex justify-center items-center">
        <motion.img
          src={logo}
          alt="logo"
          className="w-10"
          initial={imgAnimation.initial}
          animate={imgAnimation.animate}
          transition={{
            duration: acronymAnimation.transition.duration,
            delay: acronymAnimation.transition.duration,
          }}
        />
        {restOfCharacters.map((word, index) => (
          <>
            <motion.p
              animate={{
                ...acronymAnimation.animate,
                x: [0, positionXForAcronym(index)],
              }}
              transition={acronymAnimation.transition}
            >
              {acronym[index]}
            </motion.p>
            <motion.p
              animate={dissapearAnimation.animate}
              transition={dissapearAnimation.transition}
              className="mr-4"
            >
              {word}
            </motion.p>
          </>
        ))}
      </h1>
    </div>
  );
};

export default Splash;
