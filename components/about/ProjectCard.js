import Image from "next/image";

const ProjectCard = ({
  project: { id, imageUrl, datetime, date, techStack, href, title },
}) => {
  return (
    <div className="absolute w-full border-gray-900 h-full">
      <div className="mx-auto max-w-2xl h-full  px-6 lg:px-8">
        <div className="mx-auto mt-16 max-w-2xl auto-rows-fr sm:mt-20 lg:mx-0 lg:max-w-none">
          <article
            key={id}
            className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80"
          >
            <Image
              src={imageUrl}
              alt=""
              className="absolute inset-0 -z-10 h-3/4 w-full object-cover"
            />
            <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/50 to-gray-50/10" />
            <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />

            <div className="gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
              <time dateTime={datetime} className="mr-8">
                {date}
              </time>
              <div className="-ml-4 flex items-center gap-x-4">
                <svg
                  viewBox="0 0 2 2"
                  className="-ml-0.5 h-0.5 w-0.5 flex-none fill-white/50"
                >
                  <circle cx={1} cy={1} r={1} />
                </svg>
              </div>
              <div className="flex gap-x-2.5">
                Main TechStack: {techStack.name}
              </div>
            </div>
            <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
              <a href={href}>
                <span className="absolute inset-0" />
                {title}
              </a>
            </h3>
          </article>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
