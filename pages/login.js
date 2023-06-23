import { signIn } from "next-auth/react";
import Image from "next/image";
import LOGIN_IMAGE from "static/assets/login.avif";
import { useState } from "react";
import Logo from "../components/Logo";
import Link from "next/link";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
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
                  <label
                    htmlFor="username"
                    className="block text-sm font-medium leading-6 text-gray-400 bg-blue-primary relative top-5 left-2 px-2 max-w-max"
                  >
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      className="block w-full rounded-sm border-0 py-1.5 shadow-sm bg-blue-primary ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-tertiary sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-6 text-gray-400 relative top-5 left-2 px-2 bg-blue-primary max-w-max"
                  >
                    Password
                  </label>
                  <div className="mt-2">
                    <input
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      required
                      className="block w-full rounded-sm border-0 py-1.5 shadow-sm bg-blue-primary ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-tertiary sm:text-sm sm:leading-6"
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
                      className="ml-3 block pointer-cursor text-sm leading-6 text-orange-tertiary hover:text-orange-quaternary focus:ring-blue-secondary"
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
  );
};

export default Login;
