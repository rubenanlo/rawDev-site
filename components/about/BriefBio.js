import { forwardRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Splash from "components/about/Splash";

const BriefBio = forwardRef(
  (
    {
      bio: {
        description,
        author: { name, role, icon: photoProfile },
        social,
      },
    },
    ref
  ) => {
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
        <Splash />
        <div className="mx-auto max-w-xs sm:max-w-none sm:px-10">
          <motion.div
            initial={briefBioAnimation.initial}
            animate={briefBioAnimation.animate}
            transition={briefBioAnimation.transition}
            className="mx-auto pt-10 sm:pt-20 lg:mx-0"
          >
            <article className="flex max-w-xl flex-col items-start justify-between">
              <p className="mt-5 leading-9 text-gray-400">{description}</p>
              <div className="relative mt-8 flex items-center gap-x-4">
                <Image
                  src={photoProfile}
                  alt={name}
                  className="h-20 w-20 rounded-full bg-gray-50"
                />
                <div className="text-sm leading-6">
                  <p className="font-semibold text-orange-quaternary">{name}</p>
                  <p className="text-gray-400">{role}</p>
                  <div className="mt-3 flex text-gray-50 justify-start">
                    {social.map(({ icon, href, alt, target }) => (
                      <Link
                        href={href}
                        target={target || ""}
                        key={alt}
                        className="mr-3"
                      >
                        <Image src={icon} alt={alt} className="w-5" />
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
  }
);

BriefBio.displayName = "BriefBio";

export default BriefBio;
