import { useEffect, useState } from "react";
import Image from "next/image";
import ErrorSpotify from "components/error-handling/ErrorSpotify";
import { useRecoilState, useRecoilValue } from "recoil";
import { PlayIcon } from "@heroicons/react/20/solid";
import { PauseIcon } from "@heroicons/react/24/outline";
import { isPlayingState } from "atoms/songAtom";
import { playlistIdState } from "atoms/playlistAtom";
import useSpotify from "helpers/useSpotify";
import { playSong } from "helpers/setPlayerSpotify";
import { pauseSong } from "helpers/setPlayerSpotify";
import { getCurrentPlayingSong } from "helpers/setPlayerSpotify";
import SPOTIFY_LOGO from "static/assets/spotify-logo.jpeg";
const PlayerSpotify = () => {
  // set useStates for playlistId that we select from the PlaylistSpotify
  // component, what playlist will be playing, the currentSong that is playing
  // so we render information about it, the isPlaying state to know if the song
  // is playing or not, and the errorMessage and showErrorModalPlay for error
  // handling purposes when there is no token refreshed or no device found
  const playlistId = useRecoilValue(playlistIdState);
  const [playlist, setPlaylist] = useState(playlistId);
  const [currentSong, setCurrentSong] = useState("");
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

  // fetch the current song that is playing so that we show information in the
  // player section
  const fetchCurrentSong = async () => {
    try {
      const {
        body: { item },
      } = await getCurrentPlayingSong(spotifyApi);
      setCurrentSong(item);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPlaylist();
    fetchCurrentSong();
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

  return (
    <>
      {showErrorModalPlay && <ErrorSpotify errorMessage={errorMessage} />}
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
        <div className="flex justify-between items-center px-2">
          {currentSong?.album?.images ? (
            <Image
              src={currentSong?.album?.images?.[0].url}
              alt=""
              width={20}
              height={20}
              className="border w-8 rounded-sm"
            />
          ) : (
            <Image
              width={20}
              height={20}
              alt="spotify logo"
              src={SPOTIFY_LOGO}
              className="w-8 h-8 rounded-sm bg-lime-900"
            ></Image>
          )}
          <p className="truncate ml-2 text-xs text-gray-800">
            {currentSong.name}
          </p>
          <button onClick={playPauseSong}>
            {isPlaying ? (
              <PauseIcon className="w-6 text-gray-900" />
            ) : (
              <PlayIcon className="w-6 text-gray-900" />
            )}
          </button>
        </div>
      </div>
    </>
  );
};

export default PlayerSpotify;
