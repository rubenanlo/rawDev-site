import AppLayoutWithNavbar from "layouts/AppLayoutWithNavbar";

const AlreadySubmitted = () => (
  <AppLayoutWithNavbar>
    <div className="h-screen text-gray-100 flex flex-col justify-center items-center">
      <div className="text-center max-w-xl">
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-orange-quaternary sm:text-4xl">
          You have submitted a form already!
        </h2>
        <p className="mt-6 text-lg leading-8 text-gray-400 text-center">
          A user can only submit one form. If you verified your email, I will
          get back to you as soon as possible. Even if you missed anything in
          your original one!.
        </p>
        <p className="mt-6 text-lg leading-8 text-gray-400 text-center">
          In the meantime, please feel free to keep snooping around the website.
        </p>
      </div>
    </div>
  </AppLayoutWithNavbar>
);
export default AlreadySubmitted;
