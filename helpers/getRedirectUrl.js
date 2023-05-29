export const getRedirectUrl = (provider) => {
  const redirectUrl = {
    spotify: "/dashboard",
  };
  return redirectUrl[provider];
};
