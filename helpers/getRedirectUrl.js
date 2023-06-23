export const getRedirectUrl = (provider) => {
  const redirectUrl = {
    credentials: "/dashboard",
  };
  return redirectUrl[provider];
};
