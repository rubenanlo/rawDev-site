import { atom } from "recoil";

export const errorMessageState = atom({
  key: "errorMessageState",
  default: "",
});

export const showErrorModalPlayState = atom({
  key: "showErrorModalPlayState",
  default: false,
});
