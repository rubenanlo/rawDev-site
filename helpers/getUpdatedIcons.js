import { images } from "helpers/exportImages";

export const getUpdatedIcons = (icons) => {
  try {
    return typeof icons === "string"
      ? images[icons] && images[icons]
      : icons?.map(
          ({ icon, ...rest }) => images[icon] && { icon: images[icon], ...rest }
        );
  } catch (error) {
    console.log("There is an issue at rendering the icons");
  }
};
