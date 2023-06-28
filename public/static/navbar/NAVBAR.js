import { AtSymbolIcon, CalendarDaysIcon } from "@heroicons/react/24/outline";

export const mainNavigation = [
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Project portfolio",
    href: "/projects",
  },
];

export const contactMe = [
  {
    name: "Email me",
    description: "if you want to learn more",
    href: "mailto:ruben.raw.dev@gmail.com",
    icon: AtSymbolIcon,
  },
  {
    name: "Schedule a call",
    description: "once we already have exchanged a couple of emails",
    href: "https://calendly.com/raw-dev/30min",
    icon: CalendarDaysIcon,
  },
];

export const clientPortal = {
  name: "Client Portal",
  href: "/dashboard",
};
