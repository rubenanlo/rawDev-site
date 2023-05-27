import { atom } from "recoil";

export const playlistIdState = atom({
  key: "playlistIdState",
  default: "37i9dQZF1DXbYM3nMM0oPk",
});

export const startPlaying = atom({
  key: "startPlaying",
  default: false,
});
