export const playSong = (isStartPlaying, spotifyApi, playlist) => {
  isStartPlaying &&
    spotifyApi.play({ uris: [playlist?.tracks?.items?.[0].track?.uri] });
};

export const pauseSong = (spotifyApi) => {
  spotifyApi.pause();
};

export const playPauseSong = (isPlaying, spotifyApi, playlist) => {
  // Pause the song if it is currently playing or
  // Play the first song in the playlist if it is not playing
  isPlaying ? pauseSong(spotifyApi) : playSong(spotifyApi, playlist);
};
