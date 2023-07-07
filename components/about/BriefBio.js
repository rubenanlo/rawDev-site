import Image from "next/image";
import { forwardRef } from "react";
import { motion } from "framer-motion";
import Splash from "components/about/Splash";
import PHOTO_PROFILE from "static/assets/photo-profile.jpeg";

const bio = {
  lastUpdate: "July 7, 2023",
  description:
    "I became fullstack web developer after over 10 years working as an economist in consulting. My previous experience helps linking what the business needs with the right web application. Always craving for knowledge.",
  cities: "Barcelona, New York, London, Washington, Paris",
  techStack:
    "React, Next.js, TailwindCSS, Node.js, Express, MongoDB, and tones of npm packages",
  author: {
    name: "Ruben Andino",
    role: "Fullstack web developer",
    imageUrl: PHOTO_PROFILE,
  },
  social: {
    github: "",
  },
};

const BriefBio = forwardRef((props, ref) => {
  const briefBioAnimation = {
    initial: { opacity: 0, scale: 0.6 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.2, delay: 3.5 },
  };

  return (
    <div
      id="brief-bio"
      ref={ref}
      className="py-32 sm:py-32 sm:h-screen flex flex-col justify-center"
    >
      <div className="mx-auto max-w-xs sm:max-w-none sm:px-10">
        <Splash />
        <motion.div
          initial={briefBioAnimation.initial}
          animate={briefBioAnimation.animate}
          transition={briefBioAnimation.transition}
          className="mx-auto pt-10 lg:mx-0"
        >
          <article className="flex max-w-xl flex-col items-start justify-between">
            <time className="text-xs text-gray-400">
              Last update: {bio.lastUpdate}
            </time>
            <p className="mt-5 leading-9 text-gray-400">{bio.description}</p>
            <div className="relative mt-8 flex items-center gap-x-4">
              <Image
                src={bio.author.imageUrl}
                alt="photo-profile"
                className="h-10 w-10 rounded-full bg-gray-50"
              />
              <div className="text-sm leading-6">
                <p className="font-semibold text-orange-quaternary">
                  {bio.author.name}
                </p>
                <p className="text-gray-600">{bio.author.role}</p>
              </div>
            </div>
          </article>
        </motion.div>
      </div>
    </div>
  );
});

BriefBio.displayName = "BriefBio";

export default BriefBio;
