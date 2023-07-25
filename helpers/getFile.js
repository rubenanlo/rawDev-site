import fs from "fs";
import path from "path";

export const directory = (component, subfolder = "") =>
  path.join(process.cwd(), "public", "static", component, subfolder);

export const getFileNames = (component, subfolder) =>
  fs
    .readdirSync(directory(component, subfolder))
    .filter((file) => file.endsWith(".yaml"))
    .map((file) => file.replace(".yaml", ""));
