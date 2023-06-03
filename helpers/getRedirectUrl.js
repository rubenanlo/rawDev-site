export const getRedirectUrl = (provider) => {
  const redirectUrl = {
    // spotify: "/dashboard",
    credentials: "/dashboard",
  };
  return redirectUrl[provider];
};
