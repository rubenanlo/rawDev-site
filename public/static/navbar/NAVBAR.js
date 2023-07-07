import {
  AtSymbolIcon,
  // CalendarDaysIcon,
  HomeIcon,
  UserIcon,
  CodeBracketIcon,
} from "@heroicons/react/24/outline";

export const about = [
  {
    name: "About me",
    description: "If you want to learn more",
    href: "/about",
    icon: UserIcon,
  },
  {
    name: "Project portfolio",
    description: "A glimpse of my work",
    href: "/about#project-portfolio",
    icon: CodeBracketIcon,
  },
  {
    name: "Contact",
    description: "If interested please get in touch",
    href: "/contact-form",
    icon: AtSymbolIcon,
  },
];
// callsToAction: [
// {
//   name: "Schedule a call",
//   description: "once we already have exchanged a couple of emails",
//   href: "https://calendly.com/raw-dev/30min",
//   icon: CalendarDaysIcon,
// },
// ],

export const clientPortal = {
  name: "Client Portal",
  href: "/dashboard",
  description: "Access your dashboard",
  icon: HomeIcon,
};
