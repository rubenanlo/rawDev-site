import { atom } from "recoil";

export const playlistIdState = atom({
  key: "playlistIdState",
  default: "40PGoqMIeSkFgPaszx1ecA",
});

export const startPlaying = atom({
  key: "startPlaying",
  default: false,
});
