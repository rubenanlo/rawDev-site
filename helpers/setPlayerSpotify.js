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

export const getCurrentPlayingSong = async (spotifyApi) => {
  try {
    return await spotifyApi.getMyCurrentPlayingTrack();
  } catch (error) {
    console.log(error);
    throw error;
  }
};

// ********* //
// The API does not work for skipping songs, so the following functions haven't
// been used in the app. They are here for reference.

// export const skipSong = async (spotifyApi, accessToken) => {
//   try {
//     console.log("yay");
//     await spotifyApi.skipToNext(accessToken);
//   } catch (error) {
//     console.log(error);
//     throw error;
//   }
// };

// export const previousSong = async (spotifyApi) => {
//   try {
//     await spotifyApi.skipToPrevious();
//   } catch (error) {
//     console.log(error);
//     throw error;
//   }
// };
