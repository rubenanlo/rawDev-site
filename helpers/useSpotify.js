import { useEffect } from "react";
import { signIn, useSession } from "next-auth/react";
import spotifyApi from "library/spotify";

const useSpotify = () => {
  const { data: session } = useSession();

  useEffect(() => {
    if (session) {
      //       If the session exists (meaning the user is authenticated), the code
      //       checks if there was an error related to refreshing the access token. If
      //       such an error occurred (session.error is equal to
      //       "RefreshAccessTokenError"), it triggers the signIn function. This
      //       likely redirects the user to the sign-in page to reauthorize the
      //       Spotify API access.
      if (session.error === "RefreshAccessTokenError") {
        signIn();
      }
      // Finally, the spotifyApi.setAccessToken method is called with the user's
      // access token obtained from the session. This presumably sets the access token
      // for subsequent API requests using the spotifyApi object.
      spotifyApi.setAccessToken(session.user.accessToken);
    }
  }, [session]);

  return spotifyApi;
};

export default useSpotify;
