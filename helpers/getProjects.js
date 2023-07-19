import fs from "fs";
import path from "path";
import yaml from "js-yaml";
import { images } from "helpers/exportImages";

const directory = path.join(
  process.cwd(),
  "public",
  "static",
  "about",
  "projects"
);

// Get the distinct image keys without size suffixes
const imagesArr = [
  ...new Set(Object.keys(images).map((key) => key.replace(/_SM|_LG|_MD/g, ""))),
];

const getFileNames = () =>
  fs
    .readdirSync(directory)
    .filter((file) => file.endsWith(".yaml"))
    .map((file) => file.replace(".yaml", ""));

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

const getUpdatedLinks = (project) => {
  try {
    return project.links.map(
      ({ icon, alt, ...rest }) =>
        images[icon] && { icon: images[icon], alt, ...rest }
    );
  } catch (error) {
    console.log(
      "You forgot to add Links for this project, please add at least one link"
    );
  }
};

const getUpdatedTechStack = (project) => {
  try {
    return project.techStack.map(
      ({ icon, alt }) => images[icon] && { icon: images[icon], alt }
    );
  } catch (error) {
    console.log("You forgot to add the techStack for this project");
  }
};

export const getProjects = () =>
  getFileNames()
    .map((fileName) => {
      const project = yaml.load(
        fs.readFileSync(`${directory}/${fileName}.yaml`, "utf8")
      );
      return {
        ...project,
        ...getCoverImage(fileName),
        techStack: getUpdatedTechStack(project),
        links: getUpdatedLinks(project),
      };
    })
    .sort((a, b) => a.id - b.id);
