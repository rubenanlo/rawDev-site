import { signIn } from "next-auth/react";
import { getRedirectUrl } from "helpers/getRedirectUrl";

export const SignIn = async (providers, username, password, session) => {
  console.log("providers", providers);
  const credentials = Object.values(providers).filter(
    (provider) => provider.id === "credentials"
  );
  console.log("🚀 ~ file: setSignIn.js:9 ~ SignIn ~ credentials:", credentials);
  const restProviders = Object.values(providers).filter(
    (provider) => provider.id !== "credentials"
  );

  signIn("credentials", {
    username: username,
    password: password,
    redirect: true,
    callbackUrl: getRedirectUrl("credentials"),
  });

  return (
    session &&
    Object.values(restProviders).map((provider) =>
      signIn(provider.id, {
        redirect: true,
        callbackUrl: getRedirectUrl(provider.id),
      })
    )
  );
};
