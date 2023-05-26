import { signOut, useSession } from "next-auth/react";
import Head from "next/head";

const Playlists = () => {
  const { data: session } = useSession();
  console.log("🚀 ~ file: playlists.js:7 ~ Playlists ~ session:", session);
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Head>
        <title></title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <button
        className="border bg-slate-600 text-gray-100 rounded-md px-5 py-3"
        onClick={() => signOut()}
      >
        <p>Log out from Spotify</p>
      </button>
    </div>
  );
};

export default Playlists;