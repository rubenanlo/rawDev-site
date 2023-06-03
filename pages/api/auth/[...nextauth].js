import NextAuth from "next-auth";
import SpotifyProvider from "next-auth/providers/spotify";
import spotifyApi, { LOGIN_URL } from "library/spotify";
import CredentialsProvider from "next-auth/providers/credentials";
import { verifyCredentials } from "helpers/verifyCredentials";

const refreshAccessToken = async (token) => {
  try {
    // these methods come from spotify documentation?
    // source: https://github.com/thelinmichael/spotify-web-api-node
    spotifyApi.setAccessToken(token.accessToken);
    spotifyApi.setRefreshToken(token.refreshToken);
    const { body: refreshToken } = await spotifyApi.refreshAccessToken();
    return {
      ...token,
      accessToken: refreshToken.access_token,
      accessTokenExpires: Date.now + refreshToken.expires_in * 1000, // = 1 hour
      refreshToken: refreshToken.refresh_token ?? token.refreshToken, // fall back to old refresh token
    };
  } catch (error) {
    console.log(error);
    return {
      ...token,
      error: "RefreshAccessTokenError",
    };
  }
};

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: "Credentials",
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        username: { label: "Username", type: "text", placeholder: "johndoe" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // You need to provide your own logic here that takes the credentials
        // submitted and returns either a object representing a user or value
        // that is false/null if the credentials are invalid.
        // e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
        // You can also use the `req` object to obtain additional parameters
        // (i.e., the request IP address)
        // Return object containing user information
        // Return null to indicate authentication failure
        return ((await verifyCredentials(credentials)) && credentials) || null;
      },
    }),
    SpotifyProvider({
      clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
      authorization: LOGIN_URL,
    }),
    // ...add more providers here
  ],
  secret: process.env.JWT_SECRET,
  pages: {
    signIn: "/login",
  },
  session: { strategy: "jwt" },
  callbacks: {
    // Source: https://next-auth.js.org/v3/tutorials/refresh-token-rotation
    async jwt({ token, account, user }) {
      // initial signin:
      if (account && user) {
        return {
          ...token,
          accessToken: account.access_token,
          refreshToken: account.refresh_token,
          username: account.providerAccountId,
          accessTokenExpires: account.expires_at * 1000, //we are getting seconds, need milliseconds, therefore 1000
        };
      }
      //   access token is still valid:
      if (Date.now() < token.accessTokenExpires) {
        return token;
      }
      //   access token expires, we will refresh it:
      return await refreshAccessToken(token);
    },
    async session({ session, token }) {
      session.user.accessToken = token.accessToken;
      session.user.refreshToken = token.refreshToken;
      session.user.username = token.username;

      return session;
    },
  },
};

export default NextAuth(authOptions);
