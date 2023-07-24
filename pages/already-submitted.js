import AppLayoutWithNavbar from "layouts/AppLayoutWithNavbar";

const AlreadySubmitted = () => (
  <AppLayoutWithNavbar>
    <div className="h-screen text-gray-100 flex flex-col justify-center items-center">
      <div className="text-center max-w-xl">
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-orange-quaternary sm:text-4xl">
          You have submitted a form already!
        </h2>
        <p className="mt-6 text-lg leading-8 text-gray-400 text-center">
          You can only submit one form I&apos;m afraid.
        </p>
        <p className="mt-6 text-lg leading-8 text-gray-400 text-center">
          But, hey! If you verified your email, I will get back to you as soon
          as I can. Even if you missed anything in your original one!
        </p>
      </div>
    </div>
  </AppLayoutWithNavbar>
);
export default AlreadySubmitted;
