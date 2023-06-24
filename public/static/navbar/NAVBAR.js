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
    href: "mailto:ruben.raw.dev@gmail.com",
    icon: AtSymbolIcon,
  },
  {
    name: "Schedule a call",
    href: "https://calendly.com/raw-dev/30min",
    icon: CalendarDaysIcon,
  },
];

export const clientPortal = {
  name: "Client Portal",
  href: "/dashboard",
};
