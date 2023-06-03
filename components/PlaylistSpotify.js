import { useEffect, useState } from "react";
import useSpotify from "helpers/useSpotify";
import { classNames } from "helpers/setClassNames";
import { useSession } from "next-auth/react";
import { useRecoilState } from "recoil";
import { playlistIdState } from "atoms/playlistAtom";
import { isPlayingState } from "atoms/songAtom";

const PlaylistSpotify = () => {
  const [playlists, setPlaylists] = useState([]);
  const { data: session } = useSession();
  const spotifyApi = useSpotify();
  const [, setPlaylistId] = useRecoilState(playlistIdState);
  const [, setIsPlaying] = useRecoilState(isPlayingState);

  const fetchPlaylist = async () => {
    if (spotifyApi.getAccessToken()) {
      // getUserPlaylists() returns 20 playlists by default, by adding an object
      // as a parameter and specifying the limit, we can get up to 50 playlists
      await spotifyApi.getUserPlaylists({ limit: 50 }).then((data) => {
        setPlaylists(data.body.items);
      });
    }
  };
  useEffect(() => {
    fetchPlaylist();
  }, [session, spotifyApi]);

  return (
    <>
      <div className="text-xs font-semibold leading-6 text-gray-400">
        Your Playlists
      </div>
      <ul
        role="list"
        className="-mx-2 mt-2 mb-5 space-y-1 h-44 overflow-y-scroll overflow-x-hidden scrollbar-hide"
      >
        {playlists.map((playlist) => (
          <li key={playlist.id}>
            <button
              onClick={() => {
                setPlaylistId(playlist.id);
                setIsPlaying(true);
              }}
              className={classNames(
                playlist.current
                  ? "bg-gray-50 text-indigo-600"
                  : "text-gray-700 hover:text-indigo-600 hover:bg-gray-50 w-60",
                "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
              )}
            >
              <span
                className="text-gray-400 border-gray-200 group-hover:border-lime-600 group-hover:text-lime-600
                    flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border text-[0.625rem] font-medium bg-white"
              />
              <span className="truncate text-gray-500">{playlist.name}</span>
            </button>
          </li>
        ))}
      </ul>
      <div className="border-b w-20 mb-5 mx-auto" />
    </>
  );
};

export default PlaylistSpotify;
