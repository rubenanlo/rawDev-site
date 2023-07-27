import {
  INTEGRITY,
  TRANSPARENCY,
  COLLABORATION,
  INNOVATION,
  EXPERTISE,
} from "helpers/exportImages";

export const images = [
  {
    src: INTEGRITY,
    alt: "integrity",
    headerPosition: "top",
    animation: {
      type: "flip",
      duration: 2,
      flipLeft: false,
    },
  },
  {
    src: TRANSPARENCY,
    alt: "transparency",
    headerPosition: "bottom",
    animation: {
      type: "drop",
      duration: 2,
    },
  },
  {
    src: COLLABORATION,
    alt: "collaboration",
    headerPosition: "middle",
    animation: {
      type: "drop",
      drop: 2,
    },
  },
  {
    src: INNOVATION,
    alt: "innovation",
    headerPosition: "middle",
    animation: {
      type: "flip",
      start: 1.5,
      flipLeft: true,
    },
  },
  {
    src: EXPERTISE,
    alt: "expertise",
    headerPosition: "bottom",
    animation: {
      type: "drop",
      duration: 2,
    },
  },
];
