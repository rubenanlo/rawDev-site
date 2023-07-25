import fs from "fs";
import yaml from "js-yaml";
import { images } from "helpers/exportImages";
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

const getUpdatedLinks = ({ links }) => {
  try {
    return links?.map(
      ({ icon, alt, ...rest }) =>
        images[icon] && { icon: images[icon], alt, ...rest }
    );
  } catch (error) {
    console.log("There is an issue at rendering the links");
  }
};

const getUpdatedTechStack = ({ techStack }) => {
  try {
    return techStack.map(
      ({ icon, alt }) => images[icon] && { icon: images[icon], alt }
    );
  } catch (error) {
    console.log("You forgot to add the techStack for this project");
  }
};

export const getProjects = (subfolder) =>
  getFileNames(subfolder)
    .map((fileName) => {
      const project = yaml.load(
        fs.readFileSync(`${directory(subfolder)}/${fileName}.yaml`, "utf8")
      );
      return {
        ...project,
        ...getCoverImage(fileName),
        techStack: getUpdatedTechStack(project),
        ...(getUpdatedLinks(project) && { links: getUpdatedLinks(project) }),
      };
    })
    .sort((a, b) => a.id - b.id);
