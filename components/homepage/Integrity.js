const Integrity = () => (
  <div className="bg-blue-quaternary/50 py-40">
    <div className=" relative max-w-5xl mx-auto ">
      <div className="absolute grid grid-cols-4 -top-28 -z-10 opacity-40">
        <img className="rounded-tl-xl" src="static/assets/integrity-1.avif" />
        <img className="self-end" src="static/assets/integrity-2.avif" />
        <img src="static/assets/integrity-12.avif" />
        <img className="rounded-tr-xl" src="static/assets/integrity-11.avif" />
        <img className="rounded-bl-xl" src="static/assets/integrity-3.avif" />
        <img src="static/assets/integrity-8.avif" />
        <img src="static/assets/integrity-5.avif" />
        <img className="rounded-br-xl" src="static/assets/integrity-9.avif" />
      </div>
    </div>
    <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32 flex flex-col">
      <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-orange-primary sm:text-4xl text-center">
          Our way of work defines us
        </h1>
        <div className="mt-10 max-w-xl lg:max-w-3xl text-base text-center leading-7 text-gray-900 mx-auto">
          <div>
            <p>
              Our approach relies on honesty, trust, consistency,
              accountability, fairness, ethical behavior, authenticity, respect
              and reliability. We believe that such values provide the best
              outcome for our clients, and a good work environment where
              everybody can express their ideas in a collaborative way.
            </p>
            <p className="mt-10">
              We are committed to the use of the highest standards of{" "}
              <span className="text-orange-primary text-2xl">integrity</span> in
              all our projects and client relationships.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Integrity;
