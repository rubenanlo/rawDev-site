import fs from "fs";
import yaml from "js-yaml";
import { getUpdatedIcons } from "helpers/getUpdatedIcons";
import { directory } from "helpers/getFile";

export const getSnapshot = (component) => {
  const fileName = getSnapshot.name.replace("get", "").toLowerCase();
  try {
    const data = yaml.load(
      fs.readFileSync(`${directory(component)}/${fileName}.yaml`, "utf8")
    );
    const [target] = data.highlights.filter((highlight) =>
      Object.prototype.hasOwnProperty.call(highlight, "techStack")
    );

    target.techStack = getUpdatedIcons(target.techStack);

    return {
      ...data,
    };
  } catch (error) {
    console.log(
      "There is an issue at rendering the icons, please check if you have imported all the images in the exportImages helper file"
    );
  }
};
