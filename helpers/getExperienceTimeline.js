import fs from "fs";
import path from "path";
import yaml from "js-yaml";
import dayjs from "dayjs";

const directory = path.join(
  process.cwd(),
  "public",
  "static",
  "about",
  "timeline"
);

const getFileNames = () =>
  fs
    .readdirSync(directory)
    .filter((file) => file.endsWith(".yaml"))
    .map((file) => file.replace(".yaml", ""));

export const getExperienceTimeline = () =>
  getFileNames()
    .reduce(
      (acc, fileName) => [
        ...acc,
        ...yaml
          .load(fs.readFileSync(`${directory}/${fileName}.yaml`, "utf8"))
          .map((item) => ({ ...item, tag: fileName })),
      ],
      []
    )
    .sort((a, b) => dayjs(b.dateTime) - dayjs(a.dateTime));
