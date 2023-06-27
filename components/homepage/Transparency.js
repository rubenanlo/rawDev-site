import Link from "next/link";
import { LinkIcon, UserPlusIcon } from "@heroicons/react/20/solid";
import TRANSPARENCY_ONE from "static/assets/transparency-1.png";
import Image from "next/image";

const features = [
  {
    name: "Provide access to others.",
    description:
      "If you are interested in giving access to your GitHub repo, you can do so by the click of a button.",
    icon: UserPlusIcon,
  },
  {
    name: "Preview links ready for you.",
    description:
      "As part of our process, you will have the ability to check your website at every step of the way.",
    icon: LinkIcon,
  },
];

const Transparency = () => (
  <div
    id="transparency"
    className="overflow-hidden py-24 sm:py-32  bg-blue-primary"
  >
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
        <div className="lg:ml-auto lg:pl-4 lg:pt-4">
          <div className="lg:max-w-lg">
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-orange-quaternary sm:text-4xl">
              Your are in control
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-400">
              <span className="text-orange-tertiary text-2xl">
                Transparency
              </span>{" "}
              is key for us. We want you to be in control of your website. We
              will provide you with the tools to do so. You will be able to
              track progress, review any preview of your website and grant
              additional access to the GitHub repo.
            </p>
            <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-400 lg:max-w-none">
              {features.map((feature) => (
                <div key={feature.name} className="relative pl-9">
                  <dt className="inline font-semibold text-gray-50">
                    <feature.icon
                      className="absolute left-1 top-1 h-5 w-5 text-orange-primary"
                      aria-hidden="true"
                    />
                    {feature.name}
                  </dt>{" "}
                  <dd className="inline">{feature.description}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-10">
              <Link
                href="/live-demo"
                className="text-sm text-gray-100 font-semibold leading-6 "
              >
                Live demo <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex items-start justify-end lg:order-first">
          <Image
            src={TRANSPARENCY_ONE}
            alt="Product screenshot"
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
          />
        </div>
      </div>
    </div>
  </div>
);

export default Transparency;
