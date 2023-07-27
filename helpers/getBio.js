import fs from "fs";
import yaml from "js-yaml";
import { getUpdatedIcons } from "helpers/getUpdatedIcons";
import { directory } from "helpers/getFile";

export const getBio = (component) => {
  const fileName = getBio.name.replace("get", "").toLowerCase();
  try {
    const data = yaml.load(
      fs.readFileSync(`${directory(component)}/${fileName}.yaml`, "utf8")
    );
    data.author.icon = getUpdatedIcons(data.author.icon);
    data.social = getUpdatedIcons(data.social);

    return {
      ...data,
    };
  } catch (error) {
    console.log("Unidentified issue");
  }
};
