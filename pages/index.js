import { signOut } from "next-auth/react";
import Head from "next/head";

const Playlists = () => {
  return (
    <div className="border h-screen w-screen">
      <Head>
        <title></title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <h1 className="mx-auto">Playlists</h1>
      <p>hello</p>
      <button
        className="border bg-slate-600 text-gray-100 rounded-md px-5 py-3"
        onClick={() => signOut()}
      >
        <p>Log out</p>
      </button>
    </div>
  );
};

export default Playlists;
