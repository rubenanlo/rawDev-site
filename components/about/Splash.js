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
  const positionXForAcronym = (index) => [175, 84, -16, -64][index];

  // Define the animations for the acronym and the rest of the characters
  const acronymAnimation = {
    animate: {
      y: [100, 30],
    },
    transition: { duration: 1, delay: 2 },
  };

  const disappearAnimation = {
    initial: { y: 100 },
    animate: {
      opacity: [1, 0],
    },
    transition: { duration: 1, delay: 2 },
  };

  const imgAnimation = {
    initial: {
      y: 20,
      x: 160,
      opacity: 0,
      filter: "blur(2rem)",
      scale: 1,
    },
    animate: { filter: "blur(0rem)", opacity: 1, scale: 1 },
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
          transition={acronymAnimation.transition}
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
              initial={disappearAnimation.initial}
              animate={disappearAnimation.animate}
              transition={disappearAnimation.transition}
              className="mr-2"
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
