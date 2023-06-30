import {
  AtSymbolIcon,
  // CalendarDaysIcon,
  HomeIcon,
  UserIcon,
  CodeBracketIcon,
} from "@heroicons/react/24/outline";

export const about = {
  sites: [
    {
      name: "About me",
      description: "If you want to learn more",
      href: "mailto:ruben.raw.dev@gmail.com",
      icon: UserIcon,
    },
    {
      name: "Project portfolio",
      description: "A glimpse of my work",
      href: "projects",
      icon: CodeBracketIcon,
    },
  ],
  callsToAction: [
    {
      name: "Contact",
      href: "mailto:ruben.raw.dev@gmail.com",
      icon: AtSymbolIcon,
    },
    // {
    //   name: "Schedule a call",
    //   description: "once we already have exchanged a couple of emails",
    //   href: "https://calendly.com/raw-dev/30min",
    //   icon: CalendarDaysIcon,
    // },
  ],
};

export const clientPortal = {
  name: "Client Portal",
  href: "/dashboard",
  description: "Access your dashboard",
  icon: HomeIcon,
};
