import fs from "fs";
import path from "path";

export const directory = (subfolder) =>
  path.join(process.cwd(), "public", "static", "about", subfolder);

export const getFileNames = (subfolder) =>
  fs
    .readdirSync(directory(subfolder))
    .filter((file) => file.endsWith(".yaml"))
    .map((file) => file.replace(".yaml", ""));
