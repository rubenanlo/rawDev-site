export const getRedirectUrl = (provider) => {
  const redirectUrl = {
    spotify: "/",
  };
  return redirectUrl[provider];
};
