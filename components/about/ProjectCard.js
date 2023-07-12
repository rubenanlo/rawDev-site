import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const ProjectCard = ({
  project: {
    id,
    imageUrl,
    datetime,
    date,
    techStack,
    title,
    highlightFeatures,
    links,
  },
}) => {
  const [description, setDescription] = useState("");
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="absolute w-full border-gray-900 h-full">
      <div className="mx-auto max-w-2xl h-full  px-6 lg:px-8">
        <div className="mx-auto mt-16 max-w-2xl auto-rows-fr sm:mt-20 lg:mx-0 lg:max-w-none">
          <article
            key={id}
            className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-60"
          >
            <Image
              src={imageUrl}
              alt=""
              className="absolute inset-0 -z-10 h-full w-full object-top"
            />
            <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-800/90 to-gray-50/10" />
            <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />

            <div className="gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
              <div className="flex gap-x-5">
                <p>Main TechStack: </p>
                <div className="flex gap-x-2.5">
                  {techStack.map((icon) => (
                    <Image
                      key={icon}
                      src={icon}
                      alt="techstack"
                      className="w-5"
                      onMouseEnter={() => {
                        setDescription(icon.alt);
                        setOpenModal(true);
                      }}
                      onMouseLeave={() => {
                        setOpenModal(false);
                      }}
                    />
                  ))}
                  {openModal && (
                    <div className="hidden sm:block absolute -mt-44 bg-orange-quaternary/10 text-gray-900 px-5 py-2 rounded-md">
                      {description}
                    </div>
                  )}
                </div>
              </div>
              <p className="mt-3 ">{highlightFeatures}</p>
              <div className="flex justify-between"></div>
            </div>
            <div className="mt-3 flex justify-between items-center">
              <h3 className="text-lg font-semibold leading-6 text-gray-50 flex items-center gap-x-4">
                <span className="absolute inset-0" />
                {title}
                {links.map(({ href, icon, target, alt }) => (
                  <Link key={icon} className="w-5" href={href} target={target}>
                    <Image src={icon} alt={alt} />
                  </Link>
                ))}
              </h3>
              <time dateTime={datetime} className="mr-8 text-gray-300 text-sm">
                {date}
              </time>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
