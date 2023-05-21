export const getRedirectUrl = (provider) => {
  const redirectUrl = {
    spotify: "/playlists",
  };
  return redirectUrl[provider];
};
