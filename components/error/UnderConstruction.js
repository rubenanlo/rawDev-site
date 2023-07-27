import Image from "next/image";
import Link from "next/link";

const UnderConstruction = () => (
  <main className="relative isolate h-screen">
    <Image
      src="static/assets/live-demo.webp"
      alt="under-construction"
      className="absolute inset-0 -z-10 h-full w-full object-cover object-top"
      width={20}
      height={20}
    />
    <div className="mx-auto max-w-7xl px-6 py-32 text-center md:text-right sm:py-40 lg:px-8 md:h-full md:flex md:flex-col md:justify-end">
      <h1 className="mt-10 text-3xl font-bold tracking-tight text-gray-800 sm:text-5xl">
        In progress...
      </h1>
      <p className="mt-4 text-base text-gray-900/70 sm:mt-6">
        We are working hard to get this site done.
      </p>
      <div className="mt-10 flex justify-center lg:justify-end">
        <Link
          href="/"
          className="text-sm font-semibold leading-7 text-gray-700"
        >
          <span aria-hidden="true">&larr;</span> Back to home
        </Link>
      </div>
    </div>
  </main>
);

export default UnderConstruction;
