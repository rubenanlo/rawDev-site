import { images } from "helpers/exportImages";

export const getUpdatedIcons = (icons) => {
  try {
    return icons?.map(
      ({ icon, ...rest }) => images[icon] && { icon: images[icon], ...rest }
    );
  } catch (error) {
    console.log("There is an issue at rendering the icons");
  }
};
