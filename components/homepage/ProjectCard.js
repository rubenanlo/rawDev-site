import Link from "next/link";

const ProjectCard = ({ project: { href, description } }) => (
  <div className="absolute w-full max-w-7xl z-10">
    <div className="mx-auto max-w-7xl flex flex-col items-center gap-y-10 gap-x-8 px-6 sm:gap-y-8 lg:px-8 lg:flex-row lg:items-stretch">
      <div className="-mt-8 w-[80%] sm:w-3/5 -mb-4 lg:-mb-8 lg:w-80 lg:flex-none lg:ml-16">
        <div className="relative h-[15rem] lg:h-[32rem] xl:h-[36rem] mx-[3rem] lg:mx-0 ">
          <div className="absolute lg:inset-0 h-full w-full lg:w-full rounded-2xl divide-y divide-gray-300/70 bg-gray-200 shadow-2xl grid grid-rows-2 items-center justify-center">
            {/* {(highlights).map(({ id, title, caption }) => (
              <div
                key={id}
                className="flex flex-col justify-center lg:items-center text-gray-700 mx-3 lg:mx-0 lg:px-5 lg:py-10 h-full"
              >
                <h2 className="text-sm xs:text-xl max-w-sm lg:text-3xl text-left lg:text-center w-full xs:mb-2 lg:mb-10 ">
                  {title}
                </h2>
                <p className="text-sm xs:text-base text-left lg:text-center lg:text-xl">
                  {caption}
                </p>
              </div>
            ))} */}
          </div>
        </div>
      </div>
      <div className="w-full max-w-4xl lg:flex-auto lg:my-auto lg:px-18">
        <figure className="relative isolate sm:pt-12 lg:pt-6 lg:mr-14 ">
          <p className="lg:text-lg lg:leading-8 xl:text-2xl xl:leading-9 text-justify font-semibold text-white min-h-[7.4rem]">
            {description}
          </p>
          <div className="mt-5 lg:mt-8 text-base flex justify-between items-center lg:items-end">
            <p className=" text-gray-400">date</p>
            <div className="lg:mr-10 lg:ml-auto">
              <Link href={href}>
                <button className="border rounded-md text-base text-gray-100 py-1 px-3 sm:py-3 sm:px-5 bg-orange-tertiary">
                  Learn more
                </button>
              </Link>
            </div>
          </div>
        </figure>
      </div>
    </div>
  </div>
);

export default ProjectCard;
