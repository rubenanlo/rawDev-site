import fs from "fs";
import path from "path";
import yaml from "js-yaml";
import { images } from "helpers/exportImages";

// Get the distinct image keys without size suffixes
const imagesArr = [
  ...new Set(Object.keys(images).map((key) => key.replace(/_SM|_LG|_MD/g, ""))),
];

// Define the directory path
const directory = path.join(
  process.cwd(),
  "public",
  "static",
  "about",
  "projects"
);

// Function to get the file names from the directory
const getFileNames = () =>
  fs
    .readdirSync(directory)
    .filter((file) => file.endsWith(".yaml"))
    .map((file) => file.replace(".yaml", ""));

// Retrieve projects
export const getProjects = () =>
  getFileNames().map((fileName) => {
    // Load the YAML file for the project
    const project = yaml.load(
      fs.readFileSync(`${directory}/${fileName}.yaml`, "utf8")
    );
    let updatedTechStack;
    let coverImages;
    let updatedLinks;

    // Replace techStack icons with image objects
    try {
      updatedTechStack = project.techStack.map(({ icon, alt }) => {
        const image = images[icon];
        if (image) {
          return { icon: image, alt };
        }
      });
    } catch (error) {
      console.log("You gorgot to add the techStack for this project");
    }

    // Merge the updated techStack with the project object
    const updatedProject = {
      ...project,
      techStack: updatedTechStack,
    };

    // Find the corresponding image key for the current project
    const coverImage = imagesArr.find((img) => fileName.toUpperCase() === img);

    // Generate image properties based on available sizes
    try {
      coverImages = ["_LG", "_MD", "_SM"].reduce((acc, size) => {
        const imageUrl = images[`${coverImage}${size}`];
        if (imageUrl) {
          // Generate the property key dynamically based on size
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

    // Replace link icons with image objects
    try {
      updatedLinks = project.links.map(({ icon, alt, ...rest }) => {
        const image = images[icon];
        if (image) {
          return { icon: image, alt, ...rest };
        }
        return {};
      });
    } catch (error) {
      console.log(
        "You forgot to add Links for this project, please add at least one link"
      );
    }

    // Merge the updated techStack with the project object

    // Merge the updatedProject object with the image properties
    return {
      ...updatedProject,
      ...coverImages,
      techStack: updatedTechStack,
      links: updatedLinks,
    };
  });
