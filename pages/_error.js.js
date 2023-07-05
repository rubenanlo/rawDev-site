import Link from "next/link";

const Error = () => {
  return (
    <>
      <main className="relative isolate h-screen bg-error bg-no-repeat bg-cover">
        <div className="bg-orange-quaternary/20 h-full">
          <div className="mx-auto max-w-7xl px-6 py-32 text-center sm:py-40 lg:px-8">
            <p className="text-base font-semibold leading-8 text-white">404</p>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">
              Page not found
            </h1>
            <p className="mt-4 text-base text-white/70 sm:mt-6">
              Sorry, we couldn’t find the page you’re looking for.
            </p>
            <div className="mt-10 flex justify-center">
              <Link
                href="/"
                className="text-sm font-semibold leading-7 text-gray-50"
              >
                <span aria-hidden="true">&larr;</span> Back to home
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Error;
