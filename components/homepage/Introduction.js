import Link from "next/link";
import CardFlip from "components/cards/CardFlip";
import TRANSPARENCY from "static/assets/transparency.avif";
import COLLABORATION from "static/assets/collaboration.avif";
import INNOVATION from "static/assets/innovation.avif";
import EXPERTISE from "static/assets/expertise.avif";
import INTEGRITY from "static/assets/integrity.avif";

const images = [
  {
    href: INTEGRITY,
    alt: "integrity",
    headerPosition: "top",
    animation: {
      type: "flip",
      duration: 2,
      flipLeft: false,
    },
  },
  {
    href: TRANSPARENCY,
    alt: "transparency",
    headerPosition: "bottom",
    animation: {
      type: "drop",
      duration: 2,
    },
  },
  {
    href: COLLABORATION,
    alt: "collaboration",
    headerPosition: "middle",
    animation: {
      type: "drop",
      drop: 2,
    },
  },
  {
    href: INNOVATION,
    alt: "innovation",
    headerPosition: "top",
    animation: {
      type: "flip",
      start: 1.5,
      flipLeft: true,
    },
  },
  {
    href: EXPERTISE,
    alt: "expertise",
    headerPosition: "bottom",
    animation: {
      type: "drop",
      duration: 2,
    },
  },
];

const Introduction = () => (
  <main>
    <div className="relative isolate h-screen">
      <div className="overflow-hidden h-full">
        <div className="mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32 h-full">
          <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center h-full">
            <div className="w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
              <h1 className="text-4xl font-bold tracking-tight text-orange-quaternary sm:text-6xl">
                Connecting businesses with the digital world.
              </h1>
              <p className="relative mt-6 text-lg leading-8 text-gray-400 sm:max-w-md lg:max-w-none">
                At <span className="text-orange-tertiary text-2xl">rawDev</span>
                , we are committed to help small businesses with creating web
                applications. From static and ecommerce websites to complex web
                applications, we provide tailored services, so that businesses
                can improve their supply chain, create business awareness, and
                reach more users.
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <Link
                  href="#"
                  className="rounded-md bg-orange-tertiary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Contact me
                </Link>
                <Link
                  href="/projects"
                  className="text-sm font-semibold leading-6 text-gray-100"
                >
                  Project portfolio <span aria-hidden="true">→</span>
                </Link>
              </div>
              <div className="lg:absolute lg:bottom-10 mt-10">
                <Link
                  href={"/recruiter"}
                  className="text-gray-100 text-sm lg:text-base"
                >
                  A recruiter? learn more about me{" "}
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
            <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
              <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                <CardFlip image={images?.[0]} />
              </div>
              <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                <CardFlip image={images?.[1]} />
                <CardFlip image={images?.[2]} />
              </div>
              <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                <CardFlip image={images?.[3]} />
                <CardFlip image={images?.[4]} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
);

export default Introduction;
