import fs from "fs";
import yaml from "js-yaml";
import dayjs from "dayjs";
import { directory, getFileNames } from "helpers/getFile";

export const getTimeline = (subfolder) =>
  getFileNames(subfolder)
    .reduce(
      (acc, fileName) => [
        ...acc,
        ...yaml
          .load(
            fs.readFileSync(`${directory(subfolder)}/${fileName}.yaml`, "utf8")
          )
          .map((item) => ({ ...item, tag: fileName })),
      ],
      []
    )
    .sort((a, b) => dayjs(b.dateTime) - dayjs(a.dateTime));
