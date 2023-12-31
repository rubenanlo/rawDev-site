import Image from "next/image";
import Link from "next/link";
import Logo from "components/Logo.js";
import { navigation } from "static/footer/FOOTER";

const Footer = () => (
  <footer className="border-t border-white/50" aria-labelledby="footer-heading">
    <h2 id="footer-heading" className="sr-only">
      Footer
    </h2>
    <div className="mx-auto max-w-7xl px-6 pb-8 lg:px-8">
      <div className="flex flex-col items-center">
        <Logo />
        <ul role="list" className="mt-6 grid grid-cols-2 items-center">
          {navigation.links.map(({ name, href }) => (
            <li key={name} className="pb-4">
              <Link
                href={href}
                className="text-sm leading-6 pb-2 text-gray-300 hover:border-b hover:border-orange-primary"
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="border-t border-white/10 pt-8 flex flex-col gap-y-6 justify-between lg:flex-row items-center lg:justify-between">
        <div className="max-w-xl text-center lg:text-left">
          <h3 className="text-sm font-semibold leading-6 text-gray-100">
            Any request?
          </h3>
          <p className="mt-2 text-sm leading-6 text-gray-400">
            Contact us with a brief summary of what you need.
          </p>
        </div>
        <div className="mt-4 sm:ml-4 sm:mt-0 sm:flex-shrink-0">
          <Link
            href="/contact-form"
            className="flex w-[10rem] items-center justify-center rounded-md bg-orange-tertiary px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-secondary"
          >
            Contact
          </Link>
        </div>
      </div>
      <div className="mt-8 border-t border-white/10 pt-8 flex justify-between">
        <div className="flex space-x-6 md:order-2">
          {navigation.social.map(({ alt, href, icon }) => (
            <Link
              key={alt}
              href={href}
              className="text-gray-500 hover:text-gray-400 "
            >
              <span className="sr-only">{alt}</span>
              <Image
                src={icon}
                alt={alt}
                className="h-6 w-6"
                aria-hidden="true"
              />
            </Link>
          ))}
        </div>
        <p className="text-xs leading-5 text-gray-400 md:order-1">
          2023 rawDev. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
