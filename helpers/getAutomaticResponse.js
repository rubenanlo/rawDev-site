import fs from "fs";
import yaml from "js-yaml";
import { directory, getFileNames } from "helpers/getFile";

export const getAutomaticResponse = (component, slug) =>
  getFileNames(component)
    .filter((fileName) => fileName === slug)
    .map((fileName) =>
      yaml.load(
        fs.readFileSync(`${directory(component)}/${fileName}.yaml`, "utf8")
      )
    );
