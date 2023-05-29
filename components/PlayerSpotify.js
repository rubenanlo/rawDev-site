import { useEffect, useState } from "react";
import Image from "next/image";
// import axios from "axios";
// import { useSession } from "next-auth/react";
import ErrorNoDeviceFound from "components/error-handling/ErrorNoDeviceFound";
import { useRecoilState, useRecoilValue } from "recoil";
import { ForwardIcon, PlayIcon } from "@heroicons/react/20/solid";
import { BackwardIcon } from "@heroicons/react/24/solid";
import { PauseIcon } from "@heroicons/react/24/outline";
import { isPlayingState } from "atoms/songAtom";
import { playlistIdState } from "atoms/playlistAtom";
import useSpotify from "helpers/useSpotify";
import { playSong } from "helpers/setPlayerSpotify";
import { pauseSong } from "helpers/setPlayerSpotify";
// import { skipSong } from "helpers/setPlayerSpotify";

const PlayerSpotify = () => {
  // Get the current playlist ID from Recoil state
  const playlistId = useRecoilValue(playlistIdState);
  const [playlist, setPlaylist] = useState(playlistId);

  // Get the current song playing state from Recoil state for when the plalistId
  // changes or when the user clicks on the play/pause button
  // const [currentSongId, setCurrentSongId] = useRecoilState(currentSongIdState);
  const [isPlaying, setIsPlaying] = useRecoilState(isPlayingState);

  const [errorMessage, setErrorMessage] = useState("");
  const [showErrorModalPlay, setShowErrorModalPlay] = useState(false);

  // Get the Spotify API instance
  const spotifyApi = useSpotify();

  // Fetch the playlist from Spotify API
  const fetchPlaylist = async () => {
    try {
      const { body } = await spotifyApi.getPlaylist(playlistId);
      isPlaying && playSong(spotifyApi, body);
      setPlaylist(body);
    } catch (error) {
      setErrorMessage(error.message);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPlaylist();
  }, [playlistId, spotifyApi]);

  // Function to play or pause the song
  const playPauseSong = async () => {
    try {
      setIsPlaying(!isPlaying);

      // Pause the song if it is currently playing or
      // Play the first song in the playlist if it is not playing
      isPlaying
        ? await pauseSong(spotifyApi)
        : await playSong(spotifyApi, playlist);
    } catch (error) {
      setShowErrorModalPlay(true);
      setErrorMessage(error.message);
      setIsPlaying(false);
      // NOTE: Normally, we would throw an error here, but since we are using a modal
      // to display the error, we don't need to throw an error. If we threw an
      // error, the app would crash and the modal would not be displayed.
    }
  };

  // const { data: session } = useSession();
  // console.log(
  //   "🚀 ~ file: PlayerSpotify.js:53 ~ PlayerSpotify ~ session:",
  //   session
  // );

  // const skipNextSong = async () => {
  //   try {
  //     console.log("yay");
  //     const response = await axios.post(
  //       "https://api.spotify.com/v1/me/player/next",
  //       { headers: { Authorization: `Bearer ${session?.user?.refreshToken}` } }
  //     );
  //     console.log(response);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <>
      {showErrorModalPlay && <ErrorNoDeviceFound errorMessage={errorMessage} />}
      <div className="flex flex-col justify-center mb-10 w-52 mx-auto">
        {playlist?.images?.[0].url && (
          <Image
            loading="lazy"
            width={300}
            height={300}
            // to check if images exists below
            src={playlist?.images?.[0].url}
            alt="player"
            className="group rounded-lg mb-5 shadow-md w-52 mx-auto"
          />
        )}
        <div className="flex justify-between px-2">
          <button onClick={""}>
            <BackwardIcon className="w-9 text-gray-900" />
          </button>
          <button onClick={playPauseSong}>
            {isPlaying ? (
              <PauseIcon className="w-9 text-gray-900" />
            ) : (
              <PlayIcon className="w-9 text-gray-900" />
            )}
          </button>
          <button onClick={""}>
            <ForwardIcon className="w-9 text-gray-900" />
          </button>
        </div>
      </div>
    </>
  );
};

export default PlayerSpotify;
