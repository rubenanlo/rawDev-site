import SpotifyWebApi from "spotify-web-api-node";

// For the scopes, please refer to the following link to find out what scopes
// you'll want to addd for your application: https://developer.spotify.com/documentation/web-api/concepts/scopes
const scopes = [
  "user-read-private",
  "user-read-email",
  "user-read-playback-state",
  "user-modify-playback-state",
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-top-read",
  "streaming",
  "user-read-playback-position",
  "user-read-recently-played",
  "user-library-read",
  // "user-library-modify",
  "user-follow-read",
  // "user-follow-modify",
  "playlist-read-private",
  "playlist-read-collaborative",
].join(",");

const params = {
  scope: scopes,
};

const queryParamString = new URLSearchParams(params);

export const LOGIN_URL = `https://accounts.spotify.com/authorize?${queryParamString.toString()}`;

const spotifyApi = new SpotifyWebApi({
  clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
  clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
});

export default spotifyApi;
