import fs from "fs";
import yaml from "js-yaml";
import { images } from "helpers/exportImages";
import { getUpdatedIcons } from "helpers/getUpdatedIcons";
import { directory, getFileNames } from "helpers/getFile";

// Get the distinct image keys without size suffixes
const imagesArr = [
  ...new Set(Object.keys(images).map((key) => key.replace(/_SM|_LG|_MD/g, ""))),
];

const getCoverImage = (fileName) => {
  const coverImage = imagesArr.find((img) => fileName.toUpperCase() === img);

  try {
    return ["_LG", "_MD", "_SM"].reduce((acc, size) => {
      const imageUrl = images[`${coverImage}${size}`];
      if (imageUrl) {
        const propertyKey = `imageUrl${size.replace(/_(.)/g, (_, char) =>
          char.toUpperCase()
        )}`;
        acc[propertyKey] = imageUrl;
      }
      return acc;
    }, {});
  } catch (error) {
    console.log(
      "You forgot to add the image for this project, or you forgot to use the right naming convention for the image, please see the README file for more info"
    );
  }
};

export const getProjects = (component) => {
  const subfolder = getProjects.name.replace("get", "").toLowerCase();
  return getFileNames(component, subfolder)
    .map((fileName) => {
      const { techStack, links, ...project } = yaml.load(
        fs.readFileSync(
          `${directory(component, subfolder)}/${fileName}.yaml`,
          "utf8"
        )
      );
      return {
        ...project,
        ...getCoverImage(fileName),
        techStack: getUpdatedIcons(techStack),
        ...(getUpdatedIcons(links) && {
          links: getUpdatedIcons(links),
        }),
      };
    })
    .sort((a, b) => a.id - b.id);
};
