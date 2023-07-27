import { LinkIcon, UserPlusIcon } from "@heroicons/react/20/solid";
import { TRANSPARENCY_1 } from "helpers/exportImages";

export const data = {
  image: TRANSPARENCY_1,
  features: [
    {
      name: "Provide access to others.",
      description:
        "If you are interested in giving access to your GitHub repo, you can do so by the click of a button.",
      icon: UserPlusIcon,
    },
    {
      name: "Preview links ready for you.",
      description:
        "As part of our process, you will have the ability to check your website at every step of the way.",
      icon: LinkIcon,
    },
  ],
};
