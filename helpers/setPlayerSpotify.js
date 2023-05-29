export const playSong = async (spotifyApi, playlist) => {
  try {
    await spotifyApi.play({ uris: [playlist?.tracks?.items?.[0].track?.uri] });
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const pauseSong = async (spotifyApi) => {
  try {
    await spotifyApi.pause();
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const skipSong = async (spotifyApi) => {
  try {
    await spotifyApi.skipToNext();
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const previousSong = async (spotifyApi) => {
  try {
    await spotifyApi.skipToPrevious();
  } catch (error) {
    console.log(error);
    throw error;
  }
};
