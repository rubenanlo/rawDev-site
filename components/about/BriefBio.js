import Image from "next/image";
import { forwardRef } from "react";
import { motion } from "framer-motion";
import Splash from "components/about/Splash";
import PHOTO_PROFILE from "static/assets/photo-profile.jpeg";
import Link from "next/link";

const bio = {
  lastUpdate: "July 7, 2023",
  description:
    "As a former economist turned full-stack web developer, I bring a unique perspective to the table. My expertise lies in bridging business needs and effective web applications. Craving for growth and continuous learning, I contribute to a company's success with tailored solutions. Let's connect!",
  cities: "Barcelona, New York, London, Washington, Paris",
  techStack:
    "React, Next.js, TailwindCSS, Node.js, Express, MongoDB, and tones of npm packages",
  author: {
    name: "Ruben Andino",
    role: "Fullstack web developer",
    imageUrl: PHOTO_PROFILE,
  },
  social: [
    {
      name: "Email",
      href: "/contact-form",
      icon: (props) => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-5 h-5"
          {...props}
        >
          <path
            strokeLinecap="round"
            d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25"
          />
        </svg>
      ),
    },
    {
      name: "Linkedin",
      href: "https://www.linkedin.com/in/ruben-andino/",
      target: "_blank",
      icon: (props) => (
        <svg
          className="h-5 w-5"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          {...props}
        >
          <path
            fillRule="evenodd"
            d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "GitHub",
      href: "https://github.com/rubenanlo",
      target: "_blank",
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ],
};

const BriefBio = forwardRef((props, ref) => {
  const briefBioAnimation = {
    initial: { opacity: 0, scale: 0.6 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 1, delay: 3.5 },
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
          className="mx-auto pt-10 sm:pt-20 lg:mx-0"
        >
          <article className="flex max-w-xl flex-col items-start justify-between">
            <p className="mt-5 leading-9 text-gray-400">{bio.description}</p>
            <div className="relative mt-8 flex items-center gap-x-4">
              <Image
                src={bio.author.imageUrl}
                alt="photo-profile"
                className="h-20 w-20 rounded-full bg-gray-50"
              />
              <div className="text-sm leading-6">
                <p className="font-semibold text-orange-quaternary">
                  {bio.author.name}
                </p>
                <p className="text-gray-400">{bio.author.role}</p>
                <div className="mt-3 flex text-gray-50 justify-start">
                  {bio.social.map((item) => (
                    <Link
                      href={item.href}
                      target={item.target || ""}
                      key={item.name}
                      className="mr-3"
                    >
                      <item.icon className="w-5" />
                    </Link>
                  ))}
                </div>
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
