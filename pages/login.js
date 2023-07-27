import { useState } from "react";
import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import Logo from "components/Logo";
import AppLayoutWithoutNavbar from "layouts/AppLayoutWithoutNavbar";
import LOGIN_IMAGE from "static/assets/login.webp";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <AppLayoutWithoutNavbar>
      <div className="flex h-screen flex-1 ">
        <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div className="mx-auto w-full max-w-sm lg:w-96">
            <div>
              <div className="flex items-end gap-x-3">
                <Logo size="big" />
              </div>
              <h2 className="mt-8 text-2xl font-bold leading-9 tracking-tight text-light ">
                Sign in to your account
              </h2>
              <p className="mt-2 text-sm leading-6 text-gray-400">
                Interested in this web app?{" "}
                <Link
                  href="#"
                  className="font-semibold text-orange-tertiary hover:text-orange-quaternary"
                >
                  contact me
                </Link>
              </p>
            </div>

            <div className="mt-5">
              <div>
                <form
                  className="space-y-6"
                  onSubmit={(e) => {
                    e.preventDefault();
                    signIn("credentials", {
                      email: email,
                      password: password,
                      redirect: true,
                      callbackUrl: "/dashboard",
                    });
                  }}
                >
                  <div>
                    <div className="flex items-center relative top-[1.27rem]">
                      <div className="border-b w-3" />
                      <label
                        htmlFor="username"
                        className="block shrink-0 text-sm font-medium leading-6 text-gray-400 px-2"
                      >
                        Email address
                      </label>
                      <div className="border-b w-full" />
                    </div>
                    <div className="mt-2 rounded-b-sm border-b border-x">
                      <input
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        className="block border-none w-full py-1.5 shadow-sm bg-transparent placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 text-gray-50"
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center relative top-[1.27rem]">
                      <div className="border-b w-3" />
                      <label
                        htmlFor="password"
                        className="block shrink-0 text-sm font-medium leading-6 text-gray-400 px-2 max-w-max"
                      >
                        Password
                      </label>
                      <div className="border-b w-full" />
                    </div>

                    <div className="mt-2 border-b border-x rounded-sm">
                      <input
                        onChange={(e) => {
                          setPassword(e.target.value);
                        }}
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        required
                        className="block w-full border-none py-1.5 shadow-sm bg-transparent placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 text-gray-50"
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <input
                        id="remember-me"
                        name="remember-me"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-30"
                      />
                      <label
                        htmlFor="remember-me"
                        className="ml-3 block cursor-pointer text-sm leading-6 text-orange-tertiary hover:text-orange-quaternary focus:ring-blue-secondary"
                      >
                        Remember me
                      </label>
                    </div>

                    <div className="text-sm leading-6">
                      <Link
                        href="#"
                        className="font-semibold text-orange-tertiary hover:text-orange-quaternary"
                      >
                        Forgot password?
                      </Link>
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="flex w-full justify-center rounded-md text-orange-primary bg-orange-tertiary hover:bg-orange-quaternary px-3 py-1.5 text-sm font-semibold leading-6 shadow-sm hover:bg-blue-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-secondary"
                    >
                      Sign in
                    </button>
                  </div>
                </form>
              </div>

              <div className="mt-10">
                <div className="relative">
                  <div
                    className="absolute inset-0 flex items-center"
                    aria-hidden="true"
                  >
                    <div className="w-full border-t border-gray-200" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative hidden w-0 flex-1 lg:block">
          <Image
            className="absolute inset-0 h-full w-full object-cover"
            src={LOGIN_IMAGE}
            alt="login image"
          />
        </div>
      </div>
    </AppLayoutWithoutNavbar>
  );
};

export default Login;
