export const playSong = (spotifyApi, playlist) => {
  spotifyApi.play({ uris: [playlist?.tracks?.items?.[0].track?.uri] });
};

export const pauseSong = (spotifyApi) => {
  spotifyApi.pause();
};
