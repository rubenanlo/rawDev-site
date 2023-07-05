import AppLayoutWithNavbar from "layouts/AppLayoutWithNavbar";

const Verification = () => (
  <AppLayoutWithNavbar>
    <div className="h-screen text-gray-100 flex flex-col justify-center items-center">
      <div className="text-center max-w-xl">
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-orange-quaternary sm:text-4xl">
          Email verified!
        </h2>
        <p className="mt-6 text-lg leading-8 text-gray-400 text-center">
          Thank you very much for verifying your email, I will get back to you
          as soon as possible. In the meantime, please feel free to keep
          checking out the website.
        </p>
      </div>
    </div>
  </AppLayoutWithNavbar>
);
export default Verification;
