import { signIn } from "next-auth/react";
// import { getRedirectUrl } from "helpers/getRedirectUrl";

export const SignIn = async (providers) => {
  // console.log(providers);
  return Object.values(providers).map((provider) =>
    signIn(provider.id, { callbackUrl: "/" })
  );
};
