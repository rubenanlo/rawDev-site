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

export const getExperienceTimeline = () => {
  const fileNames = getFileNames();
  const timeline = [];

  fileNames.forEach((fileName) => {
    const data = yaml.load(
      fs.readFileSync(`${directory}/${fileName}.yaml`, "utf8")
    );

    if (fileName === "education") {
      data.forEach((study) => {
        timeline.push({ ...study, tag: "education" });
      });
    } else if (fileName === "work") {
      data.forEach((role) => {
        timeline.push({ ...role, tag: "work" });
      });
    }
  });

  const experienceTimeline = timeline.sort(
    (a, b) => dayjs(b.dateTime) - dayjs(a.dateTime)
  );
  return experienceTimeline;
};
