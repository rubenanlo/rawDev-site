import { images } from "helpers/exportImages";

export const navigation = {
  links: [
    {
      name: "About",
      href: "/about",
    },
    {
      name: "Client Portal",
      href: "/dashboard",
    },
  ],
  // todo: social links are duplicated in brief bio and footer
  social: [
    {
      icon: images.GITHUB,
      alt: "GitHub",
      href: "https://github.com/rubenanlo",
    },
    {
      icon: images.LINKEDIN,
      alt: "Linkedin",
      href: "https://www.linkedin.com/in/ruben-andino/",
    },
  ],
};
